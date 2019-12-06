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

  if (data) {
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
  }, ".Badges__hero.jsx-2049811647{width:100%;padding:2rem 0;background:url('../../images/stars.svg'),#1B1B25;background-repeat:repeat;margin-bottom:1rem;}.Badges__hero.jsx-2049811647>.Badges__container.jsx-2049811647{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.Badges__container.jsx-2049811647{width:100%;height:auto;padding:0 1rem;}.Badges__list__container.jsx-2049811647{width:50%;height:auto;max-width:1080px;padding:0 1rem;display:inline-table;}.Badges__list__container.jsx-2049811647>.form-group.jsx-2049811647{display:inline-block;width:50%;padding:10px;}.Badges__list__container.jsx-2049811647>.Badges__buttons.jsx-2049811647{display:inline-block;width:50%;padding:10px;}.Badges__list__container.jsx-2049811647>.Badges__buttons_two.jsx-2049811647{display:inline-block;width:50%;padding:10px;}.Badges_conf-logo.jsx-2049811647{margin-bottom:2rem;width:260px;}.Badges__buttons.jsx-2049811647{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;margin-bottom:1rem;}.Badges__buttons_two.jsx-2049811647{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;margin-bottom:1rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbGJyaXRvXFxEcm9wYm94XFxEZXNhcnJvbGxvc1xcTW92ZW51IFZlcnNpb24gMjAxOVxccGFnZXNcXGJpY2FtZXJhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRWtCLEFBR29CLEFBUUUsQUFNRixBQU1ELEFBU1csQUFPQSxBQUtBLEFBUUYsQUFLTixBQUtBLFVBdENELENBcEJHLEFBY0gsUUFtQ0EsRUFwQkYsQUFPQSxBQUtBLENBcEJPLENBTkYsR0FkbUMsS0E2QnJDLEFBT0EsQUFLQSxBQVFmLE9BbENBLENBTWlCLEtBU2pCLEFBT0EsQUFLQSxVQXBCdUIsb0JBZkMsQUE4Q0ssQUFLRixDQXpEQSxBQXVCM0IseUJBdEJxQixtQkFDckIsaUNBS3FCLG1CQW1EQSxRQUxBLFdBTXJCLFFBTEEsK0NBOUNBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbGJyaXRvXFxEcm9wYm94XFxEZXNhcnJvbGxvc1xcTW92ZW51IFZlcnNpb24gMjAxOVxccGFnZXNcXGJpY2FtZXJhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBjb25mTG9nbyBmcm9tICcuLi9zdGF0aWMvTE9HTy1NT1ZFTlUtQkxBTkNPLnBuZyc7XHJcbmltcG9ydCBCaWNhbWVyYWxMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvQmljYW1lcmFsTGlzdCc7XHJcbmltcG9ydCBCaWNhbWVyYWxMaXN0VHdvIGZyb20gJy4uL2NvbXBvbmVudHMvQmljYW1lcmFsTGlzdFR3byc7XHJcbmltcG9ydCBQYWdlTG9hZGluZyBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2VMb2FkaW5nJztcclxuaW1wb3J0IFBhZ2VFcnJvciBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2VFcnJvcic7XHJcbmltcG9ydCBNaW5pTG9hZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvTWluaUxvYWRlcic7XHJcblxyXG5cclxuY29uc3QgQmljYW1lcmFsID0gKHByb3BzKSA9PiAge1xyXG4gICAgY29uc3Qge2RhdGEsIHN0YXR1c0NvZGV9ID0gcHJvcHM7XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICByZXR1cm4gPFBhZ2VMb2FkaW5nIC8+O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzdGF0dXNDb2RlIT09IDIwMCkge1xyXG4gICAgICByZXR1cm4gPFBhZ2VFcnJvciBlcnJvcj17ZXJyb3J9IC8+O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQmFkZ2VzXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJhZGdlc19faGVyb1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJhZGdlc19fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiQmFkZ2VzX2NvbmYtbG9nb1wiXHJcbiAgICAgICAgICAgICAgICBzcmM9e2NvbmZMb2dvfVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiQ29uZiBMb2dvXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQmFkZ2VzX19jb250YWluZXJcIj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQmFkZ2VzX19saXN0X19jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJhZGdlc19fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJhZGdlc19fYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICA8TGluayB0bz1cIi9jb21pdGUvYmljYW1lcmFsL25ld1wiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgIE51ZXZvIGRlbGVnYWRvXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgdG89XCIvZGlyZWN0aXZlL25ld1wiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICBOdWV2YSBEaXJlY3RpdmFcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPEJpY2FtZXJhbExpc3QgYmFkZ2VzPXtkYXRhfS8+XHJcblxyXG4gICAgICAgICAge2xvYWRpbmcgJiYgPE1pbmlMb2FkZXIgLz59XHJcbiAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICA8L2Rpdj5cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQmFkZ2VzX19saXN0X19jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJhZGdlc19fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJhZGdlc19fYnV0dG9uc190d29cIj5cclxuICAgICAgICAgICAgPExpbmsgdG89XCIvY29taXRlL2JpY2FtZXJhbC9uZXdcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICBOdWV2byBkZWxlZ2Fkb1xyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL2RpcmVjdGl2ZS9uZXdUd29cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgIE51ZXZhIERpcmVjdGl2YVxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxCaWNhbWVyYWxMaXN0VHdvIGJhZGdlcz17ZGF0YX0vPlxyXG5cclxuICAgICAgICAgIHtsb2FkaW5nICYmIDxNaW5pTG9hZGVyIC8+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgIC5CYWRnZXNfX2hlcm8ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDJyZW0gMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2ltYWdlcy9zdGFycy5zdmcnKSwgIzFCMUIyNTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5CYWRnZXNfX2hlcm8+LkJhZGdlc19fY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLkJhZGdlc19fY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMCAxcmVtO1xyXG4gICAgICB9ICBcclxuICAgICAgXHJcbiAgICAgIC5CYWRnZXNfX2xpc3RfX2NvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDgwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMCAxcmVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS10YWJsZTtcclxuICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuQmFkZ2VzX19saXN0X19jb250YWluZXI+LmZvcm0tZ3JvdXB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgfVxyXG4gICAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUJPVE9ORVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgICBcclxuICAgICAgLkJhZGdlc19fbGlzdF9fY29udGFpbmVyPi5CYWRnZXNfX2J1dHRvbnN7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgfVxyXG4gICAgICAuQmFkZ2VzX19saXN0X19jb250YWluZXI+LkJhZGdlc19fYnV0dG9uc190d297XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1CT1RPTkVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgICAgXHJcbiAgICAgIC5CYWRnZXNfY29uZi1sb2dvIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgICAgIHdpZHRoOiAyNjBweDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLkJhZGdlc19fYnV0dG9ucyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgfVxyXG4gICAgICAuQmFkZ2VzX19idXR0b25zX3R3byB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgXHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBCaWNhbWVyYWwuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcmVzIH0pID0+IHtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgcmVxID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyJyk7XHJcbiAgICAgIC8qIGxldCByZXEgPSBhd2FpdCBhcGkuYmFkZ2VzLmxpc3QoKTsgKi9cclxuICAgICAgbGV0IHtkYXRhfSA9IGF3YWl0IHJlcS5qc29uKCk7XHJcblxyXG4gICAgICByZXR1cm4ge2RhdGE6IHJlc3VsdHMgLCBzdGF0dXNDb2RlOiAyMDB9XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDUwM1xyXG4gICAgICAgIHJldHVybntkYXRhOiBudWxsLCBzdGF0dXNDb2RlOiA1MDMgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmljYW1lcmFsOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\lbrito\\\\Dropbox\\\\Desarrollos\\\\Movenu Version 2019\\\\pages\\\\bicameral.js */"));
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
//# sourceMappingURL=bicameral.js.f1eb3db5cff2fd7cddc4.hot-update.js.map