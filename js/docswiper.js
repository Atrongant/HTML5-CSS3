<!-- Initialize Swiper -->
var swiper = new Swiper('.swiper-container', {
spaceBetween: 30,
centeredSlides: true,
autoplay: {
    delay: 2500,
    disableOnInteraction: false,
},
pagination: {
    el: '.swiper-pagination-doctor',
    clickable: true,
},
/* navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
}, */
});