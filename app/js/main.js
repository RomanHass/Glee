$(function () {

// Main slider
    $('.main-slider').slick({
        arrows: false,
        dots: true,
        speed: 1300,
    });

//Bottom slider
    $('.bottom-slider__carousel').slick({
        arrows: false,
        dots: false,
        speed: 1300,
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
            breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
            breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
            breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
            breakpoint: 425,
                settings: {
                    slidesToShow: 1,
            },
        }
        ]
    });

// Mixitup
    let mix_1 = document.querySelector('.products__items');
    let mix_2 = document.querySelector('.design__list');

    let mixer1 = mixitup(mix_1, {
        selectors: {
            control: '.products__btn'
        }
    });
    let mixer2 = mixitup(mix_2, {
        selectors: {
            control: '.design__btn'
        }
    });

    $('.user__btn--click').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active');
        $('body').toggleClass('lock');
    })

});