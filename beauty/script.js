const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('nav ul');

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

window.addEventListener("load", function() {
    document.querySelector(".page-loader").classList.add("hidden");
});
