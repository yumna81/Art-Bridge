
function renderNavbar(active) {
  const el = document.getElementById('site-navbar');
  if (!el) return;

  const links = [
    { key: 'home', href: 'index.html', label: 'Home' },
    { key: 'search', href: 'search.html', label: 'Artists' },
    { key: 'orders', href: 'orders.html', label: 'My Orders' },
    { key: 'profile', href: 'profile.html', label: 'Profile' },
    { key: 'settings', href: 'settings.html', label: 'Settings' },
  ];

  const linksHtml = links.map(l =>
    `<li><a href="${l.href}"${l.key === active ? ' class="active"' : ''}>${l.label}</a></li>`
  ).join('');

  el.innerHTML = `
  <nav class="navbar">
    <div class="container">
      <div class="brand">
        <img src="img/logo-artbridge.png" alt="Logo ArtBridge" class="logo-icon">
        <a href="index.html" class="logo">Art<span>Bridge</span></a>
      </div>

      <button class="nav-toggle">&#9776;</button>

      <div class="navbar-menu">
        <ul class="nav-links">${linksHtml}</ul>

        <form class="nav-search" id="navSearchForm">
          <input type="text" id="navSearchInput" placeholder="Cari artis atau karya...">
          <button type="submit">&#8981;</button>
        </form>

        <div class="nav-actions">
          <a href="login.html" class="btn btn-outline">Login</a>
          <a href="signup.html" class="btn btn-primary">Sign Up</a>
        </div>
      </div>
    </div>
  </nav>`;

  initNavToggle();
  initNavSearch();
}

function renderFooter() {
  const el = document.getElementById('site-footer');
  if (!el) return;

  el.innerHTML = `
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="logo">Art<span style="color:#fff">Bridge</span></a>
          <p>Connecting artists and clients to create extraordinary artwork, from sketches to digital paintings.</p>
        </div>
        <div>
          <h4>Navigation</h4>
          <div class="footer-nav">
            <a href="index.html">Home</a>
            <a href="search.html">Explore Artists</a>
            <a href="orders.html">My Orders</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        &copy; 2026 ArtBridge. Dibuat untuk tugas Final Project Pengenalan Perancangan Web.
      </div>
    </div>
  </footer>`;
}

function initNavToggle() {
  const navToggle = document.querySelector('.nav-toggle');
  const navbar = document.querySelector('.navbar');
  if (!navToggle || !navbar) return;
  navToggle.addEventListener('click', () => navbar.classList.toggle('open'));
}

function initNavSearch() {
  const navForm = document.getElementById('navSearchForm');
  if (!navForm) return;

  navForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const keyword = document.getElementById('navSearchInput').value.trim();
    window.location.href = 'search.html' + (keyword ? '?q=' + encodeURIComponent(keyword) : '');
  });

  const params = new URLSearchParams(window.location.search);
  const q = params.get('q');
  const navSearchInput = document.getElementById('navSearchInput');
  if (q && navSearchInput) navSearchInput.value = q;
}
