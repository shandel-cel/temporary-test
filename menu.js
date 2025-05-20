// Hamburger Menu Functionality
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('nav ul');
  const overlay = document.querySelector('.overlay');
  
  // Toggle menu when hamburger is clicked
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // Prevent scrolling when menu is open
    if (navMenu.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  });
  
  // Close menu when overlay is clicked
  overlay.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  });
  
  // Close menu when a nav link is clicked
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  });
});