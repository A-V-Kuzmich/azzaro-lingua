import { refs } from './refs';
const { btnPrev, nextBtn, carouselSlides, carouselRow } = refs;

(() => {
  let index = 0;

  let width = carouselSlides[0].clientWidth;
  carouselRow.style.transform = 'translateX(' + -width * index + 'px)';

  nextBtn.addEventListener('click', nextSlide);
  function nextSlide() {
    if (index >= carouselSlides.length - 4) {
      return;
    }
    carouselRow.style.transition = 'transform 0.4s ease-out';
    index++;
    carouselRow.style.transform = 'translateX(' + -width * index + 'px)';
  }

  btnPrev.addEventListener('click', prevSlide);
  function prevSlide() {
    if (index < 0) {
      return;
    }
    carouselRow.style.transition = 'transform 0.4s ease-out';
    index--;
    carouselRow.style.transform = 'translateX(' + -width * index + 'px)';
  }
})();
