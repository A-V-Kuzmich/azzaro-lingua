import { refs } from "./refs";

const {btnOpen, body, modalForm,btnClose } = refs;

(() => {
  btnOpen.addEventListener('click', toggleModalForm);
  btnClose.addEventListener('click', toggleModalForm);

  function toggleModalForm() {
    body.classList.toggle('no-scroll');
    modalForm.classList.toggle('backdrop');
    modalForm.classList.toggle('visually-hidden');
  }
})();