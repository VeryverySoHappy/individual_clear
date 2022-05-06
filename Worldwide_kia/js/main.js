// section02 swiper start
var swiper = new Swiper(".section2 .mySwiper", {
  slidesPerView: 3,
  spaceBetween: 100,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// section02 swiper end

// section03 start
var swiper = new Swiper(".section3 .mySwiper", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// section03 end