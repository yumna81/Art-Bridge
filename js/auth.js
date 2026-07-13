
const AUTH_KEY = 'artbridge_isLoggedIn';

function isLoggedIn() {
  return localStorage.getItem(AUTH_KEY) === 'true';
}

function setLoggedIn() {
  localStorage.setItem(AUTH_KEY, 'true');
}

function logout() {
  localStorage.removeItem(AUTH_KEY);
  window.location.href = 'login.html';
}

function requireLogin() {
  if (!isLoggedIn()) {
    window.location.replace('login.html');
  }
}

function redirectIfLoggedIn() {
  if (isLoggedIn()) {
    window.location.replace('index.html');
  }
}
