exports.id = 488;
exports.ids = [488];
exports.modules = {

/***/ 7633:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/headlessui.cjs.production.min.js
var headlessui_cjs_production_min = __webpack_require__(2400);
// EXTERNAL MODULE: ./node_modules/react-icons/io/index.esm.js
var index_esm = __webpack_require__(1649);
// EXTERNAL MODULE: ./node_modules/react-icons/io5/index.esm.js
var io5_index_esm = __webpack_require__(155);
// EXTERNAL MODULE: ./node_modules/react-icons/ri/index.esm.js
var ri_index_esm = __webpack_require__(9352);
// EXTERNAL MODULE: ./node_modules/react-icons/bi/index.esm.js
var bi_index_esm = __webpack_require__(7516);
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var fa_index_esm = __webpack_require__(9583);
;// CONCATENATED MODULE: ./src/components/Navbar.js










const solutions = [{
  name: 'News',
  description: 'Get a better understanding of where your traffic is coming from.',
  href: '#',
  icon: io5_index_esm/* IoNewspaperOutline */.lkm
}, {
  name: 'Technologies',
  description: "Your customers' data will be safe and secure.",
  href: '#',
  icon: bi_index_esm/* BiPyramid */.t8Z
}, {
  name: 'Open Source',
  description: "Your customers' data will be safe and secure.",
  href: '#',
  icon: io5_index_esm/* IoCodeOutline */.lLM
}, {
  name: 'Documentation',
  description: "Your customers' data will be safe and secure.",
  href: '#',
  icon: io5_index_esm/* IoDocumentsOutline */.nqI
}, {
  name: 'Company',
  description: "Your customers' data will be safe and secure.",
  href: '#',
  icon: ri_index_esm/* RiBuilding2Line */.fF4
}];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = ({}) => {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(headlessui_cjs_production_min/* Popover */.J2, {
    className: "relative bg-white dark:bg-black dark:text-gray-100 ",
    children: [/*#__PURE__*/jsx_runtime.jsx("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "flex justify-between items-center  py-6 md:justify-start md:space-x-10",
        children: [/*#__PURE__*/jsx_runtime.jsx("div", {
          className: "flex justify-start lg:w-0 lg:flex-1 ",
          children: /*#__PURE__*/jsx_runtime.jsx("a", {
            href: "#",
            className: " text-xl font-extrabold  dark:text-white tracking-tighter",
            children: "36NINE"
          })
        }), /*#__PURE__*/jsx_runtime.jsx("div", {
          className: "-mr-2 -my-2 md:hidden",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(headlessui_cjs_production_min/* Popover.Button */.J2.Button, {
            className: "bg-white rounded-md p-2 inline-flex items-center justify-center text-black hover:text-gray-500 hover:bg-gray-100 dark:bg-black dark:text-gray-100",
            children: [/*#__PURE__*/jsx_runtime.jsx("span", {
              className: "sr-only",
              children: "Open menu"
            }), /*#__PURE__*/jsx_runtime.jsx(index_esm/* IoIosMenu */.M1X, {
              className: "h-6 w-6",
              "aria-hidden": "true"
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(headlessui_cjs_production_min/* Popover.Group */.J2.Group, {
          as: "nav",
          className: "hidden md:flex space-x-10",
          children: [/*#__PURE__*/jsx_runtime.jsx("a", {
            href: "#",
            className: "text-base font-sm text-black hover:text-gray-900 dark:text-gray-100 dark:hover:text-white",
            children: "Projects"
          }), /*#__PURE__*/jsx_runtime.jsx("a", {
            href: "#",
            className: "text-base font-sm text-black hover:text-gray-900 dark:text-gray-100 dark:hover:text-white",
            children: "Crypto"
          }), /*#__PURE__*/jsx_runtime.jsx("a", {
            href: "/news",
            className: "text-base font-sm text-black hover:text-gray-900 dark:text-gray-100 dark:hover:text-white",
            children: "About"
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "hidden md:flex items-center justify-end md:flex-1 lg:w-0",
          children: [/*#__PURE__*/jsx_runtime.jsx(next_link.default, {
            href: "",
            children: /*#__PURE__*/jsx_runtime.jsx("a", {
              className: "hover:text-blue-400",
              children: /*#__PURE__*/jsx_runtime.jsx(fa_index_esm/* FaTwitter */.fWC, {})
            })
          }), /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
            href: "",
            children: /*#__PURE__*/jsx_runtime.jsx("a", {
              className: "pl-4",
              children: /*#__PURE__*/jsx_runtime.jsx(fa_index_esm/* FaGithub */.hJX, {
                className: "hover:text-purple-400"
              })
            })
          })]
        })]
      })
    }), /*#__PURE__*/jsx_runtime.jsx(headlessui_cjs_production_min/* Transition */.uT, {
      as: react.Fragment,
      enter: "duration-200 ease-out",
      enterFrom: "opacity-0 scale-95",
      enterTo: "opacity-100 scale-100",
      leave: "duration-100 ease-in",
      leaveFrom: "opacity-100 scale-100",
      leaveTo: "opacity-0 scale-95",
      children: /*#__PURE__*/jsx_runtime.jsx(headlessui_cjs_production_min/* Popover.Panel */.J2.Panel, {
        focus: true,
        className: "absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "filter drop-shadow-md rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "pt-5 pb-6 px-5",
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "flex items-center justify-between",
              children: [/*#__PURE__*/jsx_runtime.jsx("div", {
                className: "text-center",
                children: /*#__PURE__*/jsx_runtime.jsx("a", {
                  className: "h-8 w-auto font-bold text-3xl tracking-tight",
                  children: "36NINE"
                })
              }), /*#__PURE__*/jsx_runtime.jsx("div", {
                className: "-mr-2",
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)(headlessui_cjs_production_min/* Popover.Button */.J2.Button, {
                  className: "bg-white rounded-md p-2 inline-flex items-center justify-center text-black hover:text-gray-500 hover:bg-gray-100",
                  children: [/*#__PURE__*/jsx_runtime.jsx("span", {
                    className: "sr-only",
                    children: "Close menu"
                  }), /*#__PURE__*/jsx_runtime.jsx(io5_index_esm/* IoCloseSharp */.Lp2, {
                    className: "h-6 w-6"
                  })]
                })
              })]
            }), /*#__PURE__*/jsx_runtime.jsx("div", {
              className: "mt-6",
              children: /*#__PURE__*/jsx_runtime.jsx("nav", {
                className: "grid gap-y-8",
                children: solutions.map(item => /*#__PURE__*/(0,jsx_runtime.jsxs)("a", {
                  href: item.href,
                  className: "-m-3 p-3 flex items-center rounded-md hover:bg-gray-50",
                  children: [/*#__PURE__*/jsx_runtime.jsx(item.icon, {
                    className: "flex-shrink-0 h-6 w-6 text-black",
                    "aria-hidden": "true"
                  }), /*#__PURE__*/jsx_runtime.jsx("span", {
                    className: "ml-3 text-base font-medium text-black",
                    children: item.name
                  })]
                }, item.name))
              })
            })]
          }), /*#__PURE__*/jsx_runtime.jsx("div", {
            className: "py-6 px-5 space-y-6",
            children: /*#__PURE__*/jsx_runtime.jsx("div", {
              children: /*#__PURE__*/jsx_runtime.jsx("a", {
                href: "#",
                className: "w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-black",
                children: "Subscribe"
              })
            })
          })]
        })
      })
    })]
  });
};

/* harmony default export */ const components_Navbar = (Navbar);
;// CONCATENATED MODULE: ./src/components/Footer.js



const Footer = ({}) => {
  return /*#__PURE__*/jsx_runtime.jsx("footer", {
    className: "pb-4",
    children: /*#__PURE__*/jsx_runtime.jsx("div", {
      className: "max-w-6xl xl:max-w-6xl mx-auto divide-y divide-gray-200 px-4 sm:px-6 md:px-8",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "flex flex-row justify-between pt-3 pb-1 border-t lg:flex-row bg-top border-gray-600 dark:border-gray-300",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("ul", {
          className: "flex flex-row space-y-0 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row",
          children: [/*#__PURE__*/jsx_runtime.jsx("li", {
            children: /*#__PURE__*/jsx_runtime.jsx("a", {
              href: "/",
              className: "text-xs p-1 text-gray-600 hover:text-gray-900 transition-colors duration-300 hover:text-deep-purple-accent-400 dark:text-gray-200",
              children: "Privacy"
            })
          }), /*#__PURE__*/jsx_runtime.jsx("li", {
            children: /*#__PURE__*/jsx_runtime.jsx("a", {
              href: "/",
              className: "text-xs p-1 text-gray-600 hover:text-gray-900 transition-colors duration-300 hover:text-deep-purple-accent-400 dark:text-gray-200",
              children: "Cookies"
            })
          })]
        }), /*#__PURE__*/jsx_runtime.jsx("ul", {
          className: "flex flex-row space-y-0 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row",
          children: /*#__PURE__*/jsx_runtime.jsx("a", {
            href: "/",
            className: "text-xs p-1 text-gray-600 hover:text-gray-900 transition-colors duration-300 hover:text-deep-purple-accent-400 tracking-tight dark:text-gray-200",
            children: "\xA9 2021 369 Technologies Inc."
          })
        })]
      })
    })
  });
};

/* harmony default export */ const components_Footer = (Footer);
;// CONCATENATED MODULE: ./src/components/Layout.js





const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "font-sans",
    children: [/*#__PURE__*/jsx_runtime.jsx(components_Navbar, {}), children, /*#__PURE__*/jsx_runtime.jsx(components_Footer, {})]
  });
};

/* harmony default export */ const components_Layout = (Layout);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
// EXTERNAL MODULE: ./node_modules/next-themes/dist/index.js
var dist = __webpack_require__(1143);
;// CONCATENATED MODULE: ./src/pages/_app.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime.jsx(dist/* ThemeProvider */.f, {
    attribute: "class",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Layout, {
      children: [/*#__PURE__*/jsx_runtime.jsx(head.default, {
        children: /*#__PURE__*/jsx_runtime.jsx("meta", {
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        })
      }), /*#__PURE__*/jsx_runtime.jsx(Component, _objectSpread({}, pageProps))]
    })
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6859);





class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_2__.default {
  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_2__.Html, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_2__.Head, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
        className: "bg-white text-black dark:bg-black dark:text-white",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_2__.Main, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_2__.NextScript, {})]
      })]
    });
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyDocument);

/***/ }),

/***/ 9521:
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 9521;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 7020:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"polyfillFiles":["static/chunks/polyfills-a54b4f32bdc1ef890ddd.js"],"devFiles":[],"ampDevFiles":[],"lowPriorityFiles":["static/DztwBnbwoXa4J5H8Dpkcl/_buildManifest.js","static/DztwBnbwoXa4J5H8Dpkcl/_ssgManifest.js"],"pages":{"/":["static/chunks/webpack-0cb069610457c13661fc.js","static/chunks/framework-895f067827ebe11ffe45.js","static/chunks/main-7965b115b2b3050da998.js","static/chunks/252f366e-5aa6a866b920ed735147.js","static/chunks/545f34e4-77b45a0e0e6a6cc9c650.js","static/chunks/d7eeaac4-6db66c06a57628a200ae.js","static/chunks/286-a8cdaae42fc1c1e97f9f.js","static/chunks/pages/index-e6851c78b4f99e2ddfaf.js"],"/_app":["static/chunks/webpack-0cb069610457c13661fc.js","static/chunks/framework-895f067827ebe11ffe45.js","static/chunks/main-7965b115b2b3050da998.js","static/css/0184f79dcb358216b0be.css","static/chunks/pages/_app-de7c42920a97cfd0098b.js"],"/_error":["static/chunks/webpack-0cb069610457c13661fc.js","static/chunks/framework-895f067827ebe11ffe45.js","static/chunks/main-7965b115b2b3050da998.js","static/chunks/pages/_error-737a04e9a0da63c9d162.js"]},"ampFirstPages":[]}');

/***/ }),

/***/ 3978:
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ 9450:
/***/ ((module) => {

"use strict";
module.exports = {"Dg":[]};

/***/ })

};
;