// Reads and validates environment configuration. The app refuses to start if a
// required secret is missing or malformed, so a half-configured deploy never runs.

const env = process.env;
const isProd = env.NODE_ENV === 'production';

function required(name) {
  const v = env[name];
  if (!v || !v.trim()) {
    throw new Error(`Missing required environment variable ${name}. Run "npm run setup" to generate it.`);
  }
  return v.trim();
}

function masterKey(name, optional = false) {
  const v = env[name];
  if (!v) {
    if (optional) return null;
    throw new Error(`Missing required environment variable ${name}.`);
  }
  const buf = Buffer.from(v.trim(), 'base64');
  if (buf.length !== 32) throw new Error(`${name} must be 32 bytes, base64-encoded (got ${buf.length} bytes).`);
  return buf;
}

const cfDisabled = env.CF_ACCESS_DISABLED === 'true';
if (isProd && cfDisabled) {
  throw new Error('CF_ACCESS_DISABLED=true is not allowed when NODE_ENV=production.');
}

export const config = {
  isProd,
  port: Number(env.PORT || 3000),
  databaseUrl: required('DATABASE_URL'),
  databaseSsl: env.DATABASE_SSL === 'true',
  passwordHash: required('APP_PASSWORD_HASH'),
  totpSecret: required('TOTP_SECRET'),
  fileMasterKey: masterKey('FILE_MASTER_KEY'),
  fileMasterKeyOld: masterKey('FILE_MASTER_KEY_OLD', true),
  cf: {
    disabled: cfDisabled,
    teamDomain: (env.CF_ACCESS_TEAM_DOMAIN || '').trim().replace(/^https?:\/\//, '').replace(/\/$/, ''),
    aud: (env.CF_ACCESS_AUD || '').trim(),
    allowedEmail: (env.ALLOWED_EMAIL || '').trim().toLowerCase(),
  },
  sessionHours: Number(env.SESSION_HOURS || 12),
  idleMinutes: Number(env.SESSION_IDLE_MINUTES || 120),
  newCardsPerDay: Number(env.NEW_CARDS_PER_DAY || 15),
  maxUploadMb: Number(env.MAX_UPLOAD_MB || 30),
  maxPackMb: Number(env.MAX_PACK_MB || 40),
  ai: {
    key: (env.ANTHROPIC_API_KEY || '').trim(),
    model: (env.AI_MODEL || 'claude-sonnet-5-5').trim(),
    baseUrl: (env.AI_BASE_URL || 'https://api.anthropic.com').trim().replace(/\/$/, ''),
    dailyLimit: Number(env.AI_DAILY_LIMIT || 150),
    triageModel: (env.AI_TRIAGE_MODEL || 'claude-haiku-5-5').trim(),
    translateModel: (env.AI_TRANSLATE_MODEL || env.AI_TRIAGE_MODEL || 'claude-haiku-5-5').trim(),
    translateDailyLimit: Number(env.TRANSLATE_DAILY_LIMIT || 600),
  },
  nettm: { url: process.env.NETTM_URL || '', secret: process.env.NETTM_SECRET || '', cfId: process.env.NETTM_CF_CLIENT_ID || '', cfSecret: process.env.NETTM_CF_CLIENT_SECRET || '' },
  inbox: {
    secret: (env.INBOX_SECRET || '').trim(),
    allowedFrom: (env.INBOX_ALLOWED_FROM || '').split(',').map((s) => s.trim().toLowerCase()).filter(Boolean),
  },
  timeZone: env.APP_TIME_ZONE || 'America/Jamaica',
};

if (!config.cf.disabled && (!config.cf.teamDomain || !config.cf.aud)) {
  throw new Error(
    'Cloudflare Access is required. Set CF_ACCESS_TEAM_DOMAIN and CF_ACCESS_AUD ' +
    '(or CF_ACCESS_DISABLED=true for local development only).'
  );
}
