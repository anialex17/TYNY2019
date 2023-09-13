/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_style_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/style/main.scss */ \"./src/style/main.scss\");\n/* harmony import */ var _src_js_script_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/js/script.js */ \"./src/js/script.js\");\n/* harmony import */ var _src_js_script_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_js_script_js__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://TYNY2019/./index.js?");

/***/ }),

/***/ "./src/style/main.scss":
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://TYNY2019/./src/style/main.scss?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ (() => {

eval("\r\n/* slider */\r\n\r\nvar swiper = new Swiper(\".speakers-slider\", {\r\n    slidesPerView: 2,\r\n    spaceBetween: 30,\r\n    freeMode: true,\r\n    navigation: {\r\n        nextEl: \".swiper-button-next\",\r\n        prevEl: \".swiper-button-prev\",\r\n    },\r\n    pagination: {\r\n        el: \".swiper-pagination\",\r\n        clickable: true,\r\n    },\r\n    breakpoints: {\r\n        320: {\r\n            slidesPerView: 1,\r\n            spaceBetween: 20\r\n        },\r\n        768: {\r\n            slidesPerView: 2,\r\n            spaceBetween: 20\r\n        }\r\n    }\r\n});\r\n\r\n\r\n\r\n\r\n/* form validation */\r\n\r\n\r\nconst emailRegex = /^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/;\r\nconst nameRegex = /^[a-zA-Z]+$/;\r\n\r\n\r\nconst form = document.getElementById(\"form-btn\");\r\nconst inputs = document.querySelectorAll(\".form .form__item\");\r\n\r\ninputs.forEach(input => {\r\n    input.addEventListener(\"change\", () => input.classList.remove(\"error\"))\r\n});\r\n\r\nform.addEventListener(\"click\", e => {\r\n    e.preventDefault();\r\n\r\n    const formData = { name: \"\", email: \"\", message: \"\" };\r\n    let isError = false;\r\n\r\n    inputs.forEach(item => {\r\n        const { name, value } = item;\r\n        const trimValue = value.trim();\r\n\r\n        switch (name) {\r\n            case \"email\": {\r\n                if (emailRegex.test(trimValue)) {\r\n                    formData[name] = trimValue;\r\n                } else {\r\n                    isError = true;\r\n                    item.classList.add(\"error\");\r\n                }\r\n                break;\r\n            }\r\n            case \"name\": {\r\n                if (trimValue.length > 2 && nameRegex.test(trimValue)) {\r\n                    formData[name] = trimValue;\r\n                } else {\r\n                    isError = true;\r\n                    item.classList.add(\"error\");\r\n                }\r\n                break;\r\n            }\r\n            default: {\r\n                if (trimValue.length > 0) {\r\n                    formData[name] = trimValue;\r\n                } else {\r\n                    isError = true;\r\n                    item.classList.add(\"error\");\r\n                }\r\n            }\r\n        }\r\n    });\r\n\r\n    if (!isError) {\r\n        console.log(formData);\r\n    }\r\n})\r\n\r\n/* menu */\r\nconst menuButton = document.querySelector(\".menu-button\")\r\nmenuButton.addEventListener('click', () => {\r\n    menuButton.classList.toggle(\"_active\")\r\n    document.querySelector(\".header_content\").classList.toggle(\"active\")\r\n})\r\n\n\n//# sourceURL=webpack://TYNY2019/./src/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;