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
