// 8-script.js
// Simple accessible hamburger toggle for the nav
document.addEventListener('DOMContentLoaded', function () {
  const body = document.body;
  const hamburger = document.getElementById('hamburger');
  const navList = document.getElementById('main-nav-list');

  if (!hamburger || !navList) return;

  function openNav() {
    body.classList.add('nav-open');
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.setAttribute('aria-label', 'Close navigation');
    // move focus to first link in menu for convenience
    const firstLink = navList.querySelector('a');
    if (firstLink) firstLink.focus();
    // trap focus could be added here if needed
  }

  function closeNav() {
    body.classList.remove('nav-open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Open navigation');
    hamburger.focus();
  }

  function toggleNav() {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    if (expanded) closeNav(); else openNav();
  }

  hamburger.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleNav();
  });

  // Close when clicking outside the nav-list (on small screens)
  document.addEventListener('click', function (e) {
    if (!body.classList.contains('nav-open')) return;
    // if click target is inside navList or hamburger, do nothing
    if (navList.contains(e.target) || hamburger.contains(e.target)) return;
    closeNav();
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && body.classList.contains('nav-open')) {
      closeNav();
    }
  });

  // Close nav when a nav link is activated (useful on mobile)
  navList.addEventListener('click', function (e) {
    const target = e.target;
    if (target.tagName === 'A' && body.classList.contains('nav-open')) {
      closeNav();
    }
  });

  // Ensure ARIA is set initially
  hamburger.setAttribute('aria-expanded', 'false');
});
