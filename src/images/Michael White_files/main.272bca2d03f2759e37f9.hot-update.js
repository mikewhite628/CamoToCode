webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,400;0,700;1,100;1,400&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body {\n  background-color: #eeeeee;\n  font-family: \"Barlow Condensed\";\n  height: 100%;\n  width:100%;\n  overflow-x: hidden;\n}\n\na {\n  text-decoration: none;\n}\n\n.app {\n  background-color: #eeeeee\n}\n\n.no-padding {\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n}\n\n.title-center-text {\n  text-align: center;\n  font-size: 24px;\n}\n\n.pink-text {\n  color: #ff2e63;\n}\n\n.pink-background {\n  background-color: #ff2e63 !important;\n  border: none !important;\n}\n\n.blue-background {\n  background-color:#252a34 !important;\n  color: white;\n}\n\n.grow {\n  transition: all .1s ease-in-out;\n}\n\n.grow:hover {\n  transform: scale(1.02);\n  background-color: #eeeeee !important;\n}\n\n.nav {\n  list-style: none;\n  display: flex;\n  position: sticky;\n  z-index: 100;\n  height: 40px;\n  align-items: center;\n  right: 0;\n}\n\n.nav li {\n  margin: 10px;\n  padding-right: 10px;\n  border-right: 2px solid #08d9d6;\n  font-size: 20px;\n  color: #a924d6;\n}\n\n.scrolled {\n  position: fixed;\n  display: flex;\n  justify-content: flex-end;\n  top: 0;\n  right: 0;\n  width: 100%;\n  margin-bottom: 50px;\n  background-color: rgba(37, 42, 52, 0.9);\n}\n\n\n.landing {\n  min-height: 100vh;\n  width: 100%;\n  background-color: #252a34\n}\n\n\n.about {\n  text-shadow: 0.2px 0.2px 1.8px;\n}\n\n\n.social-icon {\n  height: 60px;\n  width: 60px;\n  margin-right: 20px;\n}\n\n.social-icon:hover {\n  transition: 0.3s;\n  transform: scale(1.1);\n}\n\n\n\n.skills {\n  width: 100%;\n  border-bottom-left-radius: 8px;\n  border-top-left-radius: 8px;\n  max-width: 450px;\n}\n\n.skill-bar {\n  height: 30px;\n  background-color: #aaaaaa;\n  border-radius: 10px;\n  margin-bottom: 5px;\n  padding: 10px;\n  margin-top: 25px;\n  padding-left: 8px;\n}\n\n.meter {\n  border: none;\n  height: 30px;\n  background-color: #ff2e63;\n  color: #eeeeee;\n  border-radius: 0px 10px 10px 0px;\n  margin-left: -8px;\n  margin-top: -10px;\n}\n\n[data-aos=load-js] {\n  width: 0;\n  animation: ease-in-out;\n}\n\n[data-aos=load-js].aos-animate {\n  width: 65%;\n}\n\n[data-aos=load-html] {\n  width: 0;\n  animation: ease-in-out;\n}\n\n[data-aos=load-html].aos-animate {\n  width: 70%;\n}\n\n[data-aos=load-css] {\n  width: 0;\n  animation: ease-in-out;\n}\n\n[data-aos=load-css].aos-animate {\n  width: 75%;\n}\n\n[data-aos=load-sass] {\n  width: 0;\n  animation: ease-in-out;\n}\n\n[data-aos=load-sass].aos-animate {\n  width: 70%;\n}\n\n[data-aos=load-react] {\n  width: 0;\n  animation: ease-in-out;\n}\n\n[data-aos=load-react].aos-animate {\n  width: 55%;\n}\n\n.icon {\n  height: 30px;\n  width: 30px;\n  border: 2px solid #252a34;\n  box-shadow: 1px 1px 3px;\n  margin-top: -28px;\n  margin-right: -20px;\n  float: right;\n}\n\n[data-aos=pulse] {\n  animation: transform;\n}\n\n[data-aos=pulse].aos-animate {\n  transform: scale(1.2);\n}\n\n.big-icon {\n  height: 40px;\n  width: 40px;\n  border: 3px solid #252a34;\n  box-shadow: 3px 3px 5px;\n  z-index: 10;\n}\n\n\n.lofi-icon {\n  height: 50px;\n  width: 50px;\n  margin-left: 5px;\n}\n\n.figma-icon {\n  height: 50px;\n  width: 50px;\n}\n\n.tools {\n  display: grid;\n  background-color: #252a34;\n  grid-template-columns: 12% 12% 12% 7% 12% 12% 7% 12%;\n  grid-template-rows: 30% 30% 30%;\n  border: 5px solid #cccccc;\n  padding: 10px;\n  padding-top: 30px;\n  box-shadow: 3px 3px 10px;\n  align-items: center;\n  padding-right: 20px;\n}\n\n.tool-title {\n  color: #eeeeee;\n  grid-column: 4/8;\n  grid-row: 1/2;\n  justify-self: center;\n}\n\n.git-icon {\n  grid-column: 2/3;\n  grid-row: 1/2;\n}\n\n.npm-icon {\n  grid-column: 1/2;\n  grid-row: 2/3;\n}\n\n.node-icon {\n  grid-column: 2/3;\n  grid-row: 3/4;\n}\n\n.linux-icon {\n  grid-column: 3/4;\n  grid-row: 2/3;\n}\n\n.webpack-icon {\n  grid-column: 2/3;\n  grid-row: 2/3;\n}\n\n.vsc-icon {\n  grid-column: 5/6;\n  grid-row: 3/4;\n}\n\n.ps-icon {\n  grid-column: 6/7;\n  grid-row: 3/4;\n}\n\n.figma-icon {\n  grid-column: 8/9;\n  grid-row: 2/3;\n}\n\n.lofi-icon {\n  grid-column: 9/10;\n  grid-row: 2/3;\n}\n\n.dpad-x {\n  width: 110%;\n  height: 130%;\n  background-color: #cccccc;\n  grid-row: 2/3;\n  grid-column: 1/4;\n  border-radius: 10px;\n  margin-left: -5px;\n  border: 1px solid #666666;\n  border-radius: 5px;\n}\n\n.dpad-y {\n  width: 120%;\n  height: 110%;\n  margin-left: -4px;\n  background-color: #cccccc;\n  grid-column: 2/3;\n  grid-row: 1/4;\n  border-radius: 5px;\n}\n\n.selectors {\n  width: 115%;\n  height: 130%;\n  margin-left: -6px;\n  background-color: #cccccc;\n  grid-column: 5/7;\n  grid-row: 3/4;\n  border-radius: 5px;\n}\n\n.buttons {\n  height: 150%;\n  width: 125%;\n  margin-left: -7px;\n  background-color: #cccccc;\n  grid-column: 8/11;\n  grid-row: 2/3;\n  border: 5px solid #08d9d6;\n  border-radius: 5px;\n}\n\n.projects {\n  text-shadow: 0.2px 0.2px 1.8px;\n}\n\n\n.project-image {\n  height: 200px;\n  width: 350px;\n  border: 1px solid #252a34;\n}\n\n.project-shadow {\n  box-shadow: 5px 5px 20px #999999;\n}\n\n\n/*# sourceMappingURL=App.css.map */\n\n/*# sourceMappingURL=style.sass.map */\n", "",{"version":3,"sources":["webpack://src/App.css"],"names":[],"mappings":"AAEA;EACE,yBAAyB;EACzB,+BAA+B;EAC/B,YAAY;EACZ,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE;AACF;;AAEA;EACE,4BAA4B;EAC5B,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,oCAAoC;EACpC,uBAAuB;AACzB;;AAEA;EACE,mCAAmC;EACnC,YAAY;AACd;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,sBAAsB;EACtB,oCAAoC;AACtC;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,gBAAgB;EAChB,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,+BAA+B;EAC/B,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,yBAAyB;EACzB,MAAM;EACN,QAAQ;EACR,WAAW;EACX,mBAAmB;EACnB,uCAAuC;AACzC;;;AAGA;EACE,iBAAiB;EACjB,WAAW;EACX;AACF;;;AAGA;EACE,8BAA8B;AAChC;;;AAGA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,qBAAqB;AACvB;;;;AAIA;EACE,WAAW;EACX,8BAA8B;EAC9B,2BAA2B;EAC3B,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,mBAAmB;EACnB,kBAAkB;EAClB,aAAa;EACb,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,yBAAyB;EACzB,cAAc;EACd,gCAAgC;EAChC,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,QAAQ;EACR,sBAAsB;AACxB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,QAAQ;EACR,sBAAsB;AACxB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,QAAQ;EACR,sBAAsB;AACxB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,QAAQ;EACR,sBAAsB;AACxB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,QAAQ;EACR,sBAAsB;AACxB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,yBAAyB;EACzB,uBAAuB;EACvB,iBAAiB;EACjB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,yBAAyB;EACzB,uBAAuB;EACvB,WAAW;AACb;;;AAGA;EACE,YAAY;EACZ,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,oDAAoD;EACpD,+BAA+B;EAC/B,yBAAyB;EACzB,aAAa;EACb,iBAAiB;EACjB,wBAAwB;EACxB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,aAAa;EACb,oBAAoB;AACtB;;AAEA;EACE,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,aAAa;EACb,gBAAgB;EAChB,mBAAmB;EACnB,iBAAiB;EACjB,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,yBAAyB;EACzB,gBAAgB;EAChB,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,yBAAyB;EACzB,gBAAgB;EAChB,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,iBAAiB;EACjB,yBAAyB;EACzB,iBAAiB;EACjB,aAAa;EACb,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,8BAA8B;AAChC;;;AAGA;EACE,aAAa;EACb,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,gCAAgC;AAClC;;;AAGA,kCAAkC;;AAElC,qCAAqC","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,400;0,700;1,100;1,400&display=swap\");\nbody {\n  background-color: #eeeeee;\n  font-family: \"Barlow Condensed\";\n  height: 100%;\n  width:100%;\n  overflow-x: hidden;\n}\n\na {\n  text-decoration: none;\n}\n\n.app {\n  background-color: #eeeeee\n}\n\n.no-padding {\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n}\n\n.title-center-text {\n  text-align: center;\n  font-size: 24px;\n}\n\n.pink-text {\n  color: #ff2e63;\n}\n\n.pink-background {\n  background-color: #ff2e63 !important;\n  border: none !important;\n}\n\n.blue-background {\n  background-color:#252a34 !important;\n  color: white;\n}\n\n.grow {\n  transition: all .1s ease-in-out;\n}\n\n.grow:hover {\n  transform: scale(1.02);\n  background-color: #eeeeee !important;\n}\n\n.nav {\n  list-style: none;\n  display: flex;\n  position: sticky;\n  z-index: 100;\n  height: 40px;\n  align-items: center;\n  right: 0;\n}\n\n.nav li {\n  margin: 10px;\n  padding-right: 10px;\n  border-right: 2px solid #08d9d6;\n  font-size: 20px;\n  color: #a924d6;\n}\n\n.scrolled {\n  position: fixed;\n  display: flex;\n  justify-content: flex-end;\n  top: 0;\n  right: 0;\n  width: 100%;\n  margin-bottom: 50px;\n  background-color: rgba(37, 42, 52, 0.9);\n}\n\n\n.landing {\n  min-height: 100vh;\n  width: 100%;\n  background-color: #252a34\n}\n\n\n.about {\n  text-shadow: 0.2px 0.2px 1.8px;\n}\n\n\n.social-icon {\n  height: 60px;\n  width: 60px;\n  margin-right: 20px;\n}\n\n.social-icon:hover {\n  transition: 0.3s;\n  transform: scale(1.1);\n}\n\n\n\n.skills {\n  width: 100%;\n  border-bottom-left-radius: 8px;\n  border-top-left-radius: 8px;\n  max-width: 450px;\n}\n\n.skill-bar {\n  height: 30px;\n  background-color: #aaaaaa;\n  border-radius: 10px;\n  margin-bottom: 5px;\n  padding: 10px;\n  margin-top: 25px;\n  padding-left: 8px;\n}\n\n.meter {\n  border: none;\n  height: 30px;\n  background-color: #ff2e63;\n  color: #eeeeee;\n  border-radius: 0px 10px 10px 0px;\n  margin-left: -8px;\n  margin-top: -10px;\n}\n\n[data-aos=load-js] {\n  width: 0;\n  animation: ease-in-out;\n}\n\n[data-aos=load-js].aos-animate {\n  width: 65%;\n}\n\n[data-aos=load-html] {\n  width: 0;\n  animation: ease-in-out;\n}\n\n[data-aos=load-html].aos-animate {\n  width: 70%;\n}\n\n[data-aos=load-css] {\n  width: 0;\n  animation: ease-in-out;\n}\n\n[data-aos=load-css].aos-animate {\n  width: 75%;\n}\n\n[data-aos=load-sass] {\n  width: 0;\n  animation: ease-in-out;\n}\n\n[data-aos=load-sass].aos-animate {\n  width: 70%;\n}\n\n[data-aos=load-react] {\n  width: 0;\n  animation: ease-in-out;\n}\n\n[data-aos=load-react].aos-animate {\n  width: 55%;\n}\n\n.icon {\n  height: 30px;\n  width: 30px;\n  border: 2px solid #252a34;\n  box-shadow: 1px 1px 3px;\n  margin-top: -28px;\n  margin-right: -20px;\n  float: right;\n}\n\n[data-aos=pulse] {\n  animation: transform;\n}\n\n[data-aos=pulse].aos-animate {\n  transform: scale(1.2);\n}\n\n.big-icon {\n  height: 40px;\n  width: 40px;\n  border: 3px solid #252a34;\n  box-shadow: 3px 3px 5px;\n  z-index: 10;\n}\n\n\n.lofi-icon {\n  height: 50px;\n  width: 50px;\n  margin-left: 5px;\n}\n\n.figma-icon {\n  height: 50px;\n  width: 50px;\n}\n\n.tools {\n  display: grid;\n  background-color: #252a34;\n  grid-template-columns: 12% 12% 12% 7% 12% 12% 7% 12%;\n  grid-template-rows: 30% 30% 30%;\n  border: 5px solid #cccccc;\n  padding: 10px;\n  padding-top: 30px;\n  box-shadow: 3px 3px 10px;\n  align-items: center;\n  padding-right: 20px;\n}\n\n.tool-title {\n  color: #eeeeee;\n  grid-column: 4/8;\n  grid-row: 1/2;\n  justify-self: center;\n}\n\n.git-icon {\n  grid-column: 2/3;\n  grid-row: 1/2;\n}\n\n.npm-icon {\n  grid-column: 1/2;\n  grid-row: 2/3;\n}\n\n.node-icon {\n  grid-column: 2/3;\n  grid-row: 3/4;\n}\n\n.linux-icon {\n  grid-column: 3/4;\n  grid-row: 2/3;\n}\n\n.webpack-icon {\n  grid-column: 2/3;\n  grid-row: 2/3;\n}\n\n.vsc-icon {\n  grid-column: 5/6;\n  grid-row: 3/4;\n}\n\n.ps-icon {\n  grid-column: 6/7;\n  grid-row: 3/4;\n}\n\n.figma-icon {\n  grid-column: 8/9;\n  grid-row: 2/3;\n}\n\n.lofi-icon {\n  grid-column: 9/10;\n  grid-row: 2/3;\n}\n\n.dpad-x {\n  width: 110%;\n  height: 130%;\n  background-color: #cccccc;\n  grid-row: 2/3;\n  grid-column: 1/4;\n  border-radius: 10px;\n  margin-left: -5px;\n  border: 1px solid #666666;\n  border-radius: 5px;\n}\n\n.dpad-y {\n  width: 120%;\n  height: 110%;\n  margin-left: -4px;\n  background-color: #cccccc;\n  grid-column: 2/3;\n  grid-row: 1/4;\n  border-radius: 5px;\n}\n\n.selectors {\n  width: 115%;\n  height: 130%;\n  margin-left: -6px;\n  background-color: #cccccc;\n  grid-column: 5/7;\n  grid-row: 3/4;\n  border-radius: 5px;\n}\n\n.buttons {\n  height: 150%;\n  width: 125%;\n  margin-left: -7px;\n  background-color: #cccccc;\n  grid-column: 8/11;\n  grid-row: 2/3;\n  border: 5px solid #08d9d6;\n  border-radius: 5px;\n}\n\n.projects {\n  text-shadow: 0.2px 0.2px 1.8px;\n}\n\n\n.project-image {\n  height: 200px;\n  width: 350px;\n  border: 1px solid #252a34;\n}\n\n.project-shadow {\n  box-shadow: 5px 5px 20px #999999;\n}\n\n\n/*# sourceMappingURL=App.css.map */\n\n/*# sourceMappingURL=style.sass.map */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=main.272bca2d03f2759e37f9.hot-update.js.map