import { refs } from './refs';

const { navLinksMobile, navLinks } = refs;

function setActiveClass(links, currentPath) {
  links.forEach(link => {
    const parent = link.parentNode;
    const linkPath = link.getAttribute('href');
    const isActive = linkPath === currentPath;

    parent.classList.toggle('header__mobile-nav-item-active', isActive);
    parent.classList.toggle('header__nav-item-active', isActive);
  });
}

function handlePageChange() {
  const currentPath = window.location.pathname;

  setActiveClass(navLinksMobile, currentPath);
  setActiveClass(navLinks, currentPath);
}

window.addEventListener('popstate', handlePageChange);
handlePageChange();
