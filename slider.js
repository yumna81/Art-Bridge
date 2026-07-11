
function initSlider() {
  const track = document.querySelector('.slider-track');
  if (!track) return; // stop kalau slider tidak ada di halaman ini

  const slides = track.querySelectorAll('.slide');
  const dotsWrap = document.querySelector('.slider-dots');
  const btnPrev = document.querySelector('.slider-arrow.prev');
  const btnNext = document.querySelector('.slider-arrow.next');
  let current = 0;
  let autoSlide;

  // buat titik indikator otomatis sesuai jumlah slide
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsWrap.appendChild(dot);
  });
  const dots = dotsWrap.querySelectorAll('.dot');

  function goToSlide(index) {
    current = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach(d => d.classList.remove('active'));
    dots[current].classList.add('active');
  }

  btnNext.addEventListener('click', () => {
    goToSlide(current + 1);
    resetAutoSlide();
  });

  btnPrev.addEventListener('click', () => {
    goToSlide(current - 1);
    resetAutoSlide();
  });

  function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => goToSlide(current + 1), 5000);
  }

  resetAutoSlide();
}

document.addEventListener('DOMContentLoaded', initSlider);
