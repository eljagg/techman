// Hand the "Where to look" devices to nettm: as a CSV download, or pushed straight into nettm's
// import (signed with NETTM_SECRET, the same scheme as the email inbox hook).

import express from 'express';
import crypto from 'node:crypto';
import { audit } from '../db.js';
import { config } from '../config.js';
import { NODES, SITES, nettmRows, nettmCsv } from '../seed/topology.js';

export const nettm = express.Router();
const str = (v, max) => String(v ?? '').replace(/[\u0000-\u001f]/g, ' ').trim().slice(0, max);
const IDS = new Set(NODES.map((n) => n.id));

function build(body) {
  const ids = (Array.isArray(body?.path) ? body.path : []).filter((x) => IDS.has(x)).slice(0, 60);
  const suspects = (Array.isArray(body?.suspects) ? body.suspects : []).filter((x) => IDS.has(x)).slice(0, 30);
  if (!ids.length && !suspects.length) { const e = new Error('Nothing to export. Build a plan first.'); e.status = 400; throw e; }
  const site = SITES[body?.site] ? body.site : '';
  const title = str(body?.title, 160);
  const rows = nettmRows(ids, suspects, title);
  const day = new Date().toISOString().slice(0, 10);
  return { rows, site, title, csv: nettmCsv(rows), fileName: `techman-${(site || 'central').toLowerCase()}-${day}.csv` };
}

nettm.get('/status', (req, res) => res.json({ push: Boolean(config.nettm.url && config.nettm.secret) }));

nettm.post('/csv', (req, res) => {
  try {
    const b = build(req.body);
    res.set('Content-Disposition', `attachment; filename="${b.fileName}"`).type('text/csv').send(b.csv);
  } catch (e) { res.status(e.status || 500).json({ error: e.status ? e.message : 'Export failed.' }); }
});

nettm.post('/send', async (req, res) => {
  if (!config.nettm.url || !config.nettm.secret) return res.status(503).json({ error: 'nettm is not connected. Add NETTM_URL and NETTM_SECRET in Railway.' });
  let b;
  try { b = build(req.body); } catch (e) { return res.status(e.status || 500).json({ error: e.message }); }
  const payload = JSON.stringify({
    version: 1, source: 'techman', fileName: b.fileName, fileBase64: Buffer.from(b.csv).toString('base64'),
    issue: {
      title: b.title, site: b.site, siteName: SITES[b.site]?.name || '', glpi: str(req.body?.glpi, 30), summary: str(req.body?.summary, 600),
      suspects: b.rows.filter((r) => r._suspect).map((r) => r.Hostname),
    },
    sentAt: new Date().toISOString(),
  });
  const ts = String(Date.now());
  const sig = crypto.createHmac('sha256', config.nettm.secret).update(`${ts}.${payload}`).digest('hex');
  const headers = { 'content-type': 'application/json', 'x-techman-ts': ts, 'x-techman-sig': sig };
  if (config.nettm.cfId && config.nettm.cfSecret) { headers['CF-Access-Client-Id'] = config.nettm.cfId; headers['CF-Access-Client-Secret'] = config.nettm.cfSecret; }
  let r, data;
  try {
    r = await fetch(`${config.nettm.url.replace(/\/$/, '')}/api/integrations/techman/import`, { method: 'POST', headers, body: payload, signal: AbortSignal.timeout(60000) });
    data = await r.json().catch(() => ({}));
  } catch {
    return res.status(502).json({ error: 'nettm could not be reached. Check NETTM_URL and that nettm is running.' });
  }
  if (!r.ok) {
    const why = r.status === 401 ? 'nettm rejected the signature. NETTM_SECRET must match TECHMAN_SHARED_SECRET in nettm.'
      : r.status === 404 ? 'nettm does not have the techman import yet (see the nettm request document).'
      : r.status === 403 ? 'Blocked before reaching nettm (Cloudflare Access?). Add NETTM_CF_CLIENT_ID / NETTM_CF_CLIENT_SECRET.'
      : data.error || `nettm answered ${r.status}.`;
    return res.status(502).json({ error: why });
  }
  await audit('nettm_send', `${b.fileName}: ${b.rows.length} devices`, req.clientIp);
  res.json({ ok: true, devices: b.rows.length, result: data });
});
