const e={hamburger:document.querySelector("[hamburger]"),body:document.querySelector("body"),modalNav:document.querySelector("#modal-nav"),btnOpen:document.querySelector("#btn-form-open"),btnClose:document.querySelector("#btn-form-close"),modalForm:document.querySelector("#modal-form"),carouselRow:document.getElementsByClassName(".customers__list"),carouselSlides:document.getElementsByClassName(".customers__item"),btnPrev:document.querySelector("#btn-prev"),nextBtn:document.querySelector("#btn-next"),mobileLangBox:document.querySelector("#mobile-lang-box"),mobileLangList:document.querySelector("#mobile-lang-list"),mobileLangSvg:document.querySelector(".header__mobile-lang-svg")},{hamburger:t,body:o,modalNav:l,mobileLangBox:n,mobileLangList:s,mobileLangSvg:r}=e;t.addEventListener("click",function(){t.classList.toggle("burger-active"),o.classList.toggle("no-scroll"),l.classList.toggle("backdrop"),l.classList.toggle("visually-hidden")}),n.addEventListener("click",function(){r.classList.toggle("header__mobile-lang-svg-active"),s.classList.toggle("visually-hidden")}),s.addEventListener("click",function(e){var t=e.target.closest("li");if(t){var o=t.querySelector(".header__mobile-lang-name").textContent,l=t.querySelector(".header__mobile-lang-flag");console.log("Span Content:",o),console.log("Image Src:",l.currentSrc)}});const{btnOpen:c,body:a,modalForm:i,btnClose:d}=e;(()=>{function e(){a.classList.toggle("no-scroll"),i.classList.toggle("backdrop"),i.classList.toggle("visually-hidden")}c.addEventListener("click",e),d.addEventListener("click",e)})();const{btnPrev:m,nextBtn:g,carouselSlides:u,carouselRow:b}=e;(()=>{let e=1;width=u[0].clientWidth,b.style.transform="translateX("+-width*e+"px)",g.addEventListener("click",function(){e>=u.length-1||(b.style.transition="transform 0.4s ease-out",e++,b.style.transform="translateX("+-width*e+"px)")})})();
//# sourceMappingURL=index.6bdf80d2.js.map