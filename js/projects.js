document.addEventListener('DOMContentLoaded', function() {

    const swiperAgricultura = new Swiper('.swiper-agricultura', {
        loop: true,
        pagination: {
            el:'.swiper-pagination-agricultura',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next-agricultura',
            prevEl: 'swiper-button-prev-agricultura',
        },
    });

    const swiperMeliponicultura = new Swiper('.swiper-meliponicultura', {
        loop: true,
        pagination: {
            el:'.swiper-pagination-meliponicultura',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next-meliponicultura',
            prevEl: 'swiper-button-prev-meliponicultura',
        },
    });
});