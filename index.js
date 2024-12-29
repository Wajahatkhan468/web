document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const navbarButtons = document.querySelector('.navbar-buttons-container');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', function () {
            navLinks.classList.toggle('active');  // Toggle navigation links visibility
            navbarButtons.classList.toggle('active');  // Toggle buttons visibility
        });
    }
});
