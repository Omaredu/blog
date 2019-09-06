webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Entry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Entry */ "./components/Entry.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
var _jsxFileName = "C:\\Users\\omare\\Desktop\\blog\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var testEntries = [{
  id: 1,
  title: "Hola Mundo",
  content: "mi primera entrada del blog solo que esto es una prueb pequeña para ver si funciona todo esto y que no se salga de control la situación",
  images: [{
    url: "https://i.imgur.com/pY2S6oM.png"
  }],
  tags: "alo jesucristo amén"
}, {
  id: 2,
  title: "Hola Mundo",
  content: "mi primera entrada del blog solo que esto es una prueb pequeña para ver si funciona todo esto y que no se salga de control la situación",
  tags: "normal diario"
}, {
  id: 3,
  title: "Yeah Mundo",
  content: "mi primera entrada del blog solo que esto es una prueb pequeña para ver si funciona todo esto y que no se salga de control la situación",
  images: [{
    url: "https://i.imgur.com/wxQeicK.png"
  }],
  tags: "alo jesucristo amén asi"
}];

var Home = function Home() {
  return __jsx("div", {
    style: {
      overflow: 'hidden',
      borderRadius: '5px'
    },
    className: "jsx-3484297961",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-3484297961",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Omaredu | Blog")), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3484297961" + " " + "postsContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, testEntries.map(function (entry) {
    return __jsx(_components_Entry__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: entry.id,
      key: entry.id,
      title: entry.title,
      content: entry.content,
      images: entry.images,
      tags: entry.tags.split(" "),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    });
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3484297961",
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');*.jsx-3484297961{font-family:'Poppins',sans-serif;margin:0;padding:0;}.postsContainer.jsx-3484297961{width:50vw;margin:auto;}.post.jsx-3484297961 img.jsx-3484297961{width:50vw;}.post.jsx-3484297961{width:50vw;}.postsContainer.jsx-3484297961{width:50vw;}@media (max-width:950px){.post.jsx-3484297961 img.jsx-3484297961{width:90vw;}.post.jsx-3484297961{width:90vw;}.postsContainer.jsx-3484297961{width:90vw;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcb21hcmVcXERlc2t0b3BcXGJsb2dcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RGdCLEFBRW9GLEFBR3ZDLEFBTXZCLEFBS0UsQUFJRixBQUlBLEFBS0UsQUFJQSxBQUlBLFdBekJELEFBS2QsQUFJQSxBQUlBLEFBS0UsQUFJQSxBQUlBLFlBekJGLFVBUFcsU0FDQyxVQUNaIiwiZmlsZSI6IkM6XFxVc2Vyc1xcb21hcmVcXERlc2t0b3BcXGJsb2dcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBFbnRyeSBmcm9tICcuLi9jb21wb25lbnRzL0VudHJ5J1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcblxuY29uc3QgdGVzdEVudHJpZXMgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICB0aXRsZTogXCJIb2xhIE11bmRvXCIsXG4gICAgY29udGVudDogXCJtaSBwcmltZXJhIGVudHJhZGEgZGVsIGJsb2cgc29sbyBxdWUgZXN0byBlcyB1bmEgcHJ1ZWIgcGVxdWXDsWEgcGFyYSB2ZXIgc2kgZnVuY2lvbmEgdG9kbyBlc3RvIHkgcXVlIG5vIHNlIHNhbGdhIGRlIGNvbnRyb2wgbGEgc2l0dWFjacOzblwiLFxuICAgIGltYWdlczogW1xuICAgICAge1xuICAgICAgICB1cmw6IFwiaHR0cHM6Ly9pLmltZ3VyLmNvbS9wWTJTNm9NLnBuZ1wiXG4gICAgICB9XG4gICAgXSxcbiAgICB0YWdzOiBcImFsbyBqZXN1Y3Jpc3RvIGFtw6luXCJcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIHRpdGxlOiBcIkhvbGEgTXVuZG9cIixcbiAgICBjb250ZW50OiBcIm1pIHByaW1lcmEgZW50cmFkYSBkZWwgYmxvZyBzb2xvIHF1ZSBlc3RvIGVzIHVuYSBwcnVlYiBwZXF1ZcOxYSBwYXJhIHZlciBzaSBmdW5jaW9uYSB0b2RvIGVzdG8geSBxdWUgbm8gc2Ugc2FsZ2EgZGUgY29udHJvbCBsYSBzaXR1YWNpw7NuXCIsXG4gICAgdGFnczogXCJub3JtYWwgZGlhcmlvXCJcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIHRpdGxlOiBcIlllYWggTXVuZG9cIixcbiAgICBjb250ZW50OiBcIm1pIHByaW1lcmEgZW50cmFkYSBkZWwgYmxvZyBzb2xvIHF1ZSBlc3RvIGVzIHVuYSBwcnVlYiBwZXF1ZcOxYSBwYXJhIHZlciBzaSBmdW5jaW9uYSB0b2RvIGVzdG8geSBxdWUgbm8gc2Ugc2FsZ2EgZGUgY29udHJvbCBsYSBzaXR1YWNpw7NuXCIsXG4gICAgaW1hZ2VzOiBbXG4gICAgICB7XG4gICAgICAgIHVybDogXCJodHRwczovL2kuaW1ndXIuY29tL3d4UWVpY0sucG5nXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIHRhZ3M6IFwiYWxvIGplc3VjcmlzdG8gYW3DqW4gYXNpXCJcbiAgfVxuXVxuXG5jb25zdCBIb21lID0gKCkgPT4gKFxuICA8ZGl2IHN0eWxlPXt7b3ZlcmZsb3c6ICdoaWRkZW4nLCBib3JkZXJSYWRpdXM6ICc1cHgnfX0+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+T21hcmVkdSB8IEJsb2c8L3RpdGxlPlxuICAgICAgXG4gICAgPC9IZWFkPlxuXG4gICAgPEhlYWRlciAvPlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0c0NvbnRhaW5lclwiPlxuICAgICAge1xuICAgICAgICB0ZXN0RW50cmllcy5tYXAoZW50cnkgPT5cbiAgICAgICAgICA8RW50cnlcbiAgICAgICAgICAgIGlkPXtlbnRyeS5pZH1cbiAgICAgICAgICAgIGtleT17ZW50cnkuaWR9XG4gICAgICAgICAgICB0aXRsZT17ZW50cnkudGl0bGV9XG4gICAgICAgICAgICBjb250ZW50PXtlbnRyeS5jb250ZW50fVxuICAgICAgICAgICAgaW1hZ2VzPXtlbnRyeS5pbWFnZXN9XG4gICAgICAgICAgICB0YWdzPXtlbnRyeS50YWdzLnNwbGl0KFwiIFwiKX1cbiAgICAgICAgICAvPlxuICAgICAgICApXG4gICAgICB9XG4gICAgPC9kaXY+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGlucyZkaXNwbGF5PXN3YXAnKTtcblxuICAgICAgICAqIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3RzQ29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogNTB2dztcbiAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdCBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDUwdnc7XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdCB7XG4gICAgICAgICAgd2lkdGg6IDUwdnc7XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdHNDb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiA1MHZ3O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSB7XG4gICAgICAgICAgLnBvc3QgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiA5MHZ3O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wb3N0IHtcbiAgICAgICAgICAgIHdpZHRoOiA5MHZ3O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wb3N0c0NvbnRhaW5lciB7XG4gICAgICAgICAgICB3aWR0aDogOTB2dztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIGB9PC9zdHlsZT5cbiAgICBcbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\omare\\Desktop\\blog\\pages\\index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.5e25facea0cb04603d54.hot-update.js.map