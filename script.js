document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.main-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const navWrapper = document.querySelector('.nav-wrapper');
  const navOverlay = document.querySelector('.nav-overlay');
  const faders = document.querySelectorAll('.fade-in');

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Scroll animation for fade-in and fade-out
  const appearOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -100px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        entry.target.classList.remove('disappear');
      } else {
        entry.target.classList.add('disappear');
        entry.target.classList.remove('appear');
      }
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

  // Toggle menu function
  window.toggleMenu = function() {
    menuToggle.classList.toggle('active');
    navWrapper.classList.toggle('active');
    navOverlay.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  }
});