var bannerSwiper = new Swiper(".banner-swiper", {
  spaceBetween: 30,
  slidesPerView: 'auto',
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".banner-swiper-next",
    prevEl: ".banner-swiper-prev"
  }
})

var movieListSwiper = new Swiper("#movie-list", {
  spaceBetween: 30,
  slidesPerView: 'auto',
  navigation: {
    nextEl: ".movie-swiper-next",
    prevEl: ".movie-swiper-prev"
  }
})
