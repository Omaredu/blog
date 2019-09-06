webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Entry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Entry */ "./components/Entry.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__);




var _jsxFileName = "C:\\Users\\omare\\Desktop\\blog\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;






var testEntries;

function getPost() {
  return _getPost.apply(this, arguments);
}

function _getPost() {
  _getPost = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('https://omaredu.github.io/blogs/entries.json').then(function (res) {
              testEntries = JSON.parse(res);
            }).then(function (json) {
              console.log(json);
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getPost.apply(this, arguments);
}

var index =
/*#__PURE__*/
function () {
  function index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, index);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(index, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        style: {
          overflow: 'hidden',
          borderRadius: '5px'
        },
        className: "jsx-481072388",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, __jsx("title", {
        className: "jsx-481072388",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "Omaredu | Blog")), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-481072388" + " " + "postsContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, testEntries.map(function (entry) {
        return __jsx(_components_Entry__WEBPACK_IMPORTED_MODULE_8__["default"], {
          id: entry.id,
          key: entry.id,
          title: entry.title,
          content: entry.content,
          images: entry.images,
          tags: entry.tags.split(" "),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        });
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
        id: "481072388",
        __self: this
      }, "@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');*.jsx-481072388{font-family:'Poppins',sans-serif;margin:0;padding:0;}.postsContainer.jsx-481072388{width:50vw;margin:auto;}@media (max-width:950px){.post.jsx-481072388 img.jsx-481072388{width:90vw;}.post.jsx-481072388{width:90vw;}.postsContainer.jsx-481072388{width:90vw;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcb21hcmVcXERlc2t0b3BcXGJsb2dcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Q29CLEFBRW9GLEFBR3ZDLEFBTXZCLEFBTUUsQUFJQSxBQUlBLFdBYkQsQUFNWixBQUlBLEFBSUEsWUFiRixVQVBXLFNBQ0MsVUFDWiIsImZpbGUiOiJDOlxcVXNlcnNcXG9tYXJlXFxEZXNrdG9wXFxibG9nXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgRW50cnkgZnJvbSAnLi4vY29tcG9uZW50cy9FbnRyeSdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXG5cbmltcG9ydCAnaXNvbW9ycGhpYy11bmZldGNoJ1xuXG52YXIgdGVzdEVudHJpZXM7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFBvc3QoKSB7XG4gIGF3YWl0IGZldGNoKCdodHRwczovL29tYXJlZHUuZ2l0aHViLmlvL2Jsb2dzL2VudHJpZXMuanNvbicpLnRoZW4ocmVzID0+IHtcbiAgICB0ZXN0RW50cmllcyA9IEpTT04ucGFyc2UocmVzKVxuICB9KS50aGVuKGpzb24gPT4ge1xuICAgIGNvbnNvbGUubG9nKGpzb24pXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGluZGV4IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7IG92ZXJmbG93OiAnaGlkZGVuJywgYm9yZGVyUmFkaXVzOiAnNXB4JyB9fT5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPk9tYXJlZHUgfCBCbG9nPC90aXRsZT5cblxuICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgPEhlYWRlciAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdHNDb250YWluZXJcIj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXN0RW50cmllcy5tYXAoZW50cnkgPT5cbiAgICAgICAgICAgICAgPEVudHJ5XG4gICAgICAgICAgICAgICAgaWQ9e2VudHJ5LmlkfVxuICAgICAgICAgICAgICAgIGtleT17ZW50cnkuaWR9XG4gICAgICAgICAgICAgICAgdGl0bGU9e2VudHJ5LnRpdGxlfVxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2VudHJ5LmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgaW1hZ2VzPXtlbnRyeS5pbWFnZXN9XG4gICAgICAgICAgICAgICAgdGFncz17ZW50cnkudGFncy5zcGxpdChcIiBcIil9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGlucyZkaXNwbGF5PXN3YXAnKTtcblxuICAgICAgICAqIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3RzQ29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogNTB2dztcbiAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIHtcbiAgICAgICAgICAucG9zdCBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDkwdnc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnBvc3Qge1xuICAgICAgICAgICAgd2lkdGg6IDkwdnc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnBvc3RzQ29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiA5MHZ3O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgYH08L3N0eWxlPlxuXG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=C:\\Users\\omare\\Desktop\\blog\\pages\\index.js */"));
    }
  }]);

  return index;
}();



/***/ })

})
//# sourceMappingURL=index.js.8f6c50782b2a614849f9.hot-update.js.map