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

// document.addEventListener("DOMContentLoaded", function () {
//   window.addEventListener("click", function (e) {
//     if(document.querySelector(".product img").contains(e.target)){}
//     console.log(e.target)
//     // window.location.href = "https://www.ejemplo.com";
//   });
//   var enlace = document.querySelector(".product img");
//   enlace.addEventListener("click", function () {
//     alert("hoal")
//     // window.location.href = "https://www.ejemplo.com";
//   },);
// });
