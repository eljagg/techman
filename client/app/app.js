// Techman client. All text is inserted as text nodes (never innerHTML with data),
// so nothing stored in the database can run as script.

const view = document.getElementById('view');
let META = { docs: {}, sources: {}, sourceGroups: [], timeZone: 'America/Jamaica' };
let GLOSSARY = [];
let FIGS = [];

// ---------- helpers ----------
function h(tag, attrs, ...kids) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs || {})) {
    if (v === null || v === undefined || v === false) continue;
    if (k.startsWith('on')) el.addEventListener(k.slice(2), v);
    else if (k === 'class') el.className = v;
    else if (k === 'text') el.textContent = v;
    // CSP forbids style attributes; CSSOM assignment is allowed.
    else if (k === 'style') el.style.cssText = v;
    else el.setAttribute(k, v === true ? '' : v);
  }
  for (const kid of kids.flat()) {
    if (kid === null || kid === undefined || kid === false) continue;
    el.append(kid instanceof Node ? kid : document.createTextNode(String(kid)));
  }
  return el;
}

async function api(path, opts = {}) {
  const headers = { 'X-Requested-With': 'techman', 'X-Lang': LANG, ...(opts.headers || {}) };
  let body = opts.body;
  if (body && !(body instanceof FormData)) { headers['Content-Type'] = 'application/json'; body = JSON.stringify(body); }
  const res = await fetch(path, { method: opts.method || 'GET', headers, body, credentials: 'same-origin' });
  if (res.status === 401) { window.location.replace('/login'); throw new Error('Signed out'); }
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || (res.status >= 500
    ? `The server did not answer properly (${res.status}). The app may be restarting after a deploy; wait a minute and try again. If it keeps happening, send me the Railway deploy logs.`
    : `Request failed (${res.status}).`));
  return data;
}

const fmtDate = (d) => d ? new Date(d).toLocaleString(LOCALES[LANG] || 'en-JM', { timeZone: META.timeZone, dateStyle: 'medium', timeStyle: 'short' }) : '—';
const docName = (k) => META.docs[k] || k;
const pct = (a, b) => (b ? Math.round((a * 100) / b) : 0);

function docSelect(id, value, includeAll = true) {
  const s = h('select', { id });
  if (includeAll) s.append(h('option', { value: 'all' }, 'All documents'));
  for (const [k, v] of Object.entries(META.docs)) s.append(h('option', { value: k }, v));
  s.value = value || (includeAll ? 'all' : Object.keys(META.docs)[0]);
  return s;
}

function remember(key, value) { try { localStorage.setItem('techman:' + key, value); } catch {} }
function recall(key, fallback) { try { return localStorage.getItem('techman:' + key) || fallback; } catch { return fallback; } }

function errorBox(e) { return h('p', { class: 'error', role: 'alert' }, e.message || String(e)); }

// ---------- i18n: English, Español, Português, Français ----------
// The page is built in English. When another language is chosen, every English text the
// page shows is swapped for its translation: from the dictionary loaded at start, or, for
// text not translated yet, from /api/i18n/translate (Claude translates it once and the
// server keeps it). Keys follow the server's rules: whitespace collapsed, numbers as {0}.
// Anything inside [data-notr] (AI answers, notes, inbox emails) is never sent to the server;
// it only uses translations already in the dictionary.
const LANGS = { en: 'English', es: 'Español', pt: 'Português', fr: 'Français' };
const LOCALES = { en: 'en-JM', es: 'es-419', pt: 'pt-BR', fr: 'fr-FR' };
let LANG = recall('lang', 'en'); if (!LANGS[LANG]) LANG = 'en';
const I18N = { dict: new Map(), done: new WeakMap(), pending: new Map(), timer: null, busy: 0, warned: false, off: LANG === 'en' };
const trNorm = (s) => String(s ?? '').replace(/\s+/g, ' ').trim();
function trKey(s) {
  s = trNorm(s);
  if (s.includes('{')) return { key: s, nums: [] };
  const nums = [];
  const key = s.replace(/\d+(?:[.,:/]\d+)*/g, (m) => { nums.push(m); return `{${nums.length - 1}}`; });
  return { key, nums };
}
const trWorth = (k) => k.length >= 2 && k.length <= 4000 && /[A-Za-z]{2}/.test(k) && !/^(https?:\/\/|www\.)\S+$/.test(k) && !/^[A-Z0-9_.\-/:§{}() ]+$/.test(k);
const trFill = (t, nums) => t.replace(/\{(\d+)\}/g, (m, i) => (nums[i] !== undefined ? nums[i] : m));
const SKIP_TAGS = new Set(['SCRIPT', 'STYLE', 'CODE', 'PRE', 'KBD', 'TEXTAREA', 'ABBR', 'SVG']);
const TR_ATTRS = ['title', 'placeholder', 'aria-label'];
function trSkip(el) {
  for (let e = el; e && e !== document.body; e = e.parentElement) {
    if (SKIP_TAGS.has(e.tagName) || e.id === 'langSel' || e.classList?.contains('mono')) return true;
  }
  return false;
}
const noSend = (el) => Boolean(el.closest && el.closest('[data-notr]'));
// A text node whose parent holds only text and glossary <abbr> marks is translated as one
// unit (the whole sentence); the abbreviations are underlined again afterwards.
function trUnit(node) {
  const p = node.parentElement;
  if (p && p.querySelector(':scope > abbr.gl') && [...p.children].every((c) => c.matches('abbr.gl'))) return p;
  return node;
}
const trText = (unit) => (unit.nodeType === 3 ? unit.data : unit.textContent);
function trApply(unit, key, nums, raw) {
  const t = I18N.dict.get(key); if (!t) return false;
  const out = trFill(t, nums);
  if (unit.nodeType === 3) {
    const v = raw.match(/^\s*/)[0] + out + raw.match(/\s*$/)[0];
    if (unit.data !== v) unit.data = v;
    I18N.done.set(unit, v);
  } else {
    unit.replaceChildren(...txt(out));
    I18N.done.set(unit, unit.textContent);
  }
  return true;
}
function trQueue(key, fn) {
  if (!I18N.pending.has(key)) I18N.pending.set(key, []);
  I18N.pending.get(key).push(fn);
  clearTimeout(I18N.timer); I18N.timer = setTimeout(trFlush, 120);
}
function trConsider(unit) {
  const el = unit.nodeType === 3 ? unit.parentElement : unit;
  if (!el || trSkip(el)) return;
  const raw = trText(unit);
  if (I18N.done.get(unit) === raw) return;
  const { key, nums } = trKey(raw);
  if (!trWorth(key)) return;
  if (trApply(unit, key, nums, raw)) return;
  if (noSend(el)) return;
  trQueue(key, () => { if (unit.isConnected && trText(unit) === raw) trApply(unit, key, nums, raw); });
}
function trAttr(el, a) {
  if (trSkip(el)) return;
  const raw = el.getAttribute(a); if (!raw) return;
  if (I18N.done.get(el) === `${a}\u0000${raw}`) return;
  const { key, nums } = trKey(raw);
  if (!trWorth(key)) return;
  const set = () => { const t = I18N.dict.get(key); if (!t) return false; const v = trFill(t, nums); el.setAttribute(a, v); I18N.done.set(el, `${a}\u0000${v}`); return true; };
  if (set() || noSend(el)) return;
  trQueue(key, () => { if (el.getAttribute(a) === raw) set(); });
}
function trTree(root) {
  if (I18N.off || !root) return;
  if (root.nodeType === 3) { if (root.data.trim()) trConsider(trUnit(root)); return; }
  if (root.nodeType !== 1) return;
  const units = new Set();
  const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  for (let n = w.nextNode(); n; n = w.nextNode()) if (n.data.trim()) units.add(trUnit(n));
  units.forEach(trConsider);
  for (const a of TR_ATTRS) {
    if (root.hasAttribute(a)) trAttr(root, a);
    root.querySelectorAll(`[${a}]`).forEach((el) => trAttr(el, a));
  }
}
const trBadge = h('div', { class: 'trbadge', hidden: true, 'data-notr': '' });
document.body.append(trBadge);
async function trFlush() {
  if (!I18N.pending.size) return;
  const batch = new Map([...I18N.pending].slice(0, 250));
  for (const k of batch.keys()) I18N.pending.delete(k);
  I18N.busy++; trBadge.hidden = false; trBadge.textContent = `${LANGS[LANG]} …`;
  try {
    const r = await api('/api/i18n/translate', { method: 'POST', body: { lang: LANG, items: [...batch.keys()] } });
    for (const [k, v] of Object.entries(r.map || {})) I18N.dict.set(k, v);
  } catch (e) {
    if (!I18N.warned) { I18N.warned = true; trBadge.textContent = e.message; setTimeout(() => { trBadge.hidden = true; }, 8000); }
  }
  for (const fns of batch.values()) fns.forEach((f) => f());
  I18N.busy--;
  if (I18N.pending.size) trFlush(); else if (!I18N.busy && !I18N.warned) trBadge.hidden = true;
}
const trObserver = new MutationObserver((recs) => {
  for (const r of recs) {
    if (r.type === 'childList') r.addedNodes.forEach(trTree);
    else if (r.type === 'characterData') { if (r.target.data.trim()) trConsider(trUnit(r.target)); }
    else if (r.type === 'attributes') trAttr(r.target, r.attributeName);
  }
});
async function startI18n() {
  document.documentElement.lang = LANG;
  const sel = document.getElementById('langSel');
  if (sel) {
    sel.replaceChildren(...Object.entries(LANGS).map(([k, v]) => h('option', { value: k }, v)));
    sel.value = LANG;
    sel.addEventListener('change', () => switchLang(sel.value));
  }
  if (I18N.off) return;
  try { const d = await api(`/api/i18n/dict/${LANG}`); I18N.dict = new Map(Object.entries(d.map || {})); } catch { I18N.dict = new Map(); }
  trTree(document.body);
  trObserver.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: TR_ATTRS });
}
// The first time a language is used, its screen text is translated before the page reloads
// (a few seconds). Lessons and cards then translate as you open them, or all at once with
// "Translate everything now" on the Today page.
async function switchLang(l) {
  if (!LANGS[l] || l === LANG) return;
  remember('lang', l);
  if (l !== 'en') {
    const p = h('p', { class: 'muted' }, '…');
    const veil = h('div', { class: 'trveil', 'data-notr': '' }, h('div', { class: 'box' }, h('strong', {}, LANGS[l]), p));
    document.body.append(veil);
    try {
      const st = await api('/api/i18n/status');
      if (!(st.cached[l] > 300) && st.enabled) {
        await api('/api/i18n/prepare', { method: 'POST', body: { lang: l, scope: 'ui' } });
        for (let i = 0; i < 90; i++) {
          await new Promise((r) => setTimeout(r, 1500));
          const s = await api('/api/i18n/status'); const pr = s.prep[l];
          p.textContent = pr ? `${pr.done} / ${pr.total}` : '…';
          if (!pr || !pr.running) break;
        }
      }
    } catch { /* the page still works; text translates as it appears */ }
  }
  location.reload();
}

// ---------- glossary tooltips ----------
// Every abbreviation found in the glossary is underlined; hover (or tap) shows its meaning.
let ABBR_RE = null;
const ABBR_MAP = new Map();
function buildAbbr() {
  ABBR_MAP.clear();
  for (const g of GLOSSARY) if (g.abbr && g.abbr.length >= 2) ABBR_MAP.set(g.abbr, g);
  const keys = [...ABBR_MAP.keys()].sort((a, b) => b.length - a.length)
    .map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  ABBR_RE = keys.length ? new RegExp(`(?<![A-Za-z0-9])(${keys.join('|')})(?![A-Za-z0-9])`, 'g') : null;
}
const glossTitle = (g) => `${g.term ? g.term + ' — ' : ''}${g.meaning}`;
function txt(s) {
  s = String(s ?? '');
  if (!ABBR_RE) return [s];
  const out = []; let last = 0;
  for (const m of s.matchAll(ABBR_RE)) {
    if (m.index > last) out.push(s.slice(last, m.index));
    const g = ABBR_MAP.get(m[1]);
    out.push(h('abbr', { class: 'gl', title: glossTitle(g), tabindex: 0, 'data-abbr': m[1] }, m[1]));
    last = m.index + m[1].length;
  }
  if (last < s.length) out.push(s.slice(last));
  return out;
}
const pop = h('div', { class: 'gpop', role: 'tooltip', hidden: true });
document.body.append(pop);
function showPop(el) {
  const g = ABBR_MAP.get(el.dataset.abbr); if (!g) return;
  pop.replaceChildren(...[h('strong', {}, g.abbr), g.term ? h('div', { class: 'gterm' }, g.term) : null, h('div', {}, g.meaning),
    h('a', { href: `#/glossary?q=${encodeURIComponent(g.abbr)}` }, 'Open in glossary')].filter(Boolean));
  pop.hidden = false;
  const r = el.getBoundingClientRect();
  const left = Math.max(8, Math.min(window.scrollX + r.left, window.scrollX + document.documentElement.clientWidth - pop.offsetWidth - 8));
  pop.style.left = `${left}px`; pop.style.top = `${window.scrollY + r.bottom + 6}px`;
}
document.addEventListener('click', (e) => {
  const a = e.target.closest && e.target.closest('abbr.gl');
  if (a) { e.preventDefault(); showPop(a); return; }
  if (!e.target.closest || !e.target.closest('.gpop')) pop.hidden = true;
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && e.target.matches && e.target.matches('abbr.gl')) showPop(e.target);
  if (e.key === 'Escape') pop.hidden = true;
});
window.addEventListener('hashchange', () => { pop.hidden = true; if (LB && LB.dlg.open) LB.dlg.close(); });

// ---------- figures (images from the documents) ----------
const srcName = (k) => META.sources[k] || k;
const figUrl = (f, v = 'thumb') => `/api/figures/${encodeURIComponent(f.key)}/${v}`;
const secMatch = (sec, p) => sec === p || sec.startsWith(p + '.');

function figsFor(selectors) {
  const out = [], seen = new Set();
  for (const s of selectors || []) {
    const [a, b] = s.split(':');
    const hits = a === 'key' ? FIGS.filter((f) => f.key === b) : FIGS.filter((f) => f.doc === a && secMatch(f.sec, b));
    for (const f of hits) if (!seen.has(f.key)) { seen.add(f.key); out.push(f); }
  }
  return out;
}
function figsForCard(c) {
  const m = /§\s*(\d+(?:\.\d+)*)/.exec(c.section || '');
  if (!m) return [];
  let s = m[1], hits = FIGS.filter((f) => f.doc === c.doc && secMatch(f.sec, s));
  if (!hits.length && s.includes('.')) { s = s.replace(/\.\d+$/, ''); hits = FIGS.filter((f) => f.doc === c.doc && secMatch(f.sec, s)); }
  return hits;
}
function figCaption(f) { return f.title || `${srcName(f.doc)} p.${f.page}`; }

function figTile(list, i) {
  const f = list[i];
  return h('button', { class: 'fig', type: 'button', onclick: () => openLightbox(list, i), title: figCaption(f) },
    h('img', { src: figUrl(f), alt: figCaption(f), loading: 'lazy', decoding: 'async', width: 240, height: f.w ? Math.round(240 * f.h / f.w) : 160 }),
    h('span', { class: 'figcap' }, figCaption(f)),
    f.what ? h('span', { class: 'figwhat muted' }, f.what) : null);
}
function figStrip(list, { max = 6, title = null, more = null } = {}) {
  if (!list.length) return null;
  const shown = list.slice(0, max);
  return h('div', { class: 'figwrap' },
    title ? h('div', { class: 'label' }, title) : null,
    h('div', { class: 'figs' }, shown.map((_, i) => figTile(list, i)),
      list.length > max ? h('button', { class: 'fig more', type: 'button', onclick: () => openLightbox(list, max) }, `+${list.length - max} more`) : null),
    more);
}

// Full-screen picture viewer: zoom (wheel, buttons, double-click, pinch), drag to pan,
// prev/next, a filmstrip of the current list and the explanation beside the picture.
let LB = null;
function buildViewer() {
  const img = h('img', { alt: '', draggable: 'false' });
  const stage = h('div', { class: 'vstage' }, img);
  const info = h('aside', { class: 'vinfo' });
  const strip = h('div', { class: 'vstrip' });
  const count = h('span', { class: 'pill' });
  const ttl = h('div', { class: 'vtitle' });
  const zoomLbl = h('span', { class: 'mono vzoom' }, '100%');
  const btn = (label, title, fn, cls = 'btn') => h('button', { class: cls, type: 'button', title, 'aria-label': title, onclick: fn }, label);
  const dlg = h('dialog', { class: 'viewer', 'aria-label': 'Picture viewer' },
    h('div', { class: 'vbar' },
      btn('‹ Back to list', 'Close the viewer (Esc)', () => dlg.close(), 'btn vback'),
      count, ttl,
      h('div', { class: 'vtools' },
        btn('◀', 'Previous picture (←)', () => show(LB.i - 1)),
        btn('▶', 'Next picture (→)', () => show(LB.i + 1)),
        h('span', { class: 'vsep' }),
        btn('−', 'Zoom out (-)', () => zoomBy(1 / 1.4)), zoomLbl, btn('+', 'Zoom in (+)', () => zoomBy(1.4)),
        btn('Fit', 'Fit to screen (0)', () => fit()), btn('1:1', 'Actual pixels (1)', () => setScale(1, true)),
        h('span', { class: 'vsep' }),
        btn('ⓘ', 'Show or hide the explanation (i)', () => dlg.classList.toggle('noinfo')),
        btn('⛶', 'Full screen (f)', () => { if (document.fullscreenElement) document.exitFullscreen(); else dlg.requestFullscreen?.().catch(() => {}); }))),
    h('div', { class: 'vbody' }, stage, info), strip);
  document.body.append(dlg);
  LB = { dlg, img, list: [], i: 0, s: 1, x: 0, y: 0, fitS: 1 };

  const apply = () => { img.style.transform = `translate(${LB.x}px, ${LB.y}px) scale(${LB.s})`; zoomLbl.textContent = `${Math.round(LB.s * 100)}%`; stage.classList.toggle('zoomed', LB.s > LB.fitS * 1.01); };
  function fit() {
    const r = stage.getBoundingClientRect(), w = img.naturalWidth || 1, hh = img.naturalHeight || 1;
    LB.fitS = Math.min(r.width / w, r.height / hh); LB.s = LB.fitS;
    LB.x = (r.width - w * LB.s) / 2; LB.y = (r.height - hh * LB.s) / 2; apply();
  }
  function setScale(ns, center, cx, cy) {
    const r = stage.getBoundingClientRect();
    ns = Math.min(Math.max(ns, LB.fitS * 0.5), 8);
    const px = center || cx === undefined ? r.width / 2 : cx, py = center || cy === undefined ? r.height / 2 : cy;
    LB.x = px - (px - LB.x) * (ns / LB.s); LB.y = py - (py - LB.y) * (ns / LB.s); LB.s = ns; apply();
  }
  const zoomBy = (f, cx, cy) => setScale(LB.s * f, cx === undefined, cx, cy);
  LB.fit = fit;

  stage.addEventListener('wheel', (e) => { e.preventDefault(); const r = stage.getBoundingClientRect(); zoomBy(e.deltaY < 0 ? 1.15 : 1 / 1.15, e.clientX - r.left, e.clientY - r.top); }, { passive: false });
  stage.addEventListener('dblclick', (e) => { const r = stage.getBoundingClientRect(); if (LB.s > LB.fitS * 1.5) fit(); else setScale(LB.fitS * 2.5, false, e.clientX - r.left, e.clientY - r.top); });
  const pts = new Map(); let last = null, pinch = null;
  stage.addEventListener('pointerdown', (e) => { stage.setPointerCapture(e.pointerId); pts.set(e.pointerId, { x: e.clientX, y: e.clientY }); last = { x: e.clientX, y: e.clientY }; });
  stage.addEventListener('pointermove', (e) => {
    if (!pts.has(e.pointerId)) return;
    pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pts.size === 2) {
      const [a, b] = [...pts.values()]; const d = Math.hypot(a.x - b.x, a.y - b.y); const r = stage.getBoundingClientRect();
      if (pinch) zoomBy(d / pinch, (a.x + b.x) / 2 - r.left, (a.y + b.y) / 2 - r.top);
      pinch = d; return;
    }
    if (last) { LB.x += e.clientX - last.x; LB.y += e.clientY - last.y; last = { x: e.clientX, y: e.clientY }; apply(); }
  });
  const up = (e) => { pts.delete(e.pointerId); pinch = null; last = pts.size ? [...pts.values()][0] : null; };
  stage.addEventListener('pointerup', up); stage.addEventListener('pointercancel', up);
  img.addEventListener('load', fit);
  window.addEventListener('resize', () => { if (dlg.open) fit(); });
  dlg.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); show(LB.i - 1); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); show(LB.i + 1); }
    else if (e.key === '+' || e.key === '=') zoomBy(1.4);
    else if (e.key === '-') zoomBy(1 / 1.4);
    else if (e.key === '0') fit();
    else if (e.key === '1') setScale(1, true);
    else if (e.key === 'i') dlg.classList.toggle('noinfo');
    else if (e.key === 'f') { if (document.fullscreenElement) document.exitFullscreen(); else dlg.requestFullscreen?.().catch(() => {}); }
  });
  dlg.addEventListener('close', () => { if (document.fullscreenElement) document.exitFullscreen().catch(() => {}); });

  function show(i) {
    LB.i = (i + LB.list.length) % LB.list.length;
    const f = LB.list[LB.i];
    img.src = figUrl(f, 'full'); img.alt = figCaption(f);
    count.textContent = `${LB.i + 1} / ${LB.list.length}`;
    ttl.replaceChildren(...txt(figCaption(f)));
    info.replaceChildren(...[
      h('h2', {}, ...txt(figCaption(f))),
      h('div', { class: 'row' }, h('span', { class: 'pill' }, srcName(f.doc)), f.page ? h('span', { class: 'pill' }, `page ${f.page}`) : null),
      f.what ? h('section', {}, h('div', { class: 'ltag' }, 'What this shows'), h('p', {}, ...txt(f.what))) : null,
      f.why ? h('section', { class: 'lwhy' }, h('div', { class: 'ltag' }, 'Why it matters'), h('p', {}, ...txt(f.why))) : null,
      f.terms?.length ? h('section', {}, h('div', { class: 'ltag' }, 'Key terms'), h('ul', {}, f.terms.map((t) => h('li', {}, ...txt(t))))) : null,
      f.note ? h('details', {}, h('summary', { class: 'muted' }, 'Text from the document'), h('p', { class: 'muted' }, ...txt(f.note))) : null,
      AISTAT?.enabled && AISTAT?.pack ? figureAskBox(f) : null,
      h('p', { class: 'muted vhelp' }, 'Scroll or pinch to zoom · drag to move · double-click to zoom in · ← → for next · Esc to go back'),
    ].filter(Boolean));
    strip.querySelectorAll('button').forEach((b, k) => b.classList.toggle('on', k === LB.i));
    strip.children[LB.i]?.scrollIntoView({ block: 'nearest', inline: 'center' });
  }
  LB.show = show;
  LB.strip = strip;
}
function openLightbox(list, start) {
  if (!LB) buildViewer();
  LB.list = list;
  LB.strip.replaceChildren(...list.map((f, k) => h('button', { type: 'button', title: figCaption(f), onclick: () => LB.show(k) },
    h('img', { src: figUrl(f), alt: '', loading: 'lazy' }))));
  if (!LB.dlg.open) LB.dlg.showModal();
  LB.show(start);
}

// ---------- views ----------
const VIEWS = {};

// Today page, other languages: how much is translated, and "Translate everything now".
async function languageCard() {
  let st; try { st = await api('/api/i18n/status'); } catch { return null; }
  const line = h('p', { class: 'muted' });
  const bar = h('span', {});
  const show = (s) => {
    const p = s.prep[LANG], n = p?.running ? p.done : (s.cached[LANG] || 0), total = p?.running ? p.total : s.total;
    line.textContent = p?.running ? `Translating: ${n} of ${total} texts…` : `${Math.min(n, total)} of ${total} texts translated. The rest translate as you open them.`;
    bar.style.width = `${pct(Math.min(n, total), total)}%`;
    if (p?.error) line.textContent = p.error;
    return p?.running;
  };
  const btn = h('button', { class: 'btn primary', type: 'button', disabled: !st.enabled }, 'Translate everything now');
  const poll = async () => {
    for (;;) {
      await new Promise((r) => setTimeout(r, 3000));
      if (!line.isConnected) return;
      let s; try { s = await api('/api/i18n/status'); } catch { return; }
      if (!show(s)) { btn.disabled = false; return; }
    }
  };
  btn.addEventListener('click', async () => {
    btn.disabled = true;
    try { await api('/api/i18n/prepare', { method: 'POST', body: { lang: LANG, scope: 'all' } }); poll(); } catch (e) { line.textContent = e.message; btn.disabled = false; }
  });
  if (show(st)) { btn.disabled = true; poll(); }
  return h('div', { class: 'box' }, h('div', { class: 'label' }, 'Language'),
    h('div', { class: 'row', style: 'justify-content:space-between' }, h('h2', {}, LANGS[LANG]), btn),
    h('div', { class: 'bar' }, bar), line,
    st.enabled ? h('p', { class: 'muted' }, 'Do this once before a demo: lessons, cards, quiz, glossary and picture notes are translated in the background (about 10–20 minutes) and then open instantly. Names, codes and the Spanish screen labels stay as they are.')
      : h('p', { class: 'note' }, 'Translation needs the AI key (ANTHROPIC_API_KEY) in Railway.'));
}
VIEWS.dashboard = async () => {
  const [d, stats, plan, lessons] = await Promise.all([api('/api/dashboard'), api('/api/stats'), api('/api/plan'), loadLessons()]);
  const nextSess = plan.find((s) => !s.done_at) || plan[plan.length - 1];
  const nextL = nextSess ? lessons[nextSess.idx] : null;
  const quizByDoc = Object.fromEntries(d.quiz.map((r) => [r.doc, r]));
  const totalQ = d.quiz.reduce((a, r) => a + r.attempts, 0), rightQ = d.quiz.reduce((a, r) => a + r.correct, 0);

  let ib = null; try { ib = await api('/api/inbox'); } catch { /* AI off or not set up */ }
  const open = (ib?.items || []).filter((x) => ['new', 'planned', 'opened', 'triaging'].includes(x.status));
  const quick = h('input', { type: 'text', id: 'quickAsk', placeholder: 'Ask the documents anything… (Enter)' });
  quick.addEventListener('keydown', (e) => { if (e.key === 'Enter' && quick.value.trim()) { ASK.pending = quick.value.trim(); location.hash = '#/ask'; } });
  const work = h('div', { class: 'grid worktop' },
    h('div', { class: 'box' },
      h('div', { class: 'label' }, 'Issue inbox'),
      h('div', { class: 'stat' }, open.length),
      open.length ? h('div', { class: 'inboxmini' }, open.slice(0, 3).map((x) => h('a', { href: `#/issue?open=${x.id}` },
        h('strong', {}, x.triage?.title || x.subject || '(no subject)'), h('div', { class: 'muted' }, `${x.triage?.site || ''}${x.status === 'planned' ? ' · plan ready' : ''}`))))
        : h('p', { class: 'muted' }, 'No open issues.'),
      h('div', { class: 'row' }, h('a', { class: 'btn primary', href: '#/issue' }, 'Fix an issue ▶'))),
    h('div', { class: 'box' },
      h('div', { class: 'label' }, 'Quick question'),
      h('label', { for: 'quickAsk', class: 'muted' }, 'Answers come only from your documents and notes, with sources.'), quick,
      h('div', { class: 'row' }, h('a', { href: '#/ask' }, 'Open Ask AI'), h('a', { href: '#/notes' }, 'My notes'))));
  return [
    work,
    LANG === 'en' ? null : await languageCard(),
    h('div', {}, h('div', { class: 'label' }, 'Today'), h('h1', {}, d.dueTotal + d.newAvailable > 0 ? `${d.dueTotal + d.newAvailable} cards ready to study` : 'All caught up')),
    h('div', { class: 'grid' },
      h('div', { class: 'box' },
        h('div', { class: 'label' }, 'Due for review'),
        h('div', { class: 'stat' }, d.dueTotal),
        h('p', { class: 'muted' }, Object.keys(META.docs).map((k) => `${docName(k)}: ${d.dueByDoc[k] || 0}`).join(' · ')),
        h('div', { class: 'row' }, h('a', { class: 'btn primary', href: '#/review' }, 'Start review'))),
      h('div', { class: 'box' },
        h('div', { class: 'label' }, 'New cards left today'),
        h('div', { class: 'stat' }, d.newAvailable),
        h('p', { class: 'muted' }, `${d.unseenTotal} cards not yet seen · ${d.reviewedToday} reviews done today`)),
      h('div', { class: 'box' },
        h('div', { class: 'label' }, 'Lessons'),
        h('div', { class: 'stat' }, `${d.plan.done}/${d.plan.total}`),
        h('div', { class: 'bar' }, h('span', { style: `width:${pct(d.plan.done, d.plan.total)}%` })),
        h('a', { href: '#/plan' }, 'Open the lessons')),
      h('div', { class: 'box' },
        h('div', { class: 'label' }, 'Quiz accuracy'),
        h('div', { class: 'stat' }, totalQ ? `${pct(rightQ, totalQ)}%` : '—'),
        h('p', { class: 'muted' }, totalQ
          ? Object.keys(META.docs).map((k) => quizByDoc[k] ? `${docName(k)}: ${pct(quizByDoc[k].correct, quizByDoc[k].attempts)}%` : null).filter(Boolean).join(' · ')
          : 'No answers yet. Target: 85%.'),
        h('a', { href: '#/quiz' }, 'Take the quiz'))),
    nextSess && nextL ? h('div', { class: 'box sess next', style: 'display:flex' },
      h('div', { style: 'display:flex;flex-direction:column;gap:8px;min-width:0;width:100%' },
        h('div', { class: 'row', style: 'justify-content:space-between' },
          h('div', {}, h('div', { class: 'label' }, nextSess.done_at ? 'All lessons done – review' : 'Your next lesson'), h('h2', {}, `Lesson ${nextSess.idx}: ${nextSess.title}`)),
          h('a', { class: 'btn primary', href: `#/lesson?n=${nextSess.idx}` }, 'Start lesson ▶')),
        h('p', {}, ...txt(nextL.intro)),
        FIGS.length ? stepThumbs(nextL, 6) : h('p', { class: 'note' }, 'Screenshots are not loaded yet. Upload the six packs on the ', h('a', { href: '#/visuals' }, 'Visuals'), ' page.'))) : null,
    h('div', { class: 'box' },
      h('div', { class: 'row' }, h('a', { href: '#/visuals' }, `Browse all ${FIGS.length} pictures`), h('a', { href: '#/glossary' }, `Glossary (${GLOSSARY.length} abbreviations)`))),
    h('div', { class: 'grid' },
      h('div', { class: 'box' },
        h('h2', {}, 'Weakest quiz sections'),
        stats.weakSections.length
          ? h('div', { class: 'tw' }, h('table', {},
              h('tr', {}, h('th', {}, 'Document'), h('th', {}, 'Section'), h('th', {}, 'Correct')),
              stats.weakSections.map((r) => h('tr', {}, h('td', {}, docName(r.doc)), h('td', { class: 'n' }, r.section), h('td', { class: 'n' }, `${r.correct}/${r.attempts}`)))))
          : h('p', { class: 'muted' }, 'Answer some quiz questions and your weakest sections will show here.')),
      h('div', { class: 'box' },
        h('h2', {}, 'Cards you keep missing'),
        stats.hardCards.length
          ? h('ul', { style: 'margin:0;padding-left:18px' }, stats.hardCards.map((c) => h('li', {}, `${c.front} `, h('span', { class: 'pill bad' }, `${c.lapses}×`))))
          : h('p', { class: 'muted' }, 'Cards you mark Again will show here.'))),
    h('div', { class: 'box' },
      h('h2', {}, 'Recent sign-ins'),
      h('div', { class: 'tw' }, h('table', {},
        h('tr', {}, h('th', {}, 'When'), h('th', {}, 'Result'), h('th', {}, 'Address')),
        d.logins.map((l) => h('tr', {}, h('td', { class: 'n' }, fmtDate(l.at)),
          h('td', {}, h('span', { class: 'pill ' + (l.event === 'login_ok' ? 'good' : 'bad') }, l.event.replace('login_', '').replace('_', ' '))),
          h('td', { class: 'n' }, l.ip || '—'))))),
      h('p', { class: 'muted' }, 'A failed or locked entry you do not recognise means someone reached the sign-in page. See Security.')),
  ];
};

VIEWS.review = async () => {
  const sel = docSelect('reviewDoc', recall('reviewDoc', 'all'));
  const area = h('div', { style: 'display:flex;flex-direction:column;gap:12px' });
  sel.addEventListener('change', () => { remember('reviewDoc', sel.value); load(); });

  async function load() {
    area.replaceChildren(h('p', { class: 'muted' }, 'Loading…'));
    try {
      const doc = sel.value === 'all' ? '' : `?doc=${sel.value}`;
      const r = await api('/api/review/next' + doc);
      if (!r.card) {
        area.replaceChildren(h('div', { class: 'box' },
          h('h2', {}, 'Nothing left to review here'),
          h('p', { class: 'muted' }, r.nextDueAt ? `Next card is due ${fmtDate(r.nextDueAt)}.` : 'No reviews are scheduled yet.'),
          h('p', { class: 'muted' }, 'Take the quiz, or switch to another document.')));
        return;
      }
      const c = r.card;
      const cardFigs = figsForCard(c);
      const ans = h('div', { class: 'a', hidden: true }, ...txt(c.back),
        figStrip(cardFigs, { max: 3, title: 'From the document' }));
      const grades = h('div', { class: 'grades', hidden: true },
        [['again', 'Again', 'see it again in 10 min', 'bad'], ['hard', 'Hard', 'shorter gap', 'warn'], ['good', 'Good', 'normal gap', 'good'], ['easy', 'Easy', 'longer gap', '']]
          .map(([g, label, hint, cls]) => h('button', { class: `btn ${cls}`, onclick: () => grade(c.id, g) }, label, h('small', {}, hint))));
      const show = h('button', { class: 'btn primary', onclick: () => { ans.hidden = false; grades.hidden = false; show.hidden = true; } }, 'Show answer');
      area.replaceChildren(
        h('div', { class: 'row' },
          h('span', { class: 'pill' }, `${r.due} due`), h('span', { class: 'pill warn' }, `${r.newRemaining} new left today`),
          c.is_new ? h('span', { class: 'pill good' }, 'New card') : null),
        h('div', { class: 'flash' },
          h('div', { class: 'label' }, `${docName(c.doc)} · ${c.section}`),
          h('div', { class: 'q' }, ...txt(c.front)), ans),
        show, grades);
      show.focus();
    } catch (e) { area.replaceChildren(errorBox(e)); }
  }
  async function grade(id, g) {
    try { await api(`/api/review/${id}`, { method: 'POST', body: { grade: g } }); load(); }
    catch (e) { area.append(errorBox(e)); }
  }
  load();
  return [h('div', {}, h('div', { class: 'label' }, 'Spaced repetition'), h('h1', {}, 'Review')),
    h('div', { class: 'row' }, h('label', { for: 'reviewDoc', class: 'label' }, 'Deck'), sel), area,
    h('p', { class: 'muted' }, 'Read the question, answer it out loud or on paper, then show the answer and grade yourself honestly. Cards you get right come back after longer and longer gaps.')];
};

// ---------- lessons ----------
let LESSONS = null;
async function loadLessons() { if (!LESSONS) LESSONS = await api('/api/lessons'); return LESSONS; }
const figByKey = (k) => FIGS.find((f) => f.key === k);

function drawDiagram(d) {
  if (!d) return null;
  const tone = (t) => `tone-${t || 'grey'}`;
  let body;
  if (d.type === 'flow') {
    body = h('div', { class: 'dflow' }, d.nodes.flatMap((n, i) => [
      i ? h('div', { class: 'darrow', 'aria-hidden': 'true' }, '→') : null,
      h('div', { class: `dnode ${tone(n.tone)}` }, h('strong', {}, ...txt(n.t)), n.s ? h('span', {}, ...txt(n.s)) : null)]));
  } else if (d.type === 'cards') {
    body = h('div', { class: 'dcards' }, d.items.map((c) => h('div', { class: `dcard ${tone(c.tone)}` },
      h('strong', {}, ...txt(c.t)), h('ul', {}, (c.list || []).map((x) => h('li', {}, ...txt(x)))))));
  } else if (d.type === 'table') {
    body = h('div', { class: 'tw' }, h('table', { class: 'dtable' },
      h('tr', {}, d.head.map((x) => h('th', {}, x))),
      d.rows.map((r) => h('tr', {}, r.map((x, i) => h('td', { class: i === 0 ? 'dkey' : '' }, ...txt(x)))))));
  } else if (d.type === 'timeline') {
    body = h('ol', { class: 'dtime' }, d.items.map((it) => h('li', { class: tone(it.tone) },
      h('span', { class: 'dwhen mono' }, it.when), h('div', {}, h('strong', {}, ...txt(it.t)), h('div', {}, ...txt(it.s))))));
  } else if (d.type === 'contacts') {
    body = h('div', { class: 'dcontacts' }, d.rows.map((r) => h('div', { class: `drow ${r.ok ? 'ok' : 'no'}` },
      h('span', { class: 'dmark', 'aria-label': r.ok ? 'allowed' : 'not allowed' }, r.ok ? '✓' : '✕'),
      h('span', { class: 'dfrom' }, r.from), h('span', { class: 'dline' }, r.ok ? '──▶' : '─╳─'), h('span', { class: 'dto' }, r.to),
      h('span', { class: 'dwhy muted' }, ...txt(r.why)))));
  }
  return h('figure', { class: 'diagram' }, d.title ? h('figcaption', { class: 'label' }, d.title) : null, body,
    d.note ? h('p', { class: 'muted' }, ...txt(d.note)) : null);
}

function stepThumbs(lesson, max = 6) {
  const keys = [];
  for (const st of lesson.steps) for (const k of st.figs || []) if (!keys.includes(k)) keys.push(k);
  const figs = keys.map(figByKey).filter(Boolean);
  if (!figs.length) {
    const diagrams = lesson.steps.filter((st) => st.diagram).length;
    return diagrams ? h('p', { class: 'muted' }, `${diagrams} diagrams in this lesson.`) : null;
  }
  return figStrip(figs, { max });
}

VIEWS.plan = async () => {
  const [rows, lessons] = await Promise.all([api('/api/plan'), loadLessons()]);
  const done = rows.filter((r) => r.done_at).length;
  const next = rows.find((r) => !r.done_at);
  return [
    h('div', {}, h('div', { class: 'label' }, `${done} of ${rows.length} lessons done`), h('h1', {}, 'Lessons')),
    h('div', { class: 'box' },
      h('h2', {}, 'How each lesson works'),
      h('ol', { style: 'margin:0;padding-left:20px' },
        h('li', {}, 'Go through it step by step. Each step shows the real screen or a diagram, what to do, what to look for, and why.'),
        h('li', {}, 'Click any picture to see it full size.'),
        h('li', {}, 'At the end, answer the check questions out loud before revealing the answers.'),
        h('li', {}, 'Mark the lesson done, then clear that lesson\'s due cards in Review.')),
      FIGS.length ? null : h('p', { class: 'note' }, 'The screenshots are not loaded yet. Go to ', h('a', { href: '#/visuals' }, 'Visuals'), ' and upload the six packs; the diagrams already work.')),
    ...rows.map((s) => {
      const L = lessons[s.idx];
      const cb = h('input', { type: 'checkbox', id: `plan${s.idx}`, checked: Boolean(s.done_at), 'aria-label': 'Mark done' });
      cb.addEventListener('change', async () => {
        try { await api(`/api/plan/${s.idx}`, { method: 'POST', body: { done: cb.checked } }); render(); }
        catch (e) { alertInline(e); }
      });
      return h('div', { class: 'box sess' + (s.done_at ? ' done' : '') + (next && next.idx === s.idx ? ' next' : '') }, cb,
        h('div', { style: 'display:flex;flex-direction:column;gap:8px;min-width:0' },
          h('div', { class: 'row', style: 'justify-content:space-between' },
            h('h3', {}, `Lesson ${s.idx}: ${s.title}`),
            h('a', { class: 'btn primary', href: `#/lesson?n=${s.idx}` }, s.done_at ? 'Review lesson' : 'Start lesson ▶')),
          h('div', { class: 'row' }, h('span', { class: 'pill' }, s.doc), h('span', { class: 'pill' }, s.secs),
            L ? h('span', { class: 'pill good' }, `${L.steps.length} steps`) : null,
            s.done_at ? h('span', { class: 'pill good' }, `Done ${fmtDate(s.done_at)}`) : null),
          L ? h('p', {}, ...txt(L.intro)) : null,
          L ? stepThumbs(L) : null,
          h('details', {}, h('summary', { class: 'muted', style: 'cursor:pointer' }, 'Topics covered'),
            h('ul', {}, s.items.map((i) => h('li', {}, ...txt(i)))), h('p', { class: 'muted' }, 'Goal: ', ...txt(s.goal)))));
    }),
  ];
};

let lessonKeys = null;
VIEWS.lesson = async () => {
  const params = new URLSearchParams(location.hash.split('?')[1] || '');
  const n = Number(params.get('n')) || 1;
  const [rows, lessons] = await Promise.all([api('/api/plan'), loadLessons()]);
  const sess = rows.find((r) => r.idx === n), L = lessons[n];
  if (!sess || !L) return [errorBox(new Error('Lesson not found.'))];
  const total = L.steps.length + 1; // last page = check yourself
  let i = Math.min(Math.max(Number(params.get('s')) || 0, 0), total - 1);
  const stage = h('div', {});
  const bar = h('span', {});
  const dots = h('div', { class: 'stepdots' });
  const go = (k) => { i = Math.min(Math.max(k, 0), total - 1); history.replaceState(null, '', `#/lesson?n=${n}&s=${i}`); draw(); window.scrollTo({ top: 0 }); };

  function visual(st) {
    const figs = (st.figs || []).map((k) => figByKey(k) || { key: k, missing: true });
    const present = figs.filter((f) => !f.missing);
    const parts = [];
    if (figs.length) {
      const main = figs[0];
      parts.push(main.missing
        ? h('div', { class: 'imgmissing' }, 'Screenshot not loaded yet. ', h('a', { href: '#/visuals' }, 'Upload the visuals packs'), '.')
        : h('button', { class: 'mainimg', type: 'button', onclick: () => openLightbox(present, 0), title: 'Click to enlarge' },
            h('img', { src: figUrl(main, 'full'), alt: figCaption(main) }), h('span', { class: 'zoom' }, '⤢ Enlarge')));
      if (present.length > 1) parts.push(h('div', { class: 'figs small' }, present.slice(1).map((_, j) => figTile(present, j + 1))));
    }
    return parts;
  }

  function draw() {
    bar.replaceChildren(h('div', { class: 'bar' }, h('span', { style: `width:${pct(i + 1, total)}%` })));
    dots.replaceChildren(...Array.from({ length: total }, (_, k) => h('button', {
      class: 'dot' + (k === i ? ' on' : '') + (k < i ? ' past' : ''), type: 'button', onclick: () => go(k),
      title: k < L.steps.length ? L.steps[k].title : 'Check yourself', 'aria-label': `Step ${k + 1}` }, k < L.steps.length ? String(k + 1) : '✓')));
    const nav = h('div', { class: 'row lessonnav' },
      h('button', { class: 'btn', type: 'button', disabled: i === 0, onclick: () => go(i - 1) }, '‹ Back'),
      h('span', { class: 'muted' }, i < L.steps.length ? `Step ${i + 1} of ${L.steps.length}` : 'Check yourself'),
      i < total - 1 ? h('button', { class: 'btn primary', type: 'button', onclick: () => go(i + 1) }, 'Next ›') : null);
    if (i < L.steps.length) {
      const st = L.steps[i];
      const imgs = visual(st);
      const diag = st.diagram ? drawDiagram(st.diagram) : null;
      // Picture left and text right; a diagram goes full width underneath, or takes the
      // picture's place when the step has no screenshot.
      const left = imgs.length ? imgs : (diag ? [diag] : []);
      stage.replaceChildren(
        h('div', { class: 'lesson' + (left.length ? '' : ' novis') },
          left.length ? h('div', { class: 'lvis' }, ...left) : null,
          h('div', { class: 'ltext' },
            h('div', { class: 'label' }, `Step ${i + 1}`),
            h('h2', {}, ...txt(st.title)),
            st.do?.length ? h('div', { class: 'ldo' }, h('div', { class: 'ltag' }, 'Do this'), h('ol', {}, st.do.map((x) => h('li', {}, ...txt(x))))) : null,
            st.look ? h('div', { class: 'llook' }, h('div', { class: 'ltag' }, 'Look for this in the picture'), h('p', {}, ...txt(st.look))) : null,
            st.why ? h('div', { class: 'lwhy' }, h('div', { class: 'ltag' }, 'Why it matters'), h('p', {}, ...txt(st.why))) : null),
          imgs.length && diag ? h('div', { class: 'lwide' }, diag) : null),
        nav);
    } else {
      const checks = L.check.map((c, k) => {
        const ans = h('p', { class: 'a', hidden: true }, ...txt(c.a));
        const btn = h('button', { class: 'btn', type: 'button', onclick: () => { ans.hidden = false; btn.hidden = true; } }, 'Show answer');
        return h('div', { class: 'box' }, h('div', { class: 'label' }, `Question ${k + 1}`), h('p', { style: 'font-weight:700' }, ...txt(c.q)), btn, ans);
      });
      const nextSess = rows.find((r) => r.idx === n + 1);
      stage.replaceChildren(
        h('div', { style: 'display:flex;flex-direction:column;gap:12px' },
          h('h2', {}, 'Check yourself'),
          h('p', { class: 'muted' }, 'Answer each one out loud or on paper first. Then reveal.'),
          ...checks,
          h('div', { class: 'row' },
            sess.done_at ? h('span', { class: 'pill good' }, `Done ${fmtDate(sess.done_at)}`)
              : h('button', { class: 'btn good', type: 'button', onclick: async () => {
                  try { await api(`/api/plan/${n}`, { method: 'POST', body: { done: true } }); sess.done_at = new Date().toISOString(); draw(); }
                  catch (e) { alertInline(e); } } }, '✓ Mark lesson done'),
            h('a', { class: 'btn', href: '#/review' }, 'Review cards'),
            nextSess ? h('a', { class: 'btn primary', href: `#/lesson?n=${n + 1}` }, `Next lesson: ${nextSess.title} ›`) : null)),
        nav);
    }
  }
  if (lessonKeys) document.removeEventListener('keydown', lessonKeys);
  lessonKeys = (e) => {
    if (!location.hash.startsWith('#/lesson') || (LB && LB.dlg.open) || /input|textarea|select/i.test(e.target.tagName)) return;
    if (e.key === 'ArrowRight') go(i + 1);
    if (e.key === 'ArrowLeft') go(i - 1);
  };
  document.addEventListener('keydown', lessonKeys);
  draw();
  return [
    h('div', { class: 'lhead' },
      h('div', { style: 'min-width:0' }, h('a', { href: '#/plan', class: 'muted' }, '‹ All lessons'),
        h('div', { class: 'label' }, `Lesson ${n} of ${rows.length} · ${sess.doc} ${sess.secs}`),
        h('h1', {}, sess.title)),
      dots),
    bar,
    h('details', { class: 'lintro' }, h('summary', { class: 'muted' }, 'About this lesson'), h('p', {}, ...txt(L.intro))),
    stage,
    h('p', { class: 'muted' }, 'Tip: ← and → move between steps. Click a picture to open it full screen with zoom.'),
  ];
};

VIEWS.quiz = async () => {
  const sel = docSelect('quizDoc', recall('quizDoc', 'all'));
  sel.addEventListener('change', () => { remember('quizDoc', sel.value); render(); });
  const list = await api('/api/quiz' + (sel.value === 'all' ? '' : `?doc=${sel.value}`));
  let right = 0, answered = 0;
  const score = h('span', { class: 'pill' }, `${list.length} questions`);

  const items = list.map((q, k) => {
    const why = h('p', { class: 'muted', hidden: true });
    const opts = h('div', { class: 'opts' });
    q.options.forEach((t, j) => opts.append(h('button', { onclick: async () => {
      const buttons = [...opts.querySelectorAll('button')];
      buttons.forEach((b) => { b.disabled = true; });
      try {
        const r = await api(`/api/quiz/${q.id}/answer`, { method: 'POST', body: { chosen: j } });
        buttons[r.answer].classList.add('right');
        if (!r.correct) buttons[j].classList.add('wrong');
        why.replaceChildren(r.correct ? 'Correct. ' : 'Not quite. ', ...txt(r.why || ''));
        why.hidden = false;
        if (!r.correct && AISTAT?.enabled && AISTAT?.pack) {
          const holder = h('div', {});
          why.after(h('div', {}, h('button', { class: 'btn', type: 'button', onclick: (e) => { e.target.remove(); coach(q, t, r, holder); } }, '✨ Explain with AI'), holder));
        }
        answered++; if (r.correct) right++;
        score.textContent = `${right}/${answered} correct (${pct(right, answered)}%)`;
      } catch (e) { why.textContent = e.message; why.hidden = false; }
    } }, t)));
    return h('div', { class: 'box' },
      h('div', { class: 'label' }, `${k + 1} · ${docName(q.doc)} · ${q.section || ''}`),
      h('p', { style: 'font-weight:600' }, ...txt(q.stem)), opts, why,
      q.custom ? h('div', {}, h('button', { class: 'btn bad', onclick: async () => { try { await api(`/api/quiz/${q.id}`, { method: 'DELETE' }); render(); } catch (e) { alertInline(e); } } }, 'Delete my question')) : null);
  });

  return [
    h('div', {}, h('div', { class: 'label' }, 'Scenario quiz'), h('h1', {}, 'Handle the ticket')),
    h('div', { class: 'row' }, h('label', { for: 'quizDoc', class: 'label' }, 'Questions from'), sel, score,
      h('button', { class: 'btn', onclick: render }, 'Start again')),
    h('p', { class: 'muted' }, 'Every answer is saved, so the Today page can show which sections you are weakest in. Target before you finish the plan: 85%.'),
    AISTAT?.enabled && AISTAT?.pack ? aiQuizBox() : null,
    ...items,
    addQuestionForm(),
  ];
};

function addQuestionForm() {
  const msg = h('p', { role: 'status' });
  const doc = docSelect('nqDoc', null, false);
  const section = h('input', { type: 'text', id: 'nqSection', placeholder: 'e.g. §6.2.3' });
  const stem = h('textarea', { id: 'nqStem' });
  const opts = [0, 1, 2, 3].map((i) => h('input', { type: 'text', id: `nqOpt${i}`, placeholder: `Option ${i + 1}${i > 1 ? ' (optional)' : ''}` }));
  const answer = h('select', { id: 'nqAns' }, [0, 1, 2, 3].map((i) => h('option', { value: i }, `Option ${i + 1}`)));
  const why = h('textarea', { id: 'nqWhy' });
  const form = h('form', { class: 'form', onsubmit: async (e) => {
    e.preventDefault();
    const raw = opts.map((o) => o.value.trim());
    const ansIdx = Number(answer.value);
    if (!raw[ansIdx]) { msg.className = 'error'; msg.textContent = 'The correct option cannot be empty.'; return; }
    const kept = raw.map((t, i) => ({ t, i })).filter((o) => o.t);
    try {
      await api('/api/quiz', { method: 'POST', body: { doc: doc.value, section: section.value, stem: stem.value, why: why.value,
        options: kept.map((o) => o.t), answer: kept.findIndex((o) => o.i === ansIdx) } });
      msg.className = 'ok'; msg.textContent = 'Question added.'; form.reset();
    } catch (err) { msg.className = 'error'; msg.textContent = err.message; }
  } },
    h('label', { class: 'field', for: 'nqDoc' }, 'Document', doc),
    h('label', { class: 'field', for: 'nqSection' }, 'Section', section),
    h('label', { class: 'field full', for: 'nqStem' }, 'Scenario or question', stem),
    opts.map((o, i) => h('label', { class: 'field', for: `nqOpt${i}` }, `Option ${i + 1}`, o)),
    h('label', { class: 'field', for: 'nqAns' }, 'Correct option', answer),
    h('label', { class: 'field full', for: 'nqWhy' }, 'Why it is correct', why),
    h('div', { class: 'full row' }, h('button', { class: 'btn primary', type: 'submit' }, 'Add question'), msg));
  return h('details', { class: 'box' }, h('summary', { style: 'cursor:pointer;font-weight:700' }, 'Add your own question'), form);
}

VIEWS.cards = async () => {
  const sel = docSelect('cardsDoc', recall('cardsDoc', 'all'));
  sel.addEventListener('change', () => { remember('cardsDoc', sel.value); render(); });
  const cards = await api('/api/cards' + (sel.value === 'all' ? '' : `?doc=${sel.value}`));
  const search = h('input', { type: 'search', id: 'cardSearch', placeholder: 'Search cards' });
  const tbody = h('tbody');
  const draw = () => {
    const t = search.value.trim().toLowerCase();
    tbody.replaceChildren(...cards.filter((c) => !t || (c.front + ' ' + c.back + ' ' + c.section).toLowerCase().includes(t)).map((c) =>
      h('tr', {},
        h('td', {}, docName(c.doc), h('br'), h('span', { class: 'mono muted' }, c.section)),
        h('td', {}, h('strong', {}, ...txt(c.front)), h('br'), ...txt(c.back)),
        h('td', { class: 'n' }, c.due_at ? fmtDate(c.due_at) : h('span', { class: 'pill warn' }, 'new')),
        h('td', { class: 'n' }, c.lapses ? h('span', { class: 'pill bad' }, `${c.lapses}× missed`) : ''),
        h('td', {}, c.custom ? h('button', { class: 'btn bad', onclick: async () => { try { await api(`/api/cards/${c.id}`, { method: 'DELETE' }); render(); } catch (e) { alertInline(e); } } }, 'Delete') : ''))));
  };
  search.addEventListener('input', draw);
  draw();

  const msg = h('p', { role: 'status' });
  const doc = docSelect('ncDoc', null, false);
  const section = h('input', { type: 'text', id: 'ncSection', placeholder: 'e.g. §7.1' });
  const front = h('textarea', { id: 'ncFront' }), back = h('textarea', { id: 'ncBack' });
  const form = h('form', { class: 'form', onsubmit: async (e) => {
    e.preventDefault();
    try { await api('/api/cards', { method: 'POST', body: { doc: doc.value, section: section.value, front: front.value, back: back.value } });
      render(); }
    catch (err) { msg.className = 'error'; msg.textContent = err.message; }
  } },
    h('label', { class: 'field', for: 'ncDoc' }, 'Document', doc),
    h('label', { class: 'field', for: 'ncSection' }, 'Section', section),
    h('label', { class: 'field full', for: 'ncFront' }, 'Question (front)', front),
    h('label', { class: 'field full', for: 'ncBack' }, 'Answer (back)', back),
    h('div', { class: 'full row' }, h('button', { class: 'btn primary', type: 'submit' }, 'Add card'), msg));

  return [
    h('div', {}, h('div', { class: 'label' }, `${cards.length} cards`), h('h1', {}, 'Card library')),
    h('details', { class: 'box' }, h('summary', { style: 'cursor:pointer;font-weight:700' }, 'Add a card'), form),
    h('div', { class: 'row' }, h('label', { for: 'cardsDoc', class: 'label' }, 'Deck'), sel, search),
    h('div', { class: 'box tw' }, h('table', {},
      h('thead', {}, h('tr', {}, h('th', {}, 'Document'), h('th', {}, 'Card'), h('th', {}, 'Next due'), h('th', {}, 'Misses'), h('th', {}, ''))), tbody)),
  ];
};

VIEWS.reference = async () => {
  const table = (head, rows) => h('div', { class: 'tw' }, h('table', {},
    head ? h('tr', {}, head.map((x) => h('th', {}, x))) : null,
    rows.map((r) => h('tr', {}, r.map((x, i) => h('td', { class: i === 0 && !head ? 'n' : '' }, x))))));
  return [
    h('div', {}, h('div', { class: 'label' }, 'Quick reference'), h('h1', {}, 'Rules and numbers')),
    FIGS.length ? h('div', { class: 'box' }, h('h2', {}, 'The system at a glance'),
      figStrip(figsFor(['key:RSG-p037-1', 'key:AVR-fig2', ...FIGS.filter((f) => ['A1A', 'A6A', 'A8D'].includes(f.doc) && /architecture|overview|high availability|infrastructure/i.test(f.title)).slice(0, 9).map((f) => 'key:' + f.key)]), { max: 8 })) : null,
    h('div', { class: 'box' }, h('h2', {}, 'How a case moves'),
      h('div', { class: 'flow' }, ['L1 Client', 'L2 IAFIS Local', 'L2.5 IAFIS Tech', 'Technical Authority', 'L3 IDEMIA France']
        .flatMap((s, i) => i ? ['→', h('span', {}, s)] : [h('span', {}, s)])),
      h('p', { class: 'muted' }, 'The local team never contacts France or the Technical Authority directly. IAFIS Tech never contacts the end client. Complaints go from the Local Coordinator (SDM) to the head of IAFIS Tech.')),
    h('div', { class: 'grid' },
      h('div', { class: 'box' }, h('h2', {}, 'Numbers to know'), table(null, [
        ['2 MB', 'Max upload to a GLPI case or document'], ['2 days', 'Minimum follow-up frequency on every open case'],
        ['90 days', 'Forced password change; account locks if missed'], ['30 min', 'Password reset link validity'],
        ['8', 'Minimum password length'], ['100%', 'Approval level to set before sending approvals'],
        ['3', 'Priorities used: Low, Medium, Urgent'], ['8am–5pm', 'Bogotá office hours (GMT-5), Hotline Colombia'],
        ['24/365', 'IAFIS Tech level 2.5 availability']])),
      h('div', { class: 'box' }, h('h2', {}, 'Ticket statuses'), table(['Status', 'Spanish screen', 'Use when'], [
        ['New', 'Nuevo', 'Just opened'], ['Processing (assigned)', 'En curso (asignado)', 'Assigned to an engineer'],
        ['Processing (planned)', 'En curso (planificado)', 'Given a resolution date'],
        ['Pending', 'En espera', 'Client delay, workaround in place, or external delay'],
        ['Solved', 'Resuelto', 'Fixed, documentation outstanding'], ['Closed', 'Cerrado', 'Fixed and fully documented']])),
      h('div', { class: 'box' }, h('h2', {}, 'Intervention types'), table(['Type', 'Spanish', 'Default'], [
        ['Follow-up', 'Seguimiento', 'Private'], ['Task', 'Tarea', 'Private'], ['Document', 'Documento', 'Public'],
        ['Approval', 'Aprobación', '—'], ['Solution', 'Solución', 'Visible to client']])),
      h('div', { class: 'box' }, h('h2', {}, 'Inventory naming'),
        h('p', {}, h('code', {}, 'COUNTRY-CLIENT-TYPE-NN'), ' in upper case, e.g. ', h('code', {}, 'JM-JCF-SRV-01')),
        table(null, [['SRV', 'Server'], ['CPU', 'Computer'], ['LPT', 'Laptop'], ['MON', 'Monitor'], ['SWR', 'Network switch'],
          ['SWF', 'Fibre switch'], ['FIW', 'Firewall'], ['LHU', 'Fingerprint reader'], ['CAM', 'Camera'], ['PRI', 'Printer'], ['UPS', 'UPS'], ['RAP', 'Rapid']])),
      h('div', { class: 'box' }, h('h2', {}, 'Category prefixes'), table(null, [
        ['SW', 'Software under contract'], ['HW', 'Hardware under contract'], ['BK', 'Backup execution'], ['EX', 'External to the contract'],
        ['OP', 'Incorrect operation'], ['AD', 'Administration requests'], ['SP', 'Monitoring requests'], ['SL', 'Information / change requests']]),
        h('p', { class: 'muted' }, 'High priority: SW-Database, SW-UT, SW-Matcher, BK-Backup, SW/HW-Storage. Always recategorise to the root cause.')),
      h('div', { class: 'box' }, h('h2', {}, 'Customer Care (InvGate): numbers to know'), table(null, [
        ['customercare.iafisgroup.com', 'Address for clients and engineers; IAFIS staff sign in with SSO'],
        ['3 days', 'Minimum follow-up frequency on every open ticket'], ['5 min', 'Password reset code validity'],
        ['8 + 2 + 2', 'Password: 8+ characters, upper and lower case, 2 special, 2 numbers'],
        ['5 business days', 'Ticket closes automatically if the client does not answer the solution'],
        ['3', 'Priorities: Critical (system down), High (partial), Low (no impact)'], ['13', 'Things every event must record (§7.2)']])),
      h('div', { class: 'box' }, h('h2', {}, 'Customer Care statuses'), table(['Status', 'Spanish screen', 'SLA'], [
        ['Open', 'Abierto', 'Running'], ['Unassigned', 'Sin asignar', 'Running'], ['Waiting for the agent', 'En espera del agente', 'Running'],
        ['Waiting for the client', 'En espera del cliente', 'Paused'], ['Waiting for an external entity', 'En espera a entidad externa', 'Paused'],
        ['Waiting for a date', 'Esperando una fecha', 'Paused until the date'], ['Resolved', 'Resuelto', 'Waiting for validation'], ['Closed', 'Cerrado', 'Final']]),
        h('a', { href: '#/practice' }, 'Practise in the simulator ›')),
      h('div', { class: 'box' }, h('h2', {}, 'Customer Care reply options'),
        h('ol', { style: 'margin:0;padding-left:18px' },
          h('li', {}, h('code', {}, 'Responder'), ' adds a comment; tick ', h('code', {}, 'Interno'), ' to hide it from the client'),
          h('li', {}, h('code', {}, 'Responder y cambiar estado'), ': waiting for the client, an external entity (supplier and its ticket number) or a date agreed with the client'),
          h('li', {}, h('code', {}, 'Responder y escalar'), ': JPS projects only, Level 2 → 2.5 → Specialists'),
          h('li', {}, h('code', {}, 'Responder y solucionar'), ': back down the chain, each level validates, then the client accepts or rejects'))),
      h('div', { class: 'box' }, h('h2', {}, 'Escalate to IAFIS Tech in GLPI'),
        h('ol', { style: 'margin:0;padding-left:18px' },
          h('li', {}, 'Switch profile to ', h('code', {}, 'ClienteConsulta nuevo')), h('li', {}, 'Pick the entity, then Create a ticket'),
          h('li', {}, 'Set Type and Category; leave Associated items empty'), h('li', {}, 'Description: details, actions and results, diagnosis'),
          h('li', {}, 'Attach logs and evidence'), h('li', {}, 'Send message')))),
  ];
};

function srcSelect(id, value) {
  const s = h('select', { id }, h('option', { value: '' }, '— not linked —'),
    META.sourceGroups.filter((g) => !g.codes.includes('MY')).map((g) => h('optgroup', { label: g.name }, g.codes.map((c) => h('option', { value: c }, srcName(c))))));
  s.value = value; return s;
}
VIEWS.documents = async () => {
  const docs = await api('/api/documents');
  const msg = h('p', { role: 'status' });
  const title = h('input', { type: 'text', id: 'dTitle', required: true, placeholder: 'GLPI User Manual – Technical Support' });
  const code = h('input', { type: 'text', id: 'dCode', placeholder: 'OPS-I&S-MAN-001' });
  const lang = h('select', { id: 'dLang' }, h('option', { value: 'en' }, 'English translation'), h('option', { value: 'es' }, 'Spanish original'));
  const file = h('input', { type: 'file', id: 'dFile', accept: 'application/pdf', required: true });
  const srcIn = srcSelect('dSrc', '');
  const submit = h('button', { class: 'btn primary', type: 'submit' }, 'Encrypt and upload');
  const form = h('form', { class: 'form', onsubmit: async (e) => {
    e.preventDefault();
    if (!file.files[0]) return;
    const fd = new FormData();
    fd.append('title', title.value); fd.append('code', code.value); fd.append('language', lang.value); fd.append('src', srcIn.value); fd.append('file', file.files[0]);
    submit.disabled = true; msg.className = 'muted'; msg.textContent = 'Encrypting and uploading…';
    try { await api('/api/documents', { method: 'POST', body: fd }); render(); }
    catch (err) { msg.className = 'error'; msg.textContent = err.message; submit.disabled = false; }
  } },
    h('label', { class: 'field full', for: 'dTitle' }, 'Title', title),
    h('label', { class: 'field', for: 'dCode' }, 'Reference code', code),
    h('label', { class: 'field', for: 'dLang' }, 'Language', lang),
    h('label', { class: 'field full', for: 'dSrc' }, 'This PDF is (lets AI citations open the right page)', srcIn),
    h('label', { class: 'field full', for: 'dFile' }, 'PDF file', file),
    h('div', { class: 'full row' }, submit, msg));

  const rows = docs.map((d) => {
    const confirmIn = h('input', { type: 'text', id: `del-${d.id}`, placeholder: 'Type DELETE', size: 12 });
    const delBox = h('div', { class: 'row', hidden: true }, confirmIn,
      h('button', { class: 'btn bad', onclick: async () => {
        try { await api(`/api/documents/${d.id}`, { method: 'DELETE', body: { confirm: confirmIn.value } }); render(); }
        catch (e) { alertInline(e); }
      } }, 'Delete permanently'));
    const link = srcSelect(`src-${d.id}`, d.src || '');
    const linkMsg = h('span', { class: 'muted' });
    link.addEventListener('change', async () => {
      try { await api(`/api/documents/${d.id}/source`, { method: 'POST', body: { src: link.value } }); DOCLIST = null; linkMsg.textContent = 'Saved ✓'; }
      catch (e) { linkMsg.textContent = e.message; }
    });
    return h('tr', {},
      h('td', {}, h('strong', {}, d.title), h('br'), h('span', { class: 'mono muted' }, d.code || ''),
        h('div', { class: 'row', style: 'margin-top:6px' }, h('label', { class: 'muted', for: `src-${d.id}` }, 'Is:'), link, linkMsg)),
      h('td', {}, h('span', { class: 'pill' }, d.language === 'es' ? 'Spanish' : 'English')),
      h('td', { class: 'n' }, `${(d.size_bytes / 1048576).toFixed(1)} MB`),
      h('td', { class: 'n' }, fmtDate(d.created_at)),
      h('td', {}, h('div', { class: 'row' },
        h('a', { class: 'btn primary', href: `/api/documents/${d.id}/view`, target: '_blank', rel: 'noopener' }, 'Open'),
        h('button', { class: 'btn', onclick: () => { delBox.hidden = !delBox.hidden; } }, 'Delete…')), delBox));
  });

  return [
    h('div', {}, h('div', { class: 'label' }, `${docs.length} documents, encrypted at rest`), h('h1', {}, 'Documents')),
    h('div', { class: 'box tw' }, docs.length
      ? h('table', {}, h('tr', {}, h('th', {}, 'Document'), h('th', {}, 'Language'), h('th', {}, 'Size'), h('th', {}, 'Added'), h('th', {}, '')), rows)
      : h('p', { class: 'muted' }, 'No documents yet. Upload the Spanish originals and the English translations below.')),
    h('div', { class: 'box' }, h('h2', {}, 'Upload a PDF'),
      h('p', { class: 'muted' }, 'The file is encrypted on the server with its own key before it is stored. Nothing is written to disk unencrypted. Opening a document decrypts it in memory for your session only.'),
      form),
  ];
};

VIEWS.visuals = async () => {
  await loadFigures();
  const counts = {};
  for (const f of FIGS) counts[f.doc] = (counts[f.doc] || 0) + 1;
  const sel = h('select', { id: 'visDoc' }, h('option', { value: 'all' }, `All documents (${FIGS.length})`),
    META.sourceGroups.map((g) => h('optgroup', { label: g.name },
      g.codes.map((c) => h('option', { value: c }, `${srcName(c)} (${counts[c] || 0})`)))));
  sel.value = recall('visDoc', 'all');
  if (![...sel.options].some((o) => o.value === sel.value)) sel.value = 'all';
  const search = h('input', { type: 'search', id: 'visSearch', placeholder: 'Search captions, e.g. backup, NIST, ticket' });
  const area = h('div', { style: 'display:flex;flex-direction:column;gap:18px' });
  const status = h('span', { class: 'pill' });
  let current = [];

  const draw = () => {
    const t = search.value.trim().toLowerCase();
    current = FIGS.filter((f) => (sel.value === 'all' || f.doc === sel.value)
      && (!t || `${f.title} ${f.note} ${srcName(f.doc)} ${f.sec}`.toLowerCase().includes(t)));
    status.textContent = `${current.length} pictures`;
    const groups = [];
    for (const [i, f] of current.entries()) {
      if (!groups.length || groups[groups.length - 1].doc !== f.doc) groups.push({ doc: f.doc, idx: [] });
      groups[groups.length - 1].idx.push(i);
    }
    area.replaceChildren(...(groups.length ? groups.map((g) => h('section', { class: 'box' },
      h('h2', {}, srcName(g.doc), ' ', h('span', { class: 'pill' }, g.idx.length)),
      h('div', { class: 'figs vis' }, g.idx.map((i) => figTile(current, i)))))
      : [h('p', { class: 'muted' }, FIGS.length ? 'No pictures in this document match.' : 'No pictures loaded yet. Upload the visuals packs above.')]));
  };
  sel.addEventListener('change', () => { remember('visDoc', sel.value); draw(); });
  search.addEventListener('input', draw);
  draw();

  const files = h('input', { type: 'file', id: 'packFiles', accept: '.tvpack', multiple: true });
  const msg = h('p', { role: 'status', class: 'muted' });
  const go = h('button', { class: 'btn primary', type: 'button', onclick: async () => {
    const list = [...files.files];
    if (!list.length) { msg.textContent = 'Choose one or more .tvpack files.'; return; }
    go.disabled = true;
    let total = 0;
    try {
      for (const [i, f] of list.entries()) {
        msg.className = 'muted'; msg.textContent = `Encrypting and uploading ${f.name} (${i + 1} of ${list.length})…`;
        const fd = new FormData(); fd.append('file', f);
        const r = await api('/api/figures/pack', { method: 'POST', body: fd });
        total += r.count;
      }
      msg.className = 'ok'; msg.textContent = `Done: ${total} pictures stored, encrypted.`;
      setTimeout(render, 900);
    } catch (e) { msg.className = 'error'; msg.textContent = e.message; }
    go.disabled = false;
  } }, 'Encrypt and upload');
  const confirmIn = h('input', { type: 'text', id: 'figDel', placeholder: 'Type DELETE', size: 12 });
  const del = h('button', { class: 'btn bad', type: 'button', onclick: async () => {
    try { await api('/api/figures', { method: 'DELETE', body: { confirm: confirmIn.value } }); render(); } catch (e) { alertInline(e); }
  } }, 'Delete all pictures');

  const uploader = h('details', { class: 'box' + (FIGS.length ? '' : ' uploadfirst'), open: FIGS.length ? null : true },
    h('summary', { style: 'cursor:pointer;font-weight:700' }, FIGS.length ? 'Load or replace visuals packs' : 'Step 1: load the pictures (one time)'),
    h('ol', { style: 'margin:0;padding-left:20px' },
      h('li', {}, 'Click "Choose Files" and open your TECHMAN\\visuals-packs folder.'),
      h('li', {}, 'Select all six .tvpack files (Ctrl+A), then Open.'),
      h('li', {}, 'Click "Encrypt and upload" and wait for "Done: 597 pictures stored".')),
    h('p', { class: 'muted' }, 'Each picture is encrypted with its own key before it is stored, the same as your PDFs. Uploading a pack again replaces its pictures.'),
    h('div', { class: 'row' }, files, go), msg,
    FIGS.length ? h('div', { class: 'row' }, confirmIn, del) : null);
  return [
    h('div', {}, h('div', { class: 'label' }, 'Pictures from the documents'), h('h1', {}, 'Visuals')),
    FIGS.length ? null : uploader,
    h('div', { class: 'row' }, h('label', { for: 'visDoc', class: 'label' }, 'Document'), sel, search, status,
      h('button', { class: 'btn', type: 'button', onclick: () => current.length && openLightbox(current, 0) }, 'Slideshow ▶')),
    h('p', { class: 'muted' }, 'Click any picture to enlarge it. Use the arrow keys to move through them. Underlined abbreviations in captions show their meaning when you hover or tap.'),
    area,
    FIGS.length ? uploader : null,
  ];
};

VIEWS.glossary = async () => {
  const params = new URLSearchParams(location.hash.split('?')[1] || '');
  const cats = [...new Set(GLOSSARY.map((g) => g.category).filter(Boolean))].sort();
  const cat = h('select', { id: 'gCat' }, h('option', { value: 'all' }, 'All categories'), cats.map((c) => h('option', { value: c }, c)));
  const search = h('input', { type: 'search', id: 'gSearch', placeholder: 'Search, e.g. TTR, matcher, Oracle', value: params.get('q') || '' });
  const status = h('span', { class: 'pill' });
  const letters = h('div', { class: 'letters' });
  const list = h('div', { class: 'gl-list' });
  const draw = () => {
    const t = search.value.trim().toLowerCase();
    const rows = GLOSSARY.filter((g) => (cat.value === 'all' || g.category === cat.value)
      && (!t || `${g.abbr} ${g.term} ${g.meaning}`.toLowerCase().includes(t)))
      .sort((a, b) => {
        if (t) { const ea = a.abbr.toLowerCase() === t, eb = b.abbr.toLowerCase() === t; if (ea !== eb) return ea ? -1 : 1; }
        return a.abbr.localeCompare(b.abbr, 'en', { sensitivity: 'base' });
      });
    status.textContent = `${rows.length} of ${GLOSSARY.length}`;
    const byLetter = new Map();
    for (const g of rows) {
      const L = /[A-Z]/i.test(g.abbr[0]) ? g.abbr[0].toUpperCase() : '#';
      if (!byLetter.has(L)) byLetter.set(L, []);
      byLetter.get(L).push(g);
    }
    letters.replaceChildren(...[...byLetter.keys()].map((L) => h('a', { href: '#', onclick: (e) => { e.preventDefault(); document.getElementById(`gl-${L}`)?.scrollIntoView({ behavior: 'smooth' }); } }, L)));
    list.replaceChildren(...[...byLetter.entries()].map(([L, gs]) => h('section', { id: `gl-${L}`, class: 'box' },
      h('h2', {}, L),
      gs.map((g) => h('div', { class: 'gl-item' },
        h('div', { class: 'gl-abbr mono' }, g.abbr),
        h('div', { class: 'gl-body' },
          g.term ? h('div', { class: 'gl-term' }, g.term) : h('div', { class: 'gl-term muted' }, 'Not expanded in the documents'),
          h('p', {}, g.meaning),
          h('div', { class: 'row' }, g.category ? h('span', { class: 'pill warn' }, g.category) : null,
            (g.docs || []).map((d) => h('span', { class: 'pill', title: srcName(d) }, d)))))))));
    if (!rows.length) list.replaceChildren(h('p', { class: 'muted' }, 'No abbreviation matches.'));
  };
  cat.addEventListener('change', draw);
  search.addEventListener('input', draw);
  draw();
  setTimeout(() => search.focus(), 0);
  return [
    h('div', {}, h('div', { class: 'label' }, 'Every abbreviation in the documents'), h('h1', {}, 'Glossary')),
    h('div', { class: 'row' }, search, cat, status),
    letters,
    h('p', { class: 'muted' }, 'The tags show which documents use each abbreviation (hover a tag for the document name). These abbreviations are also underlined on your cards, quiz and plan.'),
    list,
  ];
};

VIEWS.security = async () => {
  const log = await api('/api/audit');
  return [
    h('div', {}, h('div', { class: 'label' }, 'Security'), h('h1', {}, 'Access and activity')),
    h('div', { class: 'grid' },
      h('div', { class: 'box' }, h('div', { class: 'label' }, 'Cloudflare Access identity'), h('p', { class: 'mono' }, META.email || '—')),
      h('div', { class: 'box' }, h('div', { class: 'label' }, 'Sessions'),
        h('p', { class: 'muted' }, 'Sign out on every device, for example after using a shared computer.'),
        h('div', {}, h('button', { class: 'btn bad', onclick: async () => { await api('/api/logout-all', { method: 'POST' }); window.location.replace('/login'); } }, 'Sign out everywhere')))),
    h('div', { class: 'box tw' }, h('h2', {}, 'Last 50 events'), h('table', {},
      h('tr', {}, h('th', {}, 'When'), h('th', {}, 'Event'), h('th', {}, 'Detail'), h('th', {}, 'Address')),
      log.map((l) => h('tr', {}, h('td', { class: 'n' }, fmtDate(l.at)),
        h('td', {}, h('span', { class: 'pill ' + (/fail|locked|decrypt/.test(l.event) ? 'bad' : '') }, l.event)),
        h('td', {}, l.detail || ''), h('td', { class: 'n' }, l.ip || ''))))),
  ];
};

// =====================================================================
// Customer Care practice: a working copy of the InvGate ticket screen, a scenario drill
// and the status map. Everything runs in the browser; only the best drill score is kept
// (in this browser).
// =====================================================================
const CC_ST = {
  open: { t: 'Open', es: 'Abierto', who: 'Support team', sla: 'run', tone: 'green', what: 'Created by the client; work has not started.' },
  unassigned: { t: 'Unassigned', es: 'Sin asignar', who: 'Help Desk', sla: 'run', tone: 'grey', what: 'In the Help Desk queue; no engineer yet.' },
  agent: { t: 'Waiting for the agent', es: 'En espera del agente', who: 'You', sla: 'run', tone: 'blue', what: 'Assigned to an engineer; the next step is ours.' },
  client: { t: 'Waiting for the client', es: 'En espera del cliente', who: 'Client', sla: 'pause', tone: 'amber', what: 'The client must answer, test or confirm.' },
  external: { t: 'Waiting for an external entity', es: 'En espera a entidad externa', who: 'Supplier', sla: 'pause', tone: 'amber', what: 'A supplier must act; its ticket number is recorded.' },
  date: { t: 'Waiting for a date', es: 'Esperando una fecha', who: 'Agreed date', sla: 'pause', tone: 'amber', what: 'Work booked for a date agreed with the client.' },
  resolved: { t: 'Resolved', es: 'Resuelto', who: 'Client', sla: 'stop', tone: 'purple', what: 'Fix in place; waiting for validation or confirmation.' },
  closed: { t: 'Closed', es: 'Cerrado', who: '—', sla: 'stop', tone: 'grey', what: 'Validated and fully documented. Final.' },
};
const CC_LEVELS = ['Level 2 (you)', 'Level 2.5 (IAFIS Tech)', 'Specialists'];
const CC_DRILL = [
  { s: 'You proposed a configuration change and need the client to confirm the station now enrols correctly.', a: 'client', why: 'The next action is the client\'s: "Responder y cambiar estado" → "Esperando al cliente". The SLA pauses and the client is notified.', ref: '§6.2.2' },
  { s: 'A failed disk is under Dell warranty. Dell opened case 4471 and will ship a part.', a: 'external', why: '"Esperando entidad externa": select the supplier and record its ticket number (mandatory).', ref: '§6.2.2' },
  { s: 'The client agreed to a maintenance window on Saturday at 22:00 to restart the database.', a: 'date', why: '"Esperando una fecha" with the agreed date and time. The SLA pauses until then.', ref: '§6.2.2' },
  { s: 'Your team is busy and nobody can look at the ticket until next Tuesday.', a: 'reply', why: 'Not "Esperando una fecha": that is only for a date agreed with the client. Add a follow-up and, if the SLA will be exceeded, give the client an estimate.', ref: '§7.2' },
  { s: 'On a JPS project you have done everything Level 2 can do; IAFIS Tech must look at it.', a: 'escalate', why: '"Responder y escalar": Level 2 → 2.5. Record the diagnosis, activities, evidence and the reason first.', ref: '§6.2.2' },
  { s: 'You applied the fix, tested it and documented the evidence. The ticket is at Level 2.', a: 'solve', why: '"Responder y solucionar": validate and inform the client, who accepts (Closed) or rejects (Open).', ref: '§6.2.2' },
  { s: 'You want to note internal analysis from IAFIS Tech that the client should not see, without changing the status.', a: 'reply', why: 'Plain "Responder" with "Interno" ticked: internal comments are hidden from the client.', ref: '§6.2.1' },
  { s: 'The client marked a single slow enrolment station as Critical; the rest of the system works.', a: 'priority', why: 'Partial impact is High, not Critical. ⋮ "Más opciones" → "Editar" → "Prioridad", backed by your analysis.', ref: '§7.1.1' },
  { s: 'You find the root cause is a network fault, but the ticket was logged under an application category.', a: 'category', why: 'Recategorise to the root cause: ⋮ → "Editar" → "Categoría".', ref: '§7.1.2' },
  { s: 'You need the client\'s firewall logs before you can continue.', a: 'client', why: 'Asking for information means "Esperando al cliente": the next action is theirs.', ref: '§6.2.2' },
  { s: 'A new ticket for your Help Desk appears under "Sin asignar" and it is yours to take under the SDM\'s rules.', a: 'assign', why: 'Gear icon → "Asignar a mí". It moves to "Asignados a mí" and leaves the others\' queue.', ref: '§6.1' },
  { s: 'IAFIS Tech solved the problem and pressed "Responder y solucionar". Where does the ticket go?', a: 'back', why: 'Back to the previous level (Level 2, you), who validates the fix before telling the client.', ref: '§6.2.2' },
];
const CC_ACTIONS = {
  assign: 'Gear → Asignar a mí', reply: 'Responder', client: 'Responder y cambiar estado → Esperando al cliente',
  external: 'Responder y cambiar estado → Esperando entidad externa', date: 'Responder y cambiar estado → Esperando una fecha',
  escalate: 'Responder y escalar', solve: 'Responder y solucionar', priority: '⋮ → Editar → Prioridad', category: '⋮ → Editar → Categoría',
  back: 'Reassigned to the previous level to validate',
};
const slaText = (s) => (s === 'run' ? '▶ SLA running' : s === 'pause' ? '⏸ SLA paused' : '■ SLA stopped');
function ccStatusMap(active, onPick) {
  return h('div', { class: 'ccmap' }, Object.entries(CC_ST).map(([k, s]) =>
    h('button', { type: 'button', class: `ccst tone-${s.tone}${k === active ? ' on' : ''}`, onclick: () => onPick && onPick(k) },
      h('strong', {}, s.t), h('span', { class: 'muted' }, `"${s.es}"`), h('span', { class: `ccsla ${s.sla}` }, slaText(s.sla)))));
}

VIEWS.practice = async () => {
  // ---------- 1. the ticket simulator ----------
  const T = { status: 'unassigned', level: 0, owner: null, priority: 'Critical', project: 'JPS', sla: 0, log: [], supplier: '', supTicket: '', date: '' };
  const pr = { Critical: 'bad', High: 'warn', Low: 'good' };
  const say = (who, text, kind = '') => { T.log.unshift({ at: new Date(), who, text, kind }); };
  say('System', 'Ticket #2318 created by the client: "Enrolment station 3 cannot send records" (Critical).', 'sys');
  say('System', 'Email sent to every engineer in the Help Desk.', 'sys');
  const card = h('div', { class: 'box ccticket' });
  const comment = h('textarea', { rows: 3, id: 'ccComment', placeholder: 'Document what you did: diagnosis, checks, evidence, results…' });
  const interno = h('input', { type: 'checkbox', id: 'ccInterno' });
  const msg = h('div', { class: 'ccmsg', role: 'status' });
  const mapHolder = h('div', {});
  const stInfo = h('div', { class: 'ccstinfo muted' }, 'Click a status to see what it means.');
  const warn = (t) => { msg.className = 'ccmsg bad'; msg.textContent = t; };
  const okm = (t) => { msg.className = 'ccmsg good'; msg.textContent = t; };
  const needDoc = () => {
    if (T.owner !== 'you') { warn('Take the ticket first: gear icon → "Asignar a mí".'); return false; }
    if (comment.value.trim().length < 15) { warn('Document the work first: before changing status, record what you did and attach the evidence (§6.2.1).'); comment.focus(); return false; }
    return true;
  };
  const post = (label) => { say(interno.checked ? 'You (internal)' : 'You', `${label}: ${comment.value.trim()}`, interno.checked ? 'int' : 'you'); comment.value = ''; };
  const act = {
    assign() {
      if (T.owner === 'you') return okm('It is already yours, under "Asignados a mí".');
      T.owner = 'you'; T.status = 'agent'; say('System', 'Assigned to you. The ticket left the other engineers\' "Sin asignar" list.', 'sys');
      return okm('Assigned to you. Status: Waiting for the agent.');
    },
    reply() { if (!needDoc()) return; post('Responder'); okm(interno.checked ? 'Internal comment saved: the client cannot see it.' : 'Public comment saved: the client is notified.'); },
    client() { if (!needDoc()) return; post('Esperando al cliente'); T.status = 'client'; say('System', 'Email to the client and to the Help Desk: status changed. SLA paused.', 'sys'); okm('Waiting for the client. The SLA is paused until they reply.'); },
    external() {
      if (!needDoc()) return;
      if (!T.supplier || T.supTicket.trim().length < 2) { warn('Open "Fields for external entity and date": select the supplier and type the supplier\'s ticket number. It is mandatory (§6.2.2).'); return; }
      post(`Esperando entidad externa (${T.supplier} #${T.supTicket.trim()})`); T.status = 'external';
      say('System', `External entity ${T.supplier}, case ${T.supTicket.trim()}. SLA paused.`, 'sys'); okm('Waiting for an external entity, with the supplier\'s ticket number recorded.');
    },
    date() {
      if (!needDoc()) return;
      if (!T.date) { warn('Open "Fields for external entity and date" and pick the date and time agreed with the client.'); return; }
      post(`Esperando una fecha (${T.date.replace('T', ' ')})`); T.status = 'date';
      say('System', 'Email to the client and the Help Desk. SLA paused until the agreed date.', 'sys'); okm('Waiting for a date. Use it only for a date agreed with the client.');
    },
    escalate() {
      if (!needDoc()) return;
      if (T.project !== 'JPS') { warn('"Responder y escalar" is only for JPS projects. Follow the procedure agreed with the supplier instead (§7.2).'); return; }
      if (T.level >= 2) { warn('The Specialists are the last level in this flow.'); return; }
      post('Responder y escalar'); T.level += 1; T.status = 'agent';
      say('System', `Escalated to ${CC_LEVELS[T.level]}. They continue from the point where it was escalated.`, 'sys');
      okm(`Now with ${CC_LEVELS[T.level]}. You are playing that level now.`);
    },
    solve() {
      if (!needDoc()) return;
      post('Responder y solucionar');
      if (T.level > 0) { T.level -= 1; T.status = 'agent'; say('System', `Solution sent back to ${CC_LEVELS[T.level]} to validate.`, 'sys'); okm('Each level validates before passing it on. Validate the fix, then solve again.'); return; }
      T.status = 'resolved'; say('System', 'Email to the client: proposed solution. They can accept or reject it.', 'sys'); okm('Resolved. Now play the client: accept or reject below.');
    },
    accept() { T.status = 'closed'; say('Client', 'Accepted the solution and rated the support ★★★★★.', 'cli'); okm('Closed. The work on this ticket is complete.'); },
    reject() { T.status = 'open'; say('Client', 'Rejected the solution: "Station 3 still fails after 10 minutes."', 'cli'); warn('Rejected: the ticket is back to Open. Keep working on it.'); },
    priority(v) {
      if (T.owner !== 'you') return warn('Take the ticket first.');
      if (v === T.priority) return okm('That is already the priority.');
      say('System', `Priority changed from ${T.priority} to ${v} after analysis (Priority Matrix, Annex 4).`, 'sys'); T.priority = v;
      return okm('Priority updated. Note the reason in a comment.');
    },
  };
  const closeMenu = (e) => { const d = e.target.closest('details'); if (d) d.open = false; };
  const doAct = (name, arg) => (e) => { act[name](arg); closeMenu(e); draw(); };
  function showSt(k) {
    const s = CC_ST[k];
    stInfo.replaceChildren(h('strong', {}, `${s.t} ("${s.es}"): `), s.what, ' ', h('span', { class: `ccsla ${s.sla}` }, slaText(s.sla)), ' ', `Next action: ${s.who}.`);
  }
  function draw() {
    const s = CC_ST[T.status];
    const supplier = h('select', { id: 'ccSup', onchange: (e) => { T.supplier = e.target.value; } },
      ['', 'Dell', 'HP', 'IDEMIA Hotline', 'Softplan', 'Otra entidad externa'].map((x) => h('option', { value: x }, x || '— supplier —')));
    supplier.value = T.supplier;
    const supT = h('input', { type: 'text', id: 'ccSupT', placeholder: 'Supplier ticket number', value: T.supTicket, oninput: (e) => { T.supTicket = e.target.value; } });
    const dt = h('input', { type: 'datetime-local', id: 'ccDate', value: T.date, onchange: (e) => { T.date = e.target.value; } });
    const menu = h('div', { class: 'ccmenu' },
      h('button', { class: 'btn', type: 'button', onclick: doAct('reply') }, 'Responder'),
      h('details', { class: 'ccdrop' }, h('summary', { class: 'btn' }, 'Responder y cambiar estado ▾'),
        h('div', { class: 'ccdropbody' },
          h('button', { class: 'btn', type: 'button', onclick: doAct('client') }, 'Esperando al cliente'),
          h('button', { class: 'btn', type: 'button', onclick: doAct('external') }, 'Esperando entidad externa'),
          h('button', { class: 'btn', type: 'button', onclick: doAct('date') }, 'Esperando una fecha'))),
      h('button', { class: 'btn', type: 'button', onclick: doAct('escalate') }, 'Responder y escalar'),
      h('button', { class: 'btn primary', type: 'button', onclick: doAct('solve') }, 'Responder y solucionar'));
    card.replaceChildren(
      h('div', { class: 'lhead' },
        h('div', {}, h('div', { class: 'label' }, 'Customer Care · Mi trabajo › #2318'), h('h2', {}, 'Enrolment station 3 cannot send records')),
        h('div', { class: 'row' },
          T.owner ? h('span', { class: 'pill good' }, 'Asignados a mí') : h('button', { class: 'btn', type: 'button', title: 'Gear icon (settings)', onclick: doAct('assign') }, '⚙ Asignar a mí'),
          h('details', { class: 'ccdrop right' }, h('summary', { class: 'btn', title: 'Más opciones' }, '⋮ Editar'),
            h('div', { class: 'ccdropbody' }, h('div', { class: 'label' }, 'Prioridad'),
              ['Critical', 'High', 'Low'].map((p) => h('button', { class: 'btn', type: 'button', onclick: doAct('priority', p) }, p)))))),
      h('div', { class: 'ccfacts' },
        h('div', {}, h('div', { class: 'label' }, 'Status'), h('span', { class: `ccbig tone-${s.tone}` }, s.t), h('div', { class: 'muted' }, `"${s.es}"`)),
        h('div', {}, h('div', { class: 'label' }, 'Next action'), h('strong', {}, s.who)),
        h('div', {}, h('div', { class: 'label' }, 'Priority'), h('span', { class: `pill ${pr[T.priority]}` }, T.priority)),
        h('div', {}, h('div', { class: 'label' }, 'Level'), h('strong', {}, T.owner ? CC_LEVELS[T.level] : 'Help Desk queue')),
        h('div', {}, h('label', { class: 'label', for: 'ccProj' }, 'Project'),
          h('select', { id: 'ccProj', onchange: (e) => { T.project = e.target.value; } }, ['JPS', 'Other project'].map((x) => h('option', { value: x, selected: T.project === x }, x)))),
        h('div', { class: 'ccslabox' }, h('div', { class: 'label' }, 'Resolution SLA'),
          h('div', { class: `bar${s.sla === 'run' ? '' : ' paused'}` }, h('span', { id: 'ccSlaBar', style: `width:${Math.min(100, T.sla)}%` })),
          h('div', { class: `ccsla ${s.sla}` }, slaText(s.sla)))),
      h('label', { class: 'field' }, 'Comment', comment),
      h('div', { class: 'row' }, h('label', { class: 'ccint', for: 'ccInterno' }, interno, ' Interno (hidden from the client)')),
      h('div', { class: 'row' }, h('span', { class: 'muted' }, 'Reply options:'), menu),
      h('details', { class: 'ccfields' }, h('summary', { class: 'muted' }, 'Fields for external entity and date'),
        h('div', { class: 'row' }, h('label', { class: 'field' }, 'External entity', supplier), h('label', { class: 'field' }, 'TKT de Entidad Externa', supT), h('label', { class: 'field' }, 'Fecha / Hora', dt))),
      T.status === 'resolved' ? h('div', { class: 'row ccclient' }, h('strong', {}, 'You are now the client:'),
        h('button', { class: 'btn good', type: 'button', onclick: doAct('accept') }, 'Accept the solution'),
        h('button', { class: 'btn bad', type: 'button', onclick: doAct('reject') }, 'Reject it')) : null,
      msg,
      h('div', { class: 'cclog' }, h('div', { class: 'label' }, 'Ticket history'), T.log.slice(0, 14).map((l) => h('div', { class: `ccline ${l.kind}`, 'data-notr': ['you', 'int'].includes(l.kind) ? '' : null },
        h('span', { class: 'muted mono' }, l.at.toLocaleTimeString(LOCALES[LANG], { hour: '2-digit', minute: '2-digit', second: '2-digit' })), ' ', h('strong', {}, l.who), ' ', l.text))),
      h('div', { class: 'row' }, h('button', { class: 'btn', type: 'button', onclick: () => render() }, '↺ Start again'),
        h('span', { class: 'muted' }, 'Try changing the status before taking the ticket, or waiting for a supplier without its ticket number.')));
    mapHolder.replaceChildren(ccStatusMap(T.status, showSt));
  }
  // The SLA bar fills while the clock runs, so a pause is visible at a glance.
  const timer = setInterval(() => {
    if (!card.isConnected) { if (T.drawn) clearInterval(timer); return; }
    T.drawn = true;
    if (CC_ST[T.status].sla === 'run' && T.sla < 100) { T.sla += 0.5; const b = document.getElementById('ccSlaBar'); if (b) b.style.width = `${Math.min(100, T.sla)}%`; }
  }, 400);

  // ---------- 2. scenario drill ----------
  const drill = h('div', { class: 'box' });
  const order = [...CC_DRILL.keys()].sort(() => Math.random() - 0.5);
  let qi = 0, score = 0;
  const best = Number(recall('ccDrillBest', '0'));
  function drawDrill() {
    if (qi >= order.length) {
      const p = pct(score, order.length);
      if (p > best) remember('ccDrillBest', String(p));
      drill.replaceChildren(h('h2', {}, 'Drill complete'), h('div', { class: 'stat' }, `${score}/${order.length}`),
        h('p', {}, p >= 85 ? 'Target met (85%). You know the Customer Care reply options.' : 'Below the 85% target. Run it again, then reread lesson 11.'),
        h('div', { class: 'row' }, h('button', { class: 'btn primary', type: 'button', onclick: () => { order.sort(() => Math.random() - 0.5); qi = 0; score = 0; drawDrill(); } }, 'Run it again'),
          h('a', { class: 'btn', href: '#/lesson?n=11' }, 'Open lesson 11')));
      return;
    }
    const d = CC_DRILL[order[qi]];
    const fb = h('div', { class: 'ccfb' });
    const keys = Object.keys(CC_ACTIONS).filter((k) => k !== 'back' || d.a === 'back');
    const buttons = keys.map((k) => h('button', { type: 'button', 'data-k': k, onclick: (e) => {
      if (fb.dataset.done) return; fb.dataset.done = '1';
      const right = k === d.a; if (right) score++;
      drill.querySelectorAll('.opts button').forEach((b) => { if (b.dataset.k === d.a) b.classList.add('right'); else if (b === e.currentTarget) b.classList.add('wrong'); });
      fb.replaceChildren(h('p', { class: right ? 'ok' : 'error' }, right ? 'Correct.' : 'Not quite.'), h('p', {}, ...txt(d.why)), h('p', { class: 'muted' }, `Customer Care manual ${d.ref}`),
        h('button', { class: 'btn primary', type: 'button', onclick: () => { qi++; drawDrill(); } }, qi + 1 < order.length ? 'Next scenario ›' : 'See the result'));
    } }, CC_ACTIONS[k]));
    drill.replaceChildren(
      h('div', { class: 'lhead' }, h('h2', {}, 'Scenario drill: pick the right action'),
        h('span', { class: 'pill' }, `${qi + 1} / ${order.length} · ${score} correct${best ? ` · best ${best}%` : ''}`)),
      h('p', { class: 'ccscen' }, ...txt(d.s)), h('div', { class: 'opts' }, buttons), fb);
  }
  draw(); drawDrill(); showSt(T.status);
  const ccFigs = figsFor(['CC:6.1', 'CC:6.2', 'CC:7.1']);
  return [
    h('div', { class: 'lhead' }, h('div', {}, h('div', { class: 'label' }, 'Customer Care (InvGate) · practice'), h('h1', {}, 'Work a ticket without risk')),
      h('div', { class: 'row' }, h('a', { class: 'btn', href: '#/lesson?n=11' }, 'Lesson 11'), h('a', { class: 'btn', href: '#/lesson?n=12' }, 'Lesson 12'))),
    h('p', { class: 'muted' }, 'A working copy of the Customer Care ticket screen. Take the ticket, document the work, change the status, escalate and solve, and watch the status, the next action and the SLA clock change exactly as the manual says they should.'),
    h('div', { class: 'box' }, h('h2', {}, 'The eight statuses'), mapHolder, stInfo),
    card,
    drill,
    ccFigs.length ? h('div', { class: 'box' }, h('h2', {}, 'The real screens'), figStrip(ccFigs, { max: 12 })) : null,
  ];
};

// ---------- router ----------
function alertInline(e) { view.prepend(errorBox(e)); }

async function render() {
  const name = (location.hash.replace(/^#\//, '') || 'dashboard').split('?')[0];
  const fn = VIEWS[name] || VIEWS.dashboard;
  document.querySelectorAll('#tabs a').forEach((a) => {
    const tab = name === 'lesson' ? 'plan' : name;
    view.classList.toggle('wide', ['lesson', 'visuals', 'plan', 'ask', 'issue', 'notes', 'practice'].includes(name));
    if (a.getAttribute('href') === `#/${tab}`) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
  });
  try {
    const nodes = await fn();
    view.replaceChildren(...nodes.flat().filter((n) => n !== null && n !== undefined && n !== false));
  } catch (e) {
    view.replaceChildren(errorBox(e));
  }
}

document.getElementById('logout').addEventListener('click', async () => {
  try { await api('/api/logout', { method: 'POST' }); } finally { window.location.replace('/login'); }
});
window.addEventListener('hashchange', render);

async function updateInboxBadge() {
  const a = document.querySelector('#tabs a[href="#/issue"]'); if (!a) return;
  let n = 0; try { n = (await api('/api/inbox/count')).n; } catch { return; }
  let b = a.querySelector('.navbadge');
  if (!n) { b?.remove(); return; }
  if (!b) { b = h('span', { class: 'navbadge' }); a.append(b); }
  b.textContent = n;
}
setInterval(() => { if (!document.hidden) updateInboxBadge(); }, 60000);
async function loadFigures() { try { FIGS = await api('/api/figures'); } catch { FIGS = []; } }
Promise.all([api('/api/meta'), api('/api/glossary').catch(() => []), loadFigures(), startI18n()])
  .then(([m, g]) => { META = m; GLOSSARY = g; buildAbbr(); aiStatus().catch(() => {}).finally(render); updateInboxBadge(); })
  .catch((e) => view.replaceChildren(errorBox(e)));

// =====================================================================
// AI: answers come only from your documents, with numbered citations.
// =====================================================================
// AI calls run as background jobs on the server; the page polls until they finish.
async function aiJob(path, body, onTick) {
  const { job } = await api(path, { method: 'POST', body });
  const t0 = Date.now();
  for (;;) {
    await new Promise((r) => setTimeout(r, 2000));
    const j = await api(`/api/ai/jobs/${job}`);
    if (onTick) onTick(j.seconds);
    if (j.status === 'done') return j.result;
    if (j.status === 'error') throw new Error(j.error);
    if (Date.now() - t0 > 6 * 60 * 1000) throw new Error('The AI took too long. Try again.');
  }
}
let DOCLIST = null;
async function docList() { if (!DOCLIST) { try { DOCLIST = await api('/api/documents'); } catch { DOCLIST = []; } } return DOCLIST; }
const aiTestBtn = () => {
  const b = h('button', { class: 'btn', type: 'button', title: 'Check the API key and model', onclick: async () => {
    b.disabled = true; b.textContent = 'Testing…';
    try { const r = await api('/api/ai/test', { method: 'POST' }); b.textContent = r.ok ? `AI connection OK ✓ (${r.model})` : `AI test failed: ${r.error}`; b.classList.toggle('bad', !r.ok); }
    catch (e) { b.textContent = `AI test failed: ${e.message}`; b.classList.add('bad'); }
    b.disabled = false;
  } }, 'Test AI connection');
  return b;
};
let AISTAT = null;
async function aiStatus(force = false) { if (!AISTAT || force) AISTAT = await api('/api/ai/status'); return AISTAT; }

function aiInline(s, cites) {
  // [n] citations become small pills; **bold** and `code` are honoured; everything else is text.
  const out = [];
  for (const part of String(s).split(/(\[\d+(?:,\s*\d+)*\]|\*\*[^*]+\*\*|`[^`]+`)/)) {
    if (!part) continue;
    const c = part.match(/^\[(\d+(?:,\s*\d+)*)\]$/);
    if (c) {
      for (const n of c[1].split(/,\s*/)) {
        const src = cites.find((x) => x.n === Number(n));
        out.push(h('a', { class: 'cite', href: '#', title: src ? `${src.docName} — ${src.loc}${src.title ? ' — ' + src.title : ''}` : 'source',
          onclick: (e) => { e.preventDefault(); const el = e.target.closest('.aianswer')?.querySelector(`[data-src="${n}"]`); if (el) { el.closest('details').open = true; el.scrollIntoView({ behavior: 'smooth', block: 'center' }); el.classList.add('flash-src'); setTimeout(() => el.classList.remove('flash-src'), 1500); } } }, n));
      }
    } else if (/^\*\*.+\*\*$/.test(part)) out.push(h('strong', {}, ...txt(part.slice(2, -2))));
    else if (/^`.+`$/.test(part)) out.push(h('code', {}, part.slice(1, -1)));
    else out.push(...txt(part));
  }
  return out;
}
function aiText(text, cites = []) {
  const blocks = []; let list = null, kind = null;
  const flush = () => { if (list) { blocks.push(list); list = null; kind = null; } };
  for (const raw of String(text || '').split('\n')) {
    const line = raw.trim();
    if (!line) { flush(); continue; }
    const bullet = line.match(/^[-•*]\s+(.*)$/), num = line.match(/^(\d+)[.)]\s+(.*)$/);
    if (bullet || num) {
      const k = bullet ? 'ul' : 'ol';
      if (kind !== k) { flush(); list = h(k, { 'data-notr': '' }); kind = k; }
      const body = bullet ? bullet[1] : num[2];
      list.append(h('li', { class: body.startsWith('⚠') ? 'warnline' : '' }, ...aiInline(body, cites)));
    } else { flush(); blocks.push(h('p', { class: line.startsWith('⚠') ? 'warnline' : '', 'data-notr': '' }, ...aiInline(line, cites))); }
  }
  flush();
  return blocks;
}
function aiSources(cites) {
  if (!cites?.length) return null;
  const list = h('ol', {}, cites.map((c) => h('li', { 'data-src': c.n, 'data-doc': c.doc, 'data-loc': c.loc },
    h('strong', {}, c.docName), ` — ${c.loc}${c.title ? ' — ' + c.title : ''} `, h('span', { class: 'openpdf' }), h('div', { class: 'muted' }, c.excerpt, '…'))));
  // Add "Open page" links when that document's PDF has been uploaded and linked on the Documents page.
  docList().then((docs) => {
    for (const li of list.children) {
      const d = docs.find((x) => x.src === li.dataset.doc); if (!d) continue;
      const m = /^p\.(\d+)/.exec(li.dataset.loc || '');
      li.querySelector('.openpdf').replaceChildren(h('a', { class: 'pill', href: `/api/documents/${d.id}/view${m ? `#page=${m[1]}` : ''}`, target: '_blank', rel: 'noopener' }, m ? `Open page ${m[1]} ↗` : 'Open document ↗'));
    }
  });
  return h('details', { class: 'aisources' }, h('summary', { class: 'muted' }, `Sources (${cites.length})`), list);
}
async function saveNote(kind, title, text, extra = {}) { return api('/api/notes', { method: 'POST', body: { kind, title, text, ...extra } }); }
const saveBtn = (getNote, label = '💾 Save to my notes') => h('button', { class: 'btn', type: 'button', onclick: async (e) => {
  const b = e.target; b.disabled = true;
  try { const n = getNote(); await saveNote(n.kind, n.title, n.text, n.extra || {}); b.textContent = 'Saved ✓'; }
  catch (err) { b.textContent = err.message; b.disabled = false; } } }, label);
const aiFigs = (keys, title = 'Pictures') => {
  const list = (keys || []).map(figByKey).filter(Boolean);
  return list.length ? figStrip(list, { max: 6, title }) : null;
};
const aiUsage = (u) => u ? h('div', { class: 'muted aiusage' }, `${u.input + u.output} tokens${u.cached ? ` (${u.cached} cached)` : ''}`) : null;

function aiSetup(st, offerReplace = false) {
  if (!st.enabled) return h('div', { class: 'note' }, h('strong', {}, 'AI is not switched on yet. '),
    'In Railway, open the techman service → Variables, add ANTHROPIC_API_KEY with your key, and let it redeploy.');
  if (!st.pack || offerReplace) {
    const file = h('input', { type: 'file', accept: '.tkpack', id: 'kbFile' });
    const msg = h('p', { role: 'status', class: 'muted' });
    const go = h('button', { class: 'btn primary', type: 'button', onclick: async () => {
      if (!file.files[0]) { msg.textContent = 'Choose techman-knowledge.tkpack.'; return; }
      go.disabled = true; msg.textContent = 'Encrypting and loading…';
      const fd = new FormData(); fd.append('file', file.files[0]);
      try { const r = await api('/api/ai/knowledge', { method: 'POST', body: fd }); msg.className = 'ok'; msg.textContent = `Loaded ${r.chunks} sections.`; await aiStatus(true); setTimeout(render, 700); }
      catch (e) { msg.className = 'error'; msg.textContent = e.message; go.disabled = false; }
    } }, 'Encrypt and load');
    if (st.pack) return h('details', { class: 'box' }, h('summary', { class: 'muted', style: 'cursor:pointer' }, `Knowledge pack: ${st.pack.chunks} sections + ${st.loaded?.notes || 0} of your notes. Replace it with a newer pack…`),
      h('div', { class: 'row' }, file, go), msg);
    return h('div', { class: 'box uploadfirst' }, h('h2', {}, 'Set up: load the knowledge pack (one time)'),
      h('p', {}, 'Choose ', h('code', {}, 'techman-knowledge.tkpack'), ' from your TECHMAN\\ai-pack folder. It holds the text of all 34 documents, so the AI can search them. It is encrypted before it is stored, like your PDFs.'),
      h('div', { class: 'row' }, file, go), msg);
  }
  return null;
}
function docFilterSelect(id, includeAll = 'All documents') {
  const s = h('select', { id }, includeAll ? h('option', { value: '' }, includeAll) : null,
    META.sourceGroups.map((g) => h('optgroup', { label: g.name }, g.codes.map((c) => h('option', { value: c }, srcName(c))))));
  return s;
}

// ---------- Ask AI ----------
const ASK = { thread: [] };
VIEWS.ask = async () => {
  const st = await aiStatus(true);
  const setup = aiSetup(st, true);
  const thread = h('div', { class: 'aithread', 'data-notr': '' });
  const box = h('textarea', { id: 'askBox', rows: 3, placeholder: 'Ask anything about the system or the procedures, e.g. "How do I check which MBSS services are running?"' });
  const scope = docFilterSelect('askDoc');
  const btn = h('button', { class: 'btn primary', type: 'button' }, 'Ask ▶');
  const status = h('span', { class: 'muted' });
  const drawTurn = (t) => {
    if (t.role === 'user') return h('div', { class: 'aiq' }, h('div', { class: 'label' }, 'You asked'), h('p', {}, t.content));
    const qi = ASK.thread.indexOf(t) - 1;
    return h('div', { class: 'box aianswer' }, h('div', { class: 'label' }, 'Answer from your documents'),
      ...aiText(t.content, t.cites), aiFigs(t.figures, 'Pictures that show it'), aiSources(t.cites),
      h('div', { class: 'row', style: 'justify-content:space-between' }, saveBtn(() => ({ kind: 'answer', title: ASK.thread[qi]?.content || 'AI answer', text: t.content })), aiUsage(t.usage)));
  };
  const draw = () => { thread.replaceChildren(...ASK.thread.map(drawTurn)); };
  async function send(qText) {
    const question = (qText || box.value).trim(); if (!question) return;
    btn.disabled = true; status.textContent = 'Searching your documents and thinking… (10–30 s)';
    ASK.thread.push({ role: 'user', content: question }); draw(); box.value = '';
    try {
      const r = await aiJob('/api/ai/ask', { question, docs: scope.value ? [scope.value] : null,
        history: ASK.thread.slice(0, -1).slice(-4).map((t) => ({ role: t.role, content: t.content })) },
        (sec) => { status.textContent = `Searching your documents and thinking… ${sec}s`; });
      ASK.thread.push({ role: 'assistant', content: r.answer, cites: r.cites, figures: r.figures, usage: r.usage });
      status.textContent = '';
    } catch (e) { ASK.thread.pop(); box.value = question; status.textContent = ''; thread.append(errorBox(e)); btn.disabled = false; return; }
    btn.disabled = false; draw(); thread.lastChild?.scrollIntoView({ behavior: 'smooth', block: 'start' }); aiStatus(true);
  }
  btn.addEventListener('click', () => send());
  if (ASK.pending && st.enabled && st.pack) { const qp = ASK.pending; ASK.pending = null; setTimeout(() => send(qp), 0); }
  box.addEventListener('keydown', (e) => { if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) send(); });
  draw();
  const examples = ['How do I escalate a case to the Tech team in GLPI?', 'What does MBSS do and how do I check its services?', 'A remote site cannot send dossiers. What evidence do I collect?', 'How do I add a datafile to an Oracle tablespace?', 'What is the difference between TTO and TTR?', 'How is the system shut down in the right order?'];
  return [
    h('div', { class: 'lhead' }, h('div', {}, h('div', { class: 'label' }, `AI tutor · ${st.model} · ${st.usedToday}/${st.dailyLimit} today`), h('h1', {}, 'Ask your documents')),
      h('div', { class: 'row' }, aiTestBtn(), ASK.thread.length ? h('button', { class: 'btn', type: 'button', onclick: () => { ASK.thread = []; render(); } }, 'New conversation') : null)),
    setup,
    h('p', { class: 'muted' }, 'Answers use only your 34 documents and cite them [1], [2]… Click a number to see the passage. Risky actions are marked ⚠.'),
    thread,
    st.enabled && st.pack ? h('div', { class: 'box askbar' }, box,
      h('div', { class: 'row' }, h('label', { for: 'askDoc', class: 'label' }, 'Search in'), scope, btn, status),
      ASK.thread.length ? null : h('div', { class: 'chips' }, examples.map((x) => h('button', { class: 'chip', type: 'button', onclick: () => send(x) }, x)))) : null,
  ];
};

// ---------- Fix an issue ----------
const ISSUE = { last: null, input: null };
let TOPO = null, NETTM = { push: false };
VIEWS.issue = async () => {
  const st = await aiStatus(true);
  if (!TOPO) TOPO = await api('/api/ai/topology').catch(() => null);
  NETTM = await api('/api/nettm/status').catch(() => ({ push: false }));
  const openId = new URLSearchParams(location.hash.split('?')[1] || '').get('open');
  const setup = aiSetup(st);
  const symptom = h('textarea', { id: 'isSym', rows: 5, placeholder: 'What is happening? Error messages, which screen, how many users or stations…' });
  const site = h('select', { id: 'isSite' }, ['Not sure', 'Central site', 'CIB (remote site)', 'Montego Bay (MOB)', 'May Pen (MPN)', 'St Mary (STM)', 'Norman Manley Airport (workstations)', 'Sangster Airport (workstations)', "Commissioner's office (workstations)"].map((x) => h('option', {}, x)));
  const when = h('input', { type: 'text', id: 'isWhen', placeholder: 'e.g. since 9:40 this morning, every time' });
  const tried = h('textarea', { id: 'isTried', rows: 2, placeholder: 'What has been tried already (optional)' });
  const fill = (x) => { symptom.value = x.symptom || ''; site.value = x.site || 'Not sure'; if (site.value === '') site.value = 'Not sure'; when.value = x.when || ''; tried.value = x.tried || ''; };
  if (ISSUE.input) fill(ISSUE.input);
  const fromBadge = h('div', { class: 'frominbox', hidden: true, 'data-notr': '' });
  let formBox = null;
  const out = h('div', { class: 'issueout', 'data-notr': '' });
  const status = h('span', { class: 'muted' });
  const btn = h('button', { class: 'btn primary', type: 'button' }, 'Build my plan ▶');
  const examples = [
    ['Remote site down', 'CIB stations cannot send dossiers to central. MESA shows transmission errors. Started this morning; other sites seem OK.'],
    ['Matcher slow', 'Tenprint searches are taking much longer than normal and the review queue is growing. No error on screen.'],
    ['Oracle space', 'Users get an error when saving a new person record. The DBA thinks a tablespace may be full.'],
    ['Station scanner', 'A LiveScan station at May Pen does not detect the fingerprint scanner after a reboot.'],
  ];
  async function go() {
    if (!symptom.value.trim()) { status.textContent = 'Describe the issue first.'; return; }
    ISSUE.input = { symptom: symptom.value, site: site.value, when: when.value, tried: tried.value, inboxId: ISSUE.input?.inboxId, glpi: ISSUE.input?.glpi };
    btn.disabled = true; status.textContent = 'Reading the procedures and building a plan… (20–60 s)';
    try { ISSUE.last = await aiJob('/api/ai/issue', ISSUE.input, (sec) => { status.textContent = `Reading the procedures and building a plan… ${sec}s`; }); ISSUE.last.input = { ...ISSUE.input }; status.textContent = ''; drawPlan(); aiStatus(true); if (window.innerWidth < 900) out.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    catch (e) { status.textContent = ''; out.replaceChildren(errorBox(e)); }
    btn.disabled = false;
  }
  btn.addEventListener('click', go);
  const copyBtn = (getText, label = 'Copy') => h('button', { class: 'btn', type: 'button', onclick: async (e) => {
    try { await navigator.clipboard.writeText(getText()); e.target.textContent = 'Copied ✓'; setTimeout(() => { e.target.textContent = label; }, 1500); } catch { e.target.textContent = 'Select and copy manually'; } } }, label);

  function drawPlan() {
    const r = ISSUE.last; if (!r) { out.replaceChildren(howTo()); return; }
    const p = r.plan, c = p.classification || {}, cites = r.cites;
    const sev = { High: 'bad', Medium: 'warn', Low: 'good' };
    out.replaceChildren(h('div', { class: 'aianswer', style: 'display:flex;flex-direction:column;gap:14px' },
      h('div', { class: 'box' },
        h('div', { class: 'label' }, 'Summary'), h('p', { style: 'font-size:17px' }, ...aiInline(p.summary, cites)),
        h('div', { class: 'row' }, c.type ? h('span', { class: 'pill' }, c.type) : null, c.error_class ? h('span', { class: 'pill' }, c.error_class) : null,
          c.severity ? h('span', { class: `pill ${sev[c.severity] || ''}` }, `Severity: ${c.severity}`) : null, c.category_prefix ? h('span', { class: 'pill' }, `Category: ${c.category_prefix}-…`) : null,
          p.confidence ? h('span', { class: 'pill' }, `Confidence: ${p.confidence}`) : null),
        p.incomplete?.length ? h('p', { class: 'error' }, `The AI left out: ${p.incomplete.join(', ')}. Click "Build my plan" again for a complete plan.`) : null,
        c.components?.length ? h('div', { class: 'dflow comp' }, c.components.flatMap((x, i) => [i ? h('div', { class: 'darrow' }, '→') : null, h('div', { class: 'dnode tone-blue' }, h('strong', {}, ...txt(x)))])) : null,
        c.why ? h('p', { class: 'muted' }, ...aiInline(c.why, cites)) : null),
      pathBox(r),
      h('div', { class: 'grid' },
        p.ask_first?.length ? h('div', { class: 'box' }, h('h3', {}, 'Ask the client first'), h('ul', {}, p.ask_first.map((x) => h('li', {}, ...aiInline(x, cites))))) : null,
        p.evidence?.length ? h('div', { class: 'box' }, h('h3', {}, 'Collect this evidence'),
          h('ul', { class: 'checklist' }, p.evidence.map((x, i) => h('li', {}, h('label', {}, h('input', { type: 'checkbox', id: `ev${i}` }), ' ', h('strong', {}, ...txt(x.item)), ' — ', ...aiInline(x.how, cites)))))) : null),
      !(p.steps || []).length ? null : h('div', { class: 'box' }, h('h2', {}, 'Steps'),
        h('ol', { class: 'issuesteps' }, (p.steps || []).map((s, si) => h('li', { class: `${s.caution ? 'caution' : ''}${s.done ? ' done' : ''}` },
          h('h3', {}, s.caution ? '⚠ ' : '', ...txt(s.title)),
          h('label', { class: 'stepdone' }, h('input', { type: 'checkbox', id: `sd${si}`, checked: Boolean(s.done), onchange: (e) => { s.done = e.target.checked; e.target.closest('li').classList.toggle('done', s.done); } }), 'Done'),
          ...aiText(s.detail, cites),
          (s.cites || []).length ? h('div', { class: 'row' }, h('span', { class: 'muted' }, 'From: '), ...aiInline(`[${s.cites.join(',')}]`, cites)) : null,
          aiFigs(s.pictures, 'Screen for this step'))))),
      h('div', { class: 'grid' },
        !p.escalation?.to ? null : h('div', { class: 'box' }, h('h3', {}, `Escalation: ${p.escalation?.to || ''}`), h('p', {}, ...aiInline(p.escalation?.needed_if || '', cites)),
          h('ul', {}, (p.escalation?.checklist || []).map((x) => h('li', {}, ...aiInline(x, cites))))),
        !p.ticket?.title ? null : h('div', { class: 'box' }, h('h3', {}, 'GLPI ticket draft'),
          h('label', { class: 'field' }, 'Title', h('input', { type: 'text', value: p.ticket?.title || '', id: 'tkTitle' })),
          h('label', { class: 'field' }, 'Description', h('textarea', { rows: 9, id: 'tkDesc' }, p.ticket?.description || '')),
          h('div', { class: 'row' }, copyBtn(() => document.getElementById('tkTitle').value, 'Copy title'), copyBtn(() => document.getElementById('tkDesc').value, 'Copy description')),
          h('p', { class: 'muted' }, 'Fill in the [ ] parts before pasting into GLPI.'))),
      p.gaps?.length ? h('div', { class: 'note' }, h('strong', {}, 'Not covered by your documents — confirm with your coordinator or the Tech team: '), h('ul', {}, p.gaps.map((x) => h('li', {}, x)))) : null,
      fixBox(r),
      aiFigs(r.figures, 'More related pictures'),
      aiSources(cites), aiUsage(r.usage)));
  }
  function howTo() {
    const step = (n, t, d) => h('div', { class: 'hstep' }, h('div', { class: 'hnum' }, n), h('strong', {}, t), h('div', { class: 'muted' }, d));
    return h('div', { class: 'box howto' }, h('h2', {}, 'How this works'),
      h('div', { class: 'howflow' },
        step(1, 'Pick or describe', 'Click an inbox item, or type the problem and choose the site.'), h('div', { class: 'darrow' }, '→'),
        step(2, 'Build my plan', 'The AI reads your documents and notes (20–90 s).'), h('div', { class: 'darrow' }, '→'),
        step(3, 'Work the plan', 'Where to look on the network, evidence, steps with screenshots, escalation, ticket draft.'), h('div', { class: 'darrow' }, '→'),
        step(4, 'Save the fix', 'What really fixed it goes into My notes, so next time the answer is better.')),
      h('p', { class: 'muted' }, 'Steps marked ⚠ change or restart production. Get approval first.'));
  }
  // Where the problem sits: the path from the site to central, suspects in red, exportable to nettm.
  function nettmButtons(r) {
    const msg = h('span', { class: 'muted' });
    const dl = h('button', { class: 'btn', type: 'button', onclick: async () => { try { await nettmDownload(r); } catch (e) { msg.textContent = e.message; } } }, '⬇ Export to nettm (CSV)');
    const send = h('button', { class: 'btn primary', type: 'button', hidden: !NETTM.push, onclick: async () => {
      send.disabled = true; msg.textContent = 'Sending to nettm…';
      try { const x = await api('/api/nettm/send', { method: 'POST', body: nettmBody(r) }); const t = x.result?.topology;
        msg.textContent = `In nettm ✓ ${x.devices} devices${t ? ` · ${t.devicesCreated} new devices, ${t.linksCreated} links` : ''}${x.result?.suspectsMarked ? ` · ${x.result.suspectsMarked} marked suspect` : ''}`;
        if (x.result?.url) msg.append(' ', h('a', { href: x.result.url, target: '_blank', rel: 'noopener' }, 'Open in nettm ↗')); }
      catch (e) { msg.textContent = e.message; }
      send.disabled = false;
    } }, '⇪ Send to nettm');
    return h('div', { class: 'row' }, send, dl, msg);
  }
  function pathBox(r) {
    if (!r.path?.length || !TOPO) return null;
    const byId = Object.fromEntries(TOPO.nodes.map((n) => [n.id, n]));
    const sus = new Set(r.suspects || []);
    const nodes = r.path.map((id) => byId[id]).filter(Boolean);
    for (const id of sus) if (!r.path.includes(id) && byId[id]) nodes.push(byId[id]);
    const card = (n) => h('div', { class: `pnode${sus.has(n.id) ? ' suspect' : ''}`, title: n.desc },
      h('div', { class: 'ptype' }, n.type, n.model ? ` · ${n.model}` : ''), h('strong', {}, n.name), n.ip ? h('div', { class: 'mono' }, n.ip) : null,
      sus.has(n.id) ? h('div', { class: 'ptag' }, 'Suspect') : null);
    return h('div', { class: 'box' },
      h('div', { class: 'lhead' }, h('h2', {}, 'Where to look'), nettmButtons(r)),
      h('p', { class: 'muted' }, r.site ? `Path from ${TOPO.sites[r.site]?.name || r.site} to the central servers. Red = parts the AI thinks are most likely involved. Hover a box for details.` : 'Central servers. Choose a site above for the full path. Red = most likely involved.'),
      h('div', { class: 'ppath' }, nodes.flatMap((n, i) => [i ? h('div', { class: 'darrow' }, '→') : null, card(n)])));
  }
  const nettmBody = (r) => ({ path: r.path, suspects: r.suspects, site: r.site, title: r.plan?.ticket?.title || r.plan?.summary?.slice(0, 120) || '', summary: r.plan?.summary || '', glpi: r.input?.glpi || ISSUE.input?.glpi || '' });
  async function nettmDownload(r) {
    const res = await fetch('/api/nettm/csv', { method: 'POST', credentials: 'same-origin', headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'techman' }, body: JSON.stringify(nettmBody(r)) });
    if (!res.ok) throw new Error((await res.json().catch(() => ({}))).error || `Export failed (${res.status}).`);
    const name = (/filename="([^"]+)"/.exec(res.headers.get('Content-Disposition') || '') || [])[1] || 'techman.csv';
    const a = h('a', { href: URL.createObjectURL(await res.blob()), download: name });
    document.body.append(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
  }
  // Close the loop: what really fixed it goes into your notes, and the AI searches them next time.
  function fixBox(r) {
    const fixed = h('textarea', { rows: 3, id: 'fixText', placeholder: 'What actually fixed it? e.g. "Restarted the IPsec tunnel on s2t1fw01; dossiers flowed again after 2 min."' });
    const msg = h('span', { class: 'muted' });
    const b = h('button', { class: 'btn primary', type: 'button', onclick: async () => {
      if (!fixed.value.trim()) { msg.textContent = 'Write what fixed it first.'; return; }
      b.disabled = true;
      try {
        const inp = r.input || ISSUE.input || {};
        await saveNote('fix', r.plan?.ticket?.title || r.plan?.summary?.slice(0, 80) || 'Fix', `Problem: ${inp.symptom || ''}\nSite: ${inp.site || ''}\nWhat fixed it: ${fixed.value.trim()}`, { site: inp.site || '' });
        if (inp.inboxId) await api(`/api/inbox/${inp.inboxId}/status`, { method: 'POST', body: { status: 'done' } }).catch(() => {});
        msg.textContent = 'Saved to your notes ✓ The AI will use it next time.'; refreshInbox();
      } catch (e) { msg.textContent = e.message; b.disabled = false; }
    } }, 'Save the fix');
    return h('div', { class: 'box' }, h('h3', {}, 'When it is solved'), fixed,
      h('div', { class: 'row' }, b, saveBtn(() => ({ kind: 'plan', title: r.plan?.ticket?.title || 'Issue plan', text: `${r.plan?.summary || ''}\n\n${(r.plan?.steps || []).map((s, i) => `${i + 1}. ${s.title}: ${s.detail}`).join('\n')}` }), '💾 Save this plan'), msg));
  }

  // ---------- Issue inbox ----------
  const inboxList = h('div', { class: 'inboxlist', 'data-notr': '' });
  const inboxHead = h('span', { class: 'muted' });
  const auto = h('input', { type: 'checkbox', id: 'autoplan' });
  auto.addEventListener('change', async () => { try { await api('/api/inbox/settings', { method: 'POST', body: { autoplan: auto.checked } }); } catch (e) { inboxHead.textContent = e.message; } });
  const stLabel = { triaging: 'Reading…', new: 'New', planned: 'Plan ready', opened: 'Opened', done: 'Done', 'not-an-issue': 'Not an issue', error: 'Error' };
  async function openItem(it) {
    inboxList.querySelectorAll('.inboxitem').forEach((x) => x.classList.toggle('sel', x.dataset.id === it.id));
    ISSUE.selected = it.id;
    const t = it.triage || {};
    fill({ symptom: t.symptom || it.text, site: t.site, when: t.when, tried: t.tried });
    ISSUE.input = { symptom: symptom.value, site: site.value, when: when.value, tried: tried.value, inboxId: it.id, glpi: t.glpi_ticket };
    fromBadge.hidden = false; status.textContent = '';
    fromBadge.replaceChildren(h('strong', {}, '📥 From the inbox: '), it.subject || '(no subject)', ` — ${it.from || ''}`, t.glpi_ticket ? h('span', { class: 'pill' }, `GLPI ${t.glpi_ticket}`) : null,
      h('details', {}, h('summary', { class: 'muted' }, 'Original message'), h('pre', { class: 'origmsg' }, it.text)));
    if (it.plan) { ISSUE.last = { ...it.plan, input: { ...ISSUE.input } }; drawPlan(); } else { ISSUE.last = null; out.replaceChildren(); }
    if (it.status === 'new') api(`/api/inbox/${it.id}/status`, { method: 'POST', body: { status: 'opened' } }).catch(() => {});
    symptom.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  async function refreshInbox() {
    if (!inboxList.isConnected && inboxList.dataset.started) return false;
    inboxList.dataset.started = '1';
    let d; try { d = await api('/api/inbox'); } catch (e) { inboxHead.textContent = e.message; return true; }
    auto.checked = d.autoplan;
    const items = d.items.filter((x) => x.status !== 'done');
    inboxHead.textContent = d.items.length ? `${items.length} open` : (d.webhook ? 'Empty. Emails sent to your inbox address appear here.' : 'Empty. Paste a message below; email delivery is not set up yet.');
    inboxList.replaceChildren(...items.map((it) => {
      const t = it.triage || {};
      const pr = { High: 'bad', Medium: 'warn', Low: 'good' }[it.priority] || '';
      return h('div', { class: `inboxitem st-${it.status}${ISSUE.selected === it.id ? ' sel' : ''}`, 'data-id': it.id },
        h('button', { class: 'inboxopen', type: 'button', onclick: () => openItem(it), disabled: it.status === 'triaging' },
          h('div', { class: 'row' }, h('span', { class: 'pill' }, stLabel[it.status] || it.status), it.priority ? h('span', { class: `pill ${pr}` }, it.priority) : null,
            t.site && t.site !== 'Not sure' ? h('span', { class: 'pill' }, t.site) : null, h('span', { class: 'muted' }, fmtDate(it.received_at))),
          h('strong', {}, t.title || it.subject || '(no subject)'), h('div', { class: 'muted' }, it.from || (it.source === 'pasted' ? 'Pasted' : '')),
          it.error ? h('div', { class: 'error' }, it.error) : null,
          it.status === 'planned' ? h('div', { class: 'ok' }, 'Plan ready — click to open it ▶') : null),
        h('div', { class: 'row' },
          ['error', 'new', 'not-an-issue', 'opened', 'planned'].includes(it.status) ? h('button', { class: 'btn', type: 'button', onclick: async () => { await api(`/api/inbox/${it.id}/retry`, { method: 'POST' }).catch(() => {}); setTimeout(refreshInbox, 800); } }, it.status === 'error' ? 'Retry' : 'Re-read') : null,
          h('button', { class: 'btn', type: 'button', onclick: async () => { await api(`/api/inbox/${it.id}/status`, { method: 'POST', body: { status: 'archived' } }).catch(() => {}); refreshInbox(); } }, 'Archive')));
    }));
    updateInboxBadge();
    if (openId && !inboxList.dataset.opened) { const it = d.items.find((x) => x.id === openId); if (it) { inboxList.dataset.opened = '1'; openItem(it); } }
    return true;
  }
  (async function loop() { if (await refreshInbox()) setTimeout(loop, 30000); })();
  const imp = h('textarea', { rows: 4, id: 'impText', placeholder: 'Paste an email or a GLPI ticket here (Spanish is fine)…' });
  const impFile = h('input', { type: 'file', accept: '.eml,message/rfc822', id: 'impFile' });
  const impMsg = h('span', { class: 'muted' });
  const impBtn = h('button', { class: 'btn', type: 'button', onclick: async () => {
    impBtn.disabled = true; impMsg.textContent = 'Adding…';
    try {
      let body;
      if (impFile.files[0]) {
        const buf = new Uint8Array(await impFile.files[0].arrayBuffer()); let bin = '';
        for (let i = 0; i < buf.length; i += 0x8000) bin += String.fromCharCode(...buf.subarray(i, i + 0x8000));
        body = { eml: btoa(bin) };
      } else body = { text: imp.value, subject: imp.value.trim().split('\n')[0].slice(0, 120) };
      await api('/api/inbox/import', { method: 'POST', body });
      imp.value = ''; impFile.value = ''; impMsg.textContent = 'Added. The AI is reading it…';
      setTimeout(refreshInbox, 500); setTimeout(refreshInbox, 6000); setTimeout(refreshInbox, 15000);
    } catch (e) { impMsg.textContent = e.message; }
    impBtn.disabled = false;
  } }, 'Add to inbox');
  const inboxPanel = h('div', { class: 'box inboxbox' },
    h('div', { class: 'lhead' }, h('h2', {}, '📥 Issue inbox'), inboxHead),
    h('label', { class: 'row muted', for: 'autoplan' }, auto, ' Build the plan automatically when an issue arrives (uses one more AI request each)'),
    inboxList,
    h('details', {}, h('summary', { style: 'cursor:pointer;font-weight:600' }, 'Import an email or ticket'),
      imp, h('div', { class: 'row' }, impFile, impBtn, impMsg)));
  drawPlan();
  return [
    h('div', {}, h('div', { class: 'label' }, `Issue helper · ${st.usedToday}/${st.dailyLimit} AI requests today`), h('h1', {}, 'Fix an issue')),
    setup,
    st.enabled && st.pack ? h('div', { class: 'issuegrid' },
      h('div', { class: 'issueleft' }, inboxPanel, formBox = h('div', { class: 'box' },
        fromBadge,
        h('label', { class: 'field', for: 'isSym' }, 'What is the problem?', symptom),
        h('div', { class: 'chips' }, examples.map(([t, v]) => h('button', { class: 'chip', type: 'button', onclick: () => { symptom.value = v; } }, t))),
        h('label', { class: 'field', for: 'isSite' }, 'Where', site),
        h('label', { class: 'field', for: 'isWhen' }, 'Since when', when),
        h('label', { class: 'field', for: 'isTried' }, 'Already tried', tried),
        h('div', { class: 'row' }, btn, status, h('button', { class: 'btn', type: 'button', title: 'Empty the form and the plan to start a new issue', onclick: () => {
          const had = Boolean(ISSUE.last || symptom.value.trim() || when.value || tried.value);
          ISSUE.input = null; ISSUE.last = null; ISSUE.selected = null; fill({}); fromBadge.hidden = true; drawPlan();
          inboxList.querySelectorAll('.inboxitem.sel').forEach((x) => x.classList.remove('sel'));
          formBox.classList.remove('flash'); void formBox.offsetWidth; formBox.classList.add('flash');
          status.textContent = had ? 'Cleared. Ready for a new issue.' : 'Already empty. Type a new issue or pick one from the inbox.';
          setTimeout(() => { if (status.textContent.startsWith('Cleared') || status.textContent.startsWith('Already')) status.textContent = ''; }, 4000);
          formBox.scrollIntoView({ behavior: 'smooth', block: 'start' }); symptom.focus({ preventScroll: true });
        } }, 'Clear')),
        h('p', { class: 'muted' }, 'You get: classification, evidence checklist, ordered steps with the matching screenshots, where to look on the network, when and how to escalate, and a GLPI ticket draft. Everything is cited from your documents.'))),
      out) : null,
  ];
};

// ---------- My notes ----------
VIEWS.notes = async () => {
  const notes = await api('/api/notes');
  const kinds = { fix: 'Fix', note: 'Note', answer: 'AI answer', plan: 'Issue plan' };
  const title = h('input', { type: 'text', id: 'nTitle', placeholder: 'Short title, e.g. "MOB tunnel drops after power cut"' });
  const text = h('textarea', { rows: 5, id: 'nText', placeholder: 'What you learned or what fixed it. The AI searches these together with the documents.' });
  const kind = h('select', { id: 'nKind' }, h('option', { value: 'note' }, 'Note'), h('option', { value: 'fix' }, 'Fix'));
  const msg = h('span', { class: 'muted' });
  const filter = h('input', { type: 'search', placeholder: 'Filter…', id: 'nFilter' });
  const list = h('div', { class: 'notelist', 'data-notr': '' });
  const draw = () => {
    const f = filter.value.toLowerCase();
    list.replaceChildren(...notes.filter((n) => !f || `${n.title} ${n.text}`.toLowerCase().includes(f)).map((n) => h('div', { class: 'box' },
      h('div', { class: 'lhead' }, h('div', {}, h('span', { class: `pill ${n.kind === 'fix' ? 'good' : ''}` }, kinds[n.kind] || n.kind), ' ', h('span', { class: 'muted' }, fmtDate(n.created_at)), n.site ? h('span', { class: 'pill' }, n.site) : null),
        h('button', { class: 'btn', type: 'button', onclick: async (e) => { if (e.target.dataset.sure !== '1') { e.target.dataset.sure = '1'; e.target.textContent = 'Click again to delete'; return; }
          await api(`/api/notes/${n.id}`, { method: 'DELETE' }); render(); } }, 'Delete')),
      h('h3', {}, n.title), ...aiText(n.text, []))));
    if (!list.children.length) list.append(h('p', { class: 'muted' }, notes.length ? 'No match.' : 'No notes yet. Save AI answers, issue plans and fixes here, or write your own.'));
  };
  filter.addEventListener('input', draw); draw();
  return [
    h('div', {}, h('div', { class: 'label' }, `${notes.length} notes · encrypted · searched by the AI`), h('h1', {}, 'My notes and fixes')),
    h('div', { class: 'box' }, h('h2', {}, 'Add a note'), h('div', { class: 'row' }, kind, title), text,
      h('div', { class: 'row' }, h('button', { class: 'btn primary', type: 'button', onclick: async () => {
        try { await saveNote(kind.value, title.value || text.value.slice(0, 60), text.value); render(); } catch (e) { msg.textContent = e.message; } } }, 'Save'), msg)),
    h('div', { class: 'row' }, filter), list,
  ];
};

// ---------- Ask about this picture (inside the viewer) ----------
function figureAskBox(f) {
  const box = h('textarea', { rows: 2, placeholder: 'Ask about this picture…' });
  const ans = h('div', { class: 'aianswer' });
  const btn = h('button', { class: 'btn', type: 'button', onclick: async () => {
    const question = box.value.trim(); if (!question) return;
    btn.disabled = true; ans.replaceChildren(h('p', { class: 'muted' }, 'Looking at the picture…'));
    try { const r = await aiJob('/api/ai/figure', { key: f.key, question }); ans.replaceChildren(...aiText(r.answer, r.cites), aiSources(r.cites)); }
    catch (e) { ans.replaceChildren(errorBox(e)); }
    btn.disabled = false;
  } }, 'Ask AI');
  box.addEventListener('keydown', (e) => { e.stopPropagation(); if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) btn.click(); });
  const tr = h('button', { class: 'btn', type: 'button', title: 'List the Spanish labels on this screen with their English meaning', onclick: async () => {
    tr.disabled = true; ans.replaceChildren(h('p', { class: 'muted' }, 'Reading the labels on this screen…'));
    try { const r = await aiJob('/api/ai/figure', { key: f.key, mode: 'translate' }); ans.replaceChildren(...aiText(r.answer, [])); }
    catch (e) { ans.replaceChildren(errorBox(e)); }
    tr.disabled = false;
  } }, '🌐 Translate this screen');
  return h('section', { class: 'vask' }, h('div', { class: 'ltag' }, 'Ask about this picture'), box, h('div', { class: 'row' }, btn, tr), ans);
}

// ---------- AI quiz and coaching ----------
function aiQuizBox() {
  const doc = docFilterSelect('aqDoc', null);
  doc.value = recall('aqDoc', 'A3A');
  const topic = h('input', { type: 'text', id: 'aqTopic', placeholder: 'Topic (optional), e.g. tablespace, backup, STS' });
  const out = h('div', { style: 'display:flex;flex-direction:column;gap:12px', 'data-notr': '' });
  const status = h('span', { class: 'muted' });
  const btn = h('button', { class: 'btn primary', type: 'button', onclick: async () => {
    remember('aqDoc', doc.value);
    btn.disabled = true; status.textContent = 'Writing 5 questions from that document… (20–40 s)';
    try {
      const r = await aiJob('/api/ai/quiz', { doc: doc.value, topic: topic.value }, (sec) => { status.textContent = `Writing 5 questions… ${sec}s`; });
      status.textContent = '';
      out.replaceChildren(...r.questions.map((x, k) => {
        const why = h('div', { class: 'aianswer', hidden: true });
        const opts = h('div', { class: 'opts' }, x.options.map((t, j) => h('button', { type: 'button', onclick: () => {
          [...opts.children].forEach((b) => { b.disabled = true; });
          opts.children[x.answer].classList.add('right'); if (j !== x.answer) opts.children[j].classList.add('wrong');
          why.replaceChildren(h('p', {}, h('strong', {}, j === x.answer ? 'Correct. ' : 'Not quite. ')), ...aiText(x.why, r.cites), x.picture ? aiFigs([x.picture]) : null, aiSources(r.cites));
          why.hidden = false;
        } }, ...txt(t))));
        return h('div', { class: 'box' }, h('div', { class: 'label' }, `AI question ${k + 1} · ${srcName(doc.value)}`), h('p', { style: 'font-weight:600' }, ...txt(x.stem)), opts, why);
      }));
    } catch (e) { status.textContent = ''; out.replaceChildren(errorBox(e)); }
    btn.disabled = false;
  } }, 'Generate 5 questions');
  return h('details', { class: 'box' }, h('summary', { style: 'cursor:pointer;font-weight:700' }, '✨ AI quiz from any document (Oracle, MBSS, backups, Face Expert…)'),
    h('div', { class: 'row' }, doc, topic, btn, status), out);
}
async function coach(q, chosenText, r, holder) {
  holder.replaceChildren(h('p', { class: 'muted' }, 'Asking the AI coach…'));
  try {
    const c = await aiJob('/api/ai/coach', { stem: q.stem, chosen: chosenText, correct: q.options[r.answer], why: r.why });
    holder.replaceChildren(h('div', { class: 'aianswer coachbox' }, h('div', { class: 'ltag' }, 'AI coach'), ...aiText(c.answer, c.cites), aiFigs(c.figures), aiSources(c.cites)));
  } catch (e) { holder.replaceChildren(errorBox(e)); }
}
