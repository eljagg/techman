const form = document.getElementById('loginForm');
const err = document.getElementById('err');
const btn = document.getElementById('submit');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  err.hidden = true;
  btn.disabled = true;
  btn.textContent = 'Signing in…';
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
    err.textContent = data.error || 'Sign-in failed.';
    err.hidden = false;
    document.getElementById('code').value = '';
  } catch {
    err.textContent = 'Could not reach the server. Check your connection.';
    err.hidden = false;
  } finally {
    btn.disabled = false;
    btn.textContent = 'Sign in';
  }
});
