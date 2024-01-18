import { refs } from './refs';

const { hamburger, body, modalNav, mobileLangBox, mobileLangList, mobileLangSvg, langBox } = refs;

(() => {
  hamburger.addEventListener('click', toggleModalMobile);
  mobileLangBox.addEventListener('click', toggleModalLang);
  langBox.addEventListener('click', toggleBoxLang);
})();

function toggleModalMobile() {
  hamburger.classList.toggle('burger-active');
  body.classList.toggle('no-scroll');
  modalNav.classList.toggle('backdrop');
  modalNav.classList.toggle('visually-hidden');

  if (!modalNav.classList.contains('visually-hidden')) {
    clickOutside();
  }
}
function toggleModalLang() {
  mobileLangSvg.classList.toggle('header__mobile-lang-svg-active');
  mobileLangList.classList.toggle('visually-hidden');
}
function toggleBoxLang() {
  langBox.classList.toggle('header__lang-active');
}

function clickOutside() {
  const backdrop = document.querySelector('.backdrop');
  backdrop.addEventListener('click', fn);

  function fn(e) {
    if (e.currentTarget === e.target) {
      backdrop.removeEventListener('click', fn);
      toggleModalMobile();
    }
  }
}
