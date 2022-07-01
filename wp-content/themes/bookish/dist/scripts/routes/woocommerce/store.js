"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["scripts/routes/woocommerce/store"],{

/***/ "./assets/scripts/routes/woo-store/index.js":
/*!**************************************************!*\
  !*** ./assets/scripts/routes/woo-store/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_Woocommerce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/Woocommerce */ "./assets/scripts/src/Woocommerce/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  init: function init() {
    _src_Woocommerce__WEBPACK_IMPORTED_MODULE_0__.Shop.refreshAfterOrder();
  },
  finalize: function finalize() {}
});

/***/ }),

/***/ "./assets/scripts/src/Woocommerce/Shop/index.js":
/*!******************************************************!*\
  !*** ./assets/scripts/src/Woocommerce/Shop/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _refreshAfterOrder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./refreshAfterOrder */ "./assets/scripts/src/Woocommerce/Shop/refreshAfterOrder.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  refreshAfterOrder: _refreshAfterOrder__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./assets/scripts/src/Woocommerce/Shop/refreshAfterOrder.js":
/*!******************************************************************!*\
  !*** ./assets/scripts/src/Woocommerce/Shop/refreshAfterOrder.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var form = document.querySelector('.woocommerce-ordering'),
      select = form.querySelector('select');
  select.addEventListener('change', function () {
    form.submit();
  });
});

/***/ }),

/***/ "./assets/scripts/src/Woocommerce/index.js":
/*!*************************************************!*\
  !*** ./assets/scripts/src/Woocommerce/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Shop": () => (/* reexport safe */ _Shop__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Shop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shop */ "./assets/scripts/src/Woocommerce/Shop/index.js");



/***/ })

}]);