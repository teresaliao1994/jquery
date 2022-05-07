$(document).ready(function () {
  // dropdown
  $('.menu__link').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active').parent().siblings().find('.menu__link').removeClass('active');
    $(this).siblings('.dropdown').slideToggle();
    $(this).parent().siblings().find('.dropdown').slideUp();
    onclick
    $(selector).on(events, function () {

    });
  });

  // scrollTop
  $('.top a').click(function (e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 700);
  });

  //swiper效果
  const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  // lightbox效果
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  })
});