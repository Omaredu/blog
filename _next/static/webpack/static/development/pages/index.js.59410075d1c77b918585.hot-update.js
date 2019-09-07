webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Entry.js":
/*!*****************************!*\
  !*** ./components/Entry.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Entry; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);







var _jsxFileName = "C:\\Users\\omare\\Desktop\\blog\\components\\Entry.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;


var Entry =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Entry, _Component);

  function Entry() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Entry);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Entry)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      title: _this.props.title,
      content: _this.props.content
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Entry, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        className: "post",
        style: styles.post,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, this.props.images ? this.props.images.map(function (image) {
        return __jsx("img", {
          key: image.url,
          style: styles.image,
          src: image.url,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        });
      }) : null, __jsx("div", {
        style: styles.content,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, __jsx("ul", {
        className: "tags",
        style: styles.tags,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, this.props.tags.map(function (tag) {
        return __jsx("li", {
          style: styles.tag,
          key: tag + _this2.props.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, tag);
      })), __jsx("h2", {
        style: {
          textAlign: 'center',
          marginBottom: '-5px',
          fontSize: '2em'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, this.state.title), __jsx("p", {
        style: {
          textAlign: 'center',
          color: '#8c8c8c'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, this.props.date.getDate() + " - " + this.props.date.getMonth()), __jsx("p", {
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, this.state.content)));
    }
  }]);

  return Entry;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);


var styles = {
  tags: {
    display: 'flex',
    listStyle: 'none',
    marginLeft: '-40px',
    fontSize: '12px',
    justifyContent: 'center',
    marginBottom: '-5px'
  },
  tag: {
    padding: '5px 20px',
    margin: '0 10px',
    borderRadius: '2px',
    backgroundColor: '#F8054D',
    color: 'white'
  },
  post: {
    //backgroundColor: '#F8054D',
    backgroundColor: '#ececec',
    //border: '1px solid #cecece80',
    overflow: 'hidden',
    borderRadius: '5px',
    width: '100%',
    marginBottom: '2em'
  },
  image: {
    width: "100%",
    marginBottom: '-1em'
  },
  content: {
    padding: '3em'
  }
};

/***/ })

})
//# sourceMappingURL=index.js.59410075d1c77b918585.hot-update.js.map