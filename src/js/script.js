// ===== slick-slider ============

// $(document).ready(function () {
//     $('.carousel__inner').slick({
//         prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg" alt=""></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg" alt=""></button>',
//         fade: true,
//         autoplay: true,
//         pauseOnHover: false,
//         pauseOnFocus: false,
//         autoplaySpeed: 3000,
//         responsive: [
//             {
//                 breakpoint: 890,
//                 settings: {
//                     arrows: false
//                 }
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//
//
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//
//
//                 }
//             }
//         ]
//     });
// });


// ===== tiny-slider ============

const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    autoplayButtonOutput: false,
    controlsText: [
        '<img src="../icons/left.svg" alt="">',
        '<img src="../icons/right.svg" alt="">'
    ],
    nav: false,
    controls: false,
    responsive: {
        890: {
            controls: true
        }
    }
});
document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});




































