const headerMenu = document.querySelector('.header__menu');
const burger = document.querySelector('.burger');

let isMenuOpen = false;

burger.addEventListener('click', function () {
  burger.classList.toggle('burger_active');
  isMenuOpen = !isMenuOpen;
  headerMenu.animate(
    [
      { top: '-100%', left: 0, opacity: 0.3 },
      { top: 0, opacity: 1 }
    ],
    {
      duration: 500,
      fill: 'forwards',
      direction: isMenuOpen ? 'normal' : 'reverse'
    }
  )
});
const buttons = document.getElementsByClassName('menu__item');

for (let button of buttons) {
  button.addEventListener('click', (e) => {
  
    const blockId = e.target.attributes.href.value
  
    if (blockId[0] == '#') {
      const block = document.getElementById(blockId.slice(1, blockId.length));
  
      block.scrollIntoView({
        behavior: 'smooth',
      });
    }
  });
}

// import Swiper from 'swiper';
// import { Pagination } from 'swiper/modules';

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