/* Fischer Messtechnik – homepage prototype interactions */
(() => {
  const header = document.querySelector('[data-header]');
  const nav = document.querySelector('[data-nav]');
  const burger = document.querySelector('[data-burger]');
  const megaTrigger = document.querySelector('[data-mega-trigger]');
  const mega = document.querySelector('[data-mega]');
  const mobileNav = window.matchMedia('(max-width: 960px)');

  /* Header shadow once the page scrolls */
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Mega menu */
  const setMega = (open) => {
    megaTrigger.setAttribute('aria-expanded', String(open));
    mega.classList.toggle('is-open', open);
  };
  megaTrigger.addEventListener('click', () => setMega(megaTrigger.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('click', (e) => {
    if (!mobileNav.matches && !e.target.closest('.nav__item--mega')) setMega(false);
  });

  /* Mobile drawer */
  const setNav = (open) => {
    if (open) nav.style.setProperty('--nav-top', `${header.getBoundingClientRect().bottom}px`);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-open', open);
  };
  burger.addEventListener('click', () => setNav(burger.getAttribute('aria-expanded') !== 'true'));
  mobileNav.addEventListener('change', () => { setNav(false); setMega(false); });

  /* Close menus after following an in-page link */
  nav.addEventListener('click', (e) => {
    if (e.target.closest('a[href^="#"]')) { setNav(false); setMega(false); }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (mega.classList.contains('is-open')) { setMega(false); megaTrigger.focus(); }
    if (nav.classList.contains('is-open')) { setNav(false); burger.focus(); }
  });

  /* Contact form – client-side validation only (prototype, not connected) */
  const form = document.querySelector('[data-form]');
  const status = document.querySelector('[data-form-status]');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let firstInvalid = null;
    form.querySelectorAll('[required]').forEach((el) => {
      const valid = el.type === 'checkbox' ? el.checked : el.checkValidity() && el.value.trim() !== '';
      el.closest('.field, .check').classList.toggle('is-invalid', !valid);
      el.setAttribute('aria-invalid', String(!valid));
      if (!valid && !firstInvalid) firstInvalid = el;
    });
    if (firstInvalid) {
      status.className = 'form__status is-error';
      status.textContent = 'Bitte füllen Sie die markierten Pflichtfelder aus.';
      firstInvalid.focus();
      return;
    }
    status.className = 'form__status is-ok';
    status.textContent = 'Vielen Dank für Ihre Anfrage. Wir melden uns in Kürze bei Ihnen. (Prototyp: Das Formular ist noch nicht angebunden.)';
    form.reset();
  });

  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
