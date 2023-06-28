(() => {
  const refs = {
    hamburger: document.querySelector('[hamburger]'),
  };

  refs.hamburger.addEventListener('click', toggleModalMobile);

  function toggleModalMobile() {
    refs.hamburger.classList.toggle('burger-active');
  }
})();
