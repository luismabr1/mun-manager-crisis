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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\lbrito\\Dropbox\\Desarrollos\\Movenu Version 2019\\components\\BicameralList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


/* import Gravatar from './Gravatar'; */

class BadgesListItem extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return __jsx("div", {
      className: "jsx-3997022185" + " " + "BadgesListItem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx(Gravatar, {
      className: "BadgesListItem__avatar",
      email: this.props.badge.email,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-3997022185",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("strong", {
      className: "jsx-3997022185",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, this.props.badge.delegado, "\xA0\xA0 || \xA0\xA0", this.props.badge.comite), __jsx("br", {
      className: "jsx-3997022185",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }), "@", this.props.badge.asunto, __jsx("br", {
      className: "jsx-3997022185",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }), this.props.badge.descripcion), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3997022185",
      __self: this
    }, ".BadgesList.jsx-3997022185 ul.jsx-3997022185>li.jsx-3997022185{margin-bottom:1rem;}.BadgesListItem.jsx-3997022185{background:#FFFFFF;box-shadow:0 2px 4px 0 rgba(0,0,0,0.23);border-radius:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:1rem;}.BadgesListItem__avatar.jsx-3997022185{border-radius:50%;background:#a3a3a3;margin-right:0.5rem;width:80px;height:80px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbGJyaXRvXFxEcm9wYm94XFxEZXNhcnJvbGxvc1xcTW92ZW51IFZlcnNpb24gMjAxOVxcY29tcG9uZW50c1xcQmljYW1lcmFsTGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Qm9CLEFBR29DLEFBSUEsQUFRRCxrQkFDQyxDQVpyQixBQUk2QyxrQkFTdkIsb0JBQ1QsRUFUTyxTQVVOLFNBVEMsR0FVZix1RUFUZSxhQUNmIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbGJyaXRvXFxEcm9wYm94XFxEZXNhcnJvbGxvc1xcTW92ZW51IFZlcnNpb24gMjAxOVxcY29tcG9uZW50c1xcQmljYW1lcmFsTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbi8qIGltcG9ydCBHcmF2YXRhciBmcm9tICcuL0dyYXZhdGFyJzsgKi9cclxuXHJcblxyXG5cclxuY2xhc3MgQmFkZ2VzTGlzdEl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQmFkZ2VzTGlzdEl0ZW1cIj5cclxuICAgICAgICA8R3JhdmF0YXJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIkJhZGdlc0xpc3RJdGVtX19hdmF0YXJcIlxyXG4gICAgICAgICAgZW1haWw9e3RoaXMucHJvcHMuYmFkZ2UuZW1haWx9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzdHJvbmc+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmJhZGdlLmRlbGVnYWRvfVxyXG4gICAgICAgICAgICAmbmJzcDsmbmJzcDsgfHwgJm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmJhZGdlLmNvbWl0ZX1cclxuICAgICAgICAgIDwvc3Ryb25nPlxyXG4gICAgICAgICAgPGJyIC8+QHt0aGlzLnByb3BzLmJhZGdlLmFzdW50b31cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAge3RoaXMucHJvcHMuYmFkZ2UuZGVzY3JpcGNpb259XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAuQmFkZ2VzTGlzdCB1bD5saSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAuQmFkZ2VzTGlzdEl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4yMyk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLkJhZGdlc0xpc3RJdGVtX19hdmF0YXIge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2EzYTNhMztcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXNlU2VhcmNoQmFkZ2VzKGJhZGdlcykge1xyXG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gUmVhY3QudXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtmaWx0ZXJlZEJhZGdlcywgc2V0RmlsdGVyZWRCYWRnZXNdID0gUmVhY3QudXNlU3RhdGUoYmFkZ2VzKTtcclxuXHJcbiAgUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBiYWRnZXMuZmlsdGVyKGJhZGdlID0+IHtcclxuICAgICAgaWYoYmFkZ2UuY2xhdmU9PT1cImNvbWl0ZWJcIil7XHJcbiAgICAgIHJldHVybiBgJHtiYWRnZS5kZXNjcmlwY2lvbn1gXHJcbiAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAuaW5jbHVkZXMocXVlcnkudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHNldEZpbHRlcmVkQmFkZ2VzKHJlc3VsdCk7XHJcbiAgfSwgW2JhZGdlcywgcXVlcnldKTtcclxuXHJcbiAgcmV0dXJuIHsgcXVlcnksIHNldFF1ZXJ5LCBmaWx0ZXJlZEJhZGdlcyB9O1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gQmFkZ2VzTGlzdChwcm9wcykge1xyXG4gIGNvbnN0IGJhZGdlcyA9IHByb3BzLmJhZGdlcztcclxuXHJcbiAgY29uc3QgeyBxdWVyeSwgc2V0UXVlcnksIGZpbHRlcmVkQmFkZ2VzIH0gPSB1c2VTZWFyY2hCYWRnZXMoYmFkZ2VzKTtcclxuXHJcbiAgaWYgKGZpbHRlcmVkQmFkZ2VzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbD5GaWx0ZXIgRGlyZWN0aXZlczwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbWl0ZSBCXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0UXVlcnkoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGgzPk5vIGRpcmVjdGl2ZXMgb3IgZGVsZWdhdGVzIHdlcmUgZm91bmQ8L2gzPlxyXG4gICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHRvPVwiL2NvbWl0ZS9iaWNhbWVyYWwvbmV3XCI+XHJcbiAgICAgICAgICBDcmVhdGUgbmV3IERlbGVnYXRlXHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfSBcclxuXHJcbiAgcmV0dXJuIChcclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkJhZGdlc19fY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbD5GaWx0ZXIgRGlyZWN0aXZlczwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJ1c2NhciBlbiBjb21pdGUgQlwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17cXVlcnl9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0UXVlcnkoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICBcclxuXHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZFwiPlxyXG4gICAgICAgICAgICB7ZmlsdGVyZWRCYWRnZXMubWFwKGJhZGdlID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17YmFkZ2UuaWR9PlxyXG4gICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcmVzZXQgdGV4dC1kZWNvcmF0aW9uLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRvPXtgL2NvbWl0ZS9iaWNhbWVyYWwvJHtiYWRnZS5pZH1gfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJhZGdlc0xpc3RJdGVtIGJhZGdlPXtiYWRnZX0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICA8L2Rpdj5cclxuXHJcblxyXG4gICk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhZGdlc0xpc3Q7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\lbrito\\\\Dropbox\\\\Desarrollos\\\\Movenu Version 2019\\\\components\\\\BicameralList.js */"));
  }

}

function useSearchBadges(badges) {
  const [query, setQuery] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('');
  const [filteredBadges, setFilteredBadges] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(badges);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useMemo(() => {
    const result = badges.filter(badge => {
      if (badge.clave === "comiteb") {
        return `${badge.descripcion}`.toLowerCase().includes(query.toLowerCase());
      }
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
        lineNumber: 79
      },
      __self: this
    }, __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, __jsx("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
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
        lineNumber: 82
      },
      __self: this
    })), __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, "No directives or delegates were found"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "btn btn-primary",
      to: "/comite/bicameral/new",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, "Create new Delegate"));
  }

  return __jsx("div", {
    className: "Badges__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
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
      lineNumber: 106
    },
    __self: this
  }), __jsx("ul", {
    className: "list-unstyled",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, filteredBadges.map(badge => {
    return __jsx("li", {
      key: badge.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "text-reset text-decoration-none",
      to: `/comite/bicameral/${badge.id}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, __jsx(BadgesListItem, {
      badge: badge,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    })));
  }))));
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
var _jsxFileName = "C:\\Users\\lbrito\\Dropbox\\Desarrollos\\Movenu Version 2019\\components\\BicameralListTwo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


/* import Gravatar from './Gravatar'; */

class BadgesListItem extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return __jsx("div", {
      className: "jsx-3997022185" + " " + "BadgesListItem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx(Gravatar, {
      className: "BadgesListItem__avatar",
      email: this.props.badge.email,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-3997022185",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("strong", {
      className: "jsx-3997022185",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, this.props.badge.delegado, "\xA0\xA0 || \xA0\xA0", this.props.badge.comite), __jsx("br", {
      className: "jsx-3997022185",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }), "@", this.props.badge.asunto, __jsx("br", {
      className: "jsx-3997022185",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }), this.props.badge.descripcion), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3997022185",
      __self: this
    }, ".BadgesList.jsx-3997022185 ul.jsx-3997022185>li.jsx-3997022185{margin-bottom:1rem;}.BadgesListItem.jsx-3997022185{background:#FFFFFF;box-shadow:0 2px 4px 0 rgba(0,0,0,0.23);border-radius:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:1rem;}.BadgesListItem__avatar.jsx-3997022185{border-radius:50%;background:#a3a3a3;margin-right:0.5rem;width:80px;height:80px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbGJyaXRvXFxEcm9wYm94XFxEZXNhcnJvbGxvc1xcTW92ZW51IFZlcnNpb24gMjAxOVxcY29tcG9uZW50c1xcQmljYW1lcmFsTGlzdFR3by5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Qm9CLEFBR29DLEFBSUEsQUFRRCxrQkFDQyxDQVpyQixBQUk2QyxrQkFTdkIsb0JBQ1QsRUFUTyxTQVVOLFNBVEMsR0FVZix1RUFUZSxhQUNmIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbGJyaXRvXFxEcm9wYm94XFxEZXNhcnJvbGxvc1xcTW92ZW51IFZlcnNpb24gMjAxOVxcY29tcG9uZW50c1xcQmljYW1lcmFsTGlzdFR3by5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbi8qIGltcG9ydCBHcmF2YXRhciBmcm9tICcuL0dyYXZhdGFyJzsgKi9cclxuXHJcblxyXG5cclxuY2xhc3MgQmFkZ2VzTGlzdEl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQmFkZ2VzTGlzdEl0ZW1cIj5cclxuICAgICAgICA8R3JhdmF0YXJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIkJhZGdlc0xpc3RJdGVtX19hdmF0YXJcIlxyXG4gICAgICAgICAgZW1haWw9e3RoaXMucHJvcHMuYmFkZ2UuZW1haWx9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzdHJvbmc+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmJhZGdlLmRlbGVnYWRvfVxyXG4gICAgICAgICAgICAmbmJzcDsmbmJzcDsgfHwgJm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmJhZGdlLmNvbWl0ZX1cclxuICAgICAgICAgIDwvc3Ryb25nPlxyXG4gICAgICAgICAgPGJyIC8+QHt0aGlzLnByb3BzLmJhZGdlLmFzdW50b31cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAge3RoaXMucHJvcHMuYmFkZ2UuZGVzY3JpcGNpb259XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAuQmFkZ2VzTGlzdCB1bD5saSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAuQmFkZ2VzTGlzdEl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4yMyk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLkJhZGdlc0xpc3RJdGVtX19hdmF0YXIge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2EzYTNhMztcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXNlU2VhcmNoQmFkZ2VzKGJhZGdlc1R3bykge1xyXG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gUmVhY3QudXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtmaWx0ZXJlZEJhZGdlcywgc2V0RmlsdGVyZWRCYWRnZXNdID0gUmVhY3QudXNlU3RhdGUoYmFkZ2VzVHdvKTtcclxuXHJcbiAgUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBiYWRnZXNUd28uZmlsdGVyKGJhZGdlID0+IHtcclxuICAgICAgaWYoYmFkZ2UuY2xhdmU9PT1cImNvbWl0ZWNcIil7XHJcbiAgICAgIHJldHVybiBgJHtiYWRnZS5kZWxlZ2Fkb31gXHJcbiAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAuaW5jbHVkZXMocXVlcnkudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgXHJcblxyXG4gICAgc2V0RmlsdGVyZWRCYWRnZXMocmVzdWx0KTtcclxuICB9LCBbYmFkZ2VzVHdvLCBxdWVyeV0pO1xyXG5cclxuICByZXR1cm4geyBxdWVyeSwgc2V0UXVlcnksIGZpbHRlcmVkQmFkZ2VzIH07XHJcbn1cclxuXHJcbi8qICAgZnVuY3Rpb24gdXNlU2VhcmNoQmFkZ2VzVHdvKGJhZGdlc1R3bykge1xyXG4gIGNvbnN0IFtxdWVyeVR3bywgc2V0UXVlcnlUd29dID0gUmVhY3QudXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtmaWx0ZXJlZEJhZGdlc1R3bywgc2V0RmlsdGVyZWRCYWRnZXNUd29dID0gUmVhY3QudXNlU3RhdGUoYmFkZ2VzVHdvKTtcclxuXHJcbiAgUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBiYWRnZXNUd28uZmlsdGVyKGJhZGdlVHdvID0+IHtcclxuICAgICAgcmV0dXJuIGAke2JhZGdlVHdvLmRlbGVnYWRvfWBcclxuICAgICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgIC5pbmNsdWRlcyhxdWVyeVR3by50b0xvd2VyQ2FzZSgpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHNldEZpbHRlcmVkQmFkZ2VzVHdvKHJlc3VsdCk7XHJcbiAgfSwgW2JhZGdlc1R3bywgcXVlcnlUd29dKTtcclxuXHJcbiAgcmV0dXJuIHsgcXVlcnlUd28sIHNldFF1ZXJ5VHdvLCBmaWx0ZXJlZEJhZGdlc1R3b307XHJcbn0gIFxyXG4gKi9cclxuXHJcblxyXG5mdW5jdGlvbiBCYWRnZXNMaXN0KHByb3BzKSB7XHJcbiAgY29uc3QgYmFkZ2VzID0gcHJvcHMuYmFkZ2VzO1xyXG5cclxuXHJcbiAgY29uc3QgeyBxdWVyeSwgc2V0UXVlcnksIGZpbHRlcmVkQmFkZ2VzIH0gPSB1c2VTZWFyY2hCYWRnZXMoYmFkZ2VzKTtcclxuXHJcblxyXG4gIGlmIChmaWx0ZXJlZEJhZGdlcy5sZW5ndGggPT09IDApIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8bGFiZWw+RmlsdGVyIERpcmVjdGl2ZXM8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb21pdGUgQ1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtxdWVyeX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgICAgICAgIHNldFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxoMz5ObyBkaXJlY3RpdmVzIG9yIGRlbGVnYXRlcyB3ZXJlIGZvdW5kPC9oMz5cclxuICAgICAgICA8TGluayBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiB0bz1cIi9jb21pdGUvYmljYW1lcmFsL25ld1wiPlxyXG4gICAgICAgICAgQ3JlYXRlIG5ldyBEZWxlZ2F0ZVxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH0gXHJcblxyXG4vKiAgICBpZiAoZmlsdGVyZWRCYWRnZXNUd28ubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPGxhYmVsPkZpbHRlciBEaXJlY3RpdmVzPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtxdWVyeVR3b31cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgICAgICAgIHNldFF1ZXJ5VHdvKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiBcclxuICAgICAgICA8aDM+Tm8gZGlyZWN0aXZlcyB3ZXJlIGZvdW5kPC9oMz5cclxuICAgICAgICA8TGluayBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiB0bz1cIi9iYWRnZXMvbmV3XCI+XHJcbiAgICAgICAgICBDcmVhdGUgbmV3IHN0YXRlXHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG4gKi9cclxuICByZXR1cm4gKFxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQmFkZ2VzX19jb250YWluZXJcIj5cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbD5GaWx0ZXIgRGlyZWN0aXZlczwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJ1c2NhciBlbiBjb21pdGUgQSBcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgXHJcblxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWRcIj5cclxuICAgICAgICAgICAge2ZpbHRlcmVkQmFkZ2VzLm1hcChiYWRnZSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2JhZGdlLmlkfT5cclxuICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXJlc2V0IHRleHQtZGVjb3JhdGlvbi1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICB0bz17YC9iYWRnZXMvJHtiYWRnZS5pZH1gfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJhZGdlc0xpc3RJdGVtIGJhZGdlPXtiYWRnZX0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgIDwvZGl2PiAqL31cclxuXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8bGFiZWw+RmlsdGVyIERpcmVjdGl2ZXM8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJCdXNjYXIgZW4gY29taXRlIENcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LXVuc3R5bGVkXCI+XHJcbiAgICAgICAgICAgIHtmaWx0ZXJlZEJhZGdlcy5tYXAoYmFkZ2UgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtiYWRnZS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1yZXNldCB0ZXh0LWRlY29yYXRpb24tbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdG89e2AvY29taXRlL2JpY2FtZXJhbC8ke2JhZGdlLmlkfWB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8QmFkZ2VzTGlzdEl0ZW0gYmFkZ2U9e2JhZGdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgPC9kaXY+XHJcblxyXG5cclxuICApO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYWRnZXNMaXN0OyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\lbrito\\\\Dropbox\\\\Desarrollos\\\\Movenu Version 2019\\\\components\\\\BicameralListTwo.js */"));
  }

}

function useSearchBadges(badgesTwo) {
  const [query, setQuery] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('');
  const [filteredBadges, setFilteredBadges] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(badgesTwo);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useMemo(() => {
    const result = badgesTwo.filter(badge => {
      if (badge.clave === "comitec") {
        return `${badge.delegado}`.toLowerCase().includes(query.toLowerCase());
      }
    });
    setFilteredBadges(result);
  }, [badgesTwo, query]);
  return {
    query,
    setQuery,
    filteredBadges
  };
}
/*   function useSearchBadgesTwo(badgesTwo) {
  const [queryTwo, setQueryTwo] = React.useState('');
  const [filteredBadgesTwo, setFilteredBadgesTwo] = React.useState(badgesTwo);

  React.useMemo(() => {
    const result = badgesTwo.filter(badgeTwo => {
      return `${badgeTwo.delegado}`
        .toLowerCase()
        .includes(queryTwo.toLowerCase());
    });

    setFilteredBadgesTwo(result);
  }, [badgesTwo, queryTwo]);

  return { queryTwo, setQueryTwo, filteredBadgesTwo};
}  
 */


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
        lineNumber: 100
      },
      __self: this
    }, __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, __jsx("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, "Filter Directives"), __jsx("input", {
      type: "text",
      placeholder: "Comite C",
      className: "form-control",
      value: query,
      onChange: e => {
        setQuery(e.target.value);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    })), __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, "No directives or delegates were found"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "btn btn-primary",
      to: "/comite/bicameral/new",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, "Create new Delegate"));
  }
  /*    if (filteredBadgesTwo.length === 0) {
      return (
        <div>
          <div className="form-group">
            <label>Filter Directives</label>
            <input
              type="text"
              className="form-control"
              value={queryTwo}
              onChange={e => {
                setQueryTwo(e.target.value);
              }}
            />
          </div>
   
          <h3>No directives were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new state
          </Link>
        </div>
      );
    }
   */


  return __jsx("div", {
    className: "Badges__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, "Filter Directives"), __jsx("input", {
    type: "text",
    placeholder: "Buscar en comite C",
    className: "form-control",
    value: query,
    onChange: e => {
      setQuery(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }), __jsx("ul", {
    className: "list-unstyled",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, filteredBadges.map(badge => {
    return __jsx("li", {
      key: badge.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "text-reset text-decoration-none",
      to: `/comite/bicameral/${badge.id}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: this
    }, __jsx(BadgesListItem, {
      badge: badge,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: this
    })));
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (BadgesList);

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

/***/ "./components/PageError.js":
/*!*********************************!*\
  !*** ./components/PageError.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\lbrito\\Dropbox\\Desarrollos\\Movenu Version 2019\\components\\PageError.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const PageError = props => {
  __jsx("div", {
    className: "PageError",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, "error"));

  __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, `
  .PageError {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
  }
  `);
};

/* harmony default export */ __webpack_exports__["default"] = (PageError);

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
/* harmony import */ var _components_PageError__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/PageError */ "./components/PageError.js");
/* harmony import */ var _components_MiniLoader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/MiniLoader */ "./components/MiniLoader.js");
var _jsxFileName = "C:\\Users\\lbrito\\Dropbox\\Desarrollos\\Movenu Version 2019\\pages\\bicameral.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









const Bicameral = props => {
  const {
    data,
    statusCode,
    loading
  } = props;

  if (!data) {
    return __jsx(_components_PageLoading__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: undefined
    });
  }

  if (statusCode !== 200) {
    return __jsx(_components_PageError__WEBPACK_IMPORTED_MODULE_8__["default"]
    /*  error={error} */
    , {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: undefined
    });
  }

  return __jsx("div", {
    className: "jsx-2049811647",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2049811647" + " " + "Badges",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2049811647" + " " + "Badges__hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2049811647" + " " + "Badges__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("img", {
    src: _static_LOGO_MOVENU_BLANCO_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "Conf Logo",
    className: "jsx-2049811647" + " " + "Badges_conf-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  })))), __jsx("div", {
    className: "jsx-2049811647" + " " + "Badges__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2049811647" + " " + "Badges__list__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2049811647" + " " + "Badges__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2049811647" + " " + "Badges__buttons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    to: "/comite/bicameral/new",
    className: "btn btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, "Nuevo delegado"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    to: "/directive/new",
    className: "btn btn-secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "Nueva Directiva")), __jsx(_components_BicameralList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    badges: data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }), loading && __jsx(_components_MiniLoader__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }))), __jsx("div", {
    className: "jsx-2049811647" + " " + "Badges__list__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2049811647" + " " + "Badges__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2049811647" + " " + "Badges__buttons_two",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    to: "/comite/bicameral/new",
    className: "btn btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, "Nuevo delegado"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    to: "/directive/newTwo",
    className: "btn btn-secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, "Nueva Directiva")), __jsx(_components_BicameralListTwo__WEBPACK_IMPORTED_MODULE_6__["default"], {
    badges: data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }), loading && __jsx(_components_MiniLoader__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2049811647",
    __self: undefined
  }, ".Badges__hero.jsx-2049811647{width:100%;padding:2rem 0;background:url('../../images/stars.svg'),#1B1B25;background-repeat:repeat;margin-bottom:1rem;}.Badges__hero.jsx-2049811647>.Badges__container.jsx-2049811647{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.Badges__container.jsx-2049811647{width:100%;height:auto;padding:0 1rem;}.Badges__list__container.jsx-2049811647{width:50%;height:auto;max-width:1080px;padding:0 1rem;display:inline-table;}.Badges__list__container.jsx-2049811647>.form-group.jsx-2049811647{display:inline-block;width:50%;padding:10px;}.Badges__list__container.jsx-2049811647>.Badges__buttons.jsx-2049811647{display:inline-block;width:50%;padding:10px;}.Badges__list__container.jsx-2049811647>.Badges__buttons_two.jsx-2049811647{display:inline-block;width:50%;padding:10px;}.Badges_conf-logo.jsx-2049811647{margin-bottom:2rem;width:260px;}.Badges__buttons.jsx-2049811647{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;margin-bottom:1rem;}.Badges__buttons_two.jsx-2049811647{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;margin-bottom:1rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbGJyaXRvXFxEcm9wYm94XFxEZXNhcnJvbGxvc1xcTW92ZW51IFZlcnNpb24gMjAxOVxccGFnZXNcXGJpY2FtZXJhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRWtCLEFBR29CLEFBUUUsQUFNRixBQU1ELEFBU1csQUFPQSxBQUtBLEFBUUYsQUFLTixBQUtBLFVBdENELENBcEJHLEFBY0gsUUFtQ0EsRUFwQkYsQUFPQSxBQUtBLENBcEJPLENBTkYsR0FkbUMsS0E2QnJDLEFBT0EsQUFLQSxBQVFmLE9BbENBLENBTWlCLEtBU2pCLEFBT0EsQUFLQSxVQXBCdUIsb0JBZkMsQUE4Q0ssQUFLRixDQXpEQSxBQXVCM0IseUJBdEJxQixtQkFDckIsaUNBS3FCLG1CQW1EQSxRQUxBLFdBTXJCLFFBTEEsK0NBOUNBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbGJyaXRvXFxEcm9wYm94XFxEZXNhcnJvbGxvc1xcTW92ZW51IFZlcnNpb24gMjAxOVxccGFnZXNcXGJpY2FtZXJhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IGNvbmZMb2dvIGZyb20gJy4uL3N0YXRpYy9MT0dPLU1PVkVOVS1CTEFOQ08ucG5nJztcclxuaW1wb3J0IEJpY2FtZXJhbExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9CaWNhbWVyYWxMaXN0JztcclxuaW1wb3J0IEJpY2FtZXJhbExpc3RUd28gZnJvbSAnLi4vY29tcG9uZW50cy9CaWNhbWVyYWxMaXN0VHdvJztcclxuaW1wb3J0IFBhZ2VMb2FkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZUxvYWRpbmcnO1xyXG5pbXBvcnQgUGFnZUVycm9yIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZUVycm9yJztcclxuaW1wb3J0IE1pbmlMb2FkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9NaW5pTG9hZGVyJztcclxuXHJcblxyXG5jb25zdCBCaWNhbWVyYWwgPSAocHJvcHMpID0+ICB7XHJcbiAgICBjb25zdCB7ZGF0YSwgc3RhdHVzQ29kZSwgbG9hZGluZ30gPSBwcm9wcztcclxuICAgIGlmICghZGF0YSkge1xyXG4gICAgICByZXR1cm4gPFBhZ2VMb2FkaW5nIC8+O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzdGF0dXNDb2RlIT09IDIwMCkge1xyXG4gICAgICByZXR1cm4gPFBhZ2VFcnJvci8qICBlcnJvcj17ZXJyb3J9ICovIC8+O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQmFkZ2VzXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJhZGdlc19faGVyb1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJhZGdlc19fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiQmFkZ2VzX2NvbmYtbG9nb1wiXHJcbiAgICAgICAgICAgICAgICBzcmM9e2NvbmZMb2dvfVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiQ29uZiBMb2dvXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQmFkZ2VzX19jb250YWluZXJcIj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQmFkZ2VzX19saXN0X19jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJhZGdlc19fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJhZGdlc19fYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICA8TGluayB0bz1cIi9jb21pdGUvYmljYW1lcmFsL25ld1wiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgIE51ZXZvIGRlbGVnYWRvXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgdG89XCIvZGlyZWN0aXZlL25ld1wiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICBOdWV2YSBEaXJlY3RpdmFcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPEJpY2FtZXJhbExpc3QgYmFkZ2VzPXtkYXRhfS8+XHJcblxyXG4gICAgICAgICAge2xvYWRpbmcgJiYgPE1pbmlMb2FkZXIgLz59XHJcbiAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICA8L2Rpdj5cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQmFkZ2VzX19saXN0X19jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJhZGdlc19fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJhZGdlc19fYnV0dG9uc190d29cIj5cclxuICAgICAgICAgICAgPExpbmsgdG89XCIvY29taXRlL2JpY2FtZXJhbC9uZXdcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICBOdWV2byBkZWxlZ2Fkb1xyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL2RpcmVjdGl2ZS9uZXdUd29cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgIE51ZXZhIERpcmVjdGl2YVxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxCaWNhbWVyYWxMaXN0VHdvIGJhZGdlcz17ZGF0YX0vPlxyXG5cclxuICAgICAgICAgIHtsb2FkaW5nICYmIDxNaW5pTG9hZGVyIC8+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgIC5CYWRnZXNfX2hlcm8ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDJyZW0gMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2ltYWdlcy9zdGFycy5zdmcnKSwgIzFCMUIyNTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5CYWRnZXNfX2hlcm8+LkJhZGdlc19fY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLkJhZGdlc19fY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMCAxcmVtO1xyXG4gICAgICB9ICBcclxuICAgICAgXHJcbiAgICAgIC5CYWRnZXNfX2xpc3RfX2NvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDgwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMCAxcmVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS10YWJsZTtcclxuICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuQmFkZ2VzX19saXN0X19jb250YWluZXI+LmZvcm0tZ3JvdXB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgfVxyXG4gICAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUJPVE9ORVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgICBcclxuICAgICAgLkJhZGdlc19fbGlzdF9fY29udGFpbmVyPi5CYWRnZXNfX2J1dHRvbnN7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgfVxyXG4gICAgICAuQmFkZ2VzX19saXN0X19jb250YWluZXI+LkJhZGdlc19fYnV0dG9uc190d297XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1CT1RPTkVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgICAgXHJcbiAgICAgIC5CYWRnZXNfY29uZi1sb2dvIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgICAgIHdpZHRoOiAyNjBweDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLkJhZGdlc19fYnV0dG9ucyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgfVxyXG4gICAgICAuQmFkZ2VzX19idXR0b25zX3R3byB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgXHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBCaWNhbWVyYWwuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcmVzIH0pID0+IHtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgcmVxID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyLycpO1xyXG4gICAgICAvKiBsZXQgcmVxID0gYXdhaXQgYXBpLmJhZGdlcy5saXN0KCk7ICovXHJcbiAgICAgIGxldCBkYXRhID0gYXdhaXQgcmVxLmpzb24oKTtcclxuXHJcbiAgICAgIHJldHVybiB7ZGF0YSAsIHN0YXR1c0NvZGU6IDIwMCwgbG9hZGluZzogdHJ1ZX1cclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNTAzXHJcbiAgICAgICAgcmV0dXJue2RhdGE6IG51bGwsIHN0YXR1c0NvZGU6IDUwMyB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBCaWNhbWVyYWw7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\lbrito\\\\Dropbox\\\\Desarrollos\\\\Movenu Version 2019\\\\pages\\\\bicameral.js */"));
};

Bicameral.getInitialProps = async ({
  res
}) => {
  try {
    let req = await fetch('https://rickandmortyapi.com/api/character/');
    /* let req = await api.badges.list(); */

    let data = await req.json();
    return {
      data,
      statusCode: 200,
      loading: true
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