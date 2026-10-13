// Techman client. All text is inserted as text nodes (never innerHTML with data),
// so nothing stored in the database can run as script.

const view = document.getElementById('view');
let META = { docs: {}, timeZone: 'America/Jamaica' };

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
  const headers = { 'X-Requested-With': 'techman', ...(opts.headers || {}) };
  let body = opts.body;
  if (body && !(body instanceof FormData)) { headers['Content-Type'] = 'application/json'; body = JSON.stringify(body); }
  const res = await fetch(path, { method: opts.method || 'GET', headers, body, credentials: 'same-origin' });
  if (res.status === 401) { window.location.replace('/login'); throw new Error('Signed out'); }
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || `Request failed (${res.status}).`);
  return data;
}

const fmtDate = (d) => d ? new Date(d).toLocaleString('en-JM', { timeZone: META.timeZone, dateStyle: 'medium', timeStyle: 'short' }) : '—';
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

// ---------- views ----------
const VIEWS = {};

VIEWS.dashboard = async () => {
  const [d, stats] = await Promise.all([api('/api/dashboard'), api('/api/stats')]);
  const quizByDoc = Object.fromEntries(d.quiz.map((r) => [r.doc, r]));
  const totalQ = d.quiz.reduce((a, r) => a + r.attempts, 0), rightQ = d.quiz.reduce((a, r) => a + r.correct, 0);

  return [
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
        h('div', { class: 'label' }, 'Study plan'),
        h('div', { class: 'stat' }, `${d.plan.done}/${d.plan.total}`),
        h('div', { class: 'bar' }, h('span', { style: `width:${pct(d.plan.done, d.plan.total)}%` })),
        h('a', { href: '#/plan' }, 'Open the plan')),
      h('div', { class: 'box' },
        h('div', { class: 'label' }, 'Quiz accuracy'),
        h('div', { class: 'stat' }, totalQ ? `${pct(rightQ, totalQ)}%` : '—'),
        h('p', { class: 'muted' }, totalQ
          ? Object.keys(META.docs).map((k) => quizByDoc[k] ? `${docName(k)}: ${pct(quizByDoc[k].correct, quizByDoc[k].attempts)}%` : null).filter(Boolean).join(' · ')
          : 'No answers yet. Target: 85%.'),
        h('a', { href: '#/quiz' }, 'Take the quiz'))),
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
      const ans = h('div', { class: 'a', hidden: true }, c.back);
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
          h('div', { class: 'q' }, c.front), ans),
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

VIEWS.plan = async () => {
  const rows = await api('/api/plan');
  const done = rows.filter((r) => r.done_at).length;
  return [
    h('div', {}, h('div', { class: 'label' }, `${done} of ${rows.length} sessions done`), h('h1', {}, 'Ten-session study plan')),
    h('div', { class: 'box' },
      h('h2', {}, 'Each session (about 45 minutes)'),
      h('ol', { style: 'margin:0;padding-left:20px' },
        h('li', {}, 'Preview, 5 min: skim the headings and tables; write 2–3 questions you expect answered.'),
        h('li', {}, 'Read actively, 20 min: mark every number, every "must/never" rule, every role name.'),
        h('li', {}, 'Recall, 5 min: close the document; write a one-page summary from memory; fix gaps in another colour.'),
        h('li', {}, 'Review, 10 min: clear the due cards for that document.'),
        h('li', {}, 'Apply, 5 min: answer that document\'s quiz questions as if a real ticket landed.'))),
    ...rows.map((s) => {
      const cb = h('input', { type: 'checkbox', id: `plan${s.idx}`, checked: Boolean(s.done_at) });
      cb.addEventListener('change', async () => {
        try { await api(`/api/plan/${s.idx}`, { method: 'POST', body: { done: cb.checked } }); render(); }
        catch (e) { alertInline(e); }
      });
      return h('label', { class: 'box sess' + (s.done_at ? ' done' : ''), for: `plan${s.idx}` }, cb,
        h('div', { style: 'display:flex;flex-direction:column;gap:6px;min-width:0' },
          h('h3', {}, `Session ${s.idx}: ${s.title}`),
          h('div', { class: 'row' }, h('span', { class: 'pill' }, s.doc), h('span', { class: 'pill' }, s.secs),
            s.done_at ? h('span', { class: 'pill good' }, `Done ${fmtDate(s.done_at)}`) : null),
          h('ul', {}, s.items.map((i) => h('li', {}, i))),
          h('p', { class: 'muted' }, `Goal: ${s.goal}`)));
    }),
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
        why.textContent = (r.correct ? 'Correct. ' : 'Not quite. ') + (r.why || '');
        why.hidden = false;
        answered++; if (r.correct) right++;
        score.textContent = `${right}/${answered} correct (${pct(right, answered)}%)`;
      } catch (e) { why.textContent = e.message; why.hidden = false; }
    } }, t)));
    return h('div', { class: 'box' },
      h('div', { class: 'label' }, `${k + 1} · ${docName(q.doc)} · ${q.section || ''}`),
      h('p', { style: 'font-weight:600' }, q.stem), opts, why,
      q.custom ? h('div', {}, h('button', { class: 'btn bad', onclick: async () => { try { await api(`/api/quiz/${q.id}`, { method: 'DELETE' }); render(); } catch (e) { alertInline(e); } } }, 'Delete my question')) : null);
  });

  return [
    h('div', {}, h('div', { class: 'label' }, 'Scenario quiz'), h('h1', {}, 'Handle the ticket')),
    h('div', { class: 'row' }, h('label', { for: 'quizDoc', class: 'label' }, 'Questions from'), sel, score,
      h('button', { class: 'btn', onclick: render }, 'Start again')),
    h('p', { class: 'muted' }, 'Every answer is saved, so the Today page can show which sections you are weakest in. Target before you finish the plan: 85%.'),
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
        h('td', {}, h('strong', {}, c.front), h('br'), c.back),
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
      h('div', { class: 'box' }, h('h2', {}, 'Escalate to IAFIS Tech in GLPI'),
        h('ol', { style: 'margin:0;padding-left:18px' },
          h('li', {}, 'Switch profile to ', h('code', {}, 'ClienteConsulta nuevo')), h('li', {}, 'Pick the entity, then Create a ticket'),
          h('li', {}, 'Set Type and Category; leave Associated items empty'), h('li', {}, 'Description: details, actions and results, diagnosis'),
          h('li', {}, 'Attach logs and evidence'), h('li', {}, 'Send message')))),
  ];
};

VIEWS.documents = async () => {
  const docs = await api('/api/documents');
  const msg = h('p', { role: 'status' });
  const title = h('input', { type: 'text', id: 'dTitle', required: true, placeholder: 'GLPI User Manual – Technical Support' });
  const code = h('input', { type: 'text', id: 'dCode', placeholder: 'OPS-I&S-MAN-001' });
  const lang = h('select', { id: 'dLang' }, h('option', { value: 'en' }, 'English translation'), h('option', { value: 'es' }, 'Spanish original'));
  const file = h('input', { type: 'file', id: 'dFile', accept: 'application/pdf', required: true });
  const submit = h('button', { class: 'btn primary', type: 'submit' }, 'Encrypt and upload');
  const form = h('form', { class: 'form', onsubmit: async (e) => {
    e.preventDefault();
    if (!file.files[0]) return;
    const fd = new FormData();
    fd.append('title', title.value); fd.append('code', code.value); fd.append('language', lang.value); fd.append('file', file.files[0]);
    submit.disabled = true; msg.className = 'muted'; msg.textContent = 'Encrypting and uploading…';
    try { await api('/api/documents', { method: 'POST', body: fd }); render(); }
    catch (err) { msg.className = 'error'; msg.textContent = err.message; submit.disabled = false; }
  } },
    h('label', { class: 'field full', for: 'dTitle' }, 'Title', title),
    h('label', { class: 'field', for: 'dCode' }, 'Reference code', code),
    h('label', { class: 'field', for: 'dLang' }, 'Language', lang),
    h('label', { class: 'field full', for: 'dFile' }, 'PDF file', file),
    h('div', { class: 'full row' }, submit, msg));

  const rows = docs.map((d) => {
    const confirmIn = h('input', { type: 'text', id: `del-${d.id}`, placeholder: 'Type DELETE', size: 12 });
    const delBox = h('div', { class: 'row', hidden: true }, confirmIn,
      h('button', { class: 'btn bad', onclick: async () => {
        try { await api(`/api/documents/${d.id}`, { method: 'DELETE', body: { confirm: confirmIn.value } }); render(); }
        catch (e) { alertInline(e); }
      } }, 'Delete permanently'));
    return h('tr', {},
      h('td', {}, h('strong', {}, d.title), h('br'), h('span', { class: 'mono muted' }, d.code || '')),
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

// ---------- router ----------
function alertInline(e) { view.prepend(errorBox(e)); }

async function render() {
  const name = (location.hash.replace(/^#\//, '') || 'dashboard').split('?')[0];
  const fn = VIEWS[name] || VIEWS.dashboard;
  document.querySelectorAll('#tabs a').forEach((a) => {
    if (a.getAttribute('href') === `#/${name}`) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
  });
  try {
    const nodes = await fn();
    view.replaceChildren(...nodes);
  } catch (e) {
    view.replaceChildren(errorBox(e));
  }
}

document.getElementById('logout').addEventListener('click', async () => {
  try { await api('/api/logout', { method: 'POST' }); } finally { window.location.replace('/login'); }
});
window.addEventListener('hashchange', render);

api('/api/meta').then((m) => { META = m; render(); }).catch((e) => view.replaceChildren(errorBox(e)));
