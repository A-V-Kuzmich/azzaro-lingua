import { refs } from "./refs";
const { btnPrev, nextBtn, carouselSlides, carouselRow } = refs;


(() => {
  let index = 1;

  width = carouselSlides[0].clientWidth;
  carouselRow.style.transform = 'translateX(' + (- width * index) + 'px)';
  
  nextBtn.addEventListener('click', nextSlide);
  function nextSlide() {
    if (index >= carouselSlides.length - 1) {
      return
    }
    carouselRow.style.transition = 'transform 0.4s ease-out';
    index++;
    carouselRow.style.transform = 'translateX(' + (- width * index) + 'px)';

  }
  // hamburger.addEventListener('click', toggleModalMobile);

  // function toggleModalMobile() {
  //   hamburger.classList.toggle('burger-active');
  //   body.classList.toggle('no-scroll');
  //   modalNav.classList.toggle('backdrop');
  //   modalNav.classList.toggle('visually-hidden');
  // }
})();