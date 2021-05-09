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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".container {\\n  position: absolute;\\n  height: 100%;\\n  width: 70%; }\\n\\n.item {\\n  background-color: coral;\\n  width: 50px;\\n  height: 60px;\\n  text-align: center;\\n  font-size: 2rem;\\n  white-space: nowrap; }\\n  .item:hover {\\n    background-color: cornflowerblue; }\\n\\n.controls {\\n  background-color: #dbdbdb;\\n  box-shadow: -1px 0 5px #818181;\\n  position: absolute;\\n  right: 0;\\n  height: 100%;\\n  width: 30%;\\n  padding: 10px; }\\n  .controls-header {\\n    font-size: x-large;\\n    margin-top: 50px; }\\n  .controls-control {\\n    display: flex;\\n    margin-top: 10px; }\\n\\nhtml, body {\\n  margin: 0;\\n  padding: 0;\\n  width: 100%;\\n  height: 100%;\\n  overflow: hidden;\\n  font-family: 'Courier New', Courier, monospace; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://prettylist-example/./src/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://prettylist-example/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://prettylist-example/./src/index.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://prettylist-example/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var prettylist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prettylist */ \"../prettylist/dist/index.js\");\n/* harmony import */ var prettylist__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prettylist__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ \"./src/index.scss\");\n\n\n\nconst container = document.createElement('div');\ncontainer.classList.add('container');\ndocument.body.append(container);\n\nconst itemCount = 10;\nconst items = [];\nfor (let i = 0; i < itemCount; i += 1) {\n  const item = document.createElement('div');\n  item.innerHTML = i;\n  items.push(item);\n  item.classList.add('item');\n}\n\nconst options = {\n  visible: 5,\n  rotation: 10,\n  loop: true,\n}\nconst prettylist = new (prettylist__WEBPACK_IMPORTED_MODULE_0___default())(items, container, options);\n\n const controls = document.createElement('div');\n controls.classList.add('controls');\n document.body.append(controls);\n\n const header = document.createElement('div');\n header.className = 'controls-header';\n header.innerText = 'Pretty List Demo';\n controls.append(header);\n\n const rotation = document.createElement('div');\n rotation.className = 'controls-control';\n controls.append(rotation);\n\n const rotationLabel = document.createElement('div');\n rotationLabel.className = 'controls-label';\n rotationLabel.innerText = 'Rotation: ';\n rotation.append(rotationLabel);\n\n const rotationValue = document.createElement('div');\n rotationValue.className = 'controls-value';\n rotationValue.innerText = options.rotation;\n \n const rotationSlider = document.createElement('input');\n rotationSlider.className = 'controls-slider';\n rotationSlider.type = 'range';\n rotationSlider.min = 0;\n rotationSlider.max = 30;\n rotationSlider.value = options.rotation;\n rotationSlider.oninput = () => {\n   prettylist.setRotation(rotationSlider.value);\n   rotationValue.innerText = rotationSlider.value;\n }\n rotation.append(rotationSlider, rotationValue);\n\n const visible = document.createElement('div');\n visible.className = 'controls-control';\n controls.append(visible);\n\n const visibleLabel = document.createElement('div');\n visibleLabel.className = 'controls-label';\n visibleLabel.innerText = '# Visible: ';\n visible.append(visibleLabel);\n\n const visibleValue = document.createElement('div');\n visibleValue.className = 'controls-value';\n visibleValue.innerText = options.visible;\n \n const visibleSlider = document.createElement('input');\n visibleSlider.className = 'controls-slider';\n visibleSlider.type = 'range';\n visibleSlider.min = 0;\n visibleSlider.max = 7;\n visibleSlider.value = options.visible;\n visibleSlider.oninput = () => {\n   prettylist.setVisible(visibleSlider.value);\n   visibleValue.innerText = visibleSlider.value;\n }\n visible.append(visibleSlider, visibleValue);\n\n const direction = document.createElement('div');\n direction.className = 'controls-control';\n controls.append(direction);\n\n const directionLabel = document.createElement('div');\n directionLabel.className = 'controls-label';\n directionLabel.innerText = 'Direction: ';\n direction.append(directionLabel);\n\n \n const directionSelect = document.createElement('select');\n directionSelect.className = 'controls-select';\n directionSelect.onchange = () => {\n   prettylist.setDirection(directionSelect.value);\n }\n direction.append(directionSelect);\n\n const vertical = document.createElement('option');\n vertical.className = 'controls-option';\n vertical.innerText = 'vertical';\n directionSelect.append(vertical);\n\n const horizontal = document.createElement('option');\n horizontal.className = 'controls-option';\n horizontal.innerText = 'horizontal';\n directionSelect.append(horizontal);\n\n\n\n//# sourceURL=webpack://prettylist-example/./src/index.js?");

/***/ }),

/***/ "../prettylist/dist/index.js":
/*!***********************************!*\
  !*** ../prettylist/dist/index.js ***!
  \***********************************/
/***/ ((module) => {

eval("(()=>{\"use strict\";var t={800:(t,e,i)=>{i.d(e,{Z:()=>o});var s=i(645),n=i.n(s)()((function(t){return t[1]}));n.push([t.id,\".prettylist{position:absolute;height:100%;width:100%}.prettylist-item{position:absolute;--top: 0%;--left: 0%;--rotation: 0deg;--opacity: 1;transform:translateY(calc(var(--top) - 50%)) translateX(calc(var(--left) - 50%)) rotate(var(--rotation));opacity:var(--opacity);transition:opacity 1s}.prettylist-item.hidden{opacity:0;visibility:none}\\n\",\"\"]);const o=n},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i=t(e);return e[2]?\"@media \".concat(e[2],\" {\").concat(i,\"}\"):i})).join(\"\")},e.i=function(t,i,s){\"string\"==typeof t&&(t=[[null,t,\"\"]]);var n={};if(s)for(var o=0;o<this.length;o++){var r=this[o][0];null!=r&&(n[r]=!0)}for(var a=0;a<t.length;a++){var l=[].concat(t[a]);s&&n[l[0]]||(i&&(l[2]?l[2]=\"\".concat(i,\" and \").concat(l[2]):l[2]=i),e.push(l))}},e}},379:(t,e,i)=>{var s,n=function(){var t={};return function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}t[e]=i}return t[e]}}(),o=[];function r(t){for(var e=-1,i=0;i<o.length;i++)if(o[i].identifier===t){e=i;break}return e}function a(t,e){for(var i={},s=[],n=0;n<t.length;n++){var a=t[n],l=e.base?a[0]+e.base:a[0],h=i[l]||0,c=\"\".concat(l,\" \").concat(h);i[l]=h+1;var d=r(c),u={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(o[d].references++,o[d].updater(u)):o.push({identifier:c,updater:v(u,e),references:1}),s.push(c)}return s}function l(t){var e=document.createElement(\"style\"),s=t.attributes||{};if(void 0===s.nonce){var o=i.nc;o&&(s.nonce=o)}if(Object.keys(s).forEach((function(t){e.setAttribute(t,s[t])})),\"function\"==typeof t.insert)t.insert(e);else{var r=n(t.insert||\"head\");if(!r)throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");r.appendChild(e)}return e}var h,c=(h=[],function(t,e){return h[t]=e,h.filter(Boolean).join(\"\\n\")});function d(t,e,i,s){var n=i?\"\":s.media?\"@media \".concat(s.media,\" {\").concat(s.css,\"}\"):s.css;if(t.styleSheet)t.styleSheet.cssText=c(e,n);else{var o=document.createTextNode(n),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(o,r[e]):t.appendChild(o)}}function u(t,e,i){var s=i.css,n=i.media,o=i.sourceMap;if(n?t.setAttribute(\"media\",n):t.removeAttribute(\"media\"),o&&\"undefined\"!=typeof btoa&&(s+=\"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))),\" */\")),t.styleSheet)t.styleSheet.cssText=s;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(s))}}var f=null,p=0;function v(t,e){var i,s,n;if(e.singleton){var o=p++;i=f||(f=l(e)),s=d.bind(null,i,o,!1),n=d.bind(null,i,o,!0)}else i=l(e),s=u.bind(null,i,e),n=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(i)};return s(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;s(t=e)}else n()}}t.exports=function(t,e){(e=e||{}).singleton||\"boolean\"==typeof e.singleton||(e.singleton=(void 0===s&&(s=Boolean(window&&document&&document.all&&!window.atob)),s));var i=a(t=t||[],e);return function(t){if(t=t||[],\"[object Array]\"===Object.prototype.toString.call(t)){for(var s=0;s<i.length;s++){var n=r(i[s]);o[n].references--}for(var l=a(t,e),h=0;h<i.length;h++){var c=r(i[h]);0===o[c].references&&(o[c].updater(),o.splice(c,1))}i=l}}}}},e={};function i(s){var n=e[s];if(void 0!==n)return n.exports;var o=e[s]={id:s,exports:{}};return t[s](o,o.exports,i),o.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var s in e)i.o(e,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(t,\"__esModule\",{value:!0})};var s={};(()=>{i.r(s),i.d(s,{default:()=>o});var t=i(379),e=i.n(t),n=i(800);e()(n.Z,{insert:\"head\",singleton:!1}),n.Z.locals;class o{constructor(t,e,i){this.items=t,this.list=document.createElement(\"div\"),this.list.classList.add(\"prettylist\"),e.append(this.list),this.options={visible:3,rotation:1,opacity:.3,direction:\"vertical\",loop:!0},Object.assign(this.options,i),this.rotation=this.options.rotation,this.visible=this.options.visible,this.direction=this.options.direction,this.visible>this.items.length&&console.error(`PRETTYLIST: you are asking for ${this.visible} items to be visible, but you only have ${this.items.length} items.`),this.currentIndex=0;for(let e=0;e<t.length;e+=1){const i=t[e];i.classList.add(\"prettylist-item\"),i.classList.add(\"hidden\"),this.list.appendChild(i)}this.offset=.5,this.y=this.offset,this.sensitivity=.001,this.scroll=this.scroll.bind(this),this.update=this.update.bind(this),this.list.addEventListener(\"wheel\",this.scroll),window.addEventListener(\"DOMContentLoaded\",this.update)}setRotation(t){this.rotation=t,this.update()}setVisible(t){for(let t=0;t<this.items.length;t+=1)this.items[t].classList.add(\"hidden\");this.visible=parseInt(t),this.update()}setDirection(t){this.direction=t,this.update()}scroll({deltaY:t}){this.y+=t*this.sensitivity,this.y>1?this.increment():this.y<0&&this.decrement(),this.y=(this.y+1)%1,this.update()}increment(){0==this.options.loop&&this.currentIndex==this.items.length-this.visible||(this.items[this.currentIndex].classList.add(\"hidden\"),this.currentIndex=(this.currentIndex+1)%this.items.length)}decrement(){if(0==this.options.loop&&0==this.currentIndex)return;const t=(this.currentIndex+this.visible-1)%this.items.length;this.items[t].classList.add(\"hidden\"),this.currentIndex=(this.currentIndex-1+this.items.length)%this.items.length}update(){for(let t=-1;t<this.visible+1;t+=1){const e=(t+this.currentIndex+this.items.length)%this.items.length,i=this.items[e];t>=0&&t<this.visible&&i.classList.remove(\"hidden\");let s=this.rotation*(.5*(this.visible-1))-this.rotation*(t-this.y+.5),n=100/(this.visible+1)*(t+1.5-this.y)*.01*this.list.offsetHeight,o=this.list.offsetWidth-this.list.offsetWidth/2*Math.cos(s*Math.PI/180);\"horizontal\"==this.direction&&(s*=-1,o=(t+1-this.y+this.offset)*(this.list.offsetWidth/(this.visible+1)),n=this.list.offsetHeight/2+this.list.offsetHeight-this.list.offsetHeight*Math.cos(s*Math.PI/180)),i.style.setProperty(\"--rotation\",s+\"deg\"),i.style.setProperty(\"--left\",o+\"px\"),i.style.setProperty(\"--top\",n+\"px\");const r=1-Math.abs(t-.5*(this.visible-1))*this.options.opacity;i.style.setProperty(\"--opacity\",r)}}}})(),module.exports=s})();\n\n//# sourceURL=webpack://prettylist-example/../prettylist/dist/index.js?");

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
/******/ 			id: moduleId,
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;