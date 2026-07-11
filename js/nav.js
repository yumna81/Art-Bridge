
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
    window.location.href = 'explore.html' + (keyword ? '?q=' + encodeURIComponent(keyword) : '');
  });

  // kalau datang dari redirect nav search, isi otomatis kolom pencarian di explore.html
  const params = new URLSearchParams(window.location.search);
  const q = params.get('q');
  const exploreInput = document.getElementById('searchArtist');
  if (q && exploreInput) {
    exploreInput.value = q;
    exploreInput.dispatchEvent(new Event('input'));
  }
}

document.addEventListener('DOMContentLoaded', function () {
  initNavToggle();
  initNavSearch();
});
