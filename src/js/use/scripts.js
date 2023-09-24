document.addEventListener('DOMContentLoaded', function() {
    let currentPath = window.location.pathname;
    let links = document.querySelectorAll('.navbar__link');

    links.forEach(function(link) {
        let linkPath = link.getAttribute('href');

        if (currentPath == linkPath) {
            link.classList.add('navbar__link--active');
        } else {
            link.classList.remove('navbar__link--active');
        }
    });
});
