'use strict';

const hamburgerButton = document.querySelector('.hamburger-button');
const hambugerMenu = document.querySelector('.hamburger-menu');
const body = document.querySelector('body');
let isActive = false;

hamburgerButton.addEventListener('click', () => {
   hambugerMenu.classList.toggle('is-activated');
   body.classList.toggle('no-scroll');
   hamburgerButton.classList.toggle('button-is-activated');
});