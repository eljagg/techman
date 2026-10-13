import pg from 'pg';
import { config } from './config.js';
import { PLAN, CARDS, QUIZ } from './seed/content.js';

export const pool = new pg.Pool({
  connectionString: config.databaseUrl,
  ssl: config.databaseSsl ? { rejectUnauthorized: false } : undefined,
  max: 5,
});

export const q = (text, params) => pool.query(text, params);

const SCHEMA = `
CREATE TABLE IF NOT EXISTS sessions (
  token_hash   TEXT PRIMARY KEY,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
  last_seen_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  expires_at   TIMESTAMPTZ NOT NULL,
  ip           TEXT,
  user_agent   TEXT
);
CREATE TABLE IF NOT EXISTS login_attempts (
  id         BIGSERIAL PRIMARY KEY,
  ip         TEXT NOT NULL,
  success    BOOLEAN NOT NULL,
  at         TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS login_attempts_at ON login_attempts (at);
CREATE TABLE IF NOT EXISTS app_state (
  key   TEXT PRIMARY KEY,
  value TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS audit_log (
  id     BIGSERIAL PRIMARY KEY,
  at     TIMESTAMPTZ NOT NULL DEFAULT now(),
  event  TEXT NOT NULL,
  detail TEXT,
  ip     TEXT
);
CREATE TABLE IF NOT EXISTS documents (
  id          UUID PRIMARY KEY,
  title       TEXT NOT NULL,
  code        TEXT,
  language    TEXT NOT NULL,
  filename    TEXT NOT NULL,
  size_bytes  INTEGER NOT NULL,
  sha256      TEXT NOT NULL,
  iv          BYTEA NOT NULL,
  tag         BYTEA NOT NULL,
  ciphertext  BYTEA NOT NULL,
  wrap_iv     BYTEA NOT NULL,
  wrap_tag    BYTEA NOT NULL,
  wrapped_key BYTEA NOT NULL,
  key_id      TEXT NOT NULL,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE TABLE IF NOT EXISTS plan_sessions (
  idx   INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  doc   TEXT NOT NULL,
  secs  TEXT NOT NULL,
  items JSONB NOT NULL,
  goal  TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS plan_progress (
  idx     INTEGER PRIMARY KEY REFERENCES plan_sessions(idx) ON DELETE CASCADE,
  done_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE TABLE IF NOT EXISTS cards (
  id         SERIAL PRIMARY KEY,
  seed_key   TEXT UNIQUE,
  doc        TEXT NOT NULL,
  section    TEXT NOT NULL DEFAULT '',
  front      TEXT NOT NULL,
  back       TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE TABLE IF NOT EXISTS card_state (
  card_id       INTEGER PRIMARY KEY REFERENCES cards(id) ON DELETE CASCADE,
  reps          INTEGER NOT NULL DEFAULT 0,
  ease          REAL NOT NULL DEFAULT 2.5,
  interval_days REAL NOT NULL DEFAULT 0,
  lapses        INTEGER NOT NULL DEFAULT 0,
  due_at        TIMESTAMPTZ NOT NULL,
  first_seen_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  last_reviewed TIMESTAMPTZ
);
CREATE TABLE IF NOT EXISTS card_reviews (
  id       BIGSERIAL PRIMARY KEY,
  card_id  INTEGER NOT NULL REFERENCES cards(id) ON DELETE CASCADE,
  grade    TEXT NOT NULL,
  at       TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE TABLE IF NOT EXISTS quiz_questions (
  id         SERIAL PRIMARY KEY,
  seed_key   TEXT UNIQUE,
  doc        TEXT NOT NULL,
  section    TEXT NOT NULL DEFAULT '',
  stem       TEXT NOT NULL,
  options    JSONB NOT NULL,
  answer     INTEGER NOT NULL,
  why        TEXT NOT NULL DEFAULT ''
);
CREATE TABLE IF NOT EXISTS quiz_attempts (
  id          BIGSERIAL PRIMARY KEY,
  question_id INTEGER NOT NULL REFERENCES quiz_questions(id) ON DELETE CASCADE,
  chosen      INTEGER NOT NULL,
  correct     BOOLEAN NOT NULL,
  at          TIMESTAMPTZ NOT NULL DEFAULT now()
);
`;

export async function migrateAndSeed() {
  await q(SCHEMA);

  for (const s of PLAN) {
    await q(
      `INSERT INTO plan_sessions (idx, title, doc, secs, items, goal) VALUES ($1,$2,$3,$4,$5,$6)
       ON CONFLICT (idx) DO UPDATE SET title=EXCLUDED.title, doc=EXCLUDED.doc, secs=EXCLUDED.secs,
         items=EXCLUDED.items, goal=EXCLUDED.goal`,
      [s.idx, s.title, s.doc, s.secs, JSON.stringify(s.items), s.goal]
    );
  }
  // Seeded study content is upserted by a stable key, so redeploys refresh wording
  // without touching review history. Cards you add yourself have no seed_key.
  for (const c of CARDS) {
    await q(
      `INSERT INTO cards (seed_key, doc, section, front, back) VALUES ($1,$2,$3,$4,$5)
       ON CONFLICT (seed_key) DO UPDATE SET doc=EXCLUDED.doc, section=EXCLUDED.section,
         front=EXCLUDED.front, back=EXCLUDED.back`,
      [c.key, c.doc, c.section, c.front, c.back]
    );
  }
  for (const x of QUIZ) {
    await q(
      `INSERT INTO quiz_questions (seed_key, doc, section, stem, options, answer, why) VALUES ($1,$2,$3,$4,$5,$6,$7)
       ON CONFLICT (seed_key) DO UPDATE SET doc=EXCLUDED.doc, section=EXCLUDED.section, stem=EXCLUDED.stem,
         options=EXCLUDED.options, answer=EXCLUDED.answer, why=EXCLUDED.why`,
      [x.key, x.doc, x.section, x.stem, JSON.stringify(x.options), x.answer, x.why]
    );
  }
  // Housekeeping: drop expired sessions and login attempts older than 30 days.
  await q(`DELETE FROM sessions WHERE expires_at < now()`);
  await q(`DELETE FROM login_attempts WHERE at < now() - interval '30 days'`);
}

export async function audit(event, detail, ip) {
  try {
    await q(`INSERT INTO audit_log (event, detail, ip) VALUES ($1,$2,$3)`, [event, detail || null, ip || null]);
  } catch (e) {
    console.error('audit write failed', e.message);
  }
}
