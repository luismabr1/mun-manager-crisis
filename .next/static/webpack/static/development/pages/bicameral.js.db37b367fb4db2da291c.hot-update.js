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
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _static_LOGO_MOVENU_BLANCO_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static/LOGO-MOVENU-BLANCO.png */ "./static/LOGO-MOVENU-BLANCO.png");
/* harmony import */ var _static_LOGO_MOVENU_BLANCO_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_LOGO_MOVENU_BLANCO_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_BicameralList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/BicameralList */ "./components/BicameralList.js");
/* harmony import */ var _components_BicameralListTwo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/BicameralListTwo */ "./components/BicameralListTwo.js");
/* harmony import */ var _components_PageLoading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/PageLoading */ "./components/PageLoading.js");
/* harmony import */ var _components_PageError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/PageError */ "./components/PageError.js");
/* harmony import */ var _components_MiniLoader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/MiniLoader */ "./components/MiniLoader.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");


var _jsxFileName = "C:\\Users\\lbrito\\Dropbox\\Desarrollos\\Movenu Version 2019\\pages\\bicameral.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;










var Bicameral = function Bicameral(props) {
  var data = props.data,
      statusCode = props.statusCode,
      loading = props.loading;

  if (!data.results) {
    return __jsx(_components_PageLoading__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    });
  }

  if (statusCode !== 200) {
    return __jsx(_components_PageError__WEBPACK_IMPORTED_MODULE_10__["default"]
    /*  error={error} */
    , {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    });
  }

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1126486022",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1126486022" + " " + "Badges__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1126486022" + " " + "Badges__list__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1126486022" + " " + "Badges__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1126486022" + " " + "Badges__buttons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    route: "",
    className: "btn btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Nuevo delegado"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    route: "",
    className: "btn btn-secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Nueva Directiva")), __jsx(_components_BicameralList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    badges: data.results,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), loading && __jsx(_components_MiniLoader__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-1126486022" + " " + "Badges__list__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1126486022" + " " + "Badges__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1126486022" + " " + "Badges__buttons_two",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    to: "/comite/bicameral/new",
    className: "btn btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Nuevo delegado"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    to: "/directive/newTwo",
    className: "btn btn-secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Nueva Directiva")), __jsx(_components_BicameralListTwo__WEBPACK_IMPORTED_MODULE_8__["default"], {
    badges: data.results,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), loading && __jsx(_components_MiniLoader__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2643333286",
    __self: this
  }, ".Badges__hero.jsx-1126486022{width:100%;padding:2rem 0;background:url('../static/stars.svg'),#1B1B25;background-repeat:repeat;margin-bottom:1rem;}.Badges__hero.jsx-1126486022>.Badges__container.jsx-1126486022{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.Badges__container.jsx-1126486022{width:100%;height:auto;padding:0 1rem;}.Badges__list__container.jsx-1126486022{width:45%;height:auto;max-width:1080px;padding:0 1rem;display:inline-table;}.Badges__list__container.jsx-1126486022>.form-group.jsx-1126486022{display:inline-block;width:50%;padding:10px;}.Badges__list__container.jsx-1126486022>.Badges__buttons.jsx-1126486022{display:inline-block;width:50%;padding:10px;}.Badges__list__container.jsx-1126486022>.Badges__buttons_two.jsx-1126486022{display:inline-block;width:50%;padding:10px;}.Badges_conf-logo.jsx-1126486022{margin-bottom:2rem;width:260px;}.Badges__buttons.jsx-1126486022{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;margin-bottom:1rem;}.Badges__buttons_two.jsx-1126486022{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;margin-bottom:1rem;}.btn.jsx-1126486022{display:inline-block;font-weight:400;color:#212529;text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;padding:0.375rem 0.75rem;font-size:1rem;line-height:1.5;border-radius:0.25rem;-webkit-transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;}.btn.jsx-1126486022:hover{color:#212529;-webkit-text-decoration:none;text-decoration:none;}.btn-primary.jsx-1126486022{color:#fff;background-color:#007bff;border-color:#007bff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbGJyaXRvXFxEcm9wYm94XFxEZXNhcnJvbGxvc1xcTW92ZW51IFZlcnNpb24gMjAxOVxccGFnZXNcXGJpY2FtZXJhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RHdCLEFBRzRCLEFBUUUsQUFNRixBQU1ELEFBU1csQUFPQSxBQUtBLEFBUUYsQUFLTixBQUtBLEFBS1EsQUFrQlAsQUFJSCxVQWpFQyxDQXBCRyxBQWNILEFBd0VhLEdBSkosS0FqQ1QsRUFwQkYsQUFPQSxBQUtBLEFBdUJNLENBM0NDLENBTkYsR0FkZ0MsS0E2QmxDLEFBT0EsQUFLQSxBQVFqQixLQXFDeUIsQ0F0QlAsQ0FqRGxCLENBTW1CLEtBU25CLEFBT0EsQUFLQSxPQXVCc0IsR0EzQ0csR0FpRXpCLE9BTEEsS0FoQjBCLEdBakVHLEVBTUgsQUE4Q0ssQUFLRixDQWxDN0IsZ0JBMkM2QixNQWpFTixtQkFDdkIsQUFpRTBCLHNCQUNELGNBN0RGLE9BOERGLFlBWEUsUUFMQSxXQU12QixRQUxBLDhDQWdCaUMsQ0E5RGpDLDRCQStEaUMsNkJBQ0oseUJBQ1YsZUFDQyxnQkFDTSxzQkFDK0csNFFBQ3pJIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbGJyaXRvXFxEcm9wYm94XFxEZXNhcnJvbGxvc1xcTW92ZW51IFZlcnNpb24gMjAxOVxccGFnZXNcXGJpY2FtZXJhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IGNvbmZMb2dvIGZyb20gJy4uL3N0YXRpYy9MT0dPLU1PVkVOVS1CTEFOQ08ucG5nJztcclxuaW1wb3J0IEJpY2FtZXJhbExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9CaWNhbWVyYWxMaXN0JztcclxuaW1wb3J0IEJpY2FtZXJhbExpc3RUd28gZnJvbSAnLi4vY29tcG9uZW50cy9CaWNhbWVyYWxMaXN0VHdvJztcclxuaW1wb3J0IFBhZ2VMb2FkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZUxvYWRpbmcnO1xyXG5pbXBvcnQgUGFnZUVycm9yIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZUVycm9yJztcclxuaW1wb3J0IE1pbmlMb2FkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9NaW5pTG9hZGVyJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcblxyXG5cclxuY29uc3QgQmljYW1lcmFsID0gKHByb3BzKSA9PiAge1xyXG4gICAgY29uc3Qge2RhdGEsIHN0YXR1c0NvZGUsIGxvYWRpbmd9ID0gcHJvcHM7XHJcblxyXG4gICAgaWYgKCFkYXRhLnJlc3VsdHMpIHtcclxuICAgICAgcmV0dXJuIDxQYWdlTG9hZGluZyAvPjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc3RhdHVzQ29kZSE9PSAyMDApIHtcclxuICAgICAgcmV0dXJuIDxQYWdlRXJyb3IvKiAgZXJyb3I9e2Vycm9yfSAqLyAvPjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIFxyXG4gICAgPExheW91dD5cclxuICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJCYWRnZXNfX2NvbnRhaW5lclwiPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJCYWRnZXNfX2xpc3RfX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJCYWRnZXNfX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJCYWRnZXNfX2J1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayByb3V0ZT1cIlwiICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICBOdWV2byBkZWxlZ2Fkb1xyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayByb3V0ZT1cIlwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgTnVldmEgRGlyZWN0aXZhXHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPEJpY2FtZXJhbExpc3QgYmFkZ2VzPXtkYXRhLnJlc3VsdHN9Lz5cclxuXHJcbiAgICAgICAgICAgICAgICB7bG9hZGluZyAmJiA8TWluaUxvYWRlciAvPn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJCYWRnZXNfX2xpc3RfX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJCYWRnZXNfX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJCYWRnZXNfX2J1dHRvbnNfdHdvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvY29taXRlL2JpY2FtZXJhbC9uZXdcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICBOdWV2byBkZWxlZ2Fkb1xyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9kaXJlY3RpdmUvbmV3VHdvXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICBOdWV2YSBEaXJlY3RpdmFcclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxCaWNhbWVyYWxMaXN0VHdvIGJhZGdlcz17ZGF0YS5yZXN1bHRzfS8+XHJcblxyXG4gICAgICAgICAgICAgICAge2xvYWRpbmcgJiYgPE1pbmlMb2FkZXIgLz59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIC5CYWRnZXNfX2hlcm8ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAycmVtIDA7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL3N0YXRpYy9zdGFycy5zdmcnKSwgIzFCMUIyNTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuQmFkZ2VzX19oZXJvPi5CYWRnZXNfX2NvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5CYWRnZXNfX2NvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuQmFkZ2VzX19saXN0X19jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTA4MHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxcmVtO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLkJhZGdlc19fbGlzdF9fY29udGFpbmVyPi5mb3JtLWdyb3Vwe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1CT1RPTkVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5CYWRnZXNfX2xpc3RfX2NvbnRhaW5lcj4uQmFkZ2VzX19idXR0b25ze1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLkJhZGdlc19fbGlzdF9fY29udGFpbmVyPi5CYWRnZXNfX2J1dHRvbnNfdHdve1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQk9UT05FUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuQmFkZ2VzX2NvbmYtbG9nbyB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI2MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuQmFkZ2VzX19idXR0b25zIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5CYWRnZXNfX2J1dHRvbnNfdHdvIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYnRuIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzIxMjUyOTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJ0bjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzIxMjUyOTtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYnRuLXByaW1hcnkge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy14OmhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgIDwvTGF5b3V0PlxyXG4pXHJcblxyXG4gICAgfVxyXG5cclxuICBCaWNhbWVyYWwuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcmVzIH0pID0+IHtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgcmVxID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyJyk7XHJcbiAgICAgIC8qIGxldCByZXEgPSBhd2FpdCBhcGkuYmFkZ2VzLmxpc3QoKTsgKi9cclxuICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXEuanNvbigpO1xyXG5cclxuICAgICAgcmV0dXJuIHtkYXRhLCBzdGF0dXNDb2RlOiAyMDAsIGxvYWRpbmc6IGZhbHNlfVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSA1MDNcclxuICAgICAgICByZXR1cm57ZGF0YTogbnVsbCwgc3RhdHVzQ29kZTogNTAzIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJpY2FtZXJhbDsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\lbrito\\\\Dropbox\\\\Desarrollos\\\\Movenu Version 2019\\\\pages\\\\bicameral.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3726503593",
    __self: this
  }, "body{margin:0;overflow-x:hidden;font-family:system-ui;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbGJyaXRvXFxEcm9wYm94XFxEZXNhcnJvbGxvc1xcTW92ZW51IFZlcnNpb24gMjAxOVxccGFnZXNcXGJpY2FtZXJhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEySjJDLEFBR2tDLFNBQ1Esa0JBQ0ssc0JBQzFCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbGJyaXRvXFxEcm9wYm94XFxEZXNhcnJvbGxvc1xcTW92ZW51IFZlcnNpb24gMjAxOVxccGFnZXNcXGJpY2FtZXJhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IGNvbmZMb2dvIGZyb20gJy4uL3N0YXRpYy9MT0dPLU1PVkVOVS1CTEFOQ08ucG5nJztcclxuaW1wb3J0IEJpY2FtZXJhbExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9CaWNhbWVyYWxMaXN0JztcclxuaW1wb3J0IEJpY2FtZXJhbExpc3RUd28gZnJvbSAnLi4vY29tcG9uZW50cy9CaWNhbWVyYWxMaXN0VHdvJztcclxuaW1wb3J0IFBhZ2VMb2FkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZUxvYWRpbmcnO1xyXG5pbXBvcnQgUGFnZUVycm9yIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZUVycm9yJztcclxuaW1wb3J0IE1pbmlMb2FkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9NaW5pTG9hZGVyJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcblxyXG5cclxuY29uc3QgQmljYW1lcmFsID0gKHByb3BzKSA9PiAge1xyXG4gICAgY29uc3Qge2RhdGEsIHN0YXR1c0NvZGUsIGxvYWRpbmd9ID0gcHJvcHM7XHJcblxyXG4gICAgaWYgKCFkYXRhLnJlc3VsdHMpIHtcclxuICAgICAgcmV0dXJuIDxQYWdlTG9hZGluZyAvPjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc3RhdHVzQ29kZSE9PSAyMDApIHtcclxuICAgICAgcmV0dXJuIDxQYWdlRXJyb3IvKiAgZXJyb3I9e2Vycm9yfSAqLyAvPjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIFxyXG4gICAgPExheW91dD5cclxuICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJCYWRnZXNfX2NvbnRhaW5lclwiPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJCYWRnZXNfX2xpc3RfX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJCYWRnZXNfX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJCYWRnZXNfX2J1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayByb3V0ZT1cIlwiICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICBOdWV2byBkZWxlZ2Fkb1xyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayByb3V0ZT1cIlwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgTnVldmEgRGlyZWN0aXZhXHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPEJpY2FtZXJhbExpc3QgYmFkZ2VzPXtkYXRhLnJlc3VsdHN9Lz5cclxuXHJcbiAgICAgICAgICAgICAgICB7bG9hZGluZyAmJiA8TWluaUxvYWRlciAvPn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJCYWRnZXNfX2xpc3RfX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJCYWRnZXNfX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJCYWRnZXNfX2J1dHRvbnNfdHdvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvY29taXRlL2JpY2FtZXJhbC9uZXdcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICBOdWV2byBkZWxlZ2Fkb1xyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9kaXJlY3RpdmUvbmV3VHdvXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICBOdWV2YSBEaXJlY3RpdmFcclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxCaWNhbWVyYWxMaXN0VHdvIGJhZGdlcz17ZGF0YS5yZXN1bHRzfS8+XHJcblxyXG4gICAgICAgICAgICAgICAge2xvYWRpbmcgJiYgPE1pbmlMb2FkZXIgLz59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIC5CYWRnZXNfX2hlcm8ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAycmVtIDA7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL3N0YXRpYy9zdGFycy5zdmcnKSwgIzFCMUIyNTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuQmFkZ2VzX19oZXJvPi5CYWRnZXNfX2NvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5CYWRnZXNfX2NvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuQmFkZ2VzX19saXN0X19jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTA4MHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxcmVtO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLkJhZGdlc19fbGlzdF9fY29udGFpbmVyPi5mb3JtLWdyb3Vwe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1CT1RPTkVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5CYWRnZXNfX2xpc3RfX2NvbnRhaW5lcj4uQmFkZ2VzX19idXR0b25ze1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLkJhZGdlc19fbGlzdF9fY29udGFpbmVyPi5CYWRnZXNfX2J1dHRvbnNfdHdve1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQk9UT05FUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuQmFkZ2VzX2NvbmYtbG9nbyB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI2MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuQmFkZ2VzX19idXR0b25zIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5CYWRnZXNfX2J1dHRvbnNfdHdvIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYnRuIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzIxMjUyOTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJ0bjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzIxMjUyOTtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYnRuLXByaW1hcnkge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy14OmhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgIDwvTGF5b3V0PlxyXG4pXHJcblxyXG4gICAgfVxyXG5cclxuICBCaWNhbWVyYWwuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcmVzIH0pID0+IHtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgcmVxID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyJyk7XHJcbiAgICAgIC8qIGxldCByZXEgPSBhd2FpdCBhcGkuYmFkZ2VzLmxpc3QoKTsgKi9cclxuICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXEuanNvbigpO1xyXG5cclxuICAgICAgcmV0dXJuIHtkYXRhLCBzdGF0dXNDb2RlOiAyMDAsIGxvYWRpbmc6IGZhbHNlfVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSA1MDNcclxuICAgICAgICByZXR1cm57ZGF0YTogbnVsbCwgc3RhdHVzQ29kZTogNTAzIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJpY2FtZXJhbDsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\lbrito\\\\Dropbox\\\\Desarrollos\\\\Movenu Version 2019\\\\pages\\\\bicameral.js */")));
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
            return fetch('https://rickandmortyapi.com/api/character');

          case 4:
            req = _context.sent;
            _context.next = 7;
            return req.json();

          case 7:
            data = _context.sent;
            return _context.abrupt("return", {
              data: data,
              statusCode: 200,
              loading: false
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
//# sourceMappingURL=bicameral.js.db37b367fb4db2da291c.hot-update.js.map