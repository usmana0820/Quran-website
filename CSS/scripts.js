document.addEventListener('DOMContentLoaded', function() {
    const splashImages = [
        'images/splash 1.jpg',
        'images/splash 2.jpg',
        'images/splash 3.jpg',
        'images/splash 4.jpg',
        'images/splash 5.jpg',
        'images/splash 6.jpg',
        'images/splash 7.jpg',
        'images/splash 8.jpg',
        'images/splash 9.jpg',
        'images/splash 10.jpg',
        'images/splash 11.jpg',
        'images/splash 12.jpg',
        'images/splash 13.jpg',
        'images/splash 14.jpg',
        'images/splash 15.jpg'
    ];

    let currentImageIndex = 0;
    const splashScreen = document.getElementById('splash');

    function changeSplashImage() {
        splashScreen.style.transition = 'background-image 4s ease-in-out'; // Smooth transition
        splashScreen.style.backgroundImage = `url('${splashImages[currentImageIndex]}')`;
        currentImageIndex = (currentImageIndex + 1) % splashImages.length;
    }

    // Change splash screen image every 3 seconds
    setInterval(changeSplashImage, 4000);

    // Hover effect for splash screen
    splashScreen.addEventListener('mouseenter', function() {
        splashScreen.style.transition = 'background-image 5.1s ease-in-out'; // Faster transition on hover
    });

    splashScreen.addEventListener('mouseenter', function() {
        splashScreen.style.transition = 'background-image 5s ease-in-out'; // Restore original transition on mouse leave
    });

    // Close collapsed navbar when clicking outside
    document.addEventListener('click', function(event) {
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');

        if (navbarToggler.getAttribute('aria-expanded') === 'true' && !navbarCollapse.contains(event.target) && event.target !== navbarToggler) {
            navbarToggler.click(); // Simulate click on toggler to close navbar
        }
    });

});

