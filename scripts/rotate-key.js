// Re-wraps every document and image data key under a new master key. The files
// themselves are not re-encrypted; only their small data keys are, so this runs in seconds.
//
// Usage (in Railway: Service → ⋯ → Run command, or locally with DATABASE_URL set):
//   FILE_MASTER_KEY_OLD=<current key> FILE_MASTER_KEY=<new key> npm run rotate-key
// Then set FILE_MASTER_KEY to the new key in Railway, redeploy, and remove FILE_MASTER_KEY_OLD.

import pg from 'pg';
import { unwrapKey, wrapKey, keyId } from '../server/crypto.js';

const oldKey = Buffer.from(process.env.FILE_MASTER_KEY_OLD || '', 'base64');
const newKey = Buffer.from(process.env.FILE_MASTER_KEY || '', 'base64');
if (oldKey.length !== 32 || newKey.length !== 32) {
  console.error('Set FILE_MASTER_KEY_OLD (current) and FILE_MASTER_KEY (new), each 32 bytes base64.');
  process.exit(1);
}

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_SSL === 'true' ? { rejectUnauthorized: false } : undefined,
});
const client = await pool.connect();
try {
  await client.query('BEGIN');
  for (const table of ['documents', 'figures', 'kb_pack']) {
    const exists = await client.query(`SELECT to_regclass($1) AS t`, [table]);
    if (!exists.rows[0].t) continue;
    const { rows } = await client.query(`SELECT id, wrap_iv, wrap_tag, wrapped_key, key_id FROM ${table} FOR UPDATE`);
    let done = 0, skipped = 0;
    for (const row of rows) {
      if (row.key_id === keyId(newKey)) { skipped++; continue; }
      const dek = unwrapKey(oldKey, row);
      const w = wrapKey(newKey, dek, row.id);
      dek.fill(0);
      await client.query(
        `UPDATE ${table} SET wrap_iv=$2, wrap_tag=$3, wrapped_key=$4, key_id=$5 WHERE id=$1`,
        [row.id, w.wrapIv, w.wrapTag, w.wrappedKey, w.keyId]
      );
      done++;
    }
    console.log(`${table}: re-wrapped ${done} key(s); ${skipped} already used the new key.`);
  }
  await client.query('COMMIT');
} catch (e) {
  await client.query('ROLLBACK');
  console.error('Rotation failed, nothing was changed:', e.message);
  process.exitCode = 1;
} finally {
  client.release();
  await pool.end();
}
