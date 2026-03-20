document.addEventListener('DOMContentLoaded', () => {
  // Mobile navigation toggle
  const navToggle = document.getElementById('nav-mobile-toggle');
  const navMobile = document.getElementById('nav-mobile');
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMobile.style.display = navMobile.style.display === 'none' ? 'flex' : 'none';
    });
    document.querySelectorAll('#nav-mobile a').forEach(link => {
      link.addEventListener('click', () => {
        navMobile.style.display = 'none';
      });
    });
  }

  // Header click behavior (unobtrusive - avoids inline onclick)
  const headerH2 = document.querySelector('header h2');
  if (headerH2) {
    headerH2.style.cursor = 'pointer';
    headerH2.addEventListener('click', () => {
      const path = window.location.pathname.split('/').pop();
      if (!path || path === '' || path === 'index.html') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        window.location.href = 'index.html';
      }
    });
  }

  // Smooth scrolling for nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href) return;
      if (href.includes('.html')) {
        return; // allow normal navigation for other pages
      }
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({ top: targetElement.offsetTop - 70, behavior: 'smooth' });
      }
    });
  });

  // Section reveal on scroll
  const sections = document.querySelectorAll('section');
  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top < triggerBottom) {
        sec.classList.add('visible');
      }
    });
  };
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
});

