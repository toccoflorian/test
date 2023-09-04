/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/commun.js ***!
  \***********************/
// header
const headerlogoElement = document.querySelector('#header-logo');
headerlogoElement.addEventListener('click', event => {
  location = './index.html';
});

// detection du scroll vers le bas
window.addEventListener('DOMContentLoaded', event => {
  const headerElement = document.querySelector('header');
  const DScrollElement = document.querySelector('.down-scroll');
  const contentElement = document.querySelector('.content');
  let lastScrollY;
  document.addEventListener('scroll', event => {
    if (scrollY > 0) {
      headerElement.classList.add('down-scroll');
      contentElement.style = 'margin-top: 120px';
    } else {
      headerElement.classList.remove('down-scroll');
      contentElement.style = 'margin-top: 0px';
    }
    if (scrollY > lastScrollY) {
      DScrollElement.style.top = '0px';
      console.log(DScrollElement);
    } else if (scrollY < lastScrollY) {
      DScrollElement.style.top = '-120px';
    }
    lastScrollY = scrollY;
  });
});
/******/ })()
;
//# sourceMappingURL=commun.bundle.js.map