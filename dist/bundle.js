/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/img/todo.png":
/*!*****************************!*\
  !*** ./assets/img/todo.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + " img /c84d8efbc860bbf0075e59328479cc22.png");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/main.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/main.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html,\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n\nh1 {\n    display: block;\n    text-align: center;\n    margin-top: 150px;\n    font-weight: 900;\n    font-size: 80px;\n}\n\n.bg-light {\n    background-color: #ffffff !important;\n}\n\nbutton {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    background: none;\n    font-size: 100%;\n    vertical-align: baseline;\n    font-family: inherit;\n    font-weight: inherit;\n    color: inherit;\n    -webkit-appearance: none;\n    appearance: none;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.btn-outline-primary {\n    margin-right: 10px;\n    color: #DB0707;\n    border: 1px solid #DB0707;\n    background-color: white;\n}\n\n.nav-link {\n    font-size: 20px;\n}\n\na.navbar-brand {\n    font-size: 30px;\n}\n\n.btn-outline-primary:hover {\n    margin-right: 10px;\n    color: white;\n    border: 1px solid #DB0707;\n    background-color: #DB0707;\n}\n\nbody {\n    font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    line-height: 1.4em;\n    background: #ffffff;\n    color: #111111;\n    /* min-width: 230px;\n    max-width: 550px; */\n    margin: 0 auto;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    font-weight: 300;\n}\n\n:focus {\n    outline: 0;\n}\n\n.hidden {\n    display: none;\n}\n\n.todoapp {\n    background: #fff;\n    margin: 50px 0 40px 0;\n    position: relative;\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),\n        0 25px 50px 0 rgba(0, 0, 0, 0.1);\n    min-width: 230px;\n    max-width: 550px;\n}\n\n.todoapp input::-webkit-input-placeholder {\n    font-style: italic;\n    font-weight: 300;\n    color: rgba(0, 0, 0, 0.4);\n}\n\n.todoapp input::-moz-placeholder {\n    font-style: italic;\n    font-weight: 300;\n    color: rgba(0, 0, 0, 0.4);\n}\n\n.todoapp input::input-placeholder {\n    font-style: italic;\n    font-weight: 300;\n    color: rgba(0, 0, 0, 0.4);\n}\n\n.todoapp h1 {\n    position: absolute;\n    top: -140px;\n    width: 100%;\n    font-size: 80px;\n    font-weight: 200;\n    text-align: center;\n    color: #DB0707;\n    -webkit-text-rendering: optimizeLegibility;\n    -moz-text-rendering: optimizeLegibility;\n    text-rendering: optimizeLegibility;\n}\n\n.new-todo,\n.edit {\n    position: relative;\n    margin: 0;\n    width: 150%;\n    font-size: 24px;\n    font-family: inherit;\n    font-weight: inherit;\n    line-height: 1.4em;\n    color: inherit;\n    padding: 6px;\n    border: 1px solid #999;\n    box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.new-todo {\n    /* padding: 16px 16px 16px 140px;\n     */\n    padding-left: 20px;\n    padding-right: 20px;\n    padding-top: 20px;\n    padding-bottom: 20px;\n    border: none;\n    background: rgba(0, 0, 0, 0.003);\n    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);\n}\n\n.main {\n    position: relative;\n    z-index: 2;\n    border-top: 1px solid #ffffff;\n}\n\n.toggle-all {\n    width: 1px;\n    height: 1px;\n    border: none;\n    /* Mobile Safari */\n    opacity: 0;\n    position: absolute;\n    right: 100%;\n    bottom: 100%;\n}\n\n.toggle-all+label {\n    width: 60px;\n    height: 34px;\n    font-size: 0;\n    position: absolute;\n    top: -52px;\n    left: -13px;\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg);\n}\n\n.toggle-all+label:before {\n    content: '❯';\n    font-size: 22px;\n    color: #ffffff;\n    padding: 10px 27px 10px 27px;\n}\n\n.toggle-all:checked+label:before {\n    color: #737373;\n}\n\n.todo-list {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\n.todo-list li {\n    position: relative;\n    font-size: 24px;\n    border-bottom: 1px solid #ededed;\n}\n\n.todo-list li:last-child {\n    border-bottom: none;\n}\n\n.todo-list li.editing {\n    border-bottom: none;\n    padding: 0;\n}\n\n.todo-list li.editing .edit {\n    display: block;\n    width: calc(100% - 43px);\n    padding: 12px 16px;\n    margin: 0 0 0 43px;\n}\n\n.todo-list li.editing .view {\n    display: none;\n}\n\n.todo-list li .toggle {\n    text-align: center;\n    width: 40px;\n    /* auto, since non-WebKit browsers doesn't support input styling */\n    height: auto;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    margin: auto 0;\n    border: none;\n    /* Mobile Safari */\n    -webkit-appearance: none;\n    appearance: none;\n}\n\n.todo-list li .toggle {\n    opacity: 0;\n}\n\n.todo-list li .toggle+label {\n    /*\n\t\tFirefox requires `#` to be escaped - https://bugzilla.mozilla.org/show_bug.cgi?id=922433\n\t\tIE and Edge requires *everything* to be escaped to render, so we do that instead of just the `#` - https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7157459/\n\t*/\n    background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');\n    background-repeat: no-repeat;\n    background-position: center left;\n}\n\n.todo-list li .toggle:checked+label {\n    background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');\n}\n\n.todo-list li label {\n    word-break: break-all;\n    padding: 15px 15px 15px 60px;\n    display: block;\n    line-height: 1.2;\n    transition: color 0.4s;\n    font-weight: 400;\n    color: #4d4d4d;\n}\n\n.todo-list li.completed label {\n    color: #cdcdcd;\n    text-decoration: line-through;\n}\n\n.todo-list li .destroy {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 10px;\n    bottom: 0;\n    width: 40px;\n    height: 40px;\n    margin: auto 0;\n    font-size: 30px;\n    color: #cc9a9a;\n    margin-bottom: 11px;\n    transition: color 0.2s ease-out;\n}\n\n.todo-list li .destroy:hover {\n    color: #af5b5e;\n}\n\n.todo-list li .destroy:after {\n    content: '×';\n}\n\n.todo-list li:hover .destroy {\n    display: block;\n}\n\n.todo-list li .edit {\n    display: none;\n}\n\n.todo-list li.editing:last-child {\n    margin-bottom: -1px;\n}\n\n.footer {\n    padding: 10px 15px;\n    height: 20px;\n    text-align: center;\n    font-size: 15px;\n    border-top: 1px solid #ffffff;\n}\n\n.footer:before {\n    content: '';\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    height: 50px;\n    overflow: hidden;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),\n        0 8px 0 -3px #f6f6f6,\n        0 9px 1px -3px rgba(0, 0, 0, 0.2),\n        0 16px 0 -6px #f6f6f6,\n        0 17px 2px -6px rgba(0, 0, 0, 0.2);\n}\n\n.todo-count {\n    float: left;\n    text-align: left;\n    margin-top: -15px;\n}\n\n.todo-count strong {\n    font-weight: 300;\n}\n\n.filters {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    position: absolute;\n    right: 0;\n    left: 0;\n    margin-top: -15px;\n}\n\n.filters li {\n    display: inline;\n}\n\n.filters li a {\n    color: inherit;\n    margin: 3px;\n    padding: 3px 7px;\n    text-decoration: none;\n    border: 1px solid transparent;\n    border-radius: 3px;\n}\n\n.filters li a:hover {\n    border-color: rgba(175, 47, 47, 0.1);\n}\n\n.filters li a.selected {\n    border-color: rgba(175, 47, 47, 0.2);\n}\n\n.clear-completed {\n    margin-top: -15px;\n}\n\n.clear-completed,\nhtml .clear-completed:active {\n    float: right;\n    position: relative;\n    line-height: 20px;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.clear-completed:hover {\n    text-decoration: underline;\n}\n\n.info {\n    margin: 65px auto 0;\n    color: #4d4d4d;\n    font-size: 11px;\n    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n    text-align: center;\n}\n\n.info p {\n    line-height: 1;\n}\n\n.info a {\n    color: inherit;\n    text-decoration: none;\n    font-weight: 400;\n}\n\n.info a:hover {\n    text-decoration: underline;\n}\n\n/*\n\tHack to remove background from Mobile Safari.\n\tCan't use it globally since it destroys checkboxes in Firefox\n*/\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n\n    .toggle-all,\n    .todo-list li .toggle {\n        background: none;\n    }\n\n    .todo-list li .toggle {\n        height: 40px;\n    }\n}\n\n@media (max-width: 430px) {\n    .footer {\n        height: 50px;\n    }\n\n    .filters {\n        bottom: 10px;\n    }\n}\n\nhr {\n    margin: 20px 0;\n    border: 0;\n    border-top: 1px dashed #c5c5c5;\n    border-bottom: 1px dashed #f7f7f7;\n}\n\n.learn a {\n    font-weight: normal;\n    text-decoration: none;\n    color: #DB0707;\n}\n\n.learn a:hover {\n    text-decoration: underline;\n    color: #787e7e;\n}\n\n.learn h3,\n.learn h4,\n.learn h5 {\n    margin: 10px 0;\n    font-weight: 500;\n    line-height: 1.2;\n    color: #000;\n}\n\n.learn h3 {\n    font-size: 24px;\n}\n\n.learn h4 {\n    font-size: 18px;\n}\n\n.learn h5 {\n    margin-bottom: 0;\n    font-size: 14px;\n}\n\n.learn ul {\n    padding: 0;\n    margin: 0 0 30px 25px;\n}\n\n.learn li {\n    line-height: 20px;\n}\n\n.learn p {\n    font-size: 15px;\n    font-weight: 300;\n    line-height: 1.3;\n    margin-top: 0;\n    margin-bottom: 0;\n}\n\n#issue-count {\n    display: none;\n}\n\n.quote {\n    border: none;\n    margin: 20px 0 60px 0;\n}\n\n.quote p {\n    font-style: italic;\n}\n\n.quote p:before {\n    content: '“';\n    font-size: 50px;\n    opacity: .15;\n    position: absolute;\n    top: -20px;\n    left: 3px;\n}\n\n.quote p:after {\n    content: '”';\n    font-size: 50px;\n    opacity: .15;\n    position: absolute;\n    bottom: -42px;\n    right: 3px;\n}\n\n.quote footer {\n    position: absolute;\n    bottom: -40px;\n    right: 0;\n}\n\n.quote footer img {\n    border-radius: 3px;\n}\n\n.quote footer a {\n    margin-left: 5px;\n    vertical-align: middle;\n}\n\n.speech-bubble {\n    position: relative;\n    padding: 10px;\n    background: rgba(0, 0, 0, .04);\n    border-radius: 5px;\n}\n\n.speech-bubble:after {\n    content: '';\n    position: absolute;\n    top: 100%;\n    right: 30px;\n    border: 13px solid transparent;\n    border-top-color: rgba(0, 0, 0, .04);\n}\n\n.learn-bar>.learn {\n    position: absolute;\n    width: 272px;\n    top: 8px;\n    left: -300px;\n    padding: 10px;\n    border-radius: 5px;\n    background-color: rgba(255, 255, 255, .6);\n    transition-property: left;\n    transition-duration: 500ms;\n}\n\n@media (min-width: 899px) {\n    .learn-bar {\n        width: auto;\n        padding-left: 300px;\n    }\n\n    .learn-bar>.learn {\n        left: 8px;\n    }\n}", "",{"version":3,"sources":["webpack://src/style/main.css"],"names":[],"mappings":"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","sourcesContent":["html,\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n\nh1 {\n    display: block;\n    text-align: center;\n    margin-top: 150px;\n    font-weight: 900;\n    font-size: 80px;\n}\n\n.bg-light {\n    background-color: #ffffff !important;\n}\n\nbutton {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    background: none;\n    font-size: 100%;\n    vertical-align: baseline;\n    font-family: inherit;\n    font-weight: inherit;\n    color: inherit;\n    -webkit-appearance: none;\n    appearance: none;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.btn-outline-primary {\n    margin-right: 10px;\n    color: #DB0707;\n    border: 1px solid #DB0707;\n    background-color: white;\n}\n\n.nav-link {\n    font-size: 20px;\n}\n\na.navbar-brand {\n    font-size: 30px;\n}\n\n.btn-outline-primary:hover {\n    margin-right: 10px;\n    color: white;\n    border: 1px solid #DB0707;\n    background-color: #DB0707;\n}\n\nbody {\n    font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    line-height: 1.4em;\n    background: #ffffff;\n    color: #111111;\n    /* min-width: 230px;\n    max-width: 550px; */\n    margin: 0 auto;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    font-weight: 300;\n}\n\n:focus {\n    outline: 0;\n}\n\n.hidden {\n    display: none;\n}\n\n.todoapp {\n    background: #fff;\n    margin: 50px 0 40px 0;\n    position: relative;\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),\n        0 25px 50px 0 rgba(0, 0, 0, 0.1);\n    min-width: 230px;\n    max-width: 550px;\n}\n\n.todoapp input::-webkit-input-placeholder {\n    font-style: italic;\n    font-weight: 300;\n    color: rgba(0, 0, 0, 0.4);\n}\n\n.todoapp input::-moz-placeholder {\n    font-style: italic;\n    font-weight: 300;\n    color: rgba(0, 0, 0, 0.4);\n}\n\n.todoapp input::input-placeholder {\n    font-style: italic;\n    font-weight: 300;\n    color: rgba(0, 0, 0, 0.4);\n}\n\n.todoapp h1 {\n    position: absolute;\n    top: -140px;\n    width: 100%;\n    font-size: 80px;\n    font-weight: 200;\n    text-align: center;\n    color: #DB0707;\n    -webkit-text-rendering: optimizeLegibility;\n    -moz-text-rendering: optimizeLegibility;\n    text-rendering: optimizeLegibility;\n}\n\n.new-todo,\n.edit {\n    position: relative;\n    margin: 0;\n    width: 150%;\n    font-size: 24px;\n    font-family: inherit;\n    font-weight: inherit;\n    line-height: 1.4em;\n    color: inherit;\n    padding: 6px;\n    border: 1px solid #999;\n    box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.new-todo {\n    /* padding: 16px 16px 16px 140px;\n     */\n    padding-left: 20px;\n    padding-right: 20px;\n    padding-top: 20px;\n    padding-bottom: 20px;\n    border: none;\n    background: rgba(0, 0, 0, 0.003);\n    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);\n}\n\n.main {\n    position: relative;\n    z-index: 2;\n    border-top: 1px solid #ffffff;\n}\n\n.toggle-all {\n    width: 1px;\n    height: 1px;\n    border: none;\n    /* Mobile Safari */\n    opacity: 0;\n    position: absolute;\n    right: 100%;\n    bottom: 100%;\n}\n\n.toggle-all+label {\n    width: 60px;\n    height: 34px;\n    font-size: 0;\n    position: absolute;\n    top: -52px;\n    left: -13px;\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg);\n}\n\n.toggle-all+label:before {\n    content: '❯';\n    font-size: 22px;\n    color: #ffffff;\n    padding: 10px 27px 10px 27px;\n}\n\n.toggle-all:checked+label:before {\n    color: #737373;\n}\n\n.todo-list {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\n.todo-list li {\n    position: relative;\n    font-size: 24px;\n    border-bottom: 1px solid #ededed;\n}\n\n.todo-list li:last-child {\n    border-bottom: none;\n}\n\n.todo-list li.editing {\n    border-bottom: none;\n    padding: 0;\n}\n\n.todo-list li.editing .edit {\n    display: block;\n    width: calc(100% - 43px);\n    padding: 12px 16px;\n    margin: 0 0 0 43px;\n}\n\n.todo-list li.editing .view {\n    display: none;\n}\n\n.todo-list li .toggle {\n    text-align: center;\n    width: 40px;\n    /* auto, since non-WebKit browsers doesn't support input styling */\n    height: auto;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    margin: auto 0;\n    border: none;\n    /* Mobile Safari */\n    -webkit-appearance: none;\n    appearance: none;\n}\n\n.todo-list li .toggle {\n    opacity: 0;\n}\n\n.todo-list li .toggle+label {\n    /*\n\t\tFirefox requires `#` to be escaped - https://bugzilla.mozilla.org/show_bug.cgi?id=922433\n\t\tIE and Edge requires *everything* to be escaped to render, so we do that instead of just the `#` - https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7157459/\n\t*/\n    background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');\n    background-repeat: no-repeat;\n    background-position: center left;\n}\n\n.todo-list li .toggle:checked+label {\n    background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');\n}\n\n.todo-list li label {\n    word-break: break-all;\n    padding: 15px 15px 15px 60px;\n    display: block;\n    line-height: 1.2;\n    transition: color 0.4s;\n    font-weight: 400;\n    color: #4d4d4d;\n}\n\n.todo-list li.completed label {\n    color: #cdcdcd;\n    text-decoration: line-through;\n}\n\n.todo-list li .destroy {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 10px;\n    bottom: 0;\n    width: 40px;\n    height: 40px;\n    margin: auto 0;\n    font-size: 30px;\n    color: #cc9a9a;\n    margin-bottom: 11px;\n    transition: color 0.2s ease-out;\n}\n\n.todo-list li .destroy:hover {\n    color: #af5b5e;\n}\n\n.todo-list li .destroy:after {\n    content: '×';\n}\n\n.todo-list li:hover .destroy {\n    display: block;\n}\n\n.todo-list li .edit {\n    display: none;\n}\n\n.todo-list li.editing:last-child {\n    margin-bottom: -1px;\n}\n\n.footer {\n    padding: 10px 15px;\n    height: 20px;\n    text-align: center;\n    font-size: 15px;\n    border-top: 1px solid #ffffff;\n}\n\n.footer:before {\n    content: '';\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    height: 50px;\n    overflow: hidden;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),\n        0 8px 0 -3px #f6f6f6,\n        0 9px 1px -3px rgba(0, 0, 0, 0.2),\n        0 16px 0 -6px #f6f6f6,\n        0 17px 2px -6px rgba(0, 0, 0, 0.2);\n}\n\n.todo-count {\n    float: left;\n    text-align: left;\n    margin-top: -15px;\n}\n\n.todo-count strong {\n    font-weight: 300;\n}\n\n.filters {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    position: absolute;\n    right: 0;\n    left: 0;\n    margin-top: -15px;\n}\n\n.filters li {\n    display: inline;\n}\n\n.filters li a {\n    color: inherit;\n    margin: 3px;\n    padding: 3px 7px;\n    text-decoration: none;\n    border: 1px solid transparent;\n    border-radius: 3px;\n}\n\n.filters li a:hover {\n    border-color: rgba(175, 47, 47, 0.1);\n}\n\n.filters li a.selected {\n    border-color: rgba(175, 47, 47, 0.2);\n}\n\n.clear-completed {\n    margin-top: -15px;\n}\n\n.clear-completed,\nhtml .clear-completed:active {\n    float: right;\n    position: relative;\n    line-height: 20px;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.clear-completed:hover {\n    text-decoration: underline;\n}\n\n.info {\n    margin: 65px auto 0;\n    color: #4d4d4d;\n    font-size: 11px;\n    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n    text-align: center;\n}\n\n.info p {\n    line-height: 1;\n}\n\n.info a {\n    color: inherit;\n    text-decoration: none;\n    font-weight: 400;\n}\n\n.info a:hover {\n    text-decoration: underline;\n}\n\n/*\n\tHack to remove background from Mobile Safari.\n\tCan't use it globally since it destroys checkboxes in Firefox\n*/\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n\n    .toggle-all,\n    .todo-list li .toggle {\n        background: none;\n    }\n\n    .todo-list li .toggle {\n        height: 40px;\n    }\n}\n\n@media (max-width: 430px) {\n    .footer {\n        height: 50px;\n    }\n\n    .filters {\n        bottom: 10px;\n    }\n}\n\nhr {\n    margin: 20px 0;\n    border: 0;\n    border-top: 1px dashed #c5c5c5;\n    border-bottom: 1px dashed #f7f7f7;\n}\n\n.learn a {\n    font-weight: normal;\n    text-decoration: none;\n    color: #DB0707;\n}\n\n.learn a:hover {\n    text-decoration: underline;\n    color: #787e7e;\n}\n\n.learn h3,\n.learn h4,\n.learn h5 {\n    margin: 10px 0;\n    font-weight: 500;\n    line-height: 1.2;\n    color: #000;\n}\n\n.learn h3 {\n    font-size: 24px;\n}\n\n.learn h4 {\n    font-size: 18px;\n}\n\n.learn h5 {\n    margin-bottom: 0;\n    font-size: 14px;\n}\n\n.learn ul {\n    padding: 0;\n    margin: 0 0 30px 25px;\n}\n\n.learn li {\n    line-height: 20px;\n}\n\n.learn p {\n    font-size: 15px;\n    font-weight: 300;\n    line-height: 1.3;\n    margin-top: 0;\n    margin-bottom: 0;\n}\n\n#issue-count {\n    display: none;\n}\n\n.quote {\n    border: none;\n    margin: 20px 0 60px 0;\n}\n\n.quote p {\n    font-style: italic;\n}\n\n.quote p:before {\n    content: '“';\n    font-size: 50px;\n    opacity: .15;\n    position: absolute;\n    top: -20px;\n    left: 3px;\n}\n\n.quote p:after {\n    content: '”';\n    font-size: 50px;\n    opacity: .15;\n    position: absolute;\n    bottom: -42px;\n    right: 3px;\n}\n\n.quote footer {\n    position: absolute;\n    bottom: -40px;\n    right: 0;\n}\n\n.quote footer img {\n    border-radius: 3px;\n}\n\n.quote footer a {\n    margin-left: 5px;\n    vertical-align: middle;\n}\n\n.speech-bubble {\n    position: relative;\n    padding: 10px;\n    background: rgba(0, 0, 0, .04);\n    border-radius: 5px;\n}\n\n.speech-bubble:after {\n    content: '';\n    position: absolute;\n    top: 100%;\n    right: 30px;\n    border: 13px solid transparent;\n    border-top-color: rgba(0, 0, 0, .04);\n}\n\n.learn-bar>.learn {\n    position: absolute;\n    width: 272px;\n    top: 8px;\n    left: -300px;\n    padding: 10px;\n    border-radius: 5px;\n    background-color: rgba(255, 255, 255, .6);\n    transition-property: left;\n    transition-duration: 500ms;\n}\n\n@media (min-width: 899px) {\n    .learn-bar {\n        width: auto;\n        padding-left: 300px;\n    }\n\n    .learn-bar>.learn {\n        left: 8px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/main.css */ "./src/style/main.css");
/* harmony import */ var _style_main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_main_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_img_todo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/img/todo.png */ "./assets/img/todo.png");
/*global app, $on */

__webpack_require__(/*! ./view.js */ "./src/view.js");
__webpack_require__(/*! ./store.js */ "./src/store.js");
__webpack_require__(/*! ./model.js */ "./src/model.js");
__webpack_require__(/*! ./template.js */ "./src/template.js");
__webpack_require__(/*! ./controller.js */ "./src/controller.js");
__webpack_require__(/*! ./helpers.js */ "./src/helpers.js");
__webpack_require__(/*! ./app.js */ "./src/app.js");
// require('./dist/main.css');




(function () {
	'use strict';

	/**
	 * Initialise une nouvelle liste de tâche.
	 * @param {string} name Le nom de la nouvelle liste de tâches.
	 */
	function Todo(name) {
		this.storage = new app.Store(name);
		this.model = new app.Model(this.storage);
		this.template = new app.Template();
		this.view = new app.View(this.template);
		this.controller = new app.Controller(this.model, this.view);
	}

	let todo = new Todo('todos-vanillajs');

	function setView() {
		todo.controller.setView(document.location.hash);
	}
	$on(window, 'load', setView);
	$on(window, 'hashchange', setView);
})();

/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (window) {
	'use strict';

	/**
	 * CONTROLLER Permet l'intéraction entre le Model et la View
	 * @constructor
	 * @param {object} model L'instance du Model
	 * @param {object} view L'instance de la View
	 */
	class Controller {
		constructor(model, view) {
			let self = this;
			self.model = model;
			self.view = view;

			self.view.bind('newTodo', function (title) {
				self.addItem(title);
			});

			self.view.bind('itemEdit', function (item) {
				self.editItem(item.id);
			});

			self.view.bind('itemEditDone', function (item) {
				self.editItemSave(item.id, item.title);
			});

			self.view.bind('itemEditCancel', function (item) {
				self.editItemCancel(item.id);
			});

			self.view.bind('itemRemove', function (item) {
				self.removeItem(item.id);
			});

			self.view.bind('itemToggle', function (item) {
				self.toggleComplete(item.id, item.completed);
			});

			self.view.bind('removeCompleted', function () {
				self.removeCompletedItems();
			});

			self.view.bind('toggleAll', function (status) {
				self.toggleAll(status.completed);
			});
		}

		/**
		 * Charge et initialise la View
		 * @param {string} 'Peut prendre 3 valeurs : '' / 'active' / 'completed'
		 */
		setView(locationHash) {
			let route = locationHash.split('/')[1];
			let page = route || '';
			this._updateFilterState(page);
		};

		/**
		 * Affiche toutes les tâches de la liste en cours
		 */
		showAll() {
			let self = this;
			self.model.read(function (data) {
				self.view.render('showEntries', data);
			});
		};

		/**
		 * Affiche toutes les tâches actives de la liste en cours
		 */
		showActive() {
			let self = this;
			self.model.read({
				completed: false
			}, function (data) {
				self.view.render('showEntries', data);
			});
		};

		/**
		 * Affiche toutes les tâches complétées de la liste en cours
		 */
		showCompleted() {
			let self = this;
			self.model.read({
				completed: true
			}, function (data) {
				self.view.render('showEntries', data);
			});
		};

		/**
		 * Ajoute une nouvelle tâche dans la liste en cours (insertion dans le DOM et dans le local storage)
		 * @param {string} title Le titre de la tâche ajoutée
		 */
		addItem(title) {
			let self = this;

			if (title.trim() === '') {
				return;
			}

			self.model.create(title, function () {
				self.view.render('clearNewTodo');
				self._filter(true);
			});
		};

		/**
		 * Déclenche le mode d'édition des éléments.
		 * Active l'édition d'une tâche de la liste en cours
		 *  @param {number} id L'id du model (correspondant à la tâche à éditer)
		 */
		editItem(id) {
			let self = this;
			self.model.read(id, function (data) {
				self.view.render('editItem', {
					id: id,
					title: data[0].title
				});
			});
		};

		/**
		 * Enregistre la nouvelle tâche éditée
		 *  @param {number} id L'id de la tâche éditéez
		 *  @param {string} title Le titre de la tâche éditée
		 */
		editItemSave(id, title) {
			let self = this;

			while (title[0] === " ") {
				title = title.slice(1);
			}

			while (title[title.length - 1] === " ") {
				title = title.slice(0, -1);
			}

			if (title.length !== 0) {
				self.model.update(id, {
					title: title
				}, function () {
					self.view.render('editItemDone', {
						id: id,
						title: title
					});
				});
			} else {
				self.removeItem(id);
			}
		};

		/** 
		 * Annule l'édition de la tâche en cours 
		 * @param {number} idL'id de la tâche éditée
		 */
		editItemCancel(id) {
			let self = this;
			self.model.read(id, function (data) {
				self.view.render('editItemDone', {
					id: id,
					title: data[0].title
				});
			});
		};

		/**
		 * Supprime une tâche de la liste en cours.
		 * @param {number} id L'id de la tâche à supprimer dans le DOM et dans le localStorage
		 */
		removeItem(id) {
			let self = this;
			let items;
			self.model.read(function (data) {
				items = data;
			});

			self.model.remove(id, function () {
				self.view.render('removeItem', id);
				console.log("Element with ID: " + id + " has been removed.");
			});

			self._filter();
		};

		/**
		 * Supprime toutes les tâches terminées de la liste en cours
		 */
		removeCompletedItems() {
			let self = this;
			self.model.read({
				completed: true
			}, function (data) {
				data.forEach(function (item) {
					self.removeItem(item.id);
				});
			});

			self._filter();
		};

		/**
		 * Actualise l'affichage de la tâche en fonction de son statut (terminé ou non)
		 * Donnez-lui un identifiant d'un modèle et une case à cocher et il mettra à jour l'article
		 * dans le stockage en fonction de l'état de la case à cocher.
		 * @param {number} id L'id de la tâche (toutes les tâches sont parcourues)
		 * @param {object} checkbox Vérifie si le champ checked est coché ou non
		 * @param {boolean|undefined} silent Empêche le refiltrage des éléments de la liste
		 */
		toggleComplete(id, completed, silent) {
			let self = this;
			self.model.update(id, {
				completed: completed
			}, function () {
				self.view.render('elementComplete', {
					id: id,
					completed: completed
				});
			});

			if (!silent) {
				self._filter();
			}
		};

		/**
		 * Permet d'activer ou de désactiver les cases cochées
		 * @param {object} completed Les tâches terminées
		 */
		toggleAll(completed) {
			let self = this;
			self.model.read({
				completed: !completed
			}, function (data) {
				data.forEach(function (item) {
					self.toggleComplete(item.id, completed, true);
				});
			});

			self._filter();
		};

		/**
		 * Met à jour le compteur de tâche en bas à gauche de l'application
		 */
		_updateCount() {

			let self = this;
			self.model.getCount(function (todos) {
				self.view.render('updateElementCount', todos.active);
				self.view.render('clearCompletedButton', {
					completed: todos.completed,
					visible: todos.completed > 0
				});
				self.view.render('toggleAll', {
					checked: todos.completed === todos.total
				});
				self.view.render('contentBlockVisibility', {
					visible: todos.total > 0
				});
			});
		};

		/**
		 * Refiltre les tâches en fonction de leur statut actif (#active)
		 * @param {boolean|undefined} force  Refiltre les tâches.
		 */
		_filter(force) {
			let activeRoute = this._activeRoute.charAt(0).toUpperCase() + this._activeRoute.substr(1);

			// Mettez à jour les éléments de la page, qui changent à chaque tâche terminée
			this._updateCount();

			// Si le dernier itinéraire actif n'est pas "Tous" ou si nous changeons d'itinéraire, nous
			// recréez les éléments de l'élément todo, en appelant:
			//   this.show[All|Active|Completed]();
			if (force || this._lastActiveRoute !== 'All' || this._lastActiveRoute !== activeRoute) {
				this['show' + activeRoute]();
			}

			this._lastActiveRoute = activeRoute;
		};

		/**
		 * Met à jour l'url pour filtrer les tâches (ajoute à l'url : /active ou /completed)
		 */
		_updateFilterState(currentPage) { // 

			// Stocker une référence à l'itinéraire actif, nous permettant de re-filtrer todo
			// éléments car ils sont marqués comme complets ou incomplets.
			this._activeRoute = currentPage;

			if (currentPage === '') {
				this._activeRoute = 'All';
			}

			this._filter();

			this.view.render('setFilter', currentPage);
		};
	};

	// Exporter vers la window
	window.app = window.app || {};
	window.app.Controller = Controller;
})(window);

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * NodeList globale
 */
/** @global */
(function (window) {
	'use strict';

	/**
	 * Récupère un élément avec querySelector (qs) et le sélecteur CSS
	 * @param {string} selector Le sélecteur css de l'élément
	 *  @param {string} scope Le scope de l'élément (si pas renseigné, document par défaut)
	 */
	window.qs = function (selector, scope) {
		return (scope || document).querySelector(selector);
	};

	/**
	 * Récupère plusieurs éléments avec querySelectorAll (qsa) et le sélecteur CSS
	 * @param {string} selector Le sélecteur css de l'élément
	 *  @param {string} scope Le scope de l'élément (si pas renseigné, document par défaut)
	 */
	window.qsa = function (selector, scope) {
		return (scope || document).querySelectorAll(selector);
	};

	/**
	 * Ajoute un écouteur d'évènement à l'élément ciblé
	 * @param {element} target L'élément ciblé
	 *  @param {string} type Le type de l'évènement (click, change...)
	 *  @param {string} callback La réponse en cas d'évènement
	 *  @param {Boolean} useCapture indique si l'évènement est envoyé au listener enregistré avant d'être distribué à tout EventTarget (https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener)
	 */
	window.$on = function (target, type, callback, useCapture) {
		target.addEventListener(type, callback, !!useCapture);
	};

	/**
	 * Ajoute un écouteur d'évènement à tous les éléments qui correspondent au sélecteur passé dans la fonction.
	 * @param {element} target L'élément ciblé
	 *  @param {string} selector Le sélecteur css de l'élément ciblé
	 *  @param {string} seltypeector Le type de l'event
	 *  @param {string} handler Callback exécuté
	 */
	window.$delegate = function (target, selector, type, handler) {
		function dispatchEvent(event) {
			let targetElement = event.target;
			let potentialElements = window.qsa(selector, target);
			let hasMatch = Array.prototype.indexOf.call(potentialElements, targetElement) >= 0;

			if (hasMatch) {
				handler.call(targetElement, event);
			}
		}
		// https://developer.mozilla.org/en-US/docs/Web/Events/blur
		let useCapture = type === 'blur' || type === 'focus';

		window.$on(target, type, dispatchEvent, useCapture);
	};

	/**
	 * Trouve l'élément parent qui porte le tag suivant : $parent(qs('a'), 'div');
	 * @param {element} element L'élément ciblé
	 *  @param {string} tagName Le sélecteur css de l'élément ciblé
	 */
	window.$parent = function (element, tagName) {
		if (!element.parentNode) {
			return;
		}
		if (element.parentNode.tagName.toLowerCase() === tagName.toLowerCase()) {
			return element.parentNode;
		}
		return window.$parent(element.parentNode, tagName);
	};
	// Autoriser la boucle sur les nœuds en chaînant:
	// qsa('.foo').forEach(function () {})
	NodeList.prototype.forEach = Array.prototype.forEach;
})(window);

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (window) {
	'use strict';

	/**
	 * MODEL Création d'une nouvelle instance de Model et intéraction avec la classe Store
	 * Crée une nouvelle instance de modèle et connecte le stockage.
	 * @constructor
	 * @param {object} storage Identifie la classe Store côté client.
	 */
	class Model {
		constructor(storage) {
			this.storage = storage;
		}

		/**
		 * Créer un nouveau model de todo pour la tâche ajoutée
		 * @param {string} [title] Le titre de la tâche
		 * @param {function} [callback] La fonction appelé après que le model soit crée.
		 */
		create(title, callback) {
			title = title || '';
			callback = callback || function () {};

			let newItem = {
				title: title.trim(),
				completed: false
			};

			this.storage.save(newItem, callback);
		};

		/**
		 * Recherche et renvoie un modèle stocké. Si aucune requête n'est donnée, il sera simplement
		 * tout retourner. Si vous passez une chaîne ou un nombre, cela ressemblera à
		 * l'ID du modèle à trouver. Enfin, vous pouvez lui passer un objet pour correspondre
		 * contre.remove
		 * @param {string|number|object} [query] La requête pour filtrer les modèles
		 * @param {function} [callback] Une fonction de rappel à utiliser lorsqu'un model est trouvé
		 * 
		 * Recherche et retourne un modèle stocké. Si aucune requête n'est donnée, tout sera simplement retourné. Si vous transmettez une chaîne ou un nombre, il le recherchera en tant qu'ID du modèle à rechercher. Enfin, vous pouvez lui transmettre un objet à comparer. Recherche et retourne dans le localStorage un model stocké. Si aucune requête n'est envoyée, tous les models seront renvoyés. Si la requête est une chaine de caractère ou un nombre, la méthode recherchera un id de model à retourner Il est aussi possible de passer un objet à comparer dans la requête.
		 * @example 
		 * model.read(1, func); // Va chercher et trouver le modèle avec l'id 1
		 * model.read('1'); // Fera la même chose
		 *  Ci-dessous, un exemple avec foo égal à bar et hello égal à world
		 * model.read({ foo: 'bar', hello: 'world' });remove
		 */
		read(query, callback) {
			let queryType = typeof query;
			callback = callback || function () {};

			if (queryType === 'function') {
				callback = query;
				return this.storage.findAll(callback);
			} else if (queryType === 'string' || queryType === 'number') {
				query = parseInt(query, 10);
				this.storage.find({
					id: query
				}, callback);
			} else {
				this.storage.find(query, callback);
			}
		};

		/**
		 * Met à jour un modèle en lui attribuant un ID, des données à mettre à jour et une fonction de rappel appelée une fois la mise à jour terminée.
		 * @param {number} id L'id du model à mettre à jour
		 * @param {object} data Les données à mettre à jour et leurs nouvelles valeurs
		 * @param {function} callback La fonction de rappel utilisée après la mise à jour
		 */
		update(id, data, callback) {
			this.storage.save(data, callback, id);
		};

		/**
		 * Supprime un élément du stockage
		 * @param {number} id L'ID du modèle à supprimer
		 * @param {function} callback La fonction de rappel utilisée après la suppression
		 */
		remove(id, callback) {
			this.storage.remove(id, callback);
		};

		/**
		 * AVERTISSEMENT: Attention, cette méthode supprime tous les éléments du stockage
		 * @param {function} callback La fonction de rappel utilisée après la suppression
		 */
		removeAll(callback) {
			this.storage.drop(callback);
		};

		/**
		 * Retourne le nombre de todos
		 */
		getCount(callback) {
			let todos = {
				active: 0,
				completed: 0,
				total: 0
			};

			this.storage.findAll(function (data) {
				data.forEach(function (todo) {
					if (todo.completed) {
						todos.completed++;
					} else {
						todos.active++;
					}

					todos.total++;
				});
				callback(todos);
			});
		};
	};
	// Exporter vers window
	window.app = window.app || {};
	window.app.Model = Model;
})(window);

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/*jshint eqeqeq:false */
(function (window) {
	'use strict';

	/**
	 * STORE Crée un nouvel objet Store côté client et créera un espace vide si aucun objet existe déja.
	 * @param {string} name Le nom de la base de donnée à utiliser
	 * @param {function} callback La fonction de rappel (seulement parce qu'on est en localStorage) utilisé après l'initialisation du Store. Dans le cas d'une vrai BDD, nous effecturions des appels AJAX.
	 */
	class Store {
		constructor(name, callback) {
			callback = callback || function () {};

			this._dbName = name;

			if (!localStorage[name]) {
				let data = {
					todos: []
				};

				localStorage[name] = JSON.stringify(data);
			}

			callback.call(this, JSON.parse(localStorage[name]));
		}

		/**
		 * Trouve un élément en fonction de la requête (objet JS)
		 * @param {object} query La requête à comparer (par exemple {foo: 'bar'})
		 * @param {function} callback La fonction de rappel à utiliser lorsque le traitement de la requête est terminé
		 * @example
		 * db.find({foo: 'bar', hello: 'world'}, function (data) {
		 *	 // data will return any items that have foo: bar and
		 *	 // hello: world in their properties
		 * });
		 */
		find(query, callback) {
			// if (!callback) {
			// 	return;
			// }

			let todos = JSON.parse(localStorage[this._dbName]).todos;

			callback.call(this, todos.filter(function (todo) {
				for (let q in query) {
					if (query[q] !== todo[q]) {
						return false;
					}
				}
				return true;
			}));
		};

		/**
		 * Trouve tous les éléments présent dans le stockage
		 * @param {function} callback La fonction de rappel utilisée lorsque tous les éléments ont été trouvés
		 */
		findAll(callback) {
			callback = callback || function () {};
			callback.call(this, JSON.parse(localStorage[this._dbName]).todos);
		};

		/**
		 * Sauvegarde les données dans la BDD. Si aucun élément n'existe, un nouveau élément sera créé, sinon une mise à jour des propriétés de l' élément existant sera réalisé
		 * @param {object} updateData L'objet data à sauvegarder dans la BDD
		 * @param {function} callback La fonction de rappel à utiliser après la sauvegarde
		 * @param {number} id L'id de l'élément à sauvegarder (facultatif)
		 */
		save(updateData, callback, id) {
			let data = JSON.parse(localStorage[this._dbName]);
			let todos = data.todos;
			callback = callback || function () {};
			// Generer un ID
			let newId = "";
			let charset = "0123456789";

			for (let i = 0; i < 6; i++) {
				newId += charset.charAt(Math.floor(Math.random() * charset.length));
			}
			// Si un ID a été donné, recherchez l'élément et mettez à jour chaque propriété
			if (id) {
				for (let i = 0; i < todos.length; i++) {
					if (todos[i].id === id) {
						for (let key in updateData) {
							todos[i][key] = updateData[key];
						}
						break;
					}
				}
				localStorage[this._dbName] = JSON.stringify(data);
				callback.call(this, todos);
			} else {
				// Assigner un ID
				/**
				 * Génére un identifiant unique
				 * @see  https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/now
				 * @example
				 * returns {number} 1519326977765
				 */
				// updateData.id = parseInt(newId);
				updateData.id = Date.now();
				todos.push(updateData);
				localStorage[this._dbName] = JSON.stringify(data);
				callback.call(this, [updateData]);
			}
		};

		/**
		 * Supprime un élément du stockage en se basant sur son ID
		 * @param {number} id L'id de l'élément à supprimer
		 * @param {function} callback La fonction de rappel utilisée après la suppression
		 */
		remove(id, callback) {
			let data = JSON.parse(localStorage[this._dbName]);
			let todos = data.todos;
			let todoId;

			for (let i = 0; i < todos.length; i++) {
				if (todos[i].id == id) {
					todoId = todos[i].id;
				}
			}

			for (let i = 0; i < todos.length; i++) {
				if (todos[i].id == todoId) {
					todos.splice(i, 1);
				}
			}

			localStorage[this._dbName] = JSON.stringify(data);
			callback.call(this, todos);
		};

		/**
		 * Démarre un nouveau stockage
		 * @param {function} callback La fonction de rappel utilisée après avoir envoyé les données
		 */
		drop(callback) {
			let data = {
				todos: []
			};
			localStorage[this._dbName] = JSON.stringify(data);
			callback.call(this, data.todos);
		};
	};
	// Export to window
	window.app = window.app || {};
	window.app.Store = Store;
})(window);

/***/ }),

/***/ "./src/style/main.css":
/*!****************************!*\
  !*** ./src/style/main.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/main.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/template.js":
/*!*************************!*\
  !*** ./src/template.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*jshint laxbreak:true */
(function (window) {
	'use strict';

	let htmlEscapes = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		'\'': '&#x27;',
		'`': '&#x60;'
	};

	let escapeHtmlChar = function (chr) {
		return htmlEscapes[chr];
	};

	let reUnescapedHtml = /[&<>"'`]/g;
	let reHasUnescapedHtml = new RegExp(reUnescapedHtml.source);

	let escape = function (string) {
		return (string && reHasUnescapedHtml.test(string)) ?
			string.replace(reUnescapedHtml, escapeHtmlChar) :
			string;
	};

	/**
	 * TEMPLATE Définit le template utilisé pour afficher les tâches
	 * @constructor
	 */
	class Template {
		constructor() {
			this.defaultTemplate = '<li data-id="{{id}}" class="{{completed}}">' +
				'<div class="view">' +
				'<input class="toggle" type="checkbox" {{checked}}>' +
				'<label>{{title}}</label>' +
				'<button class="destroy"></button>' +
				'</div>' +
				'</li>';
		}

		/**
		 * Crée un élément HTML et place le template dans l'application. 
		 * Normalement, il est conseillé d'utiliser un moteur de template comme Mustache ou Handlebars.
		 * Pour simplifier notre application, nous avons décidé de créer un template en vanilla JS.
		 * @param {object} data L'objet contenant les informations à remplacer dans le template.
		 * @returns {string} Chaîne HTML d'un élément <li> Le template HTML contenant l'élément
		 * @example
		 * view.show({
		 * id: 1, // l'id de la tâche
		 * title: "Hello World", // le titre de la tâche
		 * completed: 0, // la tâche est par défaut non terminée
		});
		 */
		show(data) {
			let i, l;
			let view = '';

			for (i = 0, l = data.length; i < l; i++) {
				let template = this.defaultTemplate;
				let completed = '';
				let checked = '';

				if (data[i].completed) {
					completed = 'completed';
					checked = 'checked';
				}

				template = template.replace('{{id}}', data[i].id);
				template = template.replace('{{title}}', escape(data[i].title));
				template = template.replace('{{completed}}', completed);
				template = template.replace('{{checked}}', checked);

				view = view + template;
			}

			return view;
		};

		/**
		 * Affiche un compteur de tâches actives en bas à gauche de l'application
		 * @param {number} activeTodos Le nombre de tâches actives
		 * @returns {string} Chaîne contenant le nombre
		 */
		itemCounter(activeTodos) {
			let plural = activeTodos === 1 ? '' : 's';

			return '<strong>' + activeTodos + '</strong> item' + plural + ' left';
		};

		/** 
		 * Affiche ou non le bouton "Clear Completed" (si pas de tâches terminées = pas de bouton)
		 * @param  {Number} completedTodos Le nombre de tâche complétées
		 * @returns {string} Chaîne contenant le nombre
		 */
		clearCompletedButton(completedTodos) {
			if (completedTodos > 0) {
				return 'Clear completed';
			} else {
				return ''; // RETURN itemCounterLa chaine de caractère contenant le texte du bouton.
			}
		};
	};
	// Export to window
	window.app = window.app || {};
	window.app.Template = Template;
})(window);

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

/*global qs, qsa, $on, $parent, $delegate */

(function (window) {
	'use strict';
	/** 
	 * VIEW Définit les valeurs par défaut du template ainsi que les intéractions avec le DOM (touches du clavier et évènements)
	 * @param {string} template template utilisé
	 */
	class View {
		constructor(template) {
			this.template = template;

			this.ENTER_KEY = 13;
			this.ESCAPE_KEY = 27;

			this.$todoList = qs('.todo-list');
			this.$todoItemCounter = qs('.todo-count');
			this.$clearCompleted = qs('.clear-completed');
			this.$main = qs('.main');
			this.$footer = qs('.footer');
			this.$toggleAll = qs('.toggle-all');
			this.$newTodo = qs('.new-todo');
		}

		/** 
		 * Supprime une tâche de la liste
		 * @param {number} id L'id de la tâche à supprimer
		 */
		_removeItem(id) {
			let elem = qs('[data-id="' + id + '"]');

			if (elem) {
				this.$todoList.removeChild(elem);
			}
		};

		/** 
		 * Affiche ou cache les éléments terminés
		 * @param {number} completedCount Le nombre d'éléments terminés
		 * @param {boolean} visible Les éléments sont-ils visibles ou non ?
		 */
		_clearCompletedButton(completedCount, visible) {
			this.$clearCompleted.innerHTML = this.template.clearCompletedButton(completedCount);
			this.$clearCompleted.style.display = visible ? 'block' : 'none';
		};

		/** 
		 * Affiche ou cache les éléments terminés
		 * @param {string} currentPage Le filtre appliqué : '' / active / completed
		 */
		_setFilter(currentPage) {
			qs('.filters .selected').className = '';
			qs('.filters [href="#/' + currentPage + '"]').className = 'selected';
		};

		/** 
		 * Test si une tâche est terminée ou non
		 * @param {number} id L'id de la tâche à tester
		 * @param {boolean} completed La tâche est-elle terminée ou non ?
		 */
		_elementComplete(id, completed) {
			let listItem = qs('[data-id="' + id + '"]');

			// if (!listItem) {
			// 	return;
			// }

			listItem.className = completed ? 'completed' : '';

			// Dans le cas où il a été basculé à partir d'un événement et non en cliquant sur la case à cocher
			qs('input', listItem).checked = completed;
		};

		/** 
		 * Editer une tâche dans la liste (grâce au double click)
		 * @param {number} id L'id de la tâche à éditer
		 * @param {string} title Le nouveau titre de la tâche
		 */
		_editItem(id, title) {
			let listItem = qs('[data-id="' + id + '"]');

			// if (!listItem) {
			// 	return;
			// }

			listItem.className = listItem.className + ' editing';

			let input = document.createElement('input');
			input.className = 'edit';

			listItem.appendChild(input);
			input.focus();
			input.value = title;
		};

		/** 
		 * Indique que l'édition d'une tâche est terminée
		 * @param {number} id L'id de la tâche qui était en édition
		 * @param {string} title Le nouveau titre de la tâche
		 */
		_editItemDone(id, title) {
			let listItem = qs('[data-id="' + id + '"]');

			// if (!listItem) {
			// 	return;
			// }

			let input = qs('input.edit', listItem);
			listItem.removeChild(input);

			listItem.className = listItem.className.replace('editing', '');

			qsa('label', listItem).forEach(function (label) {
				label.textContent = title;
			});
		};

		/** 
		 * Indique que l'édition d'une tâche est terminée
		 * @param {string} viewCmd La fonction active
		 * @param {object} parameter Les paramètres actifs
		 */
		render(viewCmd, parameter) {
			let self = this;
			let viewCommands = {
				showEntries: function () {
					self.$todoList.innerHTML = self.template.show(parameter);
				},
				removeItem: function () {
					self._removeItem(parameter);
				},
				updateElementCount: function () {
					self.$todoItemCounter.innerHTML = self.template.itemCounter(parameter);
				},
				clearCompletedButton: function () {
					self._clearCompletedButton(parameter.completed, parameter.visible);
				},
				contentBlockVisibility: function () {
					self.$main.style.display = self.$footer.style.display = parameter.visible ? 'block' : 'none';
				},
				toggleAll: function () {
					self.$toggleAll.checked = parameter.checked;
				},
				setFilter: function () {
					self._setFilter(parameter);
				},
				clearNewTodo: function () {
					self.$newTodo.value = '';
				},
				elementComplete: function () {
					self._elementComplete(parameter.id, parameter.completed);
				},
				editItem: function () {
					self._editItem(parameter.id, parameter.title);
				},
				editItemDone: function () {
					self._editItemDone(parameter.id, parameter.title);
				}
			};

			viewCommands[viewCmd]();
		};

		/** 
		 * Définit les actions après l'édition d'une tâche
		 * @param {element} element La tâche dont on cherche l'id
		 * Return L'id de la tâche
		 */
		_itemId(element) {
			let li = $parent(element, 'li');
			return parseInt(li.dataset.id, 10);
		};

		/** 
		 * Définit les actions après l'édition d'une tâche
		 * @param {function} handler Fonction de rappel qui est exécutée lors de l'annulation de l'édition d'une tâche
		 */
		_bindItemEditDone(handler) {
			let self = this;
			$delegate(self.$todoList, 'li .edit', 'blur', function () {
				if (!this.dataset.iscanceled) {
					handler({
						id: self._itemId(this),
						title: this.value
					});
				}
			});

			$delegate(self.$todoList, 'li .edit', 'keypress', function (event) {
				if (event.keyCode === self.ENTER_KEY) {
					// Retirez le curseur de l'entrée lorsque vous appuyez sur Entrée, comme s'il 
					// était une vraie forme
					this.blur();
				}
			});
		};

		/** 
		 * Définit les actions lorsque l'édition d'une tâche est annulée
		 * @param {function} handler Fonction de rappel qui est exécutée lors de l'annulation de l'édition d'une tâche
		 */
		_bindItemEditCancel(handler) {
			let self = this;
			$delegate(self.$todoList, 'li .edit', 'keyup', function (event) {
				if (event.keyCode === self.ESCAPE_KEY) {
					this.dataset.iscanceled = true;
					this.blur();

					handler({
						id: self._itemId(this)
					});
				}
			});
		};

		/** 
		 * Greffe des écouteurs d'évènements sur les tâches en fonction des actions de l'utilisateur, côté HTML
		 * @param {string} event L'event choisi
		 * @param {function} handler Fonctnion de rappel exécutée selon la situation
		 */
		bind(event, handler) {
			let self = this;
			// Amélioration
			// Methode servant a binbder plusieur event: dans une logique d'amelioraztion, nous avons utiliser un traitement switch, qui est un peu plus maintenable et un peu plus lisible et plus performant.
			switch (event) {
				case 'newTodo':
					$on(self.$newTodo, 'change', function () {
						handler(self.$newTodo.value);
					});
					break;
				case 'removeCompleted':
					$on(self.$clearCompleted, 'click', function () {
						handler();
					});
					break;
				case 'toggleAll':
					$on(self.$toggleAll, 'click', function () {
						handler({
							completed: this.checked
						});
					});
					break;
				case 'itemEdit':
					$delegate(self.$todoList, 'li label', 'dblclick', function () {
						handler({
							id: self._itemId(this)
						});
					});
					break;
				case 'itemRemove':
					$delegate(self.$todoList, '.destroy', 'click', function () {
						handler({
							id: self._itemId(this)
						});
					});
					break;
				case 'itemToggle':
					$delegate(self.$todoList, '.toggle', 'click', function () {
						handler({
							id: self._itemId(this),
							completed: this.checked
						});
					});
					break;
				case 'itemEditDone':
					self._bindItemEditDone(handler);
					break;

				case 'itemEditCancel': {
					self._bindItemEditCancel(handler);
				}
			}
		};
	};

	// Export to window
	window.app = window.app || {};
	window.app.View = View;
}(window));

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltZy90b2RvLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS9tYWluLmNzcz84MzMxIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFD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QWEsYUFBYSxNQUFNLE9BQU8sYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksU0FBUyxPQUFPLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sS0FBSyxNQUFNLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLE9BQU8sVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVB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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLFUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXBwLmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIiBpbWcgL2M4NGQ4ZWZiYzg2MGJiZjAwNzVlNTkzMjg0NzljYzIyLnBuZ1wiOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuXFxuaDEge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZm9udC1zaXplOiA4MHB4O1xcbn1cXG5cXG4uYmctbGlnaHQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG59XFxuXFxuLmJ0bi1vdXRsaW5lLXByaW1hcnkge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIGNvbG9yOiAjREIwNzA3O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjREIwNzA3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm5hdi1saW5rIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG5hLm5hdmJhci1icmFuZCB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLmJ0bi1vdXRsaW5lLXByaW1hcnk6aG92ZXIge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0RCMDcwNztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RCMDcwNztcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQ6IDE0cHggJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNGVtO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgICBjb2xvcjogIzExMTExMTtcXG4gICAgLyogbWluLXdpZHRoOiAyMzBweDtcXG4gICAgbWF4LXdpZHRoOiA1NTBweDsgKi9cXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG46Zm9jdXMge1xcbiAgICBvdXRsaW5lOiAwO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG9hcHAge1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBtYXJnaW46IDUwcHggMCA0MHB4IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLFxcbiAgICAgICAgMCAyNXB4IDUwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIG1pbi13aWR0aDogMjMwcHg7XFxuICAgIG1heC13aWR0aDogNTUwcHg7XFxufVxcblxcbi50b2RvYXBwIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG4udG9kb2FwcCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG59XFxuXFxuLnRvZG9hcHAgaW5wdXQ6OmlucHV0LXBsYWNlaG9sZGVyIHtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG4udG9kb2FwcCBoMSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtMTQwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDgwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6ICNEQjA3MDc7XFxuICAgIC13ZWJraXQtdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcXG4gICAgLW1vei10ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcbiAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcbn1cXG5cXG4ubmV3LXRvZG8sXFxuLmVkaXQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgd2lkdGg6IDE1MCU7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbiAgICBsaW5lLWhlaWdodDogMS40ZW07XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBwYWRkaW5nOiA2cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbn1cXG5cXG4ubmV3LXRvZG8ge1xcbiAgICAvKiBwYWRkaW5nOiAxNnB4IDE2cHggMTZweCAxNDBweDtcXG4gICAgICovXFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMDMpO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIC0ycHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wMyk7XFxufVxcblxcbi5tYWluIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZmZmZmZjtcXG59XFxuXFxuLnRvZ2dsZS1hbGwge1xcbiAgICB3aWR0aDogMXB4O1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICAvKiBNb2JpbGUgU2FmYXJpICovXFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDEwMCU7XFxuICAgIGJvdHRvbTogMTAwJTtcXG59XFxuXFxuLnRvZ2dsZS1hbGwrbGFiZWwge1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiAzNHB4O1xcbiAgICBmb250LXNpemU6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtNTJweDtcXG4gICAgbGVmdDogLTEzcHg7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbi50b2dnbGUtYWxsK2xhYmVsOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICfina8nO1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBwYWRkaW5nOiAxMHB4IDI3cHggMTBweCAyN3B4O1xcbn1cXG5cXG4udG9nZ2xlLWFsbDpjaGVja2VkK2xhYmVsOmJlZm9yZSB7XFxuICAgIGNvbG9yOiAjNzM3MzczO1xcbn1cXG5cXG4udG9kby1saXN0IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4udG9kby1saXN0IGxpIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWRlZGVkO1xcbn1cXG5cXG4udG9kby1saXN0IGxpOmxhc3QtY2hpbGQge1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG5cXG4udG9kby1saXN0IGxpLmVkaXRpbmcge1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4udG9kby1saXN0IGxpLmVkaXRpbmcgLmVkaXQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQzcHgpO1xcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XFxuICAgIG1hcmdpbjogMCAwIDAgNDNweDtcXG59XFxuXFxuLnRvZG8tbGlzdCBsaS5lZGl0aW5nIC52aWV3IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG8tbGlzdCBsaSAudG9nZ2xlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgLyogYXV0bywgc2luY2Ugbm9uLVdlYktpdCBicm93c2VycyBkb2Vzbid0IHN1cHBvcnQgaW5wdXQgc3R5bGluZyAqL1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIG1hcmdpbjogYXV0byAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIC8qIE1vYmlsZSBTYWZhcmkgKi9cXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4udG9kby1saXN0IGxpIC50b2dnbGUge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4udG9kby1saXN0IGxpIC50b2dnbGUrbGFiZWwge1xcbiAgICAvKlxcblxcdFxcdEZpcmVmb3ggcmVxdWlyZXMgYCNgIHRvIGJlIGVzY2FwZWQgLSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD05MjI0MzNcXG5cXHRcXHRJRSBhbmQgRWRnZSByZXF1aXJlcyAqZXZlcnl0aGluZyogdG8gYmUgZXNjYXBlZCB0byByZW5kZXIsIHNvIHdlIGRvIHRoYXQgaW5zdGVhZCBvZiBqdXN0IHRoZSBgI2AgLSBodHRwczovL2RldmVsb3Blci5taWNyb3NvZnQuY29tL2VuLXVzL21pY3Jvc29mdC1lZGdlL3BsYXRmb3JtL2lzc3Vlcy83MTU3NDU5L1xcblxcdCovXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsJTNDc3ZnJTIweG1sbnMlM0QlMjJodHRwJTNBLy93d3cudzMub3JnLzIwMDAvc3ZnJTIyJTIwd2lkdGglM0QlMjI0MCUyMiUyMGhlaWdodCUzRCUyMjQwJTIyJTIwdmlld0JveCUzRCUyMi0xMCUyMC0xOCUyMDEwMCUyMDEzNSUyMiUzRSUzQ2NpcmNsZSUyMGN4JTNEJTIyNTAlMjIlMjBjeSUzRCUyMjUwJTIyJTIwciUzRCUyMjUwJTIyJTIwZmlsbCUzRCUyMm5vbmUlMjIlMjBzdHJva2UlM0QlMjIlMjNlZGVkZWQlMjIlMjBzdHJva2Utd2lkdGglM0QlMjIzJTIyLyUzRSUzQy9zdmclM0UnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGxlZnQ7XFxufVxcblxcbi50b2RvLWxpc3QgbGkgLnRvZ2dsZTpjaGVja2VkK2xhYmVsIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCwlM0NzdmclMjB4bWxucyUzRCUyMmh0dHAlM0EvL3d3dy53My5vcmcvMjAwMC9zdmclMjIlMjB3aWR0aCUzRCUyMjQwJTIyJTIwaGVpZ2h0JTNEJTIyNDAlMjIlMjB2aWV3Qm94JTNEJTIyLTEwJTIwLTE4JTIwMTAwJTIwMTM1JTIyJTNFJTNDY2lyY2xlJTIwY3glM0QlMjI1MCUyMiUyMGN5JTNEJTIyNTAlMjIlMjByJTNEJTIyNTAlMjIlMjBmaWxsJTNEJTIybm9uZSUyMiUyMHN0cm9rZSUzRCUyMiUyM2JkZGFkNSUyMiUyMHN0cm9rZS13aWR0aCUzRCUyMjMlMjIvJTNFJTNDcGF0aCUyMGZpbGwlM0QlMjIlMjM1ZGMyYWYlMjIlMjBkJTNEJTIyTTcyJTIwMjVMNDIlMjA3MSUyMDI3JTIwNTZsLTQlMjA0JTIwMjAlMjAyMCUyMDM0LTUyeiUyMi8lM0UlM0Mvc3ZnJTNFJyk7XFxufVxcblxcbi50b2RvLWxpc3QgbGkgbGFiZWwge1xcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxuICAgIHBhZGRpbmc6IDE1cHggMTVweCAxNXB4IDYwcHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBsaW5lLWhlaWdodDogMS4yO1xcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjRzO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBjb2xvcjogIzRkNGQ0ZDtcXG59XFxuXFxuLnRvZG8tbGlzdCBsaS5jb21wbGV0ZWQgbGFiZWwge1xcbiAgICBjb2xvcjogI2NkY2RjZDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50b2RvLWxpc3QgbGkgLmRlc3Ryb3kge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDEwcHg7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgbWFyZ2luOiBhdXRvIDA7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgY29sb3I6ICNjYzlhOWE7XFxuICAgIG1hcmdpbi1ib3R0b206IDExcHg7XFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1vdXQ7XFxufVxcblxcbi50b2RvLWxpc3QgbGkgLmRlc3Ryb3k6aG92ZXIge1xcbiAgICBjb2xvcjogI2FmNWI1ZTtcXG59XFxuXFxuLnRvZG8tbGlzdCBsaSAuZGVzdHJveTphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICfDlyc7XFxufVxcblxcbi50b2RvLWxpc3QgbGk6aG92ZXIgLmRlc3Ryb3kge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnRvZG8tbGlzdCBsaSAuZWRpdCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvLWxpc3QgbGkuZWRpdGluZzpsYXN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTFweDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZmZmZmY7XFxufVxcblxcbi5mb290ZXI6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxcbiAgICAgICAgMCA4cHggMCAtM3B4ICNmNmY2ZjYsXFxuICAgICAgICAwIDlweCAxcHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXFxuICAgICAgICAwIDE2cHggMCAtNnB4ICNmNmY2ZjYsXFxuICAgICAgICAwIDE3cHggMnB4IC02cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4udG9kby1jb3VudCB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcXG59XFxuXFxuLnRvZG8tY291bnQgc3Ryb25nIHtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuLmZpbHRlcnMge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIG1hcmdpbi10b3A6IC0xNXB4O1xcbn1cXG5cXG4uZmlsdGVycyBsaSB7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuLmZpbHRlcnMgbGkgYSB7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBtYXJnaW46IDNweDtcXG4gICAgcGFkZGluZzogM3B4IDdweDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4uZmlsdGVycyBsaSBhOmhvdmVyIHtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDE3NSwgNDcsIDQ3LCAwLjEpO1xcbn1cXG5cXG4uZmlsdGVycyBsaSBhLnNlbGVjdGVkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDE3NSwgNDcsIDQ3LCAwLjIpO1xcbn1cXG5cXG4uY2xlYXItY29tcGxldGVkIHtcXG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XFxufVxcblxcbi5jbGVhci1jb21wbGV0ZWQsXFxuaHRtbCAuY2xlYXItY29tcGxldGVkOmFjdGl2ZSB7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsaW5lLWhlaWdodDogMjBweDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jbGVhci1jb21wbGV0ZWQ6aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLmluZm8ge1xcbiAgICBtYXJnaW46IDY1cHggYXV0byAwO1xcbiAgICBjb2xvcjogIzRkNGQ0ZDtcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmluZm8gcCB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG4uaW5mbyBhIHtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmluZm8gYTpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4vKlxcblxcdEhhY2sgdG8gcmVtb3ZlIGJhY2tncm91bmQgZnJvbSBNb2JpbGUgU2FmYXJpLlxcblxcdENhbid0IHVzZSBpdCBnbG9iYWxseSBzaW5jZSBpdCBkZXN0cm95cyBjaGVja2JveGVzIGluIEZpcmVmb3hcXG4qL1xcbkBtZWRpYSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDApIHtcXG5cXG4gICAgLnRvZ2dsZS1hbGwsXFxuICAgIC50b2RvLWxpc3QgbGkgLnRvZ2dsZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICB9XFxuXFxuICAgIC50b2RvLWxpc3QgbGkgLnRvZ2dsZSB7XFxuICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQzMHB4KSB7XFxuICAgIC5mb290ZXIge1xcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB9XFxuXFxuICAgIC5maWx0ZXJzIHtcXG4gICAgICAgIGJvdHRvbTogMTBweDtcXG4gICAgfVxcbn1cXG5cXG5ociB7XFxuICAgIG1hcmdpbjogMjBweCAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJvcmRlci10b3A6IDFweCBkYXNoZWQgI2M1YzVjNTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZjdmN2Y3O1xcbn1cXG5cXG4ubGVhcm4gYSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6ICNEQjA3MDc7XFxufVxcblxcbi5sZWFybiBhOmhvdmVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIGNvbG9yOiAjNzg3ZTdlO1xcbn1cXG5cXG4ubGVhcm4gaDMsXFxuLmxlYXJuIGg0LFxcbi5sZWFybiBoNSB7XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBsaW5lLWhlaWdodDogMS4yO1xcbiAgICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLmxlYXJuIGgzIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4ubGVhcm4gaDQge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5sZWFybiBoNSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLmxlYXJuIHVsIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwIDAgMzBweCAyNXB4O1xcbn1cXG5cXG4ubGVhcm4gbGkge1xcbiAgICBsaW5lLWhlaWdodDogMjBweDtcXG59XFxuXFxuLmxlYXJuIHAge1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbiNpc3N1ZS1jb3VudCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5xdW90ZSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luOiAyMHB4IDAgNjBweCAwO1xcbn1cXG5cXG4ucXVvdGUgcCB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLnF1b3RlIHA6YmVmb3JlIHtcXG4gICAgY29udGVudDogJ+KAnCc7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgb3BhY2l0eTogLjE1O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTIwcHg7XFxuICAgIGxlZnQ6IDNweDtcXG59XFxuXFxuLnF1b3RlIHA6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAn4oCdJztcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbiAgICBvcGFjaXR5OiAuMTU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAtNDJweDtcXG4gICAgcmlnaHQ6IDNweDtcXG59XFxuXFxuLnF1b3RlIGZvb3RlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAtNDBweDtcXG4gICAgcmlnaHQ6IDA7XFxufVxcblxcbi5xdW90ZSBmb290ZXIgaW1nIHtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4ucXVvdGUgZm9vdGVyIGEge1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4uc3BlZWNoLWJ1YmJsZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuMDQpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5zcGVlY2gtYnViYmxlOmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMDAlO1xcbiAgICByaWdodDogMzBweDtcXG4gICAgYm9yZGVyOiAxM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItdG9wLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4wNCk7XFxufVxcblxcbi5sZWFybi1iYXI+LmxlYXJuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMjcycHg7XFxuICAgIHRvcDogOHB4O1xcbiAgICBsZWZ0OiAtMzAwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNik7XFxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQ7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogODk5cHgpIHtcXG4gICAgLmxlYXJuLWJhciB7XFxuICAgICAgICB3aWR0aDogYXV0bztcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMzAwcHg7XFxuICAgIH1cXG5cXG4gICAgLmxlYXJuLWJhcj4ubGVhcm4ge1xcbiAgICAgICAgbGVmdDogOHB4O1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvc3R5bGUvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0lBRUksU0FBUztJQUNULFVBQVU7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aEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLDhCQUE4QjtJQUM5QixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFFBQVE7SUFDUixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix5Q0FBeUM7SUFDekMseUJBQXlCO0lBQ3pCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJO1FBQ0ksV0FBVztRQUNYLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLFNBQVM7SUFDYjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuXFxuaDEge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZm9udC1zaXplOiA4MHB4O1xcbn1cXG5cXG4uYmctbGlnaHQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG59XFxuXFxuLmJ0bi1vdXRsaW5lLXByaW1hcnkge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIGNvbG9yOiAjREIwNzA3O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjREIwNzA3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm5hdi1saW5rIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG5hLm5hdmJhci1icmFuZCB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLmJ0bi1vdXRsaW5lLXByaW1hcnk6aG92ZXIge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0RCMDcwNztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RCMDcwNztcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQ6IDE0cHggJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNGVtO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgICBjb2xvcjogIzExMTExMTtcXG4gICAgLyogbWluLXdpZHRoOiAyMzBweDtcXG4gICAgbWF4LXdpZHRoOiA1NTBweDsgKi9cXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG46Zm9jdXMge1xcbiAgICBvdXRsaW5lOiAwO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG9hcHAge1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBtYXJnaW46IDUwcHggMCA0MHB4IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLFxcbiAgICAgICAgMCAyNXB4IDUwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIG1pbi13aWR0aDogMjMwcHg7XFxuICAgIG1heC13aWR0aDogNTUwcHg7XFxufVxcblxcbi50b2RvYXBwIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG4udG9kb2FwcCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG59XFxuXFxuLnRvZG9hcHAgaW5wdXQ6OmlucHV0LXBsYWNlaG9sZGVyIHtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG4udG9kb2FwcCBoMSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtMTQwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDgwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6ICNEQjA3MDc7XFxuICAgIC13ZWJraXQtdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcXG4gICAgLW1vei10ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcbiAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcbn1cXG5cXG4ubmV3LXRvZG8sXFxuLmVkaXQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgd2lkdGg6IDE1MCU7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbiAgICBsaW5lLWhlaWdodDogMS40ZW07XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBwYWRkaW5nOiA2cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbn1cXG5cXG4ubmV3LXRvZG8ge1xcbiAgICAvKiBwYWRkaW5nOiAxNnB4IDE2cHggMTZweCAxNDBweDtcXG4gICAgICovXFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMDMpO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIC0ycHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wMyk7XFxufVxcblxcbi5tYWluIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZmZmZmZjtcXG59XFxuXFxuLnRvZ2dsZS1hbGwge1xcbiAgICB3aWR0aDogMXB4O1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICAvKiBNb2JpbGUgU2FmYXJpICovXFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDEwMCU7XFxuICAgIGJvdHRvbTogMTAwJTtcXG59XFxuXFxuLnRvZ2dsZS1hbGwrbGFiZWwge1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiAzNHB4O1xcbiAgICBmb250LXNpemU6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtNTJweDtcXG4gICAgbGVmdDogLTEzcHg7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbi50b2dnbGUtYWxsK2xhYmVsOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICfina8nO1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBwYWRkaW5nOiAxMHB4IDI3cHggMTBweCAyN3B4O1xcbn1cXG5cXG4udG9nZ2xlLWFsbDpjaGVja2VkK2xhYmVsOmJlZm9yZSB7XFxuICAgIGNvbG9yOiAjNzM3MzczO1xcbn1cXG5cXG4udG9kby1saXN0IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4udG9kby1saXN0IGxpIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWRlZGVkO1xcbn1cXG5cXG4udG9kby1saXN0IGxpOmxhc3QtY2hpbGQge1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG5cXG4udG9kby1saXN0IGxpLmVkaXRpbmcge1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4udG9kby1saXN0IGxpLmVkaXRpbmcgLmVkaXQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQzcHgpO1xcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XFxuICAgIG1hcmdpbjogMCAwIDAgNDNweDtcXG59XFxuXFxuLnRvZG8tbGlzdCBsaS5lZGl0aW5nIC52aWV3IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG8tbGlzdCBsaSAudG9nZ2xlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgLyogYXV0bywgc2luY2Ugbm9uLVdlYktpdCBicm93c2VycyBkb2Vzbid0IHN1cHBvcnQgaW5wdXQgc3R5bGluZyAqL1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIG1hcmdpbjogYXV0byAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIC8qIE1vYmlsZSBTYWZhcmkgKi9cXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4udG9kby1saXN0IGxpIC50b2dnbGUge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4udG9kby1saXN0IGxpIC50b2dnbGUrbGFiZWwge1xcbiAgICAvKlxcblxcdFxcdEZpcmVmb3ggcmVxdWlyZXMgYCNgIHRvIGJlIGVzY2FwZWQgLSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD05MjI0MzNcXG5cXHRcXHRJRSBhbmQgRWRnZSByZXF1aXJlcyAqZXZlcnl0aGluZyogdG8gYmUgZXNjYXBlZCB0byByZW5kZXIsIHNvIHdlIGRvIHRoYXQgaW5zdGVhZCBvZiBqdXN0IHRoZSBgI2AgLSBodHRwczovL2RldmVsb3Blci5taWNyb3NvZnQuY29tL2VuLXVzL21pY3Jvc29mdC1lZGdlL3BsYXRmb3JtL2lzc3Vlcy83MTU3NDU5L1xcblxcdCovXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsJTNDc3ZnJTIweG1sbnMlM0QlMjJodHRwJTNBLy93d3cudzMub3JnLzIwMDAvc3ZnJTIyJTIwd2lkdGglM0QlMjI0MCUyMiUyMGhlaWdodCUzRCUyMjQwJTIyJTIwdmlld0JveCUzRCUyMi0xMCUyMC0xOCUyMDEwMCUyMDEzNSUyMiUzRSUzQ2NpcmNsZSUyMGN4JTNEJTIyNTAlMjIlMjBjeSUzRCUyMjUwJTIyJTIwciUzRCUyMjUwJTIyJTIwZmlsbCUzRCUyMm5vbmUlMjIlMjBzdHJva2UlM0QlMjIlMjNlZGVkZWQlMjIlMjBzdHJva2Utd2lkdGglM0QlMjIzJTIyLyUzRSUzQy9zdmclM0UnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGxlZnQ7XFxufVxcblxcbi50b2RvLWxpc3QgbGkgLnRvZ2dsZTpjaGVja2VkK2xhYmVsIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCwlM0NzdmclMjB4bWxucyUzRCUyMmh0dHAlM0EvL3d3dy53My5vcmcvMjAwMC9zdmclMjIlMjB3aWR0aCUzRCUyMjQwJTIyJTIwaGVpZ2h0JTNEJTIyNDAlMjIlMjB2aWV3Qm94JTNEJTIyLTEwJTIwLTE4JTIwMTAwJTIwMTM1JTIyJTNFJTNDY2lyY2xlJTIwY3glM0QlMjI1MCUyMiUyMGN5JTNEJTIyNTAlMjIlMjByJTNEJTIyNTAlMjIlMjBmaWxsJTNEJTIybm9uZSUyMiUyMHN0cm9rZSUzRCUyMiUyM2JkZGFkNSUyMiUyMHN0cm9rZS13aWR0aCUzRCUyMjMlMjIvJTNFJTNDcGF0aCUyMGZpbGwlM0QlMjIlMjM1ZGMyYWYlMjIlMjBkJTNEJTIyTTcyJTIwMjVMNDIlMjA3MSUyMDI3JTIwNTZsLTQlMjA0JTIwMjAlMjAyMCUyMDM0LTUyeiUyMi8lM0UlM0Mvc3ZnJTNFJyk7XFxufVxcblxcbi50b2RvLWxpc3QgbGkgbGFiZWwge1xcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxuICAgIHBhZGRpbmc6IDE1cHggMTVweCAxNXB4IDYwcHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBsaW5lLWhlaWdodDogMS4yO1xcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjRzO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBjb2xvcjogIzRkNGQ0ZDtcXG59XFxuXFxuLnRvZG8tbGlzdCBsaS5jb21wbGV0ZWQgbGFiZWwge1xcbiAgICBjb2xvcjogI2NkY2RjZDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50b2RvLWxpc3QgbGkgLmRlc3Ryb3kge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDEwcHg7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgbWFyZ2luOiBhdXRvIDA7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgY29sb3I6ICNjYzlhOWE7XFxuICAgIG1hcmdpbi1ib3R0b206IDExcHg7XFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1vdXQ7XFxufVxcblxcbi50b2RvLWxpc3QgbGkgLmRlc3Ryb3k6aG92ZXIge1xcbiAgICBjb2xvcjogI2FmNWI1ZTtcXG59XFxuXFxuLnRvZG8tbGlzdCBsaSAuZGVzdHJveTphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICfDlyc7XFxufVxcblxcbi50b2RvLWxpc3QgbGk6aG92ZXIgLmRlc3Ryb3kge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnRvZG8tbGlzdCBsaSAuZWRpdCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvLWxpc3QgbGkuZWRpdGluZzpsYXN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTFweDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZmZmZmY7XFxufVxcblxcbi5mb290ZXI6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxcbiAgICAgICAgMCA4cHggMCAtM3B4ICNmNmY2ZjYsXFxuICAgICAgICAwIDlweCAxcHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXFxuICAgICAgICAwIDE2cHggMCAtNnB4ICNmNmY2ZjYsXFxuICAgICAgICAwIDE3cHggMnB4IC02cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4udG9kby1jb3VudCB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcXG59XFxuXFxuLnRvZG8tY291bnQgc3Ryb25nIHtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuLmZpbHRlcnMge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIG1hcmdpbi10b3A6IC0xNXB4O1xcbn1cXG5cXG4uZmlsdGVycyBsaSB7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuLmZpbHRlcnMgbGkgYSB7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBtYXJnaW46IDNweDtcXG4gICAgcGFkZGluZzogM3B4IDdweDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4uZmlsdGVycyBsaSBhOmhvdmVyIHtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDE3NSwgNDcsIDQ3LCAwLjEpO1xcbn1cXG5cXG4uZmlsdGVycyBsaSBhLnNlbGVjdGVkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDE3NSwgNDcsIDQ3LCAwLjIpO1xcbn1cXG5cXG4uY2xlYXItY29tcGxldGVkIHtcXG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XFxufVxcblxcbi5jbGVhci1jb21wbGV0ZWQsXFxuaHRtbCAuY2xlYXItY29tcGxldGVkOmFjdGl2ZSB7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsaW5lLWhlaWdodDogMjBweDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jbGVhci1jb21wbGV0ZWQ6aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLmluZm8ge1xcbiAgICBtYXJnaW46IDY1cHggYXV0byAwO1xcbiAgICBjb2xvcjogIzRkNGQ0ZDtcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmluZm8gcCB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG4uaW5mbyBhIHtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmluZm8gYTpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4vKlxcblxcdEhhY2sgdG8gcmVtb3ZlIGJhY2tncm91bmQgZnJvbSBNb2JpbGUgU2FmYXJpLlxcblxcdENhbid0IHVzZSBpdCBnbG9iYWxseSBzaW5jZSBpdCBkZXN0cm95cyBjaGVja2JveGVzIGluIEZpcmVmb3hcXG4qL1xcbkBtZWRpYSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDApIHtcXG5cXG4gICAgLnRvZ2dsZS1hbGwsXFxuICAgIC50b2RvLWxpc3QgbGkgLnRvZ2dsZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICB9XFxuXFxuICAgIC50b2RvLWxpc3QgbGkgLnRvZ2dsZSB7XFxuICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQzMHB4KSB7XFxuICAgIC5mb290ZXIge1xcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB9XFxuXFxuICAgIC5maWx0ZXJzIHtcXG4gICAgICAgIGJvdHRvbTogMTBweDtcXG4gICAgfVxcbn1cXG5cXG5ociB7XFxuICAgIG1hcmdpbjogMjBweCAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJvcmRlci10b3A6IDFweCBkYXNoZWQgI2M1YzVjNTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZjdmN2Y3O1xcbn1cXG5cXG4ubGVhcm4gYSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6ICNEQjA3MDc7XFxufVxcblxcbi5sZWFybiBhOmhvdmVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIGNvbG9yOiAjNzg3ZTdlO1xcbn1cXG5cXG4ubGVhcm4gaDMsXFxuLmxlYXJuIGg0LFxcbi5sZWFybiBoNSB7XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBsaW5lLWhlaWdodDogMS4yO1xcbiAgICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLmxlYXJuIGgzIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4ubGVhcm4gaDQge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5sZWFybiBoNSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLmxlYXJuIHVsIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwIDAgMzBweCAyNXB4O1xcbn1cXG5cXG4ubGVhcm4gbGkge1xcbiAgICBsaW5lLWhlaWdodDogMjBweDtcXG59XFxuXFxuLmxlYXJuIHAge1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbiNpc3N1ZS1jb3VudCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5xdW90ZSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luOiAyMHB4IDAgNjBweCAwO1xcbn1cXG5cXG4ucXVvdGUgcCB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLnF1b3RlIHA6YmVmb3JlIHtcXG4gICAgY29udGVudDogJ+KAnCc7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgb3BhY2l0eTogLjE1O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTIwcHg7XFxuICAgIGxlZnQ6IDNweDtcXG59XFxuXFxuLnF1b3RlIHA6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAn4oCdJztcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbiAgICBvcGFjaXR5OiAuMTU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAtNDJweDtcXG4gICAgcmlnaHQ6IDNweDtcXG59XFxuXFxuLnF1b3RlIGZvb3RlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAtNDBweDtcXG4gICAgcmlnaHQ6IDA7XFxufVxcblxcbi5xdW90ZSBmb290ZXIgaW1nIHtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4ucXVvdGUgZm9vdGVyIGEge1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4uc3BlZWNoLWJ1YmJsZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuMDQpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5zcGVlY2gtYnViYmxlOmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMDAlO1xcbiAgICByaWdodDogMzBweDtcXG4gICAgYm9yZGVyOiAxM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItdG9wLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4wNCk7XFxufVxcblxcbi5sZWFybi1iYXI+LmxlYXJuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMjcycHg7XFxuICAgIHRvcDogOHB4O1xcbiAgICBsZWZ0OiAtMzAwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNik7XFxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQ7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogODk5cHgpIHtcXG4gICAgLmxlYXJuLWJhciB7XFxuICAgICAgICB3aWR0aDogYXV0bztcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMzAwcHg7XFxuICAgIH1cXG5cXG4gICAgLmxlYXJuLWJhcj4ubGVhcm4ge1xcbiAgICAgICAgbGVmdDogOHB4O1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCIvKmdsb2JhbCBhcHAsICRvbiAqL1xuXG5yZXF1aXJlKCcuL3ZpZXcuanMnKTtcbnJlcXVpcmUoJy4vc3RvcmUuanMnKTtcbnJlcXVpcmUoJy4vbW9kZWwuanMnKTtcbnJlcXVpcmUoJy4vdGVtcGxhdGUuanMnKTtcbnJlcXVpcmUoJy4vY29udHJvbGxlci5qcycpO1xucmVxdWlyZSgnLi9oZWxwZXJzLmpzJyk7XG5yZXF1aXJlKCcuL2FwcC5qcycpO1xuLy8gcmVxdWlyZSgnLi9kaXN0L21haW4uY3NzJyk7XG5pbXBvcnQgJy4vc3R5bGUvbWFpbi5jc3MnXG5pbXBvcnQgJy4uL2Fzc2V0cy9pbWcvdG9kby5wbmcnXG5cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdC8qKlxuXHQgKiBJbml0aWFsaXNlIHVuZSBub3V2ZWxsZSBsaXN0ZSBkZSB0w6JjaGUuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIExlIG5vbSBkZSBsYSBub3V2ZWxsZSBsaXN0ZSBkZSB0w6JjaGVzLlxuXHQgKi9cblx0ZnVuY3Rpb24gVG9kbyhuYW1lKSB7XG5cdFx0dGhpcy5zdG9yYWdlID0gbmV3IGFwcC5TdG9yZShuYW1lKTtcblx0XHR0aGlzLm1vZGVsID0gbmV3IGFwcC5Nb2RlbCh0aGlzLnN0b3JhZ2UpO1xuXHRcdHRoaXMudGVtcGxhdGUgPSBuZXcgYXBwLlRlbXBsYXRlKCk7XG5cdFx0dGhpcy52aWV3ID0gbmV3IGFwcC5WaWV3KHRoaXMudGVtcGxhdGUpO1xuXHRcdHRoaXMuY29udHJvbGxlciA9IG5ldyBhcHAuQ29udHJvbGxlcih0aGlzLm1vZGVsLCB0aGlzLnZpZXcpO1xuXHR9XG5cblx0bGV0IHRvZG8gPSBuZXcgVG9kbygndG9kb3MtdmFuaWxsYWpzJyk7XG5cblx0ZnVuY3Rpb24gc2V0VmlldygpIHtcblx0XHR0b2RvLmNvbnRyb2xsZXIuc2V0Vmlldyhkb2N1bWVudC5sb2NhdGlvbi5oYXNoKTtcblx0fVxuXHQkb24od2luZG93LCAnbG9hZCcsIHNldFZpZXcpO1xuXHQkb24od2luZG93LCAnaGFzaGNoYW5nZScsIHNldFZpZXcpO1xufSkoKTsiLCIoZnVuY3Rpb24gKHdpbmRvdykge1xuXHQndXNlIHN0cmljdCc7XG5cblx0LyoqXG5cdCAqIENPTlRST0xMRVIgUGVybWV0IGwnaW50w6lyYWN0aW9uIGVudHJlIGxlIE1vZGVsIGV0IGxhIFZpZXdcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBtb2RlbCBMJ2luc3RhbmNlIGR1IE1vZGVsXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSB2aWV3IEwnaW5zdGFuY2UgZGUgbGEgVmlld1xuXHQgKi9cblx0Y2xhc3MgQ29udHJvbGxlciB7XG5cdFx0Y29uc3RydWN0b3IobW9kZWwsIHZpZXcpIHtcblx0XHRcdGxldCBzZWxmID0gdGhpcztcblx0XHRcdHNlbGYubW9kZWwgPSBtb2RlbDtcblx0XHRcdHNlbGYudmlldyA9IHZpZXc7XG5cblx0XHRcdHNlbGYudmlldy5iaW5kKCduZXdUb2RvJywgZnVuY3Rpb24gKHRpdGxlKSB7XG5cdFx0XHRcdHNlbGYuYWRkSXRlbSh0aXRsZSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0c2VsZi52aWV3LmJpbmQoJ2l0ZW1FZGl0JywgZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdFx0c2VsZi5lZGl0SXRlbShpdGVtLmlkKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRzZWxmLnZpZXcuYmluZCgnaXRlbUVkaXREb25lJywgZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdFx0c2VsZi5lZGl0SXRlbVNhdmUoaXRlbS5pZCwgaXRlbS50aXRsZSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0c2VsZi52aWV3LmJpbmQoJ2l0ZW1FZGl0Q2FuY2VsJywgZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdFx0c2VsZi5lZGl0SXRlbUNhbmNlbChpdGVtLmlkKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRzZWxmLnZpZXcuYmluZCgnaXRlbVJlbW92ZScsIGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHRcdHNlbGYucmVtb3ZlSXRlbShpdGVtLmlkKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRzZWxmLnZpZXcuYmluZCgnaXRlbVRvZ2dsZScsIGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHRcdHNlbGYudG9nZ2xlQ29tcGxldGUoaXRlbS5pZCwgaXRlbS5jb21wbGV0ZWQpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHNlbGYudmlldy5iaW5kKCdyZW1vdmVDb21wbGV0ZWQnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHNlbGYucmVtb3ZlQ29tcGxldGVkSXRlbXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRzZWxmLnZpZXcuYmluZCgndG9nZ2xlQWxsJywgZnVuY3Rpb24gKHN0YXR1cykge1xuXHRcdFx0XHRzZWxmLnRvZ2dsZUFsbChzdGF0dXMuY29tcGxldGVkKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIENoYXJnZSBldCBpbml0aWFsaXNlIGxhIFZpZXdcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gJ1BldXQgcHJlbmRyZSAzIHZhbGV1cnMgOiAnJyAvICdhY3RpdmUnIC8gJ2NvbXBsZXRlZCdcblx0XHQgKi9cblx0XHRzZXRWaWV3KGxvY2F0aW9uSGFzaCkge1xuXHRcdFx0bGV0IHJvdXRlID0gbG9jYXRpb25IYXNoLnNwbGl0KCcvJylbMV07XG5cdFx0XHRsZXQgcGFnZSA9IHJvdXRlIHx8ICcnO1xuXHRcdFx0dGhpcy5fdXBkYXRlRmlsdGVyU3RhdGUocGFnZSk7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIEFmZmljaGUgdG91dGVzIGxlcyB0w6JjaGVzIGRlIGxhIGxpc3RlIGVuIGNvdXJzXG5cdFx0ICovXG5cdFx0c2hvd0FsbCgpIHtcblx0XHRcdGxldCBzZWxmID0gdGhpcztcblx0XHRcdHNlbGYubW9kZWwucmVhZChmdW5jdGlvbiAoZGF0YSkge1xuXHRcdFx0XHRzZWxmLnZpZXcucmVuZGVyKCdzaG93RW50cmllcycsIGRhdGEpO1xuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIEFmZmljaGUgdG91dGVzIGxlcyB0w6JjaGVzIGFjdGl2ZXMgZGUgbGEgbGlzdGUgZW4gY291cnNcblx0XHQgKi9cblx0XHRzaG93QWN0aXZlKCkge1xuXHRcdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdFx0c2VsZi5tb2RlbC5yZWFkKHtcblx0XHRcdFx0Y29tcGxldGVkOiBmYWxzZVxuXHRcdFx0fSwgZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRcdFx0c2VsZi52aWV3LnJlbmRlcignc2hvd0VudHJpZXMnLCBkYXRhKTtcblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBBZmZpY2hlIHRvdXRlcyBsZXMgdMOiY2hlcyBjb21wbMOpdMOpZXMgZGUgbGEgbGlzdGUgZW4gY291cnNcblx0XHQgKi9cblx0XHRzaG93Q29tcGxldGVkKCkge1xuXHRcdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdFx0c2VsZi5tb2RlbC5yZWFkKHtcblx0XHRcdFx0Y29tcGxldGVkOiB0cnVlXG5cdFx0XHR9LCBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdFx0XHRzZWxmLnZpZXcucmVuZGVyKCdzaG93RW50cmllcycsIGRhdGEpO1xuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIEFqb3V0ZSB1bmUgbm91dmVsbGUgdMOiY2hlIGRhbnMgbGEgbGlzdGUgZW4gY291cnMgKGluc2VydGlvbiBkYW5zIGxlIERPTSBldCBkYW5zIGxlIGxvY2FsIHN0b3JhZ2UpXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlIExlIHRpdHJlIGRlIGxhIHTDomNoZSBham91dMOpZVxuXHRcdCAqL1xuXHRcdGFkZEl0ZW0odGl0bGUpIHtcblx0XHRcdGxldCBzZWxmID0gdGhpcztcblxuXHRcdFx0aWYgKHRpdGxlLnRyaW0oKSA9PT0gJycpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRzZWxmLm1vZGVsLmNyZWF0ZSh0aXRsZSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRzZWxmLnZpZXcucmVuZGVyKCdjbGVhck5ld1RvZG8nKTtcblx0XHRcdFx0c2VsZi5fZmlsdGVyKHRydWUpO1xuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIETDqWNsZW5jaGUgbGUgbW9kZSBkJ8OpZGl0aW9uIGRlcyDDqWzDqW1lbnRzLlxuXHRcdCAqIEFjdGl2ZSBsJ8OpZGl0aW9uIGQndW5lIHTDomNoZSBkZSBsYSBsaXN0ZSBlbiBjb3Vyc1xuXHRcdCAqICBAcGFyYW0ge251bWJlcn0gaWQgTCdpZCBkdSBtb2RlbCAoY29ycmVzcG9uZGFudCDDoCBsYSB0w6JjaGUgw6Agw6lkaXRlcilcblx0XHQgKi9cblx0XHRlZGl0SXRlbShpZCkge1xuXHRcdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdFx0c2VsZi5tb2RlbC5yZWFkKGlkLCBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdFx0XHRzZWxmLnZpZXcucmVuZGVyKCdlZGl0SXRlbScsIHtcblx0XHRcdFx0XHRpZDogaWQsXG5cdFx0XHRcdFx0dGl0bGU6IGRhdGFbMF0udGl0bGVcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogRW5yZWdpc3RyZSBsYSBub3V2ZWxsZSB0w6JjaGUgw6lkaXTDqWVcblx0XHQgKiAgQHBhcmFtIHtudW1iZXJ9IGlkIEwnaWQgZGUgbGEgdMOiY2hlIMOpZGl0w6llelxuXHRcdCAqICBAcGFyYW0ge3N0cmluZ30gdGl0bGUgTGUgdGl0cmUgZGUgbGEgdMOiY2hlIMOpZGl0w6llXG5cdFx0ICovXG5cdFx0ZWRpdEl0ZW1TYXZlKGlkLCB0aXRsZSkge1xuXHRcdFx0bGV0IHNlbGYgPSB0aGlzO1xuXG5cdFx0XHR3aGlsZSAodGl0bGVbMF0gPT09IFwiIFwiKSB7XG5cdFx0XHRcdHRpdGxlID0gdGl0bGUuc2xpY2UoMSk7XG5cdFx0XHR9XG5cblx0XHRcdHdoaWxlICh0aXRsZVt0aXRsZS5sZW5ndGggLSAxXSA9PT0gXCIgXCIpIHtcblx0XHRcdFx0dGl0bGUgPSB0aXRsZS5zbGljZSgwLCAtMSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aXRsZS5sZW5ndGggIT09IDApIHtcblx0XHRcdFx0c2VsZi5tb2RlbC51cGRhdGUoaWQsIHtcblx0XHRcdFx0XHR0aXRsZTogdGl0bGVcblx0XHRcdFx0fSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHNlbGYudmlldy5yZW5kZXIoJ2VkaXRJdGVtRG9uZScsIHtcblx0XHRcdFx0XHRcdGlkOiBpZCxcblx0XHRcdFx0XHRcdHRpdGxlOiB0aXRsZVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNlbGYucmVtb3ZlSXRlbShpZCk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdC8qKiBcblx0XHQgKiBBbm51bGUgbCfDqWRpdGlvbiBkZSBsYSB0w6JjaGUgZW4gY291cnMgXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IGlkTCdpZCBkZSBsYSB0w6JjaGUgw6lkaXTDqWVcblx0XHQgKi9cblx0XHRlZGl0SXRlbUNhbmNlbChpZCkge1xuXHRcdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdFx0c2VsZi5tb2RlbC5yZWFkKGlkLCBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdFx0XHRzZWxmLnZpZXcucmVuZGVyKCdlZGl0SXRlbURvbmUnLCB7XG5cdFx0XHRcdFx0aWQ6IGlkLFxuXHRcdFx0XHRcdHRpdGxlOiBkYXRhWzBdLnRpdGxlXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIFN1cHByaW1lIHVuZSB0w6JjaGUgZGUgbGEgbGlzdGUgZW4gY291cnMuXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IGlkIEwnaWQgZGUgbGEgdMOiY2hlIMOgIHN1cHByaW1lciBkYW5zIGxlIERPTSBldCBkYW5zIGxlIGxvY2FsU3RvcmFnZVxuXHRcdCAqL1xuXHRcdHJlbW92ZUl0ZW0oaWQpIHtcblx0XHRcdGxldCBzZWxmID0gdGhpcztcblx0XHRcdGxldCBpdGVtcztcblx0XHRcdHNlbGYubW9kZWwucmVhZChmdW5jdGlvbiAoZGF0YSkge1xuXHRcdFx0XHRpdGVtcyA9IGRhdGE7XG5cdFx0XHR9KTtcblxuXHRcdFx0c2VsZi5tb2RlbC5yZW1vdmUoaWQsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0c2VsZi52aWV3LnJlbmRlcigncmVtb3ZlSXRlbScsIGlkKTtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJFbGVtZW50IHdpdGggSUQ6IFwiICsgaWQgKyBcIiBoYXMgYmVlbiByZW1vdmVkLlwiKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRzZWxmLl9maWx0ZXIoKTtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogU3VwcHJpbWUgdG91dGVzIGxlcyB0w6JjaGVzIHRlcm1pbsOpZXMgZGUgbGEgbGlzdGUgZW4gY291cnNcblx0XHQgKi9cblx0XHRyZW1vdmVDb21wbGV0ZWRJdGVtcygpIHtcblx0XHRcdGxldCBzZWxmID0gdGhpcztcblx0XHRcdHNlbGYubW9kZWwucmVhZCh7XG5cdFx0XHRcdGNvbXBsZXRlZDogdHJ1ZVxuXHRcdFx0fSwgZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRcdFx0ZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHRcdFx0c2VsZi5yZW1vdmVJdGVtKGl0ZW0uaWQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXG5cdFx0XHRzZWxmLl9maWx0ZXIoKTtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogQWN0dWFsaXNlIGwnYWZmaWNoYWdlIGRlIGxhIHTDomNoZSBlbiBmb25jdGlvbiBkZSBzb24gc3RhdHV0ICh0ZXJtaW7DqSBvdSBub24pXG5cdFx0ICogRG9ubmV6LWx1aSB1biBpZGVudGlmaWFudCBkJ3VuIG1vZMOobGUgZXQgdW5lIGNhc2Ugw6AgY29jaGVyIGV0IGlsIG1ldHRyYSDDoCBqb3VyIGwnYXJ0aWNsZVxuXHRcdCAqIGRhbnMgbGUgc3RvY2thZ2UgZW4gZm9uY3Rpb24gZGUgbCfDqXRhdCBkZSBsYSBjYXNlIMOgIGNvY2hlci5cblx0XHQgKiBAcGFyYW0ge251bWJlcn0gaWQgTCdpZCBkZSBsYSB0w6JjaGUgKHRvdXRlcyBsZXMgdMOiY2hlcyBzb250IHBhcmNvdXJ1ZXMpXG5cdFx0ICogQHBhcmFtIHtvYmplY3R9IGNoZWNrYm94IFbDqXJpZmllIHNpIGxlIGNoYW1wIGNoZWNrZWQgZXN0IGNvY2jDqSBvdSBub25cblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW58dW5kZWZpbmVkfSBzaWxlbnQgRW1ww6pjaGUgbGUgcmVmaWx0cmFnZSBkZXMgw6lsw6ltZW50cyBkZSBsYSBsaXN0ZVxuXHRcdCAqL1xuXHRcdHRvZ2dsZUNvbXBsZXRlKGlkLCBjb21wbGV0ZWQsIHNpbGVudCkge1xuXHRcdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdFx0c2VsZi5tb2RlbC51cGRhdGUoaWQsIHtcblx0XHRcdFx0Y29tcGxldGVkOiBjb21wbGV0ZWRcblx0XHRcdH0sIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0c2VsZi52aWV3LnJlbmRlcignZWxlbWVudENvbXBsZXRlJywge1xuXHRcdFx0XHRcdGlkOiBpZCxcblx0XHRcdFx0XHRjb21wbGV0ZWQ6IGNvbXBsZXRlZFxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAoIXNpbGVudCkge1xuXHRcdFx0XHRzZWxmLl9maWx0ZXIoKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogUGVybWV0IGQnYWN0aXZlciBvdSBkZSBkw6lzYWN0aXZlciBsZXMgY2FzZXMgY29jaMOpZXNcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gY29tcGxldGVkIExlcyB0w6JjaGVzIHRlcm1pbsOpZXNcblx0XHQgKi9cblx0XHR0b2dnbGVBbGwoY29tcGxldGVkKSB7XG5cdFx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0XHRzZWxmLm1vZGVsLnJlYWQoe1xuXHRcdFx0XHRjb21wbGV0ZWQ6ICFjb21wbGV0ZWRcblx0XHRcdH0sIGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0XHRcdGRhdGEuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0XHRcdHNlbGYudG9nZ2xlQ29tcGxldGUoaXRlbS5pZCwgY29tcGxldGVkLCB0cnVlKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0c2VsZi5fZmlsdGVyKCk7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIE1ldCDDoCBqb3VyIGxlIGNvbXB0ZXVyIGRlIHTDomNoZSBlbiBiYXMgw6AgZ2F1Y2hlIGRlIGwnYXBwbGljYXRpb25cblx0XHQgKi9cblx0XHRfdXBkYXRlQ291bnQoKSB7XG5cblx0XHRcdGxldCBzZWxmID0gdGhpcztcblx0XHRcdHNlbGYubW9kZWwuZ2V0Q291bnQoZnVuY3Rpb24gKHRvZG9zKSB7XG5cdFx0XHRcdHNlbGYudmlldy5yZW5kZXIoJ3VwZGF0ZUVsZW1lbnRDb3VudCcsIHRvZG9zLmFjdGl2ZSk7XG5cdFx0XHRcdHNlbGYudmlldy5yZW5kZXIoJ2NsZWFyQ29tcGxldGVkQnV0dG9uJywge1xuXHRcdFx0XHRcdGNvbXBsZXRlZDogdG9kb3MuY29tcGxldGVkLFxuXHRcdFx0XHRcdHZpc2libGU6IHRvZG9zLmNvbXBsZXRlZCA+IDBcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHNlbGYudmlldy5yZW5kZXIoJ3RvZ2dsZUFsbCcsIHtcblx0XHRcdFx0XHRjaGVja2VkOiB0b2Rvcy5jb21wbGV0ZWQgPT09IHRvZG9zLnRvdGFsXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRzZWxmLnZpZXcucmVuZGVyKCdjb250ZW50QmxvY2tWaXNpYmlsaXR5Jywge1xuXHRcdFx0XHRcdHZpc2libGU6IHRvZG9zLnRvdGFsID4gMFxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBSZWZpbHRyZSBsZXMgdMOiY2hlcyBlbiBmb25jdGlvbiBkZSBsZXVyIHN0YXR1dCBhY3RpZiAoI2FjdGl2ZSlcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW58dW5kZWZpbmVkfSBmb3JjZSAgUmVmaWx0cmUgbGVzIHTDomNoZXMuXG5cdFx0ICovXG5cdFx0X2ZpbHRlcihmb3JjZSkge1xuXHRcdFx0bGV0IGFjdGl2ZVJvdXRlID0gdGhpcy5fYWN0aXZlUm91dGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0aGlzLl9hY3RpdmVSb3V0ZS5zdWJzdHIoMSk7XG5cblx0XHRcdC8vIE1ldHRleiDDoCBqb3VyIGxlcyDDqWzDqW1lbnRzIGRlIGxhIHBhZ2UsIHF1aSBjaGFuZ2VudCDDoCBjaGFxdWUgdMOiY2hlIHRlcm1pbsOpZVxuXHRcdFx0dGhpcy5fdXBkYXRlQ291bnQoKTtcblxuXHRcdFx0Ly8gU2kgbGUgZGVybmllciBpdGluw6lyYWlyZSBhY3RpZiBuJ2VzdCBwYXMgXCJUb3VzXCIgb3Ugc2kgbm91cyBjaGFuZ2VvbnMgZCdpdGluw6lyYWlyZSwgbm91c1xuXHRcdFx0Ly8gcmVjcsOpZXogbGVzIMOpbMOpbWVudHMgZGUgbCfDqWzDqW1lbnQgdG9kbywgZW4gYXBwZWxhbnQ6XG5cdFx0XHQvLyAgIHRoaXMuc2hvd1tBbGx8QWN0aXZlfENvbXBsZXRlZF0oKTtcblx0XHRcdGlmIChmb3JjZSB8fCB0aGlzLl9sYXN0QWN0aXZlUm91dGUgIT09ICdBbGwnIHx8IHRoaXMuX2xhc3RBY3RpdmVSb3V0ZSAhPT0gYWN0aXZlUm91dGUpIHtcblx0XHRcdFx0dGhpc1snc2hvdycgKyBhY3RpdmVSb3V0ZV0oKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fbGFzdEFjdGl2ZVJvdXRlID0gYWN0aXZlUm91dGU7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIE1ldCDDoCBqb3VyIGwndXJsIHBvdXIgZmlsdHJlciBsZXMgdMOiY2hlcyAoYWpvdXRlIMOgIGwndXJsIDogL2FjdGl2ZSBvdSAvY29tcGxldGVkKVxuXHRcdCAqL1xuXHRcdF91cGRhdGVGaWx0ZXJTdGF0ZShjdXJyZW50UGFnZSkgeyAvLyBcblxuXHRcdFx0Ly8gU3RvY2tlciB1bmUgcsOpZsOpcmVuY2Ugw6AgbCdpdGluw6lyYWlyZSBhY3RpZiwgbm91cyBwZXJtZXR0YW50IGRlIHJlLWZpbHRyZXIgdG9kb1xuXHRcdFx0Ly8gw6lsw6ltZW50cyBjYXIgaWxzIHNvbnQgbWFycXXDqXMgY29tbWUgY29tcGxldHMgb3UgaW5jb21wbGV0cy5cblx0XHRcdHRoaXMuX2FjdGl2ZVJvdXRlID0gY3VycmVudFBhZ2U7XG5cblx0XHRcdGlmIChjdXJyZW50UGFnZSA9PT0gJycpIHtcblx0XHRcdFx0dGhpcy5fYWN0aXZlUm91dGUgPSAnQWxsJztcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fZmlsdGVyKCk7XG5cblx0XHRcdHRoaXMudmlldy5yZW5kZXIoJ3NldEZpbHRlcicsIGN1cnJlbnRQYWdlKTtcblx0XHR9O1xuXHR9O1xuXG5cdC8vIEV4cG9ydGVyIHZlcnMgbGEgd2luZG93XG5cdHdpbmRvdy5hcHAgPSB3aW5kb3cuYXBwIHx8IHt9O1xuXHR3aW5kb3cuYXBwLkNvbnRyb2xsZXIgPSBDb250cm9sbGVyO1xufSkod2luZG93KTsiLCIvKipcbiAqIE5vZGVMaXN0IGdsb2JhbGVcbiAqL1xuLyoqIEBnbG9iYWwgKi9cbihmdW5jdGlvbiAod2luZG93KSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHQvKipcblx0ICogUsOpY3Vww6hyZSB1biDDqWzDqW1lbnQgYXZlYyBxdWVyeVNlbGVjdG9yIChxcykgZXQgbGUgc8OpbGVjdGV1ciBDU1Ncblx0ICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yIExlIHPDqWxlY3RldXIgY3NzIGRlIGwnw6lsw6ltZW50XG5cdCAqICBAcGFyYW0ge3N0cmluZ30gc2NvcGUgTGUgc2NvcGUgZGUgbCfDqWzDqW1lbnQgKHNpIHBhcyByZW5zZWlnbsOpLCBkb2N1bWVudCBwYXIgZMOpZmF1dClcblx0ICovXG5cdHdpbmRvdy5xcyA9IGZ1bmN0aW9uIChzZWxlY3Rvciwgc2NvcGUpIHtcblx0XHRyZXR1cm4gKHNjb3BlIHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcblx0fTtcblxuXHQvKipcblx0ICogUsOpY3Vww6hyZSBwbHVzaWV1cnMgw6lsw6ltZW50cyBhdmVjIHF1ZXJ5U2VsZWN0b3JBbGwgKHFzYSkgZXQgbGUgc8OpbGVjdGV1ciBDU1Ncblx0ICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yIExlIHPDqWxlY3RldXIgY3NzIGRlIGwnw6lsw6ltZW50XG5cdCAqICBAcGFyYW0ge3N0cmluZ30gc2NvcGUgTGUgc2NvcGUgZGUgbCfDqWzDqW1lbnQgKHNpIHBhcyByZW5zZWlnbsOpLCBkb2N1bWVudCBwYXIgZMOpZmF1dClcblx0ICovXG5cdHdpbmRvdy5xc2EgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIHNjb3BlKSB7XG5cdFx0cmV0dXJuIChzY29wZSB8fCBkb2N1bWVudCkucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG5cdH07XG5cblx0LyoqXG5cdCAqIEFqb3V0ZSB1biDDqWNvdXRldXIgZCfDqXbDqG5lbWVudCDDoCBsJ8OpbMOpbWVudCBjaWJsw6lcblx0ICogQHBhcmFtIHtlbGVtZW50fSB0YXJnZXQgTCfDqWzDqW1lbnQgY2libMOpXG5cdCAqICBAcGFyYW0ge3N0cmluZ30gdHlwZSBMZSB0eXBlIGRlIGwnw6l2w6huZW1lbnQgKGNsaWNrLCBjaGFuZ2UuLi4pXG5cdCAqICBAcGFyYW0ge3N0cmluZ30gY2FsbGJhY2sgTGEgcsOpcG9uc2UgZW4gY2FzIGQnw6l2w6huZW1lbnRcblx0ICogIEBwYXJhbSB7Qm9vbGVhbn0gdXNlQ2FwdHVyZSBpbmRpcXVlIHNpIGwnw6l2w6huZW1lbnQgZXN0IGVudm95w6kgYXUgbGlzdGVuZXIgZW5yZWdpc3Ryw6kgYXZhbnQgZCfDqnRyZSBkaXN0cmlidcOpIMOgIHRvdXQgRXZlbnRUYXJnZXQgKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2ZyL2RvY3MvV2ViL0FQSS9FdmVudFRhcmdldC9hZGRFdmVudExpc3RlbmVyKVxuXHQgKi9cblx0d2luZG93LiRvbiA9IGZ1bmN0aW9uICh0YXJnZXQsIHR5cGUsIGNhbGxiYWNrLCB1c2VDYXB0dXJlKSB7XG5cdFx0dGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2ssICEhdXNlQ2FwdHVyZSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEFqb3V0ZSB1biDDqWNvdXRldXIgZCfDqXbDqG5lbWVudCDDoCB0b3VzIGxlcyDDqWzDqW1lbnRzIHF1aSBjb3JyZXNwb25kZW50IGF1IHPDqWxlY3RldXIgcGFzc8OpIGRhbnMgbGEgZm9uY3Rpb24uXG5cdCAqIEBwYXJhbSB7ZWxlbWVudH0gdGFyZ2V0IEwnw6lsw6ltZW50IGNpYmzDqVxuXHQgKiAgQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yIExlIHPDqWxlY3RldXIgY3NzIGRlIGwnw6lsw6ltZW50IGNpYmzDqVxuXHQgKiAgQHBhcmFtIHtzdHJpbmd9IHNlbHR5cGVlY3RvciBMZSB0eXBlIGRlIGwnZXZlbnRcblx0ICogIEBwYXJhbSB7c3RyaW5nfSBoYW5kbGVyIENhbGxiYWNrIGV4w6ljdXTDqVxuXHQgKi9cblx0d2luZG93LiRkZWxlZ2F0ZSA9IGZ1bmN0aW9uICh0YXJnZXQsIHNlbGVjdG9yLCB0eXBlLCBoYW5kbGVyKSB7XG5cdFx0ZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChldmVudCkge1xuXHRcdFx0bGV0IHRhcmdldEVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG5cdFx0XHRsZXQgcG90ZW50aWFsRWxlbWVudHMgPSB3aW5kb3cucXNhKHNlbGVjdG9yLCB0YXJnZXQpO1xuXHRcdFx0bGV0IGhhc01hdGNoID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChwb3RlbnRpYWxFbGVtZW50cywgdGFyZ2V0RWxlbWVudCkgPj0gMDtcblxuXHRcdFx0aWYgKGhhc01hdGNoKSB7XG5cdFx0XHRcdGhhbmRsZXIuY2FsbCh0YXJnZXRFbGVtZW50LCBldmVudCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0V2ZW50cy9ibHVyXG5cdFx0bGV0IHVzZUNhcHR1cmUgPSB0eXBlID09PSAnYmx1cicgfHwgdHlwZSA9PT0gJ2ZvY3VzJztcblxuXHRcdHdpbmRvdy4kb24odGFyZ2V0LCB0eXBlLCBkaXNwYXRjaEV2ZW50LCB1c2VDYXB0dXJlKTtcblx0fTtcblxuXHQvKipcblx0ICogVHJvdXZlIGwnw6lsw6ltZW50IHBhcmVudCBxdWkgcG9ydGUgbGUgdGFnIHN1aXZhbnQgOiAkcGFyZW50KHFzKCdhJyksICdkaXYnKTtcblx0ICogQHBhcmFtIHtlbGVtZW50fSBlbGVtZW50IEwnw6lsw6ltZW50IGNpYmzDqVxuXHQgKiAgQHBhcmFtIHtzdHJpbmd9IHRhZ05hbWUgTGUgc8OpbGVjdGV1ciBjc3MgZGUgbCfDqWzDqW1lbnQgY2libMOpXG5cdCAqL1xuXHR3aW5kb3cuJHBhcmVudCA9IGZ1bmN0aW9uIChlbGVtZW50LCB0YWdOYW1lKSB7XG5cdFx0aWYgKCFlbGVtZW50LnBhcmVudE5vZGUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKGVsZW1lbnQucGFyZW50Tm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IHRhZ05hbWUudG9Mb3dlckNhc2UoKSkge1xuXHRcdFx0cmV0dXJuIGVsZW1lbnQucGFyZW50Tm9kZTtcblx0XHR9XG5cdFx0cmV0dXJuIHdpbmRvdy4kcGFyZW50KGVsZW1lbnQucGFyZW50Tm9kZSwgdGFnTmFtZSk7XG5cdH07XG5cdC8vIEF1dG9yaXNlciBsYSBib3VjbGUgc3VyIGxlcyBuxZN1ZHMgZW4gY2hhw65uYW50OlxuXHQvLyBxc2EoJy5mb28nKS5mb3JFYWNoKGZ1bmN0aW9uICgpIHt9KVxuXHROb2RlTGlzdC5wcm90b3R5cGUuZm9yRWFjaCA9IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoO1xufSkod2luZG93KTsiLCIoZnVuY3Rpb24gKHdpbmRvdykge1xuXHQndXNlIHN0cmljdCc7XG5cblx0LyoqXG5cdCAqIE1PREVMIENyw6lhdGlvbiBkJ3VuZSBub3V2ZWxsZSBpbnN0YW5jZSBkZSBNb2RlbCBldCBpbnTDqXJhY3Rpb24gYXZlYyBsYSBjbGFzc2UgU3RvcmVcblx0ICogQ3LDqWUgdW5lIG5vdXZlbGxlIGluc3RhbmNlIGRlIG1vZMOobGUgZXQgY29ubmVjdGUgbGUgc3RvY2thZ2UuXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge29iamVjdH0gc3RvcmFnZSBJZGVudGlmaWUgbGEgY2xhc3NlIFN0b3JlIGPDtHTDqSBjbGllbnQuXG5cdCAqL1xuXHRjbGFzcyBNb2RlbCB7XG5cdFx0Y29uc3RydWN0b3Ioc3RvcmFnZSkge1xuXHRcdFx0dGhpcy5zdG9yYWdlID0gc3RvcmFnZTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBDcsOpZXIgdW4gbm91dmVhdSBtb2RlbCBkZSB0b2RvIHBvdXIgbGEgdMOiY2hlIGFqb3V0w6llXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IFt0aXRsZV0gTGUgdGl0cmUgZGUgbGEgdMOiY2hlXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbn0gW2NhbGxiYWNrXSBMYSBmb25jdGlvbiBhcHBlbMOpIGFwcsOocyBxdWUgbGUgbW9kZWwgc29pdCBjcsOpZS5cblx0XHQgKi9cblx0XHRjcmVhdGUodGl0bGUsIGNhbGxiYWNrKSB7XG5cdFx0XHR0aXRsZSA9IHRpdGxlIHx8ICcnO1xuXHRcdFx0Y2FsbGJhY2sgPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7fTtcblxuXHRcdFx0bGV0IG5ld0l0ZW0gPSB7XG5cdFx0XHRcdHRpdGxlOiB0aXRsZS50cmltKCksXG5cdFx0XHRcdGNvbXBsZXRlZDogZmFsc2Vcblx0XHRcdH07XG5cblx0XHRcdHRoaXMuc3RvcmFnZS5zYXZlKG5ld0l0ZW0sIGNhbGxiYWNrKTtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogUmVjaGVyY2hlIGV0IHJlbnZvaWUgdW4gbW9kw6hsZSBzdG9ja8OpLiBTaSBhdWN1bmUgcmVxdcOqdGUgbidlc3QgZG9ubsOpZSwgaWwgc2VyYSBzaW1wbGVtZW50XG5cdFx0ICogdG91dCByZXRvdXJuZXIuIFNpIHZvdXMgcGFzc2V6IHVuZSBjaGHDrm5lIG91IHVuIG5vbWJyZSwgY2VsYSByZXNzZW1ibGVyYSDDoFxuXHRcdCAqIGwnSUQgZHUgbW9kw6hsZSDDoCB0cm91dmVyLiBFbmZpbiwgdm91cyBwb3V2ZXogbHVpIHBhc3NlciB1biBvYmpldCBwb3VyIGNvcnJlc3BvbmRyZVxuXHRcdCAqIGNvbnRyZS5yZW1vdmVcblx0XHQgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ8b2JqZWN0fSBbcXVlcnldIExhIHJlcXXDqnRlIHBvdXIgZmlsdHJlciBsZXMgbW9kw6hsZXNcblx0XHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbY2FsbGJhY2tdIFVuZSBmb25jdGlvbiBkZSByYXBwZWwgw6AgdXRpbGlzZXIgbG9yc3F1J3VuIG1vZGVsIGVzdCB0cm91dsOpXG5cdFx0ICogXG5cdFx0ICogUmVjaGVyY2hlIGV0IHJldG91cm5lIHVuIG1vZMOobGUgc3RvY2vDqS4gU2kgYXVjdW5lIHJlcXXDqnRlIG4nZXN0IGRvbm7DqWUsIHRvdXQgc2VyYSBzaW1wbGVtZW50IHJldG91cm7DqS4gU2kgdm91cyB0cmFuc21ldHRleiB1bmUgY2hhw65uZSBvdSB1biBub21icmUsIGlsIGxlIHJlY2hlcmNoZXJhIGVuIHRhbnQgcXUnSUQgZHUgbW9kw6hsZSDDoCByZWNoZXJjaGVyLiBFbmZpbiwgdm91cyBwb3V2ZXogbHVpIHRyYW5zbWV0dHJlIHVuIG9iamV0IMOgIGNvbXBhcmVyLiBSZWNoZXJjaGUgZXQgcmV0b3VybmUgZGFucyBsZSBsb2NhbFN0b3JhZ2UgdW4gbW9kZWwgc3RvY2vDqS4gU2kgYXVjdW5lIHJlcXXDqnRlIG4nZXN0IGVudm95w6llLCB0b3VzIGxlcyBtb2RlbHMgc2Vyb250IHJlbnZvecOpcy4gU2kgbGEgcmVxdcOqdGUgZXN0IHVuZSBjaGFpbmUgZGUgY2FyYWN0w6hyZSBvdSB1biBub21icmUsIGxhIG3DqXRob2RlIHJlY2hlcmNoZXJhIHVuIGlkIGRlIG1vZGVsIMOgIHJldG91cm5lciBJbCBlc3QgYXVzc2kgcG9zc2libGUgZGUgcGFzc2VyIHVuIG9iamV0IMOgIGNvbXBhcmVyIGRhbnMgbGEgcmVxdcOqdGUuXG5cdFx0ICogQGV4YW1wbGUgXG5cdFx0ICogbW9kZWwucmVhZCgxLCBmdW5jKTsgLy8gVmEgY2hlcmNoZXIgZXQgdHJvdXZlciBsZSBtb2TDqGxlIGF2ZWMgbCdpZCAxXG5cdFx0ICogbW9kZWwucmVhZCgnMScpOyAvLyBGZXJhIGxhIG3Dqm1lIGNob3NlXG5cdFx0ICogIENpLWRlc3NvdXMsIHVuIGV4ZW1wbGUgYXZlYyBmb28gw6lnYWwgw6AgYmFyIGV0IGhlbGxvIMOpZ2FsIMOgIHdvcmxkXG5cdFx0ICogbW9kZWwucmVhZCh7IGZvbzogJ2JhcicsIGhlbGxvOiAnd29ybGQnIH0pO3JlbW92ZVxuXHRcdCAqL1xuXHRcdHJlYWQocXVlcnksIGNhbGxiYWNrKSB7XG5cdFx0XHRsZXQgcXVlcnlUeXBlID0gdHlwZW9mIHF1ZXJ5O1xuXHRcdFx0Y2FsbGJhY2sgPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7fTtcblxuXHRcdFx0aWYgKHF1ZXJ5VHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRjYWxsYmFjayA9IHF1ZXJ5O1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5zdG9yYWdlLmZpbmRBbGwoY2FsbGJhY2spO1xuXHRcdFx0fSBlbHNlIGlmIChxdWVyeVR5cGUgPT09ICdzdHJpbmcnIHx8IHF1ZXJ5VHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0cXVlcnkgPSBwYXJzZUludChxdWVyeSwgMTApO1xuXHRcdFx0XHR0aGlzLnN0b3JhZ2UuZmluZCh7XG5cdFx0XHRcdFx0aWQ6IHF1ZXJ5XG5cdFx0XHRcdH0sIGNhbGxiYWNrKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc3RvcmFnZS5maW5kKHF1ZXJ5LCBjYWxsYmFjayk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIE1ldCDDoCBqb3VyIHVuIG1vZMOobGUgZW4gbHVpIGF0dHJpYnVhbnQgdW4gSUQsIGRlcyBkb25uw6llcyDDoCBtZXR0cmUgw6Agam91ciBldCB1bmUgZm9uY3Rpb24gZGUgcmFwcGVsIGFwcGVsw6llIHVuZSBmb2lzIGxhIG1pc2Ugw6Agam91ciB0ZXJtaW7DqWUuXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IGlkIEwnaWQgZHUgbW9kZWwgw6AgbWV0dHJlIMOgIGpvdXJcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gZGF0YSBMZXMgZG9ubsOpZXMgw6AgbWV0dHJlIMOgIGpvdXIgZXQgbGV1cnMgbm91dmVsbGVzIHZhbGV1cnNcblx0XHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayBMYSBmb25jdGlvbiBkZSByYXBwZWwgdXRpbGlzw6llIGFwcsOocyBsYSBtaXNlIMOgIGpvdXJcblx0XHQgKi9cblx0XHR1cGRhdGUoaWQsIGRhdGEsIGNhbGxiYWNrKSB7XG5cdFx0XHR0aGlzLnN0b3JhZ2Uuc2F2ZShkYXRhLCBjYWxsYmFjaywgaWQpO1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBTdXBwcmltZSB1biDDqWzDqW1lbnQgZHUgc3RvY2thZ2Vcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gaWQgTCdJRCBkdSBtb2TDqGxlIMOgIHN1cHByaW1lclxuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIExhIGZvbmN0aW9uIGRlIHJhcHBlbCB1dGlsaXPDqWUgYXByw6hzIGxhIHN1cHByZXNzaW9uXG5cdFx0ICovXG5cdFx0cmVtb3ZlKGlkLCBjYWxsYmFjaykge1xuXHRcdFx0dGhpcy5zdG9yYWdlLnJlbW92ZShpZCwgY2FsbGJhY2spO1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBBVkVSVElTU0VNRU5UOiBBdHRlbnRpb24sIGNldHRlIG3DqXRob2RlIHN1cHByaW1lIHRvdXMgbGVzIMOpbMOpbWVudHMgZHUgc3RvY2thZ2Vcblx0XHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayBMYSBmb25jdGlvbiBkZSByYXBwZWwgdXRpbGlzw6llIGFwcsOocyBsYSBzdXBwcmVzc2lvblxuXHRcdCAqL1xuXHRcdHJlbW92ZUFsbChjYWxsYmFjaykge1xuXHRcdFx0dGhpcy5zdG9yYWdlLmRyb3AoY2FsbGJhY2spO1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBSZXRvdXJuZSBsZSBub21icmUgZGUgdG9kb3Ncblx0XHQgKi9cblx0XHRnZXRDb3VudChjYWxsYmFjaykge1xuXHRcdFx0bGV0IHRvZG9zID0ge1xuXHRcdFx0XHRhY3RpdmU6IDAsXG5cdFx0XHRcdGNvbXBsZXRlZDogMCxcblx0XHRcdFx0dG90YWw6IDBcblx0XHRcdH07XG5cblx0XHRcdHRoaXMuc3RvcmFnZS5maW5kQWxsKGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0XHRcdGRhdGEuZm9yRWFjaChmdW5jdGlvbiAodG9kbykge1xuXHRcdFx0XHRcdGlmICh0b2RvLmNvbXBsZXRlZCkge1xuXHRcdFx0XHRcdFx0dG9kb3MuY29tcGxldGVkKys7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRvZG9zLmFjdGl2ZSsrO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRvZG9zLnRvdGFsKys7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRjYWxsYmFjayh0b2Rvcyk7XG5cdFx0XHR9KTtcblx0XHR9O1xuXHR9O1xuXHQvLyBFeHBvcnRlciB2ZXJzIHdpbmRvd1xuXHR3aW5kb3cuYXBwID0gd2luZG93LmFwcCB8fCB7fTtcblx0d2luZG93LmFwcC5Nb2RlbCA9IE1vZGVsO1xufSkod2luZG93KTsiLCIvKmpzaGludCBlcWVxZXE6ZmFsc2UgKi9cbihmdW5jdGlvbiAod2luZG93KSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHQvKipcblx0ICogU1RPUkUgQ3LDqWUgdW4gbm91dmVsIG9iamV0IFN0b3JlIGPDtHTDqSBjbGllbnQgZXQgY3LDqWVyYSB1biBlc3BhY2UgdmlkZSBzaSBhdWN1biBvYmpldCBleGlzdGUgZMOpamEuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIExlIG5vbSBkZSBsYSBiYXNlIGRlIGRvbm7DqWUgw6AgdXRpbGlzZXJcblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgTGEgZm9uY3Rpb24gZGUgcmFwcGVsIChzZXVsZW1lbnQgcGFyY2UgcXUnb24gZXN0IGVuIGxvY2FsU3RvcmFnZSkgdXRpbGlzw6kgYXByw6hzIGwnaW5pdGlhbGlzYXRpb24gZHUgU3RvcmUuIERhbnMgbGUgY2FzIGQndW5lIHZyYWkgQkRELCBub3VzIGVmZmVjdHVyaW9ucyBkZXMgYXBwZWxzIEFKQVguXG5cdCAqL1xuXHRjbGFzcyBTdG9yZSB7XG5cdFx0Y29uc3RydWN0b3IobmFtZSwgY2FsbGJhY2spIHtcblx0XHRcdGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG5cblx0XHRcdHRoaXMuX2RiTmFtZSA9IG5hbWU7XG5cblx0XHRcdGlmICghbG9jYWxTdG9yYWdlW25hbWVdKSB7XG5cdFx0XHRcdGxldCBkYXRhID0ge1xuXHRcdFx0XHRcdHRvZG9zOiBbXVxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdGxvY2FsU3RvcmFnZVtuYW1lXSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuXHRcdFx0fVxuXG5cdFx0XHRjYWxsYmFjay5jYWxsKHRoaXMsIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlW25hbWVdKSk7XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogVHJvdXZlIHVuIMOpbMOpbWVudCBlbiBmb25jdGlvbiBkZSBsYSByZXF1w6p0ZSAob2JqZXQgSlMpXG5cdFx0ICogQHBhcmFtIHtvYmplY3R9IHF1ZXJ5IExhIHJlcXXDqnRlIMOgIGNvbXBhcmVyIChwYXIgZXhlbXBsZSB7Zm9vOiAnYmFyJ30pXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgTGEgZm9uY3Rpb24gZGUgcmFwcGVsIMOgIHV0aWxpc2VyIGxvcnNxdWUgbGUgdHJhaXRlbWVudCBkZSBsYSByZXF1w6p0ZSBlc3QgdGVybWluw6lcblx0XHQgKiBAZXhhbXBsZVxuXHRcdCAqIGRiLmZpbmQoe2ZvbzogJ2JhcicsIGhlbGxvOiAnd29ybGQnfSwgZnVuY3Rpb24gKGRhdGEpIHtcblx0XHQgKlx0IC8vIGRhdGEgd2lsbCByZXR1cm4gYW55IGl0ZW1zIHRoYXQgaGF2ZSBmb286IGJhciBhbmRcblx0XHQgKlx0IC8vIGhlbGxvOiB3b3JsZCBpbiB0aGVpciBwcm9wZXJ0aWVzXG5cdFx0ICogfSk7XG5cdFx0ICovXG5cdFx0ZmluZChxdWVyeSwgY2FsbGJhY2spIHtcblx0XHRcdC8vIGlmICghY2FsbGJhY2spIHtcblx0XHRcdC8vIFx0cmV0dXJuO1xuXHRcdFx0Ly8gfVxuXG5cdFx0XHRsZXQgdG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVt0aGlzLl9kYk5hbWVdKS50b2RvcztcblxuXHRcdFx0Y2FsbGJhY2suY2FsbCh0aGlzLCB0b2Rvcy5maWx0ZXIoZnVuY3Rpb24gKHRvZG8pIHtcblx0XHRcdFx0Zm9yIChsZXQgcSBpbiBxdWVyeSkge1xuXHRcdFx0XHRcdGlmIChxdWVyeVtxXSAhPT0gdG9kb1txXSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH0pKTtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogVHJvdXZlIHRvdXMgbGVzIMOpbMOpbWVudHMgcHLDqXNlbnQgZGFucyBsZSBzdG9ja2FnZVxuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIExhIGZvbmN0aW9uIGRlIHJhcHBlbCB1dGlsaXPDqWUgbG9yc3F1ZSB0b3VzIGxlcyDDqWzDqW1lbnRzIG9udCDDqXTDqSB0cm91dsOpc1xuXHRcdCAqL1xuXHRcdGZpbmRBbGwoY2FsbGJhY2spIHtcblx0XHRcdGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG5cdFx0XHRjYWxsYmFjay5jYWxsKHRoaXMsIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlW3RoaXMuX2RiTmFtZV0pLnRvZG9zKTtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogU2F1dmVnYXJkZSBsZXMgZG9ubsOpZXMgZGFucyBsYSBCREQuIFNpIGF1Y3VuIMOpbMOpbWVudCBuJ2V4aXN0ZSwgdW4gbm91dmVhdSDDqWzDqW1lbnQgc2VyYSBjcsOpw6ksIHNpbm9uIHVuZSBtaXNlIMOgIGpvdXIgZGVzIHByb3ByacOpdMOpcyBkZSBsJyDDqWzDqW1lbnQgZXhpc3RhbnQgc2VyYSByw6lhbGlzw6lcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gdXBkYXRlRGF0YSBMJ29iamV0IGRhdGEgw6Agc2F1dmVnYXJkZXIgZGFucyBsYSBCRERcblx0XHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayBMYSBmb25jdGlvbiBkZSByYXBwZWwgw6AgdXRpbGlzZXIgYXByw6hzIGxhIHNhdXZlZ2FyZGVcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gaWQgTCdpZCBkZSBsJ8OpbMOpbWVudCDDoCBzYXV2ZWdhcmRlciAoZmFjdWx0YXRpZilcblx0XHQgKi9cblx0XHRzYXZlKHVwZGF0ZURhdGEsIGNhbGxiYWNrLCBpZCkge1xuXHRcdFx0bGV0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVt0aGlzLl9kYk5hbWVdKTtcblx0XHRcdGxldCB0b2RvcyA9IGRhdGEudG9kb3M7XG5cdFx0XHRjYWxsYmFjayA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuXHRcdFx0Ly8gR2VuZXJlciB1biBJRFxuXHRcdFx0bGV0IG5ld0lkID0gXCJcIjtcblx0XHRcdGxldCBjaGFyc2V0ID0gXCIwMTIzNDU2Nzg5XCI7XG5cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG5cdFx0XHRcdG5ld0lkICs9IGNoYXJzZXQuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYXJzZXQubGVuZ3RoKSk7XG5cdFx0XHR9XG5cdFx0XHQvLyBTaSB1biBJRCBhIMOpdMOpIGRvbm7DqSwgcmVjaGVyY2hleiBsJ8OpbMOpbWVudCBldCBtZXR0ZXogw6Agam91ciBjaGFxdWUgcHJvcHJpw6l0w6lcblx0XHRcdGlmIChpZCkge1xuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKHRvZG9zW2ldLmlkID09PSBpZCkge1xuXHRcdFx0XHRcdFx0Zm9yIChsZXQga2V5IGluIHVwZGF0ZURhdGEpIHtcblx0XHRcdFx0XHRcdFx0dG9kb3NbaV1ba2V5XSA9IHVwZGF0ZURhdGFba2V5XTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRsb2NhbFN0b3JhZ2VbdGhpcy5fZGJOYW1lXSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuXHRcdFx0XHRjYWxsYmFjay5jYWxsKHRoaXMsIHRvZG9zKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIEFzc2lnbmVyIHVuIElEXG5cdFx0XHRcdC8qKlxuXHRcdFx0XHQgKiBHw6luw6lyZSB1biBpZGVudGlmaWFudCB1bmlxdWVcblx0XHRcdFx0ICogQHNlZSAgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZnIvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvT2JqZXRzX2dsb2JhdXgvRGF0ZS9ub3dcblx0XHRcdFx0ICogQGV4YW1wbGVcblx0XHRcdFx0ICogcmV0dXJucyB7bnVtYmVyfSAxNTE5MzI2OTc3NzY1XG5cdFx0XHRcdCAqL1xuXHRcdFx0XHQvLyB1cGRhdGVEYXRhLmlkID0gcGFyc2VJbnQobmV3SWQpO1xuXHRcdFx0XHR1cGRhdGVEYXRhLmlkID0gRGF0ZS5ub3coKTtcblx0XHRcdFx0dG9kb3MucHVzaCh1cGRhdGVEYXRhKTtcblx0XHRcdFx0bG9jYWxTdG9yYWdlW3RoaXMuX2RiTmFtZV0gPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcblx0XHRcdFx0Y2FsbGJhY2suY2FsbCh0aGlzLCBbdXBkYXRlRGF0YV0pO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBTdXBwcmltZSB1biDDqWzDqW1lbnQgZHUgc3RvY2thZ2UgZW4gc2UgYmFzYW50IHN1ciBzb24gSURcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gaWQgTCdpZCBkZSBsJ8OpbMOpbWVudCDDoCBzdXBwcmltZXJcblx0XHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayBMYSBmb25jdGlvbiBkZSByYXBwZWwgdXRpbGlzw6llIGFwcsOocyBsYSBzdXBwcmVzc2lvblxuXHRcdCAqL1xuXHRcdHJlbW92ZShpZCwgY2FsbGJhY2spIHtcblx0XHRcdGxldCBkYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2VbdGhpcy5fZGJOYW1lXSk7XG5cdFx0XHRsZXQgdG9kb3MgPSBkYXRhLnRvZG9zO1xuXHRcdFx0bGV0IHRvZG9JZDtcblxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0b2Rvcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAodG9kb3NbaV0uaWQgPT0gaWQpIHtcblx0XHRcdFx0XHR0b2RvSWQgPSB0b2Rvc1tpXS5pZDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmICh0b2Rvc1tpXS5pZCA9PSB0b2RvSWQpIHtcblx0XHRcdFx0XHR0b2Rvcy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bG9jYWxTdG9yYWdlW3RoaXMuX2RiTmFtZV0gPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcblx0XHRcdGNhbGxiYWNrLmNhbGwodGhpcywgdG9kb3MpO1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBEw6ltYXJyZSB1biBub3V2ZWF1IHN0b2NrYWdlXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgTGEgZm9uY3Rpb24gZGUgcmFwcGVsIHV0aWxpc8OpZSBhcHLDqHMgYXZvaXIgZW52b3nDqSBsZXMgZG9ubsOpZXNcblx0XHQgKi9cblx0XHRkcm9wKGNhbGxiYWNrKSB7XG5cdFx0XHRsZXQgZGF0YSA9IHtcblx0XHRcdFx0dG9kb3M6IFtdXG5cdFx0XHR9O1xuXHRcdFx0bG9jYWxTdG9yYWdlW3RoaXMuX2RiTmFtZV0gPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcblx0XHRcdGNhbGxiYWNrLmNhbGwodGhpcywgZGF0YS50b2Rvcyk7XG5cdFx0fTtcblx0fTtcblx0Ly8gRXhwb3J0IHRvIHdpbmRvd1xuXHR3aW5kb3cuYXBwID0gd2luZG93LmFwcCB8fCB7fTtcblx0d2luZG93LmFwcC5TdG9yZSA9IFN0b3JlO1xufSkod2luZG93KTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8qanNoaW50IGxheGJyZWFrOnRydWUgKi9cbihmdW5jdGlvbiAod2luZG93KSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHRsZXQgaHRtbEVzY2FwZXMgPSB7XG5cdFx0JyYnOiAnJmFtcDsnLFxuXHRcdCc8JzogJyZsdDsnLFxuXHRcdCc+JzogJyZndDsnLFxuXHRcdCdcIic6ICcmcXVvdDsnLFxuXHRcdCdcXCcnOiAnJiN4Mjc7Jyxcblx0XHQnYCc6ICcmI3g2MDsnXG5cdH07XG5cblx0bGV0IGVzY2FwZUh0bWxDaGFyID0gZnVuY3Rpb24gKGNocikge1xuXHRcdHJldHVybiBodG1sRXNjYXBlc1tjaHJdO1xuXHR9O1xuXG5cdGxldCByZVVuZXNjYXBlZEh0bWwgPSAvWyY8PlwiJ2BdL2c7XG5cdGxldCByZUhhc1VuZXNjYXBlZEh0bWwgPSBuZXcgUmVnRXhwKHJlVW5lc2NhcGVkSHRtbC5zb3VyY2UpO1xuXG5cdGxldCBlc2NhcGUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG5cdFx0cmV0dXJuIChzdHJpbmcgJiYgcmVIYXNVbmVzY2FwZWRIdG1sLnRlc3Qoc3RyaW5nKSkgP1xuXHRcdFx0c3RyaW5nLnJlcGxhY2UocmVVbmVzY2FwZWRIdG1sLCBlc2NhcGVIdG1sQ2hhcikgOlxuXHRcdFx0c3RyaW5nO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBURU1QTEFURSBEw6lmaW5pdCBsZSB0ZW1wbGF0ZSB1dGlsaXPDqSBwb3VyIGFmZmljaGVyIGxlcyB0w6JjaGVzXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0Y2xhc3MgVGVtcGxhdGUge1xuXHRcdGNvbnN0cnVjdG9yKCkge1xuXHRcdFx0dGhpcy5kZWZhdWx0VGVtcGxhdGUgPSAnPGxpIGRhdGEtaWQ9XCJ7e2lkfX1cIiBjbGFzcz1cInt7Y29tcGxldGVkfX1cIj4nICtcblx0XHRcdFx0JzxkaXYgY2xhc3M9XCJ2aWV3XCI+JyArXG5cdFx0XHRcdCc8aW5wdXQgY2xhc3M9XCJ0b2dnbGVcIiB0eXBlPVwiY2hlY2tib3hcIiB7e2NoZWNrZWR9fT4nICtcblx0XHRcdFx0JzxsYWJlbD57e3RpdGxlfX08L2xhYmVsPicgK1xuXHRcdFx0XHQnPGJ1dHRvbiBjbGFzcz1cImRlc3Ryb3lcIj48L2J1dHRvbj4nICtcblx0XHRcdFx0JzwvZGl2PicgK1xuXHRcdFx0XHQnPC9saT4nO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIENyw6llIHVuIMOpbMOpbWVudCBIVE1MIGV0IHBsYWNlIGxlIHRlbXBsYXRlIGRhbnMgbCdhcHBsaWNhdGlvbi4gXG5cdFx0ICogTm9ybWFsZW1lbnQsIGlsIGVzdCBjb25zZWlsbMOpIGQndXRpbGlzZXIgdW4gbW90ZXVyIGRlIHRlbXBsYXRlIGNvbW1lIE11c3RhY2hlIG91IEhhbmRsZWJhcnMuXG5cdFx0ICogUG91ciBzaW1wbGlmaWVyIG5vdHJlIGFwcGxpY2F0aW9uLCBub3VzIGF2b25zIGTDqWNpZMOpIGRlIGNyw6llciB1biB0ZW1wbGF0ZSBlbiB2YW5pbGxhIEpTLlxuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIEwnb2JqZXQgY29udGVuYW50IGxlcyBpbmZvcm1hdGlvbnMgw6AgcmVtcGxhY2VyIGRhbnMgbGUgdGVtcGxhdGUuXG5cdFx0ICogQHJldHVybnMge3N0cmluZ30gQ2hhw65uZSBIVE1MIGQndW4gw6lsw6ltZW50IDxsaT4gTGUgdGVtcGxhdGUgSFRNTCBjb250ZW5hbnQgbCfDqWzDqW1lbnRcblx0XHQgKiBAZXhhbXBsZVxuXHRcdCAqIHZpZXcuc2hvdyh7XG5cdFx0ICogaWQ6IDEsIC8vIGwnaWQgZGUgbGEgdMOiY2hlXG5cdFx0ICogdGl0bGU6IFwiSGVsbG8gV29ybGRcIiwgLy8gbGUgdGl0cmUgZGUgbGEgdMOiY2hlXG5cdFx0ICogY29tcGxldGVkOiAwLCAvLyBsYSB0w6JjaGUgZXN0IHBhciBkw6lmYXV0IG5vbiB0ZXJtaW7DqWVcblx0XHR9KTtcblx0XHQgKi9cblx0XHRzaG93KGRhdGEpIHtcblx0XHRcdGxldCBpLCBsO1xuXHRcdFx0bGV0IHZpZXcgPSAnJztcblxuXHRcdFx0Zm9yIChpID0gMCwgbCA9IGRhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG5cdFx0XHRcdGxldCB0ZW1wbGF0ZSA9IHRoaXMuZGVmYXVsdFRlbXBsYXRlO1xuXHRcdFx0XHRsZXQgY29tcGxldGVkID0gJyc7XG5cdFx0XHRcdGxldCBjaGVja2VkID0gJyc7XG5cblx0XHRcdFx0aWYgKGRhdGFbaV0uY29tcGxldGVkKSB7XG5cdFx0XHRcdFx0Y29tcGxldGVkID0gJ2NvbXBsZXRlZCc7XG5cdFx0XHRcdFx0Y2hlY2tlZCA9ICdjaGVja2VkJztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZSgne3tpZH19JywgZGF0YVtpXS5pZCk7XG5cdFx0XHRcdHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZSgne3t0aXRsZX19JywgZXNjYXBlKGRhdGFbaV0udGl0bGUpKTtcblx0XHRcdFx0dGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKCd7e2NvbXBsZXRlZH19JywgY29tcGxldGVkKTtcblx0XHRcdFx0dGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKCd7e2NoZWNrZWR9fScsIGNoZWNrZWQpO1xuXG5cdFx0XHRcdHZpZXcgPSB2aWV3ICsgdGVtcGxhdGU7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB2aWV3O1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBBZmZpY2hlIHVuIGNvbXB0ZXVyIGRlIHTDomNoZXMgYWN0aXZlcyBlbiBiYXMgw6AgZ2F1Y2hlIGRlIGwnYXBwbGljYXRpb25cblx0XHQgKiBAcGFyYW0ge251bWJlcn0gYWN0aXZlVG9kb3MgTGUgbm9tYnJlIGRlIHTDomNoZXMgYWN0aXZlc1xuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9IENoYcOubmUgY29udGVuYW50IGxlIG5vbWJyZVxuXHRcdCAqL1xuXHRcdGl0ZW1Db3VudGVyKGFjdGl2ZVRvZG9zKSB7XG5cdFx0XHRsZXQgcGx1cmFsID0gYWN0aXZlVG9kb3MgPT09IDEgPyAnJyA6ICdzJztcblxuXHRcdFx0cmV0dXJuICc8c3Ryb25nPicgKyBhY3RpdmVUb2RvcyArICc8L3N0cm9uZz4gaXRlbScgKyBwbHVyYWwgKyAnIGxlZnQnO1xuXHRcdH07XG5cblx0XHQvKiogXG5cdFx0ICogQWZmaWNoZSBvdSBub24gbGUgYm91dG9uIFwiQ2xlYXIgQ29tcGxldGVkXCIgKHNpIHBhcyBkZSB0w6JjaGVzIHRlcm1pbsOpZXMgPSBwYXMgZGUgYm91dG9uKVxuXHRcdCAqIEBwYXJhbSAge051bWJlcn0gY29tcGxldGVkVG9kb3MgTGUgbm9tYnJlIGRlIHTDomNoZSBjb21wbMOpdMOpZXNcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfSBDaGHDrm5lIGNvbnRlbmFudCBsZSBub21icmVcblx0XHQgKi9cblx0XHRjbGVhckNvbXBsZXRlZEJ1dHRvbihjb21wbGV0ZWRUb2Rvcykge1xuXHRcdFx0aWYgKGNvbXBsZXRlZFRvZG9zID4gMCkge1xuXHRcdFx0XHRyZXR1cm4gJ0NsZWFyIGNvbXBsZXRlZCc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gJyc7IC8vIFJFVFVSTiBpdGVtQ291bnRlckxhIGNoYWluZSBkZSBjYXJhY3TDqHJlIGNvbnRlbmFudCBsZSB0ZXh0ZSBkdSBib3V0b24uXG5cdFx0XHR9XG5cdFx0fTtcblx0fTtcblx0Ly8gRXhwb3J0IHRvIHdpbmRvd1xuXHR3aW5kb3cuYXBwID0gd2luZG93LmFwcCB8fCB7fTtcblx0d2luZG93LmFwcC5UZW1wbGF0ZSA9IFRlbXBsYXRlO1xufSkod2luZG93KTsiLCIvKmdsb2JhbCBxcywgcXNhLCAkb24sICRwYXJlbnQsICRkZWxlZ2F0ZSAqL1xuXG4oZnVuY3Rpb24gKHdpbmRvdykge1xuXHQndXNlIHN0cmljdCc7XG5cdC8qKiBcblx0ICogVklFVyBEw6lmaW5pdCBsZXMgdmFsZXVycyBwYXIgZMOpZmF1dCBkdSB0ZW1wbGF0ZSBhaW5zaSBxdWUgbGVzIGludMOpcmFjdGlvbnMgYXZlYyBsZSBET00gKHRvdWNoZXMgZHUgY2xhdmllciBldCDDqXbDqG5lbWVudHMpXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZSB0ZW1wbGF0ZSB1dGlsaXPDqVxuXHQgKi9cblx0Y2xhc3MgVmlldyB7XG5cdFx0Y29uc3RydWN0b3IodGVtcGxhdGUpIHtcblx0XHRcdHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcblxuXHRcdFx0dGhpcy5FTlRFUl9LRVkgPSAxMztcblx0XHRcdHRoaXMuRVNDQVBFX0tFWSA9IDI3O1xuXG5cdFx0XHR0aGlzLiR0b2RvTGlzdCA9IHFzKCcudG9kby1saXN0Jyk7XG5cdFx0XHR0aGlzLiR0b2RvSXRlbUNvdW50ZXIgPSBxcygnLnRvZG8tY291bnQnKTtcblx0XHRcdHRoaXMuJGNsZWFyQ29tcGxldGVkID0gcXMoJy5jbGVhci1jb21wbGV0ZWQnKTtcblx0XHRcdHRoaXMuJG1haW4gPSBxcygnLm1haW4nKTtcblx0XHRcdHRoaXMuJGZvb3RlciA9IHFzKCcuZm9vdGVyJyk7XG5cdFx0XHR0aGlzLiR0b2dnbGVBbGwgPSBxcygnLnRvZ2dsZS1hbGwnKTtcblx0XHRcdHRoaXMuJG5ld1RvZG8gPSBxcygnLm5ldy10b2RvJyk7XG5cdFx0fVxuXG5cdFx0LyoqIFxuXHRcdCAqIFN1cHByaW1lIHVuZSB0w6JjaGUgZGUgbGEgbGlzdGVcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gaWQgTCdpZCBkZSBsYSB0w6JjaGUgw6Agc3VwcHJpbWVyXG5cdFx0ICovXG5cdFx0X3JlbW92ZUl0ZW0oaWQpIHtcblx0XHRcdGxldCBlbGVtID0gcXMoJ1tkYXRhLWlkPVwiJyArIGlkICsgJ1wiXScpO1xuXG5cdFx0XHRpZiAoZWxlbSkge1xuXHRcdFx0XHR0aGlzLiR0b2RvTGlzdC5yZW1vdmVDaGlsZChlbGVtKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0LyoqIFxuXHRcdCAqIEFmZmljaGUgb3UgY2FjaGUgbGVzIMOpbMOpbWVudHMgdGVybWluw6lzXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IGNvbXBsZXRlZENvdW50IExlIG5vbWJyZSBkJ8OpbMOpbWVudHMgdGVybWluw6lzXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSB2aXNpYmxlIExlcyDDqWzDqW1lbnRzIHNvbnQtaWxzIHZpc2libGVzIG91IG5vbiA/XG5cdFx0ICovXG5cdFx0X2NsZWFyQ29tcGxldGVkQnV0dG9uKGNvbXBsZXRlZENvdW50LCB2aXNpYmxlKSB7XG5cdFx0XHR0aGlzLiRjbGVhckNvbXBsZXRlZC5pbm5lckhUTUwgPSB0aGlzLnRlbXBsYXRlLmNsZWFyQ29tcGxldGVkQnV0dG9uKGNvbXBsZXRlZENvdW50KTtcblx0XHRcdHRoaXMuJGNsZWFyQ29tcGxldGVkLnN0eWxlLmRpc3BsYXkgPSB2aXNpYmxlID8gJ2Jsb2NrJyA6ICdub25lJztcblx0XHR9O1xuXG5cdFx0LyoqIFxuXHRcdCAqIEFmZmljaGUgb3UgY2FjaGUgbGVzIMOpbMOpbWVudHMgdGVybWluw6lzXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGN1cnJlbnRQYWdlIExlIGZpbHRyZSBhcHBsaXF1w6kgOiAnJyAvIGFjdGl2ZSAvIGNvbXBsZXRlZFxuXHRcdCAqL1xuXHRcdF9zZXRGaWx0ZXIoY3VycmVudFBhZ2UpIHtcblx0XHRcdHFzKCcuZmlsdGVycyAuc2VsZWN0ZWQnKS5jbGFzc05hbWUgPSAnJztcblx0XHRcdHFzKCcuZmlsdGVycyBbaHJlZj1cIiMvJyArIGN1cnJlbnRQYWdlICsgJ1wiXScpLmNsYXNzTmFtZSA9ICdzZWxlY3RlZCc7XG5cdFx0fTtcblxuXHRcdC8qKiBcblx0XHQgKiBUZXN0IHNpIHVuZSB0w6JjaGUgZXN0IHRlcm1pbsOpZSBvdSBub25cblx0XHQgKiBAcGFyYW0ge251bWJlcn0gaWQgTCdpZCBkZSBsYSB0w6JjaGUgw6AgdGVzdGVyXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBjb21wbGV0ZWQgTGEgdMOiY2hlIGVzdC1lbGxlIHRlcm1pbsOpZSBvdSBub24gP1xuXHRcdCAqL1xuXHRcdF9lbGVtZW50Q29tcGxldGUoaWQsIGNvbXBsZXRlZCkge1xuXHRcdFx0bGV0IGxpc3RJdGVtID0gcXMoJ1tkYXRhLWlkPVwiJyArIGlkICsgJ1wiXScpO1xuXG5cdFx0XHQvLyBpZiAoIWxpc3RJdGVtKSB7XG5cdFx0XHQvLyBcdHJldHVybjtcblx0XHRcdC8vIH1cblxuXHRcdFx0bGlzdEl0ZW0uY2xhc3NOYW1lID0gY29tcGxldGVkID8gJ2NvbXBsZXRlZCcgOiAnJztcblxuXHRcdFx0Ly8gRGFucyBsZSBjYXMgb8O5IGlsIGEgw6l0w6kgYmFzY3Vsw6kgw6AgcGFydGlyIGQndW4gw6l2w6luZW1lbnQgZXQgbm9uIGVuIGNsaXF1YW50IHN1ciBsYSBjYXNlIMOgIGNvY2hlclxuXHRcdFx0cXMoJ2lucHV0JywgbGlzdEl0ZW0pLmNoZWNrZWQgPSBjb21wbGV0ZWQ7XG5cdFx0fTtcblxuXHRcdC8qKiBcblx0XHQgKiBFZGl0ZXIgdW5lIHTDomNoZSBkYW5zIGxhIGxpc3RlIChncsOiY2UgYXUgZG91YmxlIGNsaWNrKVxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBpZCBMJ2lkIGRlIGxhIHTDomNoZSDDoCDDqWRpdGVyXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlIExlIG5vdXZlYXUgdGl0cmUgZGUgbGEgdMOiY2hlXG5cdFx0ICovXG5cdFx0X2VkaXRJdGVtKGlkLCB0aXRsZSkge1xuXHRcdFx0bGV0IGxpc3RJdGVtID0gcXMoJ1tkYXRhLWlkPVwiJyArIGlkICsgJ1wiXScpO1xuXG5cdFx0XHQvLyBpZiAoIWxpc3RJdGVtKSB7XG5cdFx0XHQvLyBcdHJldHVybjtcblx0XHRcdC8vIH1cblxuXHRcdFx0bGlzdEl0ZW0uY2xhc3NOYW1lID0gbGlzdEl0ZW0uY2xhc3NOYW1lICsgJyBlZGl0aW5nJztcblxuXHRcdFx0bGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblx0XHRcdGlucHV0LmNsYXNzTmFtZSA9ICdlZGl0JztcblxuXHRcdFx0bGlzdEl0ZW0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXHRcdFx0aW5wdXQuZm9jdXMoKTtcblx0XHRcdGlucHV0LnZhbHVlID0gdGl0bGU7XG5cdFx0fTtcblxuXHRcdC8qKiBcblx0XHQgKiBJbmRpcXVlIHF1ZSBsJ8OpZGl0aW9uIGQndW5lIHTDomNoZSBlc3QgdGVybWluw6llXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IGlkIEwnaWQgZGUgbGEgdMOiY2hlIHF1aSDDqXRhaXQgZW4gw6lkaXRpb25cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGUgTGUgbm91dmVhdSB0aXRyZSBkZSBsYSB0w6JjaGVcblx0XHQgKi9cblx0XHRfZWRpdEl0ZW1Eb25lKGlkLCB0aXRsZSkge1xuXHRcdFx0bGV0IGxpc3RJdGVtID0gcXMoJ1tkYXRhLWlkPVwiJyArIGlkICsgJ1wiXScpO1xuXG5cdFx0XHQvLyBpZiAoIWxpc3RJdGVtKSB7XG5cdFx0XHQvLyBcdHJldHVybjtcblx0XHRcdC8vIH1cblxuXHRcdFx0bGV0IGlucHV0ID0gcXMoJ2lucHV0LmVkaXQnLCBsaXN0SXRlbSk7XG5cdFx0XHRsaXN0SXRlbS5yZW1vdmVDaGlsZChpbnB1dCk7XG5cblx0XHRcdGxpc3RJdGVtLmNsYXNzTmFtZSA9IGxpc3RJdGVtLmNsYXNzTmFtZS5yZXBsYWNlKCdlZGl0aW5nJywgJycpO1xuXG5cdFx0XHRxc2EoJ2xhYmVsJywgbGlzdEl0ZW0pLmZvckVhY2goZnVuY3Rpb24gKGxhYmVsKSB7XG5cdFx0XHRcdGxhYmVsLnRleHRDb250ZW50ID0gdGl0bGU7XG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0LyoqIFxuXHRcdCAqIEluZGlxdWUgcXVlIGwnw6lkaXRpb24gZCd1bmUgdMOiY2hlIGVzdCB0ZXJtaW7DqWVcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdmlld0NtZCBMYSBmb25jdGlvbiBhY3RpdmVcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gcGFyYW1ldGVyIExlcyBwYXJhbcOodHJlcyBhY3RpZnNcblx0XHQgKi9cblx0XHRyZW5kZXIodmlld0NtZCwgcGFyYW1ldGVyKSB7XG5cdFx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0XHRsZXQgdmlld0NvbW1hbmRzID0ge1xuXHRcdFx0XHRzaG93RW50cmllczogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHNlbGYuJHRvZG9MaXN0LmlubmVySFRNTCA9IHNlbGYudGVtcGxhdGUuc2hvdyhwYXJhbWV0ZXIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRyZW1vdmVJdGVtOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0c2VsZi5fcmVtb3ZlSXRlbShwYXJhbWV0ZXIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR1cGRhdGVFbGVtZW50Q291bnQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRzZWxmLiR0b2RvSXRlbUNvdW50ZXIuaW5uZXJIVE1MID0gc2VsZi50ZW1wbGF0ZS5pdGVtQ291bnRlcihwYXJhbWV0ZXIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRjbGVhckNvbXBsZXRlZEJ1dHRvbjogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHNlbGYuX2NsZWFyQ29tcGxldGVkQnV0dG9uKHBhcmFtZXRlci5jb21wbGV0ZWQsIHBhcmFtZXRlci52aXNpYmxlKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0Y29udGVudEJsb2NrVmlzaWJpbGl0eTogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHNlbGYuJG1haW4uc3R5bGUuZGlzcGxheSA9IHNlbGYuJGZvb3Rlci5zdHlsZS5kaXNwbGF5ID0gcGFyYW1ldGVyLnZpc2libGUgPyAnYmxvY2snIDogJ25vbmUnO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR0b2dnbGVBbGw6IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRzZWxmLiR0b2dnbGVBbGwuY2hlY2tlZCA9IHBhcmFtZXRlci5jaGVja2VkO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRzZXRGaWx0ZXI6IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRzZWxmLl9zZXRGaWx0ZXIocGFyYW1ldGVyKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0Y2xlYXJOZXdUb2RvOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0c2VsZi4kbmV3VG9kby52YWx1ZSA9ICcnO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRlbGVtZW50Q29tcGxldGU6IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRzZWxmLl9lbGVtZW50Q29tcGxldGUocGFyYW1ldGVyLmlkLCBwYXJhbWV0ZXIuY29tcGxldGVkKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0ZWRpdEl0ZW06IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRzZWxmLl9lZGl0SXRlbShwYXJhbWV0ZXIuaWQsIHBhcmFtZXRlci50aXRsZSk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGVkaXRJdGVtRG9uZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHNlbGYuX2VkaXRJdGVtRG9uZShwYXJhbWV0ZXIuaWQsIHBhcmFtZXRlci50aXRsZSk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdHZpZXdDb21tYW5kc1t2aWV3Q21kXSgpO1xuXHRcdH07XG5cblx0XHQvKiogXG5cdFx0ICogRMOpZmluaXQgbGVzIGFjdGlvbnMgYXByw6hzIGwnw6lkaXRpb24gZCd1bmUgdMOiY2hlXG5cdFx0ICogQHBhcmFtIHtlbGVtZW50fSBlbGVtZW50IExhIHTDomNoZSBkb250IG9uIGNoZXJjaGUgbCdpZFxuXHRcdCAqIFJldHVybiBMJ2lkIGRlIGxhIHTDomNoZVxuXHRcdCAqL1xuXHRcdF9pdGVtSWQoZWxlbWVudCkge1xuXHRcdFx0bGV0IGxpID0gJHBhcmVudChlbGVtZW50LCAnbGknKTtcblx0XHRcdHJldHVybiBwYXJzZUludChsaS5kYXRhc2V0LmlkLCAxMCk7XG5cdFx0fTtcblxuXHRcdC8qKiBcblx0XHQgKiBEw6lmaW5pdCBsZXMgYWN0aW9ucyBhcHLDqHMgbCfDqWRpdGlvbiBkJ3VuZSB0w6JjaGVcblx0XHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBoYW5kbGVyIEZvbmN0aW9uIGRlIHJhcHBlbCBxdWkgZXN0IGV4w6ljdXTDqWUgbG9ycyBkZSBsJ2FubnVsYXRpb24gZGUgbCfDqWRpdGlvbiBkJ3VuZSB0w6JjaGVcblx0XHQgKi9cblx0XHRfYmluZEl0ZW1FZGl0RG9uZShoYW5kbGVyKSB7XG5cdFx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0XHQkZGVsZWdhdGUoc2VsZi4kdG9kb0xpc3QsICdsaSAuZWRpdCcsICdibHVyJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRpZiAoIXRoaXMuZGF0YXNldC5pc2NhbmNlbGVkKSB7XG5cdFx0XHRcdFx0aGFuZGxlcih7XG5cdFx0XHRcdFx0XHRpZDogc2VsZi5faXRlbUlkKHRoaXMpLFxuXHRcdFx0XHRcdFx0dGl0bGU6IHRoaXMudmFsdWVcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdCRkZWxlZ2F0ZShzZWxmLiR0b2RvTGlzdCwgJ2xpIC5lZGl0JywgJ2tleXByZXNzJywgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0XHRcdGlmIChldmVudC5rZXlDb2RlID09PSBzZWxmLkVOVEVSX0tFWSkge1xuXHRcdFx0XHRcdC8vIFJldGlyZXogbGUgY3Vyc2V1ciBkZSBsJ2VudHLDqWUgbG9yc3F1ZSB2b3VzIGFwcHV5ZXogc3VyIEVudHLDqWUsIGNvbW1lIHMnaWwgXG5cdFx0XHRcdFx0Ly8gw6l0YWl0IHVuZSB2cmFpZSBmb3JtZVxuXHRcdFx0XHRcdHRoaXMuYmx1cigpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0LyoqIFxuXHRcdCAqIETDqWZpbml0IGxlcyBhY3Rpb25zIGxvcnNxdWUgbCfDqWRpdGlvbiBkJ3VuZSB0w6JjaGUgZXN0IGFubnVsw6llXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlciBGb25jdGlvbiBkZSByYXBwZWwgcXVpIGVzdCBleMOpY3V0w6llIGxvcnMgZGUgbCdhbm51bGF0aW9uIGRlIGwnw6lkaXRpb24gZCd1bmUgdMOiY2hlXG5cdFx0ICovXG5cdFx0X2JpbmRJdGVtRWRpdENhbmNlbChoYW5kbGVyKSB7XG5cdFx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0XHQkZGVsZWdhdGUoc2VsZi4kdG9kb0xpc3QsICdsaSAuZWRpdCcsICdrZXl1cCcsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdFx0XHRpZiAoZXZlbnQua2V5Q29kZSA9PT0gc2VsZi5FU0NBUEVfS0VZKSB7XG5cdFx0XHRcdFx0dGhpcy5kYXRhc2V0LmlzY2FuY2VsZWQgPSB0cnVlO1xuXHRcdFx0XHRcdHRoaXMuYmx1cigpO1xuXG5cdFx0XHRcdFx0aGFuZGxlcih7XG5cdFx0XHRcdFx0XHRpZDogc2VsZi5faXRlbUlkKHRoaXMpXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHQvKiogXG5cdFx0ICogR3JlZmZlIGRlcyDDqWNvdXRldXJzIGQnw6l2w6huZW1lbnRzIHN1ciBsZXMgdMOiY2hlcyBlbiBmb25jdGlvbiBkZXMgYWN0aW9ucyBkZSBsJ3V0aWxpc2F0ZXVyLCBjw7R0w6kgSFRNTFxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBldmVudCBMJ2V2ZW50IGNob2lzaVxuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGhhbmRsZXIgRm9uY3RuaW9uIGRlIHJhcHBlbCBleMOpY3V0w6llIHNlbG9uIGxhIHNpdHVhdGlvblxuXHRcdCAqL1xuXHRcdGJpbmQoZXZlbnQsIGhhbmRsZXIpIHtcblx0XHRcdGxldCBzZWxmID0gdGhpcztcblx0XHRcdC8vIEFtw6lsaW9yYXRpb25cblx0XHRcdC8vIE1ldGhvZGUgc2VydmFudCBhIGJpbmJkZXIgcGx1c2lldXIgZXZlbnQ6IGRhbnMgdW5lIGxvZ2lxdWUgZCdhbWVsaW9yYXp0aW9uLCBub3VzIGF2b25zIHV0aWxpc2VyIHVuIHRyYWl0ZW1lbnQgc3dpdGNoLCBxdWkgZXN0IHVuIHBldSBwbHVzIG1haW50ZW5hYmxlIGV0IHVuIHBldSBwbHVzIGxpc2libGUgZXQgcGx1cyBwZXJmb3JtYW50LlxuXHRcdFx0c3dpdGNoIChldmVudCkge1xuXHRcdFx0XHRjYXNlICduZXdUb2RvJzpcblx0XHRcdFx0XHQkb24oc2VsZi4kbmV3VG9kbywgJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGhhbmRsZXIoc2VsZi4kbmV3VG9kby52YWx1ZSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3JlbW92ZUNvbXBsZXRlZCc6XG5cdFx0XHRcdFx0JG9uKHNlbGYuJGNsZWFyQ29tcGxldGVkLCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRoYW5kbGVyKCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3RvZ2dsZUFsbCc6XG5cdFx0XHRcdFx0JG9uKHNlbGYuJHRvZ2dsZUFsbCwgJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0aGFuZGxlcih7XG5cdFx0XHRcdFx0XHRcdGNvbXBsZXRlZDogdGhpcy5jaGVja2VkXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnaXRlbUVkaXQnOlxuXHRcdFx0XHRcdCRkZWxlZ2F0ZShzZWxmLiR0b2RvTGlzdCwgJ2xpIGxhYmVsJywgJ2RibGNsaWNrJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0aGFuZGxlcih7XG5cdFx0XHRcdFx0XHRcdGlkOiBzZWxmLl9pdGVtSWQodGhpcylcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdpdGVtUmVtb3ZlJzpcblx0XHRcdFx0XHQkZGVsZWdhdGUoc2VsZi4kdG9kb0xpc3QsICcuZGVzdHJveScsICdjbGljaycsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGhhbmRsZXIoe1xuXHRcdFx0XHRcdFx0XHRpZDogc2VsZi5faXRlbUlkKHRoaXMpXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnaXRlbVRvZ2dsZSc6XG5cdFx0XHRcdFx0JGRlbGVnYXRlKHNlbGYuJHRvZG9MaXN0LCAnLnRvZ2dsZScsICdjbGljaycsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGhhbmRsZXIoe1xuXHRcdFx0XHRcdFx0XHRpZDogc2VsZi5faXRlbUlkKHRoaXMpLFxuXHRcdFx0XHRcdFx0XHRjb21wbGV0ZWQ6IHRoaXMuY2hlY2tlZFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2l0ZW1FZGl0RG9uZSc6XG5cdFx0XHRcdFx0c2VsZi5fYmluZEl0ZW1FZGl0RG9uZShoYW5kbGVyKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlICdpdGVtRWRpdENhbmNlbCc6IHtcblx0XHRcdFx0XHRzZWxmLl9iaW5kSXRlbUVkaXRDYW5jZWwoaGFuZGxlcik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXHR9O1xuXG5cdC8vIEV4cG9ydCB0byB3aW5kb3dcblx0d2luZG93LmFwcCA9IHdpbmRvdy5hcHAgfHwge307XG5cdHdpbmRvdy5hcHAuVmlldyA9IFZpZXc7XG59KHdpbmRvdykpOyJdLCJzb3VyY2VSb290IjoiIn0=