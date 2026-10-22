// Second layer: password + authenticator code, server-side sessions, lockouts.

import crypto from 'node:crypto';
import { config } from './config.js';
import { q, audit } from './db.js';
import { verifyPassword, verifyTotp, randomToken } from './crypto.js';

export const COOKIE = config.isProd ? '__Host-techman_sid' : 'techman_sid';
const PER_IP_FAILS = 5;        // within 15 minutes
const GLOBAL_FAILS = 20;       // within 60 minutes, from any address

const hashToken = (t) => crypto.createHash('sha256').update(t).digest('hex');

function readCookie(req, name) {
  const raw = req.headers.cookie || '';
  for (const part of raw.split(';')) {
    const i = part.indexOf('=');
    if (i > -1 && part.slice(0, i).trim() === name) return decodeURIComponent(part.slice(i + 1).trim());
  }
  return null;
}

function setCookie(res, value, maxAgeSec) {
  const attrs = [
    `${COOKIE}=${value}`, 'Path=/', 'HttpOnly', 'SameSite=Strict', `Max-Age=${maxAgeSec}`,
  ];
  if (config.isProd) attrs.push('Secure');
  res.append('Set-Cookie', attrs.join('; '));
}

async function loadSession(req) {
  const token = readCookie(req, COOKIE);
  if (!token || token.length > 100) return null;
  const { rows } = await q(
    `SELECT token_hash, expires_at, last_seen_at, role FROM sessions
     WHERE token_hash = $1 AND expires_at > now()
       AND last_seen_at > now() - ($2 || ' minutes')::interval`,
    [hashToken(token), String(config.idleMinutes)]
  );
  if (!rows[0]) return null;
  const s = rows[0];
  if (Date.now() - new Date(s.last_seen_at).getTime() > 60_000) {
    await q(`UPDATE sessions SET last_seen_at = now() WHERE token_hash = $1`, [s.token_hash]);
  }
  return s;
}

// For HTML pages: redirect to /login. For /api: 401 JSON.
export function requireSession() {
  return async (req, res, next) => {
    try {
      const s = await loadSession(req);
      // An owner session only works for the owner's Cloudflare Access identity.
      if (s && (s.role === 'demo' || req.cfOwner)) { req.session = s; req.role = s.role; return next(); }
      if (req.path.startsWith('/api/')) return res.status(401).json({ error: 'Your session has ended. Sign in again.' });
      return res.redirect(302, '/login');
    } catch (e) { next(e); }
  };
}

export async function hasSession(req) {
  return Boolean(await loadSession(req));
}

// CSRF defence for state-changing requests: SameSite=Strict cookie, plus a custom
// header (which a cross-site form cannot send) and an Origin check.
export function csrfGuard() {
  return (req, res, next) => {
    if (['GET', 'HEAD', 'OPTIONS'].includes(req.method)) return next();
    if (req.get('X-Requested-With') !== 'techman') return res.status(403).json({ error: 'Request blocked.' });
    const origin = req.get('Origin');
    if (origin) {
      let host;
      try { host = new URL(origin).host; } catch { host = ''; }
      if (host !== req.get('Host')) return res.status(403).json({ error: 'Request blocked.' });
    }
    next();
  };
}

export async function loginHandler(req, res, next) {
  try {
    const ip = req.clientIp || req.ip;
    const { rows: [counts] } = await q(
      `SELECT
         count(*) FILTER (WHERE ip = $1 AND at > now() - interval '15 minutes') AS ip_fails,
         count(*) FILTER (WHERE at > now() - interval '60 minutes') AS all_fails
       FROM login_attempts WHERE success = false`,
      [ip]
    );
    if (Number(counts.ip_fails) >= PER_IP_FAILS || Number(counts.all_fails) >= GLOBAL_FAILS) {
      await audit('login_locked', null, ip);
      return res.status(429).json({ error: 'Too many failed attempts. Wait 15 minutes and try again.' });
    }

    const { password, code } = req.body || {};

    // Demo sign-in: password only, read-only role, shorter session. Used when the demo is
    // switched on and either no authenticator code was typed or the visitor is a demo email.
    if (config.demo.passwordHash && (!req.cfOwner || !String(code || '').trim())) {
      let demoOk = false;
      try { demoOk = typeof password === 'string' && password.length <= 256 && verifyPassword(password, config.demo.passwordHash); } catch { demoOk = false; }
      if (!demoOk) {
        await q(`INSERT INTO login_attempts (ip, success) VALUES ($1, false)`, [ip]);
        await audit('login_failed', 'demo', ip);
        await new Promise((r) => setTimeout(r, 400 + Math.random() * 400));
        return res.status(401).json({ error: 'Password or code is incorrect.' });
      }
      await q(`INSERT INTO login_attempts (ip, success) VALUES ($1, true)`, [ip]);
      const token = randomToken(32);
      const maxAge = Math.round(config.demo.hours * 3600);
      await q(
        `INSERT INTO sessions (token_hash, expires_at, ip, user_agent, role)
         VALUES ($1, now() + ($2 || ' seconds')::interval, $3, $4, 'demo')`,
        [hashToken(token), String(maxAge), ip, String(req.get('User-Agent') || '').slice(0, 200)]
      );
      setCookie(res, token, maxAge);
      await audit('login_demo', req.cfEmail || null, ip);
      return res.json({ ok: true, role: 'demo' });
    }
    if (!req.cfOwner) return res.status(401).json({ error: 'Password or code is incorrect.' });
    // Both checks always run so timing does not reveal which one failed.
    let pwOk = false;
    try { pwOk = typeof password === 'string' && password.length <= 256 && verifyPassword(password, config.passwordHash); } catch { pwOk = false; }
    const step = verifyTotp(config.totpSecret, code);

    let replay = false;
    if (step !== null) {
      const { rows } = await q(`SELECT value FROM app_state WHERE key = 'last_totp_step'`);
      replay = rows[0] && Number(rows[0].value) >= step;
    }

    if (!pwOk || step === null || replay) {
      await q(`INSERT INTO login_attempts (ip, success) VALUES ($1, false)`, [ip]);
      await audit('login_failed', replay ? 'code reused' : null, ip);
      await new Promise((r) => setTimeout(r, 400 + Math.random() * 400));
      return res.status(401).json({ error: 'Password or code is incorrect.' });
    }

    await q(
      `INSERT INTO app_state (key, value) VALUES ('last_totp_step', $1)
       ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value`,
      [String(step)]
    );
    await q(`INSERT INTO login_attempts (ip, success) VALUES ($1, true)`, [ip]);

    const token = randomToken(32);
    const maxAge = Math.round(config.sessionHours * 3600);
    await q(
      `INSERT INTO sessions (token_hash, expires_at, ip, user_agent)
       VALUES ($1, now() + ($2 || ' seconds')::interval, $3, $4)`,
      [hashToken(token), String(maxAge), ip, String(req.get('User-Agent') || '').slice(0, 200)]
    );
    setCookie(res, token, maxAge);
    await audit('login_ok', req.cfEmail || null, ip);
    res.json({ ok: true });
  } catch (e) { next(e); }
}

export async function logoutHandler(req, res, next) {
  try {
    const token = readCookie(req, COOKIE);
    if (token) await q(`DELETE FROM sessions WHERE token_hash = $1`, [hashToken(token)]);
    setCookie(res, '', 0);
    await audit('logout', null, req.clientIp);
    res.json({ ok: true });
  } catch (e) { next(e); }
}

export async function logoutEverywhere(req, res, next) {
  try {
    await q(`DELETE FROM sessions`);
    setCookie(res, '', 0);
    await audit('logout_all', null, req.clientIp);
    res.json({ ok: true });
  } catch (e) { next(e); }
}
