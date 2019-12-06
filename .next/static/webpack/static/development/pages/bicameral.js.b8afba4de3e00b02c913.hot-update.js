webpackHotUpdate("static\\development\\pages\\bicameral.js",{

/***/ "./pages/bicameral.js":
/*!****************************!*\
  !*** ./pages/bicameral.js ***!
  \****************************/
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
/* harmony import */ var _static_LOGO_MOVENU_BLANCO_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/LOGO-MOVENU-BLANCO.png */ "./static/LOGO-MOVENU-BLANCO.png");
/* harmony import */ var _static_LOGO_MOVENU_BLANCO_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_LOGO_MOVENU_BLANCO_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_BicameralList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/BicameralList */ "./components/BicameralList.js");
/* harmony import */ var _components_BicameralListTwo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/BicameralListTwo */ "./components/BicameralListTwo.js");
/* harmony import */ var _components_PageLoading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/PageLoading */ "./components/PageLoading.js");
/* harmony import */ var _components_PageError__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/PageError */ "./components/PageError.js");
/* harmony import */ var _components_MiniLoader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/MiniLoader */ "./components/MiniLoader.js");


var _jsxFileName = "C:\\Users\\lbrito\\Dropbox\\Desarrollos\\Movenu Version 2019\\pages\\bicameral.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;








var Bicameral = function Bicameral(props) {
  var data = props.data,
      statusCode = props.statusCode;

  if (!data) {
    return __jsx(_components_PageLoading__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    });
  }

  if (statusCode !== 200) {
    return __jsx(_components_PageError__WEBPACK_IMPORTED_MODULE_9__["default"]
    /*  error={error} */
    , {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    });
  }

  return __jsx("div", {
    className: "jsx-2049811647",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2049811647" + " " + "Badges",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2049811647" + " " + "Badges__hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2049811647" + " " + "Badges__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("img", {
    src: _static_LOGO_MOVENU_BLANCO_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "Conf Logo",
    className: "jsx-2049811647" + " " + "Badges_conf-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  })))), __jsx("div", {
    className: "jsx-2049811647" + " " + "Badges__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2049811647" + " " + "Badges__list__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2049811647" + " " + "Badges__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2049811647" + " " + "Badges__buttons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    to: "/comite/bicameral/new",
    className: "btn btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Nuevo delegado"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    to: "/directive/new",
    className: "btn btn-secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Nueva Directiva")), __jsx(_components_BicameralList__WEBPACK_IMPORTED_MODULE_6__["default"], {
    badges: data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), loading && __jsx(_components_MiniLoader__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-2049811647" + " " + "Badges__list__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2049811647" + " " + "Badges__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2049811647" + " " + "Badges__buttons_two",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    to: "/comite/bicameral/new",
    className: "btn btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Nuevo delegado"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    to: "/directive/newTwo",
    className: "btn btn-secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Nueva Directiva")), __jsx(_components_BicameralListTwo__WEBPACK_IMPORTED_MODULE_7__["default"], {
    badges: data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), loading && __jsx(_components_MiniLoader__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2049811647",
    __self: this
  }, ".Badges__hero.jsx-2049811647{width:100%;padding:2rem 0;background:url('../../images/stars.svg'),#1B1B25;background-repeat:repeat;margin-bottom:1rem;}.Badges__hero.jsx-2049811647>.Badges__container.jsx-2049811647{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.Badges__container.jsx-2049811647{width:100%;height:auto;padding:0 1rem;}.Badges__list__container.jsx-2049811647{width:50%;height:auto;max-width:1080px;padding:0 1rem;display:inline-table;}.Badges__list__container.jsx-2049811647>.form-group.jsx-2049811647{display:inline-block;width:50%;padding:10px;}.Badges__list__container.jsx-2049811647>.Badges__buttons.jsx-2049811647{display:inline-block;width:50%;padding:10px;}.Badges__list__container.jsx-2049811647>.Badges__buttons_two.jsx-2049811647{display:inline-block;width:50%;padding:10px;}.Badges_conf-logo.jsx-2049811647{margin-bottom:2rem;width:260px;}.Badges__buttons.jsx-2049811647{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;margin-bottom:1rem;}.Badges__buttons_two.jsx-2049811647{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;margin-bottom:1rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbGJyaXRvXFxEcm9wYm94XFxEZXNhcnJvbGxvc1xcTW92ZW51IFZlcnNpb24gMjAxOVxccGFnZXNcXGJpY2FtZXJhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRWtCLEFBR29CLEFBUUUsQUFNRixBQU1ELEFBU1csQUFPQSxBQUtBLEFBUUYsQUFLTixBQUtBLFVBdENELENBcEJHLEFBY0gsUUFtQ0EsRUFwQkYsQUFPQSxBQUtBLENBcEJPLENBTkYsR0FkbUMsS0E2QnJDLEFBT0EsQUFLQSxBQVFmLE9BbENBLENBTWlCLEtBU2pCLEFBT0EsQUFLQSxVQXBCdUIsb0JBZkMsQUE4Q0ssQUFLRixDQXpEQSxBQXVCM0IseUJBdEJxQixtQkFDckIsaUNBS3FCLG1CQW1EQSxRQUxBLFdBTXJCLFFBTEEsK0NBOUNBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbGJyaXRvXFxEcm9wYm94XFxEZXNhcnJvbGxvc1xcTW92ZW51IFZlcnNpb24gMjAxOVxccGFnZXNcXGJpY2FtZXJhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgY29uZkxvZ28gZnJvbSAnLi4vc3RhdGljL0xPR08tTU9WRU5VLUJMQU5DTy5wbmcnO1xyXG5pbXBvcnQgQmljYW1lcmFsTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0JpY2FtZXJhbExpc3QnO1xyXG5pbXBvcnQgQmljYW1lcmFsTGlzdFR3byBmcm9tICcuLi9jb21wb25lbnRzL0JpY2FtZXJhbExpc3RUd28nO1xyXG5pbXBvcnQgUGFnZUxvYWRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlTG9hZGluZyc7XHJcbmltcG9ydCBQYWdlRXJyb3IgZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlRXJyb3InO1xyXG5pbXBvcnQgTWluaUxvYWRlciBmcm9tICcuLi9jb21wb25lbnRzL01pbmlMb2FkZXInO1xyXG5cclxuXHJcbmNvbnN0IEJpY2FtZXJhbCA9IChwcm9wcykgPT4gIHtcclxuICAgIGNvbnN0IHtkYXRhLCBzdGF0dXNDb2RlfSA9IHByb3BzO1xyXG4gICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgIHJldHVybiA8UGFnZUxvYWRpbmcgLz47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHN0YXR1c0NvZGUhPT0gMjAwKSB7XHJcbiAgICAgIHJldHVybiA8UGFnZUVycm9yLyogIGVycm9yPXtlcnJvcn0gKi8gLz47XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJCYWRnZXNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQmFkZ2VzX19oZXJvXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQmFkZ2VzX19jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJCYWRnZXNfY29uZi1sb2dvXCJcclxuICAgICAgICAgICAgICAgIHNyYz17Y29uZkxvZ299XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJDb25mIExvZ29cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJCYWRnZXNfX2NvbnRhaW5lclwiPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJCYWRnZXNfX2xpc3RfX2NvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQmFkZ2VzX19jb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQmFkZ2VzX19idXR0b25zXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL2NvbWl0ZS9iaWNhbWVyYWwvbmV3XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgTnVldm8gZGVsZWdhZG9cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayB0bz1cIi9kaXJlY3RpdmUvbmV3XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgIE51ZXZhIERpcmVjdGl2YVxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8QmljYW1lcmFsTGlzdCBiYWRnZXM9e2RhdGF9Lz5cclxuXHJcbiAgICAgICAgICB7bG9hZGluZyAmJiA8TWluaUxvYWRlciAvPn1cclxuICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJCYWRnZXNfX2xpc3RfX2NvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQmFkZ2VzX19jb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQmFkZ2VzX19idXR0b25zX3R3b1wiPlxyXG4gICAgICAgICAgICA8TGluayB0bz1cIi9jb21pdGUvYmljYW1lcmFsL25ld1wiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgIE51ZXZvIGRlbGVnYWRvXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgdG89XCIvZGlyZWN0aXZlL25ld1R3b1wiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgTnVldmEgRGlyZWN0aXZhXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPEJpY2FtZXJhbExpc3RUd28gYmFkZ2VzPXtkYXRhfS8+XHJcblxyXG4gICAgICAgICAge2xvYWRpbmcgJiYgPE1pbmlMb2FkZXIgLz59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgLkJhZGdlc19faGVybyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMnJlbSAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vaW1hZ2VzL3N0YXJzLnN2ZycpLCAjMUIxQjI1O1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLkJhZGdlc19faGVybz4uQmFkZ2VzX19jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuQmFkZ2VzX19jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICAgIH0gIFxyXG4gICAgICBcclxuICAgICAgLkJhZGdlc19fbGlzdF9fY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBtYXgtd2lkdGg6IDEwODBweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xyXG4gICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5CYWRnZXNfX2xpc3RfX2NvbnRhaW5lcj4uZm9ybS1ncm91cHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQk9UT05FUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgICAgIFxyXG4gICAgICAuQmFkZ2VzX19saXN0X19jb250YWluZXI+LkJhZGdlc19fYnV0dG9uc3tcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5CYWRnZXNfX2xpc3RfX2NvbnRhaW5lcj4uQmFkZ2VzX19idXR0b25zX3R3b3tcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUJPVE9ORVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgICBcclxuICAgICAgLkJhZGdlc19jb25mLWxvZ28ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgICAgd2lkdGg6IDI2MHB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuQmFkZ2VzX19idXR0b25zIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICB9XHJcbiAgICAgIC5CYWRnZXNfX2J1dHRvbnNfdHdvIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICBcclxuICAgIClcclxuICB9XHJcblxyXG4gIEJpY2FtZXJhbC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyByZXMgfSkgPT4ge1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCByZXEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvJyk7XHJcbiAgICAgIC8qIGxldCByZXEgPSBhd2FpdCBhcGkuYmFkZ2VzLmxpc3QoKTsgKi9cclxuICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXEuanNvbigpO1xyXG5cclxuICAgICAgcmV0dXJuIHtkYXRhICwgc3RhdHVzQ29kZTogMjAwfVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSA1MDNcclxuICAgICAgICByZXR1cm57ZGF0YTogbnVsbCwgc3RhdHVzQ29kZTogNTAzIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJpY2FtZXJhbDsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\lbrito\\\\Dropbox\\\\Desarrollos\\\\Movenu Version 2019\\\\pages\\\\bicameral.js */"));
};

Bicameral.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var res, req, data;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            res = _ref.res;
            _context.prev = 1;
            _context.next = 4;
            return fetch('https://rickandmortyapi.com/api/character/');

          case 4:
            req = _context.sent;
            _context.next = 7;
            return req.json();

          case 7:
            data = _context.sent;
            return _context.abrupt("return", {
              data: data,
              statusCode: 200
            });

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](1);
            res.statusCode = 503;
            return _context.abrupt("return", {
              data: null,
              statusCode: 503
            });

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 11]]);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Bicameral);

/***/ })

})
//# sourceMappingURL=bicameral.js.b8afba4de3e00b02c913.hot-update.js.map