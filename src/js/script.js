$(document).ready(function () {
//
// // ===== slick-slider ============
//
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

    //  ====== tabs ==============

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    }

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');


    //  ====== modal ==============

    $('[data-modal="consultation"]').on('click', function () {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });

    $('.button_mini').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });

    //  ====== validate ==============

    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "????????????????????, ?????????????? ???????? ??????",
                    minlength: jQuery.validator.format("?????????????? {0} ??????????????!")
                },
                phone: "????????????????????, ?????????????? ???????? ?????????? ????????????????",
                email: {
                    required: "????????????????????, ?????????????? ???????? ??????????",
                    email: "?????????????????????? ???????????? ?????????? ??????????"
                }
            }
        });
    }

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');
    //
    $('input[name=phone]').mask("+7 (999) 999-99-99");

    //  ====== ajax ==============

    $('form').submit(function (e) {
        e.preventDefault();
        $.ajax({
           type: "POST",
           url: "mailer/smart.php",
           data: $(this).serialize()
        }).done(function (){
           $(this).find('input').val('');
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');


           $('form').trigger('reset');
        });
        return false;
    });

    //  ====== pageup ==============

    $(window).scroll(function () {
       if ($(this).scrollTop() > 1600) {
           $('.pageup').fadeIn();
       } else {
           $('.pageup').fadeOut();
       }
    });

    //  ====== smooth scroll ==============

    $("a[href^='#']").click(function (){
       let _href = $(this).attr('href');
       $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
       return false;
    });

});

// ===== tiny-slider ============

const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    autoplayButtonOutput: false,
    controlsText: [
        '<img src="../img/icons/left.svg" alt="">',
        '<img src="../img/icons/right.svg" alt="">'
    ],
    nav: false,
    controls: false,
    responsive: {
        890: {
            controls: true
        }
    }
});
// document.querySelector('.prev').addEventListener('click', function () {
//     slider.goTo('prev');
// });
// document.querySelector('.next').addEventListener('click', function () {
//     slider.goTo('next');
// });


























