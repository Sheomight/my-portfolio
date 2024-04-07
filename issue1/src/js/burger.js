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