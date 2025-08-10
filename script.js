// Navigation menu toggle for small screens
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navAnchors = document.querySelectorAll('.nav-links a');

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Close mobile menu after clicking a link
  navAnchors.forEach(anchor => {
    anchor.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
});