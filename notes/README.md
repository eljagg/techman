# Techman: study portal

Private, single-user study portal for GLPI manuals and incident escalation
procedures. Node 22 + Express + Postgres on Railway, behind Cloudflare Access.

## 1. Security model

| Layer | What it does |
| --- | --- |
| Cloudflare Access | Only your email can reach the domain. Cloudflare sends a one-time PIN to your inbox. |
| Access token check in the app | Every request (except `/healthz`) must carry a valid, signed Cloudflare Access token for your app and email. Requests to the `*.up.railway.app` address, which bypass Cloudflare, are refused. |
| App sign-in | Password (scrypt-hashed) + 6-digit authenticator code. Codes cannot be reused. |
| Lockout | 5 failures from one address in 15 min, or 20 failures in 60 min from anywhere, blocks sign-in. |
| Sessions | Random token, stored hashed. Cookie is `__Host-`, HttpOnly, Secure, SameSite=Strict. 12 h maximum, 2 h idle. "Sign out everywhere" on the Security page. |
| Request forgery | Strict same-site cookie, a required custom header and an Origin check on every change. |
| Browser hardening | Strict CSP (no inline script, no third-party anything), HSTS, no-referrer, frame-ancestors none, noindex. |
| Documents at rest | AES-256-GCM envelope encryption (see section 2). |
| Audit | Sign-ins, failures, lockouts, uploads, every document open and every delete are logged (Security page). |

## 2. How PDFs are protected at rest

1. You upload a PDF. It is held in memory only; nothing is written to disk.
2. The server makes a fresh random 256-bit key for that one document and encrypts the PDF with AES-256-GCM.
3. That document key is itself encrypted ("wrapped") with the master key in `FILE_MASTER_KEY`.
4. Postgres stores only the ciphertext and the wrapped key. Database dumps and Railway backups hold nothing readable.
5. When you open a document, the server unwraps its key and decrypts it in memory for your signed-in request. It is sent with `Cache-Control: no-store`.
6. GCM authentication means any changed byte in the database makes decryption fail instead of returning altered content.

Limits to be aware of:
- Anyone who controls your Railway project can read both the variables and the database, and so could decrypt. Turn on two-factor sign-in for Railway, GitHub and Cloudflare.
- If `FILE_MASTER_KEY` is lost, the documents cannot be recovered. Keep it in your password manager.
- To change the master key, use `npm run rotate-key` (section 8). It re-wraps the keys of documents, pictures and the knowledge pack.

## 3. Variables (Railway → techman service → Variables)

| Variable | Value |
| --- | --- |
| `NODE_ENV` | `production` |
| `DATABASE_URL` | `${{Postgres.DATABASE_URL}}` (private network reference) |
| `APP_PASSWORD_HASH` | from `npm run setup` |
| `TOTP_SECRET` | from `npm run setup` |
| `FILE_MASTER_KEY` | from `npm run setup` |
| `CF_ACCESS_TEAM_DOMAIN` | e.g. `yourteam.cloudflareaccess.com` |
| `CF_ACCESS_AUD` | the Application Audience (AUD) tag of the Access application |
| `ALLOWED_EMAIL` | the one email allowed by your Access policy |

AI (optional): `ANTHROPIC_API_KEY` (switches AI on), `AI_MODEL` (claude-sonnet-5-5), `AI_TRIAGE_MODEL` (claude-haiku-5-5, reads inbox emails), `AI_DAILY_LIMIT` (150 requests per day).

nettm link (optional, see the nettm request document): `NETTM_URL` (nettm backend address), `NETTM_SECRET` (same value as `TECHMAN_SHARED_SECRET` in nettm), and `NETTM_CF_CLIENT_ID` / `NETTM_CF_CLIENT_SECRET` only if nettm is behind Cloudflare Access. With these set, plans show **⇪ Send to nettm**.

Issue inbox (optional, see `cloudflare/inbox-worker/README.md`): `INBOX_SECRET` (shared with the Cloudflare Email Worker), `INBOX_ALLOWED_FROM` (comma-separated addresses or `@domains` allowed to send).

Optional: `SESSION_HOURS` (12), `SESSION_IDLE_MINUTES` (120), `NEW_CARDS_PER_DAY` (15), `MAX_UPLOAD_MB` (30), `MAX_PACK_MB` (40), `APP_TIME_ZONE` (America/Jamaica).

The app will not start until every required variable is set. That is deliberate.

## 4. First-time setup, in order

### 4.1 Generate secrets (on your PC, in Git Bash)
```
cd ~/projects/techman
npm install
npm run setup
```
Enter a 16+ character password. Copy the three values it prints into your password manager.
Add the key to your authenticator app with "Enter a setup key" (time based).

### 4.2 Railway
1. New Project → Deploy from GitHub repo → `eljagg/techman`.
2. In the same project: New → Database → PostgreSQL.
3. Postgres service → Settings → Networking: remove the public TCP proxy. The app uses the private network.
4. techman service → Settings → Deploy → Healthcheck Path: `/healthz`.
5. Add the variables from section 3. Leave the two `CF_ACCESS_*` values until 4.4. The service will show as crashed until then; that is expected.

### 4.3 Domain on Cloudflare
1. Pick a subdomain on a domain whose DNS is on Cloudflare, e.g. `study.<your domain>`. For a Namecheap domain, first point its nameservers at Cloudflare.
2. Railway → techman → Settings → Networking → Custom Domain → enter the subdomain. Railway shows a CNAME target.
3. Cloudflare → DNS → add that CNAME, Proxy status **Proxied**.
4. Cloudflare → SSL/TLS → Overview → **Full (strict)**. If Railway's certificate stays pending, set the record to DNS only until Railway shows the domain as verified, then switch Proxied back on.

### 4.4 Cloudflare Access
1. Cloudflare Zero Trust → Access → Applications → Add an application → Self-hosted.
2. Application domain: your subdomain. Session duration: 24 hours.
3. Policy: Action **Allow**, Include → **Emails** → your email only.
4. Login method: One-time PIN (on by default).
5. Save. On the application's overview, copy the **Application Audience (AUD) Tag** → `CF_ACCESS_AUD`.
6. Zero Trust → Settings → Custom Pages shows your team domain (`<team>.cloudflareaccess.com`) → `CF_ACCESS_TEAM_DOMAIN`.
7. Add both to Railway with `ALLOWED_EMAIL`. Railway redeploys.

### 4.5 Remove the Railway address
Railway → techman → Settings → Networking → remove the `*.up.railway.app` domain. The app already refuses it, but there is no reason to keep it.

### 4.6 Load the documents
Sign in → Documents → upload each Spanish original and each English translation PDF.

## 5. Visuals and glossary
- **Visuals** shows the pictures from the documents: GLPI screenshots, the JCF site guides, the AV design, every administrator training deck and the Face Expert training. They also appear inside Plan sessions, on Review cards (after you show the answer), on Today and on Reference.
- Pictures are loaded from `.tvpack` files on the Visuals page. Each picture and its thumbnail is encrypted with its own data key, wrapped by `FILE_MASTER_KEY`, exactly like the PDFs. The packs are not stored in GitHub.
- **Glossary** lists every abbreviation found in the documents. The same abbreviations are underlined on cards, quiz questions and plan items; hover or tap one to see its meaning.

## 6. AI tutor and issue helper
- **Ask AI**: questions answered only from your documents, with numbered citations and the matching pictures.
- **Fix an issue**: describe a problem; get classification, evidence checklist, ordered steps with screenshots, escalation advice and a GLPI ticket draft.
- **Ask about this picture** in the viewer, **AI quiz** from any document, and **Explain with AI** after a wrong quiz answer.
- The document text comes from `techman-knowledge.tkpack`, uploaded once on the Ask AI page. It is encrypted at rest like the PDFs and decrypted into memory when the server starts. Lines containing passwords were removed before the pack was built.
- The server finds the relevant passages first (BM25 search, no external service), then sends only those passages (and, for picture questions, that one picture) to the Claude API. The key never reaches the browser. Every call is in the audit log; `AI_DAILY_LIMIT` caps daily use and a burst limit allows 12 calls per minute.
- AI requests run as background jobs: the page starts the job and checks on it every 2 seconds, so a slow answer can no longer hit a proxy timeout (the old "Request failed (502)"). **Test AI connection** on the Ask AI page checks the key and model.
- **Where to look**: each plan shows the path from the site to the central servers (from the Remote Sites Guide), with the suspect parts in red, and **Export to nettm (CSV)** for those devices (no usernames or passwords).
- **My notes**: save AI answers, plans and real fixes ("When it is solved → Save the fix"). Notes are encrypted and the AI searches them together with the documents, cited as "My notes and fixes".
- **Issue inbox**: emails to your inbox address (Cloudflare Email Worker), or text / `.eml` files you paste, are read by Claude Haiku (problem in English, site, since when, what was tried, GLPI number, priority). Click one and the form fills itself. Optional automatic plan. Email content is treated as data, never as instructions.
- **Screenshots**: Fix an issue, Ask AI and the inbox import accept up to 4 screenshots (paste with Ctrl+V, drop, or choose). The browser shrinks them; the AI reads them first (screen, error text, Spanish labels in English, key fields; passwords hidden, people's names and ID numbers masked) and that reading drives the document search and the plan. Images sent by email to the inbox are stored encrypted with the item; others are not stored. Each screenshot read uses one extra AI request. `AI_PER_MINUTE` (default 20) sets the burst limit.
- **Open page N** on a citation appears once that PDF is uploaded and linked to its source on the Documents page ("Is:" list).

## 7. Day-to-day
- **Today** shows what is due, new cards left for the day, plan progress, quiz accuracy and your weakest sections.
- **Review** is spaced repetition: Again (10 min), Hard, Good, Easy. Gaps grow as you remember.
- **Plan** is the 10-session plan; tick sessions as you finish.
- **Quiz** checks answers on the server and records them.
- **Cards** lists every card and lets you add your own (and questions on the Quiz page).
- **Security** shows the audit log and "Sign out everywhere".

Seeded cards and questions live in `server/seed/content.js`. Edit and redeploy to change wording; your review history is kept.

## 8. Rotating the master key
1. Generate a new key: `node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"`
2. Railway → techman → add `FILE_MASTER_KEY_OLD` = current key, set `FILE_MASTER_KEY` = new key.
3. Run `npm run rotate-key` in the service (Railway → ⋯ → Run command).
4. Open a document to confirm, then delete `FILE_MASTER_KEY_OLD`.

## 9. Local development
Use a local Postgres and set `CF_ACCESS_DISABLED=true` (refused when `NODE_ENV=production`).
