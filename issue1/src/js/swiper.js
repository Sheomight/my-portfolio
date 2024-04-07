const testimonialSwiper = new Swiper('.testimonial__swiper', {
  loop: true,
  pagination: {
    el: '.testimonial__swiper-pagination',
    clickable: true
  }
});

const blogSwiper = new Swiper('.blog__swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.blog__swiper-pagination',
    clickable: true
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});