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

const swiperElement = document.querySelector('.swiper');
const pagination = document.querySelector('.swiper-pagination')


const swiper = new Swiper(swiperElement, {
  loop: true,
  pagination: {
    el: pagination,
  }
  // modules: [Pagination],

});