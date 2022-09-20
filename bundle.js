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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n\tfont-family: 'TheWildBreathOfZelda';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")\n}\n\n@font-face {\n\tfont-family: 'FOTRodinPro';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n@keyframes show {\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n@keyframes fadeIn {\n  0% { opacity: 0; }\n  100% { opacity: 1; }\n}\n\n* {\n\tmargin: 0;\n\tpadding: 0;\n\t--background-col: rgba(0, 0, 0, 0.5);\n}\n\nbody {\n\theight: 100vh;\n\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tdisplay: flex;\n\tflex-direction: column;\n\tfont-family: 'FOTRodinPro';\n}\n\n#header {\n\tflex: none;\n}\n\n#header > div {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.crest {\n\tpadding-left: 16px;\n\tpadding-right: 16px;\n}\n\n#header h1 {\n\ttext-align: center;\n\tmargin: 16px;\n\tfont-family: 'TheWildBreathOfZelda';\n\tfont-size: 3rem;\n}\n\n#tabs {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-family: 'TheWildBreathOfZelda';\n\tfont-size: 1.5rem;\n}\n\nli {\n\tlist-style-type: none;\n\tpadding: 8px 16px;\n\twidth: 100px;\n\ttext-align: center;\n\tborder-radius: 8px 8px 0px 0px;\n}\n\n.clicked {\n\tbackground-color: var(--background-col);\n\tcolor: white;\n\ttransition: background-color 0.5s, color 0.5s;\n}\n\n#content {\n\tflex: 1 1 auto;\n\toverflow-y: auto;\n\tmin-height: 0px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tbackground-color: var(--background-col);\n\tcolor: white;\n}\n\n#home-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: space-around;\n\twidth: 500px;\n\tmargin: auto;\n\tpadding: 32px;\n}\n\n#home-div p {\n\ttext-align: center;\n}\n\n.chef-img {\n\theight: 300px;\n\twidth: 300px;\n\tobject-fit: cover;\n\tborder-radius: 50%;\n\tmargin-bottom: 32px;\n\tborder: 2px solid white;\n}\n\n#menu-div {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tgap: 16px;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin: auto;\n\tpadding: 32px;\n\n\tanimation: show 600ms 100ms cubic-bezier(0.38, 0.97, 0.56, 0.76) forwards;\n\topacity: 0;\n\ttransform: rotateX(-90deg);\n  transform-origin: top center;\n}\n\n.food-card {\n\twidth: 300px;\n\theight: 250px;\n\tborder: 3px double white;\n\tpadding: 16px;\n\tborder-radius: 16px;\n\tbackground-color: rgba(0, 0, 0, 0.5);\n}\n\n.food-card h2 {\n\tfont-family: 'TheWildBreathOfZelda';\n\tfont-size: 2rem;\n}\n\n.food-card p {\n\tfont-size: 0.8rem;\n}\n\n.food-card .price {\n\tfont-size: 1rem;\n\ttext-align: right;\n}\n\n.price::before {\n\tcontent: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n\tmargin-right: 4px;\n}\n\n.food-card div {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: flex-end;\n}\n\n#contact-div {\n\twidth: 75%;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 32px;\n\tmargin: auto;\n\tpadding: 32px;\n}\n\n.contact-card {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 16px;\n\twidth: 500px;\n}\n\n.contact-card img {\n\twidth: 200px;\n\theight: 200px;\n\tborder-radius: 50%;\n\tborder: 1px solid white;\n}\n\n.contact-card h2 {\n\tfont-family: 'TheWildBreathOfZelda';\n\tfont-size: 2rem;\n}\n\n.contact-card p {\n\tfont-size: 0.9rem;\n}\n\n.map-card img {\n\twidth: 500px;\n\theight: 300px;\n\tflex: 1 1 auto;\n\tborder-radius: 16px;\n\tborder: 3px double white;\n}\n\n#home-div, #contact-div {\n\tanimation: fadeIn 1s;\n}\n\n#footer {\n\tdisplay: flex;\n\tflex: none;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 8px;\n\tbackground-color: var(--background-col);\n\tpadding: 16px;\n\tcolor: white;\n}\n\n#footer img {\n\tpadding-top: 8px;\n}\n\na {\n\tcolor: white;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;CACC,mCAAmC;CACnC;AACD;;AAEA;CACC,0BAA0B;CAC1B,4CAA2C;AAC5C;;AAEA;EACE;IACE,UAAU;IACV,eAAe;EACjB;AACF;;AAEA;EACE,KAAK,UAAU,EAAE;EACjB,OAAO,UAAU,EAAE;AACrB;;AAEA;CACC,SAAS;CACT,UAAU;CACV,oCAAoC;AACrC;;AAEA;CACC,aAAa;CACb,yDAAkD;CAClD,sBAAsB;CACtB,4BAA4B;CAC5B,aAAa;CACb,sBAAsB;CACtB,0BAA0B;AAC3B;;AAEA;CACC,UAAU;AACX;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,uBAAuB;AACxB;;AAEA;CACC,kBAAkB;CAClB,mBAAmB;AACpB;;AAEA;CACC,kBAAkB;CAClB,YAAY;CACZ,mCAAmC;CACnC,eAAe;AAChB;;AAEA;CACC,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,mCAAmC;CACnC,iBAAiB;AAClB;;AAEA;CACC,qBAAqB;CACrB,iBAAiB;CACjB,YAAY;CACZ,kBAAkB;CAClB,8BAA8B;AAC/B;;AAEA;CACC,uCAAuC;CACvC,YAAY;CACZ,6CAA6C;AAC9C;;AAEA;CACC,cAAc;CACd,gBAAgB;CAChB,eAAe;CACf,aAAa;CACb,mBAAmB;CACnB,uBAAuB;CACvB,uCAAuC;CACvC,YAAY;AACb;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,6BAA6B;CAC7B,YAAY;CACZ,YAAY;CACZ,aAAa;AACd;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,aAAa;CACb,YAAY;CACZ,iBAAiB;CACjB,kBAAkB;CAClB,mBAAmB;CACnB,uBAAuB;AACxB;;AAEA;CACC,aAAa;CACb,eAAe;CACf,SAAS;CACT,mBAAmB;CACnB,uBAAuB;CACvB,YAAY;CACZ,aAAa;;CAEb,yEAAyE;CACzE,UAAU;CACV,0BAA0B;EACzB,4BAA4B;AAC9B;;AAEA;CACC,YAAY;CACZ,aAAa;CACb,wBAAwB;CACxB,aAAa;CACb,mBAAmB;CACnB,oCAAoC;AACrC;;AAEA;CACC,mCAAmC;CACnC,eAAe;AAChB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,eAAe;CACf,iBAAiB;AAClB;;AAEA;CACC,gDAAmC;CACnC,iBAAiB;AAClB;;AAEA;CACC,aAAa;CACb,8BAA8B;CAC9B,qBAAqB;AACtB;;AAEA;CACC,UAAU;CACV,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,SAAS;CACT,YAAY;CACZ,aAAa;AACd;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,SAAS;CACT,YAAY;AACb;;AAEA;CACC,YAAY;CACZ,aAAa;CACb,kBAAkB;CAClB,uBAAuB;AACxB;;AAEA;CACC,mCAAmC;CACnC,eAAe;AAChB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,YAAY;CACZ,aAAa;CACb,cAAc;CACd,mBAAmB;CACnB,wBAAwB;AACzB;;AAEA;CACC,oBAAoB;AACrB;;AAEA;CACC,aAAa;CACb,UAAU;CACV,mBAAmB;CACnB,uBAAuB;CACvB,QAAQ;CACR,uCAAuC;CACvC,aAAa;CACb,YAAY;AACb;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,YAAY;AACb","sourcesContent":["@font-face {\n\tfont-family: 'TheWildBreathOfZelda';\n\tsrc: url('../assets/font/TheWildBreathofZelda.otf')\n}\n\n@font-face {\n\tfont-family: 'FOTRodinPro';\n\tsrc: url('../assets/font/FOTRodinProM.otf');\n}\n\n@keyframes show {\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n@keyframes fadeIn {\n  0% { opacity: 0; }\n  100% { opacity: 1; }\n}\n\n* {\n\tmargin: 0;\n\tpadding: 0;\n\t--background-col: rgba(0, 0, 0, 0.5);\n}\n\nbody {\n\theight: 100vh;\n\tbackground-image: url('../assets/background.jpeg');\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tdisplay: flex;\n\tflex-direction: column;\n\tfont-family: 'FOTRodinPro';\n}\n\n#header {\n\tflex: none;\n}\n\n#header > div {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.crest {\n\tpadding-left: 16px;\n\tpadding-right: 16px;\n}\n\n#header h1 {\n\ttext-align: center;\n\tmargin: 16px;\n\tfont-family: 'TheWildBreathOfZelda';\n\tfont-size: 3rem;\n}\n\n#tabs {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-family: 'TheWildBreathOfZelda';\n\tfont-size: 1.5rem;\n}\n\nli {\n\tlist-style-type: none;\n\tpadding: 8px 16px;\n\twidth: 100px;\n\ttext-align: center;\n\tborder-radius: 8px 8px 0px 0px;\n}\n\n.clicked {\n\tbackground-color: var(--background-col);\n\tcolor: white;\n\ttransition: background-color 0.5s, color 0.5s;\n}\n\n#content {\n\tflex: 1 1 auto;\n\toverflow-y: auto;\n\tmin-height: 0px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tbackground-color: var(--background-col);\n\tcolor: white;\n}\n\n#home-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: space-around;\n\twidth: 500px;\n\tmargin: auto;\n\tpadding: 32px;\n}\n\n#home-div p {\n\ttext-align: center;\n}\n\n.chef-img {\n\theight: 300px;\n\twidth: 300px;\n\tobject-fit: cover;\n\tborder-radius: 50%;\n\tmargin-bottom: 32px;\n\tborder: 2px solid white;\n}\n\n#menu-div {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tgap: 16px;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin: auto;\n\tpadding: 32px;\n\n\tanimation: show 600ms 100ms cubic-bezier(0.38, 0.97, 0.56, 0.76) forwards;\n\topacity: 0;\n\ttransform: rotateX(-90deg);\n  transform-origin: top center;\n}\n\n.food-card {\n\twidth: 300px;\n\theight: 250px;\n\tborder: 3px double white;\n\tpadding: 16px;\n\tborder-radius: 16px;\n\tbackground-color: rgba(0, 0, 0, 0.5);\n}\n\n.food-card h2 {\n\tfont-family: 'TheWildBreathOfZelda';\n\tfont-size: 2rem;\n}\n\n.food-card p {\n\tfont-size: 0.8rem;\n}\n\n.food-card .price {\n\tfont-size: 1rem;\n\ttext-align: right;\n}\n\n.price::before {\n\tcontent: url('../assets/rupee.png');\n\tmargin-right: 4px;\n}\n\n.food-card div {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: flex-end;\n}\n\n#contact-div {\n\twidth: 75%;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 32px;\n\tmargin: auto;\n\tpadding: 32px;\n}\n\n.contact-card {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 16px;\n\twidth: 500px;\n}\n\n.contact-card img {\n\twidth: 200px;\n\theight: 200px;\n\tborder-radius: 50%;\n\tborder: 1px solid white;\n}\n\n.contact-card h2 {\n\tfont-family: 'TheWildBreathOfZelda';\n\tfont-size: 2rem;\n}\n\n.contact-card p {\n\tfont-size: 0.9rem;\n}\n\n.map-card img {\n\twidth: 500px;\n\theight: 300px;\n\tflex: 1 1 auto;\n\tborder-radius: 16px;\n\tborder: 3px double white;\n}\n\n#home-div, #contact-div {\n\tanimation: fadeIn 1s;\n}\n\n#footer {\n\tdisplay: flex;\n\tflex: none;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 8px;\n\tbackground-color: var(--background-col);\n\tpadding: 16px;\n\tcolor: white;\n}\n\n#footer img {\n\tpadding-top: 8px;\n}\n\na {\n\tcolor: white;\n}\n"],"sourceRoot":""}]);
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




const addCrest = (parentNode) => {
	const crest = new Image();
	crest.classList.add('crest');
	crest.src = '../assets/crest.png';

	parentNode.appendChild(crest);
}

const renderHeader = () => {
	const header = document.createElement('div');
	header.id = 'header';

	const div = document.createElement('div');

	addCrest(div);
	const title = document.createElement('h1');
	title.textContent = 'Breath of the Wok';
	div.appendChild(title);
	addCrest(div);

	header.appendChild(div);

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

	const div = document.createElement('div');
	div.appendChild(foodImg);
	div.appendChild(foodPrice);

	for (const element of [foodName, div, foodDesc]) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsc0pBQTBEO0FBQ3RHLDRDQUE0QyxzSUFBa0Q7QUFDOUYsNENBQTRDLDBIQUE0QztBQUN4Riw0Q0FBNEMsOEdBQXNDO0FBQ2xGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLHNEQUFzRCx3Q0FBd0MsMkRBQTJELGdCQUFnQiwrQkFBK0IseURBQXlELEdBQUcscUJBQXFCLFVBQVUsaUJBQWlCLHNCQUFzQixLQUFLLEdBQUcsdUJBQXVCLFNBQVMsYUFBYSxXQUFXLGFBQWEsR0FBRyxPQUFPLGNBQWMsZUFBZSx5Q0FBeUMsR0FBRyxVQUFVLGtCQUFrQixzRUFBc0UsMkJBQTJCLGlDQUFpQyxrQkFBa0IsMkJBQTJCLCtCQUErQixHQUFHLGFBQWEsZUFBZSxHQUFHLG1CQUFtQixrQkFBa0Isd0JBQXdCLDRCQUE0QixHQUFHLFlBQVksdUJBQXVCLHdCQUF3QixHQUFHLGdCQUFnQix1QkFBdUIsaUJBQWlCLHdDQUF3QyxvQkFBb0IsR0FBRyxXQUFXLGtCQUFrQiw0QkFBNEIsd0JBQXdCLHdDQUF3QyxzQkFBc0IsR0FBRyxRQUFRLDBCQUEwQixzQkFBc0IsaUJBQWlCLHVCQUF1QixtQ0FBbUMsR0FBRyxjQUFjLDRDQUE0QyxpQkFBaUIsa0RBQWtELEdBQUcsY0FBYyxtQkFBbUIscUJBQXFCLG9CQUFvQixrQkFBa0Isd0JBQXdCLDRCQUE0Qiw0Q0FBNEMsaUJBQWlCLEdBQUcsZUFBZSxrQkFBa0IsMkJBQTJCLHdCQUF3QixrQ0FBa0MsaUJBQWlCLGlCQUFpQixrQkFBa0IsR0FBRyxpQkFBaUIsdUJBQXVCLEdBQUcsZUFBZSxrQkFBa0IsaUJBQWlCLHNCQUFzQix1QkFBdUIsd0JBQXdCLDRCQUE0QixHQUFHLGVBQWUsa0JBQWtCLG9CQUFvQixjQUFjLHdCQUF3Qiw0QkFBNEIsaUJBQWlCLGtCQUFrQixnRkFBZ0YsZUFBZSwrQkFBK0IsaUNBQWlDLEdBQUcsZ0JBQWdCLGlCQUFpQixrQkFBa0IsNkJBQTZCLGtCQUFrQix3QkFBd0IseUNBQXlDLEdBQUcsbUJBQW1CLHdDQUF3QyxvQkFBb0IsR0FBRyxrQkFBa0Isc0JBQXNCLEdBQUcsdUJBQXVCLG9CQUFvQixzQkFBc0IsR0FBRyxvQkFBb0IsNkRBQTZELHNCQUFzQixHQUFHLG9CQUFvQixrQkFBa0IsbUNBQW1DLDBCQUEwQixHQUFHLGtCQUFrQixlQUFlLGtCQUFrQiwyQkFBMkIsd0JBQXdCLGNBQWMsaUJBQWlCLGtCQUFrQixHQUFHLG1CQUFtQixrQkFBa0Isd0JBQXdCLGNBQWMsaUJBQWlCLEdBQUcsdUJBQXVCLGlCQUFpQixrQkFBa0IsdUJBQXVCLDRCQUE0QixHQUFHLHNCQUFzQix3Q0FBd0Msb0JBQW9CLEdBQUcscUJBQXFCLHNCQUFzQixHQUFHLG1CQUFtQixpQkFBaUIsa0JBQWtCLG1CQUFtQix3QkFBd0IsNkJBQTZCLEdBQUcsNkJBQTZCLHlCQUF5QixHQUFHLGFBQWEsa0JBQWtCLGVBQWUsd0JBQXdCLDRCQUE0QixhQUFhLDRDQUE0QyxrQkFBa0IsaUJBQWlCLEdBQUcsaUJBQWlCLHFCQUFxQixHQUFHLE9BQU8saUJBQWlCLEdBQUcsU0FBUyxnRkFBZ0YsWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxLQUFLLG9CQUFvQixxQkFBcUIsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLHFDQUFxQyx3Q0FBd0MsMERBQTBELGdCQUFnQiwrQkFBK0IsZ0RBQWdELEdBQUcscUJBQXFCLFVBQVUsaUJBQWlCLHNCQUFzQixLQUFLLEdBQUcsdUJBQXVCLFNBQVMsYUFBYSxXQUFXLGFBQWEsR0FBRyxPQUFPLGNBQWMsZUFBZSx5Q0FBeUMsR0FBRyxVQUFVLGtCQUFrQix1REFBdUQsMkJBQTJCLGlDQUFpQyxrQkFBa0IsMkJBQTJCLCtCQUErQixHQUFHLGFBQWEsZUFBZSxHQUFHLG1CQUFtQixrQkFBa0Isd0JBQXdCLDRCQUE0QixHQUFHLFlBQVksdUJBQXVCLHdCQUF3QixHQUFHLGdCQUFnQix1QkFBdUIsaUJBQWlCLHdDQUF3QyxvQkFBb0IsR0FBRyxXQUFXLGtCQUFrQiw0QkFBNEIsd0JBQXdCLHdDQUF3QyxzQkFBc0IsR0FBRyxRQUFRLDBCQUEwQixzQkFBc0IsaUJBQWlCLHVCQUF1QixtQ0FBbUMsR0FBRyxjQUFjLDRDQUE0QyxpQkFBaUIsa0RBQWtELEdBQUcsY0FBYyxtQkFBbUIscUJBQXFCLG9CQUFvQixrQkFBa0Isd0JBQXdCLDRCQUE0Qiw0Q0FBNEMsaUJBQWlCLEdBQUcsZUFBZSxrQkFBa0IsMkJBQTJCLHdCQUF3QixrQ0FBa0MsaUJBQWlCLGlCQUFpQixrQkFBa0IsR0FBRyxpQkFBaUIsdUJBQXVCLEdBQUcsZUFBZSxrQkFBa0IsaUJBQWlCLHNCQUFzQix1QkFBdUIsd0JBQXdCLDRCQUE0QixHQUFHLGVBQWUsa0JBQWtCLG9CQUFvQixjQUFjLHdCQUF3Qiw0QkFBNEIsaUJBQWlCLGtCQUFrQixnRkFBZ0YsZUFBZSwrQkFBK0IsaUNBQWlDLEdBQUcsZ0JBQWdCLGlCQUFpQixrQkFBa0IsNkJBQTZCLGtCQUFrQix3QkFBd0IseUNBQXlDLEdBQUcsbUJBQW1CLHdDQUF3QyxvQkFBb0IsR0FBRyxrQkFBa0Isc0JBQXNCLEdBQUcsdUJBQXVCLG9CQUFvQixzQkFBc0IsR0FBRyxvQkFBb0Isd0NBQXdDLHNCQUFzQixHQUFHLG9CQUFvQixrQkFBa0IsbUNBQW1DLDBCQUEwQixHQUFHLGtCQUFrQixlQUFlLGtCQUFrQiwyQkFBMkIsd0JBQXdCLGNBQWMsaUJBQWlCLGtCQUFrQixHQUFHLG1CQUFtQixrQkFBa0Isd0JBQXdCLGNBQWMsaUJBQWlCLEdBQUcsdUJBQXVCLGlCQUFpQixrQkFBa0IsdUJBQXVCLDRCQUE0QixHQUFHLHNCQUFzQix3Q0FBd0Msb0JBQW9CLEdBQUcscUJBQXFCLHNCQUFzQixHQUFHLG1CQUFtQixpQkFBaUIsa0JBQWtCLG1CQUFtQix3QkFBd0IsNkJBQTZCLEdBQUcsNkJBQTZCLHlCQUF5QixHQUFHLGFBQWEsa0JBQWtCLGVBQWUsd0JBQXdCLDRCQUE0QixhQUFhLDRDQUE0QyxrQkFBa0IsaUJBQWlCLEdBQUcsaUJBQWlCLHFCQUFxQixHQUFHLE9BQU8saUJBQWlCLEdBQUcscUJBQXFCO0FBQzkwUztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ2hCMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9EQUFvRDs7QUFFcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDNUJhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2YrQzs7QUFFL0M7QUFDQSxDQUFDLDZEQUFtQjtBQUNwQixDQUFDLDREQUFrQjtBQUNuQjtBQUNBLG9CQUFvQixpRUFBdUI7QUFDM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLENBQUMsZ0VBQXNCO0FBQ3ZCOztBQUVBLGlFQUFlLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNyQjtBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM1QitDOztBQUUvQztBQUNBLENBQUMsNkRBQW1CO0FBQ3BCLENBQUMsNERBQWtCO0FBQ25CO0FBQ0Esa0JBQWtCLGlFQUF1Qjs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLENBQUMsZ0VBQXNCO0FBQ3ZCOztBQUVBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJVO0FBQ0E7QUFDTTs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsc0NBQXNDLGdEQUFVO0FBQ2hELHNDQUFzQyxnREFBVTtBQUNoRCxzQ0FBc0MsbURBQWE7QUFDbkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7O0FDOUV5Qjs7QUFFL0M7QUFDQTs7QUFFQSwrQkFBK0IsZ0JBQWdCOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDLDZEQUFtQjtBQUNwQixDQUFDLDREQUFrQjs7QUFFbkIsaUJBQWlCLGlFQUF1QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLGdFQUFzQjtBQUN2Qjs7QUFFQSxpRUFBZSxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0V6QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBZ0M7QUFDWDs7QUFFckIsb0RBQU8sRyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9oZWxwZXJGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luaXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9mb250L1RoZVdpbGRCcmVhdGhvZlplbGRhLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9mb250L0ZPVFJvZGluUHJvTS5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvYmFja2dyb3VuZC5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL3J1cGVlLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiAnVGhlV2lsZEJyZWF0aE9mWmVsZGEnO1xcblxcdHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKVxcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogJ0ZPVFJvZGluUHJvJztcXG5cXHRzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcblxcbkBrZXlmcmFtZXMgc2hvdyB7XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAwJSB7IG9wYWNpdHk6IDA7IH1cXG4gIDEwMCUgeyBvcGFjaXR5OiAxOyB9XFxufVxcblxcbioge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdC0tYmFja2dyb3VuZC1jb2w6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuYm9keSB7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Zm9udC1mYW1pbHk6ICdGT1RSb2RpblBybyc7XFxufVxcblxcbiNoZWFkZXIge1xcblxcdGZsZXg6IG5vbmU7XFxufVxcblxcbiNoZWFkZXIgPiBkaXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNyZXN0IHtcXG5cXHRwYWRkaW5nLWxlZnQ6IDE2cHg7XFxuXFx0cGFkZGluZy1yaWdodDogMTZweDtcXG59XFxuXFxuI2hlYWRlciBoMSB7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdG1hcmdpbjogMTZweDtcXG5cXHRmb250LWZhbWlseTogJ1RoZVdpbGRCcmVhdGhPZlplbGRhJztcXG5cXHRmb250LXNpemU6IDNyZW07XFxufVxcblxcbiN0YWJzIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Zm9udC1mYW1pbHk6ICdUaGVXaWxkQnJlYXRoT2ZaZWxkYSc7XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbmxpIHtcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuXFx0cGFkZGluZzogOHB4IDE2cHg7XFxuXFx0d2lkdGg6IDEwMHB4O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRib3JkZXItcmFkaXVzOiA4cHggOHB4IDBweCAwcHg7XFxufVxcblxcbi5jbGlja2VkIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbCk7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cywgY29sb3IgMC41cztcXG59XFxuXFxuI2NvbnRlbnQge1xcblxcdGZsZXg6IDEgMSBhdXRvO1xcblxcdG92ZXJmbG93LXk6IGF1dG87XFxuXFx0bWluLWhlaWdodDogMHB4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbCk7XFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jaG9tZS1kaXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcdHdpZHRoOiA1MDBweDtcXG5cXHRtYXJnaW46IGF1dG87XFxuXFx0cGFkZGluZzogMzJweDtcXG59XFxuXFxuI2hvbWUtZGl2IHAge1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNoZWYtaW1nIHtcXG5cXHRoZWlnaHQ6IDMwMHB4O1xcblxcdHdpZHRoOiAzMDBweDtcXG5cXHRvYmplY3QtZml0OiBjb3ZlcjtcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxuXFx0bWFyZ2luLWJvdHRvbTogMzJweDtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuI21lbnUtZGl2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRnYXA6IDE2cHg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRtYXJnaW46IGF1dG87XFxuXFx0cGFkZGluZzogMzJweDtcXG5cXG5cXHRhbmltYXRpb246IHNob3cgNjAwbXMgMTAwbXMgY3ViaWMtYmV6aWVyKDAuMzgsIDAuOTcsIDAuNTYsIDAuNzYpIGZvcndhcmRzO1xcblxcdG9wYWNpdHk6IDA7XFxuXFx0dHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZyk7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgY2VudGVyO1xcbn1cXG5cXG4uZm9vZC1jYXJkIHtcXG5cXHR3aWR0aDogMzAwcHg7XFxuXFx0aGVpZ2h0OiAyNTBweDtcXG5cXHRib3JkZXI6IDNweCBkb3VibGUgd2hpdGU7XFxuXFx0cGFkZGluZzogMTZweDtcXG5cXHRib3JkZXItcmFkaXVzOiAxNnB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLmZvb2QtY2FyZCBoMiB7XFxuXFx0Zm9udC1mYW1pbHk6ICdUaGVXaWxkQnJlYXRoT2ZaZWxkYSc7XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uZm9vZC1jYXJkIHAge1xcblxcdGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4uZm9vZC1jYXJkIC5wcmljZSB7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4ucHJpY2U6OmJlZm9yZSB7XFxuXFx0Y29udGVudDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG5cXHRtYXJnaW4tcmlnaHQ6IDRweDtcXG59XFxuXFxuLmZvb2QtY2FyZCBkaXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuI2NvbnRhY3QtZGl2IHtcXG5cXHR3aWR0aDogNzUlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMzJweDtcXG5cXHRtYXJnaW46IGF1dG87XFxuXFx0cGFkZGluZzogMzJweDtcXG59XFxuXFxuLmNvbnRhY3QtY2FyZCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMTZweDtcXG5cXHR3aWR0aDogNTAwcHg7XFxufVxcblxcbi5jb250YWN0LWNhcmQgaW1nIHtcXG5cXHR3aWR0aDogMjAwcHg7XFxuXFx0aGVpZ2h0OiAyMDBweDtcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5jb250YWN0LWNhcmQgaDIge1xcblxcdGZvbnQtZmFtaWx5OiAnVGhlV2lsZEJyZWF0aE9mWmVsZGEnO1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmNvbnRhY3QtY2FyZCBwIHtcXG5cXHRmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLm1hcC1jYXJkIGltZyB7XFxuXFx0d2lkdGg6IDUwMHB4O1xcblxcdGhlaWdodDogMzAwcHg7XFxuXFx0ZmxleDogMSAxIGF1dG87XFxuXFx0Ym9yZGVyLXJhZGl1czogMTZweDtcXG5cXHRib3JkZXI6IDNweCBkb3VibGUgd2hpdGU7XFxufVxcblxcbiNob21lLWRpdiwgI2NvbnRhY3QtZGl2IHtcXG5cXHRhbmltYXRpb246IGZhZGVJbiAxcztcXG59XFxuXFxuI2Zvb3RlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4OiBub25lO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0Z2FwOiA4cHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2wpO1xcblxcdHBhZGRpbmc6IDE2cHg7XFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jZm9vdGVyIGltZyB7XFxuXFx0cGFkZGluZy10b3A6IDhweDtcXG59XFxuXFxuYSB7XFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsbUNBQW1DO0NBQ25DO0FBQ0Q7O0FBRUE7Q0FDQywwQkFBMEI7Q0FDMUIsNENBQTJDO0FBQzVDOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsS0FBSyxVQUFVLEVBQUU7RUFDakIsT0FBTyxVQUFVLEVBQUU7QUFDckI7O0FBRUE7Q0FDQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLG9DQUFvQztBQUNyQzs7QUFFQTtDQUNDLGFBQWE7Q0FDYix5REFBa0Q7Q0FDbEQsc0JBQXNCO0NBQ3RCLDRCQUE0QjtDQUM1QixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLFVBQVU7QUFDWDs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osbUNBQW1DO0NBQ25DLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQixtQ0FBbUM7Q0FDbkMsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLGlCQUFpQjtDQUNqQixZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLDhCQUE4QjtBQUMvQjs7QUFFQTtDQUNDLHVDQUF1QztDQUN2QyxZQUFZO0NBQ1osNkNBQTZDO0FBQzlDOztBQUVBO0NBQ0MsY0FBYztDQUNkLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2YsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQix1QkFBdUI7Q0FDdkIsdUNBQXVDO0NBQ3ZDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsbUJBQW1CO0NBQ25CLDZCQUE2QjtDQUM3QixZQUFZO0NBQ1osWUFBWTtDQUNaLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixZQUFZO0NBQ1osaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLGVBQWU7Q0FDZixTQUFTO0NBQ1QsbUJBQW1CO0NBQ25CLHVCQUF1QjtDQUN2QixZQUFZO0NBQ1osYUFBYTs7Q0FFYix5RUFBeUU7Q0FDekUsVUFBVTtDQUNWLDBCQUEwQjtFQUN6Qiw0QkFBNEI7QUFDOUI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLHdCQUF3QjtDQUN4QixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLG9DQUFvQztBQUNyQzs7QUFFQTtDQUNDLG1DQUFtQztDQUNuQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGdEQUFtQztDQUNuQyxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLFVBQVU7Q0FDVixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQixTQUFTO0NBQ1QsWUFBWTtDQUNaLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsU0FBUztDQUNULFlBQVk7QUFDYjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLG1DQUFtQztDQUNuQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYixjQUFjO0NBQ2QsbUJBQW1CO0NBQ25CLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixVQUFVO0NBQ1YsbUJBQW1CO0NBQ25CLHVCQUF1QjtDQUN2QixRQUFRO0NBQ1IsdUNBQXVDO0NBQ3ZDLGFBQWE7Q0FDYixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxZQUFZO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdUaGVXaWxkQnJlYXRoT2ZaZWxkYSc7XFxuXFx0c3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250L1RoZVdpbGRCcmVhdGhvZlplbGRhLm90ZicpXFxufVxcblxcbkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiAnRk9UUm9kaW5Qcm8nO1xcblxcdHNyYzogdXJsKCcuLi9hc3NldHMvZm9udC9GT1RSb2RpblByb00ub3RmJyk7XFxufVxcblxcbkBrZXlmcmFtZXMgc2hvdyB7XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAwJSB7IG9wYWNpdHk6IDA7IH1cXG4gIDEwMCUgeyBvcGFjaXR5OiAxOyB9XFxufVxcblxcbioge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdC0tYmFja2dyb3VuZC1jb2w6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuYm9keSB7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2Fzc2V0cy9iYWNrZ3JvdW5kLmpwZWcnKTtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGZvbnQtZmFtaWx5OiAnRk9UUm9kaW5Qcm8nO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG5cXHRmbGV4OiBub25lO1xcbn1cXG5cXG4jaGVhZGVyID4gZGl2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jcmVzdCB7XFxuXFx0cGFkZGluZy1sZWZ0OiAxNnB4O1xcblxcdHBhZGRpbmctcmlnaHQ6IDE2cHg7XFxufVxcblxcbiNoZWFkZXIgaDEge1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRtYXJnaW46IDE2cHg7XFxuXFx0Zm9udC1mYW1pbHk6ICdUaGVXaWxkQnJlYXRoT2ZaZWxkYSc7XFxuXFx0Zm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4jdGFicyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZvbnQtZmFtaWx5OiAnVGhlV2lsZEJyZWF0aE9mWmVsZGEnO1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5saSB7XFxuXFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xcblxcdHBhZGRpbmc6IDhweCAxNnB4O1xcblxcdHdpZHRoOiAxMDBweDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Ym9yZGVyLXJhZGl1czogOHB4IDhweCAwcHggMHB4O1xcbn1cXG5cXG4uY2xpY2tlZCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2wpO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMsIGNvbG9yIDAuNXM7XFxufVxcblxcbiNjb250ZW50IHtcXG5cXHRmbGV4OiAxIDEgYXV0bztcXG5cXHRvdmVyZmxvdy15OiBhdXRvO1xcblxcdG1pbi1oZWlnaHQ6IDBweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2wpO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2hvbWUtZGl2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG5cXHR3aWR0aDogNTAwcHg7XFxuXFx0bWFyZ2luOiBhdXRvO1xcblxcdHBhZGRpbmc6IDMycHg7XFxufVxcblxcbiNob21lLWRpdiBwIHtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jaGVmLWltZyB7XFxuXFx0aGVpZ2h0OiAzMDBweDtcXG5cXHR3aWR0aDogMzAwcHg7XFxuXFx0b2JqZWN0LWZpdDogY292ZXI7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcblxcdG1hcmdpbi1ib3R0b206IDMycHg7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgd2hpdGU7XFxufVxcblxcbiNtZW51LWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0Z2FwOiAxNnB4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0bWFyZ2luOiBhdXRvO1xcblxcdHBhZGRpbmc6IDMycHg7XFxuXFxuXFx0YW5pbWF0aW9uOiBzaG93IDYwMG1zIDEwMG1zIGN1YmljLWJlemllcigwLjM4LCAwLjk3LCAwLjU2LCAwLjc2KSBmb3J3YXJkcztcXG5cXHRvcGFjaXR5OiAwO1xcblxcdHRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGNlbnRlcjtcXG59XFxuXFxuLmZvb2QtY2FyZCB7XFxuXFx0d2lkdGg6IDMwMHB4O1xcblxcdGhlaWdodDogMjUwcHg7XFxuXFx0Ym9yZGVyOiAzcHggZG91YmxlIHdoaXRlO1xcblxcdHBhZGRpbmc6IDE2cHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTZweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5mb29kLWNhcmQgaDIge1xcblxcdGZvbnQtZmFtaWx5OiAnVGhlV2lsZEJyZWF0aE9mWmVsZGEnO1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmZvb2QtY2FyZCBwIHtcXG5cXHRmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLmZvb2QtY2FyZCAucHJpY2Uge1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHR0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLnByaWNlOjpiZWZvcmUge1xcblxcdGNvbnRlbnQ6IHVybCgnLi4vYXNzZXRzL3J1cGVlLnBuZycpO1xcblxcdG1hcmdpbi1yaWdodDogNHB4O1xcbn1cXG5cXG4uZm9vZC1jYXJkIGRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cXG4jY29udGFjdC1kaXYge1xcblxcdHdpZHRoOiA3NSU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAzMnB4O1xcblxcdG1hcmdpbjogYXV0bztcXG5cXHRwYWRkaW5nOiAzMnB4O1xcbn1cXG5cXG4uY29udGFjdC1jYXJkIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAxNnB4O1xcblxcdHdpZHRoOiA1MDBweDtcXG59XFxuXFxuLmNvbnRhY3QtY2FyZCBpbWcge1xcblxcdHdpZHRoOiAyMDBweDtcXG5cXHRoZWlnaHQ6IDIwMHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLmNvbnRhY3QtY2FyZCBoMiB7XFxuXFx0Zm9udC1mYW1pbHk6ICdUaGVXaWxkQnJlYXRoT2ZaZWxkYSc7XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uY29udGFjdC1jYXJkIHAge1xcblxcdGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4ubWFwLWNhcmQgaW1nIHtcXG5cXHR3aWR0aDogNTAwcHg7XFxuXFx0aGVpZ2h0OiAzMDBweDtcXG5cXHRmbGV4OiAxIDEgYXV0bztcXG5cXHRib3JkZXItcmFkaXVzOiAxNnB4O1xcblxcdGJvcmRlcjogM3B4IGRvdWJsZSB3aGl0ZTtcXG59XFxuXFxuI2hvbWUtZGl2LCAjY29udGFjdC1kaXYge1xcblxcdGFuaW1hdGlvbjogZmFkZUluIDFzO1xcbn1cXG5cXG4jZm9vdGVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXg6IG5vbmU7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRnYXA6IDhweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbCk7XFxuXFx0cGFkZGluZzogMTZweDtcXG5cXHRjb2xvcjogd2hpdGU7XFxufVxcblxcbiNmb290ZXIgaW1nIHtcXG5cXHRwYWRkaW5nLXRvcDogOHB4O1xcbn1cXG5cXG5hIHtcXG5cXHRjb2xvcjogd2hpdGU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgKiBhcyBoZWxwZXIgZnJvbSAnLi9oZWxwZXJGdW5jdGlvbnMuanMnO1xuXG5jb25zdCByZW5kZXJDb250YWN0ID0gZXZlbnQgPT4ge1xuXHRoZWxwZXIuY2xlYXJDb250ZW50KCk7XG5cdGhlbHBlci50b2dnbGVDbGljayhldmVudC50YXJnZXQpO1xuXHRcblx0Y29uc3QgY29udGFjdERpdiA9IGhlbHBlci5jcmVhdGVDb250ZW50RGl2KCdjb250YWN0LWRpdicpO1xuXHRjb25zdCBjb250YWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRjb250YWN0Q2FyZC5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWNhcmQnKTtcblxuXHRjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0Y29uc3QgY29udGFjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcblx0Y29udGFjdFRpdGxlLnRleHRDb250ZW50ID0gJ0NoZWYgTGluayc7XG5cdGRpdi5hcHBlbmRDaGlsZChjb250YWN0VGl0bGUpO1xuXG5cdGNvbnN0IGNoZWZEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRjaGVmRGVzYy50ZXh0Q29udGVudCA9IFwiU2Vhc29uZWQgY2hlZiBhbmQgSGVybyBvZiBIeXJ1bGUuIEV4cGVydCBmb3JhZ2VyIGFuZCBodW50ZXIgd2l0aCBvdmVyIDEwMCB5ZWFycyBvZiBleHBlcmllbmNlLiBUcmF2ZWxpbmcgYWNyb3NzIEh5cnVsZSBpbiB0aGUgYmxpbmsgb2YgYW4gZXllIC0gY29tZSBqb2luIHVzIGZvciBhIG1lYWwgd2hlbiB3ZSBjcm9zcyBwYXRocyFcIjtcblx0ZGl2LmFwcGVuZENoaWxkKGNoZWZEZXNjKTtcblxuXHRjb250YWN0Q2FyZC5hcHBlbmRDaGlsZChkaXYpO1xuXG5cdGNvbnN0IHByb2ZpbGVQaWMgPSBuZXcgSW1hZ2UoKTtcblx0cHJvZmlsZVBpYy5zcmMgPSAnLi4vYXNzZXRzL3Byb2ZpbGUtcGljLmpwZWcnO1xuXHRjb250YWN0Q2FyZC5hcHBlbmRDaGlsZChwcm9maWxlUGljKTtcblxuXHRjb250YWN0RGl2LmFwcGVuZENoaWxkKGNvbnRhY3RDYXJkKTtcblxuXHRjb25zdCBtYXBDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdG1hcENhcmQuY2xhc3NMaXN0LmFkZCgnbWFwLWNhcmQnKTtcblxuXHRjb25zdCBtYXAgPSBuZXcgSW1hZ2UoKTtcblx0bWFwLnNyYyA9ICcuLi9hc3NldHMvbWFwLmpwZWcnO1xuXHRtYXBDYXJkLmFwcGVuZENoaWxkKG1hcCk7XG5cblx0Y29udGFjdERpdi5hcHBlbmRDaGlsZChtYXBDYXJkKTtcblxuXHRoZWxwZXIuYXBwZW5kVG9Db250ZW50KGNvbnRhY3REaXYpO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJDb250YWN0OyIsImV4cG9ydCBmdW5jdGlvbiBjbGVhckNvbnRlbnQoKSB7XG5cdGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXHRjb250ZW50LmlubmVySFRNTCA9IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVDbGljayh0YXJnZXQpIHtcblx0Y29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNoZWFkZXIgbGknKTtcblxuXHRmb3IgKGNvbnN0IHRhYiBvZiB0YWJzKSB7XG5cdFx0aWYgKHRhYiA9PSB0YXJnZXQpIHtcblx0XHRcdHRhYi5jbGFzc0xpc3QuYWRkKCdjbGlja2VkJyk7XG5cdFx0fSBlbHNlIGlmICh0YWIuY2xhc3NMaXN0LmNvbnRhaW5zKCdjbGlja2VkJykpIHtcblx0XHRcdHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdjbGlja2VkJyk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb250ZW50RGl2KGlkKSB7XG5cdGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRkaXYuaWQgPSBpZDtcblx0ZGl2LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtZGl2Jyk7XG5cblx0cmV0dXJuIGRpdjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFRvQ29udGVudChub2RlKSB7XG5cdGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXHRjb250ZW50LmFwcGVuZENoaWxkKG5vZGUpO1xufSIsImltcG9ydCAqIGFzIGhlbHBlciBmcm9tICcuL2hlbHBlckZ1bmN0aW9ucy5qcyc7XG5cbmNvbnN0IHJlbmRlckhvbWUgPSBldmVudCA9PiB7XG5cdGhlbHBlci5jbGVhckNvbnRlbnQoKTtcblx0aGVscGVyLnRvZ2dsZUNsaWNrKGV2ZW50LnRhcmdldCk7XG5cdFxuXHRjb25zdCBpbnRyb0RpdiA9IGhlbHBlci5jcmVhdGVDb250ZW50RGl2KCdob21lLWRpdicpO1xuXG5cdGNvbnN0IGNoZWZQaWMgPSBuZXcgSW1hZ2UoKTtcblx0Y2hlZlBpYy5zcmMgPSAnLi4vYXNzZXRzL2NoZWYuZ2lmJ1xuXHRjaGVmUGljLmNsYXNzTGlzdC5hZGQoJ2NoZWYtaW1nJyk7XG5cdGludHJvRGl2LmFwcGVuZChjaGVmUGljKTtcblxuXHRjb25zdCBpbnRyb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdGludHJvVGV4dC50ZXh0Q29udGVudCA9ICdTZXJ2aW5nIGRlbGljaW91cywgcnVzdGljIG1lYWxzIG1hZGUgZnJvbSB0aGUgYmVzdCBpbmdyZWRpZW50cyBhY3Jvc3MgdGhlIEh5cnVsZSB3aWxkZXJuZXNzLiBXZSBjb29rIGEgd2lkZSBzZWxlY3Rpb24gb2YgZGlzaGVzIHJlcHJlc2VudGluZyB0aGUgZGl2ZXJzZSByZWdpb25zIG9mIG91ciBsYW5kLic7XG5cdGludHJvRGl2LmFwcGVuZENoaWxkKGludHJvVGV4dCk7XG5cblx0aGVscGVyLmFwcGVuZFRvQ29udGVudChpbnRyb0Rpdik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckhvbWU7IiwiaW1wb3J0IHJlbmRlckhvbWUgZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCByZW5kZXJNZW51IGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgcmVuZGVyQ29udGFjdCBmcm9tICcuL2NvbnRhY3QuanMnO1xuXG5jb25zdCBhZGRDcmVzdCA9IChwYXJlbnROb2RlKSA9PiB7XG5cdGNvbnN0IGNyZXN0ID0gbmV3IEltYWdlKCk7XG5cdGNyZXN0LmNsYXNzTGlzdC5hZGQoJ2NyZXN0Jyk7XG5cdGNyZXN0LnNyYyA9ICcuLi9hc3NldHMvY3Jlc3QucG5nJztcblxuXHRwYXJlbnROb2RlLmFwcGVuZENoaWxkKGNyZXN0KTtcbn1cblxuY29uc3QgcmVuZGVySGVhZGVyID0gKCkgPT4ge1xuXHRjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0aGVhZGVyLmlkID0gJ2hlYWRlcic7XG5cblx0Y29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cblx0YWRkQ3Jlc3QoZGl2KTtcblx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXHR0aXRsZS50ZXh0Q29udGVudCA9ICdCcmVhdGggb2YgdGhlIFdvayc7XG5cdGRpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cdGFkZENyZXN0KGRpdik7XG5cblx0aGVhZGVyLmFwcGVuZENoaWxkKGRpdik7XG5cblx0Y29uc3QgdGFicyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cdHRhYnMuaWQgPSAndGFicyc7XG5cdGZvciAoY29uc3QgdGFiVGV4dCBvZiBbJ0hvbWUnLCAnTWVudScsICdDb250YWN0J10pIHtcblx0XHRsZXQgdGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblx0XHR0YWIudGV4dENvbnRlbnQgPSB0YWJUZXh0O1xuXHRcdHRhYnMuYXBwZW5kQ2hpbGQodGFiKTtcblx0fVxuXHRoZWFkZXIuYXBwZW5kQ2hpbGQodGFicyk7XG5cblx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xufVxuXG5jb25zdCByZW5kZXJDb250ZW50ID0gKCkgPT4ge1xuXHRjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGNvbnRlbnQuaWQgPSAnY29udGVudCc7XG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG59XG5cbmNvbnN0IHJlbmRlckZvb3RlciA9ICgpID0+IHtcblx0Y29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG5cdGZvb3Rlci5pZCA9ICdmb290ZXInO1xuXG5cdGNvbnN0IGZvb3RlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdGZvb3RlclRleHQuaW5uZXJIVE1MID0gJ01hZGUgYnkgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS94aW53ZW55XCI+eGlud2VueTxhPiBpbiAyMDIyJ1xuXHRmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dCk7XG5cblx0Y29uc3QgcHJvamVjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdHByb2plY3RMaW5rLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL3hpbndlbnkvcmVzdGF1cmFudC1wYWdlJztcblx0Y29uc3QgZ2l0aHViTG9nbyA9IG5ldyBJbWFnZSgpO1xuXHRnaXRodWJMb2dvLnNyYyA9ICcuLi9hc3NldHMvZ2l0aHViLnBuZyc7XG5cdHByb2plY3RMaW5rLmFwcGVuZENoaWxkKGdpdGh1YkxvZ28pO1xuXHRmb290ZXIuYXBwZW5kKHByb2plY3RMaW5rKTtcblxuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG5cbmNvbnN0IGFkZFRhYkV2dExpc3RlbmVycyA9ICgpID0+IHtcblx0Y29uc3QgYnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2hlYWRlciBsaScpKTtcblxuXHRidXR0b25zWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVySG9tZSk7XG5cdGJ1dHRvbnNbMV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJNZW51KTtcblx0YnV0dG9uc1syXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlckNvbnRhY3QpO1xufVxuXG5jb25zdCBpbml0QXBwID0gKCkgPT4ge1xuXHRyZW5kZXJIZWFkZXIoKTtcblx0cmVuZGVyQ29udGVudCgpO1xuXHRyZW5kZXJGb290ZXIoKTtcblx0YWRkVGFiRXZ0TGlzdGVuZXJzKCk7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZWFkZXIgbGknKS5jbGljaygpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0QXBwOyIsImltcG9ydCAqIGFzIGhlbHBlciBmcm9tICcuL2hlbHBlckZ1bmN0aW9ucy5qcyc7XG5cbmZ1bmN0aW9uIEZvb2QobmFtZSwgcHJpY2UsIGRlc2NyaXB0aW9uKSB7XG5cdGNvbnN0IGtlYmFiQ2FzZSA9IG5hbWUgPT4gbmFtZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2VBbGwoJyAnLCAnLScpO1xuXG5cdGNvbnN0IHNyYyA9IGAuLi9hc3NldHMvZm9vZC8ke2tlYmFiQ2FzZShuYW1lKX0ucG5nYDtcblxuXHRyZXR1cm4geyBcblx0XHRuYW1lLFxuXHRcdHNyYyxcblx0XHRwcmljZSxcblx0XHRkZXNjcmlwdGlvblxuXHR9O1xufVxuXG5jb25zdCBjcmVhdGVGb29kQ2FyZCA9IGZvb2QgPT4ge1xuXHRjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGNhcmQuY2xhc3NMaXN0LmFkZCgnZm9vZC1jYXJkJyk7XG5cdFxuXHRjb25zdCBmb29kTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5cdGZvb2ROYW1lLnRleHRDb250ZW50ID0gZm9vZC5uYW1lO1xuXG5cdGNvbnN0IGZvb2REZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRmb29kRGVzYy50ZXh0Q29udGVudCA9IGZvb2QuZGVzY3JpcHRpb247XG5cblx0Y29uc3QgZm9vZFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRmb29kUHJpY2UuY2xhc3NMaXN0LmFkZCgncHJpY2UnKTtcblx0Zm9vZFByaWNlLnRleHRDb250ZW50ID0gZm9vZC5wcmljZTtcblxuXHRjb25zdCBmb29kSW1nID0gbmV3IEltYWdlKCk7XG5cdGZvb2RJbWcuc3JjID0gZm9vZC5zcmM7XG5cblx0Y29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGRpdi5hcHBlbmRDaGlsZChmb29kSW1nKTtcblx0ZGl2LmFwcGVuZENoaWxkKGZvb2RQcmljZSk7XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mIFtmb29kTmFtZSwgZGl2LCBmb29kRGVzY10pIHtcblx0XHRjYXJkLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXHR9XG5cblx0cmV0dXJuIGNhcmQ7XG59XG5cbmNvbnN0IGZvb2RJdGVtcyA9IFtcblx0Rm9vZCgnTWVhdC1TdHVmZmVkIFB1bXBraW4nLCA2MCwgXCJUaGlzIGhvbGxvdywgbWVhdC1maWxsZWQgZm9ydGlmaWVkIHB1bXBraW4gaXMgYSBsb2NhbCBzcGVjaWFsdHkgb3IgS2FrYXJpa28gVmlsbGFnZS5cIiksXG5cdEZvb2QoJ1NhbHQtR3JpbGxlZCBNZWF0JywgNTAsIFwiVGhpcyBsYXZpc2ggZ3JpbGxlZCBkaXNoIG1ha2VzIGxpYmVyYWwgdXNlIG9mIGhpZ2gtcXVhbGl0eSBjdXRzIG9mIG1lYXQuXCIpLFxuXHRGb29kKCdQb3VsdHJ5IFBpbGFmJywgNDUsIFwiTWFkZSB3aXRoIHRoZSBoaWdoZXN0LXF1YWxpdHkgcG91bHRyeSwgZXZlcnkgYml0ZSBvZiB0aGlzIHBpbGFmIGZsb29kcyB5b3VyIG1vdXRoIHdpdGggZmxhdm9yLlwiKSxcblx0Rm9vZCgnTWVhdCBQaWUnLCAzNSwgXCJZb3UnbGwgbmVlZCBhbiBleHRyYSBuYXBraW4gdG8gZGVhbCB3aXRoIHRoaXMganVpY3kgcGllIG9mIHBlcmZlY3RseSBiYWtlZCBtaW5jZWQgbWVhdC5cIiksXG5cdEZvb2QoJ1NhbG1vbiBNZXVuaWVyZScsIDYwLCBcIlRoZSBjcmlzcHkgc2tpbiBvZiB0aGlzIGZyaWVkIGhlYXJ0eSBzYWxtb24gcHV0cyBpdHMgdGV4dHVyZSBpbiBhIGNsYXNzIGFsbCBpdHMgb3duLlwiKSxcblx0Rm9vZCgnU2VhZm9vZCBQYWVsbGEnLCA1MCwgXCJObyBmaXNoZXJtYW4ncyBiaXJ0aGRheSBiYXNoIHdvdWxkIGJlIGNvbXBsZXRlIHdpdGhvdXQgdGhpcyB0b3Atc2hlbGYgc2VhZm9vZCBkaXNoLlwiKSxcblx0Rm9vZCgnQ3JhYiBPbWVsZXQgd2l0aCBSaWNlJywgNDUsIFwiVGhlIGZsdWZmeSBjcmFiIGxlZ3MgcGFpciBwZXJmZWN0bHkgd2l0aCB0aGUgcmljZSBmb3IgYSB0cnVseSBzY3J1bXB0aW91cyBkaXNoLlwiKSxcblx0Rm9vZCgnQ2xhbSBDaG93ZGVyJywgMzAsIFwiVGhlIG51dHJpdGlvbmFsIHZhbHVlIG9mIGhlYXJ0eSBibHVlc2hlbGwgc25haWwgY29tYmluZXMgd2l0aCBidXR0ZXIgYW5kIG1pbGsgaW4gYSByaWNoIHNvdXAuXCIpLFxuXHRGb29kKCdWZWdldGFibGUgT21lbGV0JywgMzUsIFwiVGhpcyBob21lLXN0eWxlIGRpc2ggbWl4ZXMgZmx1ZmZ5IGVnZ3Mgd2l0aCBjaG9wcGVkIHZlZ2V0YWJsZXMgZm9yIG51dHJpdGlvbmFsIGJhbGFuY2UuXCIpLFxuXHRGb29kKCdWZWdldGFibGUgQ3VycnknLCAzMCwgXCJUaGlzIGhlYWx0aHkgY3VycnkgaXMgcG9wdWxhciBmb3IgaXRzIG1pbGQgZmxhdm9yIGFuZCBtb2RlcmF0ZSBzcGljaW5lc3MuXCIpLFxuXHRGb29kKCdNdXNocm9vbSBSaWNlIEJhbGxzJywgMjUsIFwiVGhlIGFyb21hIG9mIHRoZSBtdXNocm9vbXMgdGlja2xlcyB5b3VyIG5vc2UgYXMgeW91IHBlZWwgYmFjayB0aGUgbGVhZnkgd3JhcHBpbmcuXCIpLFxuXHRGb29kKCdGcmllZCBXaWxkIEdyZWVucycsIDIwLCBcIkEgaGVhbHRoeSBkaXNoIG1hZGUgYnkgY29va2luZyBtaXhlZCBncmVlbnMgb3ZlciBhIHN0cm9uZyBmbGFtZS5cIiksXG5cdEZvb2QoJ0NyZWFteSBIZWFydCBTb3VwJywgMzAsIFwiRW5qb3lpbmcgdGhpcyBzd2VldCBzb3VwIHdpdGggYW5vdGhlciBwZXJzb24gd2lsbCBicmluZyB5b3UgYm90aCBjbG9zZXIgdG9nZXRoZXIuXCIpLFxuXHRGb29kKCdNb25zdGVyIENha2UnLCAyNSwgXCJJdCdzIHNhaWQgdGhhdCBvbmNlIHlvdSBoYXZlIGEgdGFzdGUgb2YgdGhpcyBjYWtlLCB5b3UnbGwgbmV2ZXIgZm9yZ2V0IGl0cyBzd2VldG5lc3MuXCIpLFxuXHRGb29kKCdXaWxkYmVycnkgQ3JlcGUnLCAyMCwgXCJTd2VldCwgdGFydCB3aWxkYmVycmllcyBhcmUgZm9sZGVkIGludG8gdGhpbiwgc3ByaW5neSBkb3VnaCB0byBtYWtlIHRoaXMgZGVzc2VydC5cIiksXG5cdEZvb2QoJ0hvbmV5ZWQgRnJ1aXRzJywgMTUsIFwiQSBkaXNoIHRoYXQgY29tYmluZXMgdGhlIHRoaWNrIHN3ZWV0bmVzcyBvZiBob25leSB3aXRoIHRoZSBhY2lkaXR5IG9mIHNvdXIgZnJ1aXRzLlwiKSxcblx0Rm9vZCgnRmFpcnkgVG9uaWMnLCAyMCwgXCJUaGlzIHBvd2VyZnVsIHJlY292ZXJ5IGVsaXhpciBoYXJuZXNzZXMgdGhlIHBvd2VyIG9mIGZhaXJpZXMuIEl0IGhhcyBhIHN3ZWV0IGZyYWdyYW5jZS5cIiksXG5cdEZvb2QoJ1dhcm0gTWlsaycsIDEwLCBcIk1ha2UgdGhpcyBieSBoZWF0aW5nIHVwIHNvbWUgbWlsay4gRHJpbmsgaXQgYmVmb3JlIGJlZCB0byBlbnN1cmUgYSBnb29kIG5pZ2h0J3Mgc2xlZXAuXCIpLFxuXHRGb29kKCdSb2NrLUhhcmQgRm9vZCcsIDUsIFwiQSBkaXNoIGdvbmUgYXdyeSBhZnRlciBhZGRpbmcgdGhlIHdyb25nIGluZ3JlZGllbnQuIENoZXdpbmcgeW91ciB3YXkgdGhyb3VnaCB0aGlzIHdvbid0IGJlIGZ1biwgYnV0IGl0IHdpbGwgZmlsbCB5b3UgdXAgd2hlbiB5b3UncmUgYmV0d2VlbiBhIHJvY2sgYW5kIGEgaGFyZCBwbGFjZS5cIiksXG5cdEZvb2QoJ0R1YmlvdXMgRm9vZCcsIDEsIFwiSXQncyB0b28gZ3Jvc3MgdG8gZXZlbiBsb29rIGF0LiBBIGJpemFycmUgc21lbGwgaXNzdWVzIGZvcnRoIGZyb20gdGhpcyBoZWFwLiBFYXRpbmcgaXQgd29uJ3QgaHVydCB5b3UsIHRob3VnaC4uLiBwcm9iYWJseS5cIilcbl07XG5cbmNvbnN0IHJlbmRlck1lbnUgPSBldmVudCA9PiB7XG5cdGhlbHBlci5jbGVhckNvbnRlbnQoKTtcblx0aGVscGVyLnRvZ2dsZUNsaWNrKGV2ZW50LnRhcmdldCk7XG5cblx0Y29uc3QgbWVudURpdiA9IGhlbHBlci5jcmVhdGVDb250ZW50RGl2KCdtZW51LWRpdicpO1xuXHRmb3IgKGNvbnN0IGZvb2Qgb2YgZm9vZEl0ZW1zKSB7XG5cdFx0bGV0IGZvb2RDYXJkID0gY3JlYXRlRm9vZENhcmQoZm9vZCk7XG5cdFx0bWVudURpdi5hcHBlbmRDaGlsZChmb29kQ2FyZCk7XG5cdH1cblxuXHRoZWxwZXIuYXBwZW5kVG9Db250ZW50KG1lbnVEaXYpO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJNZW51OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgaW5pdEFwcCBmcm9tICcuL2luaXQuanMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmluaXRBcHAoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=