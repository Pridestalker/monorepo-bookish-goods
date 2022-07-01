"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["scripts/components/hero/banner"],{

/***/ "./assets/scripts/components/hero-banner/index.js":
/*!********************************************************!*\
  !*** ./assets/scripts/components/hero-banner/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  init: function init() {
    swiper__WEBPACK_IMPORTED_MODULE_0__.Swiper.use([swiper__WEBPACK_IMPORTED_MODULE_0__.Autoplay, swiper__WEBPACK_IMPORTED_MODULE_0__.A11y, swiper__WEBPACK_IMPORTED_MODULE_0__.Lazy]);
    document.body.querySelectorAll('[data-component="hero-banner"]').forEach(function (component) {
      var swiper = component.querySelector('.swiper-container');
      swiper.swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__.Swiper(swiper, {
        a11y: true,
        autoplay: {
          pauseOnMouseEnter: true
        },
        slidesPerView: 1,
        lazy: true,
        loop: true
      });
    });
  },
  load: function load() {}
});

/***/ })

}]);