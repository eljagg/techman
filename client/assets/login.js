// Same theme as the portal (Auto, Light or Dark, kept in this browser).
try { const th = localStorage.getItem('techman:theme'); if (th === 'light' || th === 'dark') document.documentElement.dataset.theme = th; } catch { /* ignore */ }
// The sign-in page follows the language chosen inside the portal (kept in this browser).
const L = (() => { try { return localStorage.getItem('techman:lang') || 'en'; } catch { return 'en'; } })();
const T = {
  es: { 'Study portal': 'Portal de estudio', 'Sign in': 'Iniciar sesión', Password: 'Contraseña', 'Authenticator code': 'Código del autenticador', 'Signing in…': 'Iniciando sesión…', 'Sign-in failed.': 'No se pudo iniciar sesión.', 'Could not reach the server. Check your connection.': 'No se pudo contactar al servidor. Revise su conexión.' },
  pt: { 'Study portal': 'Portal de estudo', 'Sign in': 'Entrar', Password: 'Senha', 'Authenticator code': 'Código do autenticador', 'Signing in…': 'Entrando…', 'Sign-in failed.': 'Não foi possível entrar.', 'Could not reach the server. Check your connection.': 'Não foi possível contatar o servidor. Verifique sua conexão.' },
  fr: { 'Study portal': "Portail d'étude", 'Sign in': 'Se connecter', Password: 'Mot de passe', 'Authenticator code': "Code de l'authentificateur", 'Signing in…': 'Connexion…', 'Sign-in failed.': 'Échec de la connexion.', 'Could not reach the server. Check your connection.': 'Impossible de joindre le serveur. Vérifiez votre connexion.' },
}[L] || {};
const t = (s) => T[s] || s;
document.documentElement.lang = L;
document.querySelectorAll('.label, h1, label.field, #submit').forEach((el) => {
  const n = [...el.childNodes].find((x) => x.nodeType === 3 && x.data.trim());
  if (n) n.data = n.data.replace(n.data.trim(), t(n.data.trim()));
});
document.title = `${t('Sign in')} · Techman`;

const form = document.getElementById('loginForm');
const err = document.getElementById('err');
const btn = document.getElementById('submit');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  err.hidden = true;
  btn.disabled = true;
  btn.textContent = t('Signing in…');
  try {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'techman' },
      body: JSON.stringify({
        password: document.getElementById('password').value,
        code: document.getElementById('code').value.trim(),
      }),
    });
    const data = await res.json().catch(() => ({}));
    if (res.ok) { window.location.replace('/'); return; }
    err.textContent = data.error || t('Sign-in failed.');
    err.hidden = false;
    document.getElementById('code').value = '';
  } catch {
    err.textContent = t('Could not reach the server. Check your connection.');
    err.hidden = false;
  } finally {
    btn.disabled = false;
    btn.textContent = t('Sign in');
  }
});
