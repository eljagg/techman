// Verifies the Cloudflare Access JWT on every request (except /healthz).
//
// Why this matters: Cloudflare Access only protects traffic that goes through your
// Cloudflare-proxied domain. Railway also serves the app on *.up.railway.app, which
// does not pass through Cloudflare. Checking the signed Access token inside the app
// means a request that did not come through Access is rejected wherever it arrives.

import { createRemoteJWKSet, jwtVerify } from 'jose';
import { config } from './config.js';

let jwks = null;
function getJwks() {
  if (!jwks) jwks = createRemoteJWKSet(new URL(`https://${config.cf.teamDomain}/cdn-cgi/access/certs`));
  return jwks;
}

function readCookie(req, name) {
  const raw = req.headers.cookie || '';
  for (const part of raw.split(';')) {
    const i = part.indexOf('=');
    if (i > -1 && part.slice(0, i).trim() === name) return decodeURIComponent(part.slice(i + 1).trim());
  }
  return null;
}

const DENIED = `<!doctype html><meta charset="utf-8"><title>Access denied</title>
<body style="font-family:system-ui;padding:40px;max-width:560px">
<h1>Access denied</h1><p>This address only works through the protected domain.</p></body>`;

export function cfAccess() {
  return async (req, res, next) => {
    if (config.cf.disabled) {
      req.clientIp = req.ip;
      req.cfEmail = 'local-dev';
      return next();
    }
    const token = req.headers['cf-access-jwt-assertion'] || readCookie(req, 'CF_Authorization');
    if (!token) return res.status(403).type('html').send(DENIED);
    try {
      const { payload } = await jwtVerify(token, getJwks(), {
        issuer: `https://${config.cf.teamDomain}`,
        audience: config.cf.aud,
      });
      const email = String(payload.email || '').toLowerCase();
      if (config.cf.allowedEmail && email !== config.cf.allowedEmail) {
        return res.status(403).type('html').send(DENIED);
      }
      req.cfEmail = email;
      // Behind Cloudflare, the visitor's address is in CF-Connecting-IP.
      req.clientIp = req.headers['cf-connecting-ip'] || req.ip;
      return next();
    } catch (err) {
      console.warn('Cloudflare Access token rejected:', err.code || err.message);
      return res.status(403).type('html').send(DENIED);
    }
  };
}
