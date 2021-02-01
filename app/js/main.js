$(function () {

    $('.main-slider').slick({
        arrows: false,
        dots: true,
        speed: 1300,
    });

    var mixer = mixitup('.products__items');

    var mixer = mixitup('.design__list');

    $('.bottom-slider__carousel').slick({
        arrows: false,
        dots: false,
        speed: 1300,
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 2000
    });

});
