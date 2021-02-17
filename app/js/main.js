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
    // let mix_1 = document.querySelector('.products__items');
    // let mix_2 = document.querySelector('.design__list');

    // let mixer1 = mixitup(mix_1, {
    //     selectors: {
    //         control: '.products .filter-list__btn'
    //     }
    // });
    // let mixer2 = mixitup(mix_2, {
    //     selectors: {
    //         control: '.design .filter-list__btn'
    //     }
    // });

    $('.user__btn--click').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active');
        $('body').toggleClass('lock');
    })

    // Range slider
    $('.filter-price__input').ionRangeSlider({
        type: "double",
        prefix: "$",
        step: 0.01,
        onStart: function (data) { 
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },
        onChange: function (data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },
    });

});