$(function () {

    $('.main-slider').slick({
        arrows: false,
        dots: true,
        speed: 1300,
    });

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


    $('.bottom-slider__carousel').slick({
        arrows: false,
        dots: false,
        speed: 1300,
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 2000
    });

});
