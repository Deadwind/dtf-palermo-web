/**
 * DTF PALERMO - INTERACTIVIDAD Y NAVEGACIÓN
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Menú Móvil (Hamburger)
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      hamburgerBtn.classList.toggle('open');
      hamburgerBtn.setAttribute('aria-expanded', isOpen);
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        hamburgerBtn.classList.remove('open');
      });
    });
  }

  // 2. Efecto Sticky en Navbar al hacer scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
      navbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.12)';
    } else {
      navbar.style.boxShadow = 'none';
      navbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.08)';
    }
  });

  // 3. Pestañas Interactivas de Guía (DTF Textil vs DTF UV)
  const guideTabBtns = document.querySelectorAll('.guide-tab-btn');
  const guidePanels = document.querySelectorAll('.guide-panel');

  if (guideTabBtns.length > 0 && guidePanels.length > 0) {
    guideTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        
        // Quitar estado activo de todos los botones y paneles
        guideTabBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        guidePanels.forEach(panel => {
          panel.classList.remove('active');
          panel.hidden = true;
        });

        // Activar el botón seleccionado y su panel
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        const activePanel = document.getElementById(targetId);
        if (activePanel) {
          activePanel.classList.add('active');
          activePanel.hidden = false;
        }
      });
    });
  }
});
