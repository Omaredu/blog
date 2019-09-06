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
            return fetch('http://omaredu.github.io/blogs/entries.json').then(function (res) {
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
      lineNumber: 30
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
        lineNumber: 33
      },
      __self: this
    });
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "481072388",
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');*.jsx-481072388{font-family:'Poppins',sans-serif;margin:0;padding:0;}.postsContainer.jsx-481072388{width:50vw;margin:auto;}@media (max-width:950px){.post.jsx-481072388 img.jsx-481072388{width:90vw;}.post.jsx-481072388{width:90vw;}.postsContainer.jsx-481072388{width:90vw;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcb21hcmVcXERlc2t0b3BcXGJsb2dcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Q2dCLEFBRW9GLEFBR3ZDLEFBTXZCLEFBTUUsQUFJQSxBQUlBLFdBYkQsQUFNWixBQUlBLEFBSUEsWUFiRixVQVBXLFNBQ0MsVUFDWiIsImZpbGUiOiJDOlxcVXNlcnNcXG9tYXJlXFxEZXNrdG9wXFxibG9nXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgRW50cnkgZnJvbSAnLi4vY29tcG9uZW50cy9FbnRyeSdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXG5cbmltcG9ydCAnaXNvbW9ycGhpYy11bmZldGNoJ1xuXG52YXIgdGVzdEVudHJpZXM7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFBvc3QoKSB7XG4gIGF3YWl0IGZldGNoKCdodHRwOi8vb21hcmVkdS5naXRodWIuaW8vYmxvZ3MvZW50cmllcy5qc29uJykudGhlbihyZXMgPT4ge1xuICAgIHRlc3RFbnRyaWVzID0gSlNPTi5wYXJzZShyZXMpXG4gIH0pLnRoZW4oanNvbiA9PiB7XG4gICAgY29uc29sZS5sb2coanNvbilcbiAgfSlcbn1cblxuY29uc3QgSG9tZSA9ICgpID0+IChcbiAgPGRpdiBzdHlsZT17e292ZXJmbG93OiAnaGlkZGVuJywgYm9yZGVyUmFkaXVzOiAnNXB4J319PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPk9tYXJlZHUgfCBCbG9nPC90aXRsZT5cbiAgICAgIFxuICAgIDwvSGVhZD5cblxuICAgIDxIZWFkZXIgLz5cblxuICAgIHtnZXRQb3N0KCl9XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RzQ29udGFpbmVyXCI+XG4gICAgICB7XG4gICAgICAgIHRlc3RFbnRyaWVzLm1hcChlbnRyeSA9PlxuICAgICAgICAgIDxFbnRyeVxuICAgICAgICAgICAgaWQ9e2VudHJ5LmlkfVxuICAgICAgICAgICAga2V5PXtlbnRyeS5pZH1cbiAgICAgICAgICAgIHRpdGxlPXtlbnRyeS50aXRsZX1cbiAgICAgICAgICAgIGNvbnRlbnQ9e2VudHJ5LmNvbnRlbnR9XG4gICAgICAgICAgICBpbWFnZXM9e2VudHJ5LmltYWdlc31cbiAgICAgICAgICAgIHRhZ3M9e2VudHJ5LnRhZ3Muc3BsaXQoXCIgXCIpfVxuICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICA8L2Rpdj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcCcpO1xuXG4gICAgICAgICoge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdHNDb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiA1MHZ3O1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkge1xuICAgICAgICAgIC5wb3N0IGltZyB7XG4gICAgICAgICAgICB3aWR0aDogOTB2dztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucG9zdCB7XG4gICAgICAgICAgICB3aWR0aDogOTB2dztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucG9zdHNDb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDkwdnc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICBgfTwvc3R5bGU+XG4gICAgXG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXX0= */\n/*@ sourceURL=C:\\Users\\omare\\Desktop\\blog\\pages\\index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.2f26ae08b1bf839b7759.hot-update.js.map