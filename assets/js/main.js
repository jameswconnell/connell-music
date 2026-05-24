// Hero word-by-word animation
const heroH1 = document.querySelector('.hero h1');
if (heroH1) {
  const words = heroH1.textContent.trim().split(' ');
  heroH1.innerHTML = words
    .map((w, i) => `<span class="word" style="animation-delay:${(0.08 + i * 0.22).toFixed(2)}s">${w}</span>`)
    .join(' ');
}

// Mobile menu
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
  document.addEventListener('click', e => {
    if (!e.target.closest('.nav') && navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
    }
  });
}

// Scroll down button
const scrollBtn = document.querySelector('.scroll-down');
if (scrollBtn) {
  scrollBtn.addEventListener('click', () => {
    const next = document.querySelector('.section, .bio-section');
    if (next) next.scrollIntoView({ behavior: 'smooth' });
  });
}

// Video thumbnail → fullscreen lightbox
function openVideoLightbox(id) {
  const overlay = document.createElement('div');
  overlay.className = 'video-overlay';
  overlay.innerHTML = `
    <button class="video-overlay-close" aria-label="Close">&times;</button>
    <div class="video-overlay-inner">
      <iframe src="https://player.vimeo.com/video/${id}?autoplay=1&color=c9a84c&title=0&byline=0&portrait=0"
        allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
    </div>`;

  function close() {
    overlay.classList.add('video-overlay-out');
    overlay.addEventListener('animationend', () => overlay.remove(), { once: true });
    document.body.style.overflow = '';
  }

  overlay.querySelector('.video-overlay-close').addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', function esc(e) {
    if (e.key === 'Escape') { close(); document.removeEventListener('keydown', esc); }
  });

  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';
}

document.querySelectorAll('.video-item[data-id]').forEach(item => {
  item.addEventListener('click', function () {
    openVideoLightbox(this.dataset.id);
  });
});

// Contact form character count
const msgArea = document.getElementById('message');
const charHint = document.querySelector('.char-hint');
if (msgArea && charHint) {
  msgArea.addEventListener('input', function () {
    charHint.textContent = `${this.value.length} of 600 max characters`;
  });
}
