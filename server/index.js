import express from 'express';
import helmet from 'helmet';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { config } from './config.js';
import { pool, migrateAndSeed } from './db.js';
import { cfAccess } from './cfaccess.js';
import { requireSession, csrfGuard, loginHandler, logoutHandler, logoutEverywhere, hasSession } from './auth.js';
import { study } from './routes/study.js';
import { documents } from './routes/documents.js';

const here = path.dirname(fileURLToPath(import.meta.url));
const clientDir = path.join(here, '..', 'client');

const app = express();
app.disable('x-powered-by');
app.set('trust proxy', true);

app.use(helmet({
  contentSecurityPolicy: {
    useDefaults: false,
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'"],
      imgSrc: ["'self'", 'data:'],
      fontSrc: ["'self'"],
      connectSrc: ["'self'"],
      objectSrc: ["'none'"],
      baseUri: ["'none'"],
      formAction: ["'self'"],
      frameAncestors: ["'none'"],
      upgradeInsecureRequests: config.isProd ? [] : null,
    },
  },
  strictTransportSecurity: config.isProd ? { maxAge: 31536000, includeSubDomains: true } : false,
  referrerPolicy: { policy: 'no-referrer' },
  crossOriginResourcePolicy: { policy: 'same-origin' },
}));
app.use((req, res, next) => {
  res.set('X-Robots-Tag', 'noindex, nofollow, noarchive');
  res.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=()');
  next();
});

// Railway health check: no data, no auth.
app.get('/healthz', (req, res) => res.type('text').send('ok'));
app.get('/favicon.ico', (req, res) => res.status(204).end());

// Layer 1: every other request must carry a valid Cloudflare Access token.
app.use(cfAccess());
app.use(express.json({ limit: '100kb' }));
app.use(csrfGuard());

// Public within Access: login page and its assets.
app.use('/assets', express.static(path.join(clientDir, 'assets'), { index: false, maxAge: '1h' }));
app.get('/robots.txt', (req, res) => res.type('text').send('User-agent: *\nDisallow: /\n'));
app.get('/login', async (req, res, next) => {
  try {
    if (await hasSession(req)) return res.redirect(302, '/');
    res.set('Cache-Control', 'no-store');
    res.sendFile(path.join(clientDir, 'login.html'));
  } catch (e) { next(e); }
});
app.post('/api/login', loginHandler);

// Layer 2: everything below needs a signed-in session.
app.use(requireSession());
app.use((req, res, next) => { res.set('Cache-Control', 'no-store'); next(); });
app.post('/api/logout', logoutHandler);
app.post('/api/logout-all', logoutEverywhere);
app.use('/api/documents', documents);
app.use('/api', study);
app.use('/app', express.static(path.join(clientDir, 'app'), { index: false }));
app.get('/', (req, res) => res.sendFile(path.join(clientDir, 'app', 'index.html')));

app.use((req, res) => {
  if (req.path.startsWith('/api/')) return res.status(404).json({ error: 'Not found.' });
  res.status(404).type('text').send('Not found');
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err);
  if (res.headersSent) return;
  const status = err.status && err.status < 500 ? err.status : 500;
  const message = status < 500 ? 'The request could not be processed.' : 'Something went wrong on the server. Check the Railway logs.';
  if (req.path.startsWith('/api/')) return res.status(status).json({ error: message });
  res.status(status).type('text').send(message);
});

async function start() {
  await migrateAndSeed();
  const server = app.listen(config.port, () => {
    console.log(`techman listening on ${config.port} (${config.isProd ? 'production' : 'development'}; Cloudflare Access ${config.cf.disabled ? 'OFF' : 'required'})`);
  });
  const shutdown = () => server.close(() => pool.end().then(() => process.exit(0)));
  process.on('SIGTERM', shutdown);
  process.on('SIGINT', shutdown);
}

start().catch((e) => {
  console.error('Startup failed:', e.message);
  process.exit(1);
});
