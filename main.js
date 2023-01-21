/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./imgs/background2.jpg */ "./src/imgs/background2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  color: white;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n}\n\n#main-logo {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: solid 1px goldenrod;\n}\n\n.navbar {\n  height: 7.5vh;\n  display: flex;\n  justify-content: space-between;\n  background-color: rgb(0, 0, 0, 0.5);\n}\n\n.logo {\n  display: flex;\n  gap: 2vw;\n  align-items: center;\n  padding-left: 3vw;\n  font-size: 2rem;\n}\n\ndiv.logo :nth-child(1) {\n  font-family: 'Luxurious Script', cursive;\n  font-size: 2.5rem;\n  color: goldenrod;\n}\n\nul {\n  list-style: none;\n  display: flex;\n  gap: 2vw;\n  padding-right: 3vw;\n  align-items: center;\n  font-size: 1.5rem;\n}\n\nli:hover {\n  color: goldenrod;\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.main {\n  margin-top: 10vh;\n  width: 15vw;\n  height: 15vw;\n  border-radius: 50%;\n  border: solid 2px goldenrod;\n  background-color: rgba(95, 92, 92, 0.2);\n  align-self: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\ndiv.main :nth-child(1) {\n  font-size: 1.25rem;\n  color: goldenrod;\n}\n\ndiv.main :nth-child(2) {\n  font-size: 1.8rem;\n  margin-top: 3vh;\n  margin-bottom: 3vh;\n}\n\ndiv.main :nth-child(3) {\n  font-style: italic;\n}\n\n.opening-hours {\n  margin-top: 7.5vh;\n  width: 25vw;\n  height: 10vw;\n  background-color: rgba(0, 0, 0, 0.9);\n  align-self: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  border-radius: 2vw;\n  border: solid 2px goldenrod;\n  font-size: min(1rem, 3vw);\n}\n\ndiv.opening-hours :nth-child(1) {\n  font-size: min(1.25rem, 2vw);\n  font-weight: 600;\n}\n\n.menu {\n  display: flex;\n  gap: 15vw;\n  align-self: center;\n}\n\n.mainDish,\n.desserts {\n  margin-top: 10vh;\n  padding: 5vh;\n  height: 65vh;\n  width: 20vw;\n  background-color: rgba(0, 0, 0, 0.9);\n  border: solid 2px goldenrod;\n  border-radius: 2.5vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n\nh2 {\n  color: goldenrod;\n}\n\n.about {\n  margin-top: 15vh;\n  margin-left: 10vw;\n  width: 60vw;\n  height: 40vh;\n  background-color: rgb(0, 0, 0, 0.5);\n  border: solid 2px goldenrod;\n  border-radius: 3vw;\n  display: flex;\n  flex-direction: column;\n  padding: 2rem;\n}\n\ndiv.about :nth-child(1) {\n  font-size: 2rem;\n  font-weight: 600;\n  color: goldenrod;\n  border-bottom: solid 2px goldenrod;\n  align-self: flex-start;\n  margin-bottom: 5vh;\n}\n\ndiv.about :nth-child(2) {\n  font-style: italic;\n  font-size: 1.25rem;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,yDAA+C;EAC/C,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,aAAa;EACb,8BAA8B;EAC9B,mCAAmC;AACrC;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,mBAAmB;EACnB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,wCAAwC;EACxC,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,QAAQ;EACR,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,2BAA2B;EAC3B,uCAAuC;EACvC,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,YAAY;EACZ,oCAAoC;EACpC,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,mBAAmB;EACnB,kBAAkB;EAClB,2BAA2B;EAC3B,yBAAyB;AAC3B;;AAEA;EACE,4BAA4B;EAC5B,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,kBAAkB;AACpB;;AAEA;;EAEE,gBAAgB;EAChB,YAAY;EACZ,YAAY;EACZ,WAAW;EACX,oCAAoC;EACpC,2BAA2B;EAC3B,oBAAoB;EACpB,aAAa;EACb,sBAAsB;EACtB,2BAA2B;AAC7B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,WAAW;EACX,YAAY;EACZ,mCAAmC;EACnC,2BAA2B;EAC3B,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,aAAa;AACf;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,kCAAkC;EAClC,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;AACpB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  background-image: url('./imgs/background2.jpg');\n  background-size: cover;\n  color: white;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n}\n\n#main-logo {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: solid 1px goldenrod;\n}\n\n.navbar {\n  height: 7.5vh;\n  display: flex;\n  justify-content: space-between;\n  background-color: rgb(0, 0, 0, 0.5);\n}\n\n.logo {\n  display: flex;\n  gap: 2vw;\n  align-items: center;\n  padding-left: 3vw;\n  font-size: 2rem;\n}\n\ndiv.logo :nth-child(1) {\n  font-family: 'Luxurious Script', cursive;\n  font-size: 2.5rem;\n  color: goldenrod;\n}\n\nul {\n  list-style: none;\n  display: flex;\n  gap: 2vw;\n  padding-right: 3vw;\n  align-items: center;\n  font-size: 1.5rem;\n}\n\nli:hover {\n  color: goldenrod;\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.main {\n  margin-top: 10vh;\n  width: 15vw;\n  height: 15vw;\n  border-radius: 50%;\n  border: solid 2px goldenrod;\n  background-color: rgba(95, 92, 92, 0.2);\n  align-self: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\ndiv.main :nth-child(1) {\n  font-size: 1.25rem;\n  color: goldenrod;\n}\n\ndiv.main :nth-child(2) {\n  font-size: 1.8rem;\n  margin-top: 3vh;\n  margin-bottom: 3vh;\n}\n\ndiv.main :nth-child(3) {\n  font-style: italic;\n}\n\n.opening-hours {\n  margin-top: 7.5vh;\n  width: 25vw;\n  height: 10vw;\n  background-color: rgba(0, 0, 0, 0.9);\n  align-self: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  border-radius: 2vw;\n  border: solid 2px goldenrod;\n  font-size: min(1rem, 3vw);\n}\n\ndiv.opening-hours :nth-child(1) {\n  font-size: min(1.25rem, 2vw);\n  font-weight: 600;\n}\n\n.menu {\n  display: flex;\n  gap: 15vw;\n  align-self: center;\n}\n\n.mainDish,\n.desserts {\n  margin-top: 10vh;\n  padding: 5vh;\n  height: 65vh;\n  width: 20vw;\n  background-color: rgba(0, 0, 0, 0.9);\n  border: solid 2px goldenrod;\n  border-radius: 2.5vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n\nh2 {\n  color: goldenrod;\n}\n\n.about {\n  margin-top: 15vh;\n  margin-left: 10vw;\n  width: 60vw;\n  height: 40vh;\n  background-color: rgb(0, 0, 0, 0.5);\n  border: solid 2px goldenrod;\n  border-radius: 3vw;\n  display: flex;\n  flex-direction: column;\n  padding: 2rem;\n}\n\ndiv.about :nth-child(1) {\n  font-size: 2rem;\n  font-weight: 600;\n  color: goldenrod;\n  border-bottom: solid 2px goldenrod;\n  align-self: flex-start;\n  margin-bottom: 5vh;\n}\n\ndiv.about :nth-child(2) {\n  font-style: italic;\n  font-size: 1.25rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createAbout)
/* harmony export */ });
function createAbout() {
  let about = document.createElement('div');
  about.classList.add('about', 'remove');
  let firstChild = document.createElement('div');
  let secondChild = document.createElement('p');
  firstChild.textContent = 'About Us';
  secondChild.textContent = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
  suscipit incidunt inventore dolorum, ea et eius commodi beatae
  corporis rerum at iste ab error doloribus quidem doloremque
  perferendis? Tempora doloribus, laudantium labore laborum illo veniam
  sint nam? Laborum veritatis quo ullam porro? Repellat, libero possimus
  ex perferendis modi illum iure repellendus, sed laboriosam sit
  adipisci quae non. Doloremque asperiores a, earum cumque odio
  explicabo. Maxime, qui aliquam? Repellendus similique culpa aliquam
  nesciunt, eaque assumenda expedita ducimus rem qui esse officia?`;

  about.append(firstChild, secondChild);
  return about;
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMain": () => (/* binding */ createMain),
/* harmony export */   "createSchedule": () => (/* binding */ createSchedule)
/* harmony export */ });
function createMain() {
  let main = document.createElement('div');
  main.classList.add('main', 'remove');
  let childOne = document.createElement('div');
  let childTwo = document.createElement('div');
  let childThree = document.createElement('div');
  childOne.textContent = 'Discover';
  childTwo.textContent = 'EgySushi Eatery';
  childThree.textContent = 'Simply Delicious';
  main.append(childOne, childTwo, childThree);
  return main;
}

function createSchedule() {
  let schedule = document.createElement('div');
  schedule.classList.add('opening-hours', 'remove');
  let childOne = document.createElement('div');
  let childTwo = document.createElement('div');
  let childThree = document.createElement('div');
  childOne.textContent = 'Opening Hours';
  childTwo.textContent = 'Week Days: 10:00 AM to 12:00 AM';
  childThree.textContent = 'Fridays: 5:00 PM to 12:00 AM';
  schedule.append(childOne, childTwo, childThree);
  return schedule;
}




/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createNavBar)
/* harmony export */ });
/* harmony import */ var _imgs_logo3_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/logo3.jpg */ "./src/imgs/logo3.jpg");


function createNavBar() {
  let navBar = document.createElement('div');
  navBar.classList.add('navbar');

  let logo = document.createElement('div');
  logo.classList.add('logo');
  let name = document.createElement('div');
  name.textContent = 'EgySushi Eatery';
  let logoImg = new Image();
  logoImg.src = _imgs_logo3_jpg__WEBPACK_IMPORTED_MODULE_0__;
  logoImg.setAttribute('id', 'main-logo');
  logo.append(name, logoImg);

  let ul = document.createElement('ul');
  let home = document.createElement('li');
  let menu = document.createElement('li');
  let about = document.createElement('li');
  home.textContent = 'Home';
  menu.textContent = 'Menu';
  about.textContent = 'About';
  ul.append(home, menu, about);

  navBar.append(logo, ul);
  return navBar;
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMenus)
/* harmony export */ });
function createMenus() {
  let menu = document.createElement('div');
  menu.classList.add('menu', 'remove');

  let mainDish = document.createElement('div');
  mainDish.classList.add('mainDish');
  let one = document.createElement('h2');
  let two = document.createElement('div');
  let three = document.createElement('div');
  let four = document.createElement('div');
  let five = document.createElement('div');
  let six = document.createElement('br');
  let seven = document.createElement('h2');
  let eight = document.createElement('div');
  let nine = document.createElement('div');
  let ten = document.createElement('br');
  let eleven = document.createElement('h2');
  let twelve = document.createElement('div');
  let thirteen = document.createElement('div');
  let fourteen = document.createElement('div');
  let fifteen = document.createElement('div');
  let sixteen = document.createElement('div');
  let seventeen = document.createElement('div');
  let eighteen = document.createElement('div');
  let nineteen = document.createElement('div');
  let twenty = document.createElement('div');
  let twentyOne = document.createElement('div');
  one.textContent = 'Nigiri';
  two.textContent = 'Salmon........ 30 EGP';
  three.textContent = 'Tuna.......... 30 EGP';
  four.textContent = 'Crab.......... 22 EGP';
  five.textContent = 'Shrimp........ 28 EGP';
  seven.textContent = 'Sashimi';
  eight.textContent = 'Salmon........ 93 EGP';
  nine.textContent = 'Tuna.......... 92 EGP';
  eleven.textContent = 'Special Rolls';
  twelve.textContent = 'Philadelphia Roll........ 100 EGP';
  thirteen.textContent = 'California Roll.......... 120 EGP';
  fourteen.textContent = 'Phily Shrimp............. 160 EGP';
  fifteen.textContent = 'Beast Roll............... 150 EGP';
  sixteen.textContent = 'Crispy Roll.............. 135 EGP';
  seventeen.textContent = 'Power Roll............... 120 EGP';
  eighteen.textContent = 'Hawai Roll............... 140 EGP';
  nineteen.textContent = 'Spider Roll.............. 125 EGP';
  twenty.textContent = 'Sushimi Lemon Roll....... 100 EGP';
  twentyOne.textContent = 'Volcano Roll............. 135 EGP';
  mainDish.append(
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
    twelve,
    thirteen,
    fourteen,
    fifteen,
    sixteen,
    seventeen,
    eighteen,
    nineteen,
    twenty,
    twentyOne
  );

  let desserts = document.createElement('div');
  desserts.classList.add('desserts');
  let a = document.createElement('h2');
  let b = document.createElement('div');
  let c = document.createElement('div');
  let d = document.createElement('div');
  let e = document.createElement('div');
  let f = document.createElement('div');
  let g = document.createElement('div');
  let h = document.createElement('div');
  let i = document.createElement('br');
  let j = document.createElement('h2');
  let k = document.createElement('div');
  let l = document.createElement('div');
  let m = document.createElement('div');
  let n = document.createElement('div');
  let o = document.createElement('div');
  let p = document.createElement('div');
  let q = document.createElement('div');
  a.textContent = 'Drinks';
  b.textContent = 'Lemon Squash......... 50 EGP';
  c.textContent = 'Blue Ocean Squash.... 70 EGP';
  d.textContent = 'Fruity Milk Shake.... 60 EGP';
  e.textContent = 'Cofee Latte.......... 50 EGP';
  f.textContent = 'Tea Latte............ 40 EGP';
  g.textContent = 'Grean Tea............ 40 EGP';
  h.textContent = 'Milky Ginger......... 50 EGP';
  j.textContent = 'Desserts';
  k.textContent = 'Guava Silky Pudding......... 90 EGP';
  l.textContent = 'Apple Chocolate Milk........ 85 EGP';
  m.textContent = 'Tiramissu Brownies.......... 95 EGP';
  n.textContent = 'Ice Cream................... 40 EGP';
  o.textContent = 'Fruit Salad................. 40 EGP';
  p.textContent = 'Cheese Cake................. 65 EGP';
  q.textContent = 'Peanut Butter Pie........... 55 EGP';
  desserts.append(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q);

  menu.append(mainDish, desserts);
  return menu;
}


/***/ }),

/***/ "./src/remove.js":
/*!***********************!*\
  !*** ./src/remove.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ remove)
/* harmony export */ });
function remove() {
  let removeItems = document.querySelectorAll('.remove');
  removeItems.forEach((item) => {
    item.remove();
  });
}


/***/ }),

/***/ "./src/imgs/background2.jpg":
/*!**********************************!*\
  !*** ./src/imgs/background2.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0bd94e7a3094f01a423a.jpg";

/***/ }),

/***/ "./src/imgs/logo3.jpg":
/*!****************************!*\
  !*** ./src/imgs/logo3.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a5d30ad8b60278fd8610.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ "./src/main.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./remove */ "./src/remove.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about */ "./src/about.js");
// modules that need to be imported







// creating the navigation bar that will not be deleted
let content = document.querySelector('.content');
let navbar = (0,_main__WEBPACK_IMPORTED_MODULE_1__["default"])();

// creating the home page content
let main = (0,_home__WEBPACK_IMPORTED_MODULE_2__.createMain)();
let schedule = (0,_home__WEBPACK_IMPORTED_MODULE_2__.createSchedule)();

// appending the home page and navBar contents uopn opening the page
content.append(navbar, main, schedule);

//selecting buttons that will get event listiners
let navList = document.querySelectorAll('li');

navList[0].addEventListener('click', () => {
  (0,_remove__WEBPACK_IMPORTED_MODULE_3__["default"])();
  content.append(main, schedule);
});

navList[1].addEventListener('click', () => {
  (0,_remove__WEBPACK_IMPORTED_MODULE_3__["default"])();
  let menu = (0,_menu__WEBPACK_IMPORTED_MODULE_4__["default"])();
  content.append(menu);
});

navList[2].addEventListener('click', () => {
  (0,_remove__WEBPACK_IMPORTED_MODULE_3__["default"])();
  let about = (0,_about__WEBPACK_IMPORTED_MODULE_5__["default"])();
  content.append(about);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNzQjtBQUNZO0FBQ2tCO0FBQ3RCO0FBQ0c7QUFDQzs7QUFFbEM7QUFDQTtBQUNBLGFBQWEsaURBQVk7O0FBRXpCO0FBQ0EsV0FBVyxpREFBVTtBQUNyQixlQUFlLHFEQUFjOztBQUU3QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLG1EQUFNO0FBQ1I7QUFDQSxDQUFDOztBQUVEO0FBQ0EsRUFBRSxtREFBTTtBQUNSLGFBQWEsaURBQVc7QUFDeEI7QUFDQSxDQUFDOztBQUVEO0FBQ0EsRUFBRSxtREFBTTtBQUNSLGNBQWMsa0RBQVc7QUFDekI7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3JlbW92ZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWdzL2JhY2tncm91bmQyLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jbWFpbi1sb2dvIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggZ29sZGVucm9kO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIGhlaWdodDogNy41dmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5sb2dvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDJ2dztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLWxlZnQ6IDN2dztcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuZGl2LmxvZ28gOm50aC1jaGlsZCgxKSB7XFxuICBmb250LWZhbWlseTogJ0x1eHVyaW91cyBTY3JpcHQnLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBjb2xvcjogZ29sZGVucm9kO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMnZ3O1xcbiAgcGFkZGluZy1yaWdodDogM3Z3O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5saTpob3ZlciB7XFxuICBjb2xvcjogZ29sZGVucm9kO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1haW4ge1xcbiAgbWFyZ2luLXRvcDogMTB2aDtcXG4gIHdpZHRoOiAxNXZ3O1xcbiAgaGVpZ2h0OiAxNXZ3O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiBzb2xpZCAycHggZ29sZGVucm9kO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5NSwgOTIsIDkyLCAwLjIpO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmRpdi5tYWluIDpudGgtY2hpbGQoMSkge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgY29sb3I6IGdvbGRlbnJvZDtcXG59XFxuXFxuZGl2Lm1haW4gOm50aC1jaGlsZCgyKSB7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIG1hcmdpbi10b3A6IDN2aDtcXG4gIG1hcmdpbi1ib3R0b206IDN2aDtcXG59XFxuXFxuZGl2Lm1haW4gOm50aC1jaGlsZCgzKSB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5vcGVuaW5nLWhvdXJzIHtcXG4gIG1hcmdpbi10b3A6IDcuNXZoO1xcbiAgd2lkdGg6IDI1dnc7XFxuICBoZWlnaHQ6IDEwdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDJ2dztcXG4gIGJvcmRlcjogc29saWQgMnB4IGdvbGRlbnJvZDtcXG4gIGZvbnQtc2l6ZTogbWluKDFyZW0sIDN2dyk7XFxufVxcblxcbmRpdi5vcGVuaW5nLWhvdXJzIDpudGgtY2hpbGQoMSkge1xcbiAgZm9udC1zaXplOiBtaW4oMS4yNXJlbSwgMnZ3KTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5tZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE1dnc7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5tYWluRGlzaCxcXG4uZGVzc2VydHMge1xcbiAgbWFyZ2luLXRvcDogMTB2aDtcXG4gIHBhZGRpbmc6IDV2aDtcXG4gIGhlaWdodDogNjV2aDtcXG4gIHdpZHRoOiAyMHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xcbiAgYm9yZGVyOiBzb2xpZCAycHggZ29sZGVucm9kO1xcbiAgYm9yZGVyLXJhZGl1czogMi41dmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuXFxuaDIge1xcbiAgY29sb3I6IGdvbGRlbnJvZDtcXG59XFxuXFxuLmFib3V0IHtcXG4gIG1hcmdpbi10b3A6IDE1dmg7XFxuICBtYXJnaW4tbGVmdDogMTB2dztcXG4gIHdpZHRoOiA2MHZ3O1xcbiAgaGVpZ2h0OiA0MHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNSk7XFxuICBib3JkZXI6IHNvbGlkIDJweCBnb2xkZW5yb2Q7XFxuICBib3JkZXItcmFkaXVzOiAzdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbmRpdi5hYm91dCA6bnRoLWNoaWxkKDEpIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjb2xvcjogZ29sZGVucm9kO1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IGdvbGRlbnJvZDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBtYXJnaW4tYm90dG9tOiA1dmg7XFxufVxcblxcbmRpdi5hYm91dCA6bnRoLWNoaWxkKDIpIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWix5REFBK0M7RUFDL0Msc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsUUFBUTtFQUNSLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHdDQUF3QztFQUN4QyxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLHVDQUF1QztFQUN2QyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztFQUNYLG9DQUFvQztFQUNwQywyQkFBMkI7RUFDM0Isb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1DQUFtQztFQUNuQywyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0NBQWtDO0VBQ2xDLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltZ3MvYmFja2dyb3VuZDIuanBnJyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI21haW4tbG9nbyB7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogc29saWQgMXB4IGdvbGRlbnJvZDtcXG59XFxuXFxuLm5hdmJhciB7XFxuICBoZWlnaHQ6IDcuNXZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAydnc7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAzdnc7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbmRpdi5sb2dvIDpudGgtY2hpbGQoMSkge1xcbiAgZm9udC1mYW1pbHk6ICdMdXh1cmlvdXMgU2NyaXB0JywgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgY29sb3I6IGdvbGRlbnJvZDtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDJ2dztcXG4gIHBhZGRpbmctcmlnaHQ6IDN2dztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxubGk6aG92ZXIge1xcbiAgY29sb3I6IGdvbGRlbnJvZDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tYWluIHtcXG4gIG1hcmdpbi10b3A6IDEwdmg7XFxuICB3aWR0aDogMTV2dztcXG4gIGhlaWdodDogMTV2dztcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogc29saWQgMnB4IGdvbGRlbnJvZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTUsIDkyLCA5MiwgMC4yKTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5kaXYubWFpbiA6bnRoLWNoaWxkKDEpIHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGNvbG9yOiBnb2xkZW5yb2Q7XFxufVxcblxcbmRpdi5tYWluIDpudGgtY2hpbGQoMikge1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBtYXJnaW4tdG9wOiAzdmg7XFxuICBtYXJnaW4tYm90dG9tOiAzdmg7XFxufVxcblxcbmRpdi5tYWluIDpudGgtY2hpbGQoMykge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4ub3BlbmluZy1ob3VycyB7XFxuICBtYXJnaW4tdG9wOiA3LjV2aDtcXG4gIHdpZHRoOiAyNXZ3O1xcbiAgaGVpZ2h0OiAxMHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAydnc7XFxuICBib3JkZXI6IHNvbGlkIDJweCBnb2xkZW5yb2Q7XFxuICBmb250LXNpemU6IG1pbigxcmVtLCAzdncpO1xcbn1cXG5cXG5kaXYub3BlbmluZy1ob3VycyA6bnRoLWNoaWxkKDEpIHtcXG4gIGZvbnQtc2l6ZTogbWluKDEuMjVyZW0sIDJ2dyk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ubWVudSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxNXZ3O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ubWFpbkRpc2gsXFxuLmRlc3NlcnRzIHtcXG4gIG1hcmdpbi10b3A6IDEwdmg7XFxuICBwYWRkaW5nOiA1dmg7XFxuICBoZWlnaHQ6IDY1dmg7XFxuICB3aWR0aDogMjB2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcXG4gIGJvcmRlcjogc29saWQgMnB4IGdvbGRlbnJvZDtcXG4gIGJvcmRlci1yYWRpdXM6IDIuNXZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbmgyIHtcXG4gIGNvbG9yOiBnb2xkZW5yb2Q7XFxufVxcblxcbi5hYm91dCB7XFxuICBtYXJnaW4tdG9wOiAxNXZoO1xcbiAgbWFyZ2luLWxlZnQ6IDEwdnc7XFxuICB3aWR0aDogNjB2dztcXG4gIGhlaWdodDogNDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjUpO1xcbiAgYm9yZGVyOiBzb2xpZCAycHggZ29sZGVucm9kO1xcbiAgYm9yZGVyLXJhZGl1czogM3Z3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG5kaXYuYWJvdXQgOm50aC1jaGlsZCgxKSB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY29sb3I6IGdvbGRlbnJvZDtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCBnb2xkZW5yb2Q7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgbWFyZ2luLWJvdHRvbTogNXZoO1xcbn1cXG5cXG5kaXYuYWJvdXQgOm50aC1jaGlsZCgyKSB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUFib3V0KCkge1xuICBsZXQgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWJvdXQuY2xhc3NMaXN0LmFkZCgnYWJvdXQnLCAncmVtb3ZlJyk7XG4gIGxldCBmaXJzdENoaWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCBzZWNvbmRDaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZmlyc3RDaGlsZC50ZXh0Q29udGVudCA9ICdBYm91dCBVcyc7XG4gIHNlY29uZENoaWxkLnRleHRDb250ZW50ID0gYExvcmVtIGlwc3VtIGRvbG9yLCBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBNYWlvcmVzXG4gIHN1c2NpcGl0IGluY2lkdW50IGludmVudG9yZSBkb2xvcnVtLCBlYSBldCBlaXVzIGNvbW1vZGkgYmVhdGFlXG4gIGNvcnBvcmlzIHJlcnVtIGF0IGlzdGUgYWIgZXJyb3IgZG9sb3JpYnVzIHF1aWRlbSBkb2xvcmVtcXVlXG4gIHBlcmZlcmVuZGlzPyBUZW1wb3JhIGRvbG9yaWJ1cywgbGF1ZGFudGl1bSBsYWJvcmUgbGFib3J1bSBpbGxvIHZlbmlhbVxuICBzaW50IG5hbT8gTGFib3J1bSB2ZXJpdGF0aXMgcXVvIHVsbGFtIHBvcnJvPyBSZXBlbGxhdCwgbGliZXJvIHBvc3NpbXVzXG4gIGV4IHBlcmZlcmVuZGlzIG1vZGkgaWxsdW0gaXVyZSByZXBlbGxlbmR1cywgc2VkIGxhYm9yaW9zYW0gc2l0XG4gIGFkaXBpc2NpIHF1YWUgbm9uLiBEb2xvcmVtcXVlIGFzcGVyaW9yZXMgYSwgZWFydW0gY3VtcXVlIG9kaW9cbiAgZXhwbGljYWJvLiBNYXhpbWUsIHF1aSBhbGlxdWFtPyBSZXBlbGxlbmR1cyBzaW1pbGlxdWUgY3VscGEgYWxpcXVhbVxuICBuZXNjaXVudCwgZWFxdWUgYXNzdW1lbmRhIGV4cGVkaXRhIGR1Y2ltdXMgcmVtIHF1aSBlc3NlIG9mZmljaWE/YDtcblxuICBhYm91dC5hcHBlbmQoZmlyc3RDaGlsZCwgc2Vjb25kQ2hpbGQpO1xuICByZXR1cm4gYWJvdXQ7XG59XG4iLCJmdW5jdGlvbiBjcmVhdGVNYWluKCkge1xuICBsZXQgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nLCAncmVtb3ZlJyk7XG4gIGxldCBjaGlsZE9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZXQgY2hpbGRUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGV0IGNoaWxkVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2hpbGRPbmUudGV4dENvbnRlbnQgPSAnRGlzY292ZXInO1xuICBjaGlsZFR3by50ZXh0Q29udGVudCA9ICdFZ3lTdXNoaSBFYXRlcnknO1xuICBjaGlsZFRocmVlLnRleHRDb250ZW50ID0gJ1NpbXBseSBEZWxpY2lvdXMnO1xuICBtYWluLmFwcGVuZChjaGlsZE9uZSwgY2hpbGRUd28sIGNoaWxkVGhyZWUpO1xuICByZXR1cm4gbWFpbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2NoZWR1bGUoKSB7XG4gIGxldCBzY2hlZHVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzY2hlZHVsZS5jbGFzc0xpc3QuYWRkKCdvcGVuaW5nLWhvdXJzJywgJ3JlbW92ZScpO1xuICBsZXQgY2hpbGRPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGV0IGNoaWxkVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCBjaGlsZFRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNoaWxkT25lLnRleHRDb250ZW50ID0gJ09wZW5pbmcgSG91cnMnO1xuICBjaGlsZFR3by50ZXh0Q29udGVudCA9ICdXZWVrIERheXM6IDEwOjAwIEFNIHRvIDEyOjAwIEFNJztcbiAgY2hpbGRUaHJlZS50ZXh0Q29udGVudCA9ICdGcmlkYXlzOiA1OjAwIFBNIHRvIDEyOjAwIEFNJztcbiAgc2NoZWR1bGUuYXBwZW5kKGNoaWxkT25lLCBjaGlsZFR3bywgY2hpbGRUaHJlZSk7XG4gIHJldHVybiBzY2hlZHVsZTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlTWFpbiwgY3JlYXRlU2NoZWR1bGUgfTtcbiIsImltcG9ydCBsb2dvSWNvbiBmcm9tICcuL2ltZ3MvbG9nbzMuanBnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTmF2QmFyKCkge1xuICBsZXQgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5hdkJhci5jbGFzc0xpc3QuYWRkKCduYXZiYXInKTtcblxuICBsZXQgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTtcbiAgbGV0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmFtZS50ZXh0Q29udGVudCA9ICdFZ3lTdXNoaSBFYXRlcnknO1xuICBsZXQgbG9nb0ltZyA9IG5ldyBJbWFnZSgpO1xuICBsb2dvSW1nLnNyYyA9IGxvZ29JY29uO1xuICBsb2dvSW1nLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbi1sb2dvJyk7XG4gIGxvZ28uYXBwZW5kKG5hbWUsIGxvZ29JbWcpO1xuXG4gIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGxldCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbGV0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBsZXQgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBob21lLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICBtZW51LnRleHRDb250ZW50ID0gJ01lbnUnO1xuICBhYm91dC50ZXh0Q29udGVudCA9ICdBYm91dCc7XG4gIHVsLmFwcGVuZChob21lLCBtZW51LCBhYm91dCk7XG5cbiAgbmF2QmFyLmFwcGVuZChsb2dvLCB1bCk7XG4gIHJldHVybiBuYXZCYXI7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNZW51cygpIHtcbiAgbGV0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51JywgJ3JlbW92ZScpO1xuXG4gIGxldCBtYWluRGlzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluRGlzaC5jbGFzc0xpc3QuYWRkKCdtYWluRGlzaCcpO1xuICBsZXQgb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgbGV0IHR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZXQgdGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGV0IGZvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGV0IGZpdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGV0IHNpeCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG4gIGxldCBzZXZlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGxldCBlaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZXQgbmluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZXQgdGVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcbiAgbGV0IGVsZXZlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGxldCB0d2VsdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGV0IHRoaXJ0ZWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCBmb3VydGVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZXQgZmlmdGVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZXQgc2l4dGVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZXQgc2V2ZW50ZWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCBlaWdodGVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZXQgbmluZXRlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGV0IHR3ZW50eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZXQgdHdlbnR5T25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG9uZS50ZXh0Q29udGVudCA9ICdOaWdpcmknO1xuICB0d28udGV4dENvbnRlbnQgPSAnU2FsbW9uLi4uLi4uLi4gMzAgRUdQJztcbiAgdGhyZWUudGV4dENvbnRlbnQgPSAnVHVuYS4uLi4uLi4uLi4gMzAgRUdQJztcbiAgZm91ci50ZXh0Q29udGVudCA9ICdDcmFiLi4uLi4uLi4uLiAyMiBFR1AnO1xuICBmaXZlLnRleHRDb250ZW50ID0gJ1NocmltcC4uLi4uLi4uIDI4IEVHUCc7XG4gIHNldmVuLnRleHRDb250ZW50ID0gJ1Nhc2hpbWknO1xuICBlaWdodC50ZXh0Q29udGVudCA9ICdTYWxtb24uLi4uLi4uLiA5MyBFR1AnO1xuICBuaW5lLnRleHRDb250ZW50ID0gJ1R1bmEuLi4uLi4uLi4uIDkyIEVHUCc7XG4gIGVsZXZlbi50ZXh0Q29udGVudCA9ICdTcGVjaWFsIFJvbGxzJztcbiAgdHdlbHZlLnRleHRDb250ZW50ID0gJ1BoaWxhZGVscGhpYSBSb2xsLi4uLi4uLi4gMTAwIEVHUCc7XG4gIHRoaXJ0ZWVuLnRleHRDb250ZW50ID0gJ0NhbGlmb3JuaWEgUm9sbC4uLi4uLi4uLi4gMTIwIEVHUCc7XG4gIGZvdXJ0ZWVuLnRleHRDb250ZW50ID0gJ1BoaWx5IFNocmltcC4uLi4uLi4uLi4uLi4gMTYwIEVHUCc7XG4gIGZpZnRlZW4udGV4dENvbnRlbnQgPSAnQmVhc3QgUm9sbC4uLi4uLi4uLi4uLi4uLiAxNTAgRUdQJztcbiAgc2l4dGVlbi50ZXh0Q29udGVudCA9ICdDcmlzcHkgUm9sbC4uLi4uLi4uLi4uLi4uIDEzNSBFR1AnO1xuICBzZXZlbnRlZW4udGV4dENvbnRlbnQgPSAnUG93ZXIgUm9sbC4uLi4uLi4uLi4uLi4uLiAxMjAgRUdQJztcbiAgZWlnaHRlZW4udGV4dENvbnRlbnQgPSAnSGF3YWkgUm9sbC4uLi4uLi4uLi4uLi4uLiAxNDAgRUdQJztcbiAgbmluZXRlZW4udGV4dENvbnRlbnQgPSAnU3BpZGVyIFJvbGwuLi4uLi4uLi4uLi4uLiAxMjUgRUdQJztcbiAgdHdlbnR5LnRleHRDb250ZW50ID0gJ1N1c2hpbWkgTGVtb24gUm9sbC4uLi4uLi4gMTAwIEVHUCc7XG4gIHR3ZW50eU9uZS50ZXh0Q29udGVudCA9ICdWb2xjYW5vIFJvbGwuLi4uLi4uLi4uLi4uIDEzNSBFR1AnO1xuICBtYWluRGlzaC5hcHBlbmQoXG4gICAgb25lLFxuICAgIHR3byxcbiAgICB0aHJlZSxcbiAgICBmb3VyLFxuICAgIGZpdmUsXG4gICAgc2l4LFxuICAgIHNldmVuLFxuICAgIGVpZ2h0LFxuICAgIG5pbmUsXG4gICAgdGVuLFxuICAgIGVsZXZlbixcbiAgICB0d2VsdmUsXG4gICAgdGhpcnRlZW4sXG4gICAgZm91cnRlZW4sXG4gICAgZmlmdGVlbixcbiAgICBzaXh0ZWVuLFxuICAgIHNldmVudGVlbixcbiAgICBlaWdodGVlbixcbiAgICBuaW5ldGVlbixcbiAgICB0d2VudHksXG4gICAgdHdlbnR5T25lXG4gICk7XG5cbiAgbGV0IGRlc3NlcnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRlc3NlcnRzLmNsYXNzTGlzdC5hZGQoJ2Rlc3NlcnRzJyk7XG4gIGxldCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgbGV0IGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGV0IGMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGV0IGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGV0IGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGV0IGYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGV0IGcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGV0IGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGV0IGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuICBsZXQgaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGxldCBrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCBsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCBtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCBuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCBvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCBxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGEudGV4dENvbnRlbnQgPSAnRHJpbmtzJztcbiAgYi50ZXh0Q29udGVudCA9ICdMZW1vbiBTcXVhc2guLi4uLi4uLi4gNTAgRUdQJztcbiAgYy50ZXh0Q29udGVudCA9ICdCbHVlIE9jZWFuIFNxdWFzaC4uLi4gNzAgRUdQJztcbiAgZC50ZXh0Q29udGVudCA9ICdGcnVpdHkgTWlsayBTaGFrZS4uLi4gNjAgRUdQJztcbiAgZS50ZXh0Q29udGVudCA9ICdDb2ZlZSBMYXR0ZS4uLi4uLi4uLi4gNTAgRUdQJztcbiAgZi50ZXh0Q29udGVudCA9ICdUZWEgTGF0dGUuLi4uLi4uLi4uLi4gNDAgRUdQJztcbiAgZy50ZXh0Q29udGVudCA9ICdHcmVhbiBUZWEuLi4uLi4uLi4uLi4gNDAgRUdQJztcbiAgaC50ZXh0Q29udGVudCA9ICdNaWxreSBHaW5nZXIuLi4uLi4uLi4gNTAgRUdQJztcbiAgai50ZXh0Q29udGVudCA9ICdEZXNzZXJ0cyc7XG4gIGsudGV4dENvbnRlbnQgPSAnR3VhdmEgU2lsa3kgUHVkZGluZy4uLi4uLi4uLiA5MCBFR1AnO1xuICBsLnRleHRDb250ZW50ID0gJ0FwcGxlIENob2NvbGF0ZSBNaWxrLi4uLi4uLi4gODUgRUdQJztcbiAgbS50ZXh0Q29udGVudCA9ICdUaXJhbWlzc3UgQnJvd25pZXMuLi4uLi4uLi4uIDk1IEVHUCc7XG4gIG4udGV4dENvbnRlbnQgPSAnSWNlIENyZWFtLi4uLi4uLi4uLi4uLi4uLi4uLiA0MCBFR1AnO1xuICBvLnRleHRDb250ZW50ID0gJ0ZydWl0IFNhbGFkLi4uLi4uLi4uLi4uLi4uLi4gNDAgRUdQJztcbiAgcC50ZXh0Q29udGVudCA9ICdDaGVlc2UgQ2FrZS4uLi4uLi4uLi4uLi4uLi4uIDY1IEVHUCc7XG4gIHEudGV4dENvbnRlbnQgPSAnUGVhbnV0IEJ1dHRlciBQaWUuLi4uLi4uLi4uLiA1NSBFR1AnO1xuICBkZXNzZXJ0cy5hcHBlbmQoYSwgYiwgYywgZCwgZSwgZiwgZywgaCwgaSwgaiwgaywgbCwgbSwgbiwgbywgcCwgcSk7XG5cbiAgbWVudS5hcHBlbmQobWFpbkRpc2gsIGRlc3NlcnRzKTtcbiAgcmV0dXJuIG1lbnU7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW1vdmUoKSB7XG4gIGxldCByZW1vdmVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZW1vdmUnKTtcbiAgcmVtb3ZlSXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0ucmVtb3ZlKCk7XG4gIH0pO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIG1vZHVsZXMgdGhhdCBuZWVkIHRvIGJlIGltcG9ydGVkXG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgY3JlYXRlTmF2QmFyIGZyb20gJy4vbWFpbic7XG5pbXBvcnQgeyBjcmVhdGVNYWluLCBjcmVhdGVTY2hlZHVsZSB9IGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgcmVtb3ZlIGZyb20gJy4vcmVtb3ZlJztcbmltcG9ydCBjcmVhdGVNZW51cyBmcm9tICcuL21lbnUnO1xuaW1wb3J0IGNyZWF0ZUFib3V0IGZyb20gJy4vYWJvdXQnO1xuXG4vLyBjcmVhdGluZyB0aGUgbmF2aWdhdGlvbiBiYXIgdGhhdCB3aWxsIG5vdCBiZSBkZWxldGVkXG5sZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5sZXQgbmF2YmFyID0gY3JlYXRlTmF2QmFyKCk7XG5cbi8vIGNyZWF0aW5nIHRoZSBob21lIHBhZ2UgY29udGVudFxubGV0IG1haW4gPSBjcmVhdGVNYWluKCk7XG5sZXQgc2NoZWR1bGUgPSBjcmVhdGVTY2hlZHVsZSgpO1xuXG4vLyBhcHBlbmRpbmcgdGhlIGhvbWUgcGFnZSBhbmQgbmF2QmFyIGNvbnRlbnRzIHVvcG4gb3BlbmluZyB0aGUgcGFnZVxuY29udGVudC5hcHBlbmQobmF2YmFyLCBtYWluLCBzY2hlZHVsZSk7XG5cbi8vc2VsZWN0aW5nIGJ1dHRvbnMgdGhhdCB3aWxsIGdldCBldmVudCBsaXN0aW5lcnNcbmxldCBuYXZMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGknKTtcblxubmF2TGlzdFswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgcmVtb3ZlKCk7XG4gIGNvbnRlbnQuYXBwZW5kKG1haW4sIHNjaGVkdWxlKTtcbn0pO1xuXG5uYXZMaXN0WzFdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICByZW1vdmUoKTtcbiAgbGV0IG1lbnUgPSBjcmVhdGVNZW51cygpO1xuICBjb250ZW50LmFwcGVuZChtZW51KTtcbn0pO1xuXG5uYXZMaXN0WzJdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICByZW1vdmUoKTtcbiAgbGV0IGFib3V0ID0gY3JlYXRlQWJvdXQoKTtcbiAgY29udGVudC5hcHBlbmQoYWJvdXQpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=