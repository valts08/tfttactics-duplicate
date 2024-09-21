const sectionElement = document.querySelectorAll('.section-link');
const trademarkYear = document.querySelector('.trademark');

sectionElement.forEach(function(e) {
    e.addEventListener('click', function() {
        sectionElement.forEach(function(e) {
            e.classList.remove('active')
        });
        e.classList.add('active');
    });
});

document.addEventListener('DOMContentLoaded', function(e) {
    const currentTime = new Date;
    const currentYear = currentTime.getFullYear();
    console.log(e)
    trademarkYear.textContent += ` ${currentYear}`;
});