!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(2)},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(1);var o=function(){var e=document.documentElement.clientWidth,t=document.querySelectorAll(".slider__item"),n=document.querySelector(".slider__wrapper");e>=320&&e<=767&&new Swiper(".swiper",{loop:!0,spaceBetween:16,slidesPerView:"auto",pagination:{el:".swiper-pagination"}}),t.forEach((function(e){e.addEventListener("click",(function(e){for(var t=e.currentTarget,o=0;o<n.children.length;o++)n.children[o].classList.remove("slider__item_active");t.classList.add("slider__item_active")}))}))},i=function(){var e=document.querySelector(".menu"),t=document.querySelector(".menu__overlay"),n=document.querySelectorAll(".menu__list-item"),o=document.querySelector(".menu__block-bottom"),i=document.querySelectorAll("[data-trigger]"),c=document.querySelector(".header__wrapper");function r(){e.classList.add("fade-out-left"),setTimeout((function(){t.classList.remove("menu_active")}),1e3),e.classList.remove("fadein"),document.querySelector(".header__right-block").prepend(c),c.style.display=""}function l(){o.prepend(c),c.style.display="flex"}if(document.documentElement.clientWidth>=1366){i.forEach((function(e){e.style.display="none"})),l();var a=document.querySelector("[data-menu]"),s=document.querySelector("[data-content]");s.insertBefore(a,s.firstChild)}else document.addEventListener("keydown",(function(e){"Escape"===e.code&&t.classList.contains("menu_active")&&r()})),i.forEach((function(n){n.addEventListener("click",(function(){t.classList.contains("menu_active")?r():(e.classList.remove("fade-out-left"),t.classList.add("menu_active","fadein"),l())}))}));n.forEach((function(n){n.addEventListener("click",(function(n){n.preventDefault(),document.documentElement.clientWidth<=1366&&(setTimeout((function(){t.classList.remove("menu_active","fadein")}),1e3),e.classList.toggle('menu__list-item_active"'),e.classList.add("fade-out-left"))})),t.addEventListener("click",(function(e){e.target===t&&t.classList.contains("menu_active")&&r()}))}))},c=function(){function e(e){document.querySelectorAll(e).forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var t=this.getAttribute("href").substring(1),n=document.getElementById(t).getBoundingClientRect().top-0;window.scrollBy({top:n,behavior:"smooth"})}))}))}e(".slider__item > a"),e(".menu__list-item > a")},r=function(){var e=document.querySelectorAll(".services__descr-further"),t=document.querySelectorAll(".repair__swiper-item__subtitle");document.documentElement.clientWidth>=768&&t.forEach((function(e){e.remove()})),e.forEach((function(e){var t=document.createElement("span");function n(n){setTimeout((function(){e.innerText=n,e.append(t),t.style.transform=""}),1e3),e.classList.remove("open-btn")}e.addEventListener("click",(function(){e.classList.contains("open-btn")?this.previousElementSibling.classList.contains("services__descr-text")?(this.previousElementSibling.style.maxHeight="",n("Читать далее")):(this.previousElementSibling.style.maxHeight="",n("Показать всё")):(this.previousElementSibling.style.maxHeight="1000px",e.innerText="Скрыть",t.style.transform="translateY(-50%) rotate(180deg)",e.append(t),e.classList.add("open-btn"))}))}))},l=function(){function e(e,t,n){var o=document.querySelectorAll(e),i=document.querySelector(t),c=document.querySelectorAll(".modal__feedback "),r=document.querySelectorAll(n);function l(){c.forEach((function(e){e.classList.add("fade-out-right")})),setTimeout((function(){i.style.display="none",document.body.style.overflow="",i.classList.remove("fadein")}),1e3)}o.forEach((function(e){e.addEventListener("click",(function(e){e.target&&e.preventDefault(),i.style.display="block",i.classList.add("fadein"),document.body.style.overflow="hidden",c.forEach((function(e){e.classList.remove("fade-out-right")}))}))})),r.forEach((function(e){e.addEventListener("click",(function(){l()}))})),i.addEventListener("click",(function(e){e.target===i&&l()})),document.addEventListener("keydown",(function(e){"Escape"===e.code&&"block"==i.style.display&&l()}))}e("[data-form]","[data-modal_callback]",".modal__close"),e("[data-callback]","[data-modal_feedback]",".modal__close")};window.addEventListener("DOMContentLoaded",(function(){c(),i(),r(),l(),o(),window.addEventListener("resize",(function(){o()})),console.log("it works")}))}]);
//# sourceMappingURL=bundle.js.map