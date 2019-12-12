module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/BicameralList.js":
/*!*************************************!*\
  !*** ./components/BicameralList.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Gravatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Gravatar */ "./components/Gravatar.js");
var _jsxFileName = "C:\\Users\\lbrito\\Dropbox\\Desarrollos\\Movenu Version 2019\\components\\BicameralList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* import Gravatar from './Gravatar'; */

class BadgesListItem extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("div", {
      className: "BadgesListItem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx(_components_Gravatar__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
    }, `
            .BadgesListItem {
                background: #FFFFFF;
                box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.23);
                border-radius: 5px;
                display: flex;
                padding: 1rem;
              }
              
              .BadgesListItem__avatar {
                border-radius: 50%;
                background: #a3a3a3;
                margin-right: 0.5rem;
                width: 80px;
                height: 80px;
              }
        `));
  }

}

function useSearchBadges(badges) {
  const [query, setQuery] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState('');
  const [filteredBadges, setFilteredBadges] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(badges);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(() => {
    const result = badges.filter(badge => {
      return `${badge.name}`.toLowerCase().includes(query.toLowerCase());
    });
    setFilteredBadges(result);
  }, [badges, query]);
  return {
    query,
    setQuery,
    filteredBadges
  };
}

function BadgesList(props) {
  const badges = props.badges;
  const {
    query,
    setQuery,
    filteredBadges
  } = useSearchBadges(badges);

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
      onChange: e => {
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
    }, "No directives or delegates were found"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
    onChange: e => {
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
  }, filteredBadges.map(badge => {
    return __jsx("li", {
      key: badge.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      className: "text-reset text-decoration-none",
      route: `/bicameral/${badge.id}`,
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
  }, `
         .BadgesListItem {
            background: #FFFFFF;
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.23);
            border-radius: 5px;
            display: flex;
            padding: 1rem;
            cursor: pointer;
            -webkit-transition: width 2s; /* Safari prior 6.1 */
            transition: 600ms;
          }
          .BadgesListItem:hover{
            transform: scale(1.1);
          }
          
          .BadgesListItem__avatar {
            border-radius: 50%;
            background: #a3a3a3;
            margin-right: 0.5rem;
            width: 100px;
            height: 100px;
          }
            .list-unstyled {
                padding-left: 0;
                list-style: none;

              }

              .text-reset {
                color: inherit !important;
              }
              .text-decoration-none {
                text-decoration: none !important;
              }
              .form-control {
                display: block;
                width: 100%;
                height: calc(1.5em + 0.75rem + 2px);
                padding: 0.375rem 0.75rem;
                font-size: 1rem;
                font-weight: 400;
                line-height: 1.5;
                color: #495057;
                background-color: #fff;
                background-clip: padding-box;
                border: 1px solid #ced4da;
                border-radius: 0.25rem;
                transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
              }
              .form-group {
                margin-bottom: 1rem;
              }
              

        `));
}

/* harmony default export */ __webpack_exports__["default"] = (BadgesList);

/***/ }),

/***/ "./components/BicameralListTwo.js":
/*!****************************************!*\
  !*** ./components/BicameralListTwo.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Gravatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Gravatar */ "./components/Gravatar.js");
var _jsxFileName = "C:\\Users\\lbrito\\Dropbox\\Desarrollos\\Movenu Version 2019\\components\\BicameralListTwo.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


/* import Gravatar from './Gravatar'; */

class BadgesListItem extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return __jsx("div", {
      className: "jsx-1613278853" + " " + "BadgesListItem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx(_components_Gravatar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "BadgesListItem__avatar",
      email: this.props.badge.image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-1613278853",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("strong", {
      className: "jsx-1613278853",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, this.props.badge.name, "\xA0\xA0 || \xA0\xA0", this.props.badge.spieces), __jsx("br", {
      className: "jsx-1613278853",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }), "@", this.props.badge.type, __jsx("br", {
      className: "jsx-1613278853",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }), this.props.badge.origin.name), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1613278853",
      __self: this
    }, ".BadgesListItem.jsx-1613278853{background:#FFFFFF;box-shadow:0 2px 4px 0 rgba(0,0,0,0.23);border-radius:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:1rem;}.BadgesListItem__avatar.jsx-1613278853{border-radius:50%;background:#a3a3a3;margin-right:0.5rem;width:80px;height:80px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbGJyaXRvXFxEcm9wYm94XFxEZXNhcnJvbGxvc1xcTW92ZW51IFZlcnNpb24gMjAxOVxcY29tcG9uZW50c1xcQmljYW1lcmFsTGlzdFR3by5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Qm9CLEFBR29DLEFBUUQsa0JBQ0MsQ0FSd0Isa0JBU3ZCLG9CQUNULEVBVE8sU0FVTixTQVRDLEdBVWYsdUVBVGUsYUFDZiIsImZpbGUiOiJDOlxcVXNlcnNcXGxicml0b1xcRHJvcGJveFxcRGVzYXJyb2xsb3NcXE1vdmVudSBWZXJzaW9uIDIwMTlcXGNvbXBvbmVudHNcXEJpY2FtZXJhbExpc3RUd28uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgR3JhdmF0YXIgZnJvbSAnLi4vY29tcG9uZW50cy9HcmF2YXRhcic7XHJcbi8qIGltcG9ydCBHcmF2YXRhciBmcm9tICcuL0dyYXZhdGFyJzsgKi9cclxuXHJcblxyXG5cclxuY2xhc3MgQmFkZ2VzTGlzdEl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQmFkZ2VzTGlzdEl0ZW1cIj5cclxuICAgICAgICA8R3JhdmF0YXJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIkJhZGdlc0xpc3RJdGVtX19hdmF0YXJcIlxyXG4gICAgICAgICAgZW1haWw9e3RoaXMucHJvcHMuYmFkZ2UuaW1hZ2V9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzdHJvbmc+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmJhZGdlLm5hbWV9XHJcbiAgICAgICAgICAgICZuYnNwOyZuYnNwOyB8fCAmbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAge3RoaXMucHJvcHMuYmFkZ2Uuc3BpZWNlc31cclxuICAgICAgICAgIDwvc3Ryb25nPlxyXG4gICAgICAgICAgPGJyIC8+QHt0aGlzLnByb3BzLmJhZGdlLnR5cGV9XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLmJhZGdlLm9yaWdpbi5uYW1lfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLkJhZGdlc0xpc3RJdGVtIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC5CYWRnZXNMaXN0SXRlbV9fYXZhdGFyIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNhM2EzYTM7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVzZVNlYXJjaEJhZGdlcyhiYWRnZXMpIHtcclxuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZmlsdGVyZWRCYWRnZXMsIHNldEZpbHRlcmVkQmFkZ2VzXSA9IFJlYWN0LnVzZVN0YXRlKGJhZGdlcyk7XHJcblxyXG4gIFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYmFkZ2VzLmZpbHRlcihiYWRnZSA9PiB7XHJcbiAgICAgIHJldHVybiBgJHtiYWRnZS5uYW1lfWBcclxuICAgICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgIC5pbmNsdWRlcyhxdWVyeS50b0xvd2VyQ2FzZSgpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHNldEZpbHRlcmVkQmFkZ2VzKHJlc3VsdCk7XHJcbiAgfSwgW2JhZGdlcywgcXVlcnldKTtcclxuXHJcbiAgcmV0dXJuIHsgcXVlcnksIHNldFF1ZXJ5LCBmaWx0ZXJlZEJhZGdlcyB9O1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gQmFkZ2VzTGlzdChwcm9wcykge1xyXG4gIGNvbnN0IGJhZGdlcyA9IHByb3BzLmJhZGdlcztcclxuXHJcbiAgY29uc3QgeyBxdWVyeSwgc2V0UXVlcnksIGZpbHRlcmVkQmFkZ2VzIH0gPSB1c2VTZWFyY2hCYWRnZXMoYmFkZ2VzKTtcclxuXHJcbiAgaWYgKGZpbHRlcmVkQmFkZ2VzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbD5GaWx0ZXIgRGlyZWN0aXZlczwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbWl0ZSBCXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0UXVlcnkoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGgzPk5vIGRpcmVjdGl2ZXMgb3IgZGVsZWdhdGVzIHdlcmUgZm91bmQ8L2gzPlxyXG4gICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHRvPVwiL2NvbWl0ZS9iaWNhbWVyYWwvbmV3XCI+XHJcbiAgICAgICAgICBDcmVhdGUgbmV3IERlbGVnYXRlXHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfSBcclxuXHJcbiAgcmV0dXJuIChcclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkJhZGdlc19fY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbD5GaWx0ZXIgRGlyZWN0aXZlczwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJ1c2NhciBlbiBjb21pdGUgQlwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17cXVlcnl9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0UXVlcnkoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICBcclxuXHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZFwiPlxyXG4gICAgICAgICAgICB7ZmlsdGVyZWRCYWRnZXMubWFwKGJhZGdlID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17YmFkZ2UuaWR9PlxyXG4gICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcmVzZXQgdGV4dC1kZWNvcmF0aW9uLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRvPXtgL2NvbWl0ZS9iaWNhbWVyYWwvJHtiYWRnZS5pZH1gfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJhZGdlc0xpc3RJdGVtIGJhZGdlPXtiYWRnZX0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSA+e2BcclxuICAgICAgICAgLkJhZGdlc0xpc3RJdGVtIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIzKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAuQmFkZ2VzTGlzdEl0ZW1fX2F2YXRhciB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2EzYTNhMztcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxpc3QtdW5zdHlsZWQge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC50ZXh0LXJlc2V0IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC50ZXh0LWRlY29yYXRpb24tbm9uZSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgMC43NXJlbSArIDJweCk7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzQ5NTA1NztcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuXHJcblxyXG4gICk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhZGdlc0xpc3Q7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\lbrito\\\\Dropbox\\\\Desarrollos\\\\Movenu Version 2019\\\\components\\\\BicameralListTwo.js */"));
  }

}

function useSearchBadges(badges) {
  const [query, setQuery] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('');
  const [filteredBadges, setFilteredBadges] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(badges);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useMemo(() => {
    const result = badges.filter(badge => {
      return `${badge.name}`.toLowerCase().includes(query.toLowerCase());
    });
    setFilteredBadges(result);
  }, [badges, query]);
  return {
    query,
    setQuery,
    filteredBadges
  };
}

function BadgesList(props) {
  const badges = props.badges;
  const {
    query,
    setQuery,
    filteredBadges
  } = useSearchBadges(badges);

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
      onChange: e => {
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
    }, "No directives or delegates were found"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
    onChange: e => {
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
  }, filteredBadges.map(badge => {
    return __jsx("li", {
      key: badge.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "text-reset text-decoration-none",
      to: `/comite/bicameral/${badge.id}`,
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
  }, `
         .BadgesListItem {
            background: #FFFFFF;
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.23);
            border-radius: 5px;
            display: flex;
            padding: 1rem;
          }
          
          .BadgesListItem__avatar {
            border-radius: 50%;
            background: #a3a3a3;
            margin-right: 0.5rem;
            width: 100px;
            height: 100px;
          }
            .list-unstyled {
                padding-left: 0;
                list-style: none;
              }

              .text-reset {
                color: inherit !important;
              }
              .text-decoration-none {
                text-decoration: none !important;
              }
              .form-control {
                display: block;
                width: 100%;
                height: calc(1.5em + 0.75rem + 2px);
                padding: 0.375rem 0.75rem;
                font-size: 1rem;
                font-weight: 400;
                line-height: 1.5;
                color: #495057;
                background-color: #fff;
                background-clip: padding-box;
                border: 1px solid #ced4da;
                border-radius: 0.25rem;
                transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
              }
              .form-group {
                margin-bottom: 1rem;
              }
              

        `));
}

/* harmony default export */ __webpack_exports__["default"] = (BadgesList);

/***/ }),

/***/ "./components/Gravatar.js":
/*!********************************!*\
  !*** ./components/Gravatar.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! md5 */ "md5");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\lbrito\\Dropbox\\Desarrollos\\Movenu Version 2019\\components\\Gravatar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // Aprende más del Gravatar en: http://gravatar.com

function Gravatar(props) {
  /*  const email = props.email; 
   const hash = md5(email);    */
  const image = props.email;
  return __jsx("img", {
    className: props.className,
    src: image,
    alt: "Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Gravatar);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ "./components/Navbar.js");
/* harmony import */ var _static_LOGO_MOVENU_BLANCO_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/LOGO-MOVENU-BLANCO.png */ "./static/LOGO-MOVENU-BLANCO.png");
/* harmony import */ var _static_LOGO_MOVENU_BLANCO_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_LOGO_MOVENU_BLANCO_png__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\lbrito\\Dropbox\\Desarrollos\\Movenu Version 2019\\components\\Layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function Layout(props) {
  // const children = props.children;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3072500480" + " " + "Badges",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3072500480" + " " + "Badges__hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3072500480" + " " + "Badges__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("img", {
    src: _static_LOGO_MOVENU_BLANCO_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "Conf Logo",
    className: "jsx-3072500480" + " " + "Badges_conf-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })))), props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3072500480",
    __self: this
  }, ".Badges.jsx-3072500480{width:100%;}.Badges__hero.jsx-3072500480{width:100%;padding:2rem 0;background:url('../static/stars.svg'),#1B1B25;background-repeat:repeat;margin-bottom:1rem;padding:15px;}.Badges__hero.jsx-3072500480>.Badges__container.jsx-3072500480{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.Badges__container.jsx-3072500480{width:100%;height:auto;text-align:center;margin:0;}.Badges__list__container.jsx-3072500480>.form-group.jsx-3072500480{display:inline-block;width:50%;padding:10px;}.Badges_conf-logo.jsx-3072500480{margin-bottom:2rem;width:260px;}.Badges__buttons.jsx-3072500480 a.jsx-3072500480{padding:10px 10px 10px 10px;width:33%;-webkit-text-decoration:none;text-decoration:none;}.Badges__buttons_two.jsx-3072500480{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;margin-bottom:1rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbGJyaXRvXFxEcm9wYm94XFxEZXNhcnJvbGxvc1xcTW92ZW51IFZlcnNpb24gMjAxOVxcY29tcG9uZW50c1xcTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCYyxBQUdrQixBQUlFLEFBU0UsQUFNRixBQVFVLEFBT0YsQUFLUyxBQU9mLFdBN0NqQixBQUltQixBQWVILFFBZUEsRUFQRixFQVBRLEdBZjZCLEVBa0NyQyxHQVhHLEFBT2YsT0FLdUIsR0FuQlosR0FRWCxNQVBBLHNCQWhCMkIsRUFPSCxBQWlDRyxjQUwzQixTQWxDcUIsbUJBQ04sYUFDZix1QkFLcUIsbUJBaUNBLG1CQUNyQix1REFqQ0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxsYnJpdG9cXERyb3Bib3hcXERlc2Fycm9sbG9zXFxNb3ZlbnUgVmVyc2lvbiAyMDE5XFxjb21wb25lbnRzXFxMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2YmFyIGZyb20gJy4vTmF2YmFyJztcclxuaW1wb3J0IGNvbmZMb2dvIGZyb20gJy4uL3N0YXRpYy9MT0dPLU1PVkVOVS1CTEFOQ08ucG5nJztcclxuXHJcbmZ1bmN0aW9uIExheW91dChwcm9wcykge1xyXG4gIC8vIGNvbnN0IGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJCYWRnZXNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQmFkZ2VzX19oZXJvXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQmFkZ2VzX19jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJCYWRnZXNfY29uZi1sb2dvXCJcclxuICAgICAgICAgICAgICAgIHNyYz17Y29uZkxvZ299XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJDb25mIExvZ29cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG5cclxuICA8c3R5bGUganN4PntgXHJcbiAgICAuQmFkZ2Vze1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAgIC5CYWRnZXNfX2hlcm8ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDJyZW0gMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL3N0YXRpYy9zdGFycy5zdmcnKSwgIzFCMUIyNTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLkJhZGdlc19faGVybz4uQmFkZ2VzX19jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuQmFkZ2VzX19jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB9ICBcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAuQmFkZ2VzX19saXN0X19jb250YWluZXI+LmZvcm0tZ3JvdXB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgIC5CYWRnZXNfY29uZi1sb2dvIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgICAgIHdpZHRoOiAyNjBweDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLkJhZGdlc19fYnV0dG9ucyBhIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4OyBcclxuICAgICAgICB3aWR0aDogMzMlO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgIC5CYWRnZXNfX2J1dHRvbnNfdHdvIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgfVxyXG4gIGB9PC9zdHlsZT5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\lbrito\\\\Dropbox\\\\Desarrollos\\\\Movenu Version 2019\\\\components\\\\Layout.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Loader.js":
/*!******************************!*\
  !*** ./components/Loader.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Loader; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\lbrito\\Dropbox\\Desarrollos\\Movenu Version 2019\\components\\Loader.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

class Loader extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return __jsx("div", {
      className: "jsx-1226991658" + " " + "lds-grid",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1226991658",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-1226991658",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-1226991658",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-1226991658",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-1226991658",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-1226991658",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-1226991658",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-1226991658",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-1226991658",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1226991658",
      __self: this
    }, ".lds-grid.jsx-1226991658{display:inline-block;position:relative;width:64px;height:64px;}.lds-grid.jsx-1226991658 div.jsx-1226991658{position:absolute;width:13px;height:13px;border-radius:50%;background:#000;-webkit-animation:lds-grid-jsx-1226991658 1.2s linear infinite;animation:lds-grid-jsx-1226991658 1.2s linear infinite;}.lds-grid.jsx-1226991658 div.jsx-1226991658:nth-child(1){top:6px;left:6px;-webkit-animation-delay:0s;animation-delay:0s;}.lds-grid.jsx-1226991658 div.jsx-1226991658:nth-child(2){top:6px;left:26px;-webkit-animation-delay:-0.4s;animation-delay:-0.4s;}.lds-grid.jsx-1226991658 div.jsx-1226991658:nth-child(3){top:6px;left:45px;-webkit-animation-delay:-0.8s;animation-delay:-0.8s;}.lds-grid.jsx-1226991658 div.jsx-1226991658:nth-child(4){top:26px;left:6px;-webkit-animation-delay:-0.4s;animation-delay:-0.4s;}.lds-grid.jsx-1226991658 div.jsx-1226991658:nth-child(5){top:26px;left:26px;-webkit-animation-delay:-0.8s;animation-delay:-0.8s;}.lds-grid.jsx-1226991658 div.jsx-1226991658:nth-child(6){top:26px;left:45px;-webkit-animation-delay:-1.2s;animation-delay:-1.2s;}.lds-grid.jsx-1226991658 div.jsx-1226991658:nth-child(7){top:45px;left:6px;-webkit-animation-delay:-0.8s;animation-delay:-0.8s;}.lds-grid.jsx-1226991658 div.jsx-1226991658:nth-child(8){top:45px;left:26px;-webkit-animation-delay:-1.2s;animation-delay:-1.2s;}.lds-grid.jsx-1226991658 div.jsx-1226991658:nth-child(9){top:45px;left:45px;-webkit-animation-delay:-1.6s;animation-delay:-1.6s;}@-webkit-keyframes lds-grid-jsx-1226991658{0%,100%{opacity:1;}50%{opacity:0.5;}}@keyframes lds-grid-jsx-1226991658{0%,100%{opacity:1;}50%{opacity:0.5;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbGJyaXRvXFxEcm9wYm94XFxEZXNhcnJvbGxvc1xcTW92ZW51IFZlcnNpb24gMjAxOVxcY29tcG9uZW50c1xcTG9hZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCb0IsQUFHa0MsQUFPSCxBQVNWLEFBTUEsQUFNQSxBQU1DLEFBTUEsQUFNQSxBQU1BLEFBTUEsQUFNQSxBQVNHLEFBSUUsUUE1REwsQUFNQyxBQU1BLENBTUQsQUFNQyxBQU1BLEFBTUQsQUFNQyxBQU1BLENBU1YsRUFJQSxLQTVEbUIsQ0FWUixBQWdCVyxBQU1BLEFBTUEsQUFrQkEsQ0FaQSxBQU1BLEFBWUEsQUFNQSxFQWpFSixRQVFOLFVBUEQsRUFRTyxTQVBOLFNBUUksR0FQbEIsQ0FlQSxPQU1BLEFBTUEsQUFNQSxBQWtCQSxDQVpBLEFBTUEsQUFZQSxBQU1BLElBdkQwQyxzSEFDMUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxsYnJpdG9cXERyb3Bib3hcXERlc2Fycm9sbG9zXFxNb3ZlbnUgVmVyc2lvbiAyMDE5XFxjb21wb25lbnRzXFxMb2FkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGRzLWdyaWRcIj5cclxuICAgICAgICA8ZGl2IC8+XHJcbiAgICAgICAgPGRpdiAvPlxyXG4gICAgICAgIDxkaXYgLz5cclxuICAgICAgICA8ZGl2IC8+XHJcbiAgICAgICAgPGRpdiAvPlxyXG4gICAgICAgIDxkaXYgLz5cclxuICAgICAgICA8ZGl2IC8+XHJcbiAgICAgICAgPGRpdiAvPlxyXG4gICAgICAgIDxkaXYgLz5cclxuXHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmxkcy1ncmlkIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2NHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDY0cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC5sZHMtZ3JpZCBkaXYge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxM3B4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBsZHMtZ3JpZCAxLjJzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLmxkcy1ncmlkIGRpdjpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICB0b3A6IDZweDtcclxuICAgICAgICAgICAgbGVmdDogNnB4O1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDBzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAubGRzLWdyaWQgZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgIHRvcDogNnB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAyNnB4O1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjRzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAubGRzLWdyaWQgZGl2Om50aC1jaGlsZCgzKSB7XHJcbiAgICAgICAgICAgIHRvcDogNnB4O1xyXG4gICAgICAgICAgICBsZWZ0OiA0NXB4O1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjhzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAubGRzLWdyaWQgZGl2Om50aC1jaGlsZCg0KSB7XHJcbiAgICAgICAgICAgIHRvcDogMjZweDtcclxuICAgICAgICAgICAgbGVmdDogNnB4O1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjRzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAubGRzLWdyaWQgZGl2Om50aC1jaGlsZCg1KSB7XHJcbiAgICAgICAgICAgIHRvcDogMjZweDtcclxuICAgICAgICAgICAgbGVmdDogMjZweDtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC44cztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLmxkcy1ncmlkIGRpdjpudGgtY2hpbGQoNikge1xyXG4gICAgICAgICAgICB0b3A6IDI2cHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDQ1cHg7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTEuMnM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC5sZHMtZ3JpZCBkaXY6bnRoLWNoaWxkKDcpIHtcclxuICAgICAgICAgICAgdG9wOiA0NXB4O1xyXG4gICAgICAgICAgICBsZWZ0OiA2cHg7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOHM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC5sZHMtZ3JpZCBkaXY6bnRoLWNoaWxkKDgpIHtcclxuICAgICAgICAgICAgdG9wOiA0NXB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAyNnB4O1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0xLjJzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAubGRzLWdyaWQgZGl2Om50aC1jaGlsZCg5KSB7XHJcbiAgICAgICAgICAgIHRvcDogNDVweDtcclxuICAgICAgICAgICAgbGVmdDogNDVweDtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMS42cztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgQGtleWZyYW1lcyBsZHMtZ3JpZCB7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgMCUsXHJcbiAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICA1MCUge1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufSJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\lbrito\\\\Dropbox\\\\Desarrollos\\\\Movenu Version 2019\\\\components\\\\Loader.js */"));
  }

}

/***/ }),

/***/ "./components/MiniLoader.js":
/*!**********************************!*\
  !*** ./components/MiniLoader.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MiniLoader; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\lbrito\\Dropbox\\Desarrollos\\Movenu Version 2019\\components\\MiniLoader.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

class MiniLoader extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return __jsx("div", {
      className: "jsx-1226991658" + " " + "lds-grid",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1226991658",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-1226991658",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-1226991658",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1226991658",
      __self: this
    }, ".lds-grid.jsx-1226991658{display:inline-block;position:relative;width:64px;height:64px;}.lds-grid.jsx-1226991658 div.jsx-1226991658{position:absolute;width:13px;height:13px;border-radius:50%;background:#000;-webkit-animation:lds-grid-jsx-1226991658 1.2s linear infinite;animation:lds-grid-jsx-1226991658 1.2s linear infinite;}.lds-grid.jsx-1226991658 div.jsx-1226991658:nth-child(1){top:6px;left:6px;-webkit-animation-delay:0s;animation-delay:0s;}.lds-grid.jsx-1226991658 div.jsx-1226991658:nth-child(2){top:6px;left:26px;-webkit-animation-delay:-0.4s;animation-delay:-0.4s;}.lds-grid.jsx-1226991658 div.jsx-1226991658:nth-child(3){top:6px;left:45px;-webkit-animation-delay:-0.8s;animation-delay:-0.8s;}.lds-grid.jsx-1226991658 div.jsx-1226991658:nth-child(4){top:26px;left:6px;-webkit-animation-delay:-0.4s;animation-delay:-0.4s;}.lds-grid.jsx-1226991658 div.jsx-1226991658:nth-child(5){top:26px;left:26px;-webkit-animation-delay:-0.8s;animation-delay:-0.8s;}.lds-grid.jsx-1226991658 div.jsx-1226991658:nth-child(6){top:26px;left:45px;-webkit-animation-delay:-1.2s;animation-delay:-1.2s;}.lds-grid.jsx-1226991658 div.jsx-1226991658:nth-child(7){top:45px;left:6px;-webkit-animation-delay:-0.8s;animation-delay:-0.8s;}.lds-grid.jsx-1226991658 div.jsx-1226991658:nth-child(8){top:45px;left:26px;-webkit-animation-delay:-1.2s;animation-delay:-1.2s;}.lds-grid.jsx-1226991658 div.jsx-1226991658:nth-child(9){top:45px;left:45px;-webkit-animation-delay:-1.6s;animation-delay:-1.6s;}@-webkit-keyframes lds-grid-jsx-1226991658{0%,100%{opacity:1;}50%{opacity:0.5;}}@keyframes lds-grid-jsx-1226991658{0%,100%{opacity:1;}50%{opacity:0.5;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbGJyaXRvXFxEcm9wYm94XFxEZXNhcnJvbGxvc1xcTW92ZW51IFZlcnNpb24gMjAxOVxcY29tcG9uZW50c1xcTWluaUxvYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVb0IsQUFHa0MsQUFPSCxBQVNWLEFBTUEsQUFNQSxBQU1DLEFBTUEsQUFNQSxBQU1BLEFBTUEsQUFNQSxBQVNHLEFBSUUsUUE1REwsQUFNQyxBQU1BLENBTUQsQUFNQyxBQU1BLEFBTUQsQUFNQyxBQU1BLENBU1YsRUFJQSxLQTVEbUIsQ0FWUixBQWdCVyxBQU1BLEFBTUEsQUFrQkEsQ0FaQSxBQU1BLEFBWUEsQUFNQSxFQWpFSixRQVFOLFVBUEQsRUFRTyxTQVBOLFNBUUksR0FQbEIsQ0FlQSxPQU1BLEFBTUEsQUFNQSxBQWtCQSxDQVpBLEFBTUEsQUFZQSxBQU1BLElBdkQwQyxzSEFDMUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxsYnJpdG9cXERyb3Bib3hcXERlc2Fycm9sbG9zXFxNb3ZlbnUgVmVyc2lvbiAyMDE5XFxjb21wb25lbnRzXFxNaW5pTG9hZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pbmlMb2FkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGRzLWdyaWRcIj5cclxuICAgICAgICA8ZGl2IC8+XHJcbiAgICAgICAgPGRpdiAvPlxyXG4gICAgICAgIDxkaXYgLz5cclxuXHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmxkcy1ncmlkIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2NHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDY0cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC5sZHMtZ3JpZCBkaXYge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxM3B4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBsZHMtZ3JpZCAxLjJzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLmxkcy1ncmlkIGRpdjpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICB0b3A6IDZweDtcclxuICAgICAgICAgICAgbGVmdDogNnB4O1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDBzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAubGRzLWdyaWQgZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgIHRvcDogNnB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAyNnB4O1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjRzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAubGRzLWdyaWQgZGl2Om50aC1jaGlsZCgzKSB7XHJcbiAgICAgICAgICAgIHRvcDogNnB4O1xyXG4gICAgICAgICAgICBsZWZ0OiA0NXB4O1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjhzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAubGRzLWdyaWQgZGl2Om50aC1jaGlsZCg0KSB7XHJcbiAgICAgICAgICAgIHRvcDogMjZweDtcclxuICAgICAgICAgICAgbGVmdDogNnB4O1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjRzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAubGRzLWdyaWQgZGl2Om50aC1jaGlsZCg1KSB7XHJcbiAgICAgICAgICAgIHRvcDogMjZweDtcclxuICAgICAgICAgICAgbGVmdDogMjZweDtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC44cztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLmxkcy1ncmlkIGRpdjpudGgtY2hpbGQoNikge1xyXG4gICAgICAgICAgICB0b3A6IDI2cHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDQ1cHg7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTEuMnM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC5sZHMtZ3JpZCBkaXY6bnRoLWNoaWxkKDcpIHtcclxuICAgICAgICAgICAgdG9wOiA0NXB4O1xyXG4gICAgICAgICAgICBsZWZ0OiA2cHg7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOHM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC5sZHMtZ3JpZCBkaXY6bnRoLWNoaWxkKDgpIHtcclxuICAgICAgICAgICAgdG9wOiA0NXB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAyNnB4O1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0xLjJzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAubGRzLWdyaWQgZGl2Om50aC1jaGlsZCg5KSB7XHJcbiAgICAgICAgICAgIHRvcDogNDVweDtcclxuICAgICAgICAgICAgbGVmdDogNDVweDtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMS42cztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgQGtleWZyYW1lcyBsZHMtZ3JpZCB7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgMCUsXHJcbiAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICA1MCUge1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\lbrito\\\\Dropbox\\\\Desarrollos\\\\Movenu Version 2019\\\\components\\\\MiniLoader.js */"));
  }

}

/***/ }),

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_LOGO_MOVENU_BLANCO_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static/LOGO-MOVENU-BLANCO.png */ "./static/LOGO-MOVENU-BLANCO.png");
/* harmony import */ var _static_LOGO_MOVENU_BLANCO_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_LOGO_MOVENU_BLANCO_png__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\lbrito\\Dropbox\\Desarrollos\\Movenu Version 2019\\components\\Navbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Navbar = () => {
  return __jsx("div", {
    className: "Navbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    className: "container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    className: "Navbar__brand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("a", {
    className: "Navbar__brand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("img", {
    className: "Navbar__brand-logo",
    src: _static_LOGO_MOVENU_BLANCO_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "Logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), __jsx("span", {
    className: "font-weight-light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "Crisis"), __jsx("span", {
    className: "font-weight-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "Staff"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("a", {
    className: "font-weight-light Navbar__items",
    href: "/unicameral",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "Crisis Unicameral")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("a", {
    className: "font-weight-light Navbar__items",
    href: "/bicameral",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, "Crisis Bicameral")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("a", {
    className: "font-weight-light Navbar__items",
    href: "/security",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, "Security Council")))), __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, `
            .Navbar {
                width: 100%;
                padding: 0.5rem 0;
                padding-left: 15px;
                background-color: #1C3643;
              }
              
              .Navbar__brand {
                color: #ffffff;
                display: inline-flex;
                align-items: center;
                text-decoration: none;
              }
              
              .Navbar__brand:hover {
                color: #ffffff;
                text-decoration: none;
              }
              
              .Navbar__brand-logo {
                margin-right: 0.5rem;
                width: 50px;
              }
              
              .Navbar__items{
                padding-left: 30px;
                color: #ffffff;
                text-decoration: none;
              }
              
              .Navbar__items:hover {
                color: #ffffff;
                text-decoration: none;
              }
              .container-fluid {
                width: 100%;
                padding-left: 15px;

              }
              .navbar > .container,
              .navbar > .container-fluid {
                display: -ms-flexbox;
                display: flex;
                -ms-flex-wrap: wrap;
                flex-wrap: wrap;
                -ms-flex-align: center;
                align-items: center;
                -ms-flex-pack: justify;
                justify-content: space-between;
              }

              @media (max-width: 575.98px) {
                .navbar-expand-sm > .container,
                .navbar-expand-sm > .container-fluid {
                  padding-right: 0;
                  padding-left: 0;
                }
              }
              .navbar-expand-sm > .container,
              .navbar-expand-sm > .container-fluid {
                -ms-flex-wrap: nowrap;
                flex-wrap: nowrap;
              }
              @media (max-width: 767.98px) {
                .navbar-expand-md > .container,
                .navbar-expand-md > .container-fluid {
                  padding-right: 0;
                  padding-left: 0;
                }
              }
              .navbar-expand-md > .container,
              .navbar-expand-md > .container-fluid {
                -ms-flex-wrap: nowrap;
                flex-wrap: nowrap;
              }
              @media (max-width: 991.98px) {
                .navbar-expand-lg > .container,
                .navbar-expand-lg > .container-fluid {
                  padding-right: 0;
                  padding-left: 0;
                }
              }
              .navbar-expand-lg > .container,
              .navbar-expand-lg > .container-fluid {
                -ms-flex-wrap: nowrap;
                flex-wrap: nowrap;
              }
              @media (max-width: 1199.98px) {
                .navbar-expand-xl > .container,
                .navbar-expand-xl > .container-fluid {
                  padding-right: 0;
                  padding-left: 0;
                }
              }
              .navbar-expand-xl > .container,
              .navbar-expand-xl > .container-fluid {
                -ms-flex-wrap: nowrap;
                flex-wrap: nowrap;
              }
              .navbar-expand > .container,
              .navbar-expand > .container-fluid {
                padding-right: 0;
                padding-left: 0;
              }
              .navbar-expand > .container,
              .navbar-expand > .container-fluid {
                -ms-flex-wrap: nowrap;
                flex-wrap: nowrap;
              }

              .font-weight-light {
                font-weight: 300 !important;

              }
              .font-weight-bold {
                font-weight: 700 !important;

              }
        `));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/PageLoading.js":
/*!***********************************!*\
  !*** ./components/PageLoading.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loader */ "./components/Loader.js");
var _jsxFileName = "C:\\Users\\lbrito\\Dropbox\\Desarrollos\\Movenu Version 2019\\components\\PageLoading.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function PageLoading() {
  return __jsx("div", {
    className: "PageLoading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(_Loader__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, `
            .PageLoading {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            width: 100%;
          }
        `));
}

/* harmony default export */ __webpack_exports__["default"] = (PageLoading);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};

  if (obj != null) {
    var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          _Object$defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          const error = 'The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as';

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if (Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = m.indexOf('/') !== -1 ? m.split('/').map(entry => decodeURIComponent(entry)) : decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
  ] = groupIndex++, $1.indexOf('\\.\\.\\.') === 0 ? '/(.+?)' : '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (true) {
    if (App.prototype && App.prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/bicameral.js":
/*!****************************!*\
  !*** ./pages/bicameral.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_LOGO_MOVENU_BLANCO_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/LOGO-MOVENU-BLANCO.png */ "./static/LOGO-MOVENU-BLANCO.png");
/* harmony import */ var _static_LOGO_MOVENU_BLANCO_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_LOGO_MOVENU_BLANCO_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_BicameralList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/BicameralList */ "./components/BicameralList.js");
/* harmony import */ var _components_BicameralListTwo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/BicameralListTwo */ "./components/BicameralListTwo.js");
/* harmony import */ var _components_PageLoading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/PageLoading */ "./components/PageLoading.js");
/* harmony import */ var _components_MiniLoader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/MiniLoader */ "./components/MiniLoader.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
var _jsxFileName = "C:\\Users\\lbrito\\Dropbox\\Desarrollos\\Movenu Version 2019\\pages\\bicameral.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









const Bicameral = props => {
  const {
    data,
    statusCode,
    loading
  } = props;

  if (!data.results) {
    return __jsx(_components_PageLoading__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: undefined
    });
  }

  if (statusCode !== 200) {
    return __jsx(PageError
    /*  error={error} */
    , {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: undefined
    });
  }

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1126486022",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1126486022" + " " + "Badges__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1126486022" + " " + "Badges__list__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1126486022" + " " + "Badges__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1126486022" + " " + "Badges__buttons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    route: "",
    className: "btn btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "Nuevo delegado"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    route: "",
    className: "btn btn-secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "Nueva Directiva")), __jsx(_components_BicameralList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    badges: data.results,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }), loading && __jsx(_components_MiniLoader__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }))), __jsx("div", {
    className: "jsx-1126486022" + " " + "Badges__list__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1126486022" + " " + "Badges__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1126486022" + " " + "Badges__buttons_two",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    to: "/comite/bicameral/new",
    className: "btn btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, "Nuevo delegado"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    to: "/directive/newTwo",
    className: "btn btn-secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "Nueva Directiva")), __jsx(_components_BicameralListTwo__WEBPACK_IMPORTED_MODULE_6__["default"], {
    badges: data.results,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }), loading && __jsx(_components_MiniLoader__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2643333286",
    __self: undefined
  }, ".Badges__hero.jsx-1126486022{width:100%;padding:2rem 0;background:url('../static/stars.svg'),#1B1B25;background-repeat:repeat;margin-bottom:1rem;}.Badges__hero.jsx-1126486022>.Badges__container.jsx-1126486022{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.Badges__container.jsx-1126486022{width:100%;height:auto;padding:0 1rem;}.Badges__list__container.jsx-1126486022{width:45%;height:auto;max-width:1080px;padding:0 1rem;display:inline-table;}.Badges__list__container.jsx-1126486022>.form-group.jsx-1126486022{display:inline-block;width:50%;padding:10px;}.Badges__list__container.jsx-1126486022>.Badges__buttons.jsx-1126486022{display:inline-block;width:50%;padding:10px;}.Badges__list__container.jsx-1126486022>.Badges__buttons_two.jsx-1126486022{display:inline-block;width:50%;padding:10px;}.Badges_conf-logo.jsx-1126486022{margin-bottom:2rem;width:260px;}.Badges__buttons.jsx-1126486022{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;margin-bottom:1rem;}.Badges__buttons_two.jsx-1126486022{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;margin-bottom:1rem;}.btn.jsx-1126486022{display:inline-block;font-weight:400;color:#212529;text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;padding:0.375rem 0.75rem;font-size:1rem;line-height:1.5;border-radius:0.25rem;-webkit-transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;}.btn.jsx-1126486022:hover{color:#212529;-webkit-text-decoration:none;text-decoration:none;}.btn-primary.jsx-1126486022{color:#fff;background-color:#007bff;border-color:#007bff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbGJyaXRvXFxEcm9wYm94XFxEZXNhcnJvbGxvc1xcTW92ZW51IFZlcnNpb24gMjAxOVxccGFnZXNcXGJpY2FtZXJhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RHdCLEFBRzRCLEFBUUUsQUFNRixBQU1ELEFBU1csQUFPQSxBQUtBLEFBUUYsQUFLTixBQUtBLEFBS1EsQUFrQlAsQUFJSCxVQWpFQyxDQXBCRyxBQWNILEFBd0VhLEdBSkosS0FqQ1QsRUFwQkYsQUFPQSxBQUtBLEFBdUJNLENBM0NDLENBTkYsR0FkZ0MsS0E2QmxDLEFBT0EsQUFLQSxBQVFqQixLQXFDeUIsQ0F0QlAsQ0FqRGxCLENBTW1CLEtBU25CLEFBT0EsQUFLQSxPQXVCc0IsR0EzQ0csR0FpRXpCLE9BTEEsS0FoQjBCLEdBakVHLEVBTUgsQUE4Q0ssQUFLRixDQWxDN0IsZ0JBMkM2QixNQWpFTixtQkFDdkIsQUFpRTBCLHNCQUNELGNBN0RGLE9BOERGLFlBWEUsUUFMQSxXQU12QixRQUxBLDhDQWdCaUMsQ0E5RGpDLDRCQStEaUMsNkJBQ0oseUJBQ1YsZUFDQyxnQkFDTSxzQkFDK0csNFFBQ3pJIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbGJyaXRvXFxEcm9wYm94XFxEZXNhcnJvbGxvc1xcTW92ZW51IFZlcnNpb24gMjAxOVxccGFnZXNcXGJpY2FtZXJhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IGNvbmZMb2dvIGZyb20gJy4uL3N0YXRpYy9MT0dPLU1PVkVOVS1CTEFOQ08ucG5nJztcclxuaW1wb3J0IEJpY2FtZXJhbExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9CaWNhbWVyYWxMaXN0JztcclxuaW1wb3J0IEJpY2FtZXJhbExpc3RUd28gZnJvbSAnLi4vY29tcG9uZW50cy9CaWNhbWVyYWxMaXN0VHdvJztcclxuaW1wb3J0IFBhZ2VMb2FkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZUxvYWRpbmcnO1xyXG5pbXBvcnQgTWluaUxvYWRlciBmcm9tICcuLi9jb21wb25lbnRzL01pbmlMb2FkZXInO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuXHJcblxyXG5jb25zdCBCaWNhbWVyYWwgPSAocHJvcHMpID0+ICB7XHJcbiAgICBjb25zdCB7ZGF0YSwgc3RhdHVzQ29kZSwgbG9hZGluZ30gPSBwcm9wcztcclxuXHJcbiAgICBpZiAoIWRhdGEucmVzdWx0cykge1xyXG4gICAgICByZXR1cm4gPFBhZ2VMb2FkaW5nIC8+O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzdGF0dXNDb2RlIT09IDIwMCkge1xyXG4gICAgICByZXR1cm4gPFBhZ2VFcnJvci8qICBlcnJvcj17ZXJyb3J9ICovIC8+O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJhZGdlc19fY29udGFpbmVyXCI+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJhZGdlc19fbGlzdF9fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJhZGdlc19fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJhZGdlc19fYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPVwiXCIgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIE51ZXZvIGRlbGVnYWRvXHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPVwiXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICBOdWV2YSBEaXJlY3RpdmFcclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8QmljYW1lcmFsTGlzdCBiYWRnZXM9e2RhdGEucmVzdWx0c30vPlxyXG5cclxuICAgICAgICAgICAgICAgIHtsb2FkaW5nICYmIDxNaW5pTG9hZGVyIC8+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJhZGdlc19fbGlzdF9fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJhZGdlc19fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJhZGdlc19fYnV0dG9uc190d29cIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9jb21pdGUvYmljYW1lcmFsL25ld1wiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIE51ZXZvIGRlbGVnYWRvXHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2RpcmVjdGl2ZS9uZXdUd29cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIE51ZXZhIERpcmVjdGl2YVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEJpY2FtZXJhbExpc3RUd28gYmFkZ2VzPXtkYXRhLnJlc3VsdHN9Lz5cclxuXHJcbiAgICAgICAgICAgICAgICB7bG9hZGluZyAmJiA8TWluaUxvYWRlciAvPn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLkJhZGdlc19faGVybyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vc3RhdGljL3N0YXJzLnN2ZycpLCAjMUIxQjI1O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5CYWRnZXNfX2hlcm8+LkJhZGdlc19fY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLkJhZGdlc19fY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxcmVtO1xyXG4gICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5CYWRnZXNfX2xpc3RfX2NvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDgwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuQmFkZ2VzX19saXN0X19jb250YWluZXI+LmZvcm0tZ3JvdXB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUJPVE9ORVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLkJhZGdlc19fbGlzdF9fY29udGFpbmVyPi5CYWRnZXNfX2J1dHRvbnN7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuQmFkZ2VzX19saXN0X19jb250YWluZXI+LkJhZGdlc19fYnV0dG9uc190d297XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1CT1RPTkVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5CYWRnZXNfY29uZi1sb2dvIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjYwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5CYWRnZXNfX2J1dHRvbnMge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLkJhZGdlc19fYnV0dG9uc190d28ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5idG4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjEyNTI5O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYnRuOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjEyNTI5O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5idG4tcHJpbWFyeSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICMwMDdiZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXg6aGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKVxyXG5cclxuICAgIH1cclxuXHJcbiAgQmljYW1lcmFsLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHJlcyB9KSA9PiB7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IHJlcSA9IGF3YWl0IGZldGNoKCdodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3RlcicpO1xyXG4gICAgICAvKiBsZXQgcmVxID0gYXdhaXQgYXBpLmJhZGdlcy5saXN0KCk7ICovXHJcbiAgICAgIGxldCBkYXRhID0gYXdhaXQgcmVxLmpzb24oKTtcclxuXHJcbiAgICAgIHJldHVybiB7ZGF0YSwgc3RhdHVzQ29kZTogMjAwLCBsb2FkaW5nOiBmYWxzZX1cclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNTAzXHJcbiAgICAgICAgcmV0dXJue2RhdGE6IG51bGwsIHN0YXR1c0NvZGU6IDUwMyB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBCaWNhbWVyYWw7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\lbrito\\\\Dropbox\\\\Desarrollos\\\\Movenu Version 2019\\\\pages\\\\bicameral.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3726503593",
    __self: undefined
  }, "body{margin:0;overflow-x:hidden;font-family:system-ui;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbGJyaXRvXFxEcm9wYm94XFxEZXNhcnJvbGxvc1xcTW92ZW51IFZlcnNpb24gMjAxOVxccGFnZXNcXGJpY2FtZXJhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwSjJDLEFBR2tDLFNBQ1Esa0JBQ0ssc0JBQzFCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbGJyaXRvXFxEcm9wYm94XFxEZXNhcnJvbGxvc1xcTW92ZW51IFZlcnNpb24gMjAxOVxccGFnZXNcXGJpY2FtZXJhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IGNvbmZMb2dvIGZyb20gJy4uL3N0YXRpYy9MT0dPLU1PVkVOVS1CTEFOQ08ucG5nJztcclxuaW1wb3J0IEJpY2FtZXJhbExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9CaWNhbWVyYWxMaXN0JztcclxuaW1wb3J0IEJpY2FtZXJhbExpc3RUd28gZnJvbSAnLi4vY29tcG9uZW50cy9CaWNhbWVyYWxMaXN0VHdvJztcclxuaW1wb3J0IFBhZ2VMb2FkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZUxvYWRpbmcnO1xyXG5pbXBvcnQgTWluaUxvYWRlciBmcm9tICcuLi9jb21wb25lbnRzL01pbmlMb2FkZXInO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuXHJcblxyXG5jb25zdCBCaWNhbWVyYWwgPSAocHJvcHMpID0+ICB7XHJcbiAgICBjb25zdCB7ZGF0YSwgc3RhdHVzQ29kZSwgbG9hZGluZ30gPSBwcm9wcztcclxuXHJcbiAgICBpZiAoIWRhdGEucmVzdWx0cykge1xyXG4gICAgICByZXR1cm4gPFBhZ2VMb2FkaW5nIC8+O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzdGF0dXNDb2RlIT09IDIwMCkge1xyXG4gICAgICByZXR1cm4gPFBhZ2VFcnJvci8qICBlcnJvcj17ZXJyb3J9ICovIC8+O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJhZGdlc19fY29udGFpbmVyXCI+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJhZGdlc19fbGlzdF9fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJhZGdlc19fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJhZGdlc19fYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPVwiXCIgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIE51ZXZvIGRlbGVnYWRvXHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPVwiXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICBOdWV2YSBEaXJlY3RpdmFcclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8QmljYW1lcmFsTGlzdCBiYWRnZXM9e2RhdGEucmVzdWx0c30vPlxyXG5cclxuICAgICAgICAgICAgICAgIHtsb2FkaW5nICYmIDxNaW5pTG9hZGVyIC8+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJhZGdlc19fbGlzdF9fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJhZGdlc19fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJhZGdlc19fYnV0dG9uc190d29cIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9jb21pdGUvYmljYW1lcmFsL25ld1wiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIE51ZXZvIGRlbGVnYWRvXHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2RpcmVjdGl2ZS9uZXdUd29cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIE51ZXZhIERpcmVjdGl2YVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEJpY2FtZXJhbExpc3RUd28gYmFkZ2VzPXtkYXRhLnJlc3VsdHN9Lz5cclxuXHJcbiAgICAgICAgICAgICAgICB7bG9hZGluZyAmJiA8TWluaUxvYWRlciAvPn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLkJhZGdlc19faGVybyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vc3RhdGljL3N0YXJzLnN2ZycpLCAjMUIxQjI1O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5CYWRnZXNfX2hlcm8+LkJhZGdlc19fY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLkJhZGdlc19fY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxcmVtO1xyXG4gICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5CYWRnZXNfX2xpc3RfX2NvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDgwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuQmFkZ2VzX19saXN0X19jb250YWluZXI+LmZvcm0tZ3JvdXB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUJPVE9ORVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLkJhZGdlc19fbGlzdF9fY29udGFpbmVyPi5CYWRnZXNfX2J1dHRvbnN7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuQmFkZ2VzX19saXN0X19jb250YWluZXI+LkJhZGdlc19fYnV0dG9uc190d297XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1CT1RPTkVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5CYWRnZXNfY29uZi1sb2dvIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjYwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5CYWRnZXNfX2J1dHRvbnMge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLkJhZGdlc19fYnV0dG9uc190d28ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5idG4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjEyNTI5O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYnRuOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjEyNTI5O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5idG4tcHJpbWFyeSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICMwMDdiZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXg6aGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKVxyXG5cclxuICAgIH1cclxuXHJcbiAgQmljYW1lcmFsLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHJlcyB9KSA9PiB7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IHJlcSA9IGF3YWl0IGZldGNoKCdodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3RlcicpO1xyXG4gICAgICAvKiBsZXQgcmVxID0gYXdhaXQgYXBpLmJhZGdlcy5saXN0KCk7ICovXHJcbiAgICAgIGxldCBkYXRhID0gYXdhaXQgcmVxLmpzb24oKTtcclxuXHJcbiAgICAgIHJldHVybiB7ZGF0YSwgc3RhdHVzQ29kZTogMjAwLCBsb2FkaW5nOiBmYWxzZX1cclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNTAzXHJcbiAgICAgICAgcmV0dXJue2RhdGE6IG51bGwsIHN0YXR1c0NvZGU6IDUwMyB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBCaWNhbWVyYWw7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\lbrito\\\\Dropbox\\\\Desarrollos\\\\Movenu Version 2019\\\\pages\\\\bicameral.js */")));
};

Bicameral.getInitialProps = async ({
  res
}) => {
  try {
    let req = await fetch('https://rickandmortyapi.com/api/character');
    /* let req = await api.badges.list(); */

    let data = await req.json();
    return {
      data,
      statusCode: 200,
      loading: false
    };
  } catch (error) {
    res.statusCode = 503;
    return {
      data: null,
      statusCode: 503
    };
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Bicameral);

/***/ }),

/***/ "./static/LOGO-MOVENU-BLANCO.png":
/*!***************************************!*\
  !*** ./static/LOGO-MOVENU-BLANCO.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/LOGO-MOVENU-BLANCO-ad94e60208a55a64bd8d3badcdf63180.png";

/***/ }),

/***/ 4:
/*!**********************************!*\
  !*** multi ./pages/bicameral.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\lbrito\Dropbox\Desarrollos\Movenu Version 2019\pages\bicameral.js */"./pages/bicameral.js");


/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "md5":
/*!**********************!*\
  !*** external "md5" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("md5");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=bicameral.js.map