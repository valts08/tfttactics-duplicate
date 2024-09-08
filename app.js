const sectionElement = document.querySelectorAll('.section-link');

sectionElement.forEach(function(e) {
    e.addEventListener('click', function() {
        sectionElement.forEach(function(e) {
            e.classList.remove('active')
        });
        e.classList.add('active');
    });
});