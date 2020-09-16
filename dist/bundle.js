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
___CSS_LOADER_EXPORT___.push([module.i, "html,\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n\nh1 {\n    display: block;\n    text-align: center;\n    margin-top: 150px;\n    font-weight: 900;\n    font-size: 80px;\n}\n\n.bg-light {\n    background-color: #ffffff !important;\n}\n\nbutton {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    background: none;\n    font-size: 100%;\n    vertical-align: baseline;\n    font-family: inherit;\n    font-weight: inherit;\n    color: inherit;\n    -webkit-appearance: none;\n    appearance: none;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.btn-outline-primary {\n    margin-right: 10px;\n    color: #DB0707;\n    border: 1px solid #DB0707;\n    background-color: white;\n}\n\n.nav-link {\n    font-size: 20px;\n}\n\na.navbar-brand {\n    font-size: 30px;\n}\n\n.btn-outline-primary:hover {\n    margin-right: 10px;\n    color: white;\n    border: 1px solid #DB0707;\n    background-color: #DB0707;\n}\n\nbody {\n    font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    line-height: 1.4em;\n    background: #ffffff;\n    color: #111111;\n    /* min-width: 230px;\n    max-width: 550px; */\n    margin: 0 auto;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    font-weight: 300;\n}\n\n:focus {\n    outline: 0;\n}\n\n.hidden {\n    display: none;\n}\n\n.todoapp {\n    background: #fff;\n    margin: 50px 0 40px 0;\n    position: relative;\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),\n        0 25px 50px 0 rgba(0, 0, 0, 0.1);\n    min-width: 230px;\n    max-width: 550px;\n}\n\n.todoapp input::-webkit-input-placeholder {\n    font-style: italic;\n    font-weight: 300;\n    color: rgba(0, 0, 0, 0.4);\n}\n\n.todoapp input::-moz-placeholder {\n    font-style: italic;\n    font-weight: 300;\n    color: rgba(0, 0, 0, 0.4);\n}\n\n.todoapp input::input-placeholder {\n    font-style: italic;\n    font-weight: 300;\n    color: rgba(0, 0, 0, 0.4);\n}\n\n.todoapp h1 {\n    position: absolute;\n    top: -140px;\n    width: 100%;\n    font-size: 80px;\n    font-weight: 200;\n    text-align: center;\n    color: #DB0707;\n    -webkit-text-rendering: optimizeLegibility;\n    -moz-text-rendering: optimizeLegibility;\n    text-rendering: optimizeLegibility;\n}\n\n.new-todo,\n.edit {\n    position: relative;\n    margin: 0;\n    width: 130%;\n    font-size: 18px;\n    font-family: inherit;\n    font-weight: inherit;\n    line-height: 1.4em;\n    color: inherit;\n    padding: 6px;\n    border: 1px solid #999;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.new-todo {\n    padding-top: 20px;\n    padding-bottom: 20px;\n    border: none;\n    background: rgba(0, 0, 0, 0.003);\n}\n\n.main {\n    position: relative;\n    z-index: 2;\n    border-top: 1px solid #ffffff;\n}\n\n.toggle-all {\n    width: 30px;\n    height: 30px;\n    left: 5px;\n    border: none;\n    opacity: 0;\n    position: absolute;\n    right: 100%;\n    bottom: 100%;\n    z-index: 2;\n    cursor: pointer;\n}\n\n.toggle-all+label {\n    width: 60px;\n    height: 34px;\n    font-size: 0;\n    position: absolute;\n    top: -43px;\n    left: -13px;\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg);\n}\n\n.toggle-all+label:before {\n    content: '❯';\n    font-size: 22px;\n    color: #ffffff;\n    padding: 10px 27px 10px 27px;\n}\n\n.toggle-all:checked+label:before {\n    color: #737373;\n}\n\n.todo-list {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\n.todo-list li {\n    position: relative;\n    font-size: 24px;\n    border-bottom: 1px solid #ededed;\n}\n\n.todo-list li:last-child {\n    border-bottom: none;\n}\n\n.todo-list li.editing {\n    border-bottom: none;\n    padding: 0;\n}\n\n.todo-list li.editing .edit {\n    display: block;\n    width: calc(100% - 43px);\n    padding: 12px 16px;\n    margin: 0 0 0 43px;\n}\n\n.todo-list li.editing .view {\n    display: none;\n}\n\n.todo-list li .toggle {\n    text-align: center;\n    width: 40px;\n    /* auto, since non-WebKit browsers doesn't support input styling */\n    height: auto;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    margin: auto 0;\n    border: none;\n    /* Mobile Safari */\n    -webkit-appearance: none;\n    appearance: none;\n}\n\n.todo-list li .toggle {\n    opacity: 0;\n}\n\n.todo-list li .toggle+label {\n    /*\n\t\tFirefox requires `#` to be escaped - https://bugzilla.mozilla.org/show_bug.cgi?id=922433\n\t\tIE and Edge requires *everything* to be escaped to render, so we do that instead of just the `#` - https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7157459/\n\t*/\n    background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');\n    background-repeat: no-repeat;\n    background-position: center left;\n}\n\n.todo-list li .toggle:checked+label {\n    background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');\n}\n\n.todo-list li label {\n    word-break: break-all;\n    padding: 15px 15px 15px 60px;\n    display: block;\n    line-height: 1.2;\n    transition: color 0.4s;\n    font-weight: 400;\n    color: #4d4d4d;\n}\n\n.todo-list li.completed label {\n    color: #cdcdcd;\n    text-decoration: line-through;\n}\n\n.todo-list li .destroy {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 10px;\n    bottom: 0;\n    width: 40px;\n    height: 40px;\n    margin: auto 0;\n    font-size: 30px;\n    color: #cc9a9a;\n    margin-bottom: 11px;\n    transition: color 0.2s ease-out;\n}\n\n.todo-list li .destroy:hover {\n    color: #af5b5e;\n}\n\n.todo-list li .destroy:after {\n    content: '×';\n}\n\n.todo-list li:hover .destroy {\n    display: block;\n}\n\n.todo-list li .edit {\n    display: none;\n}\n\n.todo-list li.editing:last-child {\n    margin-bottom: -1px;\n}\n\n.footer {\n    padding: 10px 15px;\n    height: 20px;\n    text-align: center;\n    font-size: 15px;\n    border-top: 1px solid #ffffff;\n}\n\n.footer:before {\n    content: '';\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    height: 50px;\n    overflow: hidden;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),\n        0 8px 0 -3px #f6f6f6,\n        0 9px 1px -3px rgba(0, 0, 0, 0.2),\n        0 16px 0 -6px #f6f6f6,\n        0 17px 2px -6px rgba(0, 0, 0, 0.2);\n}\n\n.todo-count {\n    float: left;\n    text-align: left;\n    margin-top: -15px;\n}\n\n.todo-count strong {\n    font-weight: 300;\n}\n\n.filters {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    position: absolute;\n    right: 0;\n    left: 0;\n    margin-top: -15px;\n}\n\n.filters li {\n    display: inline;\n}\n\n.filters li a {\n    color: inherit;\n    margin: 3px;\n    padding: 3px 7px;\n    text-decoration: none;\n    border: 1px solid transparent;\n    border-radius: 3px;\n}\n\n.filters li a:hover {\n    border-color: rgba(175, 47, 47, 0.1);\n}\n\n.filters li a.selected {\n    border-color: rgba(175, 47, 47, 0.2);\n}\n\n.clear-completed {\n    margin-top: -15px;\n}\n\n.clear-completed,\nhtml .clear-completed:active {\n    float: right;\n    position: relative;\n    line-height: 20px;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.clear-completed:hover {\n    text-decoration: underline;\n}\n\n.info {\n    margin: 65px auto 0;\n    color: #4d4d4d;\n    font-size: 11px;\n    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n    text-align: center;\n}\n\n.info p {\n    line-height: 1;\n}\n\n.info a {\n    color: inherit;\n    text-decoration: none;\n    font-weight: 400;\n}\n\n.info a:hover {\n    text-decoration: underline;\n}\n\n/*\n\tHack to remove background from Mobile Safari.\n\tCan't use it globally since it destroys checkboxes in Firefox\n*/\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n\n    .toggle-all,\n    .todo-list li .toggle {\n        background: none;\n    }\n\n    .todo-list li .toggle {\n        height: 40px;\n    }\n}\n\n@media (max-width: 430px) {\n    .footer {\n        height: 50px;\n    }\n\n    .filters {\n        bottom: 10px;\n    }\n}\n\nhr {\n    margin: 20px 0;\n    border: 0;\n    border-top: 1px dashed #c5c5c5;\n    border-bottom: 1px dashed #f7f7f7;\n}\n\n.learn a {\n    font-weight: normal;\n    text-decoration: none;\n    color: #DB0707;\n}\n\n.learn a:hover {\n    text-decoration: underline;\n    color: #787e7e;\n}\n\n.learn h3,\n.learn h4,\n.learn h5 {\n    margin: 10px 0;\n    font-weight: 500;\n    line-height: 1.2;\n    color: #000;\n}\n\n.learn h3 {\n    font-size: 24px;\n}\n\n.learn h4 {\n    font-size: 18px;\n}\n\n.learn h5 {\n    margin-bottom: 0;\n    font-size: 14px;\n}\n\n.learn ul {\n    padding: 0;\n    margin: 0 0 30px 25px;\n}\n\n.learn li {\n    line-height: 20px;\n}\n\n.learn p {\n    font-size: 15px;\n    font-weight: 300;\n    line-height: 1.3;\n    margin-top: 0;\n    margin-bottom: 0;\n}\n\n#issue-count {\n    display: none;\n}\n\n.quote {\n    border: none;\n    margin: 20px 0 60px 0;\n}\n\n.quote p {\n    font-style: italic;\n}\n\n.quote p:before {\n    content: '“';\n    font-size: 50px;\n    opacity: .15;\n    position: absolute;\n    top: -20px;\n    left: 3px;\n}\n\n.quote p:after {\n    content: '”';\n    font-size: 50px;\n    opacity: .15;\n    position: absolute;\n    bottom: -42px;\n    right: 3px;\n}\n\n.quote footer {\n    position: absolute;\n    bottom: -40px;\n    right: 0;\n}\n\n.quote footer img {\n    border-radius: 3px;\n}\n\n.quote footer a {\n    margin-left: 5px;\n    vertical-align: middle;\n}\n\n.speech-bubble {\n    position: relative;\n    padding: 10px;\n    background: rgba(0, 0, 0, .04);\n    border-radius: 5px;\n}\n\n.speech-bubble:after {\n    content: '';\n    position: absolute;\n    top: 100%;\n    right: 30px;\n    border: 13px solid transparent;\n    border-top-color: rgba(0, 0, 0, .04);\n}\n\n.learn-bar>.learn {\n    position: absolute;\n    width: 272px;\n    top: 8px;\n    left: -300px;\n    padding: 10px;\n    border-radius: 5px;\n    background-color: rgba(255, 255, 255, .6);\n    transition-property: left;\n    transition-duration: 500ms;\n}\n\n@media (min-width: 899px) {\n    .learn-bar {\n        width: auto;\n        padding-left: 300px;\n    }\n\n    .learn-bar>.learn {\n        left: 8px;\n    }\n}", "",{"version":3,"sources":["webpack://src/style/main.css"],"names":[],"mappings":"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","sourcesContent":["html,\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n\nh1 {\n    display: block;\n    text-align: center;\n    margin-top: 150px;\n    font-weight: 900;\n    font-size: 80px;\n}\n\n.bg-light {\n    background-color: #ffffff !important;\n}\n\nbutton {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    background: none;\n    font-size: 100%;\n    vertical-align: baseline;\n    font-family: inherit;\n    font-weight: inherit;\n    color: inherit;\n    -webkit-appearance: none;\n    appearance: none;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.btn-outline-primary {\n    margin-right: 10px;\n    color: #DB0707;\n    border: 1px solid #DB0707;\n    background-color: white;\n}\n\n.nav-link {\n    font-size: 20px;\n}\n\na.navbar-brand {\n    font-size: 30px;\n}\n\n.btn-outline-primary:hover {\n    margin-right: 10px;\n    color: white;\n    border: 1px solid #DB0707;\n    background-color: #DB0707;\n}\n\nbody {\n    font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    line-height: 1.4em;\n    background: #ffffff;\n    color: #111111;\n    /* min-width: 230px;\n    max-width: 550px; */\n    margin: 0 auto;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    font-weight: 300;\n}\n\n:focus {\n    outline: 0;\n}\n\n.hidden {\n    display: none;\n}\n\n.todoapp {\n    background: #fff;\n    margin: 50px 0 40px 0;\n    position: relative;\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),\n        0 25px 50px 0 rgba(0, 0, 0, 0.1);\n    min-width: 230px;\n    max-width: 550px;\n}\n\n.todoapp input::-webkit-input-placeholder {\n    font-style: italic;\n    font-weight: 300;\n    color: rgba(0, 0, 0, 0.4);\n}\n\n.todoapp input::-moz-placeholder {\n    font-style: italic;\n    font-weight: 300;\n    color: rgba(0, 0, 0, 0.4);\n}\n\n.todoapp input::input-placeholder {\n    font-style: italic;\n    font-weight: 300;\n    color: rgba(0, 0, 0, 0.4);\n}\n\n.todoapp h1 {\n    position: absolute;\n    top: -140px;\n    width: 100%;\n    font-size: 80px;\n    font-weight: 200;\n    text-align: center;\n    color: #DB0707;\n    -webkit-text-rendering: optimizeLegibility;\n    -moz-text-rendering: optimizeLegibility;\n    text-rendering: optimizeLegibility;\n}\n\n.new-todo,\n.edit {\n    position: relative;\n    margin: 0;\n    width: 130%;\n    font-size: 18px;\n    font-family: inherit;\n    font-weight: inherit;\n    line-height: 1.4em;\n    color: inherit;\n    padding: 6px;\n    border: 1px solid #999;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.new-todo {\n    padding-top: 20px;\n    padding-bottom: 20px;\n    border: none;\n    background: rgba(0, 0, 0, 0.003);\n}\n\n.main {\n    position: relative;\n    z-index: 2;\n    border-top: 1px solid #ffffff;\n}\n\n.toggle-all {\n    width: 30px;\n    height: 30px;\n    left: 5px;\n    border: none;\n    opacity: 0;\n    position: absolute;\n    right: 100%;\n    bottom: 100%;\n    z-index: 2;\n    cursor: pointer;\n}\n\n.toggle-all+label {\n    width: 60px;\n    height: 34px;\n    font-size: 0;\n    position: absolute;\n    top: -43px;\n    left: -13px;\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg);\n}\n\n.toggle-all+label:before {\n    content: '❯';\n    font-size: 22px;\n    color: #ffffff;\n    padding: 10px 27px 10px 27px;\n}\n\n.toggle-all:checked+label:before {\n    color: #737373;\n}\n\n.todo-list {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\n.todo-list li {\n    position: relative;\n    font-size: 24px;\n    border-bottom: 1px solid #ededed;\n}\n\n.todo-list li:last-child {\n    border-bottom: none;\n}\n\n.todo-list li.editing {\n    border-bottom: none;\n    padding: 0;\n}\n\n.todo-list li.editing .edit {\n    display: block;\n    width: calc(100% - 43px);\n    padding: 12px 16px;\n    margin: 0 0 0 43px;\n}\n\n.todo-list li.editing .view {\n    display: none;\n}\n\n.todo-list li .toggle {\n    text-align: center;\n    width: 40px;\n    /* auto, since non-WebKit browsers doesn't support input styling */\n    height: auto;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    margin: auto 0;\n    border: none;\n    /* Mobile Safari */\n    -webkit-appearance: none;\n    appearance: none;\n}\n\n.todo-list li .toggle {\n    opacity: 0;\n}\n\n.todo-list li .toggle+label {\n    /*\n\t\tFirefox requires `#` to be escaped - https://bugzilla.mozilla.org/show_bug.cgi?id=922433\n\t\tIE and Edge requires *everything* to be escaped to render, so we do that instead of just the `#` - https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7157459/\n\t*/\n    background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');\n    background-repeat: no-repeat;\n    background-position: center left;\n}\n\n.todo-list li .toggle:checked+label {\n    background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');\n}\n\n.todo-list li label {\n    word-break: break-all;\n    padding: 15px 15px 15px 60px;\n    display: block;\n    line-height: 1.2;\n    transition: color 0.4s;\n    font-weight: 400;\n    color: #4d4d4d;\n}\n\n.todo-list li.completed label {\n    color: #cdcdcd;\n    text-decoration: line-through;\n}\n\n.todo-list li .destroy {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 10px;\n    bottom: 0;\n    width: 40px;\n    height: 40px;\n    margin: auto 0;\n    font-size: 30px;\n    color: #cc9a9a;\n    margin-bottom: 11px;\n    transition: color 0.2s ease-out;\n}\n\n.todo-list li .destroy:hover {\n    color: #af5b5e;\n}\n\n.todo-list li .destroy:after {\n    content: '×';\n}\n\n.todo-list li:hover .destroy {\n    display: block;\n}\n\n.todo-list li .edit {\n    display: none;\n}\n\n.todo-list li.editing:last-child {\n    margin-bottom: -1px;\n}\n\n.footer {\n    padding: 10px 15px;\n    height: 20px;\n    text-align: center;\n    font-size: 15px;\n    border-top: 1px solid #ffffff;\n}\n\n.footer:before {\n    content: '';\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    height: 50px;\n    overflow: hidden;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),\n        0 8px 0 -3px #f6f6f6,\n        0 9px 1px -3px rgba(0, 0, 0, 0.2),\n        0 16px 0 -6px #f6f6f6,\n        0 17px 2px -6px rgba(0, 0, 0, 0.2);\n}\n\n.todo-count {\n    float: left;\n    text-align: left;\n    margin-top: -15px;\n}\n\n.todo-count strong {\n    font-weight: 300;\n}\n\n.filters {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    position: absolute;\n    right: 0;\n    left: 0;\n    margin-top: -15px;\n}\n\n.filters li {\n    display: inline;\n}\n\n.filters li a {\n    color: inherit;\n    margin: 3px;\n    padding: 3px 7px;\n    text-decoration: none;\n    border: 1px solid transparent;\n    border-radius: 3px;\n}\n\n.filters li a:hover {\n    border-color: rgba(175, 47, 47, 0.1);\n}\n\n.filters li a.selected {\n    border-color: rgba(175, 47, 47, 0.2);\n}\n\n.clear-completed {\n    margin-top: -15px;\n}\n\n.clear-completed,\nhtml .clear-completed:active {\n    float: right;\n    position: relative;\n    line-height: 20px;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.clear-completed:hover {\n    text-decoration: underline;\n}\n\n.info {\n    margin: 65px auto 0;\n    color: #4d4d4d;\n    font-size: 11px;\n    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n    text-align: center;\n}\n\n.info p {\n    line-height: 1;\n}\n\n.info a {\n    color: inherit;\n    text-decoration: none;\n    font-weight: 400;\n}\n\n.info a:hover {\n    text-decoration: underline;\n}\n\n/*\n\tHack to remove background from Mobile Safari.\n\tCan't use it globally since it destroys checkboxes in Firefox\n*/\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n\n    .toggle-all,\n    .todo-list li .toggle {\n        background: none;\n    }\n\n    .todo-list li .toggle {\n        height: 40px;\n    }\n}\n\n@media (max-width: 430px) {\n    .footer {\n        height: 50px;\n    }\n\n    .filters {\n        bottom: 10px;\n    }\n}\n\nhr {\n    margin: 20px 0;\n    border: 0;\n    border-top: 1px dashed #c5c5c5;\n    border-bottom: 1px dashed #f7f7f7;\n}\n\n.learn a {\n    font-weight: normal;\n    text-decoration: none;\n    color: #DB0707;\n}\n\n.learn a:hover {\n    text-decoration: underline;\n    color: #787e7e;\n}\n\n.learn h3,\n.learn h4,\n.learn h5 {\n    margin: 10px 0;\n    font-weight: 500;\n    line-height: 1.2;\n    color: #000;\n}\n\n.learn h3 {\n    font-size: 24px;\n}\n\n.learn h4 {\n    font-size: 18px;\n}\n\n.learn h5 {\n    margin-bottom: 0;\n    font-size: 14px;\n}\n\n.learn ul {\n    padding: 0;\n    margin: 0 0 30px 25px;\n}\n\n.learn li {\n    line-height: 20px;\n}\n\n.learn p {\n    font-size: 15px;\n    font-weight: 300;\n    line-height: 1.3;\n    margin-top: 0;\n    margin-bottom: 0;\n}\n\n#issue-count {\n    display: none;\n}\n\n.quote {\n    border: none;\n    margin: 20px 0 60px 0;\n}\n\n.quote p {\n    font-style: italic;\n}\n\n.quote p:before {\n    content: '“';\n    font-size: 50px;\n    opacity: .15;\n    position: absolute;\n    top: -20px;\n    left: 3px;\n}\n\n.quote p:after {\n    content: '”';\n    font-size: 50px;\n    opacity: .15;\n    position: absolute;\n    bottom: -42px;\n    right: 3px;\n}\n\n.quote footer {\n    position: absolute;\n    bottom: -40px;\n    right: 0;\n}\n\n.quote footer img {\n    border-radius: 3px;\n}\n\n.quote footer a {\n    margin-left: 5px;\n    vertical-align: middle;\n}\n\n.speech-bubble {\n    position: relative;\n    padding: 10px;\n    background: rgba(0, 0, 0, .04);\n    border-radius: 5px;\n}\n\n.speech-bubble:after {\n    content: '';\n    position: absolute;\n    top: 100%;\n    right: 30px;\n    border: 13px solid transparent;\n    border-top-color: rgba(0, 0, 0, .04);\n}\n\n.learn-bar>.learn {\n    position: absolute;\n    width: 272px;\n    top: 8px;\n    left: -300px;\n    padding: 10px;\n    border-radius: 5px;\n    background-color: rgba(255, 255, 255, .6);\n    transition-property: left;\n    transition-duration: 500ms;\n}\n\n@media (min-width: 899px) {\n    .learn-bar {\n        width: auto;\n        padding-left: 300px;\n    }\n\n    .learn-bar>.learn {\n        left: 8px;\n    }\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltZy90b2RvLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS9tYWluLmNzcz84MzMxIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQWUsb0ZBQXVCLCtDQUErQyxFOzs7Ozs7Ozs7Ozs7QUNBckY7QUFBQTtBQUFBO0FBQUE7QUFDNEY7QUFDNUYsOEJBQThCLG1GQUEyQjtBQUN6RDtBQUNBLDhCQUE4QixRQUFTLGdCQUFnQixnQkFBZ0IsaUJBQWlCLEdBQUcsVUFBVSxxQkFBcUIseUJBQXlCLHdCQUF3Qix1QkFBdUIsc0JBQXNCLEdBQUcsZUFBZSwyQ0FBMkMsR0FBRyxZQUFZLGdCQUFnQixpQkFBaUIsZ0JBQWdCLHVCQUF1QixzQkFBc0IsK0JBQStCLDJCQUEyQiwyQkFBMkIscUJBQXFCLCtCQUErQix1QkFBdUIsMENBQTBDLHlDQUF5QyxHQUFHLDBCQUEwQix5QkFBeUIscUJBQXFCLGdDQUFnQyw4QkFBOEIsR0FBRyxlQUFlLHNCQUFzQixHQUFHLG9CQUFvQixzQkFBc0IsR0FBRyxnQ0FBZ0MseUJBQXlCLG1CQUFtQixnQ0FBZ0MsZ0NBQWdDLEdBQUcsVUFBVSxnRUFBZ0UseUJBQXlCLDBCQUEwQixxQkFBcUIsMEJBQTBCLHVCQUF1Qix3QkFBd0IsMENBQTBDLHlDQUF5Qyx1QkFBdUIsR0FBRyxZQUFZLGlCQUFpQixHQUFHLGFBQWEsb0JBQW9CLEdBQUcsY0FBYyx1QkFBdUIsNEJBQTRCLHlCQUF5Qiw0RkFBNEYsdUJBQXVCLHVCQUF1QixHQUFHLCtDQUErQyx5QkFBeUIsdUJBQXVCLGdDQUFnQyxHQUFHLHNDQUFzQyx5QkFBeUIsdUJBQXVCLGdDQUFnQyxHQUFHLHVDQUF1Qyx5QkFBeUIsdUJBQXVCLGdDQUFnQyxHQUFHLGlCQUFpQix5QkFBeUIsa0JBQWtCLGtCQUFrQixzQkFBc0IsdUJBQXVCLHlCQUF5QixxQkFBcUIsaURBQWlELDhDQUE4Qyx5Q0FBeUMsR0FBRyx1QkFBdUIseUJBQXlCLGdCQUFnQixrQkFBa0Isc0JBQXNCLDJCQUEyQiwyQkFBMkIseUJBQXlCLHFCQUFxQixtQkFBbUIsNkJBQTZCLDZCQUE2QiwwQ0FBMEMseUNBQXlDLEdBQUcsZUFBZSx3QkFBd0IsMkJBQTJCLG1CQUFtQix1Q0FBdUMsR0FBRyxXQUFXLHlCQUF5QixpQkFBaUIsb0NBQW9DLEdBQUcsaUJBQWlCLGtCQUFrQixtQkFBbUIsZ0JBQWdCLG1CQUFtQixpQkFBaUIseUJBQXlCLGtCQUFrQixtQkFBbUIsaUJBQWlCLHNCQUFzQixHQUFHLHVCQUF1QixrQkFBa0IsbUJBQW1CLG1CQUFtQix5QkFBeUIsaUJBQWlCLGtCQUFrQix1Q0FBdUMsK0JBQStCLEdBQUcsOEJBQThCLG1CQUFtQixzQkFBc0IscUJBQXFCLG1DQUFtQyxHQUFHLHNDQUFzQyxxQkFBcUIsR0FBRyxnQkFBZ0IsZ0JBQWdCLGlCQUFpQix1QkFBdUIsR0FBRyxtQkFBbUIseUJBQXlCLHNCQUFzQix1Q0FBdUMsR0FBRyw4QkFBOEIsMEJBQTBCLEdBQUcsMkJBQTJCLDBCQUEwQixpQkFBaUIsR0FBRyxpQ0FBaUMscUJBQXFCLCtCQUErQix5QkFBeUIseUJBQXlCLEdBQUcsaUNBQWlDLG9CQUFvQixHQUFHLDJCQUEyQix5QkFBeUIsa0JBQWtCLDRGQUE0Rix5QkFBeUIsYUFBYSxnQkFBZ0IscUJBQXFCLG1CQUFtQix3REFBd0QsdUJBQXVCLEdBQUcsMkJBQTJCLGlCQUFpQixHQUFHLGlDQUFpQyxrVkFBa1YsMlJBQTJSLG1DQUFtQyx1Q0FBdUMsR0FBRyx5Q0FBeUMsZ0RBQWdELGdZQUFnWSxHQUFHLHlCQUF5Qiw0QkFBNEIsbUNBQW1DLHFCQUFxQix1QkFBdUIsNkJBQTZCLHVCQUF1QixxQkFBcUIsR0FBRyxtQ0FBbUMscUJBQXFCLG9DQUFvQyxHQUFHLDRCQUE0QixvQkFBb0IseUJBQXlCLGFBQWEsa0JBQWtCLGdCQUFnQixrQkFBa0IsbUJBQW1CLHFCQUFxQixzQkFBc0IscUJBQXFCLDBCQUEwQixzQ0FBc0MsR0FBRyxrQ0FBa0MscUJBQXFCLEdBQUcsa0NBQWtDLG1CQUFtQixHQUFHLGtDQUFrQyxxQkFBcUIsR0FBRyx5QkFBeUIsb0JBQW9CLEdBQUcsc0NBQXNDLDBCQUEwQixHQUFHLGFBQWEseUJBQXlCLG1CQUFtQix5QkFBeUIsc0JBQXNCLG9DQUFvQyxHQUFHLG9CQUFvQixrQkFBa0IseUJBQXlCLGVBQWUsZ0JBQWdCLGNBQWMsbUJBQW1CLHVCQUF1Qix1TUFBdU0sR0FBRyxpQkFBaUIsa0JBQWtCLHVCQUF1Qix3QkFBd0IsR0FBRyx3QkFBd0IsdUJBQXVCLEdBQUcsY0FBYyxnQkFBZ0IsaUJBQWlCLHVCQUF1Qix5QkFBeUIsZUFBZSxjQUFjLHdCQUF3QixHQUFHLGlCQUFpQixzQkFBc0IsR0FBRyxtQkFBbUIscUJBQXFCLGtCQUFrQix1QkFBdUIsNEJBQTRCLG9DQUFvQyx5QkFBeUIsR0FBRyx5QkFBeUIsMkNBQTJDLEdBQUcsNEJBQTRCLDJDQUEyQyxHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxxREFBcUQsbUJBQW1CLHlCQUF5Qix3QkFBd0IsNEJBQTRCLHNCQUFzQixHQUFHLDRCQUE0QixpQ0FBaUMsR0FBRyxXQUFXLDBCQUEwQixxQkFBcUIsc0JBQXNCLG9EQUFvRCx5QkFBeUIsR0FBRyxhQUFhLHFCQUFxQixHQUFHLGFBQWEscUJBQXFCLDRCQUE0Qix1QkFBdUIsR0FBRyxtQkFBbUIsaUNBQWlDLEdBQUcscUxBQXFMLGlEQUFpRCwyQkFBMkIsT0FBTywrQkFBK0IsdUJBQXVCLE9BQU8sR0FBRywrQkFBK0IsZUFBZSx1QkFBdUIsT0FBTyxrQkFBa0IsdUJBQXVCLE9BQU8sR0FBRyxRQUFRLHFCQUFxQixnQkFBZ0IscUNBQXFDLHdDQUF3QyxHQUFHLGNBQWMsMEJBQTBCLDRCQUE0QixxQkFBcUIsR0FBRyxvQkFBb0IsaUNBQWlDLHFCQUFxQixHQUFHLHVDQUF1QyxxQkFBcUIsdUJBQXVCLHVCQUF1QixrQkFBa0IsR0FBRyxlQUFlLHNCQUFzQixHQUFHLGVBQWUsc0JBQXNCLEdBQUcsZUFBZSx1QkFBdUIsc0JBQXNCLEdBQUcsZUFBZSxpQkFBaUIsNEJBQTRCLEdBQUcsZUFBZSx3QkFBd0IsR0FBRyxjQUFjLHNCQUFzQix1QkFBdUIsdUJBQXVCLG9CQUFvQix1QkFBdUIsR0FBRyxrQkFBa0Isb0JBQW9CLEdBQUcsWUFBWSxtQkFBbUIsNEJBQTRCLEdBQUcsY0FBYyx5QkFBeUIsR0FBRyxxQkFBcUIsbUJBQW1CLHNCQUFzQixtQkFBbUIseUJBQXlCLGlCQUFpQixnQkFBZ0IsR0FBRyxvQkFBb0IsbUJBQW1CLHNCQUFzQixtQkFBbUIseUJBQXlCLG9CQUFvQixpQkFBaUIsR0FBRyxtQkFBbUIseUJBQXlCLG9CQUFvQixlQUFlLEdBQUcsdUJBQXVCLHlCQUF5QixHQUFHLHFCQUFxQix1QkFBdUIsNkJBQTZCLEdBQUcsb0JBQW9CLHlCQUF5QixvQkFBb0IscUNBQXFDLHlCQUF5QixHQUFHLDBCQUEwQixrQkFBa0IseUJBQXlCLGdCQUFnQixrQkFBa0IscUNBQXFDLDJDQUEyQyxHQUFHLHVCQUF1Qix5QkFBeUIsbUJBQW1CLGVBQWUsbUJBQW1CLG9CQUFvQix5QkFBeUIsZ0RBQWdELGdDQUFnQyxpQ0FBaUMsR0FBRywrQkFBK0Isa0JBQWtCLHNCQUFzQiw4QkFBOEIsT0FBTywyQkFBMkIsb0JBQW9CLE9BQU8sR0FBRyxPQUFPLG9GQUFvRixVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLE9BQU8sV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxPQUFPLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxTQUFTLE9BQU8sT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxLQUFLLE1BQU0sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sT0FBTyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxL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LE9BQU87QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLFUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXBwLmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIiBpbWcgL2M4NGQ4ZWZiYzg2MGJiZjAwNzVlNTkzMjg0NzljYzIyLnBuZ1wiOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuXFxuaDEge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZm9udC1zaXplOiA4MHB4O1xcbn1cXG5cXG4uYmctbGlnaHQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG59XFxuXFxuLmJ0bi1vdXRsaW5lLXByaW1hcnkge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIGNvbG9yOiAjREIwNzA3O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjREIwNzA3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm5hdi1saW5rIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG5hLm5hdmJhci1icmFuZCB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLmJ0bi1vdXRsaW5lLXByaW1hcnk6aG92ZXIge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0RCMDcwNztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RCMDcwNztcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQ6IDE0cHggJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNGVtO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgICBjb2xvcjogIzExMTExMTtcXG4gICAgLyogbWluLXdpZHRoOiAyMzBweDtcXG4gICAgbWF4LXdpZHRoOiA1NTBweDsgKi9cXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG46Zm9jdXMge1xcbiAgICBvdXRsaW5lOiAwO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG9hcHAge1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBtYXJnaW46IDUwcHggMCA0MHB4IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLFxcbiAgICAgICAgMCAyNXB4IDUwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIG1pbi13aWR0aDogMjMwcHg7XFxuICAgIG1heC13aWR0aDogNTUwcHg7XFxufVxcblxcbi50b2RvYXBwIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG4udG9kb2FwcCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG59XFxuXFxuLnRvZG9hcHAgaW5wdXQ6OmlucHV0LXBsYWNlaG9sZGVyIHtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG4udG9kb2FwcCBoMSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtMTQwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDgwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6ICNEQjA3MDc7XFxuICAgIC13ZWJraXQtdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcXG4gICAgLW1vei10ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcbiAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcbn1cXG5cXG4ubmV3LXRvZG8sXFxuLmVkaXQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgd2lkdGg6IDEzMCU7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbiAgICBsaW5lLWhlaWdodDogMS40ZW07XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBwYWRkaW5nOiA2cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbn1cXG5cXG4ubmV3LXRvZG8ge1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAwMyk7XFxufVxcblxcbi5tYWluIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZmZmZmZjtcXG59XFxuXFxuLnRvZ2dsZS1hbGwge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBsZWZ0OiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMTAwJTtcXG4gICAgYm90dG9tOiAxMDAlO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2dnbGUtYWxsK2xhYmVsIHtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogMzRweDtcXG4gICAgZm9udC1zaXplOiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTQzcHg7XFxuICAgIGxlZnQ6IC0xM3B4O1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4udG9nZ2xlLWFsbCtsYWJlbDpiZWZvcmUge1xcbiAgICBjb250ZW50OiAn4p2vJztcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgcGFkZGluZzogMTBweCAyN3B4IDEwcHggMjdweDtcXG59XFxuXFxuLnRvZ2dsZS1hbGw6Y2hlY2tlZCtsYWJlbDpiZWZvcmUge1xcbiAgICBjb2xvcjogIzczNzM3MztcXG59XFxuXFxuLnRvZG8tbGlzdCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnRvZG8tbGlzdCBsaSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VkZWRlZDtcXG59XFxuXFxuLnRvZG8tbGlzdCBsaTpsYXN0LWNoaWxkIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuXFxuLnRvZG8tbGlzdCBsaS5lZGl0aW5nIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLnRvZG8tbGlzdCBsaS5lZGl0aW5nIC5lZGl0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0M3B4KTtcXG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xcbiAgICBtYXJnaW46IDAgMCAwIDQzcHg7XFxufVxcblxcbi50b2RvLWxpc3QgbGkuZWRpdGluZyAudmlldyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvLWxpc3QgbGkgLnRvZ2dsZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIC8qIGF1dG8sIHNpbmNlIG5vbi1XZWJLaXQgYnJvd3NlcnMgZG9lc24ndCBzdXBwb3J0IGlucHV0IHN0eWxpbmcgKi9cXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBtYXJnaW46IGF1dG8gMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICAvKiBNb2JpbGUgU2FmYXJpICovXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLnRvZG8tbGlzdCBsaSAudG9nZ2xlIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnRvZG8tbGlzdCBsaSAudG9nZ2xlK2xhYmVsIHtcXG4gICAgLypcXG5cXHRcXHRGaXJlZm94IHJlcXVpcmVzIGAjYCB0byBiZSBlc2NhcGVkIC0gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9OTIyNDMzXFxuXFx0XFx0SUUgYW5kIEVkZ2UgcmVxdWlyZXMgKmV2ZXJ5dGhpbmcqIHRvIGJlIGVzY2FwZWQgdG8gcmVuZGVyLCBzbyB3ZSBkbyB0aGF0IGluc3RlYWQgb2YganVzdCB0aGUgYCNgIC0gaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtZWRnZS9wbGF0Zm9ybS9pc3N1ZXMvNzE1NzQ1OS9cXG5cXHQqL1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LCUzQ3N2ZyUyMHhtbG5zJTNEJTIyaHR0cCUzQS8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyMiUyMHdpZHRoJTNEJTIyNDAlMjIlMjBoZWlnaHQlM0QlMjI0MCUyMiUyMHZpZXdCb3glM0QlMjItMTAlMjAtMTglMjAxMDAlMjAxMzUlMjIlM0UlM0NjaXJjbGUlMjBjeCUzRCUyMjUwJTIyJTIwY3klM0QlMjI1MCUyMiUyMHIlM0QlMjI1MCUyMiUyMGZpbGwlM0QlMjJub25lJTIyJTIwc3Ryb2tlJTNEJTIyJTIzZWRlZGVkJTIyJTIwc3Ryb2tlLXdpZHRoJTNEJTIyMyUyMi8lM0UlM0Mvc3ZnJTNFJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBsZWZ0O1xcbn1cXG5cXG4udG9kby1saXN0IGxpIC50b2dnbGU6Y2hlY2tlZCtsYWJlbCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsJTNDc3ZnJTIweG1sbnMlM0QlMjJodHRwJTNBLy93d3cudzMub3JnLzIwMDAvc3ZnJTIyJTIwd2lkdGglM0QlMjI0MCUyMiUyMGhlaWdodCUzRCUyMjQwJTIyJTIwdmlld0JveCUzRCUyMi0xMCUyMC0xOCUyMDEwMCUyMDEzNSUyMiUzRSUzQ2NpcmNsZSUyMGN4JTNEJTIyNTAlMjIlMjBjeSUzRCUyMjUwJTIyJTIwciUzRCUyMjUwJTIyJTIwZmlsbCUzRCUyMm5vbmUlMjIlMjBzdHJva2UlM0QlMjIlMjNiZGRhZDUlMjIlMjBzdHJva2Utd2lkdGglM0QlMjIzJTIyLyUzRSUzQ3BhdGglMjBmaWxsJTNEJTIyJTIzNWRjMmFmJTIyJTIwZCUzRCUyMk03MiUyMDI1TDQyJTIwNzElMjAyNyUyMDU2bC00JTIwNCUyMDIwJTIwMjAlMjAzNC01MnolMjIvJTNFJTNDL3N2ZyUzRScpO1xcbn1cXG5cXG4udG9kby1saXN0IGxpIGxhYmVsIHtcXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCA2MHB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC40cztcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgY29sb3I6ICM0ZDRkNGQ7XFxufVxcblxcbi50b2RvLWxpc3QgbGkuY29tcGxldGVkIGxhYmVsIHtcXG4gICAgY29sb3I6ICNjZGNkY2Q7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4udG9kby1saXN0IGxpIC5kZXN0cm95IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAxMHB4O1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIG1hcmdpbjogYXV0byAwO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGNvbG9yOiAjY2M5YTlhO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMXB4O1xcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2Utb3V0O1xcbn1cXG5cXG4udG9kby1saXN0IGxpIC5kZXN0cm95OmhvdmVyIHtcXG4gICAgY29sb3I6ICNhZjViNWU7XFxufVxcblxcbi50b2RvLWxpc3QgbGkgLmRlc3Ryb3k6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnw5cnO1xcbn1cXG5cXG4udG9kby1saXN0IGxpOmhvdmVyIC5kZXN0cm95IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi50b2RvLWxpc3QgbGkgLmVkaXQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kby1saXN0IGxpLmVkaXRpbmc6bGFzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmZmZmZmO1xcbn1cXG5cXG4uZm9vdGVyOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcXG4gICAgICAgIDAgOHB4IDAgLTNweCAjZjZmNmY2LFxcbiAgICAgICAgMCA5cHggMXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxcbiAgICAgICAgMCAxNnB4IDAgLTZweCAjZjZmNmY2LFxcbiAgICAgICAgMCAxN3B4IDJweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuLnRvZG8tY291bnQge1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XFxufVxcblxcbi50b2RvLWNvdW50IHN0cm9uZyB7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbi5maWx0ZXJzIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcXG59XFxuXFxuLmZpbHRlcnMgbGkge1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbi5maWx0ZXJzIGxpIGEge1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgbWFyZ2luOiAzcHg7XFxuICAgIHBhZGRpbmc6IDNweCA3cHg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLmZpbHRlcnMgbGkgYTpob3ZlciB7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgxNzUsIDQ3LCA0NywgMC4xKTtcXG59XFxuXFxuLmZpbHRlcnMgbGkgYS5zZWxlY3RlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgxNzUsIDQ3LCA0NywgMC4yKTtcXG59XFxuXFxuLmNsZWFyLWNvbXBsZXRlZCB7XFxuICAgIG1hcmdpbi10b3A6IC0xNXB4O1xcbn1cXG5cXG4uY2xlYXItY29tcGxldGVkLFxcbmh0bWwgLmNsZWFyLWNvbXBsZXRlZDphY3RpdmUge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2xlYXItY29tcGxldGVkOmhvdmVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5pbmZvIHtcXG4gICAgbWFyZ2luOiA2NXB4IGF1dG8gMDtcXG4gICAgY29sb3I6ICM0ZDRkNGQ7XFxuICAgIGZvbnQtc2l6ZTogMTFweDtcXG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5pbmZvIHAge1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxuLmluZm8gYSB7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5pbmZvIGE6aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLypcXG5cXHRIYWNrIHRvIHJlbW92ZSBiYWNrZ3JvdW5kIGZyb20gTW9iaWxlIFNhZmFyaS5cXG5cXHRDYW4ndCB1c2UgaXQgZ2xvYmFsbHkgc2luY2UgaXQgZGVzdHJveXMgY2hlY2tib3hlcyBpbiBGaXJlZm94XFxuKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAwKSB7XFxuXFxuICAgIC50b2dnbGUtYWxsLFxcbiAgICAudG9kby1saXN0IGxpIC50b2dnbGUge1xcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgfVxcblxcbiAgICAudG9kby1saXN0IGxpIC50b2dnbGUge1xcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0MzBweCkge1xcbiAgICAuZm9vdGVyIHtcXG4gICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgfVxcblxcbiAgICAuZmlsdGVycyB7XFxuICAgICAgICBib3R0b206IDEwcHg7XFxuICAgIH1cXG59XFxuXFxuaHIge1xcbiAgICBtYXJnaW46IDIwcHggMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3JkZXItdG9wOiAxcHggZGFzaGVkICNjNWM1YzU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2Y3ZjdmNztcXG59XFxuXFxuLmxlYXJuIGEge1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiAjREIwNzA3O1xcbn1cXG5cXG4ubGVhcm4gYTpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBjb2xvcjogIzc4N2U3ZTtcXG59XFxuXFxuLmxlYXJuIGgzLFxcbi5sZWFybiBoNCxcXG4ubGVhcm4gaDUge1xcbiAgICBtYXJnaW46IDEwcHggMDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcXG4gICAgY29sb3I6ICMwMDA7XFxufVxcblxcbi5sZWFybiBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLmxlYXJuIGg0IHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4ubGVhcm4gaDUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5sZWFybiB1bCB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMCAwIDMwcHggMjVweDtcXG59XFxuXFxuLmxlYXJuIGxpIHtcXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxufVxcblxcbi5sZWFybiBwIHtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBsaW5lLWhlaWdodDogMS4zO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4jaXNzdWUtY291bnQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucXVvdGUge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG1hcmdpbjogMjBweCAwIDYwcHggMDtcXG59XFxuXFxuLnF1b3RlIHAge1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5xdW90ZSBwOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICfigJwnO1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIG9wYWNpdHk6IC4xNTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC0yMHB4O1xcbiAgICBsZWZ0OiAzcHg7XFxufVxcblxcbi5xdW90ZSBwOmFmdGVyIHtcXG4gICAgY29udGVudDogJ+KAnSc7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgb3BhY2l0eTogLjE1O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogLTQycHg7XFxuICAgIHJpZ2h0OiAzcHg7XFxufVxcblxcbi5xdW90ZSBmb290ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogLTQwcHg7XFxuICAgIHJpZ2h0OiAwO1xcbn1cXG5cXG4ucXVvdGUgZm9vdGVyIGltZyB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLnF1b3RlIGZvb3RlciBhIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLnNwZWVjaC1idWJibGUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjA0KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uc3BlZWNoLWJ1YmJsZTphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTAwJTtcXG4gICAgcmlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlcjogMTNweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMDQpO1xcbn1cXG5cXG4ubGVhcm4tYmFyPi5sZWFybiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDI3MnB4O1xcbiAgICB0b3A6IDhweDtcXG4gICAgbGVmdDogLTMwMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjYpO1xcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDg5OXB4KSB7XFxuICAgIC5sZWFybi1iYXIge1xcbiAgICAgICAgd2lkdGg6IGF1dG87XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwMHB4O1xcbiAgICB9XFxuXFxuICAgIC5sZWFybi1iYXI+LmxlYXJuIHtcXG4gICAgICAgIGxlZnQ6IDhweDtcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3N0eWxlL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztJQUVJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7OztBQUdBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsZ0JB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LFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsUUFBUTtBQUNaOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixRQUFRO0lBQ1IsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIseUNBQXlDO0lBQ3pDLHlCQUF5QjtJQUN6QiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSTtRQUNJLFdBQVc7UUFDWCxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxTQUFTO0lBQ2I7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLFxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcblxcbmgxIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGZvbnQtc2l6ZTogODBweDtcXG59XFxuXFxuLmJnLWxpZ2h0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxufVxcblxcbi5idG4tb3V0bGluZS1wcmltYXJ5IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICBjb2xvcjogI0RCMDcwNztcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0RCMDcwNztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5uYXYtbGluayB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuYS5uYXZiYXItYnJhbmQge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcbi5idG4tb3V0bGluZS1wcmltYXJ5OmhvdmVyIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEQjA3MDc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEQjA3MDc7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250OiAxNHB4ICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjRlbTtcXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gICAgY29sb3I6ICMxMTExMTE7XFxuICAgIC8qIG1pbi13aWR0aDogMjMwcHg7XFxuICAgIG1heC13aWR0aDogNTUwcHg7ICovXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuOmZvY3VzIHtcXG4gICAgb3V0bGluZTogMDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvYXBwIHtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgbWFyZ2luOiA1MHB4IDAgNDBweCAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSxcXG4gICAgICAgIDAgMjVweCA1MHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBtaW4td2lkdGg6IDIzMHB4O1xcbiAgICBtYXgtd2lkdGg6IDU1MHB4O1xcbn1cXG5cXG4udG9kb2FwcCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG59XFxuXFxuLnRvZG9hcHAgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcblxcbi50b2RvYXBwIGlucHV0OjppbnB1dC1wbGFjZWhvbGRlciB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG59XFxuXFxuLnRvZG9hcHAgaDEge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTE0MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiA4MHB4O1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjREIwNzA3O1xcbiAgICAtd2Via2l0LXRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XFxuICAgIC1tb3otdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcXG4gICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcXG59XFxuXFxuLm5ldy10b2RvLFxcbi5lZGl0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHdpZHRoOiAxMzAlO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNGVtO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgcGFkZGluZzogNnB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG59XFxuXFxuLm5ldy10b2RvIHtcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMDMpO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZmZmZmY7XFxufVxcblxcbi50b2dnbGUtYWxsIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgbGVmdDogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDEwMCU7XFxuICAgIGJvdHRvbTogMTAwJTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9nZ2xlLWFsbCtsYWJlbCB7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDM0cHg7XFxuICAgIGZvbnQtc2l6ZTogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC00M3B4O1xcbiAgICBsZWZ0OiAtMTNweDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuLnRvZ2dsZS1hbGwrbGFiZWw6YmVmb3JlIHtcXG4gICAgY29udGVudDogJ+Kdryc7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIHBhZGRpbmc6IDEwcHggMjdweCAxMHB4IDI3cHg7XFxufVxcblxcbi50b2dnbGUtYWxsOmNoZWNrZWQrbGFiZWw6YmVmb3JlIHtcXG4gICAgY29sb3I6ICM3MzczNzM7XFxufVxcblxcbi50b2RvLWxpc3Qge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi50b2RvLWxpc3QgbGkge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZGVkZWQ7XFxufVxcblxcbi50b2RvLWxpc3QgbGk6bGFzdC1jaGlsZCB7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcblxcbi50b2RvLWxpc3QgbGkuZWRpdGluZyB7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi50b2RvLWxpc3QgbGkuZWRpdGluZyAuZWRpdCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNDNweCk7XFxuICAgIHBhZGRpbmc6IDEycHggMTZweDtcXG4gICAgbWFyZ2luOiAwIDAgMCA0M3B4O1xcbn1cXG5cXG4udG9kby1saXN0IGxpLmVkaXRpbmcgLnZpZXcge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kby1saXN0IGxpIC50b2dnbGUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICAvKiBhdXRvLCBzaW5jZSBub24tV2ViS2l0IGJyb3dzZXJzIGRvZXNuJ3Qgc3VwcG9ydCBpbnB1dCBzdHlsaW5nICovXFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbWFyZ2luOiBhdXRvIDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgLyogTW9iaWxlIFNhZmFyaSAqL1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi50b2RvLWxpc3QgbGkgLnRvZ2dsZSB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi50b2RvLWxpc3QgbGkgLnRvZ2dsZStsYWJlbCB7XFxuICAgIC8qXFxuXFx0XFx0RmlyZWZveCByZXF1aXJlcyBgI2AgdG8gYmUgZXNjYXBlZCAtIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTkyMjQzM1xcblxcdFxcdElFIGFuZCBFZGdlIHJlcXVpcmVzICpldmVyeXRoaW5nKiB0byBiZSBlc2NhcGVkIHRvIHJlbmRlciwgc28gd2UgZG8gdGhhdCBpbnN0ZWFkIG9mIGp1c3QgdGhlIGAjYCAtIGh0dHBzOi8vZGV2ZWxvcGVyLm1pY3Jvc29mdC5jb20vZW4tdXMvbWljcm9zb2Z0LWVkZ2UvcGxhdGZvcm0vaXNzdWVzLzcxNTc0NTkvXFxuXFx0Ki9cXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCwlM0NzdmclMjB4bWxucyUzRCUyMmh0dHAlM0EvL3d3dy53My5vcmcvMjAwMC9zdmclMjIlMjB3aWR0aCUzRCUyMjQwJTIyJTIwaGVpZ2h0JTNEJTIyNDAlMjIlMjB2aWV3Qm94JTNEJTIyLTEwJTIwLTE4JTIwMTAwJTIwMTM1JTIyJTNFJTNDY2lyY2xlJTIwY3glM0QlMjI1MCUyMiUyMGN5JTNEJTIyNTAlMjIlMjByJTNEJTIyNTAlMjIlMjBmaWxsJTNEJTIybm9uZSUyMiUyMHN0cm9rZSUzRCUyMiUyM2VkZWRlZCUyMiUyMHN0cm9rZS13aWR0aCUzRCUyMjMlMjIvJTNFJTNDL3N2ZyUzRScpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgbGVmdDtcXG59XFxuXFxuLnRvZG8tbGlzdCBsaSAudG9nZ2xlOmNoZWNrZWQrbGFiZWwge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LCUzQ3N2ZyUyMHhtbG5zJTNEJTIyaHR0cCUzQS8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyMiUyMHdpZHRoJTNEJTIyNDAlMjIlMjBoZWlnaHQlM0QlMjI0MCUyMiUyMHZpZXdCb3glM0QlMjItMTAlMjAtMTglMjAxMDAlMjAxMzUlMjIlM0UlM0NjaXJjbGUlMjBjeCUzRCUyMjUwJTIyJTIwY3klM0QlMjI1MCUyMiUyMHIlM0QlMjI1MCUyMiUyMGZpbGwlM0QlMjJub25lJTIyJTIwc3Ryb2tlJTNEJTIyJTIzYmRkYWQ1JTIyJTIwc3Ryb2tlLXdpZHRoJTNEJTIyMyUyMi8lM0UlM0NwYXRoJTIwZmlsbCUzRCUyMiUyMzVkYzJhZiUyMiUyMGQlM0QlMjJNNzIlMjAyNUw0MiUyMDcxJTIwMjclMjA1NmwtNCUyMDQlMjAyMCUyMDIwJTIwMzQtNTJ6JTIyLyUzRSUzQy9zdmclM0UnKTtcXG59XFxuXFxuLnRvZG8tbGlzdCBsaSBsYWJlbCB7XFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG4gICAgcGFkZGluZzogMTVweCAxNXB4IDE1cHggNjBweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuNHM7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGNvbG9yOiAjNGQ0ZDRkO1xcbn1cXG5cXG4udG9kby1saXN0IGxpLmNvbXBsZXRlZCBsYWJlbCB7XFxuICAgIGNvbG9yOiAjY2RjZGNkO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRvZG8tbGlzdCBsaSAuZGVzdHJveSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMTBweDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBtYXJnaW46IGF1dG8gMDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBjb2xvcjogI2NjOWE5YTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTFweDtcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLW91dDtcXG59XFxuXFxuLnRvZG8tbGlzdCBsaSAuZGVzdHJveTpob3ZlciB7XFxuICAgIGNvbG9yOiAjYWY1YjVlO1xcbn1cXG5cXG4udG9kby1saXN0IGxpIC5kZXN0cm95OmFmdGVyIHtcXG4gICAgY29udGVudDogJ8OXJztcXG59XFxuXFxuLnRvZG8tbGlzdCBsaTpob3ZlciAuZGVzdHJveSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4udG9kby1saXN0IGxpIC5lZGl0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG8tbGlzdCBsaS5lZGl0aW5nOmxhc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZmZmZmZjtcXG59XFxuXFxuLmZvb3RlcjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMiksXFxuICAgICAgICAwIDhweCAwIC0zcHggI2Y2ZjZmNixcXG4gICAgICAgIDAgOXB4IDFweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcXG4gICAgICAgIDAgMTZweCAwIC02cHggI2Y2ZjZmNixcXG4gICAgICAgIDAgMTdweCAycHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbi50b2RvLWNvdW50IHtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIG1hcmdpbi10b3A6IC0xNXB4O1xcbn1cXG5cXG4udG9kby1jb3VudCBzdHJvbmcge1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG4uZmlsdGVycyB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XFxufVxcblxcbi5maWx0ZXJzIGxpIHtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG4uZmlsdGVycyBsaSBhIHtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIG1hcmdpbjogM3B4O1xcbiAgICBwYWRkaW5nOiAzcHggN3B4O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5maWx0ZXJzIGxpIGE6aG92ZXIge1xcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMTc1LCA0NywgNDcsIDAuMSk7XFxufVxcblxcbi5maWx0ZXJzIGxpIGEuc2VsZWN0ZWQge1xcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMTc1LCA0NywgNDcsIDAuMik7XFxufVxcblxcbi5jbGVhci1jb21wbGV0ZWQge1xcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcXG59XFxuXFxuLmNsZWFyLWNvbXBsZXRlZCxcXG5odG1sIC5jbGVhci1jb21wbGV0ZWQ6YWN0aXZlIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNsZWFyLWNvbXBsZXRlZDpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4uaW5mbyB7XFxuICAgIG1hcmdpbjogNjVweCBhdXRvIDA7XFxuICAgIGNvbG9yOiAjNGQ0ZDRkO1xcbiAgICBmb250LXNpemU6IDExcHg7XFxuICAgIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaW5mbyBwIHtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbi5pbmZvIGEge1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uaW5mbyBhOmhvdmVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi8qXFxuXFx0SGFjayB0byByZW1vdmUgYmFja2dyb3VuZCBmcm9tIE1vYmlsZSBTYWZhcmkuXFxuXFx0Q2FuJ3QgdXNlIGl0IGdsb2JhbGx5IHNpbmNlIGl0IGRlc3Ryb3lzIGNoZWNrYm94ZXMgaW4gRmlyZWZveFxcbiovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMCkge1xcblxcbiAgICAudG9nZ2xlLWFsbCxcXG4gICAgLnRvZG8tbGlzdCBsaSAudG9nZ2xlIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLnRvZG8tbGlzdCBsaSAudG9nZ2xlIHtcXG4gICAgICAgIGhlaWdodDogNDBweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNDMwcHgpIHtcXG4gICAgLmZvb3RlciB7XFxuICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIH1cXG5cXG4gICAgLmZpbHRlcnMge1xcbiAgICAgICAgYm90dG9tOiAxMHB4O1xcbiAgICB9XFxufVxcblxcbmhyIHtcXG4gICAgbWFyZ2luOiAyMHB4IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IGRhc2hlZCAjYzVjNWM1O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNmN2Y3Zjc7XFxufVxcblxcbi5sZWFybiBhIHtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogI0RCMDcwNztcXG59XFxuXFxuLmxlYXJuIGE6aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgY29sb3I6ICM3ODdlN2U7XFxufVxcblxcbi5sZWFybiBoMyxcXG4ubGVhcm4gaDQsXFxuLmxlYXJuIGg1IHtcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XFxuICAgIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4ubGVhcm4gaDMge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi5sZWFybiBoNCB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLmxlYXJuIGg1IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4ubGVhcm4gdWwge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDAgMCAzMHB4IDI1cHg7XFxufVxcblxcbi5sZWFybiBsaSB7XFxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4ubGVhcm4gcCB7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMztcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuI2lzc3VlLWNvdW50IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnF1b3RlIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBtYXJnaW46IDIwcHggMCA2MHB4IDA7XFxufVxcblxcbi5xdW90ZSBwIHtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4ucXVvdGUgcDpiZWZvcmUge1xcbiAgICBjb250ZW50OiAn4oCcJztcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbiAgICBvcGFjaXR5OiAuMTU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtMjBweDtcXG4gICAgbGVmdDogM3B4O1xcbn1cXG5cXG4ucXVvdGUgcDphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICfigJ0nO1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIG9wYWNpdHk6IC4xNTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IC00MnB4O1xcbiAgICByaWdodDogM3B4O1xcbn1cXG5cXG4ucXVvdGUgZm9vdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IC00MHB4O1xcbiAgICByaWdodDogMDtcXG59XFxuXFxuLnF1b3RlIGZvb3RlciBpbWcge1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5xdW90ZSBmb290ZXIgYSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi5zcGVlY2gtYnViYmxlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC4wNCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnNwZWVjaC1idWJibGU6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEwMCU7XFxuICAgIHJpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXI6IDEzcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci10b3AtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjA0KTtcXG59XFxuXFxuLmxlYXJuLWJhcj4ubGVhcm4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAyNzJweDtcXG4gICAgdG9wOiA4cHg7XFxuICAgIGxlZnQ6IC0zMDBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC42KTtcXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA4OTlweCkge1xcbiAgICAubGVhcm4tYmFyIHtcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMDBweDtcXG4gICAgfVxcblxcbiAgICAubGVhcm4tYmFyPi5sZWFybiB7XFxuICAgICAgICBsZWZ0OiA4cHg7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8qZ2xvYmFsIGFwcCwgJG9uICovXG5cbnJlcXVpcmUoJy4vdmlldy5qcycpO1xucmVxdWlyZSgnLi9zdG9yZS5qcycpO1xucmVxdWlyZSgnLi9tb2RlbC5qcycpO1xucmVxdWlyZSgnLi90ZW1wbGF0ZS5qcycpO1xucmVxdWlyZSgnLi9jb250cm9sbGVyLmpzJyk7XG5yZXF1aXJlKCcuL2hlbHBlcnMuanMnKTtcbnJlcXVpcmUoJy4vYXBwLmpzJyk7XG4vLyByZXF1aXJlKCcuL2Rpc3QvbWFpbi5jc3MnKTtcbmltcG9ydCAnLi9zdHlsZS9tYWluLmNzcydcbmltcG9ydCAnLi4vYXNzZXRzL2ltZy90b2RvLnBuZydcblxuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0LyoqXG5cdCAqIEluaXRpYWxpc2UgdW5lIG5vdXZlbGxlIGxpc3RlIGRlIHTDomNoZS5cblx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgTGUgbm9tIGRlIGxhIG5vdXZlbGxlIGxpc3RlIGRlIHTDomNoZXMuXG5cdCAqL1xuXHRmdW5jdGlvbiBUb2RvKG5hbWUpIHtcblx0XHR0aGlzLnN0b3JhZ2UgPSBuZXcgYXBwLlN0b3JlKG5hbWUpO1xuXHRcdHRoaXMubW9kZWwgPSBuZXcgYXBwLk1vZGVsKHRoaXMuc3RvcmFnZSk7XG5cdFx0dGhpcy50ZW1wbGF0ZSA9IG5ldyBhcHAuVGVtcGxhdGUoKTtcblx0XHR0aGlzLnZpZXcgPSBuZXcgYXBwLlZpZXcodGhpcy50ZW1wbGF0ZSk7XG5cdFx0dGhpcy5jb250cm9sbGVyID0gbmV3IGFwcC5Db250cm9sbGVyKHRoaXMubW9kZWwsIHRoaXMudmlldyk7XG5cdH1cblxuXHRsZXQgdG9kbyA9IG5ldyBUb2RvKCd0b2Rvcy12YW5pbGxhanMnKTtcblxuXHRmdW5jdGlvbiBzZXRWaWV3KCkge1xuXHRcdHRvZG8uY29udHJvbGxlci5zZXRWaWV3KGRvY3VtZW50LmxvY2F0aW9uLmhhc2gpO1xuXHR9XG5cdCRvbih3aW5kb3csICdsb2FkJywgc2V0Vmlldyk7XG5cdCRvbih3aW5kb3csICdoYXNoY2hhbmdlJywgc2V0Vmlldyk7XG59KSgpOyIsIihmdW5jdGlvbiAod2luZG93KSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHQvKipcblx0ICogQ09OVFJPTExFUiBQZXJtZXQgbCdpbnTDqXJhY3Rpb24gZW50cmUgbGUgTW9kZWwgZXQgbGEgVmlld1xuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtvYmplY3R9IG1vZGVsIEwnaW5zdGFuY2UgZHUgTW9kZWxcblx0ICogQHBhcmFtIHtvYmplY3R9IHZpZXcgTCdpbnN0YW5jZSBkZSBsYSBWaWV3XG5cdCAqL1xuXHRjbGFzcyBDb250cm9sbGVyIHtcblx0XHRjb25zdHJ1Y3Rvcihtb2RlbCwgdmlldykge1xuXHRcdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdFx0c2VsZi5tb2RlbCA9IG1vZGVsO1xuXHRcdFx0c2VsZi52aWV3ID0gdmlldztcblxuXHRcdFx0c2VsZi52aWV3LmJpbmQoJ25ld1RvZG8nLCBmdW5jdGlvbiAodGl0bGUpIHtcblx0XHRcdFx0c2VsZi5hZGRJdGVtKHRpdGxlKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRzZWxmLnZpZXcuYmluZCgnaXRlbUVkaXQnLCBmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0XHRzZWxmLmVkaXRJdGVtKGl0ZW0uaWQpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHNlbGYudmlldy5iaW5kKCdpdGVtRWRpdERvbmUnLCBmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0XHRzZWxmLmVkaXRJdGVtU2F2ZShpdGVtLmlkLCBpdGVtLnRpdGxlKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRzZWxmLnZpZXcuYmluZCgnaXRlbUVkaXRDYW5jZWwnLCBmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0XHRzZWxmLmVkaXRJdGVtQ2FuY2VsKGl0ZW0uaWQpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHNlbGYudmlldy5iaW5kKCdpdGVtUmVtb3ZlJywgZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdFx0c2VsZi5yZW1vdmVJdGVtKGl0ZW0uaWQpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHNlbGYudmlldy5iaW5kKCdpdGVtVG9nZ2xlJywgZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdFx0c2VsZi50b2dnbGVDb21wbGV0ZShpdGVtLmlkLCBpdGVtLmNvbXBsZXRlZCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0c2VsZi52aWV3LmJpbmQoJ3JlbW92ZUNvbXBsZXRlZCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0c2VsZi5yZW1vdmVDb21wbGV0ZWRJdGVtcygpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHNlbGYudmlldy5iaW5kKCd0b2dnbGVBbGwnLCBmdW5jdGlvbiAoc3RhdHVzKSB7XG5cdFx0XHRcdHNlbGYudG9nZ2xlQWxsKHN0YXR1cy5jb21wbGV0ZWQpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogQ2hhcmdlIGV0IGluaXRpYWxpc2UgbGEgVmlld1xuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSAnUGV1dCBwcmVuZHJlIDMgdmFsZXVycyA6ICcnIC8gJ2FjdGl2ZScgLyAnY29tcGxldGVkJ1xuXHRcdCAqL1xuXHRcdHNldFZpZXcobG9jYXRpb25IYXNoKSB7XG5cdFx0XHRsZXQgcm91dGUgPSBsb2NhdGlvbkhhc2guc3BsaXQoJy8nKVsxXTtcblx0XHRcdGxldCBwYWdlID0gcm91dGUgfHwgJyc7XG5cdFx0XHR0aGlzLl91cGRhdGVGaWx0ZXJTdGF0ZShwYWdlKTtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogQWZmaWNoZSB0b3V0ZXMgbGVzIHTDomNoZXMgZGUgbGEgbGlzdGUgZW4gY291cnNcblx0XHQgKi9cblx0XHRzaG93QWxsKCkge1xuXHRcdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdFx0c2VsZi5tb2RlbC5yZWFkKGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0XHRcdHNlbGYudmlldy5yZW5kZXIoJ3Nob3dFbnRyaWVzJywgZGF0YSk7XG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogQWZmaWNoZSB0b3V0ZXMgbGVzIHTDomNoZXMgYWN0aXZlcyBkZSBsYSBsaXN0ZSBlbiBjb3Vyc1xuXHRcdCAqL1xuXHRcdHNob3dBY3RpdmUoKSB7XG5cdFx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0XHRzZWxmLm1vZGVsLnJlYWQoe1xuXHRcdFx0XHRjb21wbGV0ZWQ6IGZhbHNlXG5cdFx0XHR9LCBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdFx0XHRzZWxmLnZpZXcucmVuZGVyKCdzaG93RW50cmllcycsIGRhdGEpO1xuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIEFmZmljaGUgdG91dGVzIGxlcyB0w6JjaGVzIGNvbXBsw6l0w6llcyBkZSBsYSBsaXN0ZSBlbiBjb3Vyc1xuXHRcdCAqL1xuXHRcdHNob3dDb21wbGV0ZWQoKSB7XG5cdFx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0XHRzZWxmLm1vZGVsLnJlYWQoe1xuXHRcdFx0XHRjb21wbGV0ZWQ6IHRydWVcblx0XHRcdH0sIGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0XHRcdHNlbGYudmlldy5yZW5kZXIoJ3Nob3dFbnRyaWVzJywgZGF0YSk7XG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogQWpvdXRlIHVuZSBub3V2ZWxsZSB0w6JjaGUgZGFucyBsYSBsaXN0ZSBlbiBjb3VycyAoaW5zZXJ0aW9uIGRhbnMgbGUgRE9NIGV0IGRhbnMgbGUgbG9jYWwgc3RvcmFnZSlcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGUgTGUgdGl0cmUgZGUgbGEgdMOiY2hlIGFqb3V0w6llXG5cdFx0ICovXG5cdFx0YWRkSXRlbSh0aXRsZSkge1xuXHRcdFx0bGV0IHNlbGYgPSB0aGlzO1xuXG5cdFx0XHRpZiAodGl0bGUudHJpbSgpID09PSAnJykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHNlbGYubW9kZWwuY3JlYXRlKHRpdGxlLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHNlbGYudmlldy5yZW5kZXIoJ2NsZWFyTmV3VG9kbycpO1xuXHRcdFx0XHRzZWxmLl9maWx0ZXIodHJ1ZSk7XG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogRMOpY2xlbmNoZSBsZSBtb2RlIGQnw6lkaXRpb24gZGVzIMOpbMOpbWVudHMuXG5cdFx0ICogQWN0aXZlIGwnw6lkaXRpb24gZCd1bmUgdMOiY2hlIGRlIGxhIGxpc3RlIGVuIGNvdXJzXG5cdFx0ICogIEBwYXJhbSB7bnVtYmVyfSBpZCBMJ2lkIGR1IG1vZGVsIChjb3JyZXNwb25kYW50IMOgIGxhIHTDomNoZSDDoCDDqWRpdGVyKVxuXHRcdCAqL1xuXHRcdGVkaXRJdGVtKGlkKSB7XG5cdFx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0XHRzZWxmLm1vZGVsLnJlYWQoaWQsIGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0XHRcdHNlbGYudmlldy5yZW5kZXIoJ2VkaXRJdGVtJywge1xuXHRcdFx0XHRcdGlkOiBpZCxcblx0XHRcdFx0XHR0aXRsZTogZGF0YVswXS50aXRsZVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBFbnJlZ2lzdHJlIGxhIG5vdXZlbGxlIHTDomNoZSDDqWRpdMOpZVxuXHRcdCAqICBAcGFyYW0ge251bWJlcn0gaWQgTCdpZCBkZSBsYSB0w6JjaGUgw6lkaXTDqWV6XG5cdFx0ICogIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSBMZSB0aXRyZSBkZSBsYSB0w6JjaGUgw6lkaXTDqWVcblx0XHQgKi9cblx0XHRlZGl0SXRlbVNhdmUoaWQsIHRpdGxlKSB7XG5cdFx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cblx0XHRcdHdoaWxlICh0aXRsZVswXSA9PT0gXCIgXCIpIHtcblx0XHRcdFx0dGl0bGUgPSB0aXRsZS5zbGljZSgxKTtcblx0XHRcdH1cblxuXHRcdFx0d2hpbGUgKHRpdGxlW3RpdGxlLmxlbmd0aCAtIDFdID09PSBcIiBcIikge1xuXHRcdFx0XHR0aXRsZSA9IHRpdGxlLnNsaWNlKDAsIC0xKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRpdGxlLmxlbmd0aCAhPT0gMCkge1xuXHRcdFx0XHRzZWxmLm1vZGVsLnVwZGF0ZShpZCwge1xuXHRcdFx0XHRcdHRpdGxlOiB0aXRsZVxuXHRcdFx0XHR9LCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0c2VsZi52aWV3LnJlbmRlcignZWRpdEl0ZW1Eb25lJywge1xuXHRcdFx0XHRcdFx0aWQ6IGlkLFxuXHRcdFx0XHRcdFx0dGl0bGU6IHRpdGxlXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2VsZi5yZW1vdmVJdGVtKGlkKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0LyoqIFxuXHRcdCAqIEFubnVsZSBsJ8OpZGl0aW9uIGRlIGxhIHTDomNoZSBlbiBjb3VycyBcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gaWRMJ2lkIGRlIGxhIHTDomNoZSDDqWRpdMOpZVxuXHRcdCAqL1xuXHRcdGVkaXRJdGVtQ2FuY2VsKGlkKSB7XG5cdFx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0XHRzZWxmLm1vZGVsLnJlYWQoaWQsIGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0XHRcdHNlbGYudmlldy5yZW5kZXIoJ2VkaXRJdGVtRG9uZScsIHtcblx0XHRcdFx0XHRpZDogaWQsXG5cdFx0XHRcdFx0dGl0bGU6IGRhdGFbMF0udGl0bGVcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogU3VwcHJpbWUgdW5lIHTDomNoZSBkZSBsYSBsaXN0ZSBlbiBjb3Vycy5cblx0XHQgKiBAcGFyYW0ge251bWJlcn0gaWQgTCdpZCBkZSBsYSB0w6JjaGUgw6Agc3VwcHJpbWVyIGRhbnMgbGUgRE9NIGV0IGRhbnMgbGUgbG9jYWxTdG9yYWdlXG5cdFx0ICovXG5cdFx0cmVtb3ZlSXRlbShpZCkge1xuXHRcdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdFx0bGV0IGl0ZW1zO1xuXHRcdFx0c2VsZi5tb2RlbC5yZWFkKGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0XHRcdGl0ZW1zID0gZGF0YTtcblx0XHRcdH0pO1xuXG5cdFx0XHRzZWxmLm1vZGVsLnJlbW92ZShpZCwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRzZWxmLnZpZXcucmVuZGVyKCdyZW1vdmVJdGVtJywgaWQpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIkVsZW1lbnQgd2l0aCBJRDogXCIgKyBpZCArIFwiIGhhcyBiZWVuIHJlbW92ZWQuXCIpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHNlbGYuX2ZpbHRlcigpO1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBTdXBwcmltZSB0b3V0ZXMgbGVzIHTDomNoZXMgdGVybWluw6llcyBkZSBsYSBsaXN0ZSBlbiBjb3Vyc1xuXHRcdCAqL1xuXHRcdHJlbW92ZUNvbXBsZXRlZEl0ZW1zKCkge1xuXHRcdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdFx0c2VsZi5tb2RlbC5yZWFkKHtcblx0XHRcdFx0Y29tcGxldGVkOiB0cnVlXG5cdFx0XHR9LCBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdFx0XHRkYXRhLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdFx0XHRzZWxmLnJlbW92ZUl0ZW0oaXRlbS5pZCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cblx0XHRcdHNlbGYuX2ZpbHRlcigpO1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBBY3R1YWxpc2UgbCdhZmZpY2hhZ2UgZGUgbGEgdMOiY2hlIGVuIGZvbmN0aW9uIGRlIHNvbiBzdGF0dXQgKHRlcm1pbsOpIG91IG5vbilcblx0XHQgKiBEb25uZXotbHVpIHVuIGlkZW50aWZpYW50IGQndW4gbW9kw6hsZSBldCB1bmUgY2FzZSDDoCBjb2NoZXIgZXQgaWwgbWV0dHJhIMOgIGpvdXIgbCdhcnRpY2xlXG5cdFx0ICogZGFucyBsZSBzdG9ja2FnZSBlbiBmb25jdGlvbiBkZSBsJ8OpdGF0IGRlIGxhIGNhc2Ugw6AgY29jaGVyLlxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBpZCBMJ2lkIGRlIGxhIHTDomNoZSAodG91dGVzIGxlcyB0w6JjaGVzIHNvbnQgcGFyY291cnVlcylcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gY2hlY2tib3ggVsOpcmlmaWUgc2kgbGUgY2hhbXAgY2hlY2tlZCBlc3QgY29jaMOpIG91IG5vblxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbnx1bmRlZmluZWR9IHNpbGVudCBFbXDDqmNoZSBsZSByZWZpbHRyYWdlIGRlcyDDqWzDqW1lbnRzIGRlIGxhIGxpc3RlXG5cdFx0ICovXG5cdFx0dG9nZ2xlQ29tcGxldGUoaWQsIGNvbXBsZXRlZCwgc2lsZW50KSB7XG5cdFx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0XHRzZWxmLm1vZGVsLnVwZGF0ZShpZCwge1xuXHRcdFx0XHRjb21wbGV0ZWQ6IGNvbXBsZXRlZFxuXHRcdFx0fSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRzZWxmLnZpZXcucmVuZGVyKCdlbGVtZW50Q29tcGxldGUnLCB7XG5cdFx0XHRcdFx0aWQ6IGlkLFxuXHRcdFx0XHRcdGNvbXBsZXRlZDogY29tcGxldGVkXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cblx0XHRcdGlmICghc2lsZW50KSB7XG5cdFx0XHRcdHNlbGYuX2ZpbHRlcigpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBQZXJtZXQgZCdhY3RpdmVyIG91IGRlIGTDqXNhY3RpdmVyIGxlcyBjYXNlcyBjb2Now6llc1xuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fSBjb21wbGV0ZWQgTGVzIHTDomNoZXMgdGVybWluw6llc1xuXHRcdCAqL1xuXHRcdHRvZ2dsZUFsbChjb21wbGV0ZWQpIHtcblx0XHRcdGxldCBzZWxmID0gdGhpcztcblx0XHRcdHNlbGYubW9kZWwucmVhZCh7XG5cdFx0XHRcdGNvbXBsZXRlZDogIWNvbXBsZXRlZFxuXHRcdFx0fSwgZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRcdFx0ZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHRcdFx0c2VsZi50b2dnbGVDb21wbGV0ZShpdGVtLmlkLCBjb21wbGV0ZWQsIHRydWUpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXG5cdFx0XHRzZWxmLl9maWx0ZXIoKTtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogTWV0IMOgIGpvdXIgbGUgY29tcHRldXIgZGUgdMOiY2hlIGVuIGJhcyDDoCBnYXVjaGUgZGUgbCdhcHBsaWNhdGlvblxuXHRcdCAqL1xuXHRcdF91cGRhdGVDb3VudCgpIHtcblxuXHRcdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdFx0c2VsZi5tb2RlbC5nZXRDb3VudChmdW5jdGlvbiAodG9kb3MpIHtcblx0XHRcdFx0c2VsZi52aWV3LnJlbmRlcigndXBkYXRlRWxlbWVudENvdW50JywgdG9kb3MuYWN0aXZlKTtcblx0XHRcdFx0c2VsZi52aWV3LnJlbmRlcignY2xlYXJDb21wbGV0ZWRCdXR0b24nLCB7XG5cdFx0XHRcdFx0Y29tcGxldGVkOiB0b2Rvcy5jb21wbGV0ZWQsXG5cdFx0XHRcdFx0dmlzaWJsZTogdG9kb3MuY29tcGxldGVkID4gMFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0c2VsZi52aWV3LnJlbmRlcigndG9nZ2xlQWxsJywge1xuXHRcdFx0XHRcdGNoZWNrZWQ6IHRvZG9zLmNvbXBsZXRlZCA9PT0gdG9kb3MudG90YWxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHNlbGYudmlldy5yZW5kZXIoJ2NvbnRlbnRCbG9ja1Zpc2liaWxpdHknLCB7XG5cdFx0XHRcdFx0dmlzaWJsZTogdG9kb3MudG90YWwgPiAwXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIFJlZmlsdHJlIGxlcyB0w6JjaGVzIGVuIGZvbmN0aW9uIGRlIGxldXIgc3RhdHV0IGFjdGlmICgjYWN0aXZlKVxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbnx1bmRlZmluZWR9IGZvcmNlICBSZWZpbHRyZSBsZXMgdMOiY2hlcy5cblx0XHQgKi9cblx0XHRfZmlsdGVyKGZvcmNlKSB7XG5cdFx0XHRsZXQgYWN0aXZlUm91dGUgPSB0aGlzLl9hY3RpdmVSb3V0ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRoaXMuX2FjdGl2ZVJvdXRlLnN1YnN0cigxKTtcblxuXHRcdFx0Ly8gTWV0dGV6IMOgIGpvdXIgbGVzIMOpbMOpbWVudHMgZGUgbGEgcGFnZSwgcXVpIGNoYW5nZW50IMOgIGNoYXF1ZSB0w6JjaGUgdGVybWluw6llXG5cdFx0XHR0aGlzLl91cGRhdGVDb3VudCgpO1xuXG5cdFx0XHQvLyBTaSBsZSBkZXJuaWVyIGl0aW7DqXJhaXJlIGFjdGlmIG4nZXN0IHBhcyBcIlRvdXNcIiBvdSBzaSBub3VzIGNoYW5nZW9ucyBkJ2l0aW7DqXJhaXJlLCBub3VzXG5cdFx0XHQvLyByZWNyw6lleiBsZXMgw6lsw6ltZW50cyBkZSBsJ8OpbMOpbWVudCB0b2RvLCBlbiBhcHBlbGFudDpcblx0XHRcdC8vICAgdGhpcy5zaG93W0FsbHxBY3RpdmV8Q29tcGxldGVkXSgpO1xuXHRcdFx0aWYgKGZvcmNlIHx8IHRoaXMuX2xhc3RBY3RpdmVSb3V0ZSAhPT0gJ0FsbCcgfHwgdGhpcy5fbGFzdEFjdGl2ZVJvdXRlICE9PSBhY3RpdmVSb3V0ZSkge1xuXHRcdFx0XHR0aGlzWydzaG93JyArIGFjdGl2ZVJvdXRlXSgpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl9sYXN0QWN0aXZlUm91dGUgPSBhY3RpdmVSb3V0ZTtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogTWV0IMOgIGpvdXIgbCd1cmwgcG91ciBmaWx0cmVyIGxlcyB0w6JjaGVzIChham91dGUgw6AgbCd1cmwgOiAvYWN0aXZlIG91IC9jb21wbGV0ZWQpXG5cdFx0ICovXG5cdFx0X3VwZGF0ZUZpbHRlclN0YXRlKGN1cnJlbnRQYWdlKSB7IC8vIFxuXG5cdFx0XHQvLyBTdG9ja2VyIHVuZSByw6lmw6lyZW5jZSDDoCBsJ2l0aW7DqXJhaXJlIGFjdGlmLCBub3VzIHBlcm1ldHRhbnQgZGUgcmUtZmlsdHJlciB0b2RvXG5cdFx0XHQvLyDDqWzDqW1lbnRzIGNhciBpbHMgc29udCBtYXJxdcOpcyBjb21tZSBjb21wbGV0cyBvdSBpbmNvbXBsZXRzLlxuXHRcdFx0dGhpcy5fYWN0aXZlUm91dGUgPSBjdXJyZW50UGFnZTtcblxuXHRcdFx0aWYgKGN1cnJlbnRQYWdlID09PSAnJykge1xuXHRcdFx0XHR0aGlzLl9hY3RpdmVSb3V0ZSA9ICdBbGwnO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl9maWx0ZXIoKTtcblxuXHRcdFx0dGhpcy52aWV3LnJlbmRlcignc2V0RmlsdGVyJywgY3VycmVudFBhZ2UpO1xuXHRcdH07XG5cdH07XG5cblx0Ly8gRXhwb3J0ZXIgdmVycyBsYSB3aW5kb3dcblx0d2luZG93LmFwcCA9IHdpbmRvdy5hcHAgfHwge307XG5cdHdpbmRvdy5hcHAuQ29udHJvbGxlciA9IENvbnRyb2xsZXI7XG59KSh3aW5kb3cpOyIsIi8qKlxuICogTm9kZUxpc3QgZ2xvYmFsZVxuICovXG4vKiogQGdsb2JhbCAqL1xuKGZ1bmN0aW9uICh3aW5kb3cpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdC8qKlxuXHQgKiBSw6ljdXDDqHJlIHVuIMOpbMOpbWVudCBhdmVjIHF1ZXJ5U2VsZWN0b3IgKHFzKSBldCBsZSBzw6lsZWN0ZXVyIENTU1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgTGUgc8OpbGVjdGV1ciBjc3MgZGUgbCfDqWzDqW1lbnRcblx0ICogIEBwYXJhbSB7c3RyaW5nfSBzY29wZSBMZSBzY29wZSBkZSBsJ8OpbMOpbWVudCAoc2kgcGFzIHJlbnNlaWduw6ksIGRvY3VtZW50IHBhciBkw6lmYXV0KVxuXHQgKi9cblx0d2luZG93LnFzID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBzY29wZSkge1xuXHRcdHJldHVybiAoc2NvcGUgfHwgZG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBSw6ljdXDDqHJlIHBsdXNpZXVycyDDqWzDqW1lbnRzIGF2ZWMgcXVlcnlTZWxlY3RvckFsbCAocXNhKSBldCBsZSBzw6lsZWN0ZXVyIENTU1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgTGUgc8OpbGVjdGV1ciBjc3MgZGUgbCfDqWzDqW1lbnRcblx0ICogIEBwYXJhbSB7c3RyaW5nfSBzY29wZSBMZSBzY29wZSBkZSBsJ8OpbMOpbWVudCAoc2kgcGFzIHJlbnNlaWduw6ksIGRvY3VtZW50IHBhciBkw6lmYXV0KVxuXHQgKi9cblx0d2luZG93LnFzYSA9IGZ1bmN0aW9uIChzZWxlY3Rvciwgc2NvcGUpIHtcblx0XHRyZXR1cm4gKHNjb3BlIHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcblx0fTtcblxuXHQvKipcblx0ICogQWpvdXRlIHVuIMOpY291dGV1ciBkJ8OpdsOobmVtZW50IMOgIGwnw6lsw6ltZW50IGNpYmzDqVxuXHQgKiBAcGFyYW0ge2VsZW1lbnR9IHRhcmdldCBMJ8OpbMOpbWVudCBjaWJsw6lcblx0ICogIEBwYXJhbSB7c3RyaW5nfSB0eXBlIExlIHR5cGUgZGUgbCfDqXbDqG5lbWVudCAoY2xpY2ssIGNoYW5nZS4uLilcblx0ICogIEBwYXJhbSB7c3RyaW5nfSBjYWxsYmFjayBMYSByw6lwb25zZSBlbiBjYXMgZCfDqXbDqG5lbWVudFxuXHQgKiAgQHBhcmFtIHtCb29sZWFufSB1c2VDYXB0dXJlIGluZGlxdWUgc2kgbCfDqXbDqG5lbWVudCBlc3QgZW52b3nDqSBhdSBsaXN0ZW5lciBlbnJlZ2lzdHLDqSBhdmFudCBkJ8OqdHJlIGRpc3RyaWJ1w6kgw6AgdG91dCBFdmVudFRhcmdldCAoaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZnIvZG9jcy9XZWIvQVBJL0V2ZW50VGFyZ2V0L2FkZEV2ZW50TGlzdGVuZXIpXG5cdCAqL1xuXHR3aW5kb3cuJG9uID0gZnVuY3Rpb24gKHRhcmdldCwgdHlwZSwgY2FsbGJhY2ssIHVzZUNhcHR1cmUpIHtcblx0XHR0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjaywgISF1c2VDYXB0dXJlKTtcblx0fTtcblxuXHQvKipcblx0ICogQWpvdXRlIHVuIMOpY291dGV1ciBkJ8OpdsOobmVtZW50IMOgIHRvdXMgbGVzIMOpbMOpbWVudHMgcXVpIGNvcnJlc3BvbmRlbnQgYXUgc8OpbGVjdGV1ciBwYXNzw6kgZGFucyBsYSBmb25jdGlvbi5cblx0ICogQHBhcmFtIHtlbGVtZW50fSB0YXJnZXQgTCfDqWzDqW1lbnQgY2libMOpXG5cdCAqICBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgTGUgc8OpbGVjdGV1ciBjc3MgZGUgbCfDqWzDqW1lbnQgY2libMOpXG5cdCAqICBAcGFyYW0ge3N0cmluZ30gc2VsdHlwZWVjdG9yIExlIHR5cGUgZGUgbCdldmVudFxuXHQgKiAgQHBhcmFtIHtzdHJpbmd9IGhhbmRsZXIgQ2FsbGJhY2sgZXjDqWN1dMOpXG5cdCAqL1xuXHR3aW5kb3cuJGRlbGVnYXRlID0gZnVuY3Rpb24gKHRhcmdldCwgc2VsZWN0b3IsIHR5cGUsIGhhbmRsZXIpIHtcblx0XHRmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KGV2ZW50KSB7XG5cdFx0XHRsZXQgdGFyZ2V0RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcblx0XHRcdGxldCBwb3RlbnRpYWxFbGVtZW50cyA9IHdpbmRvdy5xc2Eoc2VsZWN0b3IsIHRhcmdldCk7XG5cdFx0XHRsZXQgaGFzTWF0Y2ggPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHBvdGVudGlhbEVsZW1lbnRzLCB0YXJnZXRFbGVtZW50KSA+PSAwO1xuXG5cdFx0XHRpZiAoaGFzTWF0Y2gpIHtcblx0XHRcdFx0aGFuZGxlci5jYWxsKHRhcmdldEVsZW1lbnQsIGV2ZW50KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvRXZlbnRzL2JsdXJcblx0XHRsZXQgdXNlQ2FwdHVyZSA9IHR5cGUgPT09ICdibHVyJyB8fCB0eXBlID09PSAnZm9jdXMnO1xuXG5cdFx0d2luZG93LiRvbih0YXJnZXQsIHR5cGUsIGRpc3BhdGNoRXZlbnQsIHVzZUNhcHR1cmUpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBUcm91dmUgbCfDqWzDqW1lbnQgcGFyZW50IHF1aSBwb3J0ZSBsZSB0YWcgc3VpdmFudCA6ICRwYXJlbnQocXMoJ2EnKSwgJ2RpdicpO1xuXHQgKiBAcGFyYW0ge2VsZW1lbnR9IGVsZW1lbnQgTCfDqWzDqW1lbnQgY2libMOpXG5cdCAqICBAcGFyYW0ge3N0cmluZ30gdGFnTmFtZSBMZSBzw6lsZWN0ZXVyIGNzcyBkZSBsJ8OpbMOpbWVudCBjaWJsw6lcblx0ICovXG5cdHdpbmRvdy4kcGFyZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQsIHRhZ05hbWUpIHtcblx0XHRpZiAoIWVsZW1lbnQucGFyZW50Tm9kZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoZWxlbWVudC5wYXJlbnROb2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gdGFnTmFtZS50b0xvd2VyQ2FzZSgpKSB7XG5cdFx0XHRyZXR1cm4gZWxlbWVudC5wYXJlbnROb2RlO1xuXHRcdH1cblx0XHRyZXR1cm4gd2luZG93LiRwYXJlbnQoZWxlbWVudC5wYXJlbnROb2RlLCB0YWdOYW1lKTtcblx0fTtcblx0Ly8gQXV0b3Jpc2VyIGxhIGJvdWNsZSBzdXIgbGVzIG7Fk3VkcyBlbiBjaGHDrm5hbnQ6XG5cdC8vIHFzYSgnLmZvbycpLmZvckVhY2goZnVuY3Rpb24gKCkge30pXG5cdE5vZGVMaXN0LnByb3RvdHlwZS5mb3JFYWNoID0gQXJyYXkucHJvdG90eXBlLmZvckVhY2g7XG59KSh3aW5kb3cpOyIsIihmdW5jdGlvbiAod2luZG93KSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHQvKipcblx0ICogTU9ERUwgQ3LDqWF0aW9uIGQndW5lIG5vdXZlbGxlIGluc3RhbmNlIGRlIE1vZGVsIGV0IGludMOpcmFjdGlvbiBhdmVjIGxhIGNsYXNzZSBTdG9yZVxuXHQgKiBDcsOpZSB1bmUgbm91dmVsbGUgaW5zdGFuY2UgZGUgbW9kw6hsZSBldCBjb25uZWN0ZSBsZSBzdG9ja2FnZS5cblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBzdG9yYWdlIElkZW50aWZpZSBsYSBjbGFzc2UgU3RvcmUgY8O0dMOpIGNsaWVudC5cblx0ICovXG5cdGNsYXNzIE1vZGVsIHtcblx0XHRjb25zdHJ1Y3RvcihzdG9yYWdlKSB7XG5cdFx0XHR0aGlzLnN0b3JhZ2UgPSBzdG9yYWdlO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIENyw6llciB1biBub3V2ZWF1IG1vZGVsIGRlIHRvZG8gcG91ciBsYSB0w6JjaGUgYWpvdXTDqWVcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gW3RpdGxlXSBMZSB0aXRyZSBkZSBsYSB0w6JjaGVcblx0XHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbY2FsbGJhY2tdIExhIGZvbmN0aW9uIGFwcGVsw6kgYXByw6hzIHF1ZSBsZSBtb2RlbCBzb2l0IGNyw6llLlxuXHRcdCAqL1xuXHRcdGNyZWF0ZSh0aXRsZSwgY2FsbGJhY2spIHtcblx0XHRcdHRpdGxlID0gdGl0bGUgfHwgJyc7XG5cdFx0XHRjYWxsYmFjayA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG5cdFx0XHRsZXQgbmV3SXRlbSA9IHtcblx0XHRcdFx0dGl0bGU6IHRpdGxlLnRyaW0oKSxcblx0XHRcdFx0Y29tcGxldGVkOiBmYWxzZVxuXHRcdFx0fTtcblxuXHRcdFx0dGhpcy5zdG9yYWdlLnNhdmUobmV3SXRlbSwgY2FsbGJhY2spO1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBSZWNoZXJjaGUgZXQgcmVudm9pZSB1biBtb2TDqGxlIHN0b2Nrw6kuIFNpIGF1Y3VuZSByZXF1w6p0ZSBuJ2VzdCBkb25uw6llLCBpbCBzZXJhIHNpbXBsZW1lbnRcblx0XHQgKiB0b3V0IHJldG91cm5lci4gU2kgdm91cyBwYXNzZXogdW5lIGNoYcOubmUgb3UgdW4gbm9tYnJlLCBjZWxhIHJlc3NlbWJsZXJhIMOgXG5cdFx0ICogbCdJRCBkdSBtb2TDqGxlIMOgIHRyb3V2ZXIuIEVuZmluLCB2b3VzIHBvdXZleiBsdWkgcGFzc2VyIHVuIG9iamV0IHBvdXIgY29ycmVzcG9uZHJlXG5cdFx0ICogY29udHJlLnJlbW92ZVxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcnxvYmplY3R9IFtxdWVyeV0gTGEgcmVxdcOqdGUgcG91ciBmaWx0cmVyIGxlcyBtb2TDqGxlc1xuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb259IFtjYWxsYmFja10gVW5lIGZvbmN0aW9uIGRlIHJhcHBlbCDDoCB1dGlsaXNlciBsb3JzcXUndW4gbW9kZWwgZXN0IHRyb3V2w6lcblx0XHQgKiBcblx0XHQgKiBSZWNoZXJjaGUgZXQgcmV0b3VybmUgdW4gbW9kw6hsZSBzdG9ja8OpLiBTaSBhdWN1bmUgcmVxdcOqdGUgbidlc3QgZG9ubsOpZSwgdG91dCBzZXJhIHNpbXBsZW1lbnQgcmV0b3VybsOpLiBTaSB2b3VzIHRyYW5zbWV0dGV6IHVuZSBjaGHDrm5lIG91IHVuIG5vbWJyZSwgaWwgbGUgcmVjaGVyY2hlcmEgZW4gdGFudCBxdSdJRCBkdSBtb2TDqGxlIMOgIHJlY2hlcmNoZXIuIEVuZmluLCB2b3VzIHBvdXZleiBsdWkgdHJhbnNtZXR0cmUgdW4gb2JqZXQgw6AgY29tcGFyZXIuIFJlY2hlcmNoZSBldCByZXRvdXJuZSBkYW5zIGxlIGxvY2FsU3RvcmFnZSB1biBtb2RlbCBzdG9ja8OpLiBTaSBhdWN1bmUgcmVxdcOqdGUgbidlc3QgZW52b3nDqWUsIHRvdXMgbGVzIG1vZGVscyBzZXJvbnQgcmVudm95w6lzLiBTaSBsYSByZXF1w6p0ZSBlc3QgdW5lIGNoYWluZSBkZSBjYXJhY3TDqHJlIG91IHVuIG5vbWJyZSwgbGEgbcOpdGhvZGUgcmVjaGVyY2hlcmEgdW4gaWQgZGUgbW9kZWwgw6AgcmV0b3VybmVyIElsIGVzdCBhdXNzaSBwb3NzaWJsZSBkZSBwYXNzZXIgdW4gb2JqZXQgw6AgY29tcGFyZXIgZGFucyBsYSByZXF1w6p0ZS5cblx0XHQgKiBAZXhhbXBsZSBcblx0XHQgKiBtb2RlbC5yZWFkKDEsIGZ1bmMpOyAvLyBWYSBjaGVyY2hlciBldCB0cm91dmVyIGxlIG1vZMOobGUgYXZlYyBsJ2lkIDFcblx0XHQgKiBtb2RlbC5yZWFkKCcxJyk7IC8vIEZlcmEgbGEgbcOqbWUgY2hvc2Vcblx0XHQgKiAgQ2ktZGVzc291cywgdW4gZXhlbXBsZSBhdmVjIGZvbyDDqWdhbCDDoCBiYXIgZXQgaGVsbG8gw6lnYWwgw6Agd29ybGRcblx0XHQgKiBtb2RlbC5yZWFkKHsgZm9vOiAnYmFyJywgaGVsbG86ICd3b3JsZCcgfSk7cmVtb3ZlXG5cdFx0ICovXG5cdFx0cmVhZChxdWVyeSwgY2FsbGJhY2spIHtcblx0XHRcdGxldCBxdWVyeVR5cGUgPSB0eXBlb2YgcXVlcnk7XG5cdFx0XHRjYWxsYmFjayA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG5cdFx0XHRpZiAocXVlcnlUeXBlID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGNhbGxiYWNrID0gcXVlcnk7XG5cdFx0XHRcdHJldHVybiB0aGlzLnN0b3JhZ2UuZmluZEFsbChjYWxsYmFjayk7XG5cdFx0XHR9IGVsc2UgaWYgKHF1ZXJ5VHlwZSA9PT0gJ3N0cmluZycgfHwgcXVlcnlUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRxdWVyeSA9IHBhcnNlSW50KHF1ZXJ5LCAxMCk7XG5cdFx0XHRcdHRoaXMuc3RvcmFnZS5maW5kKHtcblx0XHRcdFx0XHRpZDogcXVlcnlcblx0XHRcdFx0fSwgY2FsbGJhY2spO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zdG9yYWdlLmZpbmQocXVlcnksIGNhbGxiYWNrKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogTWV0IMOgIGpvdXIgdW4gbW9kw6hsZSBlbiBsdWkgYXR0cmlidWFudCB1biBJRCwgZGVzIGRvbm7DqWVzIMOgIG1ldHRyZSDDoCBqb3VyIGV0IHVuZSBmb25jdGlvbiBkZSByYXBwZWwgYXBwZWzDqWUgdW5lIGZvaXMgbGEgbWlzZSDDoCBqb3VyIHRlcm1pbsOpZS5cblx0XHQgKiBAcGFyYW0ge251bWJlcn0gaWQgTCdpZCBkdSBtb2RlbCDDoCBtZXR0cmUgw6Agam91clxuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIExlcyBkb25uw6llcyDDoCBtZXR0cmUgw6Agam91ciBldCBsZXVycyBub3V2ZWxsZXMgdmFsZXVyc1xuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIExhIGZvbmN0aW9uIGRlIHJhcHBlbCB1dGlsaXPDqWUgYXByw6hzIGxhIG1pc2Ugw6Agam91clxuXHRcdCAqL1xuXHRcdHVwZGF0ZShpZCwgZGF0YSwgY2FsbGJhY2spIHtcblx0XHRcdHRoaXMuc3RvcmFnZS5zYXZlKGRhdGEsIGNhbGxiYWNrLCBpZCk7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIFN1cHByaW1lIHVuIMOpbMOpbWVudCBkdSBzdG9ja2FnZVxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBpZCBMJ0lEIGR1IG1vZMOobGUgw6Agc3VwcHJpbWVyXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgTGEgZm9uY3Rpb24gZGUgcmFwcGVsIHV0aWxpc8OpZSBhcHLDqHMgbGEgc3VwcHJlc3Npb25cblx0XHQgKi9cblx0XHRyZW1vdmUoaWQsIGNhbGxiYWNrKSB7XG5cdFx0XHR0aGlzLnN0b3JhZ2UucmVtb3ZlKGlkLCBjYWxsYmFjayk7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIEFWRVJUSVNTRU1FTlQ6IEF0dGVudGlvbiwgY2V0dGUgbcOpdGhvZGUgc3VwcHJpbWUgdG91cyBsZXMgw6lsw6ltZW50cyBkdSBzdG9ja2FnZVxuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIExhIGZvbmN0aW9uIGRlIHJhcHBlbCB1dGlsaXPDqWUgYXByw6hzIGxhIHN1cHByZXNzaW9uXG5cdFx0ICovXG5cdFx0cmVtb3ZlQWxsKGNhbGxiYWNrKSB7XG5cdFx0XHR0aGlzLnN0b3JhZ2UuZHJvcChjYWxsYmFjayk7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIFJldG91cm5lIGxlIG5vbWJyZSBkZSB0b2Rvc1xuXHRcdCAqL1xuXHRcdGdldENvdW50KGNhbGxiYWNrKSB7XG5cdFx0XHRsZXQgdG9kb3MgPSB7XG5cdFx0XHRcdGFjdGl2ZTogMCxcblx0XHRcdFx0Y29tcGxldGVkOiAwLFxuXHRcdFx0XHR0b3RhbDogMFxuXHRcdFx0fTtcblxuXHRcdFx0dGhpcy5zdG9yYWdlLmZpbmRBbGwoZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRcdFx0ZGF0YS5mb3JFYWNoKGZ1bmN0aW9uICh0b2RvKSB7XG5cdFx0XHRcdFx0aWYgKHRvZG8uY29tcGxldGVkKSB7XG5cdFx0XHRcdFx0XHR0b2Rvcy5jb21wbGV0ZWQrKztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dG9kb3MuYWN0aXZlKys7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dG9kb3MudG90YWwrKztcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGNhbGxiYWNrKHRvZG9zKTtcblx0XHRcdH0pO1xuXHRcdH07XG5cdH07XG5cdC8vIEV4cG9ydGVyIHZlcnMgd2luZG93XG5cdHdpbmRvdy5hcHAgPSB3aW5kb3cuYXBwIHx8IHt9O1xuXHR3aW5kb3cuYXBwLk1vZGVsID0gTW9kZWw7XG59KSh3aW5kb3cpOyIsIi8qanNoaW50IGVxZXFlcTpmYWxzZSAqL1xuKGZ1bmN0aW9uICh3aW5kb3cpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdC8qKlxuXHQgKiBTVE9SRSBDcsOpZSB1biBub3V2ZWwgb2JqZXQgU3RvcmUgY8O0dMOpIGNsaWVudCBldCBjcsOpZXJhIHVuIGVzcGFjZSB2aWRlIHNpIGF1Y3VuIG9iamV0IGV4aXN0ZSBkw6lqYS5cblx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgTGUgbm9tIGRlIGxhIGJhc2UgZGUgZG9ubsOpZSDDoCB1dGlsaXNlclxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayBMYSBmb25jdGlvbiBkZSByYXBwZWwgKHNldWxlbWVudCBwYXJjZSBxdSdvbiBlc3QgZW4gbG9jYWxTdG9yYWdlKSB1dGlsaXPDqSBhcHLDqHMgbCdpbml0aWFsaXNhdGlvbiBkdSBTdG9yZS4gRGFucyBsZSBjYXMgZCd1bmUgdnJhaSBCREQsIG5vdXMgZWZmZWN0dXJpb25zIGRlcyBhcHBlbHMgQUpBWC5cblx0ICovXG5cdGNsYXNzIFN0b3JlIHtcblx0XHRjb25zdHJ1Y3RvcihuYW1lLCBjYWxsYmFjaykge1xuXHRcdFx0Y2FsbGJhY2sgPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7fTtcblxuXHRcdFx0dGhpcy5fZGJOYW1lID0gbmFtZTtcblxuXHRcdFx0aWYgKCFsb2NhbFN0b3JhZ2VbbmFtZV0pIHtcblx0XHRcdFx0bGV0IGRhdGEgPSB7XG5cdFx0XHRcdFx0dG9kb3M6IFtdXG5cdFx0XHRcdH07XG5cblx0XHRcdFx0bG9jYWxTdG9yYWdlW25hbWVdID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG5cdFx0XHR9XG5cblx0XHRcdGNhbGxiYWNrLmNhbGwodGhpcywgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2VbbmFtZV0pKTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBUcm91dmUgdW4gw6lsw6ltZW50IGVuIGZvbmN0aW9uIGRlIGxhIHJlcXXDqnRlIChvYmpldCBKUylcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gcXVlcnkgTGEgcmVxdcOqdGUgw6AgY29tcGFyZXIgKHBhciBleGVtcGxlIHtmb286ICdiYXInfSlcblx0XHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayBMYSBmb25jdGlvbiBkZSByYXBwZWwgw6AgdXRpbGlzZXIgbG9yc3F1ZSBsZSB0cmFpdGVtZW50IGRlIGxhIHJlcXXDqnRlIGVzdCB0ZXJtaW7DqVxuXHRcdCAqIEBleGFtcGxlXG5cdFx0ICogZGIuZmluZCh7Zm9vOiAnYmFyJywgaGVsbG86ICd3b3JsZCd9LCBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdCAqXHQgLy8gZGF0YSB3aWxsIHJldHVybiBhbnkgaXRlbXMgdGhhdCBoYXZlIGZvbzogYmFyIGFuZFxuXHRcdCAqXHQgLy8gaGVsbG86IHdvcmxkIGluIHRoZWlyIHByb3BlcnRpZXNcblx0XHQgKiB9KTtcblx0XHQgKi9cblx0XHRmaW5kKHF1ZXJ5LCBjYWxsYmFjaykge1xuXHRcdFx0Ly8gaWYgKCFjYWxsYmFjaykge1xuXHRcdFx0Ly8gXHRyZXR1cm47XG5cdFx0XHQvLyB9XG5cblx0XHRcdGxldCB0b2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlW3RoaXMuX2RiTmFtZV0pLnRvZG9zO1xuXG5cdFx0XHRjYWxsYmFjay5jYWxsKHRoaXMsIHRvZG9zLmZpbHRlcihmdW5jdGlvbiAodG9kbykge1xuXHRcdFx0XHRmb3IgKGxldCBxIGluIHF1ZXJ5KSB7XG5cdFx0XHRcdFx0aWYgKHF1ZXJ5W3FdICE9PSB0b2RvW3FdKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fSkpO1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBUcm91dmUgdG91cyBsZXMgw6lsw6ltZW50cyBwcsOpc2VudCBkYW5zIGxlIHN0b2NrYWdlXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgTGEgZm9uY3Rpb24gZGUgcmFwcGVsIHV0aWxpc8OpZSBsb3JzcXVlIHRvdXMgbGVzIMOpbMOpbWVudHMgb250IMOpdMOpIHRyb3V2w6lzXG5cdFx0ICovXG5cdFx0ZmluZEFsbChjYWxsYmFjaykge1xuXHRcdFx0Y2FsbGJhY2sgPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7fTtcblx0XHRcdGNhbGxiYWNrLmNhbGwodGhpcywgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2VbdGhpcy5fZGJOYW1lXSkudG9kb3MpO1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBTYXV2ZWdhcmRlIGxlcyBkb25uw6llcyBkYW5zIGxhIEJERC4gU2kgYXVjdW4gw6lsw6ltZW50IG4nZXhpc3RlLCB1biBub3V2ZWF1IMOpbMOpbWVudCBzZXJhIGNyw6nDqSwgc2lub24gdW5lIG1pc2Ugw6Agam91ciBkZXMgcHJvcHJpw6l0w6lzIGRlIGwnIMOpbMOpbWVudCBleGlzdGFudCBzZXJhIHLDqWFsaXPDqVxuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fSB1cGRhdGVEYXRhIEwnb2JqZXQgZGF0YSDDoCBzYXV2ZWdhcmRlciBkYW5zIGxhIEJERFxuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIExhIGZvbmN0aW9uIGRlIHJhcHBlbCDDoCB1dGlsaXNlciBhcHLDqHMgbGEgc2F1dmVnYXJkZVxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBpZCBMJ2lkIGRlIGwnw6lsw6ltZW50IMOgIHNhdXZlZ2FyZGVyIChmYWN1bHRhdGlmKVxuXHRcdCAqL1xuXHRcdHNhdmUodXBkYXRlRGF0YSwgY2FsbGJhY2ssIGlkKSB7XG5cdFx0XHRsZXQgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlW3RoaXMuX2RiTmFtZV0pO1xuXHRcdFx0bGV0IHRvZG9zID0gZGF0YS50b2Rvcztcblx0XHRcdGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG5cdFx0XHQvLyBHZW5lcmVyIHVuIElEXG5cdFx0XHRsZXQgbmV3SWQgPSBcIlwiO1xuXHRcdFx0bGV0IGNoYXJzZXQgPSBcIjAxMjM0NTY3ODlcIjtcblxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcblx0XHRcdFx0bmV3SWQgKz0gY2hhcnNldC5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcnNldC5sZW5ndGgpKTtcblx0XHRcdH1cblx0XHRcdC8vIFNpIHVuIElEIGEgw6l0w6kgZG9ubsOpLCByZWNoZXJjaGV6IGwnw6lsw6ltZW50IGV0IG1ldHRleiDDoCBqb3VyIGNoYXF1ZSBwcm9wcmnDqXTDqVxuXHRcdFx0aWYgKGlkKSB7XG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAodG9kb3NbaV0uaWQgPT09IGlkKSB7XG5cdFx0XHRcdFx0XHRmb3IgKGxldCBrZXkgaW4gdXBkYXRlRGF0YSkge1xuXHRcdFx0XHRcdFx0XHR0b2Rvc1tpXVtrZXldID0gdXBkYXRlRGF0YVtrZXldO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGxvY2FsU3RvcmFnZVt0aGlzLl9kYk5hbWVdID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG5cdFx0XHRcdGNhbGxiYWNrLmNhbGwodGhpcywgdG9kb3MpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gQXNzaWduZXIgdW4gSURcblx0XHRcdFx0LyoqXG5cdFx0XHRcdCAqIEfDqW7DqXJlIHVuIGlkZW50aWZpYW50IHVuaXF1ZVxuXHRcdFx0XHQgKiBAc2VlICBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9mci9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9PYmpldHNfZ2xvYmF1eC9EYXRlL25vd1xuXHRcdFx0XHQgKiBAZXhhbXBsZVxuXHRcdFx0XHQgKiByZXR1cm5zIHtudW1iZXJ9IDE1MTkzMjY5Nzc3NjVcblx0XHRcdFx0ICovXG5cdFx0XHRcdC8vIHVwZGF0ZURhdGEuaWQgPSBwYXJzZUludChuZXdJZCk7XG5cdFx0XHRcdHVwZGF0ZURhdGEuaWQgPSBEYXRlLm5vdygpO1xuXHRcdFx0XHR0b2Rvcy5wdXNoKHVwZGF0ZURhdGEpO1xuXHRcdFx0XHRsb2NhbFN0b3JhZ2VbdGhpcy5fZGJOYW1lXSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuXHRcdFx0XHRjYWxsYmFjay5jYWxsKHRoaXMsIFt1cGRhdGVEYXRhXSk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIFN1cHByaW1lIHVuIMOpbMOpbWVudCBkdSBzdG9ja2FnZSBlbiBzZSBiYXNhbnQgc3VyIHNvbiBJRFxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBpZCBMJ2lkIGRlIGwnw6lsw6ltZW50IMOgIHN1cHByaW1lclxuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIExhIGZvbmN0aW9uIGRlIHJhcHBlbCB1dGlsaXPDqWUgYXByw6hzIGxhIHN1cHByZXNzaW9uXG5cdFx0ICovXG5cdFx0cmVtb3ZlKGlkLCBjYWxsYmFjaykge1xuXHRcdFx0bGV0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVt0aGlzLl9kYk5hbWVdKTtcblx0XHRcdGxldCB0b2RvcyA9IGRhdGEudG9kb3M7XG5cdFx0XHRsZXQgdG9kb0lkO1xuXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmICh0b2Rvc1tpXS5pZCA9PSBpZCkge1xuXHRcdFx0XHRcdHRvZG9JZCA9IHRvZG9zW2ldLmlkO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHRvZG9zW2ldLmlkID09IHRvZG9JZCkge1xuXHRcdFx0XHRcdHRvZG9zLnNwbGljZShpLCAxKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRsb2NhbFN0b3JhZ2VbdGhpcy5fZGJOYW1lXSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuXHRcdFx0Y2FsbGJhY2suY2FsbCh0aGlzLCB0b2Rvcyk7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIETDqW1hcnJlIHVuIG5vdXZlYXUgc3RvY2thZ2Vcblx0XHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayBMYSBmb25jdGlvbiBkZSByYXBwZWwgdXRpbGlzw6llIGFwcsOocyBhdm9pciBlbnZvecOpIGxlcyBkb25uw6llc1xuXHRcdCAqL1xuXHRcdGRyb3AoY2FsbGJhY2spIHtcblx0XHRcdGxldCBkYXRhID0ge1xuXHRcdFx0XHR0b2RvczogW11cblx0XHRcdH07XG5cdFx0XHRsb2NhbFN0b3JhZ2VbdGhpcy5fZGJOYW1lXSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuXHRcdFx0Y2FsbGJhY2suY2FsbCh0aGlzLCBkYXRhLnRvZG9zKTtcblx0XHR9O1xuXHR9O1xuXHQvLyBFeHBvcnQgdG8gd2luZG93XG5cdHdpbmRvdy5hcHAgPSB3aW5kb3cuYXBwIHx8IHt9O1xuXHR3aW5kb3cuYXBwLlN0b3JlID0gU3RvcmU7XG59KSh3aW5kb3cpOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLypqc2hpbnQgbGF4YnJlYWs6dHJ1ZSAqL1xuKGZ1bmN0aW9uICh3aW5kb3cpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdGxldCBodG1sRXNjYXBlcyA9IHtcblx0XHQnJic6ICcmYW1wOycsXG5cdFx0JzwnOiAnJmx0OycsXG5cdFx0Jz4nOiAnJmd0OycsXG5cdFx0J1wiJzogJyZxdW90OycsXG5cdFx0J1xcJyc6ICcmI3gyNzsnLFxuXHRcdCdgJzogJyYjeDYwOydcblx0fTtcblxuXHRsZXQgZXNjYXBlSHRtbENoYXIgPSBmdW5jdGlvbiAoY2hyKSB7XG5cdFx0cmV0dXJuIGh0bWxFc2NhcGVzW2Nocl07XG5cdH07XG5cblx0bGV0IHJlVW5lc2NhcGVkSHRtbCA9IC9bJjw+XCInYF0vZztcblx0bGV0IHJlSGFzVW5lc2NhcGVkSHRtbCA9IG5ldyBSZWdFeHAocmVVbmVzY2FwZWRIdG1sLnNvdXJjZSk7XG5cblx0bGV0IGVzY2FwZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcblx0XHRyZXR1cm4gKHN0cmluZyAmJiByZUhhc1VuZXNjYXBlZEh0bWwudGVzdChzdHJpbmcpKSA/XG5cdFx0XHRzdHJpbmcucmVwbGFjZShyZVVuZXNjYXBlZEh0bWwsIGVzY2FwZUh0bWxDaGFyKSA6XG5cdFx0XHRzdHJpbmc7XG5cdH07XG5cblx0LyoqXG5cdCAqIFRFTVBMQVRFIETDqWZpbml0IGxlIHRlbXBsYXRlIHV0aWxpc8OpIHBvdXIgYWZmaWNoZXIgbGVzIHTDomNoZXNcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRjbGFzcyBUZW1wbGF0ZSB7XG5cdFx0Y29uc3RydWN0b3IoKSB7XG5cdFx0XHR0aGlzLmRlZmF1bHRUZW1wbGF0ZSA9ICc8bGkgZGF0YS1pZD1cInt7aWR9fVwiIGNsYXNzPVwie3tjb21wbGV0ZWR9fVwiPicgK1xuXHRcdFx0XHQnPGRpdiBjbGFzcz1cInZpZXdcIj4nICtcblx0XHRcdFx0JzxpbnB1dCBjbGFzcz1cInRvZ2dsZVwiIHR5cGU9XCJjaGVja2JveFwiIHt7Y2hlY2tlZH19PicgK1xuXHRcdFx0XHQnPGxhYmVsPnt7dGl0bGV9fTwvbGFiZWw+JyArXG5cdFx0XHRcdCc8YnV0dG9uIGNsYXNzPVwiZGVzdHJveVwiPjwvYnV0dG9uPicgK1xuXHRcdFx0XHQnPC9kaXY+JyArXG5cdFx0XHRcdCc8L2xpPic7XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogQ3LDqWUgdW4gw6lsw6ltZW50IEhUTUwgZXQgcGxhY2UgbGUgdGVtcGxhdGUgZGFucyBsJ2FwcGxpY2F0aW9uLiBcblx0XHQgKiBOb3JtYWxlbWVudCwgaWwgZXN0IGNvbnNlaWxsw6kgZCd1dGlsaXNlciB1biBtb3RldXIgZGUgdGVtcGxhdGUgY29tbWUgTXVzdGFjaGUgb3UgSGFuZGxlYmFycy5cblx0XHQgKiBQb3VyIHNpbXBsaWZpZXIgbm90cmUgYXBwbGljYXRpb24sIG5vdXMgYXZvbnMgZMOpY2lkw6kgZGUgY3LDqWVyIHVuIHRlbXBsYXRlIGVuIHZhbmlsbGEgSlMuXG5cdFx0ICogQHBhcmFtIHtvYmplY3R9IGRhdGEgTCdvYmpldCBjb250ZW5hbnQgbGVzIGluZm9ybWF0aW9ucyDDoCByZW1wbGFjZXIgZGFucyBsZSB0ZW1wbGF0ZS5cblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfSBDaGHDrm5lIEhUTUwgZCd1biDDqWzDqW1lbnQgPGxpPiBMZSB0ZW1wbGF0ZSBIVE1MIGNvbnRlbmFudCBsJ8OpbMOpbWVudFxuXHRcdCAqIEBleGFtcGxlXG5cdFx0ICogdmlldy5zaG93KHtcblx0XHQgKiBpZDogMSwgLy8gbCdpZCBkZSBsYSB0w6JjaGVcblx0XHQgKiB0aXRsZTogXCJIZWxsbyBXb3JsZFwiLCAvLyBsZSB0aXRyZSBkZSBsYSB0w6JjaGVcblx0XHQgKiBjb21wbGV0ZWQ6IDAsIC8vIGxhIHTDomNoZSBlc3QgcGFyIGTDqWZhdXQgbm9uIHRlcm1pbsOpZVxuXHRcdH0pO1xuXHRcdCAqL1xuXHRcdHNob3coZGF0YSkge1xuXHRcdFx0bGV0IGksIGw7XG5cdFx0XHRsZXQgdmlldyA9ICcnO1xuXG5cdFx0XHRmb3IgKGkgPSAwLCBsID0gZGF0YS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0XHRcdFx0bGV0IHRlbXBsYXRlID0gdGhpcy5kZWZhdWx0VGVtcGxhdGU7XG5cdFx0XHRcdGxldCBjb21wbGV0ZWQgPSAnJztcblx0XHRcdFx0bGV0IGNoZWNrZWQgPSAnJztcblxuXHRcdFx0XHRpZiAoZGF0YVtpXS5jb21wbGV0ZWQpIHtcblx0XHRcdFx0XHRjb21wbGV0ZWQgPSAnY29tcGxldGVkJztcblx0XHRcdFx0XHRjaGVja2VkID0gJ2NoZWNrZWQnO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKCd7e2lkfX0nLCBkYXRhW2ldLmlkKTtcblx0XHRcdFx0dGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKCd7e3RpdGxlfX0nLCBlc2NhcGUoZGF0YVtpXS50aXRsZSkpO1xuXHRcdFx0XHR0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UoJ3t7Y29tcGxldGVkfX0nLCBjb21wbGV0ZWQpO1xuXHRcdFx0XHR0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UoJ3t7Y2hlY2tlZH19JywgY2hlY2tlZCk7XG5cblx0XHRcdFx0dmlldyA9IHZpZXcgKyB0ZW1wbGF0ZTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHZpZXc7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIEFmZmljaGUgdW4gY29tcHRldXIgZGUgdMOiY2hlcyBhY3RpdmVzIGVuIGJhcyDDoCBnYXVjaGUgZGUgbCdhcHBsaWNhdGlvblxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBhY3RpdmVUb2RvcyBMZSBub21icmUgZGUgdMOiY2hlcyBhY3RpdmVzXG5cdFx0ICogQHJldHVybnMge3N0cmluZ30gQ2hhw65uZSBjb250ZW5hbnQgbGUgbm9tYnJlXG5cdFx0ICovXG5cdFx0aXRlbUNvdW50ZXIoYWN0aXZlVG9kb3MpIHtcblx0XHRcdGxldCBwbHVyYWwgPSBhY3RpdmVUb2RvcyA9PT0gMSA/ICcnIDogJ3MnO1xuXG5cdFx0XHRyZXR1cm4gJzxzdHJvbmc+JyArIGFjdGl2ZVRvZG9zICsgJzwvc3Ryb25nPiBpdGVtJyArIHBsdXJhbCArICcgbGVmdCc7XG5cdFx0fTtcblxuXHRcdC8qKiBcblx0XHQgKiBBZmZpY2hlIG91IG5vbiBsZSBib3V0b24gXCJDbGVhciBDb21wbGV0ZWRcIiAoc2kgcGFzIGRlIHTDomNoZXMgdGVybWluw6llcyA9IHBhcyBkZSBib3V0b24pXG5cdFx0ICogQHBhcmFtICB7TnVtYmVyfSBjb21wbGV0ZWRUb2RvcyBMZSBub21icmUgZGUgdMOiY2hlIGNvbXBsw6l0w6llc1xuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9IENoYcOubmUgY29udGVuYW50IGxlIG5vbWJyZVxuXHRcdCAqL1xuXHRcdGNsZWFyQ29tcGxldGVkQnV0dG9uKGNvbXBsZXRlZFRvZG9zKSB7XG5cdFx0XHRpZiAoY29tcGxldGVkVG9kb3MgPiAwKSB7XG5cdFx0XHRcdHJldHVybiAnQ2xlYXIgY29tcGxldGVkJztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiAnJzsgLy8gUkVUVVJOIGl0ZW1Db3VudGVyTGEgY2hhaW5lIGRlIGNhcmFjdMOocmUgY29udGVuYW50IGxlIHRleHRlIGR1IGJvdXRvbi5cblx0XHRcdH1cblx0XHR9O1xuXHR9O1xuXHQvLyBFeHBvcnQgdG8gd2luZG93XG5cdHdpbmRvdy5hcHAgPSB3aW5kb3cuYXBwIHx8IHt9O1xuXHR3aW5kb3cuYXBwLlRlbXBsYXRlID0gVGVtcGxhdGU7XG59KSh3aW5kb3cpOyIsIi8qZ2xvYmFsIHFzLCBxc2EsICRvbiwgJHBhcmVudCwgJGRlbGVnYXRlICovXG5cbihmdW5jdGlvbiAod2luZG93KSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0LyoqIFxuXHQgKiBWSUVXIETDqWZpbml0IGxlcyB2YWxldXJzIHBhciBkw6lmYXV0IGR1IHRlbXBsYXRlIGFpbnNpIHF1ZSBsZXMgaW50w6lyYWN0aW9ucyBhdmVjIGxlIERPTSAodG91Y2hlcyBkdSBjbGF2aWVyIGV0IMOpdsOobmVtZW50cylcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlIHRlbXBsYXRlIHV0aWxpc8OpXG5cdCAqL1xuXHRjbGFzcyBWaWV3IHtcblx0XHRjb25zdHJ1Y3Rvcih0ZW1wbGF0ZSkge1xuXHRcdFx0dGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXG5cdFx0XHR0aGlzLkVOVEVSX0tFWSA9IDEzO1xuXHRcdFx0dGhpcy5FU0NBUEVfS0VZID0gMjc7XG5cblx0XHRcdHRoaXMuJHRvZG9MaXN0ID0gcXMoJy50b2RvLWxpc3QnKTtcblx0XHRcdHRoaXMuJHRvZG9JdGVtQ291bnRlciA9IHFzKCcudG9kby1jb3VudCcpO1xuXHRcdFx0dGhpcy4kY2xlYXJDb21wbGV0ZWQgPSBxcygnLmNsZWFyLWNvbXBsZXRlZCcpO1xuXHRcdFx0dGhpcy4kbWFpbiA9IHFzKCcubWFpbicpO1xuXHRcdFx0dGhpcy4kZm9vdGVyID0gcXMoJy5mb290ZXInKTtcblx0XHRcdHRoaXMuJHRvZ2dsZUFsbCA9IHFzKCcudG9nZ2xlLWFsbCcpO1xuXHRcdFx0dGhpcy4kbmV3VG9kbyA9IHFzKCcubmV3LXRvZG8nKTtcblx0XHR9XG5cblx0XHQvKiogXG5cdFx0ICogU3VwcHJpbWUgdW5lIHTDomNoZSBkZSBsYSBsaXN0ZVxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBpZCBMJ2lkIGRlIGxhIHTDomNoZSDDoCBzdXBwcmltZXJcblx0XHQgKi9cblx0XHRfcmVtb3ZlSXRlbShpZCkge1xuXHRcdFx0bGV0IGVsZW0gPSBxcygnW2RhdGEtaWQ9XCInICsgaWQgKyAnXCJdJyk7XG5cblx0XHRcdGlmIChlbGVtKSB7XG5cdFx0XHRcdHRoaXMuJHRvZG9MaXN0LnJlbW92ZUNoaWxkKGVsZW0pO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvKiogXG5cdFx0ICogQWZmaWNoZSBvdSBjYWNoZSBsZXMgw6lsw6ltZW50cyB0ZXJtaW7DqXNcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gY29tcGxldGVkQ291bnQgTGUgbm9tYnJlIGQnw6lsw6ltZW50cyB0ZXJtaW7DqXNcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IHZpc2libGUgTGVzIMOpbMOpbWVudHMgc29udC1pbHMgdmlzaWJsZXMgb3Ugbm9uID9cblx0XHQgKi9cblx0XHRfY2xlYXJDb21wbGV0ZWRCdXR0b24oY29tcGxldGVkQ291bnQsIHZpc2libGUpIHtcblx0XHRcdHRoaXMuJGNsZWFyQ29tcGxldGVkLmlubmVySFRNTCA9IHRoaXMudGVtcGxhdGUuY2xlYXJDb21wbGV0ZWRCdXR0b24oY29tcGxldGVkQ291bnQpO1xuXHRcdFx0dGhpcy4kY2xlYXJDb21wbGV0ZWQuc3R5bGUuZGlzcGxheSA9IHZpc2libGUgPyAnYmxvY2snIDogJ25vbmUnO1xuXHRcdH07XG5cblx0XHQvKiogXG5cdFx0ICogQWZmaWNoZSBvdSBjYWNoZSBsZXMgw6lsw6ltZW50cyB0ZXJtaW7DqXNcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gY3VycmVudFBhZ2UgTGUgZmlsdHJlIGFwcGxpcXXDqSA6ICcnIC8gYWN0aXZlIC8gY29tcGxldGVkXG5cdFx0ICovXG5cdFx0X3NldEZpbHRlcihjdXJyZW50UGFnZSkge1xuXHRcdFx0cXMoJy5maWx0ZXJzIC5zZWxlY3RlZCcpLmNsYXNzTmFtZSA9ICcnO1xuXHRcdFx0cXMoJy5maWx0ZXJzIFtocmVmPVwiIy8nICsgY3VycmVudFBhZ2UgKyAnXCJdJykuY2xhc3NOYW1lID0gJ3NlbGVjdGVkJztcblx0XHR9O1xuXG5cdFx0LyoqIFxuXHRcdCAqIFRlc3Qgc2kgdW5lIHTDomNoZSBlc3QgdGVybWluw6llIG91IG5vblxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBpZCBMJ2lkIGRlIGxhIHTDomNoZSDDoCB0ZXN0ZXJcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IGNvbXBsZXRlZCBMYSB0w6JjaGUgZXN0LWVsbGUgdGVybWluw6llIG91IG5vbiA/XG5cdFx0ICovXG5cdFx0X2VsZW1lbnRDb21wbGV0ZShpZCwgY29tcGxldGVkKSB7XG5cdFx0XHRsZXQgbGlzdEl0ZW0gPSBxcygnW2RhdGEtaWQ9XCInICsgaWQgKyAnXCJdJyk7XG5cblx0XHRcdC8vIGlmICghbGlzdEl0ZW0pIHtcblx0XHRcdC8vIFx0cmV0dXJuO1xuXHRcdFx0Ly8gfVxuXG5cdFx0XHRsaXN0SXRlbS5jbGFzc05hbWUgPSBjb21wbGV0ZWQgPyAnY29tcGxldGVkJyA6ICcnO1xuXG5cdFx0XHQvLyBEYW5zIGxlIGNhcyBvw7kgaWwgYSDDqXTDqSBiYXNjdWzDqSDDoCBwYXJ0aXIgZCd1biDDqXbDqW5lbWVudCBldCBub24gZW4gY2xpcXVhbnQgc3VyIGxhIGNhc2Ugw6AgY29jaGVyXG5cdFx0XHRxcygnaW5wdXQnLCBsaXN0SXRlbSkuY2hlY2tlZCA9IGNvbXBsZXRlZDtcblx0XHR9O1xuXG5cdFx0LyoqIFxuXHRcdCAqIEVkaXRlciB1bmUgdMOiY2hlIGRhbnMgbGEgbGlzdGUgKGdyw6JjZSBhdSBkb3VibGUgY2xpY2spXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IGlkIEwnaWQgZGUgbGEgdMOiY2hlIMOgIMOpZGl0ZXJcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGUgTGUgbm91dmVhdSB0aXRyZSBkZSBsYSB0w6JjaGVcblx0XHQgKi9cblx0XHRfZWRpdEl0ZW0oaWQsIHRpdGxlKSB7XG5cdFx0XHRsZXQgbGlzdEl0ZW0gPSBxcygnW2RhdGEtaWQ9XCInICsgaWQgKyAnXCJdJyk7XG5cblx0XHRcdC8vIGlmICghbGlzdEl0ZW0pIHtcblx0XHRcdC8vIFx0cmV0dXJuO1xuXHRcdFx0Ly8gfVxuXG5cdFx0XHRsaXN0SXRlbS5jbGFzc05hbWUgPSBsaXN0SXRlbS5jbGFzc05hbWUgKyAnIGVkaXRpbmcnO1xuXG5cdFx0XHRsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXHRcdFx0aW5wdXQuY2xhc3NOYW1lID0gJ2VkaXQnO1xuXG5cdFx0XHRsaXN0SXRlbS5hcHBlbmRDaGlsZChpbnB1dCk7XG5cdFx0XHRpbnB1dC5mb2N1cygpO1xuXHRcdFx0aW5wdXQudmFsdWUgPSB0aXRsZTtcblx0XHR9O1xuXG5cdFx0LyoqIFxuXHRcdCAqIEluZGlxdWUgcXVlIGwnw6lkaXRpb24gZCd1bmUgdMOiY2hlIGVzdCB0ZXJtaW7DqWVcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gaWQgTCdpZCBkZSBsYSB0w6JjaGUgcXVpIMOpdGFpdCBlbiDDqWRpdGlvblxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSBMZSBub3V2ZWF1IHRpdHJlIGRlIGxhIHTDomNoZVxuXHRcdCAqL1xuXHRcdF9lZGl0SXRlbURvbmUoaWQsIHRpdGxlKSB7XG5cdFx0XHRsZXQgbGlzdEl0ZW0gPSBxcygnW2RhdGEtaWQ9XCInICsgaWQgKyAnXCJdJyk7XG5cblx0XHRcdC8vIGlmICghbGlzdEl0ZW0pIHtcblx0XHRcdC8vIFx0cmV0dXJuO1xuXHRcdFx0Ly8gfVxuXG5cdFx0XHRsZXQgaW5wdXQgPSBxcygnaW5wdXQuZWRpdCcsIGxpc3RJdGVtKTtcblx0XHRcdGxpc3RJdGVtLnJlbW92ZUNoaWxkKGlucHV0KTtcblxuXHRcdFx0bGlzdEl0ZW0uY2xhc3NOYW1lID0gbGlzdEl0ZW0uY2xhc3NOYW1lLnJlcGxhY2UoJ2VkaXRpbmcnLCAnJyk7XG5cblx0XHRcdHFzYSgnbGFiZWwnLCBsaXN0SXRlbSkuZm9yRWFjaChmdW5jdGlvbiAobGFiZWwpIHtcblx0XHRcdFx0bGFiZWwudGV4dENvbnRlbnQgPSB0aXRsZTtcblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHQvKiogXG5cdFx0ICogSW5kaXF1ZSBxdWUgbCfDqWRpdGlvbiBkJ3VuZSB0w6JjaGUgZXN0IHRlcm1pbsOpZVxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB2aWV3Q21kIExhIGZvbmN0aW9uIGFjdGl2ZVxuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbWV0ZXIgTGVzIHBhcmFtw6h0cmVzIGFjdGlmc1xuXHRcdCAqL1xuXHRcdHJlbmRlcih2aWV3Q21kLCBwYXJhbWV0ZXIpIHtcblx0XHRcdGxldCBzZWxmID0gdGhpcztcblx0XHRcdGxldCB2aWV3Q29tbWFuZHMgPSB7XG5cdFx0XHRcdHNob3dFbnRyaWVzOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0c2VsZi4kdG9kb0xpc3QuaW5uZXJIVE1MID0gc2VsZi50ZW1wbGF0ZS5zaG93KHBhcmFtZXRlcik7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHJlbW92ZUl0ZW06IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRzZWxmLl9yZW1vdmVJdGVtKHBhcmFtZXRlcik7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHVwZGF0ZUVsZW1lbnRDb3VudDogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHNlbGYuJHRvZG9JdGVtQ291bnRlci5pbm5lckhUTUwgPSBzZWxmLnRlbXBsYXRlLml0ZW1Db3VudGVyKHBhcmFtZXRlcik7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGNsZWFyQ29tcGxldGVkQnV0dG9uOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0c2VsZi5fY2xlYXJDb21wbGV0ZWRCdXR0b24ocGFyYW1ldGVyLmNvbXBsZXRlZCwgcGFyYW1ldGVyLnZpc2libGUpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRjb250ZW50QmxvY2tWaXNpYmlsaXR5OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0c2VsZi4kbWFpbi5zdHlsZS5kaXNwbGF5ID0gc2VsZi4kZm9vdGVyLnN0eWxlLmRpc3BsYXkgPSBwYXJhbWV0ZXIudmlzaWJsZSA/ICdibG9jaycgOiAnbm9uZSc7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHRvZ2dsZUFsbDogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHNlbGYuJHRvZ2dsZUFsbC5jaGVja2VkID0gcGFyYW1ldGVyLmNoZWNrZWQ7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHNldEZpbHRlcjogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHNlbGYuX3NldEZpbHRlcihwYXJhbWV0ZXIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRjbGVhck5ld1RvZG86IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRzZWxmLiRuZXdUb2RvLnZhbHVlID0gJyc7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGVsZW1lbnRDb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHNlbGYuX2VsZW1lbnRDb21wbGV0ZShwYXJhbWV0ZXIuaWQsIHBhcmFtZXRlci5jb21wbGV0ZWQpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRlZGl0SXRlbTogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHNlbGYuX2VkaXRJdGVtKHBhcmFtZXRlci5pZCwgcGFyYW1ldGVyLnRpdGxlKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0ZWRpdEl0ZW1Eb25lOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0c2VsZi5fZWRpdEl0ZW1Eb25lKHBhcmFtZXRlci5pZCwgcGFyYW1ldGVyLnRpdGxlKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0dmlld0NvbW1hbmRzW3ZpZXdDbWRdKCk7XG5cdFx0fTtcblxuXHRcdC8qKiBcblx0XHQgKiBEw6lmaW5pdCBsZXMgYWN0aW9ucyBhcHLDqHMgbCfDqWRpdGlvbiBkJ3VuZSB0w6JjaGVcblx0XHQgKiBAcGFyYW0ge2VsZW1lbnR9IGVsZW1lbnQgTGEgdMOiY2hlIGRvbnQgb24gY2hlcmNoZSBsJ2lkXG5cdFx0ICogUmV0dXJuIEwnaWQgZGUgbGEgdMOiY2hlXG5cdFx0ICovXG5cdFx0X2l0ZW1JZChlbGVtZW50KSB7XG5cdFx0XHRsZXQgbGkgPSAkcGFyZW50KGVsZW1lbnQsICdsaScpO1xuXHRcdFx0cmV0dXJuIHBhcnNlSW50KGxpLmRhdGFzZXQuaWQsIDEwKTtcblx0XHR9O1xuXG5cdFx0LyoqIFxuXHRcdCAqIETDqWZpbml0IGxlcyBhY3Rpb25zIGFwcsOocyBsJ8OpZGl0aW9uIGQndW5lIHTDomNoZVxuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGhhbmRsZXIgRm9uY3Rpb24gZGUgcmFwcGVsIHF1aSBlc3QgZXjDqWN1dMOpZSBsb3JzIGRlIGwnYW5udWxhdGlvbiBkZSBsJ8OpZGl0aW9uIGQndW5lIHTDomNoZVxuXHRcdCAqL1xuXHRcdF9iaW5kSXRlbUVkaXREb25lKGhhbmRsZXIpIHtcblx0XHRcdGxldCBzZWxmID0gdGhpcztcblx0XHRcdCRkZWxlZ2F0ZShzZWxmLiR0b2RvTGlzdCwgJ2xpIC5lZGl0JywgJ2JsdXInLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGlmICghdGhpcy5kYXRhc2V0LmlzY2FuY2VsZWQpIHtcblx0XHRcdFx0XHRoYW5kbGVyKHtcblx0XHRcdFx0XHRcdGlkOiBzZWxmLl9pdGVtSWQodGhpcyksXG5cdFx0XHRcdFx0XHR0aXRsZTogdGhpcy52YWx1ZVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0JGRlbGVnYXRlKHNlbGYuJHRvZG9MaXN0LCAnbGkgLmVkaXQnLCAna2V5cHJlc3MnLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRcdFx0aWYgKGV2ZW50LmtleUNvZGUgPT09IHNlbGYuRU5URVJfS0VZKSB7XG5cdFx0XHRcdFx0Ly8gUmV0aXJleiBsZSBjdXJzZXVyIGRlIGwnZW50csOpZSBsb3JzcXVlIHZvdXMgYXBwdXlleiBzdXIgRW50csOpZSwgY29tbWUgcydpbCBcblx0XHRcdFx0XHQvLyDDqXRhaXQgdW5lIHZyYWllIGZvcm1lXG5cdFx0XHRcdFx0dGhpcy5ibHVyKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHQvKiogXG5cdFx0ICogRMOpZmluaXQgbGVzIGFjdGlvbnMgbG9yc3F1ZSBsJ8OpZGl0aW9uIGQndW5lIHTDomNoZSBlc3QgYW5udWzDqWVcblx0XHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBoYW5kbGVyIEZvbmN0aW9uIGRlIHJhcHBlbCBxdWkgZXN0IGV4w6ljdXTDqWUgbG9ycyBkZSBsJ2FubnVsYXRpb24gZGUgbCfDqWRpdGlvbiBkJ3VuZSB0w6JjaGVcblx0XHQgKi9cblx0XHRfYmluZEl0ZW1FZGl0Q2FuY2VsKGhhbmRsZXIpIHtcblx0XHRcdGxldCBzZWxmID0gdGhpcztcblx0XHRcdCRkZWxlZ2F0ZShzZWxmLiR0b2RvTGlzdCwgJ2xpIC5lZGl0JywgJ2tleXVwJywgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0XHRcdGlmIChldmVudC5rZXlDb2RlID09PSBzZWxmLkVTQ0FQRV9LRVkpIHtcblx0XHRcdFx0XHR0aGlzLmRhdGFzZXQuaXNjYW5jZWxlZCA9IHRydWU7XG5cdFx0XHRcdFx0dGhpcy5ibHVyKCk7XG5cblx0XHRcdFx0XHRoYW5kbGVyKHtcblx0XHRcdFx0XHRcdGlkOiBzZWxmLl9pdGVtSWQodGhpcylcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdC8qKiBcblx0XHQgKiBHcmVmZmUgZGVzIMOpY291dGV1cnMgZCfDqXbDqG5lbWVudHMgc3VyIGxlcyB0w6JjaGVzIGVuIGZvbmN0aW9uIGRlcyBhY3Rpb25zIGRlIGwndXRpbGlzYXRldXIsIGPDtHTDqSBIVE1MXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IEwnZXZlbnQgY2hvaXNpXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlciBGb25jdG5pb24gZGUgcmFwcGVsIGV4w6ljdXTDqWUgc2Vsb24gbGEgc2l0dWF0aW9uXG5cdFx0ICovXG5cdFx0YmluZChldmVudCwgaGFuZGxlcikge1xuXHRcdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdFx0Ly8gQW3DqWxpb3JhdGlvblxuXHRcdFx0Ly8gTWV0aG9kZSBzZXJ2YW50IGEgYmluYmRlciBwbHVzaWV1ciBldmVudDogZGFucyB1bmUgbG9naXF1ZSBkJ2FtZWxpb3JhenRpb24sIG5vdXMgYXZvbnMgdXRpbGlzZXIgdW4gdHJhaXRlbWVudCBzd2l0Y2gsIHF1aSBlc3QgdW4gcGV1IHBsdXMgbWFpbnRlbmFibGUgZXQgdW4gcGV1IHBsdXMgbGlzaWJsZSBldCBwbHVzIHBlcmZvcm1hbnQuXG5cdFx0XHRzd2l0Y2ggKGV2ZW50KSB7XG5cdFx0XHRcdGNhc2UgJ25ld1RvZG8nOlxuXHRcdFx0XHRcdCRvbihzZWxmLiRuZXdUb2RvLCAnY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0aGFuZGxlcihzZWxmLiRuZXdUb2RvLnZhbHVlKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAncmVtb3ZlQ29tcGxldGVkJzpcblx0XHRcdFx0XHQkb24oc2VsZi4kY2xlYXJDb21wbGV0ZWQsICdjbGljaycsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGhhbmRsZXIoKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAndG9nZ2xlQWxsJzpcblx0XHRcdFx0XHQkb24oc2VsZi4kdG9nZ2xlQWxsLCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRoYW5kbGVyKHtcblx0XHRcdFx0XHRcdFx0Y29tcGxldGVkOiB0aGlzLmNoZWNrZWRcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdpdGVtRWRpdCc6XG5cdFx0XHRcdFx0JGRlbGVnYXRlKHNlbGYuJHRvZG9MaXN0LCAnbGkgbGFiZWwnLCAnZGJsY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRoYW5kbGVyKHtcblx0XHRcdFx0XHRcdFx0aWQ6IHNlbGYuX2l0ZW1JZCh0aGlzKVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2l0ZW1SZW1vdmUnOlxuXHRcdFx0XHRcdCRkZWxlZ2F0ZShzZWxmLiR0b2RvTGlzdCwgJy5kZXN0cm95JywgJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0aGFuZGxlcih7XG5cdFx0XHRcdFx0XHRcdGlkOiBzZWxmLl9pdGVtSWQodGhpcylcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdpdGVtVG9nZ2xlJzpcblx0XHRcdFx0XHQkZGVsZWdhdGUoc2VsZi4kdG9kb0xpc3QsICcudG9nZ2xlJywgJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0aGFuZGxlcih7XG5cdFx0XHRcdFx0XHRcdGlkOiBzZWxmLl9pdGVtSWQodGhpcyksXG5cdFx0XHRcdFx0XHRcdGNvbXBsZXRlZDogdGhpcy5jaGVja2VkXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnaXRlbUVkaXREb25lJzpcblx0XHRcdFx0XHRzZWxmLl9iaW5kSXRlbUVkaXREb25lKGhhbmRsZXIpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgJ2l0ZW1FZGl0Q2FuY2VsJzoge1xuXHRcdFx0XHRcdHNlbGYuX2JpbmRJdGVtRWRpdENhbmNlbChoYW5kbGVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cdH07XG5cblx0Ly8gRXhwb3J0IHRvIHdpbmRvd1xuXHR3aW5kb3cuYXBwID0gd2luZG93LmFwcCB8fCB7fTtcblx0d2luZG93LmFwcC5WaWV3ID0gVmlldztcbn0od2luZG93KSk7Il0sInNvdXJjZVJvb3QiOiIifQ==