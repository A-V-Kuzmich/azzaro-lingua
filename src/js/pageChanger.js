let navLinks = document.querySelectorAll('.header__mobile-nav-link');

function handlePageChange() {
  navLinks.forEach(function (link) {
    if (link.getAttribute('href') === window.location.pathname) {
      link.parentNode.classList.add('header__mobile-nav-item-active');
    }
  });
}

window.addEventListener('popstate', handlePageChange);
handlePageChange();
