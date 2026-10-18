// Study APIs: dashboard, plan, spaced-repetition review, card library, quiz.

import express from 'express';
import { q } from '../db.js';
import { config } from '../config.js';
import { schedule, GRADES } from '../srs.js';
import { DOC_NAMES } from '../seed/content.js';
import { SOURCES, SOURCE_GROUPS } from '../seed/sources.js';
import { GLOSSARY } from '../seed/glossary.js';
import { LESSONS } from '../seed/lessons.js';

export const study = express.Router();

const DOCS = Object.keys(DOC_NAMES);
const docFilter = (v) => (DOCS.includes(v) ? v : null);
const startOfToday = `(date_trunc('day', now() AT TIME ZONE $TZ) AT TIME ZONE $TZ)`;
const sqlTz = (sql, n) => sql.replaceAll('$TZ', `$${n}`);
const clean = (s, max) => String(s ?? '').trim().slice(0, max);

async function newSeenToday() {
  const { rows } = await q(
    sqlTz(`SELECT count(*)::int AS n FROM card_state WHERE first_seen_at >= ${startOfToday}`, 1),
    [config.timeZone]
  );
  return rows[0].n;
}

study.get('/meta', (req, res) => {
  res.json({ docs: DOC_NAMES, sources: SOURCES, sourceGroups: SOURCE_GROUPS, email: req.cfEmail,
    timeZone: config.timeZone, newPerDay: config.newCardsPerDay });
});

study.get('/lessons', (req, res) => {
  res.set('Cache-Control', 'private, max-age=600');
  res.json(LESSONS);
});

study.get('/glossary', (req, res) => {
  res.set('Cache-Control', 'private, max-age=3600');
  res.json(GLOSSARY);
});

study.get('/dashboard', async (req, res, next) => {
  try {
    const [due, unseen, seen, plan, quiz, logins, docs, reviews] = await Promise.all([
      q(`SELECT c.doc, count(*)::int AS n FROM card_state s JOIN cards c ON c.id = s.card_id
         WHERE s.due_at <= now() GROUP BY c.doc`),
      q(`SELECT count(*)::int AS n FROM cards c LEFT JOIN card_state s ON s.card_id = c.id WHERE s.card_id IS NULL`),
      newSeenToday(),
      q(`SELECT (SELECT count(*)::int FROM plan_progress) AS done, (SELECT count(*)::int FROM plan_sessions) AS total`),
      q(`SELECT qq.doc, count(*)::int AS attempts, count(*) FILTER (WHERE a.correct)::int AS correct
         FROM quiz_attempts a JOIN quiz_questions qq ON qq.id = a.question_id GROUP BY qq.doc`),
      q(`SELECT event, at, ip FROM audit_log WHERE event LIKE 'login%' ORDER BY at DESC LIMIT 6`),
      q(`SELECT count(*)::int AS n FROM documents`),
      q(sqlTz(`SELECT count(*)::int AS n FROM card_reviews WHERE at >= ${startOfToday}`, 1), [config.timeZone]),
    ]);
    const dueByDoc = Object.fromEntries(due.rows.map((r) => [r.doc, r.n]));
    res.json({
      dueTotal: due.rows.reduce((a, r) => a + r.n, 0),
      dueByDoc,
      newAvailable: Math.max(0, Math.min(config.newCardsPerDay - seen, unseen.rows[0].n)),
      unseenTotal: unseen.rows[0].n,
      reviewedToday: reviews.rows[0].n,
      plan: plan.rows[0],
      quiz: quiz.rows,
      logins: logins.rows,
      documents: docs.rows[0].n,
    });
  } catch (e) { next(e); }
});

// ----- plan -----
study.get('/plan', async (req, res, next) => {
  try {
    const { rows } = await q(
      `SELECT p.*, pp.done_at FROM plan_sessions p LEFT JOIN plan_progress pp ON pp.idx = p.idx ORDER BY p.idx`
    );
    res.json(rows);
  } catch (e) { next(e); }
});

study.post('/plan/:idx', async (req, res, next) => {
  try {
    const idx = Number(req.params.idx);
    if (!Number.isInteger(idx)) return res.status(400).json({ error: 'Unknown session.' });
    if (req.body?.done) {
      await q(`INSERT INTO plan_progress (idx) VALUES ($1) ON CONFLICT DO NOTHING`, [idx]);
    } else {
      await q(`DELETE FROM plan_progress WHERE idx = $1`, [idx]);
    }
    res.json({ ok: true });
  } catch (e) { next(e); }
});

// ----- review -----
study.get('/review/next', async (req, res, next) => {
  try {
    const doc = docFilter(req.query.doc);
    const params = doc ? [doc] : [];
    const docSql = doc ? 'AND c.doc = $1' : '';

    const dueQ = await q(
      `SELECT c.id, c.doc, c.section, c.front, c.back, s.reps, s.interval_days, s.lapses, false AS is_new
       FROM cards c JOIN card_state s ON s.card_id = c.id
       WHERE s.due_at <= now() ${docSql} ORDER BY s.due_at LIMIT 1`, params);
    const dueCount = await q(
      `SELECT count(*)::int AS n FROM cards c JOIN card_state s ON s.card_id = c.id WHERE s.due_at <= now() ${docSql}`, params);
    const unseenQ = await q(
      `SELECT count(*)::int AS n FROM cards c LEFT JOIN card_state s ON s.card_id = c.id WHERE s.card_id IS NULL ${docSql}`, params);
    const seen = await newSeenToday();
    const newRemaining = Math.max(0, Math.min(config.newCardsPerDay - seen, unseenQ.rows[0].n));

    let card = dueQ.rows[0] || null;
    if (!card && newRemaining > 0) {
      const { rows } = await q(
        `SELECT c.id, c.doc, c.section, c.front, c.back, 0 AS reps, 0 AS interval_days, 0 AS lapses, true AS is_new
         FROM cards c LEFT JOIN card_state s ON s.card_id = c.id
         WHERE s.card_id IS NULL ${docSql} ORDER BY c.id LIMIT 1`, params);
      card = rows[0] || null;
    }
    const { rows: [nextDue] } = await q(
      `SELECT min(s.due_at) AS at FROM card_state s JOIN cards c ON c.id = s.card_id WHERE s.due_at > now() ${docSql}`, params);
    res.json({ card, due: dueCount.rows[0].n, newRemaining, nextDueAt: nextDue?.at || null });
  } catch (e) { next(e); }
});

study.post('/review/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const grade = req.body?.grade;
    if (!Number.isInteger(id) || !GRADES.includes(grade)) return res.status(400).json({ error: 'Invalid review.' });
    const { rows: [card] } = await q(`SELECT id FROM cards WHERE id = $1`, [id]);
    if (!card) return res.status(404).json({ error: 'Card not found.' });
    const { rows: [state] } = await q(`SELECT * FROM card_state WHERE card_id = $1`, [id]);
    const next = schedule(state, grade);
    await q(
      `INSERT INTO card_state (card_id, reps, ease, interval_days, lapses, due_at, last_reviewed)
       VALUES ($1,$2,$3,$4,$5,$6, now())
       ON CONFLICT (card_id) DO UPDATE SET reps=$2, ease=$3, interval_days=$4, lapses=$5, due_at=$6, last_reviewed=now()`,
      [id, next.reps, next.ease, next.interval_days, next.lapses, next.due_at]
    );
    await q(`INSERT INTO card_reviews (card_id, grade) VALUES ($1,$2)`, [id, grade]);
    res.json({ ok: true, dueAt: next.due_at, intervalDays: next.interval_days });
  } catch (e) { next(e); }
});

// ----- card library -----
study.get('/cards', async (req, res, next) => {
  try {
    const doc = docFilter(req.query.doc);
    const { rows } = await q(
      `SELECT c.id, c.doc, c.section, c.front, c.back, (c.seed_key IS NULL) AS custom,
              s.reps, s.lapses, s.due_at, s.interval_days
       FROM cards c LEFT JOIN card_state s ON s.card_id = c.id
       ${doc ? 'WHERE c.doc = $1' : ''} ORDER BY c.doc, c.id`, doc ? [doc] : []);
    res.json(rows);
  } catch (e) { next(e); }
});

study.post('/cards', async (req, res, next) => {
  try {
    const doc = docFilter(req.body?.doc);
    const front = clean(req.body?.front, 500), back = clean(req.body?.back, 2000), section = clean(req.body?.section, 40);
    if (!doc || !front || !back) return res.status(400).json({ error: 'Choose a document and fill in both sides of the card.' });
    const { rows: [c] } = await q(
      `INSERT INTO cards (doc, section, front, back) VALUES ($1,$2,$3,$4) RETURNING id`, [doc, section, front, back]);
    res.json({ ok: true, id: c.id });
  } catch (e) { next(e); }
});

study.delete('/cards/:id', async (req, res, next) => {
  try {
    const { rowCount } = await q(`DELETE FROM cards WHERE id = $1 AND seed_key IS NULL`, [Number(req.params.id)]);
    if (!rowCount) return res.status(400).json({ error: 'Only cards you added yourself can be deleted.' });
    res.json({ ok: true });
  } catch (e) { next(e); }
});

// ----- quiz -----
study.get('/quiz', async (req, res, next) => {
  try {
    const doc = docFilter(req.query.doc);
    const { rows } = await q(
      `SELECT id, doc, section, stem, options, (seed_key IS NULL) AS custom FROM quiz_questions
       ${doc ? 'WHERE doc = $1' : ''} ORDER BY doc, id`, doc ? [doc] : []);
    res.json(rows);
  } catch (e) { next(e); }
});

study.post('/quiz/:id/answer', async (req, res, next) => {
  try {
    const id = Number(req.params.id), chosen = Number(req.body?.chosen);
    const { rows: [qq] } = await q(`SELECT answer, why, options FROM quiz_questions WHERE id = $1`, [id]);
    if (!qq || !Number.isInteger(chosen) || chosen < 0 || chosen >= qq.options.length) {
      return res.status(400).json({ error: 'Invalid answer.' });
    }
    const correct = chosen === qq.answer;
    await q(`INSERT INTO quiz_attempts (question_id, chosen, correct) VALUES ($1,$2,$3)`, [id, chosen, correct]);
    res.json({ correct, answer: qq.answer, why: qq.why });
  } catch (e) { next(e); }
});

study.post('/quiz', async (req, res, next) => {
  try {
    const doc = docFilter(req.body?.doc);
    const stem = clean(req.body?.stem, 600), why = clean(req.body?.why, 1000), section = clean(req.body?.section, 40);
    const options = Array.isArray(req.body?.options) ? req.body.options.map((o) => clean(o, 300)).filter(Boolean) : [];
    const answer = Number(req.body?.answer);
    if (!doc || !stem || options.length < 2 || options.length > 6 || !Number.isInteger(answer) || answer < 0 || answer >= options.length) {
      return res.status(400).json({ error: 'Choose a document, write the question, give 2–6 options and pick the correct one.' });
    }
    await q(`INSERT INTO quiz_questions (doc, section, stem, options, answer, why) VALUES ($1,$2,$3,$4,$5,$6)`,
      [doc, section, stem, JSON.stringify(options), answer, why]);
    res.json({ ok: true });
  } catch (e) { next(e); }
});

study.delete('/quiz/:id', async (req, res, next) => {
  try {
    const { rowCount } = await q(`DELETE FROM quiz_questions WHERE id = $1 AND seed_key IS NULL`, [Number(req.params.id)]);
    if (!rowCount) return res.status(400).json({ error: 'Only questions you added yourself can be deleted.' });
    res.json({ ok: true });
  } catch (e) { next(e); }
});

study.get('/stats', async (req, res, next) => {
  try {
    const [bySection, hardCards, history] = await Promise.all([
      q(`SELECT qq.doc, qq.section, count(*)::int AS attempts, count(*) FILTER (WHERE a.correct)::int AS correct
         FROM quiz_attempts a JOIN quiz_questions qq ON qq.id = a.question_id
         GROUP BY qq.doc, qq.section HAVING count(*) > 0
         ORDER BY (count(*) FILTER (WHERE a.correct))::float / count(*) ASC, count(*) DESC LIMIT 8`),
      q(`SELECT c.doc, c.section, c.front, s.lapses FROM card_state s JOIN cards c ON c.id = s.card_id
         WHERE s.lapses > 0 ORDER BY s.lapses DESC, s.due_at LIMIT 8`),
      q(sqlTz(`SELECT to_char(date_trunc('day', at AT TIME ZONE $TZ), 'YYYY-MM-DD') AS day, count(*)::int AS reviews
         FROM card_reviews WHERE at > now() - interval '14 days' GROUP BY 1 ORDER BY 1`, 1), [config.timeZone]),
    ]);
    res.json({ weakSections: bySection.rows, hardCards: hardCards.rows, history: history.rows });
  } catch (e) { next(e); }
});

study.get('/audit', async (req, res, next) => {
  try {
    const { rows } = await q(`SELECT event, detail, ip, at FROM audit_log ORDER BY at DESC LIMIT 50`);
    res.json(rows);
  } catch (e) { next(e); }
});
