"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["common"],{

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

/***/ "./assets/scripts/helpers/index.js":
/*!*****************************************!*\
  !*** ./assets/scripts/helpers/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "woocommerce": () => (/* binding */ woocommerce)
/* harmony export */ });
/* harmony import */ var _price__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./price */ "./assets/scripts/helpers/price.js");

var woocommerce = {
  price_europe_separators: _price__WEBPACK_IMPORTED_MODULE_0__.price_europe_separators,
  price_strip_euro: _price__WEBPACK_IMPORTED_MODULE_0__.price_strip_euro,
  priceStringBuilder: _price__WEBPACK_IMPORTED_MODULE_0__.priceStringBuilder
};


/***/ }),

/***/ "./assets/scripts/helpers/price.js":
/*!*****************************************!*\
  !*** ./assets/scripts/helpers/price.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "priceStringBuilder": () => (/* binding */ priceStringBuilder),
/* harmony export */   "price_europe_separators": () => (/* binding */ price_europe_separators),
/* harmony export */   "price_strip_euro": () => (/* binding */ price_strip_euro)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 *
 * @param {string|number} price
 * @returns {string}
 */
function price_europe_separators(price) {
  return price.toString().replace('.', ',');
}
/**
 *
 * @param {string|number} price
 * @returns {*}
 */

function price_strip_euro(price) {
  return price.toString().replace('€', '');
}
var priceStringBuilder = /*#__PURE__*/function () {
  /**
   *
   * @param {string|number} price
   */
  function priceStringBuilder(price) {
    _classCallCheck(this, priceStringBuilder);

    this.price = price;
  }

  _createClass(priceStringBuilder, [{
    key: "set_euro_separators",
    value: function set_euro_separators() {
      this.price = price_europe_separators(this.price);
      return this;
    }
  }, {
    key: "strip_euro_sign",
    value: function strip_euro_sign() {
      this.price = price_strip_euro(this.price);
      return this;
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.price;
    }
  }]);

  return priceStringBuilder;
}();

/***/ }),

/***/ "./assets/scripts/routes/common/index.js":
/*!***********************************************!*\
  !*** ./assets/scripts/routes/common/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var _services_notifications__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/notifications */ "./assets/scripts/services/notifications/index.js");
/* harmony import */ var _services_search_bar_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/search-bar/app */ "./assets/scripts/services/search-bar/app.js");
/* harmony import */ var _services_mailchimp_subscribe_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/mailchimp-subscribe/app */ "./assets/scripts/services/mailchimp-subscribe/app.js");
/* harmony import */ var _services_product_card_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/product-card/app */ "./assets/scripts/services/product-card/app.js");
/* harmony import */ var _src_Elements_Common_Heading_Heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/Elements/Common/Heading/Heading */ "./assets/scripts/src/Elements/Common/Heading/Heading.js");
/* harmony import */ var _webreact_webreactor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @webreact/webreactor */ "./node_modules/@webreact/webreactor/dist/index.js");
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var _default = /*#__PURE__*/function (_Component) {
  _inherits(_default, _Component);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "componentMounted",
    value: function componentMounted() {
      (0,_services_notifications__WEBPACK_IMPORTED_MODULE_0__.enableToasts)();
      (0,_services_search_bar_app__WEBPACK_IMPORTED_MODULE_1__.hydrateSearchBar)();
      (0,_services_product_card_app__WEBPACK_IMPORTED_MODULE_3__.hydrateProducts)();
      (0,_services_mailchimp_subscribe_app__WEBPACK_IMPORTED_MODULE_2__.enableMailchimpForm)();
      this.registerCustomElements();
    }
  }, {
    key: "registerCustomElements",
    value: function registerCustomElements() {
      customElements.define('bookish-heading', _src_Elements_Common_Heading_Heading__WEBPACK_IMPORTED_MODULE_4__.Heading);
    }
  }]);

  return _default;
}(_webreact_webreactor__WEBPACK_IMPORTED_MODULE_5__.Component);

_defineProperty(_default, "target", 'body');

_defineProperty(_default, "_name", 'Common');



/***/ }),

/***/ "./assets/scripts/services/add-to-cart/mini-add-to-cart/app.js":
/*!*********************************************************************!*\
  !*** ./assets/scripts/services/add-to-cart/mini-add-to-cart/app.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddToCart": () => (/* binding */ AddToCart),
/* harmony export */   "renderMiniAddToCart": () => (/* binding */ renderMiniAddToCart)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var ky__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ky */ "./node_modules/ky/distribution/index.js");
/* harmony import */ var _notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../notifications */ "./assets/scripts/services/notifications/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_pro_duotone_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/pro-duotone-svg-icons */ "./node_modules/@fortawesome/pro-duotone-svg-icons/index.es.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _elderbraum_simple_event_bus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elderbraum/simple-event-bus */ "./node_modules/@elderbraum/simple-event-bus/index.js");
/* harmony import */ var _lib_styled_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/styled/button */ "./assets/scripts/services/lib/styled/button.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
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
  width: '100%'
};
var buttonElements = document.querySelectorAll('.pre-add-to-cart-mini');
var AddToCart = /*#__PURE__*/function (_Component) {
  _inherits(AddToCart, _Component);

  var _super = _createSuper(AddToCart);

  function AddToCart(props) {
    var _this;

    _classCallCheck(this, AddToCart);

    _this = _super.call(this, props);
    _this.submitHandler = _this.submitHandler.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AddToCart, [{
    key: "submitHandler",
    value: function submitHandler(e) {
      e.preventDefault();
      var id = this.props.id;
      ky__WEBPACK_IMPORTED_MODULE_5__["default"].post(window['ajax_url'], {
        searchParams: {
          action: 'add_product_to_cart'
        },
        json: {
          action: 'add_product_to_cart',
          product_id: id,
          qty: 1
        },
        credentials: 'same-origin'
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        return (0,_elderbraum_simple_event_bus__WEBPACK_IMPORTED_MODULE_3__.fireEvent)('product-added-to-cart', (res === null || res === void 0 ? void 0 : res.data) || []);
      }).then(function () {
        return (0,_notifications__WEBPACK_IMPORTED_MODULE_1__.registerToast)({
          slug: "add_product_to_cart-".concat(new Date().getTime()),
          content: "Product toegevoegd aan je winkelmandje"
        });
      })["catch"](function () {
        (0,_notifications__WEBPACK_IMPORTED_MODULE_1__.registerToast)({
          slug: "add_product_not_to_cart-".concat(new Date().getTime()),
          content: "Product niet toegevoegd aan je winkelmandje"
        });
      })["finally"](function () {// Set loading state here.
      });
    }
  }, {
    key: "render",
    value: function render() {
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(styled_components__WEBPACK_IMPORTED_MODULE_6__.ThemeProvider, {
        theme: theme
      }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("form", {
        onSubmit: this.submitHandler,
        style: {
          display: 'flex',
          justifyContent: 'center'
        }
      }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_lib_styled_button__WEBPACK_IMPORTED_MODULE_4__["default"], null, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
        icon: _fortawesome_pro_duotone_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faShoppingCart,
        className: 'mr-2'
      }), "In winkelmandje")));
    }
  }]);

  return AddToCart;
}(preact__WEBPACK_IMPORTED_MODULE_0__.Component);
AddToCart.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_8___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_8___default().number.isRequired), (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string.isRequired)])
};
function renderMiniAddToCart() {
  if (buttonElements.length === 0) {
    return;
  }

  buttonElements.forEach(function (element) {
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(AddToCart, {
      id: element.dataset.product
    }), element);
  });
}

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

/***/ "./assets/scripts/services/mailchimp-subscribe/Components/Input.jsx":
/*!**************************************************************************!*\
  !*** ./assets/scripts/services/mailchimp-subscribe/Components/Input.jsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Input": () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config */ "./assets/scripts/config/index.js");
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





var generateRandomString = function generateRandomString() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
  return Math.random().toString(36).substr(2, length);
};

var InputField = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].input.attrs(function (props) {
  return {
    type: props.type || 'text'
  };
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\tcolor: ", ";\n"])), _config__WEBPACK_IMPORTED_MODULE_1__.Colors.black);
var InputGroup = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\tposition: relative;\n"])));
var FloatingLabel = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].label.attrs(function (props) {
  return {};
})(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n\tposition: absolute;\n\ttop: 50%;\n\ttransform: translateY(-50%);\n\tleft: 1rem;\n\ttransition: all 225ms ease-in-out;\n\tcolor: ", ";\n\topacity: 1;\n\t\n\t&.active {\n\t\tfont-size: 50%;\n\t\ttransform: none;\n\t\ttop: 0;\n\t}\n"])), _config__WEBPACK_IMPORTED_MODULE_1__.Colors.black);
var Input = /*#__PURE__*/function (_Component) {
  _inherits(Input, _Component);

  var _super = _createSuper(Input);

  function Input(props) {
    var _this;

    _classCallCheck(this, Input);

    _this = _super.call(this, props);
    _this.state = {
      activated: false
    };
    _this.focusHandler = _this.focusHandler.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Input, [{
    key: "focusHandler",
    value: function focusHandler() {
      this.setState({
        activated: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          type = _this$props.type,
          label = _this$props.label,
          required = _this$props.required,
          target = _this$props.target;
      var id = generateRandomString();
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(InputGroup, null, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(FloatingLabel, {
        htmlFor: id,
        className: this.state.activated ? 'active' : ''
      }, label, " ", required && (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", {
        style: {
          'color': '#f00'
        }
      }, "*")), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(InputField, {
        type: type,
        id: id,
        onFocus: this.focusHandler,
        required: required,
        onChange: function onChange(e) {
          return _this2.props.changeHandler(target, e.target.value);
        }
      }));
    }
  }]);

  return Input;
}(preact__WEBPACK_IMPORTED_MODULE_0__.Component);

/***/ }),

/***/ "./assets/scripts/services/mailchimp-subscribe/app.js":
/*!************************************************************!*\
  !*** ./assets/scripts/services/mailchimp-subscribe/app.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MailchimpSubscribe": () => (/* binding */ MailchimpSubscribe),
/* harmony export */   "enableMailchimpForm": () => (/* binding */ enableMailchimpForm)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _Components_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/Input */ "./assets/scripts/services/mailchimp-subscribe/Components/Input.jsx");
/* harmony import */ var _notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../notifications */ "./assets/scripts/services/notifications/index.js");
/* harmony import */ var ky__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ky */ "./node_modules/ky/distribution/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./assets/scripts/config/index.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../theme */ "./assets/scripts/theme.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _templateObject;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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








var appElement = document.querySelector('#mailchimp-subscribe-app');
var SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\nbox-shadow: 0 3px 6px rgba(51, 51, 51, .2);\nbackground: ", ";\ncolor: ", ";\nborder-radius: 4px;\npadding: .5rem 1rem;\n\n&[disabled] {\n\tbackground: ", ";\n}\n"])), _config__WEBPACK_IMPORTED_MODULE_3__.Colors.primary, _config__WEBPACK_IMPORTED_MODULE_3__.Colors.white, _config__WEBPACK_IMPORTED_MODULE_3__.Colors.gray);
var MailchimpSubscribe = /*#__PURE__*/function (_Component) {
  _inherits(MailchimpSubscribe, _Component);

  var _super = _createSuper(MailchimpSubscribe);

  function MailchimpSubscribe(props) {
    var _this;

    _classCallCheck(this, MailchimpSubscribe);

    _this = _super.call(this, props);
    _this.state = {
      first_name: null,
      last_name: null,
      email: null,
      loading: false
    };
    _this.submitHandler = _this.submitHandler.bind(_assertThisInitialized(_this));
    _this.inputChange = _this.inputChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(MailchimpSubscribe, [{
    key: "inputChange",
    value: function inputChange(key, value) {
      if (!this.state.hasOwnProperty(key)) {
        return;
      }

      this.setState(_defineProperty({}, key, value));
    }
  }, {
    key: "submitHandler",
    value: function submitHandler(e) {
      var _this2 = this;

      e.preventDefault();
      var _this$state = this.state,
          first_name = _this$state.first_name,
          last_name = _this$state.last_name,
          email = _this$state.email;
      var data$ = new FormData();

      if (!email) {
        (0,_notifications__WEBPACK_IMPORTED_MODULE_2__.registerToast)({
          slug: "mc-no-email-".concat(new Date().getTime()),
          content: 'Email is verplicht.'
        });
      }

      data$.set('email', email);

      if (first_name) {
        data$.set('first_name', first_name);
      }

      if (last_name) {
        data$.set('last_name', last_name);
      }

      this.setState({
        loading: true
      });
      ky__WEBPACK_IMPORTED_MODULE_6__["default"].post(window['rest_url'] + 'bookish/v1/mailchimp', {
        body: data$
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        (0,_notifications__WEBPACK_IMPORTED_MODULE_2__.registerToast)({
          slug: "mc-success-register-".concat(new Date().getTime()),
          content: 'Je bent ingeschreven voor de nieuwsbrief!'
        });
      })["catch"](function (err) {
        return (0,_notifications__WEBPACK_IMPORTED_MODULE_2__.registerToast)({
          slug: "mc-email-exists-".concat(new Date().getTime()),
          content: 'Je bent al ingeschreven voor de nieuwbrief!'
        });
      })["finally"](function () {
        return _this2.setState({
          loading: false
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("form", {
        onSubmit: this.submitHandler
      }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_Components_Input__WEBPACK_IMPORTED_MODULE_1__.Input, {
        label: 'Voornaam',
        required: true,
        target: 'first_name',
        changeHandler: this.inputChange
      }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_Components_Input__WEBPACK_IMPORTED_MODULE_1__.Input, {
        label: 'Achternaam',
        target: 'last_name',
        changeHandler: this.inputChange
      }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_Components_Input__WEBPACK_IMPORTED_MODULE_1__.Input, {
        label: 'E-mail',
        required: true,
        type: 'email',
        target: 'email',
        changeHandler: this.inputChange
      }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(SubmitButton, {
        type: 'submit',
        disabled: this.state.loading
      }, "Aanmelden"));
    }
  }]);

  return MailchimpSubscribe;
}(preact__WEBPACK_IMPORTED_MODULE_0__.Component);
function enableMailchimpForm() {
  if (appElement) {
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(MailchimpSubscribe, null), appElement);
  }
}

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

/***/ "./assets/scripts/services/product-card/Product.jsx":
/*!**********************************************************!*\
  !*** ./assets/scripts/services/product-card/Product.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Product": () => (/* binding */ Product)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_AnimatedRibbons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/AnimatedRibbons */ "./assets/scripts/services/product-card/components/AnimatedRibbons/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers */ "./assets/scripts/helpers/index.js");
/* harmony import */ var _add_to_cart_mini_add_to_cart_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-to-cart/mini-add-to-cart/app */ "./assets/scripts/services/add-to-cart/mini-add-to-cart/app.js");
/* harmony import */ var _components_Thumbnail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Thumbnail */ "./assets/scripts/services/product-card/components/Thumbnail.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Product = /*#__PURE__*/function (_Component) {
  _inherits(Product, _Component);

  var _super = _createSuper(Product);

  /**
   *
   * @type {IntersectionObserver} io
   */
  function Product(props) {
    var _this;

    _classCallCheck(this, Product);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "card", (0,preact__WEBPACK_IMPORTED_MODULE_0__.createRef)());

    _defineProperty(_assertThisInitialized(_this), "io", null);

    _this.thumbnail = JSON.parse(_this.props.thumbnail);
    _this.state = {
      inView: false
    };
    _this.renderPrice = _this.renderPrice.bind(_assertThisInitialized(_this));
    _this.renderPreOrderBanner = _this.renderPreOrderBanner.bind(_assertThisInitialized(_this));
    _this.renderSaleBanner = _this.renderSaleBanner.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Product, [{
    key: "renderPrice",
    value: function renderPrice() {
      var _this$props = this.props,
          onsale = _this$props.onsale,
          saleprice = _this$props.saleprice,
          price = _this$props.price;
      var printablePrice = new _helpers__WEBPACK_IMPORTED_MODULE_2__.woocommerce.priceStringBuilder(price).set_euro_separators().strip_euro_sign().toString();

      if (!!onsale) {
        var printableSalePrice = new _helpers__WEBPACK_IMPORTED_MODULE_2__.woocommerce.priceStringBuilder(saleprice).set_euro_separators().strip_euro_sign().toString();
        return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, "\u20AC ", (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", {
          style: "text-decoration: line-through;"
        }, printablePrice), " ", printableSalePrice);
      }

      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, "\u20AC ", printablePrice);
    }
  }, {
    key: "renderNewProductBanner",
    value: function renderNewProductBanner() {
      if (!this.props.is_new) {
        return '';
      }

      if (['outofstock', 'preorder', 'onbackorder'].includes(this.props.stock_status)) {
        return '';
      }

      if (!this.state.inView || this.props.onsale) {
        return '';
      }

      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_components_AnimatedRibbons__WEBPACK_IMPORTED_MODULE_1__.NewProductRibbon, null);
    }
  }, {
    key: "renderPreOrderBanner",
    value: function renderPreOrderBanner() {
      if (this.props.stock_status !== 'preorder') {
        return ' ';
      }

      if (!this.state.inView) {
        return '';
      }

      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_components_AnimatedRibbons__WEBPACK_IMPORTED_MODULE_1__.AnimatedPreOrderBanner, null);
    }
  }, {
    key: "renderSaleBanner",
    value: function renderSaleBanner() {
      if (this.props.stock_status === 'preorder' || !this.props.onsale) {
        return ' ';
      }

      if (!this.state.inView) {
        return '';
      }

      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_components_AnimatedRibbons__WEBPACK_IMPORTED_MODULE_1__.AnimatedSaleBanner, null);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.io = new IntersectionObserver(function (_ref, ob) {
        var _ref2 = _slicedToArray(_ref, 1),
            entry = _ref2[0];

        if (entry.isIntersecting) {
          _this2.setState({
            inView: true
          });

          ob.unobserve(entry.target);
        }
      }, {
        root: null,
        rootMargin: '0px',
        threshold: 0
      });

      try {
        this.io.observe(this.card.current);
      } catch (_unused) {}
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.io.disconnect();
    }
  }, {
    key: "render",
    value: function render() {
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, this.renderSaleBanner(), this.renderPreOrderBanner(), this.renderNewProductBanner(), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_components_Thumbnail__WEBPACK_IMPORTED_MODULE_4__.Thumbnail, {
        link: this.props.link,
        title: this.props.title,
        thumbnail: this.props.thumbnail,
        outofstock: this.props.stock_status === 'outofstock'
      }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("main", {
        className: "card-content"
      }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("a", {
        href: this.props.link
      }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("h2", {
        className: "is-h3",
        ref: this.card
      }, this.props.title)), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("p", {
        className: "product-card--categories mb-2",
        dangerouslySetInnerHTML: {
          __html: this.props.categories
        }
      }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("p", {
        className: "product-card--price"
      }, this.renderPrice()), !this.props.instock && (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_components_AnimatedRibbons__WEBPACK_IMPORTED_MODULE_1__.AnimatedSoldOut, null), this.props.instock && (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_add_to_cart_mini_add_to_cart_app__WEBPACK_IMPORTED_MODULE_3__.AddToCart, {
        id: this.props.id
      })));
    }
  }]);

  return Product;
}(preact__WEBPACK_IMPORTED_MODULE_0__.Component);
Product.propTypes = {
  thumbnail: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default().exact({
    webp: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
    thumbnail: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string.isRequired)
  }), (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string)]),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string.isRequired),
  categories: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string.isRequired),
  price: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string.isRequired),
  link: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string.isRequired),
  instock: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(['1', '']),
  onsale: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(['1', '']),
  saleprice: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  stock_status: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(['instock', 'outofstock', 'preorder', 'onbackorder']),
  is_new: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(['1', '']),
  id: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_5___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string)])
};

/***/ }),

/***/ "./assets/scripts/services/product-card/app.js":
/*!*****************************************************!*\
  !*** ./assets/scripts/services/product-card/app.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hydrateProducts": () => (/* binding */ hydrateProducts),
/* harmony export */   "renderProducts": () => (/* binding */ renderProducts)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product */ "./assets/scripts/services/product-card/Product.jsx");


function renderProducts() {
  var targetElements = document.querySelectorAll('.pre-product-card');

  if (targetElements.length === 0) {
    return;
  }

  for (var i = 0; i < targetElements.length; i++) {
    var dataset = targetElements[i].dataset;
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_Product__WEBPACK_IMPORTED_MODULE_1__.Product, {
      thumbnail: dataset.thumbnail,
      title: dataset.title,
      categories: dataset.categories,
      price: dataset.price,
      id: dataset.product_id,
      link: dataset.url,
      instock: dataset.instock,
      onsale: dataset.onsale,
      saleprice: dataset.saleprice,
      stock_status: dataset.stock_status,
      is_new: dataset.is_new
    }), targetElements[i]);
  }
}
function hydrateProducts() {
  var targetElements = document.querySelectorAll('.pre-product-card');

  if (targetElements.length === 0) {
    return;
  }

  for (var i = 0; i < targetElements.length; i++) {
    var dataset = targetElements[i].dataset;
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.hydrate)((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_Product__WEBPACK_IMPORTED_MODULE_1__.Product, {
      thumbnail: dataset.thumbnail,
      title: dataset.title,
      categories: dataset.categories,
      price: dataset.price,
      id: dataset.product_id,
      link: dataset.url,
      instock: dataset.instock,
      onsale: dataset.onsale,
      saleprice: dataset.saleprice,
      stock_status: dataset.stock_status,
      is_new: dataset.is_new
    }), targetElements[i]);
  }
}

/***/ }),

/***/ "./assets/scripts/services/product-card/components/AnimatedRibbons/AnimatedPreOrderBanner.jsx":
/*!****************************************************************************************************!*\
  !*** ./assets/scripts/services/product-card/components/AnimatedRibbons/AnimatedPreOrderBanner.jsx ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimatedPreOrderBanner": () => (/* binding */ AnimatedPreOrderBanner)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _Ribbon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ribbon */ "./assets/scripts/services/product-card/components/AnimatedRibbons/Ribbon.jsx");
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



var AnimatedPreOrderBanner = /*#__PURE__*/function (_Component) {
  _inherits(AnimatedPreOrderBanner, _Component);

  var _super = _createSuper(AnimatedPreOrderBanner);

  function AnimatedPreOrderBanner() {
    _classCallCheck(this, AnimatedPreOrderBanner);

    return _super.apply(this, arguments);
  }

  _createClass(AnimatedPreOrderBanner, [{
    key: "render",
    value: function render() {
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_Ribbon__WEBPACK_IMPORTED_MODULE_1__.HorizontalRibbon, null, "Pre Order");
    }
  }]);

  return AnimatedPreOrderBanner;
}(preact__WEBPACK_IMPORTED_MODULE_0__.Component);

/***/ }),

/***/ "./assets/scripts/services/product-card/components/AnimatedRibbons/AnimatedSaleBanner.jsx":
/*!************************************************************************************************!*\
  !*** ./assets/scripts/services/product-card/components/AnimatedRibbons/AnimatedSaleBanner.jsx ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimatedSaleBanner": () => (/* binding */ AnimatedSaleBanner)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _Ribbon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ribbon */ "./assets/scripts/services/product-card/components/AnimatedRibbons/Ribbon.jsx");
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



var AnimatedSaleBanner = /*#__PURE__*/function (_Component) {
  _inherits(AnimatedSaleBanner, _Component);

  var _super = _createSuper(AnimatedSaleBanner);

  function AnimatedSaleBanner() {
    _classCallCheck(this, AnimatedSaleBanner);

    return _super.apply(this, arguments);
  }

  _createClass(AnimatedSaleBanner, [{
    key: "render",
    value: function render() {
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_Ribbon__WEBPACK_IMPORTED_MODULE_1__.HorizontalRibbon, null, "Sale");
    }
  }]);

  return AnimatedSaleBanner;
}(preact__WEBPACK_IMPORTED_MODULE_0__.Component);

/***/ }),

/***/ "./assets/scripts/services/product-card/components/AnimatedRibbons/AnimatedSoldOut.jsx":
/*!*********************************************************************************************!*\
  !*** ./assets/scripts/services/product-card/components/AnimatedRibbons/AnimatedSoldOut.jsx ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimatedSoldOut": () => (/* binding */ AnimatedSoldOut)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var react_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-motion */ "./node_modules/react-motion/lib/react-motion.js");
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



var AnimatedSoldOut = /*#__PURE__*/function (_Component) {
  _inherits(AnimatedSoldOut, _Component);

  var _super = _createSuper(AnimatedSoldOut);

  function AnimatedSoldOut() {
    _classCallCheck(this, AnimatedSoldOut);

    return _super.apply(this, arguments);
  }

  _createClass(AnimatedSoldOut, [{
    key: "render",
    value: function render() {
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(react_motion__WEBPACK_IMPORTED_MODULE_1__.Motion, {
        defaultStyle: {
          x: 100,
          o: 0
        },
        style: {
          x: (0,react_motion__WEBPACK_IMPORTED_MODULE_1__.spring)(0),
          o: (0,react_motion__WEBPACK_IMPORTED_MODULE_1__.spring)(1)
        }
      }, function (_ref) {
        var x = _ref.x,
            o = _ref.o;
        return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("p", {
          style: {
            WebkitTransform: "translate3d(".concat(x, "px, 0, 0)"),
            transform: "translate3d(".concat(x, "px, 0, 0)"),
            opacity: o
          }
        }, "Uitverkocht");
      });
    }
  }]);

  return AnimatedSoldOut;
}(preact__WEBPACK_IMPORTED_MODULE_0__.Component);

/***/ }),

/***/ "./assets/scripts/services/product-card/components/AnimatedRibbons/NewProductRibbon.jsx":
/*!**********************************************************************************************!*\
  !*** ./assets/scripts/services/product-card/components/AnimatedRibbons/NewProductRibbon.jsx ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewProductRibbon": () => (/* binding */ NewProductRibbon)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _Ribbon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ribbon */ "./assets/scripts/services/product-card/components/AnimatedRibbons/Ribbon.jsx");
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



var NewProductRibbon = /*#__PURE__*/function (_Component) {
  _inherits(NewProductRibbon, _Component);

  var _super = _createSuper(NewProductRibbon);

  function NewProductRibbon() {
    _classCallCheck(this, NewProductRibbon);

    return _super.apply(this, arguments);
  }

  _createClass(NewProductRibbon, [{
    key: "render",
    value: function render() {
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_Ribbon__WEBPACK_IMPORTED_MODULE_1__.HorizontalRibbon, null, "Nieuw!");
    }
  }]);

  return NewProductRibbon;
}(preact__WEBPACK_IMPORTED_MODULE_0__.Component);

/***/ }),

/***/ "./assets/scripts/services/product-card/components/AnimatedRibbons/Ribbon.jsx":
/*!************************************************************************************!*\
  !*** ./assets/scripts/services/product-card/components/AnimatedRibbons/Ribbon.jsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalRibbon": () => (/* binding */ HorizontalRibbon)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../config */ "./assets/scripts/config/index.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.esm.js");
/* harmony import */ var react_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-motion */ "./node_modules/react-motion/lib/react-motion.js");
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






var HorizontalBannerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\tposition: absolute;\n\ttop: -10px;\n\tright: 2rem;\n\tpointer-events: none;\n\t\n\t&:before {\n\t\tcontent: ' ';\n\t\ttop: 0;\n\t\tleft: 100%;\n\t\tdisplay: block;\n\t\tposition: absolute;\n\t\tborder-style: solid;\n\t\tborder-width: 5px;\n\t\tborder-color: transparent transparent ", " ", ";\n\t}\n\t\n\tfilter: drop-shadow(-1px 6px 3px rgba(51, 51, 51, 1))\n"])), (0,polished__WEBPACK_IMPORTED_MODULE_4__.darken)(.2, _config__WEBPACK_IMPORTED_MODULE_1__.Colors.green), (0,polished__WEBPACK_IMPORTED_MODULE_4__.darken)(.2, _config__WEBPACK_IMPORTED_MODULE_1__.Colors.green));
var HorizontalBanner = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].span(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\tbackground: ", ";\n\tcolor: ", ";\n\t\n\tpadding: 1rem .5rem;\n\twidth: min-content;\n\theight: 11ch;\n\t\n\ttext-transform: uppercase;\n\ttext-align: center;\n\tdisplay: block;\n\n\tclip-path: polygon(0 0, 0 100%, 50% 7ch, 100% 100%, 100% 0);\n"])), _config__WEBPACK_IMPORTED_MODULE_1__.Colors.green, _config__WEBPACK_IMPORTED_MODULE_1__.Colors.white);
var HorizontalRibbon = /*#__PURE__*/function (_Component) {
  _inherits(HorizontalRibbon, _Component);

  var _super = _createSuper(HorizontalRibbon);

  function HorizontalRibbon() {
    _classCallCheck(this, HorizontalRibbon);

    return _super.apply(this, arguments);
  }

  _createClass(HorizontalRibbon, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(react_motion__WEBPACK_IMPORTED_MODULE_2__.Motion, {
        defaultStyle: {
          s: 0
        },
        style: {
          s: (0,react_motion__WEBPACK_IMPORTED_MODULE_2__.spring)(1, {
            stiffness: 90,
            damping: 9
          })
        }
      }, function (_ref) {
        var s = _ref.s;
        return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(HorizontalBannerWrapper, {
          style: {
            transform: "scale(1, ".concat(s, ")"),
            transformOrigin: 'top center'
          }
        }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(HorizontalBanner, {
          children: children
        }));
      });
    }
  }]);

  return HorizontalRibbon;
}(preact__WEBPACK_IMPORTED_MODULE_0__.Component);

/***/ }),

/***/ "./assets/scripts/services/product-card/components/AnimatedRibbons/index.js":
/*!**********************************************************************************!*\
  !*** ./assets/scripts/services/product-card/components/AnimatedRibbons/index.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimatedPreOrderBanner": () => (/* reexport safe */ _AnimatedPreOrderBanner__WEBPACK_IMPORTED_MODULE_2__.AnimatedPreOrderBanner),
/* harmony export */   "AnimatedSaleBanner": () => (/* reexport safe */ _AnimatedSaleBanner__WEBPACK_IMPORTED_MODULE_1__.AnimatedSaleBanner),
/* harmony export */   "AnimatedSoldOut": () => (/* reexport safe */ _AnimatedSoldOut__WEBPACK_IMPORTED_MODULE_0__.AnimatedSoldOut),
/* harmony export */   "NewProductRibbon": () => (/* reexport safe */ _NewProductRibbon__WEBPACK_IMPORTED_MODULE_3__.NewProductRibbon)
/* harmony export */ });
/* harmony import */ var _AnimatedSoldOut__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnimatedSoldOut */ "./assets/scripts/services/product-card/components/AnimatedRibbons/AnimatedSoldOut.jsx");
/* harmony import */ var _AnimatedSaleBanner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnimatedSaleBanner */ "./assets/scripts/services/product-card/components/AnimatedRibbons/AnimatedSaleBanner.jsx");
/* harmony import */ var _AnimatedPreOrderBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnimatedPreOrderBanner */ "./assets/scripts/services/product-card/components/AnimatedRibbons/AnimatedPreOrderBanner.jsx");
/* harmony import */ var _NewProductRibbon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NewProductRibbon */ "./assets/scripts/services/product-card/components/AnimatedRibbons/NewProductRibbon.jsx");






/***/ }),

/***/ "./assets/scripts/services/product-card/components/Thumbnail.jsx":
/*!***********************************************************************!*\
  !*** ./assets/scripts/services/product-card/components/Thumbnail.jsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Thumbnail": () => (/* binding */ Thumbnail)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
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




var Image = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t", "\n"])), function (props) {
  return props.outofstock && (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\t\tfilter: grayscale(1);\n\t\tposition: relative;\n\t\tz-index: -1;\n\t"])));
});
var Thumbnail = /*#__PURE__*/function (_Component) {
  _inherits(Thumbnail, _Component);

  var _super = _createSuper(Thumbnail);

  function Thumbnail(props) {
    var _this;

    _classCallCheck(this, Thumbnail);

    _this = _super.call(this, props);
    _this.thumbnail = JSON.parse(props.thumbnail);
    return _this;
  }

  _createClass(Thumbnail, [{
    key: "render",
    value: function render() {
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("a", {
        href: this.props.link,
        title: "Bekijk ".concat(this.props.title)
      }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("picture", null, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("source", {
        srcSet: this.thumbnail.webp,
        type: 'image/webp'
      }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(Image, {
        src: this.thumbnail.thumbnail,
        loading: 'lazy',
        alt: "Productafbeelding ".concat(this.props.title),
        outofstock: this.props.outofstock
      })));
    }
  }]);

  return Thumbnail;
}(preact__WEBPACK_IMPORTED_MODULE_0__.Component);
Thumbnail.propTypes = {
  link: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
  thumbnail: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().exact({
    webp: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    thumbnail: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired)
  }), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]),
  outofstock: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)
};

/***/ }),

/***/ "./assets/scripts/services/search-bar/Components/AutoFillItem.jsx":
/*!************************************************************************!*\
  !*** ./assets/scripts/services/search-bar/Components/AutoFillItem.jsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutoFillItem": () => (/* binding */ AutoFillItem)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config */ "./assets/scripts/config/index.js");
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Item = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li(_templateObject || (_templateObject = _taggedTemplateLiteral(["\ncursor: pointer;\ntransition: background-color 225ms ease,\n\t\t\tcolor 225ms ease-in-out;\npadding: 1rem .5rem;\n\n&:hover, \n&:focus {\n\tbackground: ", ";\n\tcolor: ", ";\n}\n\n&:not(:last-of-type) {\nmargin-bottom: .5rem;\n}\n"])), _config__WEBPACK_IMPORTED_MODULE_1__.Colors.primary, _config__WEBPACK_IMPORTED_MODULE_1__.Colors.white);
var Header = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].strong(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\n"])));
var Aside = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].small(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\ndisplay: block;\n"])));
var AutoFillItem = /*#__PURE__*/function (_Component) {
  _inherits(AutoFillItem, _Component);

  var _super = _createSuper(AutoFillItem);

  function AutoFillItem(props) {
    var _this;

    _classCallCheck(this, AutoFillItem);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "self", (0,preact__WEBPACK_IMPORTED_MODULE_0__.createRef)());

    _this.item = props.item;
    _this.clickHandler = _this.clickHandler.bind(_assertThisInitialized(_this));
    _this.keyPressHandler = _this.keyPressHandler.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AutoFillItem, [{
    key: "clickHandler",
    value: function clickHandler() {
      window.location.search = new URLSearchParams({
        p: this.item.ID
      }).toString();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.focused) {
        var _this$self, _this$self$current;

        (_this$self = this.self) === null || _this$self === void 0 ? void 0 : (_this$self$current = _this$self.current) === null || _this$self$current === void 0 ? void 0 : _this$self$current.focus();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.focused) {
        var _this$self2, _this$self2$current;

        (_this$self2 = this.self) === null || _this$self2 === void 0 ? void 0 : (_this$self2$current = _this$self2.current) === null || _this$self2$current === void 0 ? void 0 : _this$self2$current.focus();
      }
    }
  }, {
    key: "keyPressHandler",
    value: function keyPressHandler(e) {
      console.dir(e.key);

      if (e.key === 'Enter') {
        return this.clickHandler();
      }

      if (e.key === 'Escape') {
        return this.props.fillHider(e, true);
      }

      this.props.keyDownHandler(e);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.item.post_status !== 'publish') {
        return;
      }

      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(Item, {
        onClick: this.clickHandler,
        onKeyDown: this.keyPressHandler,
        ref: this.self,
        tabIndex: -1
      }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(Header, null, this.item.post_title), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(Aside, null, _config__WEBPACK_IMPORTED_MODULE_1__.Trans.$t("search.post_type.".concat(this.item.post_type), this.item.post_type)));
    }
  }]);

  return AutoFillItem;
}(preact__WEBPACK_IMPORTED_MODULE_0__.Component);

/***/ }),

/***/ "./assets/scripts/services/search-bar/Components/FillWrapper.jsx":
/*!***********************************************************************!*\
  !*** ./assets/scripts/services/search-bar/Components/FillWrapper.jsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FillWrapper": () => (/* binding */ FillWrapper)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config */ "./assets/scripts/config/index.js");
/* harmony import */ var _AutoFillItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AutoFillItem */ "./assets/scripts/services/search-bar/Components/AutoFillItem.jsx");
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





var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].ul(_templateObject || (_templateObject = _taggedTemplateLiteral(["\nposition: absolute;\ntop: 100%;\nleft: 0;\nright: 0;\nbackground: ", ";\nbox-shadow: 0 3px 6px rgba(51,51,51, 0.2);\nz-index: 1;\n"])), _config__WEBPACK_IMPORTED_MODULE_1__.Colors.white);
var FillWrapper = /*#__PURE__*/function (_Component) {
  _inherits(FillWrapper, _Component);

  var _super = _createSuper(FillWrapper);

  function FillWrapper() {
    _classCallCheck(this, FillWrapper);

    return _super.apply(this, arguments);
  }

  _createClass(FillWrapper, [{
    key: "render",
    value: function render() {
      var _this = this;

      if (this.props.posts.length === 0) {
        return;
      }

      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(Wrapper, null, this.props.posts.map(function (item, index) {
        return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_AutoFillItem__WEBPACK_IMPORTED_MODULE_2__.AutoFillItem, {
          item: item,
          focused: index === _this.props.cursor,
          fillHider: _this.props.fillHider,
          keyDownHandler: _this.props.keyDownHandler
        });
      }));
    }
  }]);

  return FillWrapper;
}(preact__WEBPACK_IMPORTED_MODULE_0__.Component);

/***/ }),

/***/ "./assets/scripts/services/search-bar/Components/Form.jsx":
/*!****************************************************************!*\
  !*** ./assets/scripts/services/search-bar/Components/Form.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchBar": () => (/* binding */ SearchBar)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var ky__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ky */ "./node_modules/ky/distribution/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_pro_duotone_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/pro-duotone-svg-icons */ "./node_modules/@fortawesome/pro-duotone-svg-icons/index.es.js");
/* harmony import */ var _FillWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FillWrapper */ "./assets/scripts/services/search-bar/Components/FillWrapper.jsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config */ "./assets/scripts/config/index.js");
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var SearchBar = /*#__PURE__*/function (_Component) {
  _inherits(SearchBar, _Component);

  var _super = _createSuper(SearchBar);

  function SearchBar(props) {
    var _this;

    _classCallCheck(this, SearchBar);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "form", (0,preact__WEBPACK_IMPORTED_MODULE_0__.createRef)());

    _this.abortControllers = [];
    _this.searchHandler = _this.searchHandler.bind(_assertThisInitialized(_this));
    _this.hideAutoFill = _this.hideAutoFill.bind(_assertThisInitialized(_this));
    _this.showAutoFill = _this.showAutoFill.bind(_assertThisInitialized(_this));
    _this.keyHandler = _this.keyHandler.bind(_assertThisInitialized(_this));
    _this.state = {
      loading: false,
      searchValue: null,
      searchResults: [],
      count: 0,
      isVisible: false,
      cursor: 0
    };
    return _this;
  }

  _createClass(SearchBar, [{
    key: "searchHandler",
    value: function searchHandler(e) {
      var _this2 = this;

      this.abortControllers.forEach(function (abortController) {
        return abortController.abort();
      });
      var abortController = new AbortController();
      this.abortControllers.push(abortController);
      this.setState({
        searchValue: e.target.value,
        loading: true
      });
      ky__WEBPACK_IMPORTED_MODULE_4__["default"].get(window['ajax_url'], {
        signal: abortController.signal,
        searchParams: {
          action: 'search_results',
          s: this.state.searchValue
        }
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        var _res$data = res.data,
            count = _res$data.count,
            posts = _res$data.posts;

        _this2.setState({
          searchResults: posts,
          count: count
        });
      })["catch"](function (e) {
        _this2.setState({
          searchResults: [],
          count: 0
        });
      })["finally"](function () {
        return _this2.setState({
          loading: false
        });
      });
    }
  }, {
    key: "hideAutoFill",
    value: function hideAutoFill(e) {
      var _this$form, _this$form$current;

      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (force) {
        this.setState({
          isVisible: false,
          searchValue: '',
          searchResults: []
        });
      }

      if ((_this$form = this.form) !== null && _this$form !== void 0 && (_this$form$current = _this$form.current) !== null && _this$form$current !== void 0 && _this$form$current.contains(e.target)) {
        return;
      }

      this.setState({
        isVisible: false
      });
    }
  }, {
    key: "showAutoFill",
    value: function showAutoFill() {
      this.setState({
        isVisible: true
      });
    }
  }, {
    key: "keyHandler",
    value: function keyHandler(e) {
      if (e.repeat) {
        return;
      }

      e.stopPropagation();
      var _this$state = this.state,
          cursor = _this$state.cursor,
          searchResults = _this$state.searchResults,
          keyUp = 38,
          keyDown = 40;

      if (![keyDown, keyUp].includes(e.keyCode)) {
        return;
      }

      e.preventDefault();

      if (e.keyCode === keyUp) {
        if (cursor > 0) {
          this.setState({
            cursor: cursor - 1
          });
        } else {
          this.setState({
            cursor: searchResults.length - 1
          });
        }
      }

      if (e.keyCode === keyDown) {
        if (cursor < searchResults.length - 1) {
          this.setState({
            cursor: cursor + 1
          });
        } else {
          this.setState({
            cursor: 0
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state2 = this.state,
          searchValue = _this$state2.searchValue,
          loading = _this$state2.loading,
          searchResults = _this$state2.searchResults,
          isVisible = _this$state2.isVisible,
          cursor = _this$state2.cursor;
      var randomPostfix = Math.random().toString(36).substring(7);
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("form", {
        className: 'search-form',
        action: '/',
        method: 'GET',
        ref: this.form
      }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("input", {
        type: "hidden",
        name: "post_type",
        value: "product",
        id: "post_type"
      }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("label", {
        htmlFor: "autoComplete_".concat(randomPostfix),
        className: 'sr-only'
      }, "Zoeken naar..."), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("input", {
        type: "text",
        style: {
          marginBottom: 0
        },
        placeholder: "Waar ben je naar op zoek?",
        id: "autoComplete_".concat(randomPostfix),
        name: 's',
        onChange: this.searchHandler,
        value: searchValue,
        autoComplete: 'off',
        onFocus: this.showAutoFill,
        onKeyDown: this.keyHandler,
        onBlur: this.hideAutoFill
      }), searchResults.length === 0 && (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
        className: 'btn search-icon',
        type: 'submit',
        name: 'Zoeken',
        disabled: loading,
        "aria-label": 'Zoeken'
      }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
        icon: loading ? _fortawesome_pro_duotone_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faSpinnerThird : _fortawesome_pro_duotone_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faSearch,
        color: _config__WEBPACK_IMPORTED_MODULE_3__.Colors.primary,
        spin: loading
      })), searchResults.length > 0 && (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
        className: 'btn search-icon',
        onClick: function onClick(e) {
          return _this3.hideAutoFill(e, true);
        },
        type: 'button',
        name: 'Cancel'
      }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
        icon: _fortawesome_pro_duotone_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faTimes,
        color: _config__WEBPACK_IMPORTED_MODULE_3__.Colors.primary
      })), isVisible && searchValue !== '' && (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_FillWrapper__WEBPACK_IMPORTED_MODULE_2__.FillWrapper, {
        posts: searchResults,
        cursor: cursor,
        fillHider: this.hideAutoFill,
        keyDownHandler: this.keyHandler
      }));
    }
  }]);

  return SearchBar;
}(preact__WEBPACK_IMPORTED_MODULE_0__.Component);

/***/ }),

/***/ "./assets/scripts/services/search-bar/app.js":
/*!***************************************************!*\
  !*** ./assets/scripts/services/search-bar/app.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hydrateSearchBar": () => (/* binding */ hydrateSearchBar),
/* harmony export */   "renderSearchBar": () => (/* binding */ renderSearchBar)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _Components_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/Form */ "./assets/scripts/services/search-bar/Components/Form.jsx");


function renderSearchBar() {
  var searchBar = document.querySelectorAll('.pre-search-form');

  for (var i = 0; i < searchBar.length; i++) {
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_Components_Form__WEBPACK_IMPORTED_MODULE_1__.SearchBar, null), searchBar[i]);
  }
}
function hydrateSearchBar() {
  var searchBar = document.querySelectorAll('.pre-search-form');

  for (var i = 0; i < searchBar.length; i++) {
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.hydrate)((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_Components_Form__WEBPACK_IMPORTED_MODULE_1__.SearchBar, null), searchBar[i]);
  }
}

/***/ }),

/***/ "./assets/scripts/src/Elements/Common/Heading/Heading.js":
/*!***************************************************************!*\
  !*** ./assets/scripts/src/Elements/Common/Heading/Heading.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Heading": () => (/* binding */ Heading)
/* harmony export */ });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/development/index.js");
/* harmony import */ var lit_html_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/unsafe-html.js */ "./node_modules/lit-html/development/directives/unsafe-html.js");
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



var Heading = /*#__PURE__*/function (_LitElement) {
  _inherits(Heading, _LitElement);

  var _super = _createSuper(Heading);

  function Heading() {
    var _this;

    _classCallCheck(this, Heading);

    _this = _super.call(this);
    _this.type = '1';
    return _this;
  }

  _createClass(Heading, [{
    key: "getClassNames",
    value: function getClassNames() {
      if (this.size) {
        return "is-".concat(this.size.toString().includes('h') ? this.size.toString() : "h".concat(this.size.toString()));
      }
    }
  }, {
    key: "_getTagName",
    value: function _getTagName() {
      if (!this.type) {
        return 'h1';
      }

      return "".concat(this.type.toString().includes('h') ? this.type : "h".concat(this.type));
    }
  }, {
    key: "render",
    value: function render() {
      var template = "\n<".concat(this._getTagName(), " class=\"").concat(this.getClassNames(), "\">\n<slot />\n</").concat(this._getTagName(), ">\n\t\t");
      return (0,lit_element__WEBPACK_IMPORTED_MODULE_0__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["", ""])), (0,lit_html_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_1__.unsafeHTML)(template));
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        type: {
          type: String
        },
        size: {
          type: String
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return (0,lit_element__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n\tfont-family: 'Merienda', cursive;\n\tfont-weight: normal;\n\tmargin: 0;\n\tline-height: 1.5;\n}\n\nh1, .is-h1 { font-size: 2rem; }\nh2, .is-h2 { font-size: 1.8rem; }\nh3, .is-h3 { font-size: 1.5rem; }\n"])));
    }
  }]);

  return Heading;
}(lit_element__WEBPACK_IMPORTED_MODULE_0__.LitElement);

/***/ }),

/***/ "./assets/scripts/theme.js":
/*!*********************************!*\
  !*** ./assets/scripts/theme.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeProvider": () => (/* reexport safe */ _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "defaultTheme": () => (/* binding */ defaultTheme)
/* harmony export */ });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/createTheme.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/styles/esm/ThemeProvider/ThemeProvider.js");


var defaultTheme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["default"])({
  palette: {
    primary: {
      main: 'hsl(265, 83%, 45%)'
    },
    secondary: {
      main: 'hsl(47, 100%, 68%)'
    },
    error: {
      main: 'hsl(357, 100%, 55%)'
    },
    success: {
      main: 'hsl(122, 67%, 48%)'
    }
  }
});

/***/ })

}]);