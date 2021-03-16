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
        responsive: [{
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

    // Star rating
    $(".star").rateYo({
        starWidth: "12px",
        normalFill: "#d6d6d6",
        ratedFill: "#ffcc00",
        readOnly: true
    });

    $(".product-card__star").rateYo({
        starWidth: "18px",
        normalFill: "#d6d6d6",
        ratedFill: "#ffcc00",
        readOnly: true
    });

    // Change button activity
    $('.catalog-box__filter-btn').on('click', function () {
        $('.catalog-box__filter-btn').removeClass('catalog-box__filter-btn--active');
        $(this).addClass('catalog-box__filter-btn--active');
    });

    $('.button-list').on('click', function () {
        $('.catalog-box__inner').addClass('list-view')
    });

    $('.button-grid').on('click', function () {
        $('.catalog-box__inner').removeClass('list-view')
    });

    // Change link activity
    $('.pagination__link').on('click', function () {
        $('.pagination__link').removeClass('pagination__link--active');
        $(this).addClass('pagination__link--active');
    });


    // Mixitup
    let mix_1 = document.querySelector('.products__items');
    let mix_2 = document.querySelector('.design__list');

    let mixer1 = mixitup(mix_1, {
        selectors: {
            control: '.products .filter-list__btn'
        }
    });
    let mixer2 = mixitup(mix_2, {
        selectors: {
            control: '.design .filter-list__btn'
        }
    });
});

// FIlter open
const open = document.querySelector('.catalog-box__btn'),
filter = document.querySelector('.filter'),
close = document.querySelector('.filter__close'),
lock = document.querySelector('.overlay'),
bodyLock = document.querySelector('body');

open.addEventListener('click', () => {
  filter.classList.add('filter--active');
  lock.classList.add('overlay--active');
  bodyLock.classList.add('lock');
});

close.addEventListener('click', () => {
  filter.classList.remove('filter--active');
  lock.classList.remove('overlay--active');
  bodyLock.classList.remove('lock');
});

//   Menu burger
const click = document.querySelector('.user__btn--click'),
    menu = document.querySelector('.menu__list'),
    lockBody = document.querySelector('body');

click.addEventListener('click', () => {
  menu.classList.toggle('menu__list--active');
  lockBody.classList.toggle('lock');
});
