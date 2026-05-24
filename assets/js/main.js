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

// Video thumbnail → iframe
document.querySelectorAll('.video-item[data-id]').forEach(item => {
  item.addEventListener('click', function () {
    const id = this.dataset.id;
    const thumb = this.querySelector('.video-thumb');
    if (!thumb) return;
    const iframe = document.createElement('iframe');
    iframe.src = `https://player.vimeo.com/video/${id}?autoplay=1&color=c9a84c&title=0&byline=0`;
    iframe.allow = 'autoplay; fullscreen; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.style.cssText = 'width:100%;aspect-ratio:16/9;border:none;display:block';
    thumb.replaceWith(iframe);
    this.style.cursor = 'default';
    this.removeEventListener('click', arguments.callee);
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
