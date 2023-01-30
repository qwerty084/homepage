import './assets/style.css';

document.addEventListener('DOMContentLoaded', () => {
  const toggleMenu = document.getElementById('toggle-menu');
  const nav = document.getElementById('nav');

  toggleMenu?.addEventListener('click', () => {
    nav?.classList.toggle('nav-open');
  });
});
