import { refs } from "./refs";

const { hamburger, body, modalNav } = refs;

(() => {
  hamburger.addEventListener('click', toggleModalMobile);

  function toggleModalMobile() {
    hamburger.classList.toggle('burger-active');
    body.classList.toggle('no-scroll');
    modalNav.classList.toggle('backdrop');
    modalNav.classList.toggle('visually-hidden');
  }
})();
