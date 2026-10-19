// Issue inbox. Emails sent to your inbox address (via a Cloudflare Email Worker) or pasted
// in by you are stored encrypted, read by the AI to pull out the problem, the site and
// the timing, and listed on "Fix an issue" ready to build a plan.

import express from 'express';
import crypto from 'node:crypto';
import PostalMime from 'postal-mime';
import { q, audit } from '../db.js';
import { config } from '../config.js';
import { encryptDocument, decryptDocument } from '../crypto.js';
import { aiEnabled } from '../ai/claude.js';
import { triageText, buildIssuePlan } from './ai.js';

const str = (v, max) => String(v ?? '').replace(/[\u0000-\u0008\u000b-\u001f]/g, ' ').trim().slice(0, max);
const enc = (id, obj) => encryptDocument(config.fileMasterKey, Buffer.from(JSON.stringify(obj)), id);
const dec = (row) => JSON.parse(decryptDocument(config.fileMasterKey, row).toString('utf8'));

async function saveItem(id, source, data, status = 'new', site = null, priority = null) {
  const e = enc(id, data);
  await q(`INSERT INTO inbox_items (id, source, status, site, priority, iv, tag, ciphertext, wrap_iv, wrap_tag, wrapped_key, key_id)
           VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)
           ON CONFLICT (id) DO UPDATE SET status=EXCLUDED.status, site=EXCLUDED.site, priority=EXCLUDED.priority, iv=EXCLUDED.iv, tag=EXCLUDED.tag,
             ciphertext=EXCLUDED.ciphertext, wrap_iv=EXCLUDED.wrap_iv, wrap_tag=EXCLUDED.wrap_tag, wrapped_key=EXCLUDED.wrapped_key, key_id=EXCLUDED.key_id`,
  [id, source, status, site, priority, e.iv, e.tag, e.ciphertext, e.wrapIv, e.wrapTag, e.wrappedKey, e.keyId]);
}
async function getItem(id) {
  const { rows: [r] } = await q(`SELECT * FROM inbox_items WHERE id = $1`, [id]);
  return r ? { row: r, data: dec(r) } : null;
}

// Triage (and optionally build the plan) in the background, so the email sender is never kept waiting.
async function process(id) {
  const it = await getItem(id); if (!it) return;
  const d = it.data;
  delete d.error; delete d.plan; // a re-read starts clean
  try {
    if (!aiEnabled()) { await saveItem(id, it.row.source, d, 'new'); return; }
    d.triage = await triageText({ from: d.from, subject: d.subject, text: d.text });
    const status = d.triage.is_issue ? 'new' : 'not-an-issue';
    await saveItem(id, it.row.source, d, status, d.triage.site, d.triage.priority);
    const { rows: [auto] } = await q(`SELECT value FROM app_state WHERE key = 'inbox_autoplan'`);
    if (d.triage.is_issue && auto?.value === 'on') {
      try {
        d.plan = await buildIssuePlan({ symptom: d.triage.symptom, site: d.triage.site, when: d.triage.when, tried: d.triage.tried }, 'inbox');
        await saveItem(id, it.row.source, d, 'planned', d.triage.site, d.triage.priority);
      } catch (e) {
        // The triage is still useful: keep the item as "new" and say why there is no plan yet.
        d.error = `No automatic plan: ${e.status ? e.message : 'the AI request failed.'}`;
        if (!e.status) console.error('Inbox autoplan failed:', e);
        await saveItem(id, it.row.source, d, 'new', d.triage.site, d.triage.priority);
      }
    }
  } catch (e) {
    d.error = e.status ? e.message : 'The AI could not read this message.';
    if (!e.status) console.error('Inbox processing failed:', e);
    await saveItem(id, it.row.source, d, 'error', null, null).catch(() => {});
  }
}

async function ingest(source, { from, subject, text, receivedFor }, ip) {
  const id = crypto.randomUUID();
  await saveItem(id, source, { from: str(from, 200), subject: str(subject, 300), text: str(text, 30000), to: str(receivedFor, 200) }, 'triaging');
  await audit('inbox_received', `${source}: ${str(subject, 100)}`, ip);
  process(id).catch(() => {});
  return id;
}

async function parseRaw(raw) {
  const m = await PostalMime.parse(raw);
  let text = m.text || '';
  if (!text && m.html) text = m.html.replace(/<style[\s\S]*?<\/style>|<script[\s\S]*?<\/script>/gi, ' ').replace(/<br\s*\/?>|<\/p>|<\/div>|<\/tr>/gi, '\n').replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
  return { from: m.from?.address || '', fromName: m.from?.name || '', subject: m.subject || '', text: text.replace(/[ \t]+/g, ' ').replace(/\n{3,}/g, '\n\n').trim() };
}

// ---------- public webhook for the Cloudflare Email Worker (mounted before Cloudflare Access) ----------
export const inboxHook = express.Router();
inboxHook.post('/email', express.json({ limit: '4mb' }), async (req, res) => {
  try {
    if (!config.inbox.secret) return res.status(404).end();
    const ts = String(req.get('x-techman-ts') || ''), sig = String(req.get('x-techman-sig') || '');
    const raw = typeof req.body?.raw === 'string' ? req.body.raw : '';
    if (!/^\d{10,13}$/.test(ts) || !/^[0-9a-f]{64}$/.test(sig) || !raw) return res.status(401).end();
    if (Math.abs(Date.now() - Number(ts)) > 5 * 60 * 1000) return res.status(401).end();
    const expect = crypto.createHmac('sha256', config.inbox.secret).update(`${ts}.${raw}`).digest('hex');
    if (!crypto.timingSafeEqual(Buffer.from(expect), Buffer.from(sig))) { await audit('inbox_bad_signature', '', req.clientIp); return res.status(401).end(); }
    const mail = await parseRaw(Buffer.from(raw, 'base64'));
    const allowed = config.inbox.allowedFrom;
    const fromL = mail.from.toLowerCase();
    if (allowed.length && !allowed.some((a) => (a.startsWith('@') ? fromL.endsWith(a) : fromL === a))) {
      await audit('inbox_rejected_sender', fromL, req.clientIp);
      return res.status(202).json({ ok: true });
    }
    const id = await ingest('email', { from: mail.fromName ? `${mail.fromName} <${mail.from}>` : mail.from, subject: mail.subject, text: mail.text, receivedFor: req.body?.to }, req.clientIp);
    res.status(202).json({ ok: true, id });
  } catch (e) { console.error('Inbox webhook failed:', e.message); res.status(400).json({ error: 'Could not read the message.' }); }
});

// ---------- signed-in API ----------
export const inbox = express.Router();

inbox.get('/', async (req, res, next) => {
  try {
    const { rows } = await q(`SELECT * FROM inbox_items WHERE status <> 'archived' ORDER BY received_at DESC LIMIT 50`);
    const { rows: [auto] } = await q(`SELECT value FROM app_state WHERE key = 'inbox_autoplan'`);
    res.json({
      autoplan: auto?.value === 'on', webhook: Boolean(config.inbox.secret),
      items: rows.map((r) => { let d = {}; try { d = dec(r); } catch { d = { subject: '(could not decrypt)' }; }
        return { id: r.id, received_at: r.received_at, source: r.source, status: r.status, site: r.site, priority: r.priority,
          from: d.from, subject: d.subject, text: d.text, triage: d.triage || null, plan: d.plan || null, error: d.error || null }; }),
    });
  } catch (e) { next(e); }
});
inbox.get('/count', async (req, res, next) => {
  try { const { rows: [r] } = await q(`SELECT count(*)::int AS n FROM inbox_items WHERE status IN ('new','planned','triaging')`); res.json({ n: r.n }); }
  catch (e) { next(e); }
});
inbox.post('/import', async (req, res, next) => {
  try {
    let mail;
    if (typeof req.body?.eml === 'string' && req.body.eml) mail = await parseRaw(Buffer.from(req.body.eml, 'base64'));
    else mail = { from: str(req.body?.from, 200), subject: str(req.body?.subject, 300) || 'Pasted message', text: str(req.body?.text, 30000) };
    if (!mail.text) return res.status(400).json({ error: 'Paste the message text or choose an .eml file.' });
    const id = await ingest('pasted', mail, req.clientIp);
    res.json({ ok: true, id });
  } catch (e) { next(e); }
});
inbox.post('/:id/status', async (req, res, next) => {
  try {
    const status = ['new', 'opened', 'done', 'archived'].includes(req.body?.status) ? req.body.status : null;
    if (!status || !/^[0-9a-f-]{36}$/.test(req.params.id)) return res.status(400).json({ error: 'Invalid.' });
    await q(`UPDATE inbox_items SET status = $2 WHERE id = $1`, [req.params.id, status]);
    res.json({ ok: true });
  } catch (e) { next(e); }
});
inbox.post('/:id/retry', async (req, res, next) => {
  try {
    if (!/^[0-9a-f-]{36}$/.test(req.params.id)) return res.status(400).json({ error: 'Invalid.' });
    process(req.params.id).catch(() => {});
    res.json({ ok: true });
  } catch (e) { next(e); }
});
inbox.post('/settings', async (req, res, next) => {
  try {
    await q(`INSERT INTO app_state (key, value) VALUES ('inbox_autoplan',$1) ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value`, [req.body?.autoplan ? 'on' : 'off']);
    res.json({ ok: true });
  } catch (e) { next(e); }
});
