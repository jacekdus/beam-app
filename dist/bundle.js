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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"body {\\n  margin: 0px;\\n  font-family: Arial, Helvetica, sans-serif;\\n}\\n\\n#canvas {\\n  margin: auto;\\n  display: block;\\n  background-color: #f0f0f0;\\n}\\n\\n.controls {\\n  margin-top: 10px;\\n  background-color: white;\\n  display: flex;\\n  justify-content: center;\\n}\\n.controls img {\\n  box-sizing: border-box;\\n  margin: 10px 10px;\\n  background-color: white;\\n  border: 0px solid white;\\n}\\n.controls img:hover {\\n  border-width: 1px;\\n}\\n.controls img:active {\\n  border-width: 2px;\\n}\\n\\n.parameters {\\n  display: flex;\\n  justify-content: center;\\n  font-size: large;\\n  color: blue;\\n  padding: 10px;\\n  background-color: lightgray;\\n}\\n.parameters .parameter {\\n  padding: 10px;\\n  display: block;\\n  background-color: white;\\n  margin: 0px 20px;\\n}\\n.parameters .parameter input {\\n  border: 1px solid gray;\\n  border-radius: 5px;\\n  text-align: right;\\n  padding: 5px;\\n  width: 100px;\\n}\\n.parameters .parameter input:focus {\\n  border: 1px solid back;\\n  outline: none;\\n}\\n\\n.legend {\\n  box-sizing: border-box;\\n  padding: 10px;\\n  background-color: lightblue;\\n  margin: 20px;\\n}\\n.legend p {\\n  margin: 5px;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/base.ts":
/*!*********************!*\
  !*** ./src/base.ts ***!
  \*********************/
/*! exports provided: elements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elements\", function() { return elements; });\n/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images */ \"./src/images.ts\");\n\r\nvar elementsInitialized = false;\r\nvar elements = (function () {\r\n    if (!elementsInitialized) {\r\n        var controls = document.querySelector('.controls');\r\n        controls.insertAdjacentElement('beforeend', _images__WEBPACK_IMPORTED_MODULE_0__[\"default\"].playBtn);\r\n        controls.insertAdjacentElement('beforeend', _images__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stopBtn);\r\n        elementsInitialized = true;\r\n    }\r\n    return {\r\n        playBtn: document.getElementById('playBtn'),\r\n        stopBtn: document.getElementById('stopBtn'),\r\n        pauseBtn: document.getElementById('pauseBtn'),\r\n        audio: document.getElementById('audio'),\r\n        parP: document.getElementById('parP'),\r\n        parL: document.getElementById('parL'),\r\n        parE: document.getElementById('parE'),\r\n        parI: document.getElementById('parI'),\r\n        canvas: document.getElementById('canvas'),\r\n        ctx: document.getElementById('canvas').getContext('2d')\r\n    };\r\n})();\r\n\n\n//# sourceURL=webpack:///./src/base.ts?");

/***/ }),

/***/ "./src/controller.ts":
/*!***************************!*\
  !*** ./src/controller.ts ***!
  \***************************/
/*! exports provided: Controller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Controller\", function() { return Controller; });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/base.ts\");\n/* harmony import */ var _model_beam__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/beam */ \"./src/model/beam.ts\");\n/* harmony import */ var _model_point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/point */ \"./src/model/point.ts\");\n/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images */ \"./src/images.ts\");\n\r\n\r\n\r\n\r\nvar canvas = _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].canvas;\r\nvar ctx = _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].ctx;\r\nvar audio = _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].audio;\r\nvar offset = 100;\r\ncanvas.width = window.innerWidth;\r\ncanvas.height = window.innerHeight / 2;\r\nvar Controller = /** @class */ (function () {\r\n    function Controller() {\r\n        _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].playBtn.addEventListener('click', Controller.start);\r\n        _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].stopBtn.addEventListener('click', Controller.stop);\r\n        window.addEventListener('resize', function () {\r\n            canvas.width = window.innerWidth;\r\n            canvas.height = window.innerHeight / 2;\r\n        });\r\n        // Initial values\r\n        _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].parP.value = '10.0';\r\n        _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].parL.value = '30.0';\r\n        _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].parE.value = '210000000.0';\r\n        _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].parI.value = '0.00000171';\r\n    }\r\n    Controller.initAnimation = function () {\r\n        Controller.counter = 0;\r\n        window.requestAnimationFrame(Controller.animate);\r\n    };\r\n    Controller.start = function () {\r\n        console.log('start');\r\n        // Cancel animation loop if user starts this method\r\n        window.cancelAnimationFrame(Controller.raf);\r\n        // Reset flag\r\n        Controller.keepOnRunning = true;\r\n        // Get data from form: P, E, I, L\r\n        var params = View.getParams();\r\n        // Create Beam object from data aquired from user (P, E, I, L)\r\n        Model.setBeam(params);\r\n        // Start animation. loops from i = 0 to 1 until keepRunning = false\r\n        Controller.initAnimation();\r\n        // Start audio\r\n        audio.play();\r\n    };\r\n    Controller.stop = function () {\r\n        audio.pause();\r\n        Controller.keepOnRunning = false;\r\n    };\r\n    Controller.getFrameLimit = function () {\r\n        return Controller.timeLimit * 60;\r\n    };\r\n    Controller.animate = function () {\r\n        if (Controller.counter < Controller.getFrameLimit() && Controller.keepOnRunning) {\r\n            Controller.raf = window.requestAnimationFrame(Controller.animate);\r\n        }\r\n        else {\r\n            audio.pause();\r\n        }\r\n        // Calculate shape (i)\r\n        Model.getBeam().calcShape(Controller.counter / Controller.getFrameLimit());\r\n        Model.getBeam().scale(canvas.width - 2 * offset, (canvas.height - 2 * offset));\r\n        // Get shape\r\n        var shape = Model.getBeam().shape;\r\n        var loadPosition = [new _model_point__WEBPACK_IMPORTED_MODULE_2__[\"default\"](Model.getBeam().loadPosition.x, Model.getBeam().loadPosition.y)];\r\n        // Draw here\r\n        console.log(new Date().getSeconds()); // for animation loop testing\r\n        // Render shape\r\n        Render.prepare();\r\n        Render.renderLoad(loadPosition[0]);\r\n        Render.renderSurrounding();\r\n        Render.renderLine(shape);\r\n        Render.renderNodes(shape);\r\n        // Render.renderNodes(loadPosition);\r\n        Controller.counter++;\r\n    };\r\n    Controller.timeLimit = 10;\r\n    return Controller;\r\n}());\r\n\r\nvar View = /** @class */ (function () {\r\n    function View() {\r\n    }\r\n    View.getParams = function () {\r\n        return [\r\n            parseFloat(_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].parP.value),\r\n            parseFloat(_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].parL.value),\r\n            parseFloat(_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].parE.value),\r\n            parseFloat(_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].parI.value)\r\n        ];\r\n    };\r\n    return View;\r\n}());\r\nvar Model = /** @class */ (function () {\r\n    function Model() {\r\n    }\r\n    Model.getBeam = function () {\r\n        return Model.beam;\r\n    };\r\n    Model.setBeam = function (arr) {\r\n        var parP = arr[0], parL = arr[1], parE = arr[2], parI = arr[3];\r\n        Model.beam = new _model_beam__WEBPACK_IMPORTED_MODULE_1__[\"default\"](parP, parL, parE, parI, 15);\r\n    };\r\n    return Model;\r\n}());\r\nvar Render = /** @class */ (function () {\r\n    function Render() {\r\n    }\r\n    Render.prepare = function () {\r\n        ctx.clearRect(0, 0, canvas.width, canvas.height);\r\n        ctx.lineWidth = 2;\r\n    };\r\n    Render.renderLine = function (line) {\r\n        ctx.beginPath();\r\n        ctx.moveTo(offset, offset);\r\n        line.forEach(function (point) {\r\n            point = point.translate(offset, offset);\r\n            ctx.lineTo(point.x, point.y);\r\n        });\r\n        ctx.stroke();\r\n    };\r\n    Render.renderNodes = function (nodes) {\r\n        ctx.beginPath();\r\n        ctx.save();\r\n        ctx.lineWidth = 2;\r\n        ctx.fillStyle = 'white';\r\n        ctx.strokeStyle = 'red';\r\n        var r = 5;\r\n        nodes.forEach(function (node) {\r\n            node = node.translate(offset, offset);\r\n            ctx.moveTo(node.x + r, node.y);\r\n            ctx.arc(node.x, node.y, r, 0, 2 * Math.PI);\r\n        });\r\n        ctx.fill();\r\n        ctx.stroke();\r\n        ctx.restore();\r\n    };\r\n    Render.renderSurrounding = function () {\r\n        ctx.beginPath();\r\n        ctx.moveTo(0, offset);\r\n        ctx.lineTo(offset, offset);\r\n        ctx.lineTo(offset + 50, canvas.height);\r\n        ctx.lineTo(0, canvas.height);\r\n        ctx.fill();\r\n        ctx.beginPath();\r\n        ctx.moveTo(canvas.width, offset);\r\n        ctx.lineTo(canvas.width - offset, offset);\r\n        ctx.lineTo(canvas.width - offset - 50, canvas.height);\r\n        ctx.lineTo(canvas.width, canvas.height);\r\n        ctx.fill();\r\n    };\r\n    Render.renderLoad = function (point) {\r\n        // Render.angle += 1/50;\r\n        ctx.save();\r\n        ctx.translate(50, 0);\r\n        ctx.translate(point.x + 50, point.y + 50);\r\n        ctx.rotate(Render.angle());\r\n        ctx.translate(-point.x - 50, -point.y - 50);\r\n        ctx.drawImage(_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"].ball, point.x, point.y);\r\n        ctx.restore();\r\n    };\r\n    // static angle = 0;\r\n    Render.angle = (function () {\r\n        var angle = 0;\r\n        var speed = 1 / 20;\r\n        return function () {\r\n            angle += speed;\r\n            return angle;\r\n        };\r\n    })();\r\n    return Render;\r\n}());\r\n// audio.stop\r\n// window.addEventListener('keyup', e => {\r\n//     audio.setAttribute('autoplay', 'true');\r\n//     console.log(audio);\r\n// })\r\n// class Animation {\r\n// \tprivate fps: number;\r\n// \tprivate time: number;\r\n// \tprivate currFrame: number = 0;\r\n// \tprivate shape: Point[];\r\n// \tconstructor (fps: number, time: number) {\r\n// \t\tthis.fps = fps;\r\n// \t\tthis.time = time;\r\n// \t} \r\n// \tprivate sleep(ms: number) {\r\n// \t\treturn new Promise(resolve => setTimeout(resolve, ms));\r\n// \t}\r\n// \tpublic async animate () {\r\n// \t\tconst frameLimit = this.fps * this.time;\r\n// \t\t// draw here\r\n// \t\t// Frame.drawFrame(this.currFrame/frameLimit, shape);\r\n// \t\t// wait for next frame\r\n// \t\tawait this.sleep(1000 / this.fps);\r\n// \t\tthis.currFrame++;\r\n// \t\t// run this method until reach frame limit\r\n// \t\tif(this.currFrame < frameLimit) {\r\n// \t\t\tthis.animate()\r\n// \t\t};\r\n// \t}\r\n// }\r\n\n\n//# sourceURL=webpack:///./src/controller.ts?");

/***/ }),

/***/ "./src/images.ts":
/*!***********************!*\
  !*** ./src/images.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _img_Soccerball_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/Soccerball.svg */ \"./src/img/Soccerball.svg\");\n/* harmony import */ var _img_btn_pause_button_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/btn/pause-button.svg */ \"./src/img/btn/pause-button.svg\");\n/* harmony import */ var _img_btn_stop_button_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/btn/stop-button.svg */ \"./src/img/btn/stop-button.svg\");\n/* harmony import */ var _img_btn_play_button_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/btn/play-button.svg */ \"./src/img/btn/play-button.svg\");\n\r\n\r\n\r\n\r\nvar width = 50;\r\nvar height = 50;\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    ball: setImage(_img_Soccerball_svg__WEBPACK_IMPORTED_MODULE_0__[\"default\"], 'ball'),\r\n    pauseBtn: setImage(_img_btn_pause_button_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"], 'pauseBtn'),\r\n    stopBtn: setImage(_img_btn_stop_button_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"], 'stopBtn'),\r\n    playBtn: setImage(_img_btn_play_button_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"], 'playBtn')\r\n});\r\nfunction setImage(src, id) {\r\n    if (id === void 0) { id = null; }\r\n    var img = new Image(width, height);\r\n    img.src = src;\r\n    if (id) {\r\n        img.id = id;\r\n    }\r\n    return img;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/images.ts?");

/***/ }),

/***/ "./src/img/Soccerball.svg":
/*!********************************!*\
  !*** ./src/img/Soccerball.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"d4769b155622e784733fa53f5967c99d.svg\");\n\n//# sourceURL=webpack:///./src/img/Soccerball.svg?");

/***/ }),

/***/ "./src/img/btn/pause-button.svg":
/*!**************************************!*\
  !*** ./src/img/btn/pause-button.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"a4c7de09248eb5360f7bd23d4faa96b7.svg\");\n\n//# sourceURL=webpack:///./src/img/btn/pause-button.svg?");

/***/ }),

/***/ "./src/img/btn/play-button.svg":
/*!*************************************!*\
  !*** ./src/img/btn/play-button.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"ef763d5b4a38bdbf496ac6ca456ee3f9.svg\");\n\n//# sourceURL=webpack:///./src/img/btn/play-button.svg?");

/***/ }),

/***/ "./src/img/btn/stop-button.svg":
/*!*************************************!*\
  !*** ./src/img/btn/stop-button.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"b4925a87d386e5d69a5af26777014e9a.svg\");\n\n//# sourceURL=webpack:///./src/img/btn/stop-button.svg?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller */ \"./src/controller.ts\");\n\r\n\r\nnew _controller__WEBPACK_IMPORTED_MODULE_1__[\"Controller\"]();\r\n// document.getElementById('playBtn').addEventListener('click', ctrl.start)\r\n// document.getElementById('stopBtn').addEventListener('click', ctrl.stop)\r\n// document.getElementById('pauseBtn').addEventListener('click', ctrl.pause)\r\n// import Beam from './model/beam';\r\n// import Point from './model/point';\r\n// import Images from './images';\r\n// import { vw, vh } from './utility';\r\n// let c = 0;\r\n// function draw(shape: Point[]) {\r\n// \tcanvas.width = vw(90);\r\n// \tcanvas.height = vh(50);\r\n// \tctx.clearRect(0, 0, canvas.width, canvas.height);\r\n// \t// Left support\r\n// \tctx.beginPath();\r\n// \tctx.moveTo(margin, margin);\r\n// \tctx.lineTo(margin + 25, margin + 50);\r\n// \tctx.lineTo(margin - 25, margin + 50);\r\n// \tctx.closePath();\r\n// \tctx.stroke();\r\n// \t// Right support\r\n// \tctx.beginPath();\r\n// \tctx.moveTo(canvas.width - margin, margin)\r\n// \tctx.lineTo(canvas.width - margin + 25, margin + 50)\r\n// \tctx.lineTo(canvas.width - margin - 25, margin + 50)\r\n// \tctx.closePath();\r\n// \tctx.stroke();\r\n// \t// Beam\r\n// \tctx.beginPath();\r\n// \tctx.moveTo(margin, margin);\r\n// \tshape.forEach(point => {\r\n// \t\tpoint = point.translate(margin, margin);\r\n// \t\tctx.lineTo(point.x, point.y);\r\n// \t})\r\n// \tctx.stroke();\r\n// \tconst img = Images.ball;\r\n// \tctx.moveTo(c, 0);\r\n// \tctx.drawImage(img, c, 0);\r\n// \tctx.save();\r\n// \tctx.rotate(c * Math.PI / 180);\r\n// \tctx.restore();\r\n// \t// console.log(c++);\r\n// \t// Points\r\n// \tctx.beginPath();\r\n// \t// ctx.save();\r\n// \tctx.lineWidth = 2;\r\n// \tctx.fillStyle = 'white';\r\n// \tctx.strokeStyle = 'red';\r\n// \tconst r = 5;\r\n// \tshape.forEach(point => {\r\n// \t\tpoint = point.translate(margin, margin);\r\n// \t\tctx.moveTo(point.x + r, point.y);\r\n// \t\tctx.arc(point.x, point.y, r, 0, 2 * Math.PI);\r\n// \t})\r\n// \tctx.fill();\r\n// \tctx.stroke();\r\n// \tctx.restore();\r\n// }\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/model/beam.ts":
/*!***************************!*\
  !*** ./src/model/beam.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point */ \"./src/model/point.ts\");\n\r\n/** @class Represents a mechanical beam model loaded with concentrated force */\r\nvar Beam = /** @class */ (function () {\r\n    /**\r\n     * @constructor\r\n     * @param {number} parP - concentrated force P [kN]\r\n     * @param {number} parL - beam length [m]\r\n     * @param {number} parE - Young's modulus E [kPa]\r\n     * @param {number} parI - moment of inertia I [m4]\r\n     * @param {number} parN - the number of elements into which the beam is divided N\r\n     * @param {boolean} absResults - if parameter is set to true, results will have absolute and not relative dimensions\r\n     */\r\n    function Beam(parP, parL, parE, parI, parN, absResults) {\r\n        if (absResults === void 0) { absResults = false; }\r\n        this._shape = [];\r\n        this._parP = parP;\r\n        this._parL = parL;\r\n        this._parE = parE;\r\n        this._parI = parI;\r\n        this._parN = parN;\r\n        this._absResults = absResults;\r\n    }\r\n    Object.defineProperty(Beam.prototype, \"shape\", {\r\n        /** Returs current shape of the beam or an empty array if shape hasn't been calculated yet */\r\n        get: function () {\r\n            var _this = this;\r\n            return !this._absResults ? this._shape : this._shape.map(function (point) {\r\n                return new _point__WEBPACK_IMPORTED_MODULE_0__[\"default\"](point.x * _this._parL, point.y * _this._parL);\r\n            }, this);\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Beam.prototype, \"loadPosition\", {\r\n        get: function () {\r\n            return !this._absResults ? this._loadPosition : new _point__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this._loadPosition.x * this._parL, this._loadPosition.y * this._parL);\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    /**\r\n     * Calculates a new shape of the beam loaded by concentrated force\r\n     * @param a - number beetwen 0 and beam length which represents position of the load relative to the beginning of the beam\r\n     */\r\n    Beam.prototype.calcShape = function (a) {\r\n        this._shape = [];\r\n        a *= this._parL;\r\n        var b = this._parL - a;\r\n        var presets = {\r\n            factor1: this._parP / (6 * this._parL * this._parL * this._parE * this._parI),\r\n            factor2: a * (a + 2 * b),\r\n            factor3: b * (b + 2 * a)\r\n        };\r\n        for (var i = 0; i <= this._parN; i++) {\r\n            var z = i / this._parN;\r\n            this._loadPosition = this.calcPoint(a, a / this._parL, presets);\r\n            this._shape.push(this.calcPoint(a, z, presets));\r\n        }\r\n    };\r\n    Beam.prototype.scale = function (scaleX, scaleY) {\r\n        this._shape = this._shape.map(function (point) {\r\n            return new _point__WEBPACK_IMPORTED_MODULE_0__[\"default\"](point.x * scaleX, point.y * scaleY);\r\n        });\r\n        this._loadPosition = new _point__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this._loadPosition.x * scaleX, this._loadPosition.y * scaleY);\r\n    };\r\n    Beam.prototype.calcPoint = function (a, z, presets) {\r\n        var factor1 = presets.factor1, factor2 = presets.factor2, factor3 = presets.factor3;\r\n        var b = this._parL - a;\r\n        z *= this._parL;\r\n        if (z <= a) {\r\n            return new _point__WEBPACK_IMPORTED_MODULE_0__[\"default\"](z / this._parL, (factor2 - z * z) * factor1 * b * z);\r\n        }\r\n        else {\r\n            var z2 = this._parL - z;\r\n            return new _point__WEBPACK_IMPORTED_MODULE_0__[\"default\"](z / this._parL, (factor3 - z2 * z2) * factor1 * a * z2);\r\n        }\r\n    };\r\n    return Beam;\r\n}());\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Beam);\r\nvar audio = document.getElementsByTagName('audio');\r\nconsole.log(audio);\r\n\n\n//# sourceURL=webpack:///./src/model/beam.ts?");

/***/ }),

/***/ "./src/model/point.ts":
/*!****************************!*\
  !*** ./src/model/point.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Point = /** @class */ (function () {\r\n    function Point(x, y) {\r\n        this.x = x;\r\n        this.y = y;\r\n    }\r\n    Point.prototype.translate = function (x, y) {\r\n        return new Point(this.x + x, this.y + y);\r\n    };\r\n    return Point;\r\n}());\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Point);\r\n\n\n//# sourceURL=webpack:///./src/model/point.ts?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ })

/******/ });