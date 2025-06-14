document.addEventListener('DOMContentLoaded', function () {
const toggleBtn = document.querySelector('.menu-toggle');
const navMenu = document.getElementById('navMenu');

toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    });
});

