/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/font/TheWildBreathofZelda.otf */ "./assets/font/TheWildBreathofZelda.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/font/FOTRodinProM.otf */ "./assets/font/FOTRodinProM.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/background.jpeg */ "./assets/background.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/rupee.png */ "./assets/rupee.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n\tfont-family: 'TheWildBreathOfZelda';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")\n}\n\n@font-face {\n\tfont-family: 'FOTRodinPro';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n* {\n\tmargin: 0;\n\tpadding: 0;\n\t--background-col: rgba(0, 0, 0, 0.5);\n}\n\nbody {\n\theight: 100vh;\n\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tdisplay: flex;\n\tflex-direction: column;\n\tfont-family: 'FOTRodinPro';\n}\n\n#header {\n\tflex: none;\n}\n\n#header > h1 {\n\ttext-align: center;\n\tmargin: 16px;\n\tfont-family: 'TheWildBreathOfZelda';\n\tfont-size: 3rem;\n}\n\n#tabs {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-family: 'TheWildBreathOfZelda';\n\tfont-size: 1.5rem;\n}\n\nli {\n\tlist-style-type: none;\n\tpadding: 8px 16px;\n\twidth: 100px;\n\ttext-align: center;\n}\n\n#content {\n\tflex: 1 1 auto;\n\toverflow-y: auto;\n\tmin-height: 0px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tbackground-color: var(--background-col);\n\tcolor: white;\n}\n\n.clicked {\n\tbackground-color: var(--background-col);\n\tcolor: white;\n}\n\n#home-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: space-around;\n\twidth: 500px;\n\tmargin: auto;\n}\n\n.chef-img {\n\theight: 300px;\n\twidth: 300px;\n\tobject-fit: cover;\n\tborder-radius: 50%;\n\tmargin-bottom: 32px;\n\tborder: 2px solid white;\n}\n\n#menu-div {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tgap: 16px;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin: auto;\n\tpadding: 32px;\n}\n\n.food-card {\n\twidth: 300px;\n\theight: 250px;\n\tborder: 3px double white;\n\tpadding: 16px;\n\tborder-radius: 16px;\n\tbackground-color: rgba(0, 0, 0, 0.5);\n}\n\n.food-card h2 {\n\tfont-family: 'TheWildBreathOfZelda';\n\tfont-size: 2rem;\n}\n\n.food-card p {\n\tfont-size: 0.8rem;\n}\n\n.food-card .price {\n\tfont-size: 1rem;\n}\n\n.price::before {\n\tcontent: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n\n#contact-div {\n\twidth: 75%;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 32px;\n\tmargin: auto;\n\tpadding: 16px;\n}\n\n.contact-card {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 16px;\n\twidth: 500px;\n}\n\n.contact-card img {\n\twidth: 200px;\n\theight: 200px;\n\tborder-radius: 50%;\n\tborder: 1px solid white;\n}\n\n.contact-card h2 {\n\tfont-family: 'TheWildBreathOfZelda';\n\tfont-size: 2rem;\n}\n\n.contact-card p {\n\tfont-size: 0.9rem;\n}\n\n.map-card img {\n\twidth: 500px;\n\theight: 300px;\n\tflex: 1 1 auto;\n\tborder-radius: 16px;\n\tborder: 3px double white;\n}\n\n#footer {\n\tdisplay: flex;\n\tflex: none;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 8px;\n\tbackground-color: var(--background-col);\n\tpadding: 16px;\n\tcolor: white;\n}\n\n#footer img {\n\tpadding-top: 8px;\n}\n\na {\n\tcolor: white;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;CACC,mCAAmC;CACnC;AACD;;AAEA;CACC,0BAA0B;CAC1B,4CAA2C;AAC5C;;AAEA;CACC,SAAS;CACT,UAAU;CACV,oCAAoC;AACrC;;AAEA;CACC,aAAa;CACb,yDAAkD;CAClD,sBAAsB;CACtB,4BAA4B;CAC5B,aAAa;CACb,sBAAsB;CACtB,0BAA0B;AAC3B;;AAEA;CACC,UAAU;AACX;;AAEA;CACC,kBAAkB;CAClB,YAAY;CACZ,mCAAmC;CACnC,eAAe;AAChB;;AAEA;CACC,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,mCAAmC;CACnC,iBAAiB;AAClB;;AAEA;CACC,qBAAqB;CACrB,iBAAiB;CACjB,YAAY;CACZ,kBAAkB;AACnB;;AAEA;CACC,cAAc;CACd,gBAAgB;CAChB,eAAe;CACf,aAAa;CACb,mBAAmB;CACnB,uBAAuB;CACvB,uCAAuC;CACvC,YAAY;AACb;;AAEA;CACC,uCAAuC;CACvC,YAAY;AACb;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,6BAA6B;CAC7B,YAAY;CACZ,YAAY;AACb;;AAEA;CACC,aAAa;CACb,YAAY;CACZ,iBAAiB;CACjB,kBAAkB;CAClB,mBAAmB;CACnB,uBAAuB;AACxB;;AAEA;CACC,aAAa;CACb,eAAe;CACf,SAAS;CACT,mBAAmB;CACnB,uBAAuB;CACvB,YAAY;CACZ,aAAa;AACd;;AAEA;CACC,YAAY;CACZ,aAAa;CACb,wBAAwB;CACxB,aAAa;CACb,mBAAmB;CACnB,oCAAoC;AACrC;;AAEA;CACC,mCAAmC;CACnC,eAAe;AAChB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,gDAAmC;AACpC;;AAEA;CACC,UAAU;CACV,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,SAAS;CACT,YAAY;CACZ,aAAa;AACd;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,SAAS;CACT,YAAY;AACb;;AAEA;CACC,YAAY;CACZ,aAAa;CACb,kBAAkB;CAClB,uBAAuB;AACxB;;AAEA;CACC,mCAAmC;CACnC,eAAe;AAChB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,YAAY;CACZ,aAAa;CACb,cAAc;CACd,mBAAmB;CACnB,wBAAwB;AACzB;;AAEA;CACC,aAAa;CACb,UAAU;CACV,mBAAmB;CACnB,uBAAuB;CACvB,QAAQ;CACR,uCAAuC;CACvC,aAAa;CACb,YAAY;AACb;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,YAAY;AACb","sourcesContent":["@font-face {\n\tfont-family: 'TheWildBreathOfZelda';\n\tsrc: url('../assets/font/TheWildBreathofZelda.otf')\n}\n\n@font-face {\n\tfont-family: 'FOTRodinPro';\n\tsrc: url('../assets/font/FOTRodinProM.otf');\n}\n\n* {\n\tmargin: 0;\n\tpadding: 0;\n\t--background-col: rgba(0, 0, 0, 0.5);\n}\n\nbody {\n\theight: 100vh;\n\tbackground-image: url('../assets/background.jpeg');\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tdisplay: flex;\n\tflex-direction: column;\n\tfont-family: 'FOTRodinPro';\n}\n\n#header {\n\tflex: none;\n}\n\n#header > h1 {\n\ttext-align: center;\n\tmargin: 16px;\n\tfont-family: 'TheWildBreathOfZelda';\n\tfont-size: 3rem;\n}\n\n#tabs {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-family: 'TheWildBreathOfZelda';\n\tfont-size: 1.5rem;\n}\n\nli {\n\tlist-style-type: none;\n\tpadding: 8px 16px;\n\twidth: 100px;\n\ttext-align: center;\n}\n\n#content {\n\tflex: 1 1 auto;\n\toverflow-y: auto;\n\tmin-height: 0px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tbackground-color: var(--background-col);\n\tcolor: white;\n}\n\n.clicked {\n\tbackground-color: var(--background-col);\n\tcolor: white;\n}\n\n#home-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: space-around;\n\twidth: 500px;\n\tmargin: auto;\n}\n\n.chef-img {\n\theight: 300px;\n\twidth: 300px;\n\tobject-fit: cover;\n\tborder-radius: 50%;\n\tmargin-bottom: 32px;\n\tborder: 2px solid white;\n}\n\n#menu-div {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tgap: 16px;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin: auto;\n\tpadding: 32px;\n}\n\n.food-card {\n\twidth: 300px;\n\theight: 250px;\n\tborder: 3px double white;\n\tpadding: 16px;\n\tborder-radius: 16px;\n\tbackground-color: rgba(0, 0, 0, 0.5);\n}\n\n.food-card h2 {\n\tfont-family: 'TheWildBreathOfZelda';\n\tfont-size: 2rem;\n}\n\n.food-card p {\n\tfont-size: 0.8rem;\n}\n\n.food-card .price {\n\tfont-size: 1rem;\n}\n\n.price::before {\n\tcontent: url('../assets/rupee.png');\n}\n\n#contact-div {\n\twidth: 75%;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 32px;\n\tmargin: auto;\n\tpadding: 16px;\n}\n\n.contact-card {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 16px;\n\twidth: 500px;\n}\n\n.contact-card img {\n\twidth: 200px;\n\theight: 200px;\n\tborder-radius: 50%;\n\tborder: 1px solid white;\n}\n\n.contact-card h2 {\n\tfont-family: 'TheWildBreathOfZelda';\n\tfont-size: 2rem;\n}\n\n.contact-card p {\n\tfont-size: 0.9rem;\n}\n\n.map-card img {\n\twidth: 500px;\n\theight: 300px;\n\tflex: 1 1 auto;\n\tborder-radius: 16px;\n\tborder: 3px double white;\n}\n\n#footer {\n\tdisplay: flex;\n\tflex: none;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 8px;\n\tbackground-color: var(--background-col);\n\tpadding: 16px;\n\tcolor: white;\n}\n\n#footer img {\n\tpadding-top: 8px;\n}\n\na {\n\tcolor: white;\n}\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunctions.js */ "./src/helperFunctions.js");


const renderContact = event => {
	_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.clearContent();
	_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.toggleClick(event.target);
	
	const contactDiv = _helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createContentDiv('contact-div');
	const contactCard = document.createElement('div');
	contactCard.classList.add('contact-card');

	const div = document.createElement('div');
	const contactTitle = document.createElement('h2');
	contactTitle.textContent = 'Chef Link';
	div.appendChild(contactTitle);

	const chefDesc = document.createElement('p');
	chefDesc.textContent = "Seasoned chef and Hero of Hyrule. Expert forager and hunter with over 100 years of experience. Traveling across Hyrule in the blink of an eye - come join us for a meal when we cross paths!";
	div.appendChild(chefDesc);

	contactCard.appendChild(div);

	const profilePic = new Image();
	profilePic.src = '../assets/profile-pic.jpeg';
	contactCard.appendChild(profilePic);

	contactDiv.appendChild(contactCard);

	const mapCard = document.createElement('div');
	mapCard.classList.add('map-card');

	const map = new Image();
	map.src = '../assets/map.jpeg';
	mapCard.appendChild(map);

	contactDiv.appendChild(mapCard);

	_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.appendToContent(contactDiv);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderContact);

/***/ }),

/***/ "./src/helperFunctions.js":
/*!********************************!*\
  !*** ./src/helperFunctions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendToContent": () => (/* binding */ appendToContent),
/* harmony export */   "clearContent": () => (/* binding */ clearContent),
/* harmony export */   "createContentDiv": () => (/* binding */ createContentDiv),
/* harmony export */   "toggleClick": () => (/* binding */ toggleClick)
/* harmony export */ });
function clearContent() {
	const content = document.getElementById('content');
	content.innerHTML = null;
}

function toggleClick(target) {
	const tabs = document.querySelectorAll('#header li');

	for (const tab of tabs) {
		if (tab == target) {
			tab.classList.add('clicked');
		} else if (tab.classList.contains('clicked')) {
			tab.classList.remove('clicked');
		}
	}
}

function createContentDiv(id) {
	const div = document.createElement('div');
	div.id = id;
	div.classList.add('content-div');

	return div;
}

function appendToContent(node) {
	const content = document.getElementById('content');
	content.appendChild(node);
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunctions.js */ "./src/helperFunctions.js");


const renderHome = event => {
	_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.clearContent();
	_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.toggleClick(event.target);
	
	const introDiv = _helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createContentDiv('home-div');

	const chefPic = new Image();
	chefPic.src = '../assets/chef.gif'
	chefPic.classList.add('chef-img');
	introDiv.append(chefPic);

	const introText = document.createElement('p');
	introText.textContent = 'Serving delicious, rustic meals made from the best ingredients across the Hyrule wilderness. We cook a wide selection of dishes representing the diverse regions of our land.';
	introDiv.appendChild(introText);

	_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.appendToContent(introDiv);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHome);

/***/ }),

/***/ "./src/init.js":
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");




const renderHeader = () => {
	const header = document.createElement('div');
	header.id = 'header';

	const title = document.createElement('h1');
	title.textContent = 'Breath of the Wok';
	header.appendChild(title);

	const tabs = document.createElement('ul');
	tabs.id = 'tabs';
	for (const tabText of ['Home', 'Menu', 'Contact']) {
		let tab = document.createElement('li');
		tab.textContent = tabText;
		tabs.appendChild(tab);
	}
	header.appendChild(tabs);

	document.body.appendChild(header);
}

const renderContent = () => {
	const content = document.createElement('div');
	content.id = 'content';
	document.body.appendChild(content);
}

const renderFooter = () => {
	const footer = document.createElement('footer');
	footer.id = 'footer';

	const footerText = document.createElement('p');
	footerText.innerHTML = 'Made by <a href="https://github.com/xinweny">xinweny<a> in 2022'
	footer.appendChild(footerText);

	const projectLink = document.createElement('a');
	projectLink.href = 'https://github.com/xinweny/restaurant-page';
	const githubLogo = new Image();
	githubLogo.src = '../assets/github.png';
	projectLink.appendChild(githubLogo);
	footer.append(projectLink);

	document.body.appendChild(footer);
}

const addTabEvtListeners = () => {
	const buttons = Array.from(document.querySelectorAll('#header li'));

	buttons[0].addEventListener('click', _home_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
	buttons[1].addEventListener('click', _menu_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
	buttons[2].addEventListener('click', _contact_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
}

const initApp = () => {
	renderHeader();
	renderContent();
	renderFooter();
	addTabEvtListeners();
	document.querySelector('#header li').click();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initApp);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunctions.js */ "./src/helperFunctions.js");


function Food(name, price, description) {
	const kebabCase = name => name.toLowerCase().replaceAll(' ', '-');

	const src = `../assets/food/${kebabCase(name)}.png`;

	return { 
		name,
		src,
		price,
		description
	};
}

const createFoodCard = food => {
	const card = document.createElement('div');
	card.classList.add('food-card');
	
	const foodName = document.createElement('h2');
	foodName.textContent = food.name;
	
	const foodDesc = document.createElement('p');
	foodDesc.textContent = food.description;

	const foodPrice = document.createElement('p');
	foodPrice.classList.add('price');
	foodPrice.textContent = food.price;

	const foodImg = new Image();
	foodImg.src = food.src;

	for (const element of [foodName, foodPrice, foodDesc, foodImg]) {
		card.appendChild(element);
	}

	return card;
}

const foodItems = [
	Food('Meat-Stuffed Pumpkin', 60, "This hollow, meat-filled fortified pumpkin is a local specialty or Kakariko Village."),
	Food('Salt-Grilled Meat', 50, "This lavish grilled dish makes liberal use of high-quality cuts of meat."),
	Food('Poultry Pilaf', 45, "Made with the highest-quality poultry, every bite of this pilaf floods your mouth with flavor."),
	Food('Meat Pie', 35, "You'll need an extra napkin to deal with this juicy pie of perfectly baked minced meat."),
	Food('Salmon Meuniere', 60, "The crispy skin of this fried hearty salmon puts its texture in a class all its own."),
	Food('Seafood Paella', 50, "No fisherman's birthday bash would be complete without this top-shelf seafood dish."),
	Food('Crab Omelet with Rice', 45, "The fluffy crab legs pair perfectly with the rice for a truly scrumptious dish."),
	Food('Clam Chowder', 30, "The nutritional value of hearty blueshell snail combines with butter and milk in a rich soup."),
	Food('Vegetable Omelet', 35, "This home-style dish mixes fluffy eggs with chopped vegetables for nutritional balance."),
	Food('Vegetable Curry', 30, "This healthy curry is popular for its mild flavor and moderate spiciness."),
	Food('Mushroom Rice Balls', 25, "The aroma of the mushrooms tickles your nose as you peel back the leafy wrapping."),
	Food('Fried Wild Greens', 20, "A healthy dish made by cooking mixed greens over a strong flame."),
	Food('Creamy Heart Soup', 30, "Enjoying this sweet soup with another person will bring you both closer together."),
	Food('Monster Cake', 25, "It's said that once you have a taste of this cake, you'll never forget its sweetness."),
	Food('Wildberry Crepe', 20, "Sweet, tart wildberries are folded into thin, springy dough to make this dessert."),
	Food('Honeyed Fruits', 15, "A dish that combines the thick sweetness of honey with the acidity of sour fruits."),
	Food('Fairy Tonic', 20, "This powerful recovery elixir harnesses the power of fairies. It has a sweet fragrance."),
	Food('Warm Milk', 10, "Make this by heating up some milk. Drink it before bed to ensure a good night's sleep."),
	Food('Rock-Hard Food', 5, "A dish gone awry after adding the wrong ingredient. Chewing your way through this won't be fun, but it will fill you up when you're between a rock and a hard place."),
	Food('Dubious Food', 1, "It's too gross to even look at. A bizarre smell issues forth from this heap. Eating it won't hurt you, though... probably.")
];

const renderMenu = event => {
	_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.clearContent();
	_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.toggleClick(event.target);

	const menuDiv = _helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createContentDiv('menu-div');
	for (const food of foodItems) {
		let foodCard = createFoodCard(food);
		menuDiv.appendChild(foodCard);
	}

	_helperFunctions_js__WEBPACK_IMPORTED_MODULE_0__.appendToContent(menuDiv);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMenu);

/***/ }),

/***/ "./assets/background.jpeg":
/*!********************************!*\
  !*** ./assets/background.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c1e5bd2196adfc4bf759.jpeg";

/***/ }),

/***/ "./assets/font/FOTRodinProM.otf":
/*!**************************************!*\
  !*** ./assets/font/FOTRodinProM.otf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3503afff0c6b252264cf.otf";

/***/ }),

/***/ "./assets/font/TheWildBreathofZelda.otf":
/*!**********************************************!*\
  !*** ./assets/font/TheWildBreathofZelda.otf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f2586a76dbe6e9c1c007.otf";

/***/ }),

/***/ "./assets/rupee.png":
/*!**************************!*\
  !*** ./assets/rupee.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1e2e8c2c48907e209121.png";

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
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init.js */ "./src/init.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



(0,_init_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQWdDO0FBQ1g7O0FBRXJCLG9EQUFPLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVscGVyRnVuY3Rpb25zLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbml0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZm9udC9UaGVXaWxkQnJlYXRob2ZaZWxkYS5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZm9udC9GT1RSb2RpblByb00ub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2JhY2tncm91bmQuanBlZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9ydXBlZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogJ1RoZVdpbGRCcmVhdGhPZlplbGRhJztcXG5cXHRzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIilcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdGT1RSb2RpblBybyc7XFxuXFx0c3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG4qIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHQtLWJhY2tncm91bmQtY29sOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbmJvZHkge1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGZvbnQtZmFtaWx5OiAnRk9UUm9kaW5Qcm8nO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG5cXHRmbGV4OiBub25lO1xcbn1cXG5cXG4jaGVhZGVyID4gaDEge1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRtYXJnaW46IDE2cHg7XFxuXFx0Zm9udC1mYW1pbHk6ICdUaGVXaWxkQnJlYXRoT2ZaZWxkYSc7XFxuXFx0Zm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4jdGFicyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZvbnQtZmFtaWx5OiAnVGhlV2lsZEJyZWF0aE9mWmVsZGEnO1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5saSB7XFxuXFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xcblxcdHBhZGRpbmc6IDhweCAxNnB4O1xcblxcdHdpZHRoOiAxMDBweDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNjb250ZW50IHtcXG5cXHRmbGV4OiAxIDEgYXV0bztcXG5cXHRvdmVyZmxvdy15OiBhdXRvO1xcblxcdG1pbi1oZWlnaHQ6IDBweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2wpO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmNsaWNrZWQge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sKTtcXG5cXHRjb2xvcjogd2hpdGU7XFxufVxcblxcbiNob21lLWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuXFx0d2lkdGg6IDUwMHB4O1xcblxcdG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmNoZWYtaW1nIHtcXG5cXHRoZWlnaHQ6IDMwMHB4O1xcblxcdHdpZHRoOiAzMDBweDtcXG5cXHRvYmplY3QtZml0OiBjb3ZlcjtcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxuXFx0bWFyZ2luLWJvdHRvbTogMzJweDtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuI21lbnUtZGl2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRnYXA6IDE2cHg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRtYXJnaW46IGF1dG87XFxuXFx0cGFkZGluZzogMzJweDtcXG59XFxuXFxuLmZvb2QtY2FyZCB7XFxuXFx0d2lkdGg6IDMwMHB4O1xcblxcdGhlaWdodDogMjUwcHg7XFxuXFx0Ym9yZGVyOiAzcHggZG91YmxlIHdoaXRlO1xcblxcdHBhZGRpbmc6IDE2cHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTZweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5mb29kLWNhcmQgaDIge1xcblxcdGZvbnQtZmFtaWx5OiAnVGhlV2lsZEJyZWF0aE9mWmVsZGEnO1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmZvb2QtY2FyZCBwIHtcXG5cXHRmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLmZvb2QtY2FyZCAucHJpY2Uge1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnByaWNlOjpiZWZvcmUge1xcblxcdGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxufVxcblxcbiNjb250YWN0LWRpdiB7XFxuXFx0d2lkdGg6IDc1JTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDMycHg7XFxuXFx0bWFyZ2luOiBhdXRvO1xcblxcdHBhZGRpbmc6IDE2cHg7XFxufVxcblxcbi5jb250YWN0LWNhcmQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDE2cHg7XFxuXFx0d2lkdGg6IDUwMHB4O1xcbn1cXG5cXG4uY29udGFjdC1jYXJkIGltZyB7XFxuXFx0d2lkdGg6IDIwMHB4O1xcblxcdGhlaWdodDogMjAwcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uY29udGFjdC1jYXJkIGgyIHtcXG5cXHRmb250LWZhbWlseTogJ1RoZVdpbGRCcmVhdGhPZlplbGRhJztcXG5cXHRmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5jb250YWN0LWNhcmQgcCB7XFxuXFx0Zm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi5tYXAtY2FyZCBpbWcge1xcblxcdHdpZHRoOiA1MDBweDtcXG5cXHRoZWlnaHQ6IDMwMHB4O1xcblxcdGZsZXg6IDEgMSBhdXRvO1xcblxcdGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuXFx0Ym9yZGVyOiAzcHggZG91YmxlIHdoaXRlO1xcbn1cXG5cXG4jZm9vdGVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXg6IG5vbmU7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRnYXA6IDhweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbCk7XFxuXFx0cGFkZGluZzogMTZweDtcXG5cXHRjb2xvcjogd2hpdGU7XFxufVxcblxcbiNmb290ZXIgaW1nIHtcXG5cXHRwYWRkaW5nLXRvcDogOHB4O1xcbn1cXG5cXG5hIHtcXG5cXHRjb2xvcjogd2hpdGU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxtQ0FBbUM7Q0FDbkM7QUFDRDs7QUFFQTtDQUNDLDBCQUEwQjtDQUMxQiw0Q0FBMkM7QUFDNUM7O0FBRUE7Q0FDQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLG9DQUFvQztBQUNyQzs7QUFFQTtDQUNDLGFBQWE7Q0FDYix5REFBa0Q7Q0FDbEQsc0JBQXNCO0NBQ3RCLDRCQUE0QjtDQUM1QixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLFVBQVU7QUFDWDs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osbUNBQW1DO0NBQ25DLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQixtQ0FBbUM7Q0FDbkMsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLGlCQUFpQjtDQUNqQixZQUFZO0NBQ1osa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsY0FBYztDQUNkLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2YsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQix1QkFBdUI7Q0FDdkIsdUNBQXVDO0NBQ3ZDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLHVDQUF1QztDQUN2QyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQiw2QkFBNkI7Q0FDN0IsWUFBWTtDQUNaLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixZQUFZO0NBQ1osaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLGVBQWU7Q0FDZixTQUFTO0NBQ1QsbUJBQW1CO0NBQ25CLHVCQUF1QjtDQUN2QixZQUFZO0NBQ1osYUFBYTtBQUNkOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYix3QkFBd0I7Q0FDeEIsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixvQ0FBb0M7QUFDckM7O0FBRUE7Q0FDQyxtQ0FBbUM7Q0FDbkMsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxnREFBbUM7QUFDcEM7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIsU0FBUztDQUNULFlBQVk7Q0FDWixhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLFNBQVM7Q0FDVCxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLGtCQUFrQjtDQUNsQix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxtQ0FBbUM7Q0FDbkMsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixhQUFhO0NBQ2IsY0FBYztDQUNkLG1CQUFtQjtDQUNuQix3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsVUFBVTtDQUNWLG1CQUFtQjtDQUNuQix1QkFBdUI7Q0FDdkIsUUFBUTtDQUNSLHVDQUF1QztDQUN2QyxhQUFhO0NBQ2IsWUFBWTtBQUNiOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsWUFBWTtBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiAnVGhlV2lsZEJyZWF0aE9mWmVsZGEnO1xcblxcdHNyYzogdXJsKCcuLi9hc3NldHMvZm9udC9UaGVXaWxkQnJlYXRob2ZaZWxkYS5vdGYnKVxcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogJ0ZPVFJvZGluUHJvJztcXG5cXHRzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnQvRk9UUm9kaW5Qcm9NLm90ZicpO1xcbn1cXG5cXG4qIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHQtLWJhY2tncm91bmQtY29sOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbmJvZHkge1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvYmFja2dyb3VuZC5qcGVnJyk7XFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRmb250LWZhbWlseTogJ0ZPVFJvZGluUHJvJztcXG59XFxuXFxuI2hlYWRlciB7XFxuXFx0ZmxleDogbm9uZTtcXG59XFxuXFxuI2hlYWRlciA+IGgxIHtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0bWFyZ2luOiAxNnB4O1xcblxcdGZvbnQtZmFtaWx5OiAnVGhlV2lsZEJyZWF0aE9mWmVsZGEnO1xcblxcdGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuI3RhYnMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRmb250LWZhbWlseTogJ1RoZVdpbGRCcmVhdGhPZlplbGRhJztcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxubGkge1xcblxcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG5cXHRwYWRkaW5nOiA4cHggMTZweDtcXG5cXHR3aWR0aDogMTAwcHg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jY29udGVudCB7XFxuXFx0ZmxleDogMSAxIGF1dG87XFxuXFx0b3ZlcmZsb3cteTogYXV0bztcXG5cXHRtaW4taGVpZ2h0OiAwcHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sKTtcXG5cXHRjb2xvcjogd2hpdGU7XFxufVxcblxcbi5jbGlja2VkIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbCk7XFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jaG9tZS1kaXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcdHdpZHRoOiA1MDBweDtcXG5cXHRtYXJnaW46IGF1dG87XFxufVxcblxcbi5jaGVmLWltZyB7XFxuXFx0aGVpZ2h0OiAzMDBweDtcXG5cXHR3aWR0aDogMzAwcHg7XFxuXFx0b2JqZWN0LWZpdDogY292ZXI7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcblxcdG1hcmdpbi1ib3R0b206IDMycHg7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgd2hpdGU7XFxufVxcblxcbiNtZW51LWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0Z2FwOiAxNnB4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0bWFyZ2luOiBhdXRvO1xcblxcdHBhZGRpbmc6IDMycHg7XFxufVxcblxcbi5mb29kLWNhcmQge1xcblxcdHdpZHRoOiAzMDBweDtcXG5cXHRoZWlnaHQ6IDI1MHB4O1xcblxcdGJvcmRlcjogM3B4IGRvdWJsZSB3aGl0ZTtcXG5cXHRwYWRkaW5nOiAxNnB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4uZm9vZC1jYXJkIGgyIHtcXG5cXHRmb250LWZhbWlseTogJ1RoZVdpbGRCcmVhdGhPZlplbGRhJztcXG5cXHRmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5mb29kLWNhcmQgcCB7XFxuXFx0Zm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi5mb29kLWNhcmQgLnByaWNlIHtcXG5cXHRmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5wcmljZTo6YmVmb3JlIHtcXG5cXHRjb250ZW50OiB1cmwoJy4uL2Fzc2V0cy9ydXBlZS5wbmcnKTtcXG59XFxuXFxuI2NvbnRhY3QtZGl2IHtcXG5cXHR3aWR0aDogNzUlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMzJweDtcXG5cXHRtYXJnaW46IGF1dG87XFxuXFx0cGFkZGluZzogMTZweDtcXG59XFxuXFxuLmNvbnRhY3QtY2FyZCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMTZweDtcXG5cXHR3aWR0aDogNTAwcHg7XFxufVxcblxcbi5jb250YWN0LWNhcmQgaW1nIHtcXG5cXHR3aWR0aDogMjAwcHg7XFxuXFx0aGVpZ2h0OiAyMDBweDtcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5jb250YWN0LWNhcmQgaDIge1xcblxcdGZvbnQtZmFtaWx5OiAnVGhlV2lsZEJyZWF0aE9mWmVsZGEnO1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmNvbnRhY3QtY2FyZCBwIHtcXG5cXHRmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLm1hcC1jYXJkIGltZyB7XFxuXFx0d2lkdGg6IDUwMHB4O1xcblxcdGhlaWdodDogMzAwcHg7XFxuXFx0ZmxleDogMSAxIGF1dG87XFxuXFx0Ym9yZGVyLXJhZGl1czogMTZweDtcXG5cXHRib3JkZXI6IDNweCBkb3VibGUgd2hpdGU7XFxufVxcblxcbiNmb290ZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleDogbm9uZTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGdhcDogOHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sKTtcXG5cXHRwYWRkaW5nOiAxNnB4O1xcblxcdGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2Zvb3RlciBpbWcge1xcblxcdHBhZGRpbmctdG9wOiA4cHg7XFxufVxcblxcbmEge1xcblxcdGNvbG9yOiB3aGl0ZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAqIGFzIGhlbHBlciBmcm9tICcuL2hlbHBlckZ1bmN0aW9ucy5qcyc7XG5cbmNvbnN0IHJlbmRlckNvbnRhY3QgPSBldmVudCA9PiB7XG5cdGhlbHBlci5jbGVhckNvbnRlbnQoKTtcblx0aGVscGVyLnRvZ2dsZUNsaWNrKGV2ZW50LnRhcmdldCk7XG5cdFxuXHRjb25zdCBjb250YWN0RGl2ID0gaGVscGVyLmNyZWF0ZUNvbnRlbnREaXYoJ2NvbnRhY3QtZGl2Jyk7XG5cdGNvbnN0IGNvbnRhY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGNvbnRhY3RDYXJkLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtY2FyZCcpO1xuXG5cdGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRjb25zdCBjb250YWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuXHRjb250YWN0VGl0bGUudGV4dENvbnRlbnQgPSAnQ2hlZiBMaW5rJztcblx0ZGl2LmFwcGVuZENoaWxkKGNvbnRhY3RUaXRsZSk7XG5cblx0Y29uc3QgY2hlZkRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdGNoZWZEZXNjLnRleHRDb250ZW50ID0gXCJTZWFzb25lZCBjaGVmIGFuZCBIZXJvIG9mIEh5cnVsZS4gRXhwZXJ0IGZvcmFnZXIgYW5kIGh1bnRlciB3aXRoIG92ZXIgMTAwIHllYXJzIG9mIGV4cGVyaWVuY2UuIFRyYXZlbGluZyBhY3Jvc3MgSHlydWxlIGluIHRoZSBibGluayBvZiBhbiBleWUgLSBjb21lIGpvaW4gdXMgZm9yIGEgbWVhbCB3aGVuIHdlIGNyb3NzIHBhdGhzIVwiO1xuXHRkaXYuYXBwZW5kQ2hpbGQoY2hlZkRlc2MpO1xuXG5cdGNvbnRhY3RDYXJkLmFwcGVuZENoaWxkKGRpdik7XG5cblx0Y29uc3QgcHJvZmlsZVBpYyA9IG5ldyBJbWFnZSgpO1xuXHRwcm9maWxlUGljLnNyYyA9ICcuLi9hc3NldHMvcHJvZmlsZS1waWMuanBlZyc7XG5cdGNvbnRhY3RDYXJkLmFwcGVuZENoaWxkKHByb2ZpbGVQaWMpO1xuXG5cdGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoY29udGFjdENhcmQpO1xuXG5cdGNvbnN0IG1hcENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0bWFwQ2FyZC5jbGFzc0xpc3QuYWRkKCdtYXAtY2FyZCcpO1xuXG5cdGNvbnN0IG1hcCA9IG5ldyBJbWFnZSgpO1xuXHRtYXAuc3JjID0gJy4uL2Fzc2V0cy9tYXAuanBlZyc7XG5cdG1hcENhcmQuYXBwZW5kQ2hpbGQobWFwKTtcblxuXHRjb250YWN0RGl2LmFwcGVuZENoaWxkKG1hcENhcmQpO1xuXG5cdGhlbHBlci5hcHBlbmRUb0NvbnRlbnQoY29udGFjdERpdik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckNvbnRhY3Q7IiwiZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQ29udGVudCgpIHtcblx0Y29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cdGNvbnRlbnQuaW5uZXJIVE1MID0gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUNsaWNrKHRhcmdldCkge1xuXHRjb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2hlYWRlciBsaScpO1xuXG5cdGZvciAoY29uc3QgdGFiIG9mIHRhYnMpIHtcblx0XHRpZiAodGFiID09IHRhcmdldCkge1xuXHRcdFx0dGFiLmNsYXNzTGlzdC5hZGQoJ2NsaWNrZWQnKTtcblx0XHR9IGVsc2UgaWYgKHRhYi5jbGFzc0xpc3QuY29udGFpbnMoJ2NsaWNrZWQnKSkge1xuXHRcdFx0dGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2NsaWNrZWQnKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnREaXYoaWQpIHtcblx0Y29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGRpdi5pZCA9IGlkO1xuXHRkaXYuY2xhc3NMaXN0LmFkZCgnY29udGVudC1kaXYnKTtcblxuXHRyZXR1cm4gZGl2O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kVG9Db250ZW50KG5vZGUpIHtcblx0Y29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cdGNvbnRlbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG59IiwiaW1wb3J0ICogYXMgaGVscGVyIGZyb20gJy4vaGVscGVyRnVuY3Rpb25zLmpzJztcblxuY29uc3QgcmVuZGVySG9tZSA9IGV2ZW50ID0+IHtcblx0aGVscGVyLmNsZWFyQ29udGVudCgpO1xuXHRoZWxwZXIudG9nZ2xlQ2xpY2soZXZlbnQudGFyZ2V0KTtcblx0XG5cdGNvbnN0IGludHJvRGl2ID0gaGVscGVyLmNyZWF0ZUNvbnRlbnREaXYoJ2hvbWUtZGl2Jyk7XG5cblx0Y29uc3QgY2hlZlBpYyA9IG5ldyBJbWFnZSgpO1xuXHRjaGVmUGljLnNyYyA9ICcuLi9hc3NldHMvY2hlZi5naWYnXG5cdGNoZWZQaWMuY2xhc3NMaXN0LmFkZCgnY2hlZi1pbWcnKTtcblx0aW50cm9EaXYuYXBwZW5kKGNoZWZQaWMpO1xuXG5cdGNvbnN0IGludHJvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0aW50cm9UZXh0LnRleHRDb250ZW50ID0gJ1NlcnZpbmcgZGVsaWNpb3VzLCBydXN0aWMgbWVhbHMgbWFkZSBmcm9tIHRoZSBiZXN0IGluZ3JlZGllbnRzIGFjcm9zcyB0aGUgSHlydWxlIHdpbGRlcm5lc3MuIFdlIGNvb2sgYSB3aWRlIHNlbGVjdGlvbiBvZiBkaXNoZXMgcmVwcmVzZW50aW5nIHRoZSBkaXZlcnNlIHJlZ2lvbnMgb2Ygb3VyIGxhbmQuJztcblx0aW50cm9EaXYuYXBwZW5kQ2hpbGQoaW50cm9UZXh0KTtcblxuXHRoZWxwZXIuYXBwZW5kVG9Db250ZW50KGludHJvRGl2KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVySG9tZTsiLCJpbXBvcnQgcmVuZGVySG9tZSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IHJlbmRlck1lbnUgZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCByZW5kZXJDb250YWN0IGZyb20gJy4vY29udGFjdC5qcyc7XG5cbmNvbnN0IHJlbmRlckhlYWRlciA9ICgpID0+IHtcblx0Y29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGhlYWRlci5pZCA9ICdoZWFkZXInO1xuXG5cdGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblx0dGl0bGUudGV4dENvbnRlbnQgPSAnQnJlYXRoIG9mIHRoZSBXb2snO1xuXHRoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG5cdGNvbnN0IHRhYnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXHR0YWJzLmlkID0gJ3RhYnMnO1xuXHRmb3IgKGNvbnN0IHRhYlRleHQgb2YgWydIb21lJywgJ01lbnUnLCAnQ29udGFjdCddKSB7XG5cdFx0bGV0IHRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cdFx0dGFiLnRleHRDb250ZW50ID0gdGFiVGV4dDtcblx0XHR0YWJzLmFwcGVuZENoaWxkKHRhYik7XG5cdH1cblx0aGVhZGVyLmFwcGVuZENoaWxkKHRhYnMpO1xuXG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbn1cblxuY29uc3QgcmVuZGVyQ29udGVudCA9ICgpID0+IHtcblx0Y29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRjb250ZW50LmlkID0gJ2NvbnRlbnQnO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xufVxuXG5jb25zdCByZW5kZXJGb290ZXIgPSAoKSA9PiB7XG5cdGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuXHRmb290ZXIuaWQgPSAnZm9vdGVyJztcblxuXHRjb25zdCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRmb290ZXJUZXh0LmlubmVySFRNTCA9ICdNYWRlIGJ5IDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20veGlud2VueVwiPnhpbndlbnk8YT4gaW4gMjAyMidcblx0Zm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlclRleHQpO1xuXG5cdGNvbnN0IHByb2plY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXHRwcm9qZWN0TGluay5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS94aW53ZW55L3Jlc3RhdXJhbnQtcGFnZSc7XG5cdGNvbnN0IGdpdGh1YkxvZ28gPSBuZXcgSW1hZ2UoKTtcblx0Z2l0aHViTG9nby5zcmMgPSAnLi4vYXNzZXRzL2dpdGh1Yi5wbmcnO1xuXHRwcm9qZWN0TGluay5hcHBlbmRDaGlsZChnaXRodWJMb2dvKTtcblx0Zm9vdGVyLmFwcGVuZChwcm9qZWN0TGluayk7XG5cblx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xufVxuXG5jb25zdCBhZGRUYWJFdnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG5cdGNvbnN0IGJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNoZWFkZXIgbGknKSk7XG5cblx0YnV0dG9uc1swXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlckhvbWUpO1xuXHRidXR0b25zWzFdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyTWVudSk7XG5cdGJ1dHRvbnNbMl0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJDb250YWN0KTtcbn1cblxuY29uc3QgaW5pdEFwcCA9ICgpID0+IHtcblx0cmVuZGVySGVhZGVyKCk7XG5cdHJlbmRlckNvbnRlbnQoKTtcblx0cmVuZGVyRm9vdGVyKCk7XG5cdGFkZFRhYkV2dExpc3RlbmVycygpO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVhZGVyIGxpJykuY2xpY2soKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdEFwcDsiLCJpbXBvcnQgKiBhcyBoZWxwZXIgZnJvbSAnLi9oZWxwZXJGdW5jdGlvbnMuanMnO1xuXG5mdW5jdGlvbiBGb29kKG5hbWUsIHByaWNlLCBkZXNjcmlwdGlvbikge1xuXHRjb25zdCBrZWJhYkNhc2UgPSBuYW1lID0+IG5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlQWxsKCcgJywgJy0nKTtcblxuXHRjb25zdCBzcmMgPSBgLi4vYXNzZXRzL2Zvb2QvJHtrZWJhYkNhc2UobmFtZSl9LnBuZ2A7XG5cblx0cmV0dXJuIHsgXG5cdFx0bmFtZSxcblx0XHRzcmMsXG5cdFx0cHJpY2UsXG5cdFx0ZGVzY3JpcHRpb25cblx0fTtcbn1cblxuY29uc3QgY3JlYXRlRm9vZENhcmQgPSBmb29kID0+IHtcblx0Y29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRjYXJkLmNsYXNzTGlzdC5hZGQoJ2Zvb2QtY2FyZCcpO1xuXHRcblx0Y29uc3QgZm9vZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuXHRmb29kTmFtZS50ZXh0Q29udGVudCA9IGZvb2QubmFtZTtcblx0XG5cdGNvbnN0IGZvb2REZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRmb29kRGVzYy50ZXh0Q29udGVudCA9IGZvb2QuZGVzY3JpcHRpb247XG5cblx0Y29uc3QgZm9vZFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRmb29kUHJpY2UuY2xhc3NMaXN0LmFkZCgncHJpY2UnKTtcblx0Zm9vZFByaWNlLnRleHRDb250ZW50ID0gZm9vZC5wcmljZTtcblxuXHRjb25zdCBmb29kSW1nID0gbmV3IEltYWdlKCk7XG5cdGZvb2RJbWcuc3JjID0gZm9vZC5zcmM7XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mIFtmb29kTmFtZSwgZm9vZFByaWNlLCBmb29kRGVzYywgZm9vZEltZ10pIHtcblx0XHRjYXJkLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXHR9XG5cblx0cmV0dXJuIGNhcmQ7XG59XG5cbmNvbnN0IGZvb2RJdGVtcyA9IFtcblx0Rm9vZCgnTWVhdC1TdHVmZmVkIFB1bXBraW4nLCA2MCwgXCJUaGlzIGhvbGxvdywgbWVhdC1maWxsZWQgZm9ydGlmaWVkIHB1bXBraW4gaXMgYSBsb2NhbCBzcGVjaWFsdHkgb3IgS2FrYXJpa28gVmlsbGFnZS5cIiksXG5cdEZvb2QoJ1NhbHQtR3JpbGxlZCBNZWF0JywgNTAsIFwiVGhpcyBsYXZpc2ggZ3JpbGxlZCBkaXNoIG1ha2VzIGxpYmVyYWwgdXNlIG9mIGhpZ2gtcXVhbGl0eSBjdXRzIG9mIG1lYXQuXCIpLFxuXHRGb29kKCdQb3VsdHJ5IFBpbGFmJywgNDUsIFwiTWFkZSB3aXRoIHRoZSBoaWdoZXN0LXF1YWxpdHkgcG91bHRyeSwgZXZlcnkgYml0ZSBvZiB0aGlzIHBpbGFmIGZsb29kcyB5b3VyIG1vdXRoIHdpdGggZmxhdm9yLlwiKSxcblx0Rm9vZCgnTWVhdCBQaWUnLCAzNSwgXCJZb3UnbGwgbmVlZCBhbiBleHRyYSBuYXBraW4gdG8gZGVhbCB3aXRoIHRoaXMganVpY3kgcGllIG9mIHBlcmZlY3RseSBiYWtlZCBtaW5jZWQgbWVhdC5cIiksXG5cdEZvb2QoJ1NhbG1vbiBNZXVuaWVyZScsIDYwLCBcIlRoZSBjcmlzcHkgc2tpbiBvZiB0aGlzIGZyaWVkIGhlYXJ0eSBzYWxtb24gcHV0cyBpdHMgdGV4dHVyZSBpbiBhIGNsYXNzIGFsbCBpdHMgb3duLlwiKSxcblx0Rm9vZCgnU2VhZm9vZCBQYWVsbGEnLCA1MCwgXCJObyBmaXNoZXJtYW4ncyBiaXJ0aGRheSBiYXNoIHdvdWxkIGJlIGNvbXBsZXRlIHdpdGhvdXQgdGhpcyB0b3Atc2hlbGYgc2VhZm9vZCBkaXNoLlwiKSxcblx0Rm9vZCgnQ3JhYiBPbWVsZXQgd2l0aCBSaWNlJywgNDUsIFwiVGhlIGZsdWZmeSBjcmFiIGxlZ3MgcGFpciBwZXJmZWN0bHkgd2l0aCB0aGUgcmljZSBmb3IgYSB0cnVseSBzY3J1bXB0aW91cyBkaXNoLlwiKSxcblx0Rm9vZCgnQ2xhbSBDaG93ZGVyJywgMzAsIFwiVGhlIG51dHJpdGlvbmFsIHZhbHVlIG9mIGhlYXJ0eSBibHVlc2hlbGwgc25haWwgY29tYmluZXMgd2l0aCBidXR0ZXIgYW5kIG1pbGsgaW4gYSByaWNoIHNvdXAuXCIpLFxuXHRGb29kKCdWZWdldGFibGUgT21lbGV0JywgMzUsIFwiVGhpcyBob21lLXN0eWxlIGRpc2ggbWl4ZXMgZmx1ZmZ5IGVnZ3Mgd2l0aCBjaG9wcGVkIHZlZ2V0YWJsZXMgZm9yIG51dHJpdGlvbmFsIGJhbGFuY2UuXCIpLFxuXHRGb29kKCdWZWdldGFibGUgQ3VycnknLCAzMCwgXCJUaGlzIGhlYWx0aHkgY3VycnkgaXMgcG9wdWxhciBmb3IgaXRzIG1pbGQgZmxhdm9yIGFuZCBtb2RlcmF0ZSBzcGljaW5lc3MuXCIpLFxuXHRGb29kKCdNdXNocm9vbSBSaWNlIEJhbGxzJywgMjUsIFwiVGhlIGFyb21hIG9mIHRoZSBtdXNocm9vbXMgdGlja2xlcyB5b3VyIG5vc2UgYXMgeW91IHBlZWwgYmFjayB0aGUgbGVhZnkgd3JhcHBpbmcuXCIpLFxuXHRGb29kKCdGcmllZCBXaWxkIEdyZWVucycsIDIwLCBcIkEgaGVhbHRoeSBkaXNoIG1hZGUgYnkgY29va2luZyBtaXhlZCBncmVlbnMgb3ZlciBhIHN0cm9uZyBmbGFtZS5cIiksXG5cdEZvb2QoJ0NyZWFteSBIZWFydCBTb3VwJywgMzAsIFwiRW5qb3lpbmcgdGhpcyBzd2VldCBzb3VwIHdpdGggYW5vdGhlciBwZXJzb24gd2lsbCBicmluZyB5b3UgYm90aCBjbG9zZXIgdG9nZXRoZXIuXCIpLFxuXHRGb29kKCdNb25zdGVyIENha2UnLCAyNSwgXCJJdCdzIHNhaWQgdGhhdCBvbmNlIHlvdSBoYXZlIGEgdGFzdGUgb2YgdGhpcyBjYWtlLCB5b3UnbGwgbmV2ZXIgZm9yZ2V0IGl0cyBzd2VldG5lc3MuXCIpLFxuXHRGb29kKCdXaWxkYmVycnkgQ3JlcGUnLCAyMCwgXCJTd2VldCwgdGFydCB3aWxkYmVycmllcyBhcmUgZm9sZGVkIGludG8gdGhpbiwgc3ByaW5neSBkb3VnaCB0byBtYWtlIHRoaXMgZGVzc2VydC5cIiksXG5cdEZvb2QoJ0hvbmV5ZWQgRnJ1aXRzJywgMTUsIFwiQSBkaXNoIHRoYXQgY29tYmluZXMgdGhlIHRoaWNrIHN3ZWV0bmVzcyBvZiBob25leSB3aXRoIHRoZSBhY2lkaXR5IG9mIHNvdXIgZnJ1aXRzLlwiKSxcblx0Rm9vZCgnRmFpcnkgVG9uaWMnLCAyMCwgXCJUaGlzIHBvd2VyZnVsIHJlY292ZXJ5IGVsaXhpciBoYXJuZXNzZXMgdGhlIHBvd2VyIG9mIGZhaXJpZXMuIEl0IGhhcyBhIHN3ZWV0IGZyYWdyYW5jZS5cIiksXG5cdEZvb2QoJ1dhcm0gTWlsaycsIDEwLCBcIk1ha2UgdGhpcyBieSBoZWF0aW5nIHVwIHNvbWUgbWlsay4gRHJpbmsgaXQgYmVmb3JlIGJlZCB0byBlbnN1cmUgYSBnb29kIG5pZ2h0J3Mgc2xlZXAuXCIpLFxuXHRGb29kKCdSb2NrLUhhcmQgRm9vZCcsIDUsIFwiQSBkaXNoIGdvbmUgYXdyeSBhZnRlciBhZGRpbmcgdGhlIHdyb25nIGluZ3JlZGllbnQuIENoZXdpbmcgeW91ciB3YXkgdGhyb3VnaCB0aGlzIHdvbid0IGJlIGZ1biwgYnV0IGl0IHdpbGwgZmlsbCB5b3UgdXAgd2hlbiB5b3UncmUgYmV0d2VlbiBhIHJvY2sgYW5kIGEgaGFyZCBwbGFjZS5cIiksXG5cdEZvb2QoJ0R1YmlvdXMgRm9vZCcsIDEsIFwiSXQncyB0b28gZ3Jvc3MgdG8gZXZlbiBsb29rIGF0LiBBIGJpemFycmUgc21lbGwgaXNzdWVzIGZvcnRoIGZyb20gdGhpcyBoZWFwLiBFYXRpbmcgaXQgd29uJ3QgaHVydCB5b3UsIHRob3VnaC4uLiBwcm9iYWJseS5cIilcbl07XG5cbmNvbnN0IHJlbmRlck1lbnUgPSBldmVudCA9PiB7XG5cdGhlbHBlci5jbGVhckNvbnRlbnQoKTtcblx0aGVscGVyLnRvZ2dsZUNsaWNrKGV2ZW50LnRhcmdldCk7XG5cblx0Y29uc3QgbWVudURpdiA9IGhlbHBlci5jcmVhdGVDb250ZW50RGl2KCdtZW51LWRpdicpO1xuXHRmb3IgKGNvbnN0IGZvb2Qgb2YgZm9vZEl0ZW1zKSB7XG5cdFx0bGV0IGZvb2RDYXJkID0gY3JlYXRlRm9vZENhcmQoZm9vZCk7XG5cdFx0bWVudURpdi5hcHBlbmRDaGlsZChmb29kQ2FyZCk7XG5cdH1cblxuXHRoZWxwZXIuYXBwZW5kVG9Db250ZW50KG1lbnVEaXYpO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJNZW51OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgaW5pdEFwcCBmcm9tICcuL2luaXQuanMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmluaXRBcHAoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=