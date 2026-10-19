# Techman issue inbox: email → "Fix an issue"

Emails sent to your inbox address arrive in **Fix an issue → 📥 Issue inbox**, already read by the AI
(problem in English, site, since when, what was tried, GLPI number, priority). Click one and the form
fills itself. With "Build the plan automatically" switched on, the plan is waiting too.

```
sender ──► issues@aishiftcode.net ──► Cloudflare Email Routing ──► Email Worker (signs it)
       ──► https://study.aishiftcode.net/hook/inbox/email ──► portal checks signature + sender
       ──► stored encrypted ──► Claude Haiku reads it ──► appears in the inbox
```

## 1. Make a secret
In PowerShell:
```
[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Maximum 256 }))
```
Keep it out of the TECHMAN folder. You paste it in two places (Railway and Cloudflare).

## 2. Railway variables (techman service → Variables)
| Name | Value |
|---|---|
| `INBOX_SECRET` | the secret from step 1 |
| `INBOX_ALLOWED_FROM` | who may send, comma separated: `you@gmail.com,@iafisgroup.com` (an entry starting with `@` allows a whole domain). Mail from anyone else is dropped and logged. |
| `AI_TRIAGE_MODEL` | optional, default `claude-haiku-5-5` |

## 3. Let the webhook past Cloudflare Access
Zero Trust → Access → Applications → **Add an application → Self-hosted**
- Name: `Techman inbox hook`
- Domain: `study.aishiftcode.net`, Path: `hook/inbox`
- Policy: Action **Bypass**, Include **Everyone**

This only opens `/hook/inbox/…`. That path accepts nothing without a valid signature made with your
secret, less than 5 minutes old. Everything else stays behind your login.

## 4. Email Routing
Cloudflare dashboard → aishiftcode.net → **Email → Email Routing** → Get started / Enable
(Cloudflare adds the MX and TXT records for you; aishiftcode.net must not already receive mail elsewhere).

## 5. The Email Worker
Workers & Pages → **Create → Worker** → name `techman-inbox` → Deploy → **Edit code**, paste `worker.js`, Deploy.
Then Settings → Variables and Secrets:
- `INBOX_SECRET` (type **Secret**) = the secret from step 1
- `PORTAL_URL` (Text) = `https://study.aishiftcode.net`
- `FORWARD_TO` (Text, optional) = an address verified under Email Routing → Destination addresses

## 6. Route the address to the worker
Email Routing → **Routing rules → Create address**: `issues` → Action **Send to a Worker** → `techman-inbox`.

## 7. Feed it
- **GLPI**: in GLPI, set your notifications to go to your work mail, then forward them to
  `issues@aishiftcode.net` with a mail rule (Outlook: Rules → forward when subject contains `[GLPI`).
  Forwarding keeps the work mail as the sender, so put your work address or domain in `INBOX_ALLOWED_FROM`.
- **Colleagues / yourself**: send or forward any problem description to `issues@aishiftcode.net`.
- **No email setup?** Paste the text or choose a saved `.eml` under *Import an email or ticket*.

## Test
Send a mail to issues@aishiftcode.net from an allowed address: "May Pen LiveScan cannot see the scanner since 8am".
Within ~10 s it should appear in the inbox with site **May Pen (MPN)**. Security tab → audit log shows
`inbox_received` (or `inbox_rejected_sender` / `inbox_bad_signature` when something is wrong).
Worker logs: Workers → techman-inbox → Logs.
