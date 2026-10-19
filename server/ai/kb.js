// In-memory search over the knowledge pack (document text) and the pictures.
// The pack is stored encrypted in Postgres and decrypted into memory only when the
// server starts or a new pack is uploaded. Ranking is BM25: no external services.

import zlib from 'node:zlib';
import { q } from '../db.js';
import { config } from '../config.js';
import { decryptDocument } from '../crypto.js';
import { EXPLAIN } from '../seed/explanations.js';
import { GLOSSARY } from '../seed/glossary.js';
import { SOURCES } from '../seed/sources.js';

const STOP = new Set(('a an and are as at be by can do does for from has have how i if in into is it its me my of on or our so that the their them then there these this to was we what when where which who why will with you your not no yes should would could also than such more most other some any all each per via using use used').split(' '));
// Light stemming so "escalate", "escalating" and "escalation" match each other.
const stem = (t) => (t.length > 5 ? t.replace(/(ations?|ings?|ments?|ed|es|ions?|ers?|s)$/, '').replace(/e$/, '') : t);
const tok = (s) => String(s || '').toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '')
  .split(/[^a-z0-9_.\-/]+/).flatMap((t) => [t, ...t.split(/[.\-/_]/)]).filter((t) => t.length > 1 && !STOP.has(t)).map(stem);

const ABBR = new Map(GLOSSARY.map((g) => [g.abbr.toLowerCase(), `${g.term || ''} ${g.abbr}`]));
function expand(query) {
  const extra = [];
  for (const w of String(query).split(/[^A-Za-z0-9]+/)) { const e = ABBR.get(w.toLowerCase()); if (e) extra.push(e); }
  return `${query} ${extra.join(' ')}`;
}

function bm25(docs) {
  const N = docs.length, df = new Map(), lens = [], tfs = [];
  for (const d of docs) {
    const tf = new Map(); const toks = tok(d);
    for (const t of toks) tf.set(t, (tf.get(t) || 0) + 1);
    for (const t of tf.keys()) df.set(t, (df.get(t) || 0) + 1);
    tfs.push(tf); lens.push(toks.length || 1);
  }
  const avg = lens.reduce((a, b) => a + b, 0) / (N || 1);
  return (query, filter) => {
    const qt = [...new Set(tok(query))];
    const scores = [];
    for (let i = 0; i < N; i++) {
      if (filter && !filter(i)) continue;
      let s = 0;
      for (const t of qt) {
        const f = tfs[i].get(t); if (!f) continue;
        const idf = Math.log(1 + (N - df.get(t) + 0.5) / (df.get(t) + 0.5));
        s += idf * (f * 2.2) / (f + 1.2 * (0.25 + 0.75 * lens[i] / avg));
      }
      if (s > 0) scores.push([i, s]);
    }
    return scores.sort((a, b) => b[1] - a[1]);
  };
}

let CHUNKS = [], chunkSearch = null, FIGMETA = [], figSearch = null;
export const kbStatus = () => ({ chunks: CHUNKS.length, figures: FIGMETA.length });

export async function loadKnowledge() {
  const { rows: [row] } = await q(`SELECT * FROM kb_pack WHERE name = 'knowledge'`);
  if (!row) { CHUNKS = []; chunkSearch = null; return 0; }
  const raw = decryptDocument(config.fileMasterKey, row);
  const pack = JSON.parse(zlib.gunzipSync(raw, { maxOutputLength: 50 * 1024 * 1024 }).toString('utf8'));
  CHUNKS = pack.chunks.filter((c) => SOURCES[c.doc]);
  chunkSearch = bm25(CHUNKS.map((c) => `${c.title} ${c.title} ${c.text}`));
  return CHUNKS.length;
}

export async function loadFigureIndex() {
  const { rows } = await q(`SELECT fkey AS key, doc, page, sec, title, note FROM figures ORDER BY ord`);
  FIGMETA = rows.map((r) => ({ ...r, ...(EXPLAIN[r.key] || {}) }));
  figSearch = bm25(FIGMETA.map((f) => `${f.title} ${f.title} ${f.what || ''} ${(f.terms || []).join(' ')} ${f.note || ''}`));
  return FIGMETA.length;
}

export function searchChunks(query, { k = 8, docs = null } = {}) {
  if (!chunkSearch) return [];
  const filter = docs ? (i) => docs.includes(CHUNKS[i].doc) : null;
  return chunkSearch(expand(query), filter).slice(0, k).map(([i]) => CHUNKS[i]);
}
export function searchFigures(query, { k = 8, docs = null } = {}) {
  if (!figSearch) return [];
  const filter = docs ? (i) => docs.includes(FIGMETA[i].doc) : null;
  return figSearch(expand(query), filter).slice(0, k).map(([i]) => FIGMETA[i]);
}
export const figureByKey = (key) => FIGMETA.find((f) => f.key === key);
export function sampleChunks(doc, n = 10) {
  const list = CHUNKS.filter((c) => c.doc === doc && c.text.length > 300);
  const out = [];
  const step = Math.max(1, Math.floor(list.length / n));
  for (let i = Math.floor(Math.random() * step); i < list.length && out.length < n; i += step) out.push(list[i]);
  return out;
}
export function parseKnowledgePack(buf) {
  let pack;
  try { pack = JSON.parse(zlib.gunzipSync(buf, { maxOutputLength: 50 * 1024 * 1024 }).toString('utf8')); }
  catch { throw new Error('This is not a Techman knowledge pack (.tkpack).'); }
  if (pack?.kind !== 'techman-knowledge' || pack.version !== 1 || !Array.isArray(pack.chunks)) throw new Error('Unsupported knowledge pack.');
  if (pack.chunks.length > 20000) throw new Error('Knowledge pack is too large.');
  for (const c of pack.chunks) {
    if (typeof c.text !== 'string' || typeof c.doc !== 'string' || !SOURCES[c.doc]) throw new Error('Knowledge pack contains an unknown document.');
  }
  return pack;
}
