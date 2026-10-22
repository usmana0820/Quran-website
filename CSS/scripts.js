document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const year = document.getElementById('current-year');
    const hero = document.querySelector('.hero');

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function () {
            const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', String(!isOpen));
            menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
            navMenu.classList.toggle('is-open', !isOpen);
        });

        navMenu.addEventListener('click', function (event) {
            if (event.target.closest('a')) {
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.setAttribute('aria-label', 'Open navigation menu');
                navMenu.classList.remove('is-open');
            }
        });
    }

    if (hero && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const splashImages = Array.from({ length: 15 }, function (_, index) {
            return 'images/splash ' + (index + 1) + '.jpg';
        });
        let currentImageIndex = 14;

        window.setInterval(function () {
            currentImageIndex = (currentImageIndex + 1) % splashImages.length;
            hero.style.backgroundImage = 'url("' + splashImages[currentImageIndex] + '")';
        }, 8000);
    }
});
