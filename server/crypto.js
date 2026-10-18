// Cryptography helpers: password hashing (scrypt), TOTP (RFC 6238) and
// envelope encryption of stored documents (AES-256-GCM).
//
// Envelope encryption: every document gets its own random 256-bit data key (DEK).
// The file is encrypted with the DEK; the DEK is then encrypted ("wrapped") with the
// master key from FILE_MASTER_KEY. The database only ever holds ciphertext and wrapped
// keys, so a database dump or backup is useless without the master key.

import crypto from 'node:crypto';

// ---------- passwords ----------
const SCRYPT = { N: 32768, r: 8, p: 1, keylen: 64, maxmem: 128 * 1024 * 1024 };

export function hashPassword(password) {
  const salt = crypto.randomBytes(16);
  const hash = crypto.scryptSync(password, salt, SCRYPT.keylen, SCRYPT);
  return ['scrypt', SCRYPT.N, SCRYPT.r, SCRYPT.p, salt.toString('base64'), hash.toString('base64')].join(':');
}

export function verifyPassword(password, stored) {
  const parts = String(stored).split(':');
  if (parts.length !== 6 || parts[0] !== 'scrypt') throw new Error('APP_PASSWORD_HASH has an unknown format.');
  const [, N, r, p, saltB64, hashB64] = parts;
  const expected = Buffer.from(hashB64, 'base64');
  const actual = crypto.scryptSync(String(password), Buffer.from(saltB64, 'base64'), expected.length, {
    N: Number(N), r: Number(r), p: Number(p), maxmem: SCRYPT.maxmem,
  });
  return crypto.timingSafeEqual(actual, expected);
}

// ---------- TOTP ----------
const B32 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';

export function base32Encode(buf) {
  let bits = 0, value = 0, out = '';
  for (const byte of buf) {
    value = (value << 8) | byte; bits += 8;
    while (bits >= 5) { out += B32[(value >>> (bits - 5)) & 31]; bits -= 5; }
  }
  if (bits > 0) out += B32[(value << (5 - bits)) & 31];
  return out;
}

export function base32Decode(str) {
  const clean = String(str).toUpperCase().replace(/[^A-Z2-7]/g, '');
  let bits = 0, value = 0; const out = [];
  for (const ch of clean) {
    value = (value << 5) | B32.indexOf(ch); bits += 5;
    if (bits >= 8) { out.push((value >>> (bits - 8)) & 255); bits -= 8; }
  }
  return Buffer.from(out);
}

export function totpAt(secretB32, step) {
  const counter = Buffer.alloc(8);
  counter.writeBigUInt64BE(BigInt(step));
  const mac = crypto.createHmac('sha1', base32Decode(secretB32)).update(counter).digest();
  const off = mac[mac.length - 1] & 0x0f;
  const code = ((mac.readUInt32BE(off) & 0x7fffffff) % 1_000_000).toString().padStart(6, '0');
  return code;
}

// Returns the matching time step (so the caller can block replay), or null.
export function verifyTotp(secretB32, code, now = Date.now(), window = 1) {
  const c = String(code || '').replace(/\s/g, '');
  if (!/^\d{6}$/.test(c)) return null;
  const step = Math.floor(now / 30000);
  for (let w = -window; w <= window; w++) {
    const candidate = totpAt(secretB32, step + w);
    if (crypto.timingSafeEqual(Buffer.from(candidate), Buffer.from(c))) return step + w;
  }
  return null;
}

// ---------- envelope encryption ----------
function gcmEncrypt(key, plaintext, aad) {
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
  cipher.setAAD(Buffer.from(aad));
  const ct = Buffer.concat([cipher.update(plaintext), cipher.final()]);
  return { iv, ct, tag: cipher.getAuthTag() };
}

function gcmDecrypt(key, iv, ct, tag, aad) {
  const d = crypto.createDecipheriv('aes-256-gcm', key, iv);
  d.setAAD(Buffer.from(aad));
  d.setAuthTag(tag);
  return Buffer.concat([d.update(ct), d.final()]);
}

export function keyId(masterKey) {
  return crypto.createHash('sha256').update(masterKey).digest('hex').slice(0, 12);
}

export function wrapKey(masterKey, dek, docId) {
  const w = gcmEncrypt(masterKey, dek, `dek:${docId}`);
  return { wrapIv: w.iv, wrappedKey: w.ct, wrapTag: w.tag, keyId: keyId(masterKey) };
}

export function unwrapKey(masterKey, row) {
  return gcmDecrypt(masterKey, row.wrap_iv, row.wrapped_key, row.wrap_tag, `dek:${row.id}`);
}

export function encryptDocument(masterKey, plaintext, docId) {
  const dek = crypto.randomBytes(32);
  const body = gcmEncrypt(dek, plaintext, `doc:${docId}`);
  const wrapped = wrapKey(masterKey, dek, docId);
  dek.fill(0);
  return { iv: body.iv, ciphertext: body.ct, tag: body.tag, ...wrapped };
}

// Throws if the master key is wrong or any stored byte was altered (GCM authentication).
export function decryptDocument(masterKey, row) {
  const dek = unwrapKey(masterKey, row);
  try {
    return gcmDecrypt(dek, row.iv, row.ciphertext, row.tag, `doc:${row.id}`);
  } finally {
    dek.fill(0);
  }
}

// Figures (images from the documents): one data key per figure encrypts both the
// full-size image and its thumbnail, each with its own IV and AAD.
export function encryptFigure(masterKey, id, full, thumb) {
  const dek = crypto.randomBytes(32);
  const f = gcmEncrypt(dek, full, `fig:${id}:full`);
  const t = gcmEncrypt(dek, thumb, `fig:${id}:thumb`);
  const wrapped = wrapKey(masterKey, dek, id);
  dek.fill(0);
  return { iv: f.iv, tag: f.tag, ciphertext: f.ct, thumbIv: t.iv, thumbTag: t.tag, thumbCt: t.ct, ...wrapped };
}

export function decryptFigure(masterKey, row, variant) {
  const dek = unwrapKey(masterKey, row);
  try {
    return variant === 'thumb'
      ? gcmDecrypt(dek, row.thumb_iv, row.thumb_ct, row.thumb_tag, `fig:${row.id}:thumb`)
      : gcmDecrypt(dek, row.iv, row.ciphertext, row.tag, `fig:${row.id}:full`);
  } finally {
    dek.fill(0);
  }
}

export function sha256Hex(buf) {
  return crypto.createHash('sha256').update(buf).digest('hex');
}

export function randomToken(bytes = 32) {
  return crypto.randomBytes(bytes).toString('base64url');
}
