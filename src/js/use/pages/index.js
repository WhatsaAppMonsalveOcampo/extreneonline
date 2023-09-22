var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".slider-hook", {
  slidesPerView: 1.5,
  spaceBetween: 24,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
});
var swiper = new Swiper(".product-slider", {
  slidesPerView: 1,
  spaceBetween: 0,
  // loop: true,
  // pagination: {
  //   el: ".product-slider-pagination",
  //   clickable: true,
  // },
  navigation: {
    nextEl: ".product-slider-btn-next",
    prevEl: ".product-slider-btn-prev",
  },
});


