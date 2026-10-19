// Your own notes and real fixes. Encrypted at rest; decrypted into memory so the AI can
// search them together with the documents (they appear as "My notes and fixes").

import express from 'express';
import crypto from 'node:crypto';
import { q, audit } from '../db.js';
import { config } from '../config.js';
import { encryptDocument, decryptDocument } from '../crypto.js';
import { setNotes } from '../ai/kb.js';

export const notes = express.Router();
const str = (v, max) => String(v ?? '').replace(/[\u0000-\u0008\u000b-\u001f]/g, ' ').trim().slice(0, max);
const KINDS = ['note', 'fix', 'answer', 'plan'];

async function readAll() {
  const { rows } = await q(`SELECT * FROM notes ORDER BY created_at DESC`);
  const out = [];
  for (const r of rows) {
    try {
      const body = JSON.parse(decryptDocument(config.fileMasterKey, r).toString('utf8'));
      out.push({ id: r.id, kind: r.kind, created_at: r.created_at, ...body });
    } catch { out.push({ id: r.id, kind: r.kind, created_at: r.created_at, title: '(could not decrypt)', text: '' }); }
  }
  return out;
}
export async function loadNotesIntoIndex() {
  const list = await readAll();
  setNotes(list.map((n) => ({ id: n.id, date: new Date(n.created_at).toISOString().slice(0, 10), title: `${n.kind === 'fix' ? 'Real fix: ' : ''}${n.title}`, text: [n.text, n.site ? `Site: ${n.site}` : '', n.tags?.length ? `Tags: ${n.tags.join(', ')}` : ''].filter(Boolean).join('\n') })));
  return list.length;
}

notes.get('/', async (req, res, next) => { try { res.json(await readAll()); } catch (e) { next(e); } });

notes.post('/', async (req, res, next) => {
  try {
    const kind = KINDS.includes(req.body?.kind) ? req.body.kind : 'note';
    const title = str(req.body?.title, 200), text = str(req.body?.text, 20000);
    if (!title || !text) return res.status(400).json({ error: 'Give the note a title and some text.' });
    const body = { title, text, site: str(req.body?.site, 80), tags: (Array.isArray(req.body?.tags) ? req.body.tags : []).map((t) => str(t, 40)).filter(Boolean).slice(0, 10) };
    const id = crypto.randomUUID();
    const enc = encryptDocument(config.fileMasterKey, Buffer.from(JSON.stringify(body)), id);
    await q(`INSERT INTO notes (id, kind, iv, tag, ciphertext, wrap_iv, wrap_tag, wrapped_key, key_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
      [id, kind, enc.iv, enc.tag, enc.ciphertext, enc.wrapIv, enc.wrapTag, enc.wrappedKey, enc.keyId]);
    await loadNotesIntoIndex();
    await audit('note_add', `${kind}: ${title.slice(0, 80)}`, req.clientIp);
    res.json({ ok: true, id });
  } catch (e) { next(e); }
});

notes.delete('/:id', async (req, res, next) => {
  try {
    if (!/^[0-9a-f-]{36}$/.test(req.params.id)) return res.status(404).json({ error: 'Not found.' });
    const { rowCount } = await q(`DELETE FROM notes WHERE id = $1`, [req.params.id]);
    if (!rowCount) return res.status(404).json({ error: 'Not found.' });
    await loadNotesIntoIndex();
    await audit('note_delete', req.params.id, req.clientIp);
    res.json({ ok: true });
  } catch (e) { next(e); }
});
