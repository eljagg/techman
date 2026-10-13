// Encrypted document store. Files are encrypted before they reach the database and
// decrypted only in memory, for a signed-in request, when you open them.

import express from 'express';
import multer from 'multer';
import crypto from 'node:crypto';
import { q, audit } from '../db.js';
import { config } from '../config.js';
import { encryptDocument, decryptDocument, sha256Hex } from '../crypto.js';

export const documents = express.Router();

const upload = multer({
  storage: multer.memoryStorage(), // never written to disk unencrypted
  limits: { fileSize: config.maxUploadMb * 1024 * 1024, files: 1, fields: 10 },
});

const clean = (s, max) => String(s ?? '').trim().slice(0, max);

documents.get('/', async (req, res, next) => {
  try {
    const { rows } = await q(
      `SELECT id, title, code, language, filename, size_bytes, sha256, key_id, created_at
       FROM documents ORDER BY code NULLS LAST, language, created_at`);
    res.json(rows);
  } catch (e) { next(e); }
});

documents.post('/', (req, res, next) => {
  upload.single('file')(req, res, async (err) => {
    try {
      if (err) {
        const msg = err.code === 'LIMIT_FILE_SIZE' ? `The file is larger than ${config.maxUploadMb} MB.` : 'The upload failed.';
        return res.status(400).json({ error: msg });
      }
      const f = req.file;
      if (!f) return res.status(400).json({ error: 'Choose a PDF file to upload.' });
      if (f.buffer.subarray(0, 5).toString('latin1') !== '%PDF-') {
        return res.status(400).json({ error: 'Only PDF files can be uploaded.' });
      }
      const title = clean(req.body?.title, 200);
      const code = clean(req.body?.code, 60) || null;
      const language = ['en', 'es'].includes(req.body?.language) ? req.body.language : null;
      if (!title || !language) return res.status(400).json({ error: 'Give the document a title and choose its language.' });

      const id = crypto.randomUUID();
      const enc = encryptDocument(config.fileMasterKey, f.buffer, id);
      const filename = clean(f.originalname, 200).replace(/[^\w.\- ]+/g, '_') || 'document.pdf';
      await q(
        `INSERT INTO documents (id, title, code, language, filename, size_bytes, sha256, iv, tag, ciphertext,
           wrap_iv, wrap_tag, wrapped_key, key_id)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)`,
        [id, title, code, language, filename, f.size, sha256Hex(f.buffer), enc.iv, enc.tag, enc.ciphertext,
          enc.wrapIv, enc.wrapTag, enc.wrappedKey, enc.keyId]
      );
      f.buffer.fill(0);
      await audit('doc_upload', `${title} (${language})`, req.clientIp);
      res.json({ ok: true, id });
    } catch (e) { next(e); }
  });
});

documents.get('/:id/view', async (req, res, next) => {
  try {
    if (!/^[0-9a-f-]{36}$/.test(req.params.id)) return res.status(404).send('Not found');
    const { rows: [row] } = await q(`SELECT * FROM documents WHERE id = $1`, [req.params.id]);
    if (!row) return res.status(404).send('Not found');
    let plain;
    try {
      plain = decryptDocument(config.fileMasterKey, row);
    } catch {
      await audit('doc_decrypt_failed', row.title, req.clientIp);
      return res.status(500).type('text').send(
        'This document could not be decrypted. Either FILE_MASTER_KEY has changed or the stored data was altered.');
    }
    await audit('doc_view', row.title, req.clientIp);
    // The browser's own PDF viewer needs to run here, so the page CSP is relaxed for this response only.
    res.removeHeader('Content-Security-Policy');
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': `inline; filename="${row.filename.replace(/"/g, '')}"`,
      'Cache-Control': 'no-store, private',
      'X-Content-Type-Options': 'nosniff',
    });
    res.send(plain);
  } catch (e) { next(e); }
});

documents.delete('/:id', async (req, res, next) => {
  try {
    if (req.body?.confirm !== 'DELETE') return res.status(400).json({ error: 'Type DELETE to confirm.' });
    const { rows } = await q(`DELETE FROM documents WHERE id = $1 RETURNING title`, [req.params.id]);
    if (!rows[0]) return res.status(404).json({ error: 'Document not found.' });
    await audit('doc_delete', rows[0].title, req.clientIp);
    res.json({ ok: true });
  } catch (e) { next(e); }
});
