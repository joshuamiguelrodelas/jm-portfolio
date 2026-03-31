// ============================================================
// Joshua Miguel Rodelas — Portfolio JS
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  const navbar = document.getElementById('navbar');

  // ---- Define which sections have LIGHT (white) backgrounds ----
  // Add the section id here if its background is light/white
  const lightSections = new Set(['about', 'experience', 'contact']);

  // ---- Navbar: scroll + section awareness ----
  function updateNavbar() {
    const scrollY = window.scrollY;

    // Find which section is currently most visible
    let currentSection = 'home';
    document.querySelectorAll('section[id]').forEach(sec => {
      const top = sec.getBoundingClientRect().top;
      if (top <= 80) currentSection = sec.id;
    });

    const isLight = lightSections.has(currentSection);

    // Scrolled class (adds background)
    if (scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Light / dark class for text color
    if (isLight) {
      navbar.classList.add('nav-light');
    } else {
      navbar.classList.remove('nav-light');
    }

    // Active link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar(); // run on load

  // ---- Mobile hamburger menu ----
  const hamburger = document.getElementById('hamburger');
  const navLinksMenu = document.getElementById('navLinks');

  if (hamburger && navLinksMenu) {
    hamburger.addEventListener('click', () => {
      navLinksMenu.classList.toggle('open');
    });
    navLinksMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinksMenu.classList.remove('open');
      });
    });
  }

  // ---- Experience / Projects tab toggle ----
  const toggleBtns = document.querySelectorAll('.toggle-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      toggleBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      const targetTab = document.getElementById(`tab-${target}`);
      if (targetTab) {
        targetTab.classList.add('active');
        targetTab.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
      }
    });
  });

  // ---- Scroll reveal ----
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  const revealSelectors = [
    '.about-block', '.achievement-card', '.edu-item',
    '.skill-category', '.software-item', '.exp-card',
    '.mashup-card', '.contact-link', '.yt-col',
  ];
  revealSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.classList.add('reveal');
      if (i % 3 === 1) el.classList.add('reveal-delay-1');
      if (i % 3 === 2) el.classList.add('reveal-delay-2');
      revealObserver.observe(el);
    });
  });

  // ---- Contact form ----
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
      btn.style.cssText = 'background:#2d8a4e;border-color:#2d8a4e;color:#fff;';
      btn.disabled = true;
      setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
        btn.style.cssText = '';
        btn.disabled = false;
        contactForm.reset();
      }, 3000);
    });
  }

  // ---- Smooth scroll ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY,
          behavior: 'smooth'
        });
      }
    });
  });

  // ---- Hero photo fallback ----
  const heroPhoto = document.getElementById('heroPhoto');
  if (heroPhoto) {
    heroPhoto.addEventListener('error', () => {
      heroPhoto.style.display = 'none';
    });
  }

});
