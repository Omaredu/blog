webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Entry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Entry */ "./components/Entry.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "C:\\Users\\omare\\Desktop\\blog\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;






var testEntries;

function getPost() {
  return _getPost.apply(this, arguments);
}

function _getPost() {
  _getPost = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
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

var Home = function Home() {
  return __jsx("div", {
    style: {
      overflow: 'hidden',
      borderRadius: '5px'
    },
    className: "jsx-481072388",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
  }, "Omaredu | Blog")), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), getPost(), __jsx("div", {
    className: "jsx-481072388" + " " + "postsContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, testEntries.map(function (entry) {
    return __jsx(_components_Entry__WEBPACK_IMPORTED_MODULE_6__["default"], {
      id: entry.id,
      key: entry.id,
      title: entry.title,
      content: entry.content,
      images: entry.images,
      tags: entry.tags.split(" "),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    });
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "481072388",
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');*.jsx-481072388{font-family:'Poppins',sans-serif;margin:0;padding:0;}.postsContainer.jsx-481072388{width:50vw;margin:auto;}@media (max-width:950px){.post.jsx-481072388 img.jsx-481072388{width:90vw;}.post.jsx-481072388{width:90vw;}.postsContainer.jsx-481072388{width:90vw;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcb21hcmVcXERlc2t0b3BcXGJsb2dcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQ2dCLEFBRW9GLEFBR3ZDLEFBTXZCLEFBTUUsQUFJQSxBQUlBLFdBYkQsQUFNWixBQUlBLEFBSUEsWUFiRixVQVBXLFNBQ0MsVUFDWiIsImZpbGUiOiJDOlxcVXNlcnNcXG9tYXJlXFxEZXNrdG9wXFxibG9nXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgRW50cnkgZnJvbSAnLi4vY29tcG9uZW50cy9FbnRyeSdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXG5cbmltcG9ydCAnaXNvbW9ycGhpYy11bmZldGNoJ1xuXG52YXIgdGVzdEVudHJpZXM7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFBvc3QoKSB7XG4gIGF3YWl0IGZldGNoKCdodHRwczovL29tYXJlZHUuZ2l0aHViLmlvL2Jsb2dzL2VudHJpZXMuanNvbicpLnRoZW4ocmVzID0+IHtcbiAgICB0ZXN0RW50cmllcyA9IEpTT04ucGFyc2UocmVzKVxuICB9KS50aGVuKGpzb24gPT4ge1xuICAgIGNvbnNvbGUubG9nKGpzb24pXG4gIH0pXG59XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiAoXG4gIDxkaXYgc3R5bGU9e3tvdmVyZmxvdzogJ2hpZGRlbicsIGJvcmRlclJhZGl1czogJzVweCd9fT5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5PbWFyZWR1IHwgQmxvZzwvdGl0bGU+XG4gICAgICBcbiAgICA8L0hlYWQ+XG5cbiAgICA8SGVhZGVyIC8+XG5cbiAgICB7Z2V0UG9zdCgpfVxuICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdHNDb250YWluZXJcIj5cbiAgICAgIHtcbiAgICAgICAgdGVzdEVudHJpZXMubWFwKGVudHJ5ID0+XG4gICAgICAgICAgPEVudHJ5XG4gICAgICAgICAgICBpZD17ZW50cnkuaWR9XG4gICAgICAgICAgICBrZXk9e2VudHJ5LmlkfVxuICAgICAgICAgICAgdGl0bGU9e2VudHJ5LnRpdGxlfVxuICAgICAgICAgICAgY29udGVudD17ZW50cnkuY29udGVudH1cbiAgICAgICAgICAgIGltYWdlcz17ZW50cnkuaW1hZ2VzfVxuICAgICAgICAgICAgdGFncz17ZW50cnkudGFncy5zcGxpdChcIiBcIil9XG4gICAgICAgICAgLz5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIDwvZGl2PlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnMmZGlzcGxheT1zd2FwJyk7XG5cbiAgICAgICAgKiB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0c0NvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDUwdnc7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSB7XG4gICAgICAgICAgLnBvc3QgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiA5MHZ3O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wb3N0IHtcbiAgICAgICAgICAgIHdpZHRoOiA5MHZ3O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wb3N0c0NvbnRhaW5lciB7XG4gICAgICAgICAgICB3aWR0aDogOTB2dztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIGB9PC9zdHlsZT5cbiAgICBcbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\omare\\Desktop\\blog\\pages\\index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.26656b0b769f535b8367.hot-update.js.map