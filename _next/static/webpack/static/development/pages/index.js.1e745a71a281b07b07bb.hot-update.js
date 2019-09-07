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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Entry__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Entry */ "./components/Entry.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13__);







var _jsxFileName = "C:\\Users\\omare\\Desktop\\blog\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;







var index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(index, _React$Component);

  function index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(index, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "jsx-481072388",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, __jsx("title", {
        className: "jsx-481072388",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "Omaredu | Blog")), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-481072388" + " " + "postsContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, this.props.entries.map(function (entry) {
        return __jsx(_components_Entry__WEBPACK_IMPORTED_MODULE_11__["default"], {
          id: entry.id,
          key: entry.id,
          title: entry.title,
          content: entry.content,
          images: entry.images //tags={entry.tags.split(" ")}
          ,
          tags: ["hola", "mundo", "cruel"],
          date: "hol",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        });
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "481072388",
        __self: this
      }, "@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');*.jsx-481072388{font-family:'Poppins',sans-serif;margin:0;padding:0;}.postsContainer.jsx-481072388{width:50vw;margin:auto;}@media (max-width:950px){.post.jsx-481072388 img.jsx-481072388{width:90vw;}.post.jsx-481072388{width:90vw;}.postsContainer.jsx-481072388{width:90vw;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcb21hcmVcXERlc2t0b3BcXGJsb2dcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Q29CLEFBRW9GLEFBR3ZDLEFBTXZCLEFBTUUsQUFJQSxBQUlBLFdBYkQsQUFNWixBQUlBLEFBSUEsWUFiRixVQVBXLFNBQ0MsVUFDWiIsImZpbGUiOiJDOlxcVXNlcnNcXG9tYXJlXFxEZXNrdG9wXFxibG9nXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgRW50cnkgZnJvbSAnLi4vY29tcG9uZW50cy9FbnRyeSdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXG5cbmltcG9ydCAnaXNvbW9ycGhpYy11bmZldGNoJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBpbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vb21hcmVkdS5naXRodWIuaW8vYmxvZ3MvZW50cmllcy5qc29uJylcbiAgICBsZXQgZW50cmllc09iaiA9IGF3YWl0IHJlcy5qc29uKClcbiAgICByZXR1cm4geyBlbnRyaWVzOiBlbnRyaWVzT2JqIH1cbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+T21hcmVkdSB8IEJsb2c8L3RpdGxlPlxuXG4gICAgICAgIDwvSGVhZD5cblxuICAgICAgICA8SGVhZGVyIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0c0NvbnRhaW5lclwiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZW50cmllcy5tYXAoZW50cnkgPT5cbiAgICAgICAgICAgICAgPEVudHJ5XG4gICAgICAgICAgICAgICAgaWQ9e2VudHJ5LmlkfVxuICAgICAgICAgICAgICAgIGtleT17ZW50cnkuaWR9XG4gICAgICAgICAgICAgICAgdGl0bGU9e2VudHJ5LnRpdGxlfVxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2VudHJ5LmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgaW1hZ2VzPXtlbnRyeS5pbWFnZXN9XG4gICAgICAgICAgICAgICAgLy90YWdzPXtlbnRyeS50YWdzLnNwbGl0KFwiIFwiKX1cbiAgICAgICAgICAgICAgICB0YWdzPXtbXCJob2xhXCIsIFwibXVuZG9cIiwgXCJjcnVlbFwiXX1cbiAgICAgICAgICAgICAgICBkYXRlPVwiaG9sXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcCcpO1xuXG4gICAgICAgICoge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdHNDb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiA1MHZ3O1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkge1xuICAgICAgICAgIC5wb3N0IGltZyB7XG4gICAgICAgICAgICB3aWR0aDogOTB2dztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucG9zdCB7XG4gICAgICAgICAgICB3aWR0aDogOTB2dztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucG9zdHNDb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDkwdnc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG4iXX0= */\n/*@ sourceURL=C:\\Users\\omare\\Desktop\\blog\\pages\\index.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, entriesObj;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch('https://omaredu.github.io/blogs/entries.json');

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                entriesObj = _context.sent;
                return _context.abrupt("return", {
                  entries: entriesObj
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return index;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.1e745a71a281b07b07bb.hot-update.js.map