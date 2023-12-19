import { refs } from "./refs";

const { hamburger, body, modalNav, mobileLangBox, mobileLangList, mobileLangSvg } = refs;

(() => {
  hamburger.addEventListener('click', toggleModalMobile);
  mobileLangBox.addEventListener('click', toggleModalLang);
  mobileLangList.addEventListener('click', ModalLangChoose);
})();

function toggleModalMobile() {
  hamburger.classList.toggle('burger-active');
  body.classList.toggle('no-scroll');
  modalNav.classList.toggle('backdrop');
  modalNav.classList.toggle('visually-hidden');
}
function toggleModalLang() {
  mobileLangSvg.classList.toggle('header__mobile-lang-svg-active');
  mobileLangList.classList.toggle('visually-hidden');
}
function ModalLangChoose(e) {
var clickedLi = e.target.closest('li'); 
  if (clickedLi) {
    var spanContent = clickedLi.querySelector('.header__mobile-lang-name').textContent;
    var imgSrc = clickedLi.querySelector('.header__mobile-lang-flag');
    
    console.log('Span Content:', spanContent);
    console.log('Image Src:', imgSrc.currentSrc);
  }
}
