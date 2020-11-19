// $(document).ready(function(){

$(document).ready(() => {
  $('.slider__inner').slick({
    arrows: false,
    dots: true,
  });

  $('.works__inner').slick({
    infinity: true,
    slidesToShow: 4,
    SlidesToScroll: 2,
    //  autoplay: true,
    arrows: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'> <img src='img/slider/arrow-left.svg' alt='jjhj'></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><img src='img/slider/arrow-right.svg' alt='ffg'></button>",
  });
  $('.header__menu-btn').on('click', () => {
    $('.header__menu > ul').toggleClass('active');
  });
  $('.header__drop-down.drop-down a').on('click', () => {
    $('.header__drop-down> a').toggleClass('arrows_top');
    $('.drop-down__list').toggleClass('visible');
  });
});
