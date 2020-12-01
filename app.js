import advices from './data.js';

const hamburgerBtn = document.getElementById('hamburgerBtn');
const navBar = document.getElementById('navBar');

hamburgerBtn.addEventListener('click', () => {
  navBar.classList.toggle('open');
});
