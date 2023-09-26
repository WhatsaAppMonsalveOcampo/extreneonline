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


// window.addEventListener('load', function() {
//   const videoPortrait = document.querySelector('.video-header__video--portrait');
//   const videoLandscape = document.querySelector('.video-header__video--landscape');
//   const fallbackImage = document.querySelector('.video-header__img');
//   console.log("aja")
//   fallbackImage.style.display = 'none'; 
//   // videoPortrait.autoplay = true;
//   // videoPortrait.autoplay = true;


//   // videoPortrait.addEventListener('loadeddata', function() {
//   // });

//   // videoLandscape.addEventListener('loadeddata', function() {
//   // });
// });


window.addEventListener('load', function() {
  // Seleccionar el elemento con la clase 'video-header__container-video'
  var containerVideo = document.querySelector('.video-header__container-video');

  // Crear un elemento de video para portrait
  var videoPortrait = document.createElement('video');
  videoPortrait.className = 'video-header___video video-header__video--portrait';
  videoPortrait.autoplay = true;
  videoPortrait.loop = true;
  videoPortrait.muted = true;
  videoPortrait.playsinline = true;

  // Agregar una fuente para el video portrait
  var sourcePortrait = document.createElement('source');
  sourcePortrait.src = 'video-header-portrait.webm';
  sourcePortrait.type = 'video/mp4';

  videoPortrait.appendChild(sourcePortrait);

  // Crear un elemento de video para landscape
  var videoLandscape = document.createElement('video');
  videoLandscape.className = 'video-header___video video-header__video--landscape';
  videoLandscape.autoplay = true;
  videoLandscape.loop = true;
  videoLandscape.muted = true;
  videoLandscape.playsinline = true;

  // Agregar una fuente para el video landscape
  var sourceLandscape = document.createElement('source');
  sourceLandscape.src = 'video-header-landscape.webm';
  sourceLandscape.type = 'video/mp4';

  videoLandscape.appendChild(sourceLandscape);

  // Insertar los videos dentro del elemento 'video-header__container-video'
  containerVideo.appendChild(videoPortrait);
  containerVideo.appendChild(videoLandscape);
  console.log("Carga el video")
});


