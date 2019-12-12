webpackHotUpdate("static\\development\\pages\\bicameral.js",{

/***/ "./components/BicameralList.js":
/*!*************************************!*\
  !*** ./components/BicameralList.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Gravatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Gravatar */ "./components/Gravatar.js");






var _jsxFileName = "C:\\Users\\lbrito\\Dropbox\\Desarrollos\\Movenu Version 2019\\components\\BicameralList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;


/* import Gravatar from './Gravatar'; */

var BadgesListItem =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(BadgesListItem, _React$Component);

  function BadgesListItem() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, BadgesListItem);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(BadgesListItem).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(BadgesListItem, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "BadgesListItem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, __jsx(_components_Gravatar__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: "BadgesListItem__avatar",
        email: this.props.badge.image,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, this.props.badge.name, "\xA0\xA0 || \xA0\xA0", this.props.badge.spieces), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), "@", this.props.badge.type, __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), this.props.badge.origin.name), __jsx("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "\n            .BadgesListItem {\n                background: #FFFFFF;\n                box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.23);\n                border-radius: 5px;\n                display: flex;\n                padding: 1rem;\n              }\n              \n              .BadgesListItem__avatar {\n                border-radius: 50%;\n                background: #a3a3a3;\n                margin-right: 0.5rem;\n                width: 80px;\n                height: 80px;\n              }\n        "));
    }
  }]);

  return BadgesListItem;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

function useSearchBadges(badges) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(''),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      query = _React$useState2[0],
      setQuery = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(badges),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      filteredBadges = _React$useState4[0],
      setFilteredBadges = _React$useState4[1];

  react__WEBPACK_IMPORTED_MODULE_6___default.a.useMemo(function () {
    var result = badges.filter(function (badge) {
      return "".concat(badge.name).toLowerCase().includes(query.toLowerCase());
    });
    setFilteredBadges(result);
  }, [badges, query]);
  return {
    query: query,
    setQuery: setQuery,
    filteredBadges: filteredBadges
  };
}

function BadgesList(props) {
  var badges = props.badges;

  var _useSearchBadges = useSearchBadges(badges),
      query = _useSearchBadges.query,
      setQuery = _useSearchBadges.setQuery,
      filteredBadges = _useSearchBadges.filteredBadges;

  if (filteredBadges.length === 0) {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, __jsx("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, "Filter Directives"), __jsx("input", {
      type: "text",
      placeholder: "Comite B",
      className: "form-control",
      value: query,
      onChange: function onChange(e) {
        setQuery(e.target.value);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    })), __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, "No directives or delegates were found"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: "btn btn-primary",
      to: "/comite/bicameral/new",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, "Create new Delegate"));
  }

  return __jsx("div", {
    className: "Badges__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "Filter Directives"), __jsx("input", {
    type: "text",
    placeholder: "Buscar en comite B",
    className: "form-control",
    value: query,
    onChange: function onChange(e) {
      setQuery(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }), __jsx("ul", {
    className: "list-unstyled",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, filteredBadges.map(function (badge) {
    return __jsx("li", {
      key: badge.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: "text-reset text-decoration-none",
      route: "/bicameral/".concat(badge.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, __jsx(BadgesListItem, {
      badge: badge,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    })));
  }))), __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "\n         .BadgesListItem {\n            background: #FFFFFF;\n            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.23);\n            border-radius: 5px;\n            display: flex;\n            padding: 1rem;\n            cursor: pointer;\n            transform: \n          }\n          \n          .BadgesListItem__avatar {\n            border-radius: 50%;\n            background: #a3a3a3;\n            margin-right: 0.5rem;\n            width: 100px;\n            height: 100px;\n          }\n            .list-unstyled {\n                padding-left: 0;\n                list-style: none;\n\n              }\n\n              .text-reset {\n                color: inherit !important;\n              }\n              .text-decoration-none {\n                text-decoration: none !important;\n              }\n              .form-control {\n                display: block;\n                width: 100%;\n                height: calc(1.5em + 0.75rem + 2px);\n                padding: 0.375rem 0.75rem;\n                font-size: 1rem;\n                font-weight: 400;\n                line-height: 1.5;\n                color: #495057;\n                background-color: #fff;\n                background-clip: padding-box;\n                border: 1px solid #ced4da;\n                border-radius: 0.25rem;\n                transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n              }\n              .form-group {\n                margin-bottom: 1rem;\n              }\n              \n\n        "));
}

/* harmony default export */ __webpack_exports__["default"] = (BadgesList);

/***/ })

})
//# sourceMappingURL=bicameral.js.4e707810206440e898d8.hot-update.js.map