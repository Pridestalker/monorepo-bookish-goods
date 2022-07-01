"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["scripts/routes/single-product"],{

/***/ "./assets/scripts/config/colors.js":
/*!*****************************************!*\
  !*** ./assets/scripts/config/colors.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "colors": () => (/* binding */ colors),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getThemeColor": () => (/* binding */ getThemeColor),
/* harmony export */   "theme": () => (/* binding */ theme)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var colors = {
  white: 'hsl(0, 100%, 100%)',
  black: 'hsl(0, 0%, 13%)',
  gray: 'hsl(0, 0%, 89%)',
  green: 'hsl(163, 67%, 48%)',
  red: 'hsl(357, 100%, 55%)',
  yellow: 'hsl(47, 100%, 68%)',
  purple: 'hsl(265, 83%, 45%)'
};
var theme = {
  primary: colors.purple,
  secondary: colors.yellow
};

var defaultExport = _objectSpread(_objectSpread({}, colors), theme);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultExport);
/**
 *
 * @param {string} color
 * @param {string} fallback
 */

function getThemeColor(color, fallback) {
  return defaultExport.hasOwnProperty(color) ? defaultExport[color] : defaultExport[fallback];
}

/***/ }),

/***/ "./assets/scripts/config/index.js":
/*!****************************************!*\
  !*** ./assets/scripts/config/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Colors": () => (/* reexport safe */ _colors__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "Trans": () => (/* reexport safe */ _translations__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "getThemeColor": () => (/* reexport safe */ _colors__WEBPACK_IMPORTED_MODULE_0__.getThemeColor)
/* harmony export */ });
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ "./assets/scripts/config/colors.js");
/* harmony import */ var _translations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translations */ "./assets/scripts/config/translations.js");




/***/ }),

/***/ "./assets/scripts/config/translations.js":
/*!***********************************************!*\
  !*** ./assets/scripts/config/translations.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$t": () => (/* binding */ $t),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "nl": () => (/* binding */ nl)
/* harmony export */ });
var nl = {
  search: {
    post_type: {
      product: 'product',
      page: 'pagina',
      post: 'bericht'
    }
  }
};
function $t(string) {
  var backup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var locale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : nl;
  var nesting = string.split('.');
  return nesting.reduce(function (xs, x) {
    return xs && xs[x] ? xs[x] : backup;
  }, locale);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  $t: $t,
  locales: {
    nl: nl
  }
});

/***/ }),

/***/ "./assets/scripts/routes/single-product/index.js":
/*!*******************************************************!*\
  !*** ./assets/scripts/routes/single-product/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_Elements_Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/Elements/Product */ "./assets/scripts/src/Elements/Product/index.js");
/* harmony import */ var _services_add_to_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/add-to-cart */ "./assets/scripts/services/add-to-cart/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  init: function init() {
    customElements.define('bookish-gallery', _src_Elements_Product__WEBPACK_IMPORTED_MODULE_0__.GalleryGroup);
    customElements.define('bookish-gallery-item', _src_Elements_Product__WEBPACK_IMPORTED_MODULE_0__.GalleryItem);
    customElements.define('bookish-tabs', _src_Elements_Product__WEBPACK_IMPORTED_MODULE_0__.TabGroup);
    customElements.define('bookish-tab', _src_Elements_Product__WEBPACK_IMPORTED_MODULE_0__.TabItem);
  },
  finalize: function finalize() {
    (0,_services_add_to_cart__WEBPACK_IMPORTED_MODULE_1__.renderVariableAddToCart)();
    (0,_services_add_to_cart__WEBPACK_IMPORTED_MODULE_1__.renderSimpleAddToCart)();
  }
});

/***/ }),

/***/ "./assets/scripts/services/add-to-cart/index.js":
/*!******************************************************!*\
  !*** ./assets/scripts/services/add-to-cart/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuantityInput": () => (/* reexport safe */ _simple_add_to_cart__WEBPACK_IMPORTED_MODULE_0__.QuantityInput),
/* harmony export */   "SubmitButton": () => (/* reexport safe */ _simple_add_to_cart__WEBPACK_IMPORTED_MODULE_0__.SubmitButton),
/* harmony export */   "renderSimpleAddToCart": () => (/* reexport safe */ _simple_add_to_cart__WEBPACK_IMPORTED_MODULE_0__.renderSimpleAddToCart),
/* harmony export */   "renderVariableAddToCart": () => (/* reexport safe */ _variable_add_to_cart__WEBPACK_IMPORTED_MODULE_1__.renderVariableAddToCart)
/* harmony export */ });
/* harmony import */ var _simple_add_to_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simple-add-to-cart */ "./assets/scripts/services/add-to-cart/simple-add-to-cart/index.js");
/* harmony import */ var _variable_add_to_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variable-add-to-cart */ "./assets/scripts/services/add-to-cart/variable-add-to-cart/index.js");




/***/ }),

/***/ "./assets/scripts/services/add-to-cart/simple-add-to-cart/Components/QuantityInput.jsx":
/*!*********************************************************************************************!*\
  !*** ./assets/scripts/services/add-to-cart/simple-add-to-cart/Components/QuantityInput.jsx ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuantityInput": () => (/* binding */ QuantityInput)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ "./node_modules/@fortawesome/pro-solid-svg-icons/index.es.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _templateObject, _templateObject2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var Input = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].input(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\tmargin-bottom: 0 !important;\n\tbox-shadow: none !important;\n\tborder-radius: 0 !important;\n\ttext-align: center !important;\n\tflex: 1 0 250px;\n"])));
var Button = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\tline-height: 0;\n\tpadding: 0 1rem;\n\tborder: 1px solid #ffdc5c;\n\tbackground: #ffdc5c;\n\ttouch-action: manipulation;\n\t\n\t", "\n\t", "\n"])), function (props) {
  return props.left && 'border-top-left-radius: 4px; border-bottom-left-radius: 4px;';
}, function (props) {
  return props.right && 'border-top-right-radius: 4px; border-bottom-right-radius: 4px;';
});
var QuantityInput = /*#__PURE__*/function (_Component) {
  _inherits(QuantityInput, _Component);

  var _super = _createSuper(QuantityInput);

  function QuantityInput() {
    _classCallCheck(this, QuantityInput);

    return _super.apply(this, arguments);
  }

  _createClass(QuantityInput, [{
    key: "render",
    value: function render() {
      var _this = this;

      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
        style: {
          'display': 'flex'
        }
      }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(Button, {
        type: 'button',
        onClick: this.props.reduceHandler,
        left: true,
        right: false
      }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
        icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faMinus
      })), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(Input, {
        type: 'number',
        name: 'quantity',
        value: this.props.quantity,
        onChange: function onChange(event) {
          return _this.props.changeHandler(event.target.value);
        }
      }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(Button, {
        type: 'button',
        onClick: this.props.increaseHandler,
        left: false,
        right: true
      }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
        icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faPlus
      })));
    }
  }]);

  return QuantityInput;
}(preact__WEBPACK_IMPORTED_MODULE_0__.Component);

/***/ }),

/***/ "./assets/scripts/services/add-to-cart/simple-add-to-cart/Components/SubmitButton.jsx":
/*!********************************************************************************************!*\
  !*** ./assets/scripts/services/add-to-cart/simple-add-to-cart/Components/SubmitButton.jsx ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubmitButton": () => (/* binding */ SubmitButton)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_pro_duotone_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/pro-duotone-svg-icons */ "./node_modules/@fortawesome/pro-duotone-svg-icons/index.es.js");
/* harmony import */ var _lib_styled_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/styled/button */ "./assets/scripts/services/lib/styled/button.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var theme = {
  background: 'green',
  width: '100%'
};
var SubmitButton = /*#__PURE__*/function (_Component) {
  _inherits(SubmitButton, _Component);

  var _super = _createSuper(SubmitButton);

  function SubmitButton() {
    _classCallCheck(this, SubmitButton);

    return _super.apply(this, arguments);
  }

  _createClass(SubmitButton, [{
    key: "render",
    value: function render() {
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(styled_components__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {
        theme: theme
      }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_lib_styled_button__WEBPACK_IMPORTED_MODULE_2__.StyledButton, {
        type: "submit",
        disabled: this.props.loading
      }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
        icon: this.props.loading ? _fortawesome_pro_duotone_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faSpinner : _fortawesome_pro_duotone_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faPlusHexagon,
        spin: this.props.loading
      }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", {
        style: {
          'margin-left': '.5rem'
        }
      }, this.props.loading ? 'Aan het toevoegen' : 'Toevoegen aan winkelmand')));
    }
  }]);

  return SubmitButton;
}(preact__WEBPACK_IMPORTED_MODULE_0__.Component);

/***/ }),

/***/ "./assets/scripts/services/add-to-cart/simple-add-to-cart/app.js":
/*!***********************************************************************!*\
  !*** ./assets/scripts/services/add-to-cart/simple-add-to-cart/app.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddToCart": () => (/* binding */ AddToCart),
/* harmony export */   "renderSimpleAddToCart": () => (/* binding */ renderSimpleAddToCart)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var ky__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ky */ "./node_modules/ky/distribution/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ */ "./assets/scripts/services/add-to-cart/simple-add-to-cart/index.js");
/* harmony import */ var _notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../notifications */ "./assets/scripts/services/notifications/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ "./node_modules/@fortawesome/pro-solid-svg-icons/index.es.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var formElement = document.querySelectorAll('#add-simple-product-to-cart, #add-set-product-to-cart');
var AddToCart = /*#__PURE__*/function (_Component) {
  _inherits(AddToCart, _Component);

  var _super = _createSuper(AddToCart);

  function AddToCart(props) {
    var _this;

    _classCallCheck(this, AddToCart);

    _this = _super.call(this, props);
    _this.state = {
      productID: window['product_id'],
      quantity: 1,
      minQuantity: Number(window['product_settings'].qty.min),
      maxQuantity: Number(window['product_settings'].qty.max) !== 0 ? Number(window['product_settings'].qty.max) : Infinity,
      loading: false
    };
    _this.addToCart = _this.addToCart.bind(_assertThisInitialized(_this));
    _this.editQuantity = _this.editQuantity.bind(_assertThisInitialized(_this));
    _this.increaseHandler = _this.increaseHandler.bind(_assertThisInitialized(_this));
    _this.reduceHandler = _this.reduceHandler.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   *
   * @param {Event} e
   */


  _createClass(AddToCart, [{
    key: "addToCart",
    value: function addToCart(e) {
      var _this2 = this;

      e.preventDefault();
      this.setState({
        loading: true
      });
      ky__WEBPACK_IMPORTED_MODULE_4__["default"].post(window['ajax_url'], {
        searchParams: {
          action: 'add_product_to_cart'
        },
        json: {
          action: 'add_product_to_cart',
          product_id: this.state.productID,
          qty: this.state.quantity
        },
        credentials: 'same-origin'
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        return document.body.dispatchEvent(new CustomEvent('product-added-to-cart', {
          detail: (res === null || res === void 0 ? void 0 : res.data) || []
        }));
      })["finally"](function () {
        (0,_notifications__WEBPACK_IMPORTED_MODULE_2__.registerToast)({
          slug: "add_product_to_cart-".concat(new Date().getTime()),
          content: "Product toegevoegd aan je winkelmandje!",
          actionText: (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
            icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faTimes
          })
        });

        _this2.setState({
          loading: false
        });
      });
    }
  }, {
    key: "editQuantity",
    value: function editQuantity(newQuantity) {
      this.setState({
        quantity: newQuantity
      });
    }
  }, {
    key: "reduceHandler",
    value: function reduceHandler() {
      var _this$state = this.state,
          minQuantity = _this$state.minQuantity,
          quantity = _this$state.quantity;

      if (this.state.quantity > minQuantity) {
        this.setState({
          quantity: quantity - 1
        });
      }
    }
  }, {
    key: "increaseHandler",
    value: function increaseHandler() {
      var _this$state2 = this.state,
          maxQuantity = _this$state2.maxQuantity,
          quantity = _this$state2.quantity;

      if (this.state.quantity < maxQuantity) {
        this.setState({
          quantity: quantity + 1
        });
      } else {
        (0,_notifications__WEBPACK_IMPORTED_MODULE_2__.registerToast)({
          content: "Maar ".concat(maxQuantity, " beschikbaar"),
          slug: "max_availability-".concat(new Date().getTime()),
          time: 1500
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("form", {
        onSubmit: this.addToCart
      }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(___WEBPACK_IMPORTED_MODULE_1__.QuantityInput, {
        changeHandler: this.editQuantity,
        reduceHandler: this.reduceHandler,
        increaseHandler: this.increaseHandler,
        quantity: this.state.quantity
      }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(___WEBPACK_IMPORTED_MODULE_1__.SubmitButton, {
        productID: this.state.productID,
        loading: this.state.loading
      }));
    }
  }]);

  return AddToCart;
}(preact__WEBPACK_IMPORTED_MODULE_0__.Component);
function renderSimpleAddToCart() {
  if (formElement.length === 0) {
    return;
  }

  formElement.forEach(function (element) {
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(AddToCart, null), element);
  });
}

/***/ }),

/***/ "./assets/scripts/services/add-to-cart/simple-add-to-cart/index.js":
/*!*************************************************************************!*\
  !*** ./assets/scripts/services/add-to-cart/simple-add-to-cart/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuantityInput": () => (/* reexport safe */ _Components_QuantityInput__WEBPACK_IMPORTED_MODULE_1__.QuantityInput),
/* harmony export */   "SubmitButton": () => (/* reexport safe */ _Components_SubmitButton__WEBPACK_IMPORTED_MODULE_2__.SubmitButton),
/* harmony export */   "renderSimpleAddToCart": () => (/* reexport safe */ _app__WEBPACK_IMPORTED_MODULE_0__.renderSimpleAddToCart)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./assets/scripts/services/add-to-cart/simple-add-to-cart/app.js");
/* harmony import */ var _Components_QuantityInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/QuantityInput */ "./assets/scripts/services/add-to-cart/simple-add-to-cart/Components/QuantityInput.jsx");
/* harmony import */ var _Components_SubmitButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/SubmitButton */ "./assets/scripts/services/add-to-cart/simple-add-to-cart/Components/SubmitButton.jsx");





/***/ }),

/***/ "./assets/scripts/services/add-to-cart/variable-add-to-cart/Components/VariableSelect.js":
/*!***********************************************************************************************!*\
  !*** ./assets/scripts/services/add-to-cart/variable-add-to-cart/Components/VariableSelect.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VariableSelect": () => (/* binding */ VariableSelect)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ "./node_modules/@fortawesome/pro-solid-svg-icons/index.es.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var fixSelectLabel = function fixSelectLabel(name) {
  return name.replace('pa_', '').split('-').join(' ');
};

var VariableSelect = /*#__PURE__*/function (_Component) {
  _inherits(VariableSelect, _Component);

  var _super = _createSuper(VariableSelect);

  function VariableSelect() {
    _classCallCheck(this, VariableSelect);

    return _super.apply(this, arguments);
  }

  _createClass(VariableSelect, [{
    key: "render",
    value: function render() {
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("label", {
        htmlFor: this.props.selectName,
        className: 'sr-only block'
      }, fixSelectLabel(this.props.selectName)), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
        className: 'block relative w-full'
      }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("select", {
        onChange: this.props.changeHandler,
        id: this.props.selectName,
        name: this.props.selectName,
        className: "block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline",
        "data-attribute_name": "attribute_".concat(this.props.selectName)
      }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("option", {
        placeholder: ''
      }, "Kies een optie"), this.props.options.map(function (option, key) {
        return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("option", {
          value: option.toLowerCase(),
          key: key
        }, option);
      })), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
        className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
      }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
        icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faChevronDown
      }))));
    }
  }]);

  return VariableSelect;
}(preact__WEBPACK_IMPORTED_MODULE_0__.Component);

/***/ }),

/***/ "./assets/scripts/services/add-to-cart/variable-add-to-cart/app.js":
/*!*************************************************************************!*\
  !*** ./assets/scripts/services/add-to-cart/variable-add-to-cart/app.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddToCart": () => (/* binding */ AddToCart),
/* harmony export */   "renderVariableAddToCart": () => (/* binding */ renderVariableAddToCart)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var ky__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ky */ "./node_modules/ky/distribution/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ */ "./assets/scripts/services/add-to-cart/index.js");
/* harmony import */ var _Components_VariableSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/VariableSelect */ "./assets/scripts/services/add-to-cart/variable-add-to-cart/Components/VariableSelect.js");
/* harmony import */ var _src_Woocommerce_Single_helpers_getWindowAttributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/Woocommerce/Single/helpers/getWindowAttributes */ "./assets/scripts/src/Woocommerce/Single/helpers/getWindowAttributes.js");
/* harmony import */ var _notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../notifications */ "./assets/scripts/services/notifications/index.js");
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ "./node_modules/@fortawesome/pro-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









var formElement = document.querySelector('#add-variable-product-to-cart');
var AddToCart = /*#__PURE__*/function (_Component) {
  _inherits(AddToCart, _Component);

  var _super = _createSuper(AddToCart);

  function AddToCart(props) {
    var _this;

    _classCallCheck(this, AddToCart);

    _this = _super.call(this, props);
    _this.state = {
      productID: window['product_id'],
      quantity: 1,
      minQuantity: window['product_settings'].qty.min,
      maxQuantity: window['product_settings'].qty.max,
      loading: false,
      variationID: false,
      value: []
    };
    _this.editQuantity = _this.editQuantity.bind(_assertThisInitialized(_this));
    _this.addToCart = _this.addToCart.bind(_assertThisInitialized(_this));
    _this.changeVariation = _this.changeVariation.bind(_assertThisInitialized(_this));
    _this.variations = variations;
    _this.attributes = (0,_src_Woocommerce_Single_helpers_getWindowAttributes__WEBPACK_IMPORTED_MODULE_3__["default"])();
    return _this;
  }

  _createClass(AddToCart, [{
    key: "addToCart",
    value: function addToCart(e) {
      var _this2 = this;

      e.preventDefault();

      if (!this.state.variationID) {
        // Send toast notification?
        // Only if no variation selected
        return;
      }

      this.setState({
        loading: true
      });
      ky__WEBPACK_IMPORTED_MODULE_6__["default"].post(window['ajax_url'], {
        searchParams: {
          action: 'add_product_to_cart'
        },
        json: {
          action: 'add_product_to_cart',
          product_id: this.state.productID,
          qty: this.state.quantity,
          variation_id: this.state.variationID,
          value: this.state.value
        },
        credentials: 'same-origin'
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        return document.body.dispatchEvent(new CustomEvent('product-added-to-cart', {
          detail: (res === null || res === void 0 ? void 0 : res.data) || []
        }));
      })["finally"](function () {
        (0,_notifications__WEBPACK_IMPORTED_MODULE_4__.registerToast)({
          slug: "add_product_to_cart-".concat(new Date().getTime()),
          content: "Product toegevoegd aan je winkelmandje!",
          actionText: (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {
            icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faTimes
          })
        });

        _this2.setState({
          loading: false
        });
      });
    }
  }, {
    key: "changeVariation",
    value: function changeVariation(e) {
      // Show a notification of selection?
      var _e$target = e.target,
          value = _e$target.value,
          dataset = _e$target.dataset;
      var attribute_name = dataset.attribute_name;
      var possibilities = this.attributes.filter(function (attribute) {
        return attribute.attributes.hasOwnProperty(attribute_name);
      }).filter(function (attribute) {
        return attribute.attributes[attribute_name] === '' ? true : attribute.attributes[attribute_name] === value;
      });
      console.dir({
        value: value,
        dataset: dataset,
        attribute_name: attribute_name,
        possibilities: possibilities
      });

      if (possibilities.length === 1) {
        this.setState({
          variationID: possibilities[0].id,
          loading: false,
          value: [value]
        });
      } else {
        this.setState({
          variationID: false,
          loading: false,
          value: []
        });
      }
    }
  }, {
    key: "editQuantity",
    value: function editQuantity(newQuantity) {
      this.setState({
        quantity: newQuantity
      });
    }
  }, {
    key: "reduceHandler",
    value: function reduceHandler() {
      var _this$state = this.state,
          minQuantity = _this$state.minQuantity,
          quantity = _this$state.quantity;

      if (this.state.quantity > minQuantity) {
        this.setState({
          quantity: quantity - 1
        });
      }
    }
  }, {
    key: "increaseHandler",
    value: function increaseHandler() {
      this.setState({
        quantity: quantity + 1
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var selects = [];

      for (var key in this.variations) {
        if (this.variations.hasOwnProperty(key)) {
          selects.push((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_Components_VariableSelect__WEBPACK_IMPORTED_MODULE_2__.VariableSelect, {
            options: this.variations[key],
            key: key,
            changeHandler: this.changeVariation,
            selectName: key
          }));
        }
      }

      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("form", {
        onSubmit: this.addToCart
      }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("input", {
        type: "number",
        name: "quantity",
        value: this.state.quantity,
        className: 'w-64',
        onChange: function onChange(e) {
          return _this3.editQuantity(e.target.value);
        }
      }), selects, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(___WEBPACK_IMPORTED_MODULE_1__.SubmitButton, {
        productID: this.state.productID,
        loading: this.state.loading
      }));
    }
  }]);

  return AddToCart;
}(preact__WEBPACK_IMPORTED_MODULE_0__.Component);
function renderVariableAddToCart() {
  if (formElement) {
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(AddToCart, null), formElement);
  }
}

/***/ }),

/***/ "./assets/scripts/services/add-to-cart/variable-add-to-cart/index.js":
/*!***************************************************************************!*\
  !*** ./assets/scripts/services/add-to-cart/variable-add-to-cart/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderVariableAddToCart": () => (/* reexport safe */ _app__WEBPACK_IMPORTED_MODULE_0__.renderVariableAddToCart)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./assets/scripts/services/add-to-cart/variable-add-to-cart/app.js");



/***/ }),

/***/ "./assets/scripts/services/lib/styled/button.js":
/*!******************************************************!*\
  !*** ./assets/scripts/services/lib/styled/button.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledButton": () => (/* binding */ StyledButton),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config */ "./assets/scripts/config/index.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Button = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\tborder: 1px solid ", ";\n\tbackground: ", ";\n\tcolor: ", ";\n\tpadding: .75rem 1rem;\n\tmargin: 1rem 0;\n\tdisplay: block;\n\tborder-radius: ", ";\n\twidth: ", ";\n"])), function (props) {
  return (0,_config__WEBPACK_IMPORTED_MODULE_0__.getThemeColor)(props.theme.background, props.defaults.background);
}, function (props) {
  return (0,_config__WEBPACK_IMPORTED_MODULE_0__.getThemeColor)(props.theme.background, props.defaults.background);
}, function (props) {
  return (0,_config__WEBPACK_IMPORTED_MODULE_0__.getThemeColor)(props.theme.color, props.defaults.color);
}, function (props) {
  var _props$theme$borderRa;

  return (_props$theme$borderRa = props.theme.borderRadius) !== null && _props$theme$borderRa !== void 0 ? _props$theme$borderRa : props.defaults.borderRadius;
}, function (props) {
  var _props$theme$width;

  return (_props$theme$width = props.theme.width) !== null && _props$theme$width !== void 0 ? _props$theme$width : props.defaults.width;
});
Button.defaultProps = {
  theme: {
    background: 'primary',
    color: 'white',
    borderRadius: '8px',
    width: 'auto'
  },
  defaults: {
    background: 'primary',
    color: 'white',
    borderRadius: '8px',
    width: 'auto'
  }
};
var StyledButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.withTheme)(Button);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledButton);

/***/ }),

/***/ "./assets/scripts/services/notifications/index.js":
/*!********************************************************!*\
  !*** ./assets/scripts/services/notifications/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "enableToasts": () => (/* reexport safe */ _toasts_ToastWrapper__WEBPACK_IMPORTED_MODULE_0__.enableToasts),
/* harmony export */   "registerToast": () => (/* reexport safe */ _toasts_ToastWrapper__WEBPACK_IMPORTED_MODULE_0__.registerToast)
/* harmony export */ });
/* harmony import */ var _toasts_ToastWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toasts/ToastWrapper */ "./assets/scripts/services/notifications/toasts/ToastWrapper.jsx");



/***/ }),

/***/ "./assets/scripts/services/notifications/toasts/TimerBar.jsx":
/*!*******************************************************************!*\
  !*** ./assets/scripts/services/notifications/toasts/TimerBar.jsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimerBar": () => (/* binding */ TimerBar)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _templateObject;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var ProgressBar = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\tposition: absolute;\n\tbottom: 0;\n\tleft: 0;\n\twidth: ", ";\n\ttransition: width 225ms ease;\n\theight: 3px;\n\tbackground: rgba(255, 255, 255, 0.4);\n\tbackdrop-filter: blur(2px);\n"])), function (props) {
  return (props.width || 0) + '%';
});
var TimerBar = /*#__PURE__*/function (_Component) {
  _inherits(TimerBar, _Component);

  var _super = _createSuper(TimerBar);

  function TimerBar(props) {
    var _this;

    _classCallCheck(this, TimerBar);

    _this = _super.call(this, props);
    _this.state = {
      width: 0
    };
    _this.interval = null;
    _this.increaseWidth = _this.increaseWidth.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TimerBar, [{
    key: "increaseWidth",
    value: function increaseWidth(width) {
      this.setState({
        width: this.state.width += width
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (!this.props.time) {
        return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
      }

      this.interval = setInterval(function () {
        return _this2.increaseWidth(100 / _this2.props.time);
      }, 100);

      if (this.state.width >= 100) {
        clearInterval(this.interval);
      }

      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(ProgressBar, {
        width: this.state.width
      });
    }
  }]);

  return TimerBar;
}(preact__WEBPACK_IMPORTED_MODULE_0__.Component);

/***/ }),

/***/ "./assets/scripts/services/notifications/toasts/Toast.jsx":
/*!****************************************************************!*\
  !*** ./assets/scripts/services/notifications/toasts/Toast.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Toast": () => (/* binding */ Toast)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config */ "./assets/scripts/config/index.js");
/* harmony import */ var _TimerBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimerBar */ "./assets/scripts/services/notifications/toasts/TimerBar.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _templateObject, _templateObject2, _templateObject3;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var ToastElement = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\tpointer-events: all;\n\toverflow: hidden;\n\tbox-shadow: 0 3px 6px rgba(51, 51, 51, 0.2);\n\tbackground: ", ";\n\tcolor: ", ";\n\tdisplay: flex;\n\tmargin: .5rem 0;\n\tpadding: .5rem 1rem;\n\tborder-radius: 4px;\n\twidth: 300px;\n\tposition: relative;\n"])), _config__WEBPACK_IMPORTED_MODULE_1__.Colors.primary, _config__WEBPACK_IMPORTED_MODULE_1__.Colors.white);
var MainToastElement = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].main(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\tflex: 1 0 60%;\n"])));
var ButtonToastElement = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([""])));
var Toast = /*#__PURE__*/function (_Component) {
  _inherits(Toast, _Component);

  var _super = _createSuper(Toast);

  function Toast(props) {
    _classCallCheck(this, Toast);

    return _super.call(this, props);
  }

  _createClass(Toast, [{
    key: "render",
    value: function render() {
      var _this$props$type,
          _this$props$color,
          _this = this;

      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(ToastElement, {
        type: (_this$props$type = this.props.type) !== null && _this$props$type !== void 0 ? _this$props$type : 'primary',
        color: (_this$props$color = this.props.color) !== null && _this$props$color !== void 0 ? _this$props$color : 'white'
      }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(MainToastElement, null, this.props.content), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(ButtonToastElement, {
        onClick: function onClick(e) {
          return _this.props.action(_this.props.slug);
        }
      }, this.props.actionText), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_TimerBar__WEBPACK_IMPORTED_MODULE_2__.TimerBar, {
        time: this.props.time
      }));
    }
  }]);

  return Toast;
}(preact__WEBPACK_IMPORTED_MODULE_0__.Component);

/***/ }),

/***/ "./assets/scripts/services/notifications/toasts/ToastWrapper.jsx":
/*!***********************************************************************!*\
  !*** ./assets/scripts/services/notifications/toasts/ToastWrapper.jsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastWrapper": () => (/* binding */ ToastWrapper),
/* harmony export */   "enableToasts": () => (/* binding */ enableToasts),
/* harmony export */   "registerToast": () => (/* binding */ registerToast)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Toast */ "./assets/scripts/services/notifications/toasts/Toast.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _templateObject;

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var ToastWrapperElement = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].aside(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tpointer-events: none;\n\tdisplay: flex;\n\talign-items: flex-end;\n\tjustify-content: flex-end;\n\tpadding: 1rem;\n\toverflow: hidden;\n\tflex-direction: column;\n"])));
var ToastWrapper = /*#__PURE__*/function (_Component) {
  _inherits(ToastWrapper, _Component);

  var _super = _createSuper(ToastWrapper);

  function ToastWrapper() {
    var _this;

    _classCallCheck(this, ToastWrapper);

    _this = _super.call(this);
    _this.state = {
      toastList: []
    };
    _this.findToasts = _this.findToasts.bind(_assertThisInitialized(_this));
    _this.createNewToast = _this.createNewToast.bind(_assertThisInitialized(_this));
    _this.removeToast = _this.removeToast.bind(_assertThisInitialized(_this));

    _this.findToasts();

    return _this;
  }

  _createClass(ToastWrapper, [{
    key: "findToasts",
    value: function findToasts() {
      var _this2 = this;

      document.body.addEventListener('register-toast', function (evt) {
        var _evt$detail = evt.detail,
            slug = _evt$detail.slug,
            time = _evt$detail.time,
            content = _evt$detail.content,
            color = _evt$detail.color,
            actionText = _evt$detail.actionText;

        _this2.createNewToast(slug, content, color, time, actionText);
      });
    }
  }, {
    key: "removeToast",
    value: function removeToast(slug) {
      var toastList = this.state.toastList;
      this.setState({
        toastList: toastList.filter(function (toast) {
          return toast.slug !== slug;
        })
      });
    }
  }, {
    key: "createNewToast",
    value: function createNewToast(slug, content) {
      var _this3 = this;

      var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'primary';
      var time = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 5000;
      var actionText = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'Close';
      var toastList = this.state.toastList;
      toastList.push({
        slug: slug,
        item: (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_Toast__WEBPACK_IMPORTED_MODULE_1__.Toast, {
          content: content,
          color: color,
          time: time,
          actionText: actionText,
          action: this.removeToast,
          slug: slug
        })
      });

      var _toastList = _toArray(toastList),
          rest = _toastList.slice(0);

      if (time && typeof time === 'number') {
        setTimeout(function () {
          _this3.removeToast(slug);
        }, time);
      }

      this.setState({
        toastList: rest.slice(-5)
      });
    }
  }, {
    key: "render",
    value: function render() {
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(ToastWrapperElement, null, (this.state.toastList || []).map(function (item) {
        return item.item;
      }));
    }
  }]);

  return ToastWrapper;
}(preact__WEBPACK_IMPORTED_MODULE_0__.Component);
function enableToasts() {
  var toastContainer = document.querySelector('#toast-container');

  if (toastContainer) {
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(ToastWrapper, null), toastContainer);
  }
}
function registerToast(_ref) {
  var slug = _ref.slug,
      time = _ref.time,
      content = _ref.content,
      color = _ref.color,
      actionText = _ref.actionText;
  document.body.dispatchEvent(new CustomEvent('register-toast', {
    detail: {
      slug: slug,
      time: time,
      content: content,
      color: color,
      actionText: actionText
    }
  }));
}

/***/ }),

/***/ "./assets/scripts/src/Elements/Product/Gallery/gallery-group.js":
/*!**********************************************************************!*\
  !*** ./assets/scripts/src/Elements/Product/Gallery/gallery-group.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GalleryGroup": () => (/* binding */ GalleryGroup)
/* harmony export */ });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/development/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./assets/scripts/src/Elements/Product/Gallery/style.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _templateObject, _templateObject2, _templateObject3;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var GalleryGroup = /*#__PURE__*/function (_LitElement) {
  _inherits(GalleryGroup, _LitElement);

  var _super = _createSuper(GalleryGroup);

  function GalleryGroup() {
    var _this;

    _classCallCheck(this, GalleryGroup);

    _this = _super.call(this);
    _this.slottedChildren = _this._slottedChildren;
    return _this;
  }

  _createClass(GalleryGroup, [{
    key: "_slottedChildren",
    get: function get() {
      return this.querySelectorAll('bookish-gallery-item');
    }
  }, {
    key: "selectedChild",
    get: function get() {
      var _Array$prototype$filt,
          _this2 = this;

      return ((_Array$prototype$filt = Array.prototype.filter.call(this.slottedChildren, function (child) {
        return child.name === _this2.selected;
      })) === null || _Array$prototype$filt === void 0 ? void 0 : _Array$prototype$filt[0]) || "";
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var selected = this.selectedChild;
      var children = Array.from(this.slottedChildren);
      return (0,lit_element__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n<section>\n\t<picture>\n\t\t", "\t\n\t\t<img src=\"", "\" alt=\"", "\" class=\"selected-gallery-item\" />\n\t</picture>\n\n\t<nav>\n\t\t", "\t\n\t</nav>\n</section>\n"])), selected.modern_src && selected.modern_src !== '' && (0,lit_element__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\t\t\t<source srcset=\"", "\" type=\"image/webp\">\n\t\t"])), selected.modern_src), selected.src, selected.alt, children.map(function (child) {
        return (0,lit_element__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n\t\t\t<button class=\"", "\" @click=\"", "\">\n\t\t\t", "\n\t\t\t</button>\n\t\t"])), _this3.selected === child.name ? 'active' : '', function () {
          return _this3.selected = child.name;
        }, child);
      }));
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        selected: {
          type: String
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return [_style__WEBPACK_IMPORTED_MODULE_1__["default"]];
    }
  }]);

  return GalleryGroup;
}(lit_element__WEBPACK_IMPORTED_MODULE_0__.LitElement);

/***/ }),

/***/ "./assets/scripts/src/Elements/Product/Gallery/gallery-item.js":
/*!*********************************************************************!*\
  !*** ./assets/scripts/src/Elements/Product/Gallery/gallery-item.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GalleryItem": () => (/* binding */ GalleryItem)
/* harmony export */ });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/development/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _templateObject, _templateObject2, _templateObject3;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var GalleryItem = /*#__PURE__*/function (_LitElement) {
  _inherits(GalleryItem, _LitElement);

  var _super = _createSuper(GalleryItem);

  function GalleryItem() {
    _classCallCheck(this, GalleryItem);

    return _super.apply(this, arguments);
  }

  _createClass(GalleryItem, [{
    key: "render",
    value: function render() {
      return (0,lit_element__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t\t\t<picture>\n\t\t\t\t", "\t\n\t\t\t\t<img src=\"", "\" alt=\"", "\" />\n\t\t\t</picture>\n\t\t"])), this.modern_src && this.modern_src !== '' && (0,lit_element__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\t\t\t\t\t<source srcset=\"", "\" type=\"image/webp\">\n\t\t\t\t"])), this.modern_src), this.src, this.alt);
    }
  }], [{
    key: "styles",
    get: function get() {
      return (0,lit_element__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\nimg\t{\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    border-radius: 14px;\n}\n"])));
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        src: {
          type: String
        },
        modern_src: {
          type: String
        },
        alt: {
          type: String
        },
        name: {
          type: String
        }
      };
    }
  }]);

  return GalleryItem;
}(lit_element__WEBPACK_IMPORTED_MODULE_0__.LitElement);

/***/ }),

/***/ "./assets/scripts/src/Elements/Product/Gallery/style.js":
/*!**************************************************************!*\
  !*** ./assets/scripts/src/Elements/Product/Gallery/style.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/development/index.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,lit_element__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n.selected-gallery-item {\n\tmax-height: 450px;\n\twidth: 100%;\n\ttransition: all 2254ms ease-in-out;\n}\n\nbutton {\n    padding: 0;\n    width: auto;\n    overflow: visible;\n\n    background: transparent;\n\n    color: inherit;\n    font: inherit;\n\n    line-height: normal;\n\n    /* Corrects font smoothing for webkit */\n    -webkit-font-smoothing: inherit;\n    -moz-osx-font-smoothing: inherit;\n\n    -webkit-appearance: none;\n    border: 0;\n    flex: 0 0 105px;\n    height: 105px;\n    cursor: pointer;\n    margin: 0 .5rem 0 0;\n    border-radius: 14px;\n    scroll-snap-align: start;\n}\n\nnav {\n    display: flex;\n\tscroll-snap-type: x mandatory;\n\toverflow: scroll;\n\toverflow-y: hidden;\n\tpadding-left: 1rem;\n\tpadding-right: 1rem;\n}\n\nbutton.active {\n    border: 1px solid hsl(265, 83%, 45%);\n}\n\nbutton > img {\n    border-radius: 14px;\n}\n\n@media screen and (min-width: 768px) {\n\t.selected-gallery-item {\n\t\twidth: auto;\n\t}\n\n\tnav {\n\t\toverflow: unset;\n\t\tscroll-snap-type: unset;\n\t\tpadding-left: 0;\n\t\tpadding-right: 0;\n\t}\n}\n"]))));

/***/ }),

/***/ "./assets/scripts/src/Elements/Product/Tabs/styles.js":
/*!************************************************************!*\
  !*** ./assets/scripts/src/Elements/Product/Tabs/styles.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buttonStyle": () => (/* binding */ buttonStyle)
/* harmony export */ });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/development/index.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var buttonStyle = (0,lit_element__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\nnav {\n\tdisplay: flex;\n}\n\nnav button {\n\tflex: 1 1 auto;\n    width: auto;\n    overflow: visible;\n    background: transparent;\n    font: inherit;\n    line-height: normal;\n    /* Corrects font smoothing for webkit */\n    -webkit-font-smoothing: inherit;\n    -moz-osx-font-smoothing: inherit;\n\n    -webkit-appearance: none;\n    cursor: pointer;\n    padding: .5rem;\n\tborder: 0 solid hsl(265, 83%, 45%);\n\tborder-bottom-width: 1px;\n\tcolor: hsl(265, 83%, 45%);\n\topacity: 0.5;\n\t\n\ttransition: opacity 225ms ease-in;\n}\n\nbutton:hover {\n\topacity: 0.75\n}\n\nbutton.active {\n\tborder-bottom-width: 0;\n\tborder-top-width: 1px;\n\tborder-left-width: 1px;\n\tborder-right-width: 1px;\n\topacity: 1;\n}\n"])));

/***/ }),

/***/ "./assets/scripts/src/Elements/Product/Tabs/tab-group.js":
/*!***************************************************************!*\
  !*** ./assets/scripts/src/Elements/Product/Tabs/tab-group.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabGroup": () => (/* binding */ TabGroup)
/* harmony export */ });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/development/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./assets/scripts/src/Elements/Product/Tabs/styles.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var TabGroup = /*#__PURE__*/function (_LitElement) {
  _inherits(TabGroup, _LitElement);

  var _super = _createSuper(TabGroup);

  function TabGroup() {
    var _this;

    _classCallCheck(this, TabGroup);

    _this = _super.call(this);
    _this.slottedChildren = _this._slottedChildren;
    return _this;
  }

  _createClass(TabGroup, [{
    key: "_slottedChildren",
    get: function get() {
      return this.querySelectorAll('bookish-tab');
    }
  }, {
    key: "selectedChild",
    get: function get() {
      var _Array$prototype$filt,
          _this2 = this;

      return ((_Array$prototype$filt = Array.prototype.filter.call(this.slottedChildren, function (child) {
        return child.name === _this2["default"];
      })) === null || _Array$prototype$filt === void 0 ? void 0 : _Array$prototype$filt[0]) || '';
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var selected = this.selectedChild,
          children = Array.from(this.slottedChildren);
      return (0,lit_element__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t\t<section>\n\t\t<nav>\n\t\t\t", "\n\t\t</nav>\n\t\t\n\t\t<main>\n\t\t\t", "\n\t\t</main>\n\t\t</section>\n\t\t"])), children.map(function (child) {
        return (0,lit_element__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\t\t\t<button class=\"", "\" @click=\"", "\">\n\t\t\t\t", "\n\t\t\t</button>"])), _this3["default"] === child.name && 'active', function () {
          return _this3["default"] = child.name;
        }, child.name);
      }), selected);
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        "default": {
          type: String
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return [_styles__WEBPACK_IMPORTED_MODULE_1__.buttonStyle];
    }
  }]);

  return TabGroup;
}(lit_element__WEBPACK_IMPORTED_MODULE_0__.LitElement);

/***/ }),

/***/ "./assets/scripts/src/Elements/Product/Tabs/tab-item.js":
/*!**************************************************************!*\
  !*** ./assets/scripts/src/Elements/Product/Tabs/tab-item.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabItem": () => (/* binding */ TabItem)
/* harmony export */ });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/development/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var TabItem = /*#__PURE__*/function (_LitElement) {
  _inherits(TabItem, _LitElement);

  var _super = _createSuper(TabItem);

  function TabItem() {
    _classCallCheck(this, TabItem);

    return _super.apply(this, arguments);
  }

  _createClass(TabItem, [{
    key: "render",
    value: function render() {
      return (0,lit_element__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["<slot />"])));
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        name: {
          type: String
        },
        icon: {
          type: String
        }
      };
    }
  }]);

  return TabItem;
}(lit_element__WEBPACK_IMPORTED_MODULE_0__.LitElement);

/***/ }),

/***/ "./assets/scripts/src/Elements/Product/gallery.js":
/*!********************************************************!*\
  !*** ./assets/scripts/src/Elements/Product/gallery.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GalleryGroup": () => (/* reexport safe */ _Gallery_gallery_group__WEBPACK_IMPORTED_MODULE_1__.GalleryGroup),
/* harmony export */   "GalleryItem": () => (/* reexport safe */ _Gallery_gallery_item__WEBPACK_IMPORTED_MODULE_0__.GalleryItem)
/* harmony export */ });
/* harmony import */ var _Gallery_gallery_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gallery/gallery-item */ "./assets/scripts/src/Elements/Product/Gallery/gallery-item.js");
/* harmony import */ var _Gallery_gallery_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gallery/gallery-group */ "./assets/scripts/src/Elements/Product/Gallery/gallery-group.js");




/***/ }),

/***/ "./assets/scripts/src/Elements/Product/index.js":
/*!******************************************************!*\
  !*** ./assets/scripts/src/Elements/Product/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GalleryGroup": () => (/* reexport safe */ _gallery__WEBPACK_IMPORTED_MODULE_0__.GalleryGroup),
/* harmony export */   "GalleryItem": () => (/* reexport safe */ _gallery__WEBPACK_IMPORTED_MODULE_0__.GalleryItem),
/* harmony export */   "TabGroup": () => (/* reexport safe */ _tabs__WEBPACK_IMPORTED_MODULE_1__.TabGroup),
/* harmony export */   "TabItem": () => (/* reexport safe */ _tabs__WEBPACK_IMPORTED_MODULE_1__.TabItem)
/* harmony export */ });
/* harmony import */ var _gallery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gallery */ "./assets/scripts/src/Elements/Product/gallery.js");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs */ "./assets/scripts/src/Elements/Product/tabs.js");



/***/ }),

/***/ "./assets/scripts/src/Elements/Product/tabs.js":
/*!*****************************************************!*\
  !*** ./assets/scripts/src/Elements/Product/tabs.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabGroup": () => (/* reexport safe */ _Tabs_tab_group__WEBPACK_IMPORTED_MODULE_1__.TabGroup),
/* harmony export */   "TabItem": () => (/* reexport safe */ _Tabs_tab_item__WEBPACK_IMPORTED_MODULE_0__.TabItem)
/* harmony export */ });
/* harmony import */ var _Tabs_tab_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tabs/tab-item */ "./assets/scripts/src/Elements/Product/Tabs/tab-item.js");
/* harmony import */ var _Tabs_tab_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tabs/tab-group */ "./assets/scripts/src/Elements/Product/Tabs/tab-group.js");




/***/ }),

/***/ "./assets/scripts/src/Woocommerce/Single/helpers/getWindowAttributes.js":
/*!******************************************************************************!*\
  !*** ./assets/scripts/src/Woocommerce/Single/helpers/getWindowAttributes.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "splitWindowAttributes": () => (/* binding */ splitWindowAttributes)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  return splitWindowAttributes(window.acceptedAttributes);
});
/**
 * @param {any[]} data
 */

var splitWindowAttributes = function splitWindowAttributes(data) {
  return data.map(function (attribute) {
    return {
      id: attribute.variation_id,
      is_active: attribute.variation_is_active,
      is_visible: attribute.variation_is_visible,
      is_in_stock: attribute.is_in_stock,
      min_qty: attribute.min_qty,
      max_qty: attribute.max_qty,
      price: attribute.display_price,
      attributes: attribute.attributes
    };
  });
};

/***/ })

}]);