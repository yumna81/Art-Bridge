
const AUTH_KEY = 'artbridge_isLoggedIn';
const USER_KEY = 'artbridge_currentUser';
const PORTFOLIO_KEY = 'artbridge_portfolio';

function isLoggedIn() {
  return localStorage.getItem(AUTH_KEY) === 'true';
}

function getCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem(USER_KEY)) || null;
  } catch (e) {
    return null;
  }
}

function setCurrentUser(user) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

function setLoggedIn(user) {
  localStorage.setItem(AUTH_KEY, 'true');
  if (user) setCurrentUser(user);
}

function logout() {
  localStorage.removeItem(AUTH_KEY);
  window.location.href = 'login.html';
}

// Use on pages that are only meant for logged-in users (e.g. My Profile, Settings).
// Redirects to the login page immediately if there's no active session.
function requireLogin() {
  if (!isLoggedIn()) {
    window.location.replace('login.html');
  }
}

// Use on the login/signup pages so an already-logged-in user skips straight to the home page.
function redirectIfLoggedIn() {
  if (isLoggedIn()) {
    window.location.replace('index.html');
  }
}

// Use on individual buttons/links that are a "feature" (e.g. Follow Artist, Order Now)
// on an otherwise public page. Sends the user to login first if they're not signed in yet.
// Usage: <button onclick="if(!requireLoginForAction(event)) return;">Follow</button>
function requireLoginForAction(event) {
  if (!isLoggedIn()) {
    if (event && event.preventDefault) event.preventDefault();
    window.location.href = 'login.html';
    return false;
  }
  return true;
}

// Toggles navbar elements marked with .auth-guest-only (shown when logged out)
// and .auth-user-only (shown when logged in), and fills in the user's name/avatar
// wherever a .nav-username-slot / .nav-user-avatar element exists in the navbar.
function applyAuthUI() {
  const loggedIn = isLoggedIn();

  document.querySelectorAll('.auth-guest-only').forEach(function (el) {
    el.style.display = loggedIn ? 'none' : 'flex';
  });
  document.querySelectorAll('.auth-user-only').forEach(function (el) {
    el.style.display = loggedIn ? 'flex' : 'none';
  });

  const user = getCurrentUser();
  if (loggedIn && user) {
    document.querySelectorAll('.nav-username-slot').forEach(function (el) {
      el.textContent = user.username || user.firstName || 'User';
    });
    document.querySelectorAll('.nav-user-avatar').forEach(function (img) {
      if (user.avatar) img.src = user.avatar;
    });
  }
}

document.addEventListener('DOMContentLoaded', applyAuthUI);
