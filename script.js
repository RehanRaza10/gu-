var swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 5000, // Adjust delay as needed (in milliseconds)
        disableOnInteraction: false,
    },
});



const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

function toggleCourses(element) {
    // Toggle the active class
    element.classList.toggle('active');
}
