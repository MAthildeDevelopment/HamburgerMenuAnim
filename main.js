const toggle = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');

toggle.addEventListener('click', () => {
    navbar.classList.toggle('change');
})