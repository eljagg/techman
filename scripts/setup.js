// Generates the secrets for Railway. Run on your own PC: npm run setup
// Nothing is saved to disk; copy the values straight into Railway → Variables
// and into your password manager.

import readline from 'node:readline';
import crypto from 'node:crypto';
import { hashPassword, base32Encode } from '../server/crypto.js';

function askHidden(question) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: true });
    const write = rl._writeToOutput.bind(rl);
    rl._writeToOutput = (s) => { if (s.includes(question)) write(s); else write('*'); };
    rl.question(question, (answer) => { rl.close(); process.stdout.write('\n'); resolve(answer); });
  });
}

const pw1 = await askHidden('Choose a portal password (16+ characters): ');
if (pw1.length < 16) { console.error('Use at least 16 characters.'); process.exit(1); }
const pw2 = await askHidden('Type it again: ');
if (pw1 !== pw2) { console.error('The passwords do not match.'); process.exit(1); }

const totpSecret = base32Encode(crypto.randomBytes(20));
const masterKey = crypto.randomBytes(32).toString('base64');
const label = encodeURIComponent('Techman:IAFIS study portal');
const otpauth = `otpauth://totp/${label}?secret=${totpSecret}&issuer=Techman&algorithm=SHA1&digits=6&period=30`;

console.log(`
========================================================================
Add these as Railway service variables (Variables → Raw Editor):

APP_PASSWORD_HASH=${hashPassword(pw1)}
TOTP_SECRET=${totpSecret}
FILE_MASTER_KEY=${masterKey}

========================================================================
Authenticator app: choose "Enter a setup key" and type
  Account: Techman
  Key:     ${totpSecret}
  Type:    Time based
(or paste this link into a QR generator you trust: ${otpauth})

IMPORTANT
- Save FILE_MASTER_KEY and TOTP_SECRET in your password manager now.
- If FILE_MASTER_KEY is lost, the uploaded documents cannot be decrypted. Ever.
- Do not commit these values to GitHub.
========================================================================
`);
