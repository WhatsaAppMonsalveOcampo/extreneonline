document.addEventListener('DOMContentLoaded', function() {
    let currentPath = window.location.pathname;
    let links = document.querySelectorAll('.navbar__link');

    links.forEach(function(link) {
        let linkPath = link.getAttribute('href');
        console.log(currentPath)
        console.log(linkPath)

        if (currentPath == linkPath) {
            link.classList.add('navbar__link--active');
            console.log("aja")
        } else {
            link.classList.remove('navbar__link--active');
        }
    });
});
