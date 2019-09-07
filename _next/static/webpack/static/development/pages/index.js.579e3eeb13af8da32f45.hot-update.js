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
        className: "jsx-3177562795",
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
        className: "jsx-3177562795",
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
        className: "jsx-3177562795" + " " + "postsContainer",
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
        id: "3177562795",
        __self: this
      }, "@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');*.jsx-3177562795{font-family:'Poppins',sans-serif;margin:0;padding:0;}.tags.jsx-3177562795{float:right;}.postsContainer.jsx-3177562795{width:50vw;margin:auto;}@media (max-width:950px){.post.jsx-3177562795 img.jsx-3177562795{width:90vw;}.post.jsx-3177562795{width:90vw;}.postsContainer.jsx-3177562795{width:90vw;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcb21hcmVcXERlc2t0b3BcXGJsb2dcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Q29CLEFBRW9GLEFBR3ZDLEFBTXRCLEFBSUQsQUFNRSxBQUlBLEFBSUEsV0FiRCxBQU1aLEFBSUEsQUFJQSxDQWxCRixXQUtBLFVBWFcsU0FDQyxVQUNaIiwiZmlsZSI6IkM6XFxVc2Vyc1xcb21hcmVcXERlc2t0b3BcXGJsb2dcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBFbnRyeSBmcm9tICcuLi9jb21wb25lbnRzL0VudHJ5J1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcblxuaW1wb3J0ICdpc29tb3JwaGljLXVuZmV0Y2gnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuICAgIGxldCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9vbWFyZWR1LmdpdGh1Yi5pby9ibG9ncy9lbnRyaWVzLmpzb24nKVxuICAgIGxldCBlbnRyaWVzT2JqID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIHJldHVybiB7IGVudHJpZXM6IGVudHJpZXNPYmogfVxuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5PbWFyZWR1IHwgQmxvZzwvdGl0bGU+XG5cbiAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgIDxIZWFkZXIgLz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RzQ29udGFpbmVyXCI+XG4gICAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5lbnRyaWVzLm1hcChlbnRyeSA9PlxuICAgICAgICAgICAgICA8RW50cnlcbiAgICAgICAgICAgICAgICBpZD17ZW50cnkuaWR9XG4gICAgICAgICAgICAgICAga2V5PXtlbnRyeS5pZH1cbiAgICAgICAgICAgICAgICB0aXRsZT17ZW50cnkudGl0bGV9XG4gICAgICAgICAgICAgICAgY29udGVudD17ZW50cnkuY29udGVudH1cbiAgICAgICAgICAgICAgICBpbWFnZXM9e2VudHJ5LmltYWdlc31cbiAgICAgICAgICAgICAgICAvL3RhZ3M9e2VudHJ5LnRhZ3Muc3BsaXQoXCIgXCIpfVxuICAgICAgICAgICAgICAgIHRhZ3M9e1tcImhvbGFcIiwgXCJtdW5kb1wiLCBcImNydWVsXCJdfVxuICAgICAgICAgICAgICAgIGRhdGU9XCJob2xcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnMmZGlzcGxheT1zd2FwJyk7XG5cbiAgICAgICAgKiB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50YWdzIHtcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdHNDb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiA1MHZ3O1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkge1xuICAgICAgICAgIC5wb3N0IGltZyB7XG4gICAgICAgICAgICB3aWR0aDogOTB2dztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucG9zdCB7XG4gICAgICAgICAgICB3aWR0aDogOTB2dztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucG9zdHNDb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDkwdnc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG4iXX0= */\n/*@ sourceURL=C:\\Users\\omare\\Desktop\\blog\\pages\\index.js */"));
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
//# sourceMappingURL=index.js.579e3eeb13af8da32f45.hot-update.js.map