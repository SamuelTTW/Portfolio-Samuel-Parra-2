const lBars1 = document.querySelector('.line1__bars-menu');
const lBars2 = document.querySelector('.line2__bars-menu');
const lBars3 = document.querySelector('.line3__bars-menu');
const listBars = document.querySelector('.list_bar-menu');
const bMenu = document.querySelector('#bmenu');
const xMenu = document.querySelector('.xmenu');

document.querySelector('#bmenu').addEventListener('click', () => {
  listBars.classList.toggle('deploy');
  bMenu.classList.toggle('none');
  xMenu.classList.toggle('display');
});

document.querySelector('.xmenu').addEventListener('click', () => {
  listBars.classList.toggle('deploy');
  bMenu.classList.toggle('none');
  xMenu.classList.toggle('display');
});

document.querySelector('.a0').addEventListener('click', () => {
  listBars.classList.toggle('deploy');
  bMenu.classList.toggle('none');
  xMenu.classList.toggle('display');
});

document.querySelector('.a1').addEventListener('click', () => {
  listBars.classList.toggle('deploy');
  bMenu.classList.toggle('none');
  xMenu.classList.toggle('display');
});

document.querySelector('.a2').addEventListener('click', () => {
  listBars.classList.toggle('deploy');
  bMenu.classList.toggle('none');
  xMenu.classList.toggle('display');
});
