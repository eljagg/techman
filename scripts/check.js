// npm test: checks the study content and code before a deploy.
// Every check prints one line; any failure exits with code 1.
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
let failed = 0;
const ok = (msg) => console.log(`  ok    ${msg}`);
const bad = (msg) => { failed++; console.log(`  FAIL  ${msg}`); };
const check = (cond, msg, detail = '') => (cond ? ok(msg) : bad(`${msg}${detail ? `: ${detail}` : ''}`));

// 1. Every JavaScript file parses.
const js = [];
const walkDir = (d) => { for (const f of fs.readdirSync(d, { withFileTypes: true })) {
  if (['node_modules', '.git'].includes(f.name)) continue;
  const p = path.join(d, f.name);
  if (f.isDirectory()) walkDir(p); else if (p.endsWith('.js')) js.push(p);
} };
walkDir(path.join(root, 'server')); walkDir(path.join(root, 'client')); walkDir(path.join(root, 'scripts'));
const syntax = js.filter((f) => { try { execFileSync(process.execPath, ['--check', f], { stdio: 'pipe' }); return false; } catch { return true; } });
check(!syntax.length, `${js.length} JavaScript files parse`, syntax.map((f) => path.relative(root, f)).join(', '));

// 2. Seed content is consistent.
const { PLAN, CARDS, QUIZ, DOC_NAMES } = await import('../server/seed/content.js');
const { LESSONS } = await import('../server/seed/lessons.js');
const { EXPLAIN } = await import('../server/seed/explanations.js');
const { GLOSSARY } = await import('../server/seed/glossary.js');
const { SOURCES, SOURCE_GROUPS } = await import('../server/seed/sources.js');
const pics = new Set(Object.keys(EXPLAIN));

const idx = PLAN.map((p) => p.idx);
check(new Set(idx).size === idx.length && idx.every((n, i) => n === i + 1), `plan sessions numbered 1–${idx.length}`, idx.join(','));
check(idx.every((n) => LESSONS[n]?.steps?.length), 'every plan session has a lesson with steps', idx.filter((n) => !LESSONS[n]?.steps?.length).join(','));

const missingFigs = [];
for (const [n, l] of Object.entries(LESSONS)) for (const s of l.steps) for (const f of s.figs || []) if (!pics.has(f)) missingFigs.push(`lesson ${n}: ${f}`);
for (const p of PLAN) for (const sel of p.figs || []) if (sel.startsWith('key:') && !pics.has(sel.slice(4))) missingFigs.push(`plan ${p.idx}: ${sel}`);
check(!missingFigs.length, 'every picture used in lessons and plans exists', missingFigs.slice(0, 8).join('; '));

const badSteps = [];
for (const [n, l] of Object.entries(LESSONS)) l.steps.forEach((s, i) => { if (!s.title || (!s.figs?.length && !s.diagram && !s.do?.length)) badSteps.push(`${n}.${i + 1}`); });
check(!badSteps.length, 'every lesson step has a title and something to show', badSteps.join(','));

const cardKeys = CARDS.map((c) => c.key);
check(new Set(cardKeys).size === cardKeys.length, `${CARDS.length} cards have unique keys`);
check(CARDS.every((c) => DOC_NAMES[c.doc] && c.front && c.back), 'every card has a deck, a front and a back');
const badQ = QUIZ.filter((x) => !DOC_NAMES[x.doc] || x.options.length < 2 || !(x.answer >= 0 && x.answer < x.options.length) || new Set(x.options).size !== x.options.length);
check(!badQ.length, `${QUIZ.length} quiz questions have valid options and answers`, badQ.map((x) => x.key).join(','));

const groupCodes = new Set(SOURCE_GROUPS.flatMap((g) => g.codes));
check(Object.keys(SOURCES).every((c) => groupCodes.has(c)), 'every source belongs to a group');
const badGl = GLOSSARY.filter((g) => !g.abbr || !g.meaning || (g.docs || []).some((d) => !SOURCES[d]));
check(!badGl.length, `${GLOSSARY.length} glossary entries refer to known documents`, badGl.slice(0, 5).map((g) => g.abbr).join(','));
const abbrs = GLOSSARY.map((g) => g.abbr);
check(new Set(abbrs).size === abbrs.length, 'glossary abbreviations are unique', abbrs.filter((a, i) => abbrs.indexOf(a) !== i).join(','));
check(Object.keys(EXPLAIN).every((k) => SOURCES[k.split('-')[0]] || /^[A-Z0-9]+-/.test(k)), `${pics.size} picture explanations have keys`);

// 3. Screen text list for translation parses.
try { const ui = JSON.parse(fs.readFileSync(path.join(root, 'server/seed/ui-strings.json'), 'utf8')); check(Array.isArray(ui) && ui.length > 100, `${ui.length} screen texts listed for translation`); }
catch (e) { bad(`ui-strings.json: ${e.message}`); }

console.log(failed ? `\n${failed} check(s) failed.` : '\nAll checks passed.');
process.exit(failed ? 1 : 0);
