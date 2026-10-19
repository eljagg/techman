// Techman inbox Email Worker (Cloudflare).
// Email Routing hands each message for your inbox address (e.g. issues@aishiftcode.net) to this
// worker. It signs the raw message with INBOX_SECRET and posts it to the portal, which checks the
// signature and the sender allowlist, stores it encrypted and lets the AI read it.
// No dependencies: paste this file into the Cloudflare dashboard editor.
//
// Variables (Worker → Settings → Variables and Secrets):
//   INBOX_SECRET  (secret)  the same value as INBOX_SECRET in Railway
//   PORTAL_URL    (text)    https://study.aishiftcode.net
//   FORWARD_TO    (text, optional) a verified address that also gets a copy (e.g. your Gmail)

const MAX_BYTES = 3 * 1024 * 1024; // the portal accepts up to ~4 MB of base64

function toBase64(bytes) {
  let bin = '';
  for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(bin);
}
async function hmacHex(secret, text) {
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(text));
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

export default {
  async email(message, env, ctx) {
    if (env.FORWARD_TO) ctx.waitUntil(message.forward(env.FORWARD_TO).catch(() => {}));
    if (message.rawSize > MAX_BYTES) { message.setReject('Message too large for the Techman inbox (3 MB limit). Send the text without attachments.'); return; }
    const raw = toBase64(new Uint8Array(await new Response(message.raw).arrayBuffer()));
    const ts = String(Date.now());
    const sig = await hmacHex(env.INBOX_SECRET, `${ts}.${raw}`);
    const res = await fetch(`${env.PORTAL_URL.replace(/\/$/, '')}/hook/inbox/email`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-techman-ts': ts, 'x-techman-sig': sig },
      body: JSON.stringify({ raw, to: message.to }),
    });
    if (!res.ok) {
      console.log(`Portal answered ${res.status}`);
      // Without FORWARD_TO the sender gets a bounce, so nothing is silently lost.
      if (!env.FORWARD_TO) message.setReject(`Techman inbox is unavailable (${res.status}). Try again later.`);
    }
  },
};
