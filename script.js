
const toggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  toggle.innerHTML = navLinks.classList.contains('open')
    ? '<i class="fa fa-times"></i>'
    : '<i class="fa fa-bars"></i>';
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    toggle.innerHTML = '<i class="fa fa-bars"></i>';
  });
});
