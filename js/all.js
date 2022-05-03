$(document).ready(function () {
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