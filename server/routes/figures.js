// Images from the documents ("figures"). They arrive as .tvpack files built from the
// source documents, are encrypted per figure before they reach the database, and are
// decrypted in memory only for a signed-in request.
//
// .tvpack format: "TMVP1\n" | uint32 BE header length | header JSON | image bytes.
// Header: { version: 1, pack, figures: [{ key, doc, page, sec, title, note, ord, w, h,
//           full: [offset, length], thumb: [offset, length] }] }  (offsets into the image bytes)

import express from 'express';
import multer from 'multer';
import crypto from 'node:crypto';
import { q, pool, audit } from '../db.js';
import { config } from '../config.js';
import { encryptFigure, decryptFigure } from '../crypto.js';
import { SOURCES } from '../seed/sources.js';

export const figures = express.Router();

const MAGIC = Buffer.from('TMVP1\n');
const MAX_FIGURES = 2000;
const MAX_IMAGE = 8 * 1024 * 1024;
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: config.maxPackMb * 1024 * 1024, files: 1, fields: 5 },
});

const str = (v, max) => String(v ?? '').replace(/[\u0000-\u001f]/g, ' ').trim().slice(0, max);
const isJpeg = (b) => b.length > 4 && b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff;

function parsePack(buf) {
  if (buf.length < 10 || !buf.subarray(0, MAGIC.length).equals(MAGIC)) throw new Error('This is not a Techman visuals pack (.tvpack).');
  const hlen = buf.readUInt32BE(MAGIC.length);
  const start = MAGIC.length + 4;
  if (hlen <= 0 || start + hlen > buf.length) throw new Error('The pack header is damaged.');
  let header;
  try { header = JSON.parse(buf.subarray(start, start + hlen).toString('utf8')); } catch { throw new Error('The pack header is damaged.'); }
  if (header?.version !== 1 || !Array.isArray(header.figures)) throw new Error('Unsupported pack version.');
  if (header.figures.length > MAX_FIGURES) throw new Error('Too many images in one pack.');
  const data = buf.subarray(start + hlen);
  const slice = (pair) => {
    if (!Array.isArray(pair) || pair.length !== 2) throw new Error('The pack index is damaged.');
    const [off, len] = pair.map(Number);
    if (!Number.isInteger(off) || !Number.isInteger(len) || off < 0 || len <= 0 || len > MAX_IMAGE || off + len > data.length) {
      throw new Error('The pack index is damaged.');
    }
    const b = data.subarray(off, off + len);
    if (!isJpeg(b)) throw new Error('The pack contains something that is not a JPEG image.');
    return b;
  };
  return {
    pack: str(header.pack, 60),
    figures: header.figures.map((f) => {
      const key = str(f.key, 40);
      if (!/^[A-Za-z0-9][A-Za-z0-9-]{0,39}$/.test(key)) throw new Error('The pack has an invalid image key.');
      const doc = str(f.doc, 10);
      if (!SOURCES[doc]) throw new Error(`The pack refers to an unknown document (${doc}).`);
      return {
        key, doc,
        page: Math.max(0, Math.min(10000, Number(f.page) || 0)),
        sec: str(f.sec, 30), title: str(f.title, 300), note: str(f.note, 600),
        ord: Math.max(0, Math.min(100000, Number(f.ord) || 0)),
        w: Math.max(0, Math.min(20000, Number(f.w) || 0)), h: Math.max(0, Math.min(20000, Number(f.h) || 0)),
        full: slice(f.full), thumb: slice(f.thumb),
      };
    }),
  };
}

figures.get('/', async (req, res, next) => {
  try {
    const { rows } = await q(
      `SELECT fkey AS key, doc, page, sec, title, note, ord, w, h FROM figures ORDER BY ord, fkey`);
    res.json(rows);
  } catch (e) { next(e); }
});

figures.get('/:key/:variant', async (req, res, next) => {
  try {
    const { key, variant } = req.params;
    if (!/^[A-Za-z0-9-]{1,40}$/.test(key) || !['full', 'thumb'].includes(variant)) return res.status(404).send('Not found');
    const { rows: [row] } = await q(`SELECT * FROM figures WHERE fkey = $1`, [key]);
    if (!row) return res.status(404).send('Not found');
    let img;
    try {
      img = decryptFigure(config.fileMasterKey, row, variant);
    } catch {
      await audit('fig_decrypt_failed', key, req.clientIp);
      return res.status(500).type('text').send('This image could not be decrypted.');
    }
    res.set({
      'Content-Type': 'image/jpeg',
      // Kept briefly in this browser's private cache so paging through images is quick.
      'Cache-Control': 'private, max-age=900',
      'X-Content-Type-Options': 'nosniff',
    });
    res.send(img);
  } catch (e) { next(e); }
});

figures.post('/pack', (req, res, next) => {
  upload.single('file')(req, res, async (err) => {
    try {
      if (err) {
        const msg = err.code === 'LIMIT_FILE_SIZE' ? `The pack is larger than ${config.maxPackMb} MB.` : 'The upload failed.';
        return res.status(400).json({ error: msg });
      }
      if (!req.file) return res.status(400).json({ error: 'Choose a .tvpack file.' });
      let parsed;
      try { parsed = parsePack(req.file.buffer); } catch (e) { return res.status(400).json({ error: e.message }); }

      const client = await pool.connect();
      try {
        await client.query('BEGIN');
        for (const f of parsed.figures) {
          const { rows: [existing] } = await client.query(`SELECT id FROM figures WHERE fkey = $1`, [f.key]);
          const id = existing?.id || crypto.randomUUID();
          const enc = encryptFigure(config.fileMasterKey, id, f.full, f.thumb);
          await client.query(
            `INSERT INTO figures (id, fkey, doc, page, sec, title, note, ord, w, h, size_bytes, iv, tag, ciphertext,
               thumb_iv, thumb_tag, thumb_ct, wrap_iv, wrap_tag, wrapped_key, key_id, pack)
             VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22)
             ON CONFLICT (fkey) DO UPDATE SET doc=EXCLUDED.doc, page=EXCLUDED.page, sec=EXCLUDED.sec, title=EXCLUDED.title,
               note=EXCLUDED.note, ord=EXCLUDED.ord, w=EXCLUDED.w, h=EXCLUDED.h, size_bytes=EXCLUDED.size_bytes,
               iv=EXCLUDED.iv, tag=EXCLUDED.tag, ciphertext=EXCLUDED.ciphertext, thumb_iv=EXCLUDED.thumb_iv,
               thumb_tag=EXCLUDED.thumb_tag, thumb_ct=EXCLUDED.thumb_ct, wrap_iv=EXCLUDED.wrap_iv, wrap_tag=EXCLUDED.wrap_tag,
               wrapped_key=EXCLUDED.wrapped_key, key_id=EXCLUDED.key_id, pack=EXCLUDED.pack, created_at=now()`,
            [id, f.key, f.doc, f.page, f.sec, f.title, f.note, f.ord, f.w, f.h, f.full.length, enc.iv, enc.tag, enc.ciphertext,
              enc.thumbIv, enc.thumbTag, enc.thumbCt, enc.wrapIv, enc.wrapTag, enc.wrappedKey, enc.keyId, parsed.pack]);
        }
        await client.query('COMMIT');
      } catch (e) {
        await client.query('ROLLBACK').catch(() => {});
        throw e;
      } finally {
        client.release();
        req.file.buffer.fill(0);
      }
      await audit('fig_pack_upload', `${parsed.pack}: ${parsed.figures.length} images`, req.clientIp);
      res.json({ ok: true, pack: parsed.pack, count: parsed.figures.length });
    } catch (e) { next(e); }
  });
});

figures.delete('/', async (req, res, next) => {
  try {
    if (req.body?.confirm !== 'DELETE') return res.status(400).json({ error: 'Type DELETE to confirm.' });
    const { rowCount } = await q(`DELETE FROM figures`);
    await audit('fig_delete_all', `${rowCount} images`, req.clientIp);
    res.json({ ok: true, deleted: rowCount });
  } catch (e) { next(e); }
});
