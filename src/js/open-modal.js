import { refs } from "./refs";

const { hamburger, body, backdrop } = refs;

(() => {
  hamburger.addEventListener('click', toggleModalMobile);

  function toggleModalMobile() {
    hamburger.classList.toggle('burger-active');
    body.classList.toggle('no-scroll');
    backdrop.classList.toggle('backdrop');
    // backdrop.classList.remove('visually-hidden');
  }
})();
