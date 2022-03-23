/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://frontend/./src/assets/css/style.css?");

/***/ }),

/***/ "./src/components/banner.js":
/*!**********************************!*\
  !*** ./src/components/banner.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/render */ \"./src/utils/render.js\");\n\n\nconst getTemplate = () => {\n  return `<div class=\"text-center mb-5\">\n<img src=\"/assets/landscape/banner-xs_datejust-36_portrait.jpg\" class=\"img-fluid\" alt=\"banner\">\n </div>`;\n}\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  const template = getTemplate();\n  return (0,_utils_render__WEBPACK_IMPORTED_MODULE_0__.createElement)(template);\n}\n\n\n//# sourceURL=webpack://frontend/./src/components/banner.js?");

/***/ }),

/***/ "./src/components/home.js":
/*!********************************!*\
  !*** ./src/components/home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_text_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/text-component */ \"./src/components/text-component.js\");\n/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/render */ \"./src/utils/render.js\");\n/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/const */ \"./src/const.js\");\n/* harmony import */ var _components_watch_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/watch-grid */ \"./src/components/watch-grid.js\");\n/* harmony import */ var _components_banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/banner */ \"./src/components/banner.js\");\n\n\n\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(container, watchClickHandler) {\n  container.innerHTML = '';\n\n  const bannerContent = (0,_components_banner__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  (0,_utils_render__WEBPACK_IMPORTED_MODULE_1__.render)(container, bannerContent, _const__WEBPACK_IMPORTED_MODULE_2__.RenderPosition.AFTERBEGIN);\n\n  const textContent = (0,_components_text_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  (0,_utils_render__WEBPACK_IMPORTED_MODULE_1__.render)(container, textContent, _const__WEBPACK_IMPORTED_MODULE_2__.RenderPosition.BEFOREEND);\n\n  _components_watch_grid__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getElement(_const__WEBPACK_IMPORTED_MODULE_2__.apiUrl)\n    .then(content => {\n      (0,_utils_render__WEBPACK_IMPORTED_MODULE_1__.render)(container, content, _const__WEBPACK_IMPORTED_MODULE_2__.RenderPosition.BEFOREEND);\n    })\n    .then(() => _components_watch_grid__WEBPACK_IMPORTED_MODULE_3__[\"default\"].setHandler(watchClickHandler))\n    .catch(console.error);\n};\n\n\n//# sourceURL=webpack://frontend/./src/components/home.js?");

/***/ }),

/***/ "./src/components/navbar.js":
/*!**********************************!*\
  !*** ./src/components/navbar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/render */ \"./src/utils/render.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  getElement() {\n    const template = `\n<header>\n    <div class=\"container-md\">\n        <nav class=\"navbar navbar-expand-md navbar-light \">\n            <div class=\"container-fluid\">\n        <a class=\"navbar-brand\" href=\"#\">\n          <img src=\"/assets/landscape/official-retailer-plaque-en.png\" width=\"100\" height=\"50\" class=\"d-inline-block align-top\" alt=\"\" loading=\"lazy\">\n        </a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbarCollapse\">\n          <ul class=\"navbar-nav mr-auto mb-2 mb-md-0\">\n            <li class=\"nav-item active\">\n              <a id=\"home-link\" class=\"nav-link\" aria-current=\"page\" href=\"#\">Home</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#\">Day-date</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#\">Date Just Pearl</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#\">Date Just</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n        </nav>\n    </div>\n</header>`;\n\n    return (0,_utils_render__WEBPACK_IMPORTED_MODULE_0__.createElement)(template);\n  },\n\n  setHomeListener(handler) {\n    const homeLink = document.getElementById('home-link');\n    if (!homeLink) {\n      throw new Error('Elements not found')\n    }\n    homeLink.addEventListener('click',handler);\n  },\n\n  setListeners(handler) {\n    const links = document.querySelectorAll('a:not(#home-link).nav-link');\n    links.forEach((link) => {\n      link.addEventListener('click', handler);\n    })\n  }\n});\n\n\n//# sourceURL=webpack://frontend/./src/components/navbar.js?");

/***/ }),

/***/ "./src/components/text-component.js":
/*!******************************************!*\
  !*** ./src/components/text-component.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/render */ \"./src/utils/render.js\");\n\n\nconst getTemplate = () => {\n  return `\n  <div class=\"text-center\">\n    <p class=\"fw-bold\">Experience a Rolex</p>\n    <h1 class=\"text-uppercase\">Rolex watches</h1>\n    <p class=\"text-center\">Rolex watches are crafted from the fines rw materials and assembled with scrupulous attention to detail. Every component is designed, developed and produced to the most exacting standartsd.</p>\n</div>\n  `;\n}\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  return (0,_utils_render__WEBPACK_IMPORTED_MODULE_0__.createElement)(getTemplate());\n}\n\n\n//# sourceURL=webpack://frontend/./src/components/text-component.js?");

/***/ }),

/***/ "./src/components/watch-grid.js":
/*!**************************************!*\
  !*** ./src/components/watch-grid.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/const */ \"./src/const.js\");\n/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/render */ \"./src/utils/render.js\");\n\n\n\n\nconst getTemplate = (items) => {\n  const tmpl = items.map(({id, model_number, small_title}) => {\n    const titles = small_title.split(' ');\n    titles.pop();\n    const title = titles.join(' ');\n    const imgName = `${model_number}.png`;\n\n    return `<div class=\"col-6 col-md-4 mb-4 hoverable\" data-id=\"${id}\">\n<img class=\"img-fluid\" src=\"${_const__WEBPACK_IMPORTED_MODULE_0__.imgDir}${imgName}\" alt=\"title\">\n<p class=\"text-center mt-3 mb-0\">Rolex</p>\n<p class=\"text-center text-uppercase\">${title}</p>\n</div>\n`;\n  }).join('');\n\n  return `<div id=\"watch-grid\" class=\"container-md mt-5\"><div class=\"row\">${tmpl}</div></div>`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  getElement(url) {\n    return new Promise((resolve, reject) => {\n      fetch(url)\n        .then(res => res.json())\n        .then(data => {\n          const template = getTemplate(data);\n          const element = (0,_utils_render__WEBPACK_IMPORTED_MODULE_1__.createElement)(template);\n\n          resolve(element);\n        })\n        .catch(err => reject(err));\n    })\n  },\n  setHandler(handler) {\n    const watchLinks = document.querySelectorAll('#watch-grid div.hoverable');\n    watchLinks.forEach((link) => {\n      link.addEventListener('click', handler);\n    })\n  }\n\n\n});\n\n\n//# sourceURL=webpack://frontend/./src/components/watch-grid.js?");

/***/ }),

/***/ "./src/components/watch-item.js":
/*!**************************************!*\
  !*** ./src/components/watch-item.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/const */ \"./src/const.js\");\n/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/render */ \"./src/utils/render.js\");\n\n\n\nconst getTemplate = ({model_number, model_case, water_resistance, large_title, movement, caliber, description, price}) => {\n  const imgName = `${model_number}.png`;\n  return `<div class=\"row\">\n<div class=\"col-sm-1 col-md-6\">\n <p><span class=\"text-uppercase fw-bold\">Model case</span><br/>${model_case}</p>\n <p><span class=\"text-uppercase fw-bold\">Water resistance</span><br/>${water_resistance}</p>\n <p><span class=\"text-uppercase fw-bold\">Movement</span><br/>${movement}</p>\n <p><span class=\"text-uppercase fw-bold\">Caliber</span><br/>${caliber}</p>\n <p><span class=\"text-uppercase fw-bold\">Title</span><br/>${large_title}</p>\n <p><span class=\"text-uppercase fw-bold\">Description</span><br/>${description}</p>\n <p><span class=\"text-uppercase fw-bold\">Price</span><br/>${price}</p>\n</div>\n<div class=\"col-sm-1 col-md-6\">\n <img class=\"img-fluid\" src=\"${_const__WEBPACK_IMPORTED_MODULE_0__.imgDir}/${imgName}\" alt=\"image\">\n</div>\n</div>`;\n}\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(container, id) {\n  return new Promise(((resolve, reject) => {\n    const url = `${_const__WEBPACK_IMPORTED_MODULE_0__.apiUrl}?id=${id}`;\n    fetch(url)\n      .then(res => res.json())\n      .then(data => {\n        const template = getTemplate(data);\n        const element = (0,_utils_render__WEBPACK_IMPORTED_MODULE_1__.createElement)(template);\n\n        container.innerHTML = '';\n        (0,_utils_render__WEBPACK_IMPORTED_MODULE_1__.render)(container, element, _const__WEBPACK_IMPORTED_MODULE_0__.RenderPosition.AFTERBEGIN);\n        resolve(true);\n      })\n      .catch(reject)\n  }))\n}\n\n\n//# sourceURL=webpack://frontend/./src/components/watch-item.js?");

/***/ }),

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RenderPosition\": () => (/* binding */ RenderPosition),\n/* harmony export */   \"apiUrl\": () => (/* binding */ apiUrl),\n/* harmony export */   \"imgDir\": () => (/* binding */ imgDir)\n/* harmony export */ });\nconst RenderPosition = {\n  AFTERBEGIN: `afterbegin`,\n  BEFOREEND: `beforeend`,\n  AFTER: `after`,\n  BEFORE: `before`,\n};\n\n\nconst imgDir = '/assets/img/';\n\n// export const apiUrl = 'http://localhost:8081/api/products';\nconst apiUrl = 'https://programmer20.ishowcasedc10.com/app.php/products';\n\n\n//# sourceURL=webpack://frontend/./src/const.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/assets/css/style.css */ \"./src/assets/css/style.css\");\n/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/render */ \"./src/utils/render.js\");\n/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/const */ \"./src/const.js\");\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/navbar */ \"./src/components/navbar.js\");\n/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/home */ \"./src/components/home.js\");\n/* harmony import */ var _components_watch_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/watch-item */ \"./src/components/watch-item.js\");\n/* harmony import */ var _components_watch_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/watch-grid */ \"./src/components/watch-grid.js\");\n\n\n\n\n\n\n\n\n\nconst [body] = document.getElementsByTagName('body');\nconst container = document.getElementById('app');\n\nfunction watchClickHandler(evt) {\n  evt.preventDefault();\n  const target = evt.target.closest('div');\n  (0,_components_watch_item__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(container, target.dataset.id)\n}\n\nfunction homeClickListener() {\n  (0,_components_home__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(container, watchClickHandler);\n}\n\nfunction catalogClickListener(evt) {\n  const el = evt.target;\n  const catalogName = el.innerText;\n\n  container.innerHTML = '';\n  const url = `${_const__WEBPACK_IMPORTED_MODULE_2__.apiUrl}?catalog=${catalogName}`;\n  _components_watch_grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getElement(url)\n    .then(element => {\n      (0,_utils_render__WEBPACK_IMPORTED_MODULE_1__.render)(container, element, _const__WEBPACK_IMPORTED_MODULE_2__.RenderPosition.AFTERBEGIN);\n    })\n    .then(() => _components_watch_grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"].setHandler(watchClickHandler))\n    .catch(console.error);\n\n}\n\n// render navbar\n(0,_utils_render__WEBPACK_IMPORTED_MODULE_1__.render)(body, _components_navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getElement(), _const__WEBPACK_IMPORTED_MODULE_2__.RenderPosition.AFTERBEGIN);\n_components_navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"].setHomeListener(homeClickListener);\n_components_navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"].setListeners(catalogClickListener);\n\n// render home\n(0,_components_home__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(container, watchClickHandler);\n\n\n//# sourceURL=webpack://frontend/./src/index.js?");

/***/ }),

/***/ "./src/utils/render.js":
/*!*****************************!*\
  !*** ./src/utils/render.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createElement\": () => (/* binding */ createElement),\n/* harmony export */   \"render\": () => (/* binding */ render),\n/* harmony export */   \"replace\": () => (/* binding */ replace)\n/* harmony export */ });\n/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/const */ \"./src/const.js\");\n\n\nconst createElement = (template) => {\n  const newElement = document.createElement(`div`);\n  newElement.innerHTML = template;\n\n  return newElement.firstElementChild;\n};\n\nconst replace = (container, element) => {\n  const oldElement = container.firstChild;\n  if (!oldElement) {\n    render(container, element, _const__WEBPACK_IMPORTED_MODULE_0__.RenderPosition.AFTERBEGIN);\n    return;\n  }\n\n  container.replaceChild(element, container.firstChild);\n}\n\nconst render = (container, element, place) => {\n  switch (place) {\n    case _const__WEBPACK_IMPORTED_MODULE_0__.RenderPosition.AFTERBEGIN:\n      container.prepend(element);\n      break;\n    case _const__WEBPACK_IMPORTED_MODULE_0__.RenderPosition.BEFOREEND:\n      container.append(element);\n      break;\n    case _const__WEBPACK_IMPORTED_MODULE_0__.RenderPosition.AFTER:\n      container.after(element);\n      break;\n    case _const__WEBPACK_IMPORTED_MODULE_0__.RenderPosition.BEFORE:\n      container.before(element);\n      break;\n  }\n};\n\n\n\n\n//# sourceURL=webpack://frontend/./src/utils/render.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;