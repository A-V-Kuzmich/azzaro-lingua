let e=document.querySelectorAll(".header__mobile-nav-link");function t(){e.forEach(function(e){e.getAttribute("href")===window.location.pathname&&e.parentNode.classList.add("header__mobile-nav-item-active")})}window.addEventListener("popstate",t),t();const o={hamburger:document.querySelector("[hamburger]"),body:document.querySelector("body"),modalNav:document.querySelector("#modal-nav"),btnOpen:document.querySelector("#btn-form-open"),btnClose:document.querySelector("#btn-form-close"),modalForm:document.querySelector("#modal-form"),carouselRow:document.querySelector(".customers__list"),carouselSlides:document.getElementsByClassName("customers__item"),btnPrev:document.querySelector("#btn-prev"),nextBtn:document.querySelector("#btn-next"),mobileLangBox:document.querySelector("#mobile-lang-box"),mobileLangList:document.querySelector("#mobile-lang-list"),mobileLangSvg:document.querySelector(".header__mobile-lang-svg"),langBox:document.querySelector("#langBox")},{hamburger:n,body:l,modalNav:s,mobileLangBox:a,mobileLangList:r,mobileLangSvg:c,langBox:i}=o;n.addEventListener("click",function(){n.classList.toggle("burger-active"),l.classList.toggle("no-scroll"),s.classList.toggle("backdrop"),s.classList.toggle("visually-hidden")}),a.addEventListener("click",function(){c.classList.toggle("header__mobile-lang-svg-active"),r.classList.toggle("visually-hidden")}),i.addEventListener("click",function(){i.classList.toggle("header__lang-active")});const{btnOpen:d,body:m,modalForm:u,btnClose:g}=o;(()=>{function e(){m.classList.toggle("no-scroll"),u.classList.toggle("backdrop"),u.classList.toggle("visually-hidden")}d.addEventListener("click",e),g.addEventListener("click",e)})();const{btnPrev:b,nextBtn:v,carouselSlides:y,carouselRow:L}=o;(()=>{let e=0,t=y[0].clientWidth;L.style.transform="translateX("+-t*e+"px)",v.addEventListener("click",function(){e>=y.length-4||(L.style.transition="transform 0.4s ease-out",e++,L.style.transform="translateX("+-t*e+"px)")}),b.addEventListener("click",function(){e<0||(L.style.transition="transform 0.4s ease-out",e--,L.style.transform="translateX("+-t*e+"px)")})})();
//# sourceMappingURL=index.b87ef995.js.map
