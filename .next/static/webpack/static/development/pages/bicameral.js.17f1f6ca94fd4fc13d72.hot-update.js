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
        lineNumber: 13
      },
      __self: this
    });
  }

  if (statusCode !== 200) {
    return __jsx(_components_PageError__WEBPACK_IMPORTED_MODULE_9__["default"], {
      error: error,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    });
  }

  return __jsx("div", {
    className: "jsx-2049811647",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2049811647" + " " + "Badges",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2049811647" + " " + "Badges__hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2049811647" + " " + "Badges__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("img", {
    src: _static_LOGO_MOVENU_BLANCO_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "Conf Logo",
    className: "jsx-2049811647" + " " + "Badges_conf-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })))), __jsx("div", {
    className: "jsx-2049811647" + " " + "Badges__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2049811647" + " " + "Badges__list__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2049811647" + " " + "Badges__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2049811647" + " " + "Badges__buttons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    to: "/comite/bicameral/new",
    className: "btn btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Nuevo delegado"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    to: "/directive/new",
    className: "btn btn-secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Nueva Directiva")), __jsx(_components_BicameralList__WEBPACK_IMPORTED_MODULE_6__["default"], {
    badges: data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), loading && __jsx(_components_MiniLoader__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-2049811647" + " " + "Badges__list__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2049811647" + " " + "Badges__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2049811647" + " " + "Badges__buttons_two",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    to: "/comite/bicameral/new",
    className: "btn btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Nuevo delegado"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    to: "/directive/newTwo",
    className: "btn btn-secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Nueva Directiva")), __jsx(_components_BicameralListTwo__WEBPACK_IMPORTED_MODULE_7__["default"], {
    badges: data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), loading && __jsx(_components_MiniLoader__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2049811647",
    __self: this
  }, ".Badges__hero.jsx-2049811647{width:100%;padding:2rem 0;background:url('../../images/stars.svg'),#1B1B25;background-repeat:repeat;margin-bottom:1rem;}.Badges__hero.jsx-2049811647>.Badges__container.jsx-2049811647{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.Badges__container.jsx-2049811647{width:100%;height:auto;padding:0 1rem;}.Badges__list__container.jsx-2049811647{width:50%;height:auto;max-width:1080px;padding:0 1rem;display:inline-table;}.Badges__list__container.jsx-2049811647>.form-group.jsx-2049811647{display:inline-block;width:50%;padding:10px;}.Badges__list__container.jsx-2049811647>.Badges__buttons.jsx-2049811647{display:inline-block;width:50%;padding:10px;}.Badges__list__container.jsx-2049811647>.Badges__buttons_two.jsx-2049811647{display:inline-block;width:50%;padding:10px;}.Badges_conf-logo.jsx-2049811647{margin-bottom:2rem;width:260px;}.Badges__buttons.jsx-2049811647{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;margin-bottom:1rem;}.Badges__buttons_two.jsx-2049811647{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;margin-bottom:1rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbGJyaXRvXFxEcm9wYm94XFxEZXNhcnJvbGxvc1xcTW92ZW51IFZlcnNpb24gMjAxOVxccGFnZXNcXGJpY2FtZXJhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRWtCLEFBR29CLEFBUUUsQUFNRixBQU1ELEFBU1csQUFPQSxBQUtBLEFBUUYsQUFLTixBQUtBLFVBdENELENBcEJHLEFBY0gsUUFtQ0EsRUFwQkYsQUFPQSxBQUtBLENBcEJPLENBTkYsR0FkbUMsS0E2QnJDLEFBT0EsQUFLQSxBQVFmLE9BbENBLENBTWlCLEtBU2pCLEFBT0EsQUFLQSxVQXBCdUIsb0JBZkMsQUE4Q0ssQUFLRixDQXpEQSxBQXVCM0IseUJBdEJxQixtQkFDckIsaUNBS3FCLG1CQW1EQSxRQUxBLFdBTXJCLFFBTEEsK0NBOUNBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbGJyaXRvXFxEcm9wYm94XFxEZXNhcnJvbGxvc1xcTW92ZW51IFZlcnNpb24gMjAxOVxccGFnZXNcXGJpY2FtZXJhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBjb25mTG9nbyBmcm9tICcuLi9zdGF0aWMvTE9HTy1NT1ZFTlUtQkxBTkNPLnBuZyc7XHJcbmltcG9ydCBCaWNhbWVyYWxMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvQmljYW1lcmFsTGlzdCc7XHJcbmltcG9ydCBCaWNhbWVyYWxMaXN0VHdvIGZyb20gJy4uL2NvbXBvbmVudHMvQmljYW1lcmFsTGlzdFR3byc7XHJcbmltcG9ydCBQYWdlTG9hZGluZyBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2VMb2FkaW5nJztcclxuaW1wb3J0IFBhZ2VFcnJvciBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2VFcnJvcic7XHJcbmltcG9ydCBNaW5pTG9hZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvTWluaUxvYWRlcic7XHJcblxyXG5cclxuY29uc3QgQmljYW1lcmFsID0gKHByb3BzKSA9PiAge1xyXG4gICAgY29uc3Qge2RhdGEsIHN0YXR1c0NvZGV9ID0gcHJvcHM7XHJcbiAgICBpZiAoIWRhdGEpIHtcclxuICAgICAgcmV0dXJuIDxQYWdlTG9hZGluZyAvPjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc3RhdHVzQ29kZSE9PSAyMDApIHtcclxuICAgICAgcmV0dXJuIDxQYWdlRXJyb3IgZXJyb3I9e2Vycm9yfSAvPjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJhZGdlc1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJCYWRnZXNfX2hlcm9cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJCYWRnZXNfX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIkJhZGdlc19jb25mLWxvZ29cIlxyXG4gICAgICAgICAgICAgICAgc3JjPXtjb25mTG9nb31cclxuICAgICAgICAgICAgICAgIGFsdD1cIkNvbmYgTG9nb1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJhZGdlc19fY29udGFpbmVyXCI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJhZGdlc19fbGlzdF9fY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJCYWRnZXNfX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJCYWRnZXNfX2J1dHRvbnNcIj5cclxuICAgICAgICAgICAgPExpbmsgdG89XCIvY29taXRlL2JpY2FtZXJhbC9uZXdcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICBOdWV2byBkZWxlZ2Fkb1xyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL2RpcmVjdGl2ZS9uZXdcIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgTnVldmEgRGlyZWN0aXZhXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxCaWNhbWVyYWxMaXN0IGJhZGdlcz17ZGF0YX0vPlxyXG5cclxuICAgICAgICAgIHtsb2FkaW5nICYmIDxNaW5pTG9hZGVyIC8+fVxyXG4gICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJhZGdlc19fbGlzdF9fY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJCYWRnZXNfX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJCYWRnZXNfX2J1dHRvbnNfdHdvXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL2NvbWl0ZS9iaWNhbWVyYWwvbmV3XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgTnVldm8gZGVsZWdhZG9cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayB0bz1cIi9kaXJlY3RpdmUvbmV3VHdvXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICBOdWV2YSBEaXJlY3RpdmFcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8QmljYW1lcmFsTGlzdFR3byBiYWRnZXM9e2RhdGF9Lz5cclxuXHJcbiAgICAgICAgICB7bG9hZGluZyAmJiA8TWluaUxvYWRlciAvPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAuQmFkZ2VzX19oZXJvIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAycmVtIDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9pbWFnZXMvc3RhcnMuc3ZnJyksICMxQjFCMjU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuQmFkZ2VzX19oZXJvPi5CYWRnZXNfX2NvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5CYWRnZXNfX2NvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgICAgfSAgXHJcbiAgICAgIFxyXG4gICAgICAuQmFkZ2VzX19saXN0X19jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1heC13aWR0aDogMTA4MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XHJcbiAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLkJhZGdlc19fbGlzdF9fY29udGFpbmVyPi5mb3JtLWdyb3Vwe1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1CT1RPTkVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgICAgXHJcbiAgICAgIC5CYWRnZXNfX2xpc3RfX2NvbnRhaW5lcj4uQmFkZ2VzX19idXR0b25ze1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLkJhZGdlc19fbGlzdF9fY29udGFpbmVyPi5CYWRnZXNfX2J1dHRvbnNfdHdve1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQk9UT05FUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgICAgIFxyXG4gICAgICAuQmFkZ2VzX2NvbmYtbG9nbyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgICAgICB3aWR0aDogMjYwcHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5CYWRnZXNfX2J1dHRvbnMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgIH1cclxuICAgICAgLkJhZGdlc19fYnV0dG9uc190d28ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIFxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgQmljYW1lcmFsLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHJlcyB9KSA9PiB7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IHJlcSA9IGF3YWl0IGZldGNoKCdodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3RlcicpO1xyXG4gICAgICAvKiBsZXQgcmVxID0gYXdhaXQgYXBpLmJhZGdlcy5saXN0KCk7ICovXHJcbiAgICAgIGxldCB7ZGF0YX0gPSBhd2FpdCByZXEuanNvbigpO1xyXG5cclxuICAgICAgcmV0dXJuIHtkYXRhOiByZXN1bHRzICwgc3RhdHVzQ29kZTogMjAwfVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSA1MDNcclxuICAgICAgICByZXR1cm57ZGF0YTogbnVsbCwgc3RhdHVzQ29kZTogNTAzIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJpY2FtZXJhbDsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\lbrito\\\\Dropbox\\\\Desarrollos\\\\Movenu Version 2019\\\\pages\\\\bicameral.js */"));
};

Bicameral.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var res, req, _ref3, data;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            res = _ref.res;
            _context.prev = 1;
            _context.next = 4;
            return fetch('https://rickandmortyapi.com/api/character');

          case 4:
            req = _context.sent;
            _context.next = 7;
            return req.json();

          case 7:
            _ref3 = _context.sent;
            data = _ref3.data;
            return _context.abrupt("return", {
              data: results,
              statusCode: 200
            });

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](1);
            res.statusCode = 503;
            return _context.abrupt("return", {
              data: null,
              statusCode: 503
            });

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 12]]);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Bicameral);

/***/ })

})
//# sourceMappingURL=bicameral.js.17f1f6ca94fd4fc13d72.hot-update.js.map