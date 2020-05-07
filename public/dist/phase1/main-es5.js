function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Image and text -->\n<!-- <nav class=\"navbar navbar-light bg-light justify-content-between\">\n    <a class=\"navbar-brand\" href=\"\">\n      <img src=\"./assets/logo.png\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\n      Enterprise Trajectory\n    </a>\n    \n    <div class=\"form-inline\">\n      <button *ngIf=\"isLoggedin\" (click)=\"logOut()\" class=\"btn btn-outline-success my-2 my-sm-0\">Log out</button> &nbsp;\n       <button *ngIf=\"!isLoggedin\" class=\"btn btn-outline-success my-2 my-sm-0\">SignIn</button> &nbsp;\n      <button *ngIf=\"!isLoggedin\" class=\"btn btn-outline-success my-2 my-sm-0\">SignUp</button>\n </div>\n  \n  </nav>\n  <div class=\"container\">\n    <router-outlet></router-outlet>\n  </div>\n -->\n\n <router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/carrer/carrer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/carrer/carrer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCarrerCarrerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-tab-group>\n  <mat-tab label=\"Openings\">\n    <div class=\"tabHeading\">\n      <h3>Top Companies for Software Engineers in {{searchValue}}</h3>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-4\" *ngFor=\"let carrer of carrerOpenings\">\n        <mat-card>\n          <div mat-dialog-title>\n            <div>{{carrer.jobTitle}}</div>\n            <div>{{carrer.openings}}</div>\n            <div>{{carrer.average}} : &nbsp;{{carrer.salary}}&nbsp;{{carrer.period}}</div>\n            <!-- <div>Location: {{carrer.location}}</div> -->\n            <div>\n              <!-- <button class=\"btn btn-login\"><a (click)=\"openRespectiveJobs(carrer.jobsLink)\" href={{carrer.jobsLink}} target=\"_blank\">Apply</a></button> -->\n              <button class=\"btn btn-login\" (click)=\"openRespectiveJobs(carrer.jobsLink)\">See Openings</button>\n            </div>\n          </div>\n        </mat-card>\n      </div>\n    </div>\n  </mat-tab>\n  <mat-tab label=\"Salaries\">\n    <div class=\"tabHeading\">\n      <h3>Top Paid Companies for Software Engineers in {{searchValue}}</h3>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\" *ngFor=\"let salary of topSalaries;let i = index;\">\n        <mat-card (click)=\"openSalaryLink(salary.link)\">\n          <div mat-dialog-title>\n            <div class=\"row\">\n              <div class=\"col-md-2\">{{i+1}}</div>\n              <div class=\"col-md-5\">{{salary.companyName}}</div>\n              <div class=\"col-md-5\">{{salary.salary}} per year </div>\n            </div>\n          </div>\n        </mat-card>\n      </div>\n    </div>\n  </mat-tab>\n  <mat-tab label=\"Companies\">\n    <div class=\"tabHeading\">\n      <h3>Top Companies for Software Engineers in {{searchValue}}</h3>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6\" *ngFor=\"let key of keeys; let i=index\">\n        <mat-card>\n          <div mat-dialog-title class=\"headbgColor\">{{key}}</div>\n          <div *ngFor=\"let v of Values[i]\">\n            <div mat-dialog-content>{{v}}</div>\n          </div>\n        </mat-card>\n      </div>\n\n    </div>\n  </mat-tab>\n  <mat-tab label=\"Stats\">\n    <div class=\"tabHeading\">\n      <h3>Statistics for Software Engineers in {{searchValue}}</h3>\n    </div>\n    \n      <div *ngIf=\"showChart && openings\" style=\"display: block\">\n        <canvas baseChart\n                [datasets]=\"barChartData\"\n                [labels]=\"barChartLabels\"\n                [options]=\"barChartOptions\"\n                [legend]=\"barChartLegend\"\n                [chartType]=\"barChartType\"\n                >\n        </canvas>\n      </div>\n\n      <div *ngIf=\"showChart\" style=\"display: block;\">\n        <canvas baseChart\n          [datasets]=\"lineChartData\"\n          [labels]=\"lineChartLabels\"\n          [options]=\"lineChartOptions\"\n          [colors]=\"lineChartColors\"\n          [legend]=\"lineChartLegend\"\n          [chartType]=\"lineChartType\"\n        >\n        </canvas>\n      </div>\n    \n  </mat-tab>\n</mat-tab-group>\n\n\n\n<!-- <div mat-dialog-content>\n  <div *ngIf=\"carrerOpenings\">\n    <div [innerHTML]=\"carrerOpenings.description\"></div>\n  </div>\n</div> -->\n\n<!-- \naverage: \"Average salary\"\njobTitle: \"Full Stack Developer\"\njobsLink: \"https://www.indeed.com/jobs?q=full+stack+developer&l=United+States&from=career\"\nlocation: \"United States\"\nopenings: \"12146 openings\"\nperiod: \"per year\"\nsalary: \"$113,465\" \n-->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-light bg-light justify-content-between\">\n  <a class=\"navbar-brand\" (click)=\"onClick()\">\n    <img src=\"./assets/logo.png\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\n    Enterprise Trajectory\n  </a>\n\n  <div class=\"form-inline\">\n    <!-- <a href=\"https://www.indeed.com/jobs?q=developer&l=New%20York%2C%20NY&from=career&vjk=5e4e67b8fc22b2c0\" target=\"_blank\">Click Here</a> -->\n    <button (click)=\"carrer()\" class=\"btn btn-login float-right\">Career Advice</button> &nbsp;\n    <button (click)=\"logOut()\" class=\"btn btn-login float-right\">Log out</button> &nbsp;\n  </div>\n</nav>\n\n<div class=\"container\">\n  <div class=\"row\" *ngIf=\"!formType\">\n    <div class=\"login-sec\">\n      <h2 class=\"text-center\">Find Jobs</h2>\n      <form [formGroup]=\"jobsForm\" class=\"login-form\" (ngSubmit)=\"findJobs()\">\n        <div class=\"row col-md-12\">\n          <div class=\"col-md-5\">\n            <div class=\"form-group\">\n              <label for=\"what\" class=\"text-uppercase\">What</label>\n              <input type=\"text\" class=\"form-control\" formControlName=\"jobKeywords\"\n                placeholder=\"Job title, Keywords or Company\">\n            </div>\n          </div>\n          <div class=\"col-md-5\">\n            <div class=\"form-group\">\n              <label for=\"where\" class=\"text-uppercase\">Where</label>\n              <input type=\"text\" formControlName=\"location\" class=\"form-control\" placeholder=\"Kansas City, MO\">\n\n            </div>\n          </div>\n          <div class=\"col-md-2\">\n            <div class=\"form-check\">\n              <label class=\"form-check-label\">\n                <!-- <input type=\"checkbox\" class=\"form-check-input\"> -->\n\n              </label>\n              <button type=\"submit\" class=\"btn btn-login float-right\">Find</button>\n            </div>\n          </div>\n        </div>\n      </form>\n\n\n    </div>\n\n  </div>\n\n  <h5 *ngIf=\"!formType\" align=\"center\"><a [routerLink]=\"\" (click)=\"upload()\">Post Your Resume</a> - It only takes few\n    seconds</h5>\n\n  <div class=\"row\" *ngIf=\"formType\">\n    <div class=\"login-sec\">\n      <h2 class=\"text-center\">Explore career information by location</h2>\n      <div class=\"col-md-8\">\n        <div class=\"form-group\">\n          <!-- <label for=\"where\" class=\"text-uppercase\">Explore career information by location</label> -->\n          <input type=\"text\" #carrerLocation class=\"form-control\" placeholder=\"United States\">\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n        <div class=\"form-group\"> \n          <button type=\"submit\" (click)=\"searchCarrer(carrerLocation.value)\" class=\"btn btn-login float-right\">Search</button>\n        </div>\n      </div>\n    </div>\n      \n    \n  </div>\n\n  <div>\n    <!-- <app-jobs></app-jobs> -->\n    <router-outlet></router-outlet>\n  </div>\n</div>\n\n<!-- <div *ngIf=\"rawData\">\n  <h3>Raw Data from uploaded Resume </h3>\n  <div>\n    {{rawData}}\n  </div>\n</div> -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/dialog.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/dialog.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDialogDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 mat-dialog-title>Upload Resume</h1>\n<div mat-dialog-content>\n\n  <!-- <mat-form-field>\n    <input matInput>\n  </mat-form-field> -->\n\n  <!-- <input type=\"file\" #fileUpload (change)=\"uploadAndProgress($event.target.files)\" [(ngModel)]=\"data.resumeFile\">\n  <div *ngIf=\"percentDone > 0\">Upload Percent: {{percentDone}}%</div> -->\n  <div>\n    <form [formGroup] = \"uploadForm\" (ngSubmit)=\"onSubmit()\" enctype=\"form-data\">      \n      <div>\n        <input type=\"file\" name=\"profile\" accept=\".doc, .docx\" (change)=\"onFileSelect($event)\" />\n      </div>\n      <br>\n      <div>\n        <button class=\"btn btn-success\" type=\"submit\">Upload</button>\n      </div>\n    </form>\n    <!-- <div *ngIf=\"resumeData\">Resume Uploaded Successfully!!!!</div> -->\n    <div *ngIf=\"resumeData\">{{uploadMessage}}</div>\n  </div>\n</div>\n<div mat-dialog-actions>\n  <button class=\"btn btn-success align-right\" mat-button [mat-dialog-close]=\"resumeData\" cdkFocusInitial>Ok</button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/job-description/job-description.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/job-description/job-description.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppJobDescriptionJobDescriptionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <button mat-icon-button class=\"close-button\" [mat-dialog-close]=\"true\">\n  <mat-icon class=\"close-icon\" color=\"warn\">close</mat-icon>\n</button> -->\n\n<mat-icon class=\"close-icon\" color=\"warn\" [mat-dialog-close]=\"true\">close</mat-icon>\n\n<div mat-dialog-title>\n  <div>{{jobData.name}}</div>\n  <div>{{jobData.company}}&nbsp; {{jobData.rating}}</div>\n  <div>{{jobData.location}}</div>\n  <div>\n    <button class=\"btn btn-login\"><a href={{jobData.link}} target=\"_blank\">Apply</a></button>\n  </div>\n</div>\n<div mat-dialog-content>\n  <div *ngIf=\"jobData\">\n    <div [innerHTML]=\"jobData.description\"></div>\n  </div>\n</div>\n<mat-dialog-actions align=\"right\">\n  <button class=\"btn btn-login close-icon\" mat-dialog-close tabindex=\"-1\">Close</button>\n</mat-dialog-actions>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/jobs/jobs.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/jobs/jobs.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppJobsJobsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 align=\"center\">{{searchTitle}}</h2>\n\n<div class=\"row\">\n  <div class=\"col-md-8\">\n    <mat-card class=\"example-card\" *ngFor=\"let job of jobsData\">\n      <mat-card-header [routerLink]=\"\" (click)=\"getDescription(job)\">\n        <!-- <mat-icon>more_vert</mat-icon>\n          <div mat-card-avatar class=\"example-header-image\"></div> -->\n        <mat-card-title>{{job.name}}</mat-card-title>\n        <mat-card-subtitle>{{job.company}} &nbsp; {{job.rating}}</mat-card-subtitle>\n        <mat-card-subtitle>{{job.location}}</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        <div>\n          <button class=\"btn btn-login\"><a href={{job.link}} target=\"_blank\">Apply</a></button>\n        </div>\n        <div class=\"summary\">\n          {{job.summary}}\n        </div>\n      </mat-card-content>\n    </mat-card>\n  </div>\n  <!-- <div class=\"col-md-8\" *ngIf=\"jobDescription\">\n      <div [innerHTML]=\"jobDescription\"></div>\n  </div> -->\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"login-block\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4 login-sec\">\n        <h2 class=\"text-center\">Login Now</h2>\n        <form [formGroup]=\"loginForm\" class=\"login-form\" (ngSubmit)=\"login()\">\n                  <div class=\"form-group\">\n                    <label for=\"exampleInputEmail1\" class=\"text-uppercase\">Username</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"username\" placeholder=\"\"  [ngClass]=\"{ 'is-invalid': isSubmitted && f.username.errors }\">\n                    <div *ngIf=\"isSubmitted && f.username.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.username.errors.required\">Username is required</div>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"exampleInputPassword1\" class=\"text-uppercase\">Password</label>\n                    <input type=\"password\"  formControlName=\"password\" class=\"form-control\" placeholder=\"\" [ngClass]=\"{ 'is-invalid': isSubmitted && f.password.errors }\">\n                    <div *ngIf=\"isSubmitted && f.password.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                      <div *ngIf=\"f.password.errors.minlength\">\n                        Password must be at least 6 characters\n                      </div>\n                    </div>\n                  </div>\n        \n        \n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <!-- <input type=\"checkbox\" class=\"form-check-input\"> -->\n                      <small>Not a member?<a routerLink=\"/register\">Sign up</a></small>\n                    </label>\n                    <button type=\"submit\" class=\"btn btn-login float-right\">Submit</button>\n                  </div>\n                  <!-- <div>Not a member?<a routerLink=\"/register\">Sign up</a></div> -->\n                </form>\n                <div\n                *ngIf=\"isSubmitted && inValidUser\"\n                class=\"alert alert-danger\"\n                role=\"alert\"\n              >\n                {{ errorMessage }}\n              </div>\n          \n        <!-- <form class=\"login-form\">\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\" class=\"text-uppercase\">Username</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"\">\n\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputPassword1\" class=\"text-uppercase\">Password</label>\n            <input type=\"password\" class=\"form-control\" placeholder=\"\">\n          </div>\n\n\n          <div class=\"form-check\">\n            <label class=\"form-check-label\">\n              <input type=\"checkbox\" class=\"form-check-input\">\n              <small>Remember Me</small>\n            </label>\n            <button type=\"submit\" class=\"btn btn-login float-right\">Submit</button>\n          </div>\n\n        </form>\n        <div class=\"copy-text\">Created with <i class=\"fa fa-heart\"></i> by Grafreez</div> -->\n      </div>\n      <div class=\"col-md-8 banner-sec\">\n        <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n          <ol class=\"carousel-indicators\">\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n          </ol>\n          <div class=\"carousel-inner\" role=\"listbox\">\n            <div class=\"carousel-item active\">\n              <img class=\"d-block img-fluid\" src=\"https://static.pexels.com/photos/33972/pexels-photo.jpg\"\n                alt=\"First slide\">\n              <div class=\"carousel-caption d-none d-md-block\">\n                <div class=\"banner-text\">\n                  <h2>Enterprise Trajectory</h2>\n                  <p>This application is a solution for that problem by suggesting the technologies based on the current market trend.</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"carousel-item\">\n              <img class=\"d-block img-fluid\" src=\"https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg\"\n                alt=\"First slide\">\n              <div class=\"carousel-caption d-none d-md-block\">\n                <div class=\"banner-text\">\n                  <h2>This is Heaven</h2>\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"carousel-item\">\n              <img class=\"d-block img-fluid\" src=\"https://images.pexels.com/photos/872957/pexels-photo-872957.jpeg\"\n                alt=\"First slide\">\n              <div class=\"carousel-caption d-none d-md-block\">\n                <div class=\"banner-text\">\n                  <h2>This is Heaven</h2>\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n\n\n\n\n\n\n<!-- <div class=\"login\">\n  <h2 class=\"login-header\">Log in</h2>\n  <form [formGroup]=\"loginForm\" class=\"login-container\" (ngSubmit)=\"login()\">\n    <div class=\"form-group\">\n      <label>UserName</label>\n      <input\n        type=\"text\"\n        formControlName=\"username\"\n        class=\"form-control\"\n        [ngClass]=\"{ 'is-invalid': isSubmitted && f.username.errors }\"\n      />\n      <div *ngIf=\"isSubmitted && f.username.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.username.errors.required\">Username is required</div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label>Password</label>\n      <input\n        type=\"password\"\n        formControlName=\"password\"\n        class=\"form-control\"\n        [ngClass]=\"{ 'is-invalid': isSubmitted && f.password.errors }\"\n      />\n      <div *ngIf=\"isSubmitted && f.password.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.password.errors.required\">Password is required</div>\n        <div *ngIf=\"f.password.errors.minlength\">\n          Password must be at least 6 characters\n        </div>\n      </div>\n    </div>\n\n    <div>\n      <input type=\"submit\" value=\"Log in\" />\n    </div>\n\n    <div>Not a member?<a routerLink=\"/register\">Sign up</a></div>\n  </form>\n\n  <div\n    *ngIf=\"isSubmitted && inValidUser\"\n    class=\"alert alert-danger\"\n    role=\"alert\"\n  >\n    {{ errorMessage }}\n  </div>\n</div>\n -->\n\n\n \n\n\n\n<!-- <div class=\"main\">\n  <div class=\"row\">\n    <div class=\"col-md-6 col-sm-6 d-flex justify-content-center top-3\">\n        <h3 class=\"heading-left\">Login to Enterprise Trajectory</h3>\n        <div>\n\n        </div>\n    </div>\n      <div class=\"col-md-4 col-sm-4\">\n        <div class=\"login-main-container\">\n          <h2 class=\"login-header\">Log in</h2>\n        <form [formGroup]=\"loginForm\" class=\"login-container\" (ngSubmit)=\"login()\">\n          <div class=\"form-group\">\n            <label>UserName</label>\n            <input\n              type=\"text\"\n              formControlName=\"username\"\n              class=\"form-control\"\n              [ngClass]=\"{ 'is-invalid': isSubmitted && f.username.errors }\"\n            />\n            <div *ngIf=\"isSubmitted && f.username.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.username.errors.required\">Username is required</div>\n            </div>\n          </div>\n      \n          <div class=\"form-group\">\n            <label>Password</label>\n            <input\n              type=\"password\"\n              formControlName=\"password\"\n              class=\"form-control\"\n              [ngClass]=\"{ 'is-invalid': isSubmitted && f.password.errors }\"\n            />\n            <div *ngIf=\"isSubmitted && f.password.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.password.errors.required\">Password is required</div>\n              <div *ngIf=\"f.password.errors.minlength\">\n                Password must be at least 6 characters\n              </div>\n            </div>\n          </div>\n      \n          <div class=\"d-flex justify-content-center\">\n            \n            <button class=\"btn btn-success\" type=\"submit\">Login</button>\n          </div>\n      \n          <div>Not a member?<a routerLink=\"/register\">Sign up</a></div>\n        </form>\n      \n        <div\n          *ngIf=\"isSubmitted && inValidUser\"\n          class=\"alert alert-danger\"\n          role=\"alert\"\n        >\n          {{ errorMessage }}\n        </div>\n        </div>\n      </div>\n  </div>\n</div> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"login-block\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-4 login-sec\">\n            <h2 class=\"text-center\">Register Now</h2>\n            <form [formGroup]=\"registrationForm\" class=\"login-form\" (ngSubmit)=\"onSubmit()\">\n            \n                <div class=\"form-group\">\n                    <label class=\"text-uppercase\">User Name</label>\n                    <input type=\"text\"  formControlName=\"username\" class=\"form-control\"\n                        [ngClass]=\"{ 'is-invalid': isSubmitted && f.username.errors }\" />\n                    <div *ngIf=\"isSubmitted && f.username.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.username.errors.required\">User Name is required</div>\n                    </div>\n                </div>  \n            \n             \n                <div class=\"form-group\">\n                    <label for=\"email\" class=\"text-uppercase\">Email</label>\n                    <input type=\"text\" formControlName=\"email\"  class=\"form-control\" [ngClass]=\"{ 'is-invalid': isSubmitted && f.email.errors }\" placeholder=\"\">\n                    <div *ngIf=\"isSubmitted && f.email.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                        <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n                    </div>\n                </div>\n            \n                <div class=\"form-group\">\n                    <label for=\"exampleInputPassword1\" class=\"text-uppercase\">Password</label>\n                    <input type=\"password\"  formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': isSubmitted && f.password.errors }\" placeholder=\"\">\n                    <div *ngIf=\"isSubmitted && f.password.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                        <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n                    </div>\n                </div>\n            \n                <div class=\"form-group\">\n                    <label class=\"text-uppercase\">Confirm Password</label>\n                    <input type=\"password\" formControlName=\"confirmPassword\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': isSubmitted && f.confirmPassword.errors }\" />\n                    <div *ngIf=\"isSubmitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.confirmPassword.errors.required\">Confirm Password is required</div>\n                        <div *ngIf=\"f.confirmPassword.errors.mustMatch\">Passwords must match</div>\n                    </div>\n                </div>\n            \n            \n                <div class=\"form-check\">\n                    <button type=\"submit\" class=\"btn btn-login float-right\">Submit</button>\n                </div>\n            \n            </form>\n            <div *ngIf=\"isSubmitted && isUsernameValid\" class=\"alert alert-danger\" role=\"alert\">\n                Username already exists!!! \n            </div>\n          <!-- <form class=\"login-form\">\n            <div class=\"form-group\">\n              <label for=\"exampleInputEmail1\" class=\"text-uppercase\">Username</label>\n              <input type=\"text\" class=\"form-control\" placeholder=\"\">\n  \n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleInputPassword1\" class=\"text-uppercase\">Password</label>\n              <input type=\"password\" class=\"form-control\" placeholder=\"\">\n            </div>\n  \n  \n            <div class=\"form-check\">\n              <label class=\"form-check-label\">\n                <input type=\"checkbox\" class=\"form-check-input\">\n                <small>Remember Me</small>\n              </label>\n              <button type=\"submit\" class=\"btn btn-login float-right\">Submit</button>\n            </div>\n  \n          </form>\n          <div class=\"copy-text\">Created with <i class=\"fa fa-heart\"></i> by Grafreez</div> -->\n        </div>\n        <div class=\"col-md-8 banner-sec\">\n          <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n            <ol class=\"carousel-indicators\">\n              <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n              <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n              <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n            </ol>\n            <div class=\"carousel-inner\" role=\"listbox\">\n              <div class=\"carousel-item active\">\n                <img class=\"d-block img-fluid\" src=\"https://static.pexels.com/photos/33972/pexels-photo.jpg\"\n                  alt=\"First slide\">\n                <div class=\"carousel-caption d-none d-md-block\">\n                  <div class=\"banner-text\">\n                    <h2>Enterprise Trajectory</h2>\n                    <p>This application is a solution for that problem by suggesting the technologies based on the current market trend.</p>\n                  </div>\n                </div>\n              </div>\n              <div class=\"carousel-item\">\n                <img class=\"d-block img-fluid\" src=\"https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg\"\n                  alt=\"First slide\">\n                <div class=\"carousel-caption d-none d-md-block\">\n                  <div class=\"banner-text\">\n                    <h2>This is Heaven</h2>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n                      et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>\n                  </div>\n                </div>\n              </div>\n              <div class=\"carousel-item\">\n                <img class=\"d-block img-fluid\" src=\"https://images.pexels.com/photos/872957/pexels-photo-872957.jpeg\"\n                  alt=\"First slide\">\n                <div class=\"carousel-caption d-none d-md-block\">\n                  <div class=\"banner-text\">\n                    <h2>This is Heaven</h2>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n                      et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n  \n          </div>\n        </div>\n      </div>\n\n\n\n\n\n\n<!-- <div class=\"copy-text\">Created with <i class=\"fa fa-heart\"></i> by Sravani</div> -->\n\n<!-- <div class=\"login\">\n    <h2 class=\"login-header\">Registration</h2>\n    <form [formGroup]=\"registrationForm\" class=\"login-container\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group\">\n            <label>User Name</label>\n            <input type=\"text\" formControlName=\"username\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': isSubmitted && f.username.errors }\" />\n            <div *ngIf=\"isSubmitted && f.username.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.username.errors.required\">User Name is required</div>\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label>Email</label>\n            <input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': isSubmitted && f.email.errors }\" />\n            <div *ngIf=\"isSubmitted && f.email.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label>Password</label>\n            <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': isSubmitted && f.password.errors }\" />\n            <div *ngIf=\"isSubmitted && f.password.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label>Confirm Password</label>\n            <input type=\"password\" formControlName=\"confirmPassword\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': isSubmitted && f.confirmPassword.errors }\" />\n            <div *ngIf=\"isSubmitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.confirmPassword.errors.required\">Confirm Password is required</div>\n                <div *ngIf=\"f.confirmPassword.errors.mustMatch\">Passwords must match</div>\n            </div>\n        </div>\n        <div>\n            <input type=\"submit\" value=\"Submit\">\n        </div>\n    </form>\n    <div *ngIf=\"isSubmitted && isUsernameValid\" class=\"alert alert-danger\" role=\"alert\">\n        Username already exists!!! \n    </div>\n</div> -->";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _carrer_carrer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./carrer/carrer.component */
    "./src/app/carrer/carrer.component.ts");
    /* harmony import */


    var _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./jobs/jobs.component */
    "./src/app/jobs/jobs.component.ts");
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.guard */
    "./src/app/auth.guard.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");

    var routes = [{
      path: "login",
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
    }, {
      path: "register",
      component: _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"]
    }, {
      path: "dashboard",
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
      children: [{
        path: "carrer",
        component: _carrer_carrer_component__WEBPACK_IMPORTED_MODULE_1__["CarrerComponent"]
      }, {
        path: "",
        component: _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_2__["JobsComponent"]
      }]
    }, {
      path: "**",
      redirectTo: "login"
    }, {
      path: "",
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ml-auto {\n    left: auto !important;\n    right: 0px;\n}\n\n.inline {\n    display: inline;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1sLWF1dG8ge1xuICAgIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICByaWdodDogMHB4O1xufVxuXG4uaW5saW5lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(router, loginService) {
        _classCallCheck(this, AppComponent);

        this.router = router;
        this.loginService = loginService;
        this.title = 'phase1';
        this.isLoggedin = false;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // this.check = sessionStorage.getItem("res-session");
          // console.log('check in nav bar.....', this.check);
          // if(this.check != undefined) { 
          //   this.isLoggedin = true;
          // } else { 
          //   this.isLoggedin = false;
          // }
          this.loginService.update.subscribe(function (res) {
            return _this.isLoggedin = res;
          });
          console.log('adsasdsadasd', this.isLoggedin);
        }
      }, {
        key: "logOut",
        value: function logOut() {
          sessionStorage.clear();
          this.isLoggedin = false;
          this.router.navigate['/login'];
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.guard */
    "./src/app/auth.guard.ts");
    /* harmony import */


    var _services_register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/register.service */
    "./src/app/services/register.service.ts");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./dialog/dialog.component */
    "./src/app/dialog/dialog.component.ts");
    /* harmony import */


    var angular_file__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! angular-file */
    "./node_modules/angular-file/fesm2015/angular-file.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./jobs/jobs.component */
    "./src/app/jobs/jobs.component.ts");
    /* harmony import */


    var _job_description_job_description_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./job-description/job-description.component */
    "./src/app/job-description/job-description.component.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _carrer_carrer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./carrer/carrer.component */
    "./src/app/carrer/carrer.component.ts");
    /* harmony import */


    var ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ng2-charts/ng2-charts */
    "./node_modules/ng2-charts/ng2-charts.js");
    /* harmony import */


    var ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_23__);

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_16__["DialogComponent"], _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_19__["JobsComponent"], _job_description_job_description_component__WEBPACK_IMPORTED_MODULE_20__["JobDescriptionComponent"], _carrer_carrer_component__WEBPACK_IMPORTED_MODULE_22__["CarrerComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], angular_file__WEBPACK_IMPORTED_MODULE_17__["ngfModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"], ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_23__["ChartsModule"]],
      entryComponents: [_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_16__["DialogComponent"], _job_description_job_description_component__WEBPACK_IMPORTED_MODULE_20__["JobDescriptionComponent"]],
      providers: [_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _services_register_service__WEBPACK_IMPORTED_MODULE_2__["RegisterService"], _auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth.guard.ts":
  /*!*******************************!*\
    !*** ./src/app/auth.guard.ts ***!
    \*******************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(loggedInService, router) {
        _classCallCheck(this, AuthGuard);

        this.loggedInService = loggedInService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var url = state.url; // return this.loggedInService.isLoggedIn$;

          if (sessionStorage.getItem("res-session")) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(true);
            ;
          } else if (sessionStorage.getItem("res-session") == undefined) {
            this.router.navigate(['/login']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], AuthGuard);
    /***/
  },

  /***/
  "./src/app/carrer/carrer.component.css":
  /*!*********************************************!*\
    !*** ./src/app/carrer/carrer.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppCarrerCarrerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".tabHeading {\n    margin-top: 10px;\n    margin-left: 20px;\n}\n\n.headbgColor {\n    background-color: lightgray;\n}\n\n.mat-card{\n    text-align: center;\n}\n\n.btn-login{background: #DE6262; color:#fff; font-weight:600;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FycmVyL2NhcnJlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQSxXQUFXLG1CQUFtQixFQUFFLFVBQVUsRUFBRSxlQUFlLENBQUMiLCJmaWxlIjoic3JjL2FwcC9jYXJyZXIvY2FycmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFiSGVhZGluZyB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLmhlYWRiZ0NvbG9yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG59XG5cbi5tYXQtY2FyZHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG4tbG9naW57YmFja2dyb3VuZDogI0RFNjI2MjsgY29sb3I6I2ZmZjsgZm9udC13ZWlnaHQ6NjAwO30iXX0= */";
    /***/
  },

  /***/
  "./src/app/carrer/carrer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/carrer/carrer.component.ts ***!
    \********************************************/

  /*! exports provided: CarrerComponent */

  /***/
  function srcAppCarrerCarrerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarrerComponent", function () {
      return CarrerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_carrer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../services/carrer.service */
    "./src/app/services/carrer.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var CarrerComponent = /*#__PURE__*/function () {
      function CarrerComponent(carrerService, router) {
        _classCallCheck(this, CarrerComponent);

        this.carrerService = carrerService;
        this.router = router;
        this.openings = [];
        this.salariesChartData = [];
        this.barChartOptions = {
          scaleShowVerticalLines: false,
          responsive: true
        };
        this.barChartLabels = [];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.showChart = false;
        this.barChartData = [];
        this.lineChartData = [{
          data: [],
          label: 'High Paid Salaries'
        }];
        this.lineChartLabels = [];
        this.lineChartOptions = {
          responsive: true
        };
        this.lineChartColors = [{
          //borderColor: 'black',
          backgroundColor: 'rgba(255,0,0,0.4)'
        }];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
      }

      _createClass(CarrerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.carrerService.updatedcarrerSearchValue.subscribe(function (res) {
            //console.log("Line Chart Data@@@@.......", this.lineChartData);
            _this2.searchValue = res;

            _this2.getCarrersData();
          });
        }
      }, {
        key: "openingsChart",
        value: function openingsChart() {
          this.barChartData = [{
            data: this.openings,
            label: 'Job Openings'
          }];
          console.log('data for charts@@@@@@@@@@@', this.barChartData);
          this.showChart = true;
        }
      }, {
        key: "getCarrersData",
        value: function getCarrersData() {
          var _this3 = this;

          this.carrerService.getCarrersData(this.searchValue).subscribe(function (res) {
            _this3.carrerOpenings = res;
            console.log('This is carrers data.......', res); //var matches = str.match(/(\d+)/); 

            _this3.openings = [];
            _this3.barChartLabels = [];

            _this3.carrerOpenings.forEach(function (element) {
              var item = element.openings.match(/(\d+)/); //console.log('This is openings data.......@@@@#######', item);

              _this3.openings.push(item[0]);

              _this3.barChartLabels.push(element.jobTitle);
            });

            _this3.barChartData = [{
              data: _this3.openings,
              label: 'Job Openings'
            }];

            _this3.shuffle(); //console.log('This is openings data.......@@@@#######', this.openings);

          });
          this.carrerService.getTopCompanies(this.searchValue).subscribe(function (res) {
            _this3.topCompanies = res; //console.log('This is Top companies data.......', res);

            _this3.keeys = Object.keys(_this3.topCompanies);
            _this3.Values = Object.values(_this3.topCompanies);
          });
          this.carrerService.getTopSalaries(this.searchValue).subscribe(function (res) {
            _this3.topSalaries = res;
            _this3.salariesChart = Object.assign({}, res);
            _this3.lineChartLabels = [];
            _this3.lineChartData[0].data = [];

            _this3.topSalaries.forEach(function (element) {
              _this3.lineChartLabels.push(element.companyName);

              var item = element.salary.substring(1).replace(",", "");

              _this3.lineChartData[0].data.push(item);
            }); //this.shuffle();

          });
        }
      }, {
        key: "shuffle",
        value: function shuffle() {
          var arr1 = this.lineChartLabels;
          var arr2 = this.lineChartData[0].data;
          var i, j, temp1, temp2;

          for (i = arr1.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp1 = arr1[i];
            arr1[i] = arr1[j];
            arr1[j] = temp1;
            temp2 = arr2[i];
            arr2[i] = arr2[j];
            arr2[j] = temp2;
          }

          this.lineChartLabels = arr1;
          this.lineChartData[0].data = arr2; //console.log('Labels data...@@@@@....', this.lineChartLabels);

          this.openingsChart();
        }
      }, {
        key: "openSalaryLink",
        value: function openSalaryLink(url) {
          window.open(url);
        }
      }, {
        key: "openRespectiveJobs",
        value: function openRespectiveJobs(link) {
          //console.log('link to open@@@@@@', link);
          this.carrerService.updatecarrerJobLink(link);
          this.router.navigate(['dashboard/']);
        }
      }]);

      return CarrerComponent;
    }();

    CarrerComponent.ctorParameters = function () {
      return [{
        type: _services_carrer_service__WEBPACK_IMPORTED_MODULE_1__["CarrerService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    CarrerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-carrer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./carrer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/carrer/carrer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./carrer.component.css */
      "./src/app/carrer/carrer.component.css"))["default"]]
    })], CarrerComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.css":
  /*!***************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n.mat-card{\n    margin-bottom: 20px;\n}\n\n.row{\n    align-items: center;\n    display: flex;\n  justify-content: center;\n}\n\nh2{\n    padding-top: 10px;\n    padding-bottom: 10px;\n}\n\n.login-block{\n    background: #DE6262;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\nbackground: linear-gradient(to bottom, #FFB88C, #DE6262); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\nfloat:left;\nwidth:100%;\npadding : 50px 0;\n}\n\n.banner-sec{background:url(https://static.pexels.com/photos/33972/pexels-photo.jpg)  no-repeat left bottom; background-size:cover; min-height:500px; border-radius: 0 10px 10px 0; padding:0;}\n\n/* .container{background:#fff; border-radius: 10px; box-shadow:15px 20px 0px rgba(0,0,0,0.1);} */\n\n.carousel-inner{border-radius:0 10px 10px 0;}\n\n.carousel-caption{text-align:left; left:5%;}\n\n.login-sec{padding: 50px 30px; position:relative;}\n\n.login-sec .copy-text{position:absolute; width:80%; bottom:20px; font-size:13px; text-align:center;}\n\n.login-sec .copy-text i{color:#FEB58A;}\n\n.login-sec .copy-text a{color:#E36262;}\n\n.login-sec h2{margin-bottom:30px; font-weight:800; font-size:30px; color: #DE6262;}\n\n.login-sec h2:after{content:\" \"; width:100px; height:5px; background:#FEB58A; display:block; margin-top:20px; border-radius:3px; margin-left:auto;margin-right:auto}\n\n.btn-login{background: #DE6262; color:#fff; font-weight:600;}\n\n.banner-text{width:70%; position:absolute; bottom:40px; padding-left:20px;}\n\n.banner-text h2{color:#fff; font-weight:600;}\n\n.banner-text h2:after{content:\" \"; width:100px; height:5px; background:#FFF; display:block; margin-top:20px; border-radius:3px;}\n\n.banner-text p{color:#fff;}\n\n/* .form-group{\n    display: inline-block;\n} */\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFDQTtJQUNJLG1CQUFtQixHQUFHLDhCQUE4QixHQUNXLCtCQUErQjtBQUNsRyx3REFBd0QsRUFBRSxxRUFBcUU7QUFDL0gsVUFBVTtBQUNWLFVBQVU7QUFDVixnQkFBZ0I7QUFDaEI7O0FBQ0EsWUFBWSw4RkFBOEYsRUFBRSxxQkFBcUIsRUFBRSxnQkFBZ0IsRUFBRSw0QkFBNEIsRUFBRSxTQUFTLENBQUM7O0FBQzdMLGdHQUFnRzs7QUFDaEcsZ0JBQWdCLDJCQUEyQixDQUFDOztBQUM1QyxrQkFBa0IsZUFBZSxFQUFFLE9BQU8sQ0FBQzs7QUFDM0MsV0FBVyxrQkFBa0IsRUFBRSxpQkFBaUIsQ0FBQzs7QUFDakQsc0JBQXNCLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixDQUFDOztBQUNuRyx3QkFBd0IsYUFBYSxDQUFDOztBQUN0Qyx3QkFBd0IsYUFBYSxDQUFDOztBQUN0QyxjQUFjLGtCQUFrQixFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDOztBQUNsRixvQkFBb0IsV0FBVyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsa0JBQWtCLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsQ0FBQyxpQkFBaUI7O0FBQ25LLFdBQVcsbUJBQW1CLEVBQUUsVUFBVSxFQUFFLGVBQWUsQ0FBQzs7QUFDNUQsYUFBYSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixDQUFDOztBQUMxRSxnQkFBZ0IsVUFBVSxFQUFFLGVBQWUsQ0FBQzs7QUFDNUMsc0JBQXNCLFdBQVcsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixDQUFDOztBQUMvSCxlQUFlLFVBQVUsQ0FBQzs7QUFFMUI7O0dBRUciLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5tYXQtY2FyZHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ucm93e1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmgye1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLmxvZ2luLWJsb2Nre1xuICAgIGJhY2tncm91bmQ6ICNERTYyNjI7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG5iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNGRkI4OEMsICNERTYyNjIpOyAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNGRkI4OEMsICNERTYyNjIpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG5mbG9hdDpsZWZ0O1xud2lkdGg6MTAwJTtcbnBhZGRpbmcgOiA1MHB4IDA7XG59XG4uYmFubmVyLXNlY3tiYWNrZ3JvdW5kOnVybChodHRwczovL3N0YXRpYy5wZXhlbHMuY29tL3Bob3Rvcy8zMzk3Mi9wZXhlbHMtcGhvdG8uanBnKSAgbm8tcmVwZWF0IGxlZnQgYm90dG9tOyBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7IG1pbi1oZWlnaHQ6NTAwcHg7IGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDA7IHBhZGRpbmc6MDt9XG4vKiAuY29udGFpbmVye2JhY2tncm91bmQ6I2ZmZjsgYm9yZGVyLXJhZGl1czogMTBweDsgYm94LXNoYWRvdzoxNXB4IDIwcHggMHB4IHJnYmEoMCwwLDAsMC4xKTt9ICovXG4uY2Fyb3VzZWwtaW5uZXJ7Ym9yZGVyLXJhZGl1czowIDEwcHggMTBweCAwO31cbi5jYXJvdXNlbC1jYXB0aW9ue3RleHQtYWxpZ246bGVmdDsgbGVmdDo1JTt9XG4ubG9naW4tc2Vje3BhZGRpbmc6IDUwcHggMzBweDsgcG9zaXRpb246cmVsYXRpdmU7fVxuLmxvZ2luLXNlYyAuY29weS10ZXh0e3Bvc2l0aW9uOmFic29sdXRlOyB3aWR0aDo4MCU7IGJvdHRvbToyMHB4OyBmb250LXNpemU6MTNweDsgdGV4dC1hbGlnbjpjZW50ZXI7fVxuLmxvZ2luLXNlYyAuY29weS10ZXh0IGl7Y29sb3I6I0ZFQjU4QTt9XG4ubG9naW4tc2VjIC5jb3B5LXRleHQgYXtjb2xvcjojRTM2MjYyO31cbi5sb2dpbi1zZWMgaDJ7bWFyZ2luLWJvdHRvbTozMHB4OyBmb250LXdlaWdodDo4MDA7IGZvbnQtc2l6ZTozMHB4OyBjb2xvcjogI0RFNjI2Mjt9XG4ubG9naW4tc2VjIGgyOmFmdGVye2NvbnRlbnQ6XCIgXCI7IHdpZHRoOjEwMHB4OyBoZWlnaHQ6NXB4OyBiYWNrZ3JvdW5kOiNGRUI1OEE7IGRpc3BsYXk6YmxvY2s7IG1hcmdpbi10b3A6MjBweDsgYm9yZGVyLXJhZGl1czozcHg7IG1hcmdpbi1sZWZ0OmF1dG87bWFyZ2luLXJpZ2h0OmF1dG99XG4uYnRuLWxvZ2lue2JhY2tncm91bmQ6ICNERTYyNjI7IGNvbG9yOiNmZmY7IGZvbnQtd2VpZ2h0OjYwMDt9XG4uYmFubmVyLXRleHR7d2lkdGg6NzAlOyBwb3NpdGlvbjphYnNvbHV0ZTsgYm90dG9tOjQwcHg7IHBhZGRpbmctbGVmdDoyMHB4O31cbi5iYW5uZXItdGV4dCBoMntjb2xvcjojZmZmOyBmb250LXdlaWdodDo2MDA7fVxuLmJhbm5lci10ZXh0IGgyOmFmdGVye2NvbnRlbnQ6XCIgXCI7IHdpZHRoOjEwMHB4OyBoZWlnaHQ6NXB4OyBiYWNrZ3JvdW5kOiNGRkY7IGRpc3BsYXk6YmxvY2s7IG1hcmdpbi10b3A6MjBweDsgYm9yZGVyLXJhZGl1czozcHg7fVxuLmJhbm5lci10ZXh0IHB7Y29sb3I6I2ZmZjt9XG5cbi8qIC5mb3JtLWdyb3Vwe1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn0gKi9cblxuIl19 */";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_carrer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../services/carrer.service */
    "./src/app/services/carrer.service.ts");
    /* harmony import */


    var _services_jobs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../services/jobs.service */
    "./src/app/services/jobs.service.ts");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../dialog/dialog.component */
    "./src/app/dialog/dialog.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(formBuilder, router, dialog, loginService, jobsService, carrerService) {
        _classCallCheck(this, DashboardComponent);

        this.formBuilder = formBuilder;
        this.router = router;
        this.dialog = dialog;
        this.loginService = loginService;
        this.jobsService = jobsService;
        this.carrerService = carrerService;
        this.formType = false;
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // this.formType = false;
          // console.log('window location...........',window.location.pathname,this.formType);
          // if (window.location.pathname == '/dashboard/carrer') {
          //   this.formType = true;
          // }
          this.jobsForm = this.formBuilder.group({
            jobKeywords: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
            //  email: ['', [Validators.required, Validators.email]],
            location: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]]
          });
          this.check = sessionStorage.getItem("res-session");
          console.log("check in nav bar.....", this.check);
          this.loginService.loggedIn(this.isLoggedin);
        }
      }, {
        key: "onClick",
        value: function onClick() {
          this.router.navigate(['dashboard']);
        }
      }, {
        key: "findJobs",
        value: function findJobs() {
          // console.log('for value', this.jobsForm.value);
          this.jobsFormValue = this.jobsForm.value;
          this.jobsService.updateFormData(this.jobsFormValue);
        }
      }, {
        key: "upload",
        value: function upload() {
          var _this4 = this;

          var dialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], {
            width: "400px",
            data: {
              data: this.resumeFile
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed...........',result);
            _this4.rawData = result;
          });
        }
      }, {
        key: "logOut",
        value: function logOut() {
          this.loginService.logOut();
        }
      }, {
        key: "carrer",
        value: function carrer() {
          //this.formType = true;
          this.router.navigate(["dashboard/carrer"]);
        }
      }, {
        key: "searchCarrer",
        value: function searchCarrer(value) {
          console.log('Search value @@@@@@@@@@@@@ updatecarrerSearchValue', value);
          this.carrerService.updatecarrerSearchValue(value);
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (window.location.pathname == '/dashboard/carrer') {
            this.formType = true;
          } else {
            this.formType = false;
          }
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
      }, {
        type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
      }, {
        type: _services_jobs_service__WEBPACK_IMPORTED_MODULE_2__["JobsService"]
      }, {
        type: _services_carrer_service__WEBPACK_IMPORTED_MODULE_1__["CarrerService"]
      }];
    };

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
      selector: "app-dashboard",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/dashboard/dashboard.component.css"))["default"]]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/dialog/dialog.component.css":
  /*!*********************************************!*\
    !*** ./src/app/dialog/dialog.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppDialogDialogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/dialog/dialog.component.ts":
  /*!********************************************!*\
    !*** ./src/app/dialog/dialog.component.ts ***!
    \********************************************/

  /*! exports provided: DialogComponent */

  /***/
  function srcAppDialogDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogComponent", function () {
      return DialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_upload_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../services/upload.service */
    "./src/app/services/upload.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js"); // import {HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpEventType} from '@angular/common/http';


    var DialogComponent = /*#__PURE__*/function () {
      function DialogComponent(formBuilder, uploadService, dialogRef, data) {
        _classCallCheck(this, DialogComponent);

        this.formBuilder = formBuilder;
        this.uploadService = uploadService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.percentDone = 0;
      }

      _createClass(DialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.uploadForm = this.formBuilder.group({
            profile: ['']
          });
        }
      }, {
        key: "onFileSelect",
        value: function onFileSelect(event) {
          if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.uploadForm.get('profile').setValue(file);
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this5 = this;

          var formData = new FormData();
          var userId = sessionStorage.getItem("res-session");
          formData.append('userId', JSON.parse(userId).token);
          formData.append('profile', this.uploadForm.get('profile').value);
          this.uploadService.uploadResume(formData).subscribe(function (res) {
            _this5.resumeData = JSON.stringify(res); //console.log('response data........', this.resumeData);
          }, function (err) {
            _this5.resumeData = JSON.stringify(err); //console.log('error data........',err.status);

            if (err.status == 200) _this5.uploadMessage = "Resume Uploaded Successfully!";else _this5.uploadMessage = "Error in Uploading the Resume";
          }); // this.http.post<any>('http://localhost:3000/uploadfile', formData).subscribe(
          //   (res) => {
          //     this.resumeData = JSON.stringify(res);
          //     console.log('response data........', this.resumeData);
          //   },
          //   (err) => console.log(err)
          // );
        }
      }, {
        key: "uploadFiles",
        value: function uploadFiles(files) {
          console.log('input file', files);
          console.log('form data.....', this.myFormData);
        }
      }, {
        key: "onNoClick",
        value: function onNoClick(file) {
          console.log('file data..........', file);
          this.dialogRef.close();
        }
      }]);

      return DialogComponent;
    }();

    DialogComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _services_upload_service__WEBPACK_IMPORTED_MODULE_1__["UploadService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    DialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/dialog.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dialog.component.css */
      "./src/app/dialog/dialog.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))], DialogComponent);
    /***/
  },

  /***/
  "./src/app/job-description/job-description.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/job-description/job-description.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppJobDescriptionJobDescriptionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btn-login {\n  background: #de6262;\n  color: #fff;\n  font-weight: 600;\n}\n\na {\n  color: white;\n  /* text-decoration: none; */\n  background-color: transparent;\n}\n\n.close-button {\n  float: right;\n  top: -24px;\n  right: -24px;\n}\n\n.close-icon {\n    float: right;\n  }\n\n.mat-dialog-content {\n    overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9iLWRlc2NyaXB0aW9uL2pvYi1kZXNjcmlwdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLDZCQUE2QjtBQUMvQjs7QUFDQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtFQUNkOztBQUNEO0lBQ0csZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvam9iLWRlc2NyaXB0aW9uL2pvYi1kZXNjcmlwdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1sb2dpbiB7XG4gIGJhY2tncm91bmQ6ICNkZTYyNjI7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5hIHtcbiAgY29sb3I6IHdoaXRlO1xuICAvKiB0ZXh0LWRlY29yYXRpb246IG5vbmU7ICovXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmNsb3NlLWJ1dHRvbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgdG9wOiAtMjRweDtcbiAgcmlnaHQ6IC0yNHB4O1xufVxuXG4uY2xvc2UtaWNvbiB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG4gLm1hdC1kaWFsb2ctY29udGVudCB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/job-description/job-description.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/job-description/job-description.component.ts ***!
    \**************************************************************/

  /*! exports provided: JobDescriptionComponent */

  /***/
  function srcAppJobDescriptionJobDescriptionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobDescriptionComponent", function () {
      return JobDescriptionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var JobDescriptionComponent = /*#__PURE__*/function () {
      function JobDescriptionComponent(data, dialogRef) {
        _classCallCheck(this, JobDescriptionComponent);

        this.data = data;
        this.dialogRef = dialogRef;
        console.log('dialog data.......', data);

        if (data) {
          this.jobData = data;
        } //this.dialogRef.updateSize('300vw','300vw');

      }

      _createClass(JobDescriptionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return JobDescriptionComponent;
    }();

    JobDescriptionComponent.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }];
    };

    JobDescriptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-job-description',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./job-description.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/job-description/job-description.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./job-description.component.css */
      "./src/app/job-description/job-description.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], JobDescriptionComponent);
    /***/
  },

  /***/
  "./src/app/jobs/jobs.component.css":
  /*!*****************************************!*\
    !*** ./src/app/jobs/jobs.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppJobsJobsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n.mat-card{\n    margin-bottom: 20px;\n}\n\n.row{\n    align-items: center;\n    display: flex;\n  justify-content: center;\n}\n\nh2{\n    padding-top: 10px;\n    padding-bottom: 10px;\n}\n\n.login-block{\n    background: #DE6262;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\nbackground: linear-gradient(to bottom, #FFB88C, #DE6262); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\nfloat:left;\nwidth:100%;\npadding : 50px 0;\n}\n\n.banner-sec{background:url(https://static.pexels.com/photos/33972/pexels-photo.jpg)  no-repeat left bottom; background-size:cover; min-height:500px; border-radius: 0 10px 10px 0; padding:0;}\n\n/* .container{background:#fff; border-radius: 10px; box-shadow:15px 20px 0px rgba(0,0,0,0.1);} */\n\n.carousel-inner{border-radius:0 10px 10px 0;}\n\n.carousel-caption{text-align:left; left:5%;}\n\n.login-sec{padding: 50px 30px; position:relative;}\n\n.login-sec .copy-text{position:absolute; width:80%; bottom:20px; font-size:13px; text-align:center;}\n\n.login-sec .copy-text i{color:#FEB58A;}\n\n.login-sec .copy-text a{color:#E36262;}\n\n.login-sec h2{margin-bottom:30px; font-weight:800; font-size:30px; color: #DE6262;}\n\n.login-sec h2:after{content:\" \"; width:100px; height:5px; background:#FEB58A; display:block; margin-top:20px; border-radius:3px; margin-left:auto;margin-right:auto}\n\n.btn-login{background: #DE6262; color:#fff; font-weight:600;margin: 0 16px;}\n\n.banner-text{width:70%; position:absolute; bottom:40px; padding-left:20px;}\n\n.banner-text h2{color:#fff; font-weight:600;}\n\n.banner-text h2:after{content:\" \"; width:100px; height:5px; background:#FFF; display:block; margin-top:20px; border-radius:3px;}\n\n.banner-text p{color:#fff;}\n\n.my-class .mat-dialog-container{\n    border-radius: 10px;\n    background: lightcyan;\n    color: #039be5;\n  }\n\n.summary{\n    margin: 0 16px;\n    padding-top: 10px;\n\n}\n\na {\n    color:white; \n    /* text-decoration: none; */\n    background-color: transparent;\n}\n\n/* .form-group{\n    display: inline-block;\n} */\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9icy9qb2JzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUNBO0lBQ0ksbUJBQW1CLEdBQUcsOEJBQThCLEdBQ1csK0JBQStCO0FBQ2xHLHdEQUF3RCxFQUFFLHFFQUFxRTtBQUMvSCxVQUFVO0FBQ1YsVUFBVTtBQUNWLGdCQUFnQjtBQUNoQjs7QUFDQSxZQUFZLDhGQUE4RixFQUFFLHFCQUFxQixFQUFFLGdCQUFnQixFQUFFLDRCQUE0QixFQUFFLFNBQVMsQ0FBQzs7QUFDN0wsZ0dBQWdHOztBQUNoRyxnQkFBZ0IsMkJBQTJCLENBQUM7O0FBQzVDLGtCQUFrQixlQUFlLEVBQUUsT0FBTyxDQUFDOztBQUMzQyxXQUFXLGtCQUFrQixFQUFFLGlCQUFpQixDQUFDOztBQUNqRCxzQkFBc0IsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQUUsaUJBQWlCLENBQUM7O0FBQ25HLHdCQUF3QixhQUFhLENBQUM7O0FBQ3RDLHdCQUF3QixhQUFhLENBQUM7O0FBQ3RDLGNBQWMsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxjQUFjLENBQUM7O0FBQ2xGLG9CQUFvQixXQUFXLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxrQkFBa0IsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixDQUFDLGlCQUFpQjs7QUFDbkssV0FBVyxtQkFBbUIsRUFBRSxVQUFVLEVBQUUsZUFBZSxDQUFDLGNBQWMsQ0FBQzs7QUFDM0UsYUFBYSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixDQUFDOztBQUMxRSxnQkFBZ0IsVUFBVSxFQUFFLGVBQWUsQ0FBQzs7QUFDNUMsc0JBQXNCLFdBQVcsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixDQUFDOztBQUMvSCxlQUFlLFVBQVUsQ0FBQzs7QUFFMUI7SUFDSSxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGNBQWM7RUFDaEI7O0FBQ0Y7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCOztBQUVyQjs7QUFFRTtJQUNFLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IsNkJBQTZCO0FBQ2pDOztBQUNBOztHQUVHIiwiZmlsZSI6InNyYy9hcHAvam9icy9qb2JzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5tYXQtY2FyZHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ucm93e1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmgye1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLmxvZ2luLWJsb2Nre1xuICAgIGJhY2tncm91bmQ6ICNERTYyNjI7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG5iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNGRkI4OEMsICNERTYyNjIpOyAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNGRkI4OEMsICNERTYyNjIpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG5mbG9hdDpsZWZ0O1xud2lkdGg6MTAwJTtcbnBhZGRpbmcgOiA1MHB4IDA7XG59XG4uYmFubmVyLXNlY3tiYWNrZ3JvdW5kOnVybChodHRwczovL3N0YXRpYy5wZXhlbHMuY29tL3Bob3Rvcy8zMzk3Mi9wZXhlbHMtcGhvdG8uanBnKSAgbm8tcmVwZWF0IGxlZnQgYm90dG9tOyBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7IG1pbi1oZWlnaHQ6NTAwcHg7IGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDA7IHBhZGRpbmc6MDt9XG4vKiAuY29udGFpbmVye2JhY2tncm91bmQ6I2ZmZjsgYm9yZGVyLXJhZGl1czogMTBweDsgYm94LXNoYWRvdzoxNXB4IDIwcHggMHB4IHJnYmEoMCwwLDAsMC4xKTt9ICovXG4uY2Fyb3VzZWwtaW5uZXJ7Ym9yZGVyLXJhZGl1czowIDEwcHggMTBweCAwO31cbi5jYXJvdXNlbC1jYXB0aW9ue3RleHQtYWxpZ246bGVmdDsgbGVmdDo1JTt9XG4ubG9naW4tc2Vje3BhZGRpbmc6IDUwcHggMzBweDsgcG9zaXRpb246cmVsYXRpdmU7fVxuLmxvZ2luLXNlYyAuY29weS10ZXh0e3Bvc2l0aW9uOmFic29sdXRlOyB3aWR0aDo4MCU7IGJvdHRvbToyMHB4OyBmb250LXNpemU6MTNweDsgdGV4dC1hbGlnbjpjZW50ZXI7fVxuLmxvZ2luLXNlYyAuY29weS10ZXh0IGl7Y29sb3I6I0ZFQjU4QTt9XG4ubG9naW4tc2VjIC5jb3B5LXRleHQgYXtjb2xvcjojRTM2MjYyO31cbi5sb2dpbi1zZWMgaDJ7bWFyZ2luLWJvdHRvbTozMHB4OyBmb250LXdlaWdodDo4MDA7IGZvbnQtc2l6ZTozMHB4OyBjb2xvcjogI0RFNjI2Mjt9XG4ubG9naW4tc2VjIGgyOmFmdGVye2NvbnRlbnQ6XCIgXCI7IHdpZHRoOjEwMHB4OyBoZWlnaHQ6NXB4OyBiYWNrZ3JvdW5kOiNGRUI1OEE7IGRpc3BsYXk6YmxvY2s7IG1hcmdpbi10b3A6MjBweDsgYm9yZGVyLXJhZGl1czozcHg7IG1hcmdpbi1sZWZ0OmF1dG87bWFyZ2luLXJpZ2h0OmF1dG99XG4uYnRuLWxvZ2lue2JhY2tncm91bmQ6ICNERTYyNjI7IGNvbG9yOiNmZmY7IGZvbnQtd2VpZ2h0OjYwMDttYXJnaW46IDAgMTZweDt9XG4uYmFubmVyLXRleHR7d2lkdGg6NzAlOyBwb3NpdGlvbjphYnNvbHV0ZTsgYm90dG9tOjQwcHg7IHBhZGRpbmctbGVmdDoyMHB4O31cbi5iYW5uZXItdGV4dCBoMntjb2xvcjojZmZmOyBmb250LXdlaWdodDo2MDA7fVxuLmJhbm5lci10ZXh0IGgyOmFmdGVye2NvbnRlbnQ6XCIgXCI7IHdpZHRoOjEwMHB4OyBoZWlnaHQ6NXB4OyBiYWNrZ3JvdW5kOiNGRkY7IGRpc3BsYXk6YmxvY2s7IG1hcmdpbi10b3A6MjBweDsgYm9yZGVyLXJhZGl1czozcHg7fVxuLmJhbm5lci10ZXh0IHB7Y29sb3I6I2ZmZjt9XG5cbi5teS1jbGFzcyAubWF0LWRpYWxvZy1jb250YWluZXJ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGN5YW47XG4gICAgY29sb3I6ICMwMzliZTU7XG4gIH1cbi5zdW1tYXJ5e1xuICAgIG1hcmdpbjogMCAxNnB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuXG59XG5cbiAgYSB7XG4gICAgY29sb3I6d2hpdGU7IFxuICAgIC8qIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi8qIC5mb3JtLWdyb3Vwe1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn0gKi9cblxuIl19 */";
    /***/
  },

  /***/
  "./src/app/jobs/jobs.component.ts":
  /*!****************************************!*\
    !*** ./src/app/jobs/jobs.component.ts ***!
    \****************************************/

  /*! exports provided: JobsComponent */

  /***/
  function srcAppJobsJobsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobsComponent", function () {
      return JobsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_carrer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../services/carrer.service */
    "./src/app/services/carrer.service.ts");
    /* harmony import */


    var _job_description_job_description_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../job-description/job-description.component */
    "./src/app/job-description/job-description.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_jobs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../services/jobs.service */
    "./src/app/services/jobs.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    _services_carrer_service__WEBPACK_IMPORTED_MODULE_1__["CarrerService"];

    var JobsComponent = /*#__PURE__*/function () {
      //@Input('formValue') formValue: any;
      function JobsComponent(jobsService, router, dialog, carrerService) {
        _classCallCheck(this, JobsComponent);

        this.jobsService = jobsService;
        this.router = router;
        this.dialog = dialog;
        this.carrerService = carrerService;
      }

      _createClass(JobsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          var id = sessionStorage.getItem("res-session");
          this.carrerService.updatedcarrerJobLink.subscribe(function (link) {
            if (link == '') {
              _this6.jobsService.getResumeTechnologies(JSON.parse(id).token).subscribe(function (res) {
                if (res[0]) {
                  _this6.resumeTechnologies = res[Object.keys(res).length - 1].technologies; //console.log('resu techs $$$$$$', this.resumeTechnologies);

                  if (_this6.resumeTechnologies.length != 0) {
                    //console.log('testing@@@@@@', res);
                    _this6.url = 'https://www.indeed.com/jobs?q=';

                    _this6.resumeTechnologies.forEach(function (item) {
                      _this6.url += '+' + item;
                    }); //console.log('fored url',this.url);


                    _this6.jobsService.getCustomJobs(_this6.url).subscribe(function (jobs) {
                      //console.log('testing jobs data@@@@@@', jobs);
                      _this6.jobsData = jobs;
                      _this6.searchTitle = "Recommended Jobs";

                      if (_this6.jobsData.length == 0) {
                        _this6.getDefaultJobs();
                      }
                    });
                  } else {
                    _this6.getDefaultJobs();
                  }
                } else {
                  _this6.getDefaultJobs();
                }
              });
            } else {
              _this6.jobsService.getCustomJobs(link).subscribe(function (res) {
                _this6.searchTitle = "Recommended Jobs";
                _this6.jobsData = res;
              });
            }
          });
          this.jobsService.updatedJobsFormData.subscribe(function (res) {
            if (res.jobKeywords != undefined) {
              _this6.getSearchedJobs(res);
            }
          });
        }
      }, {
        key: "getDefaultJobs",
        value: function getDefaultJobs() {
          var _this7 = this;

          this.jobsService.getJobs().subscribe(function (res) {
            //console.log('data jobs data44444', res);
            _this7.searchTitle = "Recommended Jobs";
            _this7.jobsData = res;
          });
        }
      }, {
        key: "getSearchedJobs",
        value: function getSearchedJobs(data) {
          var _this8 = this;

          this.searchTitle = "Searched Jobs";
          this.url = 'https://www.indeed.com/jobs?q=';
          var searchString = data.jobKeywords.toString().split(", ");
          this.url += searchString;

          if (data.location != undefined) {
            this.url += '&l=' + data.location;
          }

          this.jobsService.getCustomJobs(this.url).subscribe(function (res) {
            _this8.jobsData = res;
          });
        }
      }, {
        key: "getDescription",
        value: function getDescription(job) {
          var _this9 = this;

          this.jobsService.getJobDescription(job.link).subscribe(function (res) {
            _this9.jobDescription = res;
            job['description'] = _this9.jobDescription; // let presentJobData = {
            //   jobData: job,
            //   description: this.jobDescription
            // }

            var dialogRef = _this9.dialog.open(_job_description_job_description_component__WEBPACK_IMPORTED_MODULE_2__["JobDescriptionComponent"], {
              panelClass: 'my-class',
              height: '500px',
              width: '1000px',
              data: job
            });

            dialogRef.afterClosed().subscribe(function (result) {});
          });
        }
      }]);

      return JobsComponent;
    }();

    JobsComponent.ctorParameters = function () {
      return [{
        type: _services_jobs_service__WEBPACK_IMPORTED_MODULE_4__["JobsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
      }, {
        type: _services_carrer_service__WEBPACK_IMPORTED_MODULE_1__["CarrerService"]
      }];
    };

    JobsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-jobs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./jobs.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/jobs/jobs.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./jobs.component.css */
      "./src/app/jobs/jobs.component.css"))["default"]]
    })], JobsComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n@import url(\"//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css\");\n/* .login {\n    width: 400px;\n    margin: 16px auto;\n    font-size: 16px;\n    background-image:url('/assets/bg1.jpg') no-repeat center;\n  }\n  \n  .login-header,\n  .login p {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n  \n  .login-triangle {\n    width: 0;\n    margin-right: auto;\n    margin-left: auto;\n    border: 12px solid transparent;\n    border-bottom-color: rgb(15, 66, 107);\n  }\n  \n  .login-header {\n    background: rgb(12, 77, 129);\n    padding: 20px;\n    font-size: 1.4em;\n    font-weight: normal;\n    text-align: center;\n    text-transform: uppercase;\n    color: #fff;\n  }\n  \n  .login-container {\n    background: url('/assets/bg3.jpg') no-repeat center;\n    padding: 12px;\n    min-height: 380px;\n  }\n  \n  .login p {\n    padding: 12px;\n  }\n  \n  .login input {\n    box-sizing: border-box;\n    display: block;\n    width: 100%;\n    border-width: 1px;\n    border-style: solid;\n    padding: 16px;\n    outline: 0;\n    font-family: inherit;\n    font-size: 0.95em;\n  }\n  \n  .login input[type=\"email\"],\n  .login input[type=\"password\"] {\n    background: #fff;\n    border-color: #bbb;\n    color: #555;\n  }\n  \n  .login input[type=\"email\"]:focus,\n  .login input[type=\"password\"]:focus {\n    border-color: #888;\n  }\n  \n  .login input[type=\"submit\"] {\n    background: rgb(1, 29, 51);\n    border-color: transparent;\n    color: #fff;\n    cursor: pointer;\n  }\n  \n  .login input[type=\"submit\"]:hover {\n    background: #17c;\n  }\n  \n  .login input[type=\"submit\"]:focus {\n    border-color: #05a;\n  }\n  .has-error input[type=\"email\"],\n.has-error input[type=\"password\"] {\n    border-color: rgb(216, 12, 12);\n    color: rgb(230, 14, 14);\n}\n\n.main {\n  margin-top: 15px;\n  border-radius: 10px 135px 10px 135px;;\n  background-color: #5d4ef3;\n  background: url('/assets/bg4.jpeg') no-repeat center;\n  height: 500px;\n}\n\n.login-main-container {\n  margin-top: 15px;\n  height: auto;\n}\n\n.heading-left {\n  margin-top: 15px;\n  color: whitesmoke;\n} */\n.login-block{\n    background: #DE6262;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\nbackground: linear-gradient(to bottom, #FFB88C, #DE6262); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\nfloat:left;\nwidth:100%;\npadding : 50px 0;\n}\n.banner-sec{background:url(https://static.pexels.com/photos/33972/pexels-photo.jpg)  no-repeat left bottom; background-size:cover; min-height:500px; border-radius: 0 10px 10px 0; padding:0;}\n.container{background:#fff; border-radius: 10px; box-shadow:15px 20px 0px rgba(0,0,0,0.1);}\n.carousel-inner{border-radius:0 10px 10px 0;}\n.carousel-caption{text-align:left; left:5%;}\n.login-sec{padding: 50px 30px; position:relative;}\n.login-sec .copy-text{position:absolute; width:80%; bottom:20px; font-size:13px; text-align:center;}\n.login-sec .copy-text i{color:#FEB58A;}\n.login-sec .copy-text a{color:#E36262;}\n.login-sec h2{margin-bottom:30px; font-weight:800; font-size:30px; color: #DE6262;}\n.login-sec h2:after{content:\" \"; width:100px; height:5px; background:#FEB58A; display:block; margin-top:20px; border-radius:3px; margin-left:auto;margin-right:auto}\n.btn-login{background: #DE6262; color:#fff; font-weight:600;}\n.banner-text{width:70%; position:absolute; bottom:40px; padding-left:20px;}\n.banner-text h2{color:#fff; font-weight:600;}\n.banner-text h2:after{content:\" \"; width:100px; height:5px; background:#FFF; display:block; margin-top:20px; border-radius:3px;}\n.banner-text p{color:#fff;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQXVHQSxnRkFBZ0Y7QUF2R2hGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFHRztBQUdIO0lBQ0ksbUJBQW1CLEdBQUcsOEJBQThCLEdBQ1csK0JBQStCO0FBQ2xHLHdEQUF3RCxFQUFFLHFFQUFxRTtBQUMvSCxVQUFVO0FBQ1YsVUFBVTtBQUNWLGdCQUFnQjtBQUNoQjtBQUNBLFlBQVksOEZBQThGLEVBQUUscUJBQXFCLEVBQUUsZ0JBQWdCLEVBQUUsNEJBQTRCLEVBQUUsU0FBUyxDQUFDO0FBQzdMLFdBQVcsZUFBZSxFQUFFLG1CQUFtQixFQUFFLHdDQUF3QyxDQUFDO0FBQzFGLGdCQUFnQiwyQkFBMkIsQ0FBQztBQUM1QyxrQkFBa0IsZUFBZSxFQUFFLE9BQU8sQ0FBQztBQUMzQyxXQUFXLGtCQUFrQixFQUFFLGlCQUFpQixDQUFDO0FBQ2pELHNCQUFzQixpQkFBaUIsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQztBQUNuRyx3QkFBd0IsYUFBYSxDQUFDO0FBQ3RDLHdCQUF3QixhQUFhLENBQUM7QUFDdEMsY0FBYyxrQkFBa0IsRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLGNBQWMsQ0FBQztBQUNsRixvQkFBb0IsV0FBVyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsa0JBQWtCLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsQ0FBQyxpQkFBaUI7QUFDbkssV0FBVyxtQkFBbUIsRUFBRSxVQUFVLEVBQUUsZUFBZSxDQUFDO0FBQzVELGFBQWEsU0FBUyxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxpQkFBaUIsQ0FBQztBQUMxRSxnQkFBZ0IsVUFBVSxFQUFFLGVBQWUsQ0FBQztBQUM1QyxzQkFBc0IsV0FBVyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsaUJBQWlCLENBQUM7QUFDL0gsZUFBZSxVQUFVLENBQUMiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmxvZ2luIHtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgbWFyZ2luOiAxNnB4IGF1dG87XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKCcvYXNzZXRzL2JnMS5qcGcnKSBuby1yZXBlYXQgY2VudGVyO1xuICB9XG4gIFxuICAubG9naW4taGVhZGVyLFxuICAubG9naW4gcCB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIFxuICAubG9naW4tdHJpYW5nbGUge1xuICAgIHdpZHRoOiAwO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBib3JkZXI6IDEycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiKDE1LCA2NiwgMTA3KTtcbiAgfVxuICBcbiAgLmxvZ2luLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogcmdiKDEyLCA3NywgMTI5KTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMS40ZW07XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICBcbiAgLmxvZ2luLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2JnMy5qcGcnKSBuby1yZXBlYXQgY2VudGVyO1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgbWluLWhlaWdodDogMzgwcHg7XG4gIH1cbiAgXG4gIC5sb2dpbiBwIHtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICB9XG4gIFxuICAubG9naW4gaW5wdXQge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIG91dGxpbmU6IDA7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgZm9udC1zaXplOiAwLjk1ZW07XG4gIH1cbiAgXG4gIC5sb2dpbiBpbnB1dFt0eXBlPVwiZW1haWxcIl0sXG4gIC5sb2dpbiBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLWNvbG9yOiAjYmJiO1xuICAgIGNvbG9yOiAjNTU1O1xuICB9XG4gIFxuICAubG9naW4gaW5wdXRbdHlwZT1cImVtYWlsXCJdOmZvY3VzLFxuICAubG9naW4gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdOmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6ICM4ODg7XG4gIH1cbiAgXG4gIC5sb2dpbiBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMSwgMjksIDUxKTtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgLmxvZ2luIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICMxN2M7XG4gIH1cbiAgXG4gIC5sb2dpbiBpbnB1dFt0eXBlPVwic3VibWl0XCJdOmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6ICMwNWE7XG4gIH1cbiAgLmhhcy1lcnJvciBpbnB1dFt0eXBlPVwiZW1haWxcIl0sXG4uaGFzLWVycm9yIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjE2LCAxMiwgMTIpO1xuICAgIGNvbG9yOiByZ2IoMjMwLCAxNCwgMTQpO1xufVxuXG4ubWFpbiB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTM1cHggMTBweCAxMzVweDs7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZDRlZjM7XG4gIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9iZzQuanBlZycpIG5vLXJlcGVhdCBjZW50ZXI7XG4gIGhlaWdodDogNTAwcHg7XG59XG5cbi5sb2dpbi1tYWluLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmhlYWRpbmctbGVmdCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xufSAqL1xuXG5AaW1wb3J0IHVybChcIi8vbmV0ZG5hLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuMC4zL2Nzcy9mb250LWF3ZXNvbWUuY3NzXCIpO1xuLmxvZ2luLWJsb2Nre1xuICAgIGJhY2tncm91bmQ6ICNERTYyNjI7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG5iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNGRkI4OEMsICNERTYyNjIpOyAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNGRkI4OEMsICNERTYyNjIpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG5mbG9hdDpsZWZ0O1xud2lkdGg6MTAwJTtcbnBhZGRpbmcgOiA1MHB4IDA7XG59XG4uYmFubmVyLXNlY3tiYWNrZ3JvdW5kOnVybChodHRwczovL3N0YXRpYy5wZXhlbHMuY29tL3Bob3Rvcy8zMzk3Mi9wZXhlbHMtcGhvdG8uanBnKSAgbm8tcmVwZWF0IGxlZnQgYm90dG9tOyBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7IG1pbi1oZWlnaHQ6NTAwcHg7IGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDA7IHBhZGRpbmc6MDt9XG4uY29udGFpbmVye2JhY2tncm91bmQ6I2ZmZjsgYm9yZGVyLXJhZGl1czogMTBweDsgYm94LXNoYWRvdzoxNXB4IDIwcHggMHB4IHJnYmEoMCwwLDAsMC4xKTt9XG4uY2Fyb3VzZWwtaW5uZXJ7Ym9yZGVyLXJhZGl1czowIDEwcHggMTBweCAwO31cbi5jYXJvdXNlbC1jYXB0aW9ue3RleHQtYWxpZ246bGVmdDsgbGVmdDo1JTt9XG4ubG9naW4tc2Vje3BhZGRpbmc6IDUwcHggMzBweDsgcG9zaXRpb246cmVsYXRpdmU7fVxuLmxvZ2luLXNlYyAuY29weS10ZXh0e3Bvc2l0aW9uOmFic29sdXRlOyB3aWR0aDo4MCU7IGJvdHRvbToyMHB4OyBmb250LXNpemU6MTNweDsgdGV4dC1hbGlnbjpjZW50ZXI7fVxuLmxvZ2luLXNlYyAuY29weS10ZXh0IGl7Y29sb3I6I0ZFQjU4QTt9XG4ubG9naW4tc2VjIC5jb3B5LXRleHQgYXtjb2xvcjojRTM2MjYyO31cbi5sb2dpbi1zZWMgaDJ7bWFyZ2luLWJvdHRvbTozMHB4OyBmb250LXdlaWdodDo4MDA7IGZvbnQtc2l6ZTozMHB4OyBjb2xvcjogI0RFNjI2Mjt9XG4ubG9naW4tc2VjIGgyOmFmdGVye2NvbnRlbnQ6XCIgXCI7IHdpZHRoOjEwMHB4OyBoZWlnaHQ6NXB4OyBiYWNrZ3JvdW5kOiNGRUI1OEE7IGRpc3BsYXk6YmxvY2s7IG1hcmdpbi10b3A6MjBweDsgYm9yZGVyLXJhZGl1czozcHg7IG1hcmdpbi1sZWZ0OmF1dG87bWFyZ2luLXJpZ2h0OmF1dG99XG4uYnRuLWxvZ2lue2JhY2tncm91bmQ6ICNERTYyNjI7IGNvbG9yOiNmZmY7IGZvbnQtd2VpZ2h0OjYwMDt9XG4uYmFubmVyLXRleHR7d2lkdGg6NzAlOyBwb3NpdGlvbjphYnNvbHV0ZTsgYm90dG9tOjQwcHg7IHBhZGRpbmctbGVmdDoyMHB4O31cbi5iYW5uZXItdGV4dCBoMntjb2xvcjojZmZmOyBmb250LXdlaWdodDo2MDA7fVxuLmJhbm5lci10ZXh0IGgyOmFmdGVye2NvbnRlbnQ6XCIgXCI7IHdpZHRoOjEwMHB4OyBoZWlnaHQ6NXB4OyBiYWNrZ3JvdW5kOiNGRkY7IGRpc3BsYXk6YmxvY2s7IG1hcmdpbi10b3A6MjBweDsgYm9yZGVyLXJhZGl1czozcHg7fVxuLmJhbm5lci10ZXh0IHB7Y29sb3I6I2ZmZjt9Il19 */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(formBuilder, loginService, router) {
        _classCallCheck(this, LoginComponent);

        this.formBuilder = formBuilder;
        this.loginService = loginService;
        this.router = router;
        this.isSubmitted = false;
        this.inValidUser = false;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            //  email: ['', [Validators.required, Validators.email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]]
          });
        }
      }, {
        key: "login",
        value: function login() {
          var _this10 = this;

          this.isSubmitted = true;

          if (this.loginForm.invalid) {
            return;
          } else {
            console.log('valid form value.....', this.loginForm.value);
            this.loginService.login(this.loginForm.value).subscribe(function (res) {
              console.log('Success dashboard', res);

              if (res) {
                sessionStorage.setItem('res-session', JSON.stringify(res));

                _this10.router.navigate(['dashboard']);
              }
            }, function (err) {
              console.log('Invalid user credentials', err);
              _this10.inValidUser = true;
              _this10.errorMessage = err.error.message;
            });
          }
        }
      }, {
        key: "f",
        get: function get() {
          return this.loginForm.controls;
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/register/register.component.css":
  /*!*************************************************!*\
    !*** ./src/app/register/register.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegisterRegisterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n\n@import url(\"//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css\");\n/* .login {\n    width: 400px;\n    margin: 16px auto;\n    font-size: 16px;\n  }\n  \n  .login-header,\n  .login p {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n  \n  .login-triangle {\n    width: 0;\n    margin-right: auto;\n    margin-left: auto;\n    border: 12px solid transparent;\n    border-bottom-color: rgb(15, 66, 107);\n  }\n  \n  .login-header {\n    background: rgb(12, 77, 129);\n    padding: 20px;\n    font-size: 1.4em;\n    font-weight: normal;\n    text-align: center;\n    text-transform: uppercase;\n    color: #fff;\n  }\n  \n  .login-container {\n    background: #ebebeb;\n    padding: 12px;\n  }\n  \n  .login p {\n    padding: 12px;\n  }\n  \n  .login input {\n    box-sizing: border-box;\n    display: block;\n    width: 100%;\n    border-width: 1px;\n    border-style: solid;\n    padding: 16px;\n    outline: 0;\n    font-family: inherit;\n    font-size: 0.95em;\n  }\n  \n  .login input[type=\"email\"],\n  .login input[type=\"password\"] {\n    background: #fff;\n    border-color: #bbb;\n    color: #555;\n  }\n  \n  .login input[type=\"email\"]:focus,\n  .login input[type=\"password\"]:focus {\n    border-color: #888;\n  }\n  \n  .login input[type=\"submit\"] {\n    background: rgb(1, 29, 51);\n    border-color: transparent;\n    color: #fff;\n    cursor: pointer;\n  }\n  \n  .login input[type=\"submit\"]:hover {\n    background: #17c;\n  }\n  \n  .login input[type=\"submit\"]:focus {\n    border-color: #05a;\n  }\n  .has-error input[type=\"email\"],\n.has-error input[type=\"password\"] {\n    border-color: rgb(216, 12, 12);\n    color: rgb(230, 14, 14);\n} */\n.login-block{\n    background: #DE6262;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\nbackground: linear-gradient(to bottom, #FFB88C, #DE6262); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\nfloat:left;\nwidth:100%;\npadding : 50px 0;\n}\n.banner-sec{background:url(https://static.pexels.com/photos/33972/pexels-photo.jpg)  no-repeat left bottom; background-size:cover; min-height:500px; border-radius: 0 10px 10px 0; padding:0;}\n.container{background:#fff; border-radius: 10px; box-shadow:15px 20px 0px rgba(0,0,0,0.1);}\n.carousel-inner{border-radius:0 10px 10px 0;}\n.carousel-caption{text-align:left; left:5%;}\n.login-sec{padding: 50px 30px; position:relative;}\n.login-sec .copy-text{position:absolute; width:80%; bottom:20px; font-size:13px; text-align:center;}\n.login-sec .copy-text i{color:#FEB58A;}\n.login-sec .copy-text a{color:#E36262;}\n.login-sec h2{margin-bottom:30px; font-weight:800; font-size:30px; color: #DE6262;}\n.login-sec h2:after{content:\" \"; width:100px; height:5px; background:#FEB58A; display:block; margin-top:20px; border-radius:3px; margin-left:auto;margin-right:auto}\n.btn-login{background: #DE6262; color:#fff; font-weight:600;}\n.banner-text{width:70%; position:absolute; bottom:40px; padding-left:20px;}\n.banner-text h2{color:#fff; font-weight:600;}\n.banner-text h2:after{content:\" \"; width:100px; height:5px; background:#FFF; display:block; margin-top:20px; border-radius:3px;}\n.banner-text p{color:#fff;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFxRkEsZ0ZBQWdGO0FBcEZoRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUZHO0FBSUg7SUFDSSxtQkFBbUIsR0FBRyw4QkFBOEIsR0FDVywrQkFBK0I7QUFDbEcsd0RBQXdELEVBQUUscUVBQXFFO0FBQy9ILFVBQVU7QUFDVixVQUFVO0FBQ1YsZ0JBQWdCO0FBQ2hCO0FBQ0EsWUFBWSw4RkFBOEYsRUFBRSxxQkFBcUIsRUFBRSxnQkFBZ0IsRUFBRSw0QkFBNEIsRUFBRSxTQUFTLENBQUM7QUFDN0wsV0FBVyxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsd0NBQXdDLENBQUM7QUFDMUYsZ0JBQWdCLDJCQUEyQixDQUFDO0FBQzVDLGtCQUFrQixlQUFlLEVBQUUsT0FBTyxDQUFDO0FBQzNDLFdBQVcsa0JBQWtCLEVBQUUsaUJBQWlCLENBQUM7QUFDakQsc0JBQXNCLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixDQUFDO0FBQ25HLHdCQUF3QixhQUFhLENBQUM7QUFDdEMsd0JBQXdCLGFBQWEsQ0FBQztBQUN0QyxjQUFjLGtCQUFrQixFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDO0FBQ2xGLG9CQUFvQixXQUFXLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxrQkFBa0IsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixDQUFDLGlCQUFpQjtBQUNuSyxXQUFXLG1CQUFtQixFQUFFLFVBQVUsRUFBRSxlQUFlLENBQUM7QUFDNUQsYUFBYSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixDQUFDO0FBQzFFLGdCQUFnQixVQUFVLEVBQUUsZUFBZSxDQUFDO0FBQzVDLHNCQUFzQixXQUFXLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxpQkFBaUIsQ0FBQztBQUMvSCxlQUFlLFVBQVUsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIC5sb2dpbiB7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIG1hcmdpbjogMTZweCBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICBcbiAgLmxvZ2luLWhlYWRlcixcbiAgLmxvZ2luIHAge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuICBcbiAgLmxvZ2luLXRyaWFuZ2xlIHtcbiAgICB3aWR0aDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgYm9yZGVyOiAxMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYigxNSwgNjYsIDEwNyk7XG4gIH1cbiAgXG4gIC5sb2dpbi1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYigxMiwgNzcsIDEyOSk7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBmb250LXNpemU6IDEuNGVtO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgXG4gIC5sb2dpbi1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6ICNlYmViZWI7XG4gICAgcGFkZGluZzogMTJweDtcbiAgfVxuICBcbiAgLmxvZ2luIHAge1xuICAgIHBhZGRpbmc6IDEycHg7XG4gIH1cbiAgXG4gIC5sb2dpbiBpbnB1dCB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgb3V0bGluZTogMDtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBmb250LXNpemU6IDAuOTVlbTtcbiAgfVxuICBcbiAgLmxvZ2luIGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcbiAgLmxvZ2luIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItY29sb3I6ICNiYmI7XG4gICAgY29sb3I6ICM1NTU7XG4gIH1cbiAgXG4gIC5sb2dpbiBpbnB1dFt0eXBlPVwiZW1haWxcIl06Zm9jdXMsXG4gIC5sb2dpbiBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl06Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogIzg4ODtcbiAgfVxuICBcbiAgLmxvZ2luIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xuICAgIGJhY2tncm91bmQ6IHJnYigxLCAyOSwgNTEpO1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICAubG9naW4gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzE3YztcbiAgfVxuICBcbiAgLmxvZ2luIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogIzA1YTtcbiAgfVxuICAuaGFzLWVycm9yIGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcbi5oYXMtZXJyb3IgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcbiAgICBib3JkZXItY29sb3I6IHJnYigyMTYsIDEyLCAxMik7XG4gICAgY29sb3I6IHJnYigyMzAsIDE0LCAxNCk7XG59ICovXG5cblxuQGltcG9ydCB1cmwoXCIvL25ldGRuYS5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjAuMy9jc3MvZm9udC1hd2Vzb21lLmNzc1wiKTtcbi5sb2dpbi1ibG9ja3tcbiAgICBiYWNrZ3JvdW5kOiAjREU2MjYyOyAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xuYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjRkZCODhDLCAjREU2MjYyKTsgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjRkZCODhDLCAjREU2MjYyKTsgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xuZmxvYXQ6bGVmdDtcbndpZHRoOjEwMCU7XG5wYWRkaW5nIDogNTBweCAwO1xufVxuLmJhbm5lci1zZWN7YmFja2dyb3VuZDp1cmwoaHR0cHM6Ly9zdGF0aWMucGV4ZWxzLmNvbS9waG90b3MvMzM5NzIvcGV4ZWxzLXBob3RvLmpwZykgIG5vLXJlcGVhdCBsZWZ0IGJvdHRvbTsgYmFja2dyb3VuZC1zaXplOmNvdmVyOyBtaW4taGVpZ2h0OjUwMHB4OyBib3JkZXItcmFkaXVzOiAwIDEwcHggMTBweCAwOyBwYWRkaW5nOjA7fVxuLmNvbnRhaW5lcntiYWNrZ3JvdW5kOiNmZmY7IGJvcmRlci1yYWRpdXM6IDEwcHg7IGJveC1zaGFkb3c6MTVweCAyMHB4IDBweCByZ2JhKDAsMCwwLDAuMSk7fVxuLmNhcm91c2VsLWlubmVye2JvcmRlci1yYWRpdXM6MCAxMHB4IDEwcHggMDt9XG4uY2Fyb3VzZWwtY2FwdGlvbnt0ZXh0LWFsaWduOmxlZnQ7IGxlZnQ6NSU7fVxuLmxvZ2luLXNlY3twYWRkaW5nOiA1MHB4IDMwcHg7IHBvc2l0aW9uOnJlbGF0aXZlO31cbi5sb2dpbi1zZWMgLmNvcHktdGV4dHtwb3NpdGlvbjphYnNvbHV0ZTsgd2lkdGg6ODAlOyBib3R0b206MjBweDsgZm9udC1zaXplOjEzcHg7IHRleHQtYWxpZ246Y2VudGVyO31cbi5sb2dpbi1zZWMgLmNvcHktdGV4dCBpe2NvbG9yOiNGRUI1OEE7fVxuLmxvZ2luLXNlYyAuY29weS10ZXh0IGF7Y29sb3I6I0UzNjI2Mjt9XG4ubG9naW4tc2VjIGgye21hcmdpbi1ib3R0b206MzBweDsgZm9udC13ZWlnaHQ6ODAwOyBmb250LXNpemU6MzBweDsgY29sb3I6ICNERTYyNjI7fVxuLmxvZ2luLXNlYyBoMjphZnRlcntjb250ZW50OlwiIFwiOyB3aWR0aDoxMDBweDsgaGVpZ2h0OjVweDsgYmFja2dyb3VuZDojRkVCNThBOyBkaXNwbGF5OmJsb2NrOyBtYXJnaW4tdG9wOjIwcHg7IGJvcmRlci1yYWRpdXM6M3B4OyBtYXJnaW4tbGVmdDphdXRvO21hcmdpbi1yaWdodDphdXRvfVxuLmJ0bi1sb2dpbntiYWNrZ3JvdW5kOiAjREU2MjYyOyBjb2xvcjojZmZmOyBmb250LXdlaWdodDo2MDA7fVxuLmJhbm5lci10ZXh0e3dpZHRoOjcwJTsgcG9zaXRpb246YWJzb2x1dGU7IGJvdHRvbTo0MHB4OyBwYWRkaW5nLWxlZnQ6MjBweDt9XG4uYmFubmVyLXRleHQgaDJ7Y29sb3I6I2ZmZjsgZm9udC13ZWlnaHQ6NjAwO31cbi5iYW5uZXItdGV4dCBoMjphZnRlcntjb250ZW50OlwiIFwiOyB3aWR0aDoxMDBweDsgaGVpZ2h0OjVweDsgYmFja2dyb3VuZDojRkZGOyBkaXNwbGF5OmJsb2NrOyBtYXJnaW4tdG9wOjIwcHg7IGJvcmRlci1yYWRpdXM6M3B4O31cbi5iYW5uZXItdGV4dCBwe2NvbG9yOiNmZmY7fSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/register/register.component.ts":
  /*!************************************************!*\
    !*** ./src/app/register/register.component.ts ***!
    \************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../services/register.service */
    "./src/app/services/register.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(formBuilder, router, registerService) {
        _classCallCheck(this, RegisterComponent);

        this.formBuilder = formBuilder;
        this.router = router;
        this.registerService = registerService;
        this.isSubmitted = false;
        this.isUsernameValid = false;
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.registrationForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          }, {
            validator: this.MustMatch('password', 'confirmPassword')
          });
        }
      }, {
        key: "MustMatch",
        value: function MustMatch(controlName, matchingControlName) {
          return function (formGroup) {
            var control = formGroup.controls[controlName];
            var matchingControl = formGroup.controls[matchingControlName];

            if (matchingControl.errors && !matchingControl.errors.mustMatch) {
              // return if another validator has already found an error on the matchingControl
              return;
            } // set error on matchingControl if validation fails


            if (control.value !== matchingControl.value) {
              matchingControl.setErrors({
                mustMatch: true
              });
            } else {
              matchingControl.setErrors(null);
            }
          };
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this11 = this;

          this.isSubmitted = true;

          if (this.registrationForm.invalid) {
            return;
          } else {
            this.registerService.saveUser(this.registrationForm.value).subscribe(function (res) {
              console.log('Response from register......', res);

              _this11.router.navigate(['login']);
            }, function (err) {
              console.log('Err Response from register......', err);
              _this11.isUsernameValid = true;
            });
          } //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registrationForm.value))

        }
      }, {
        key: "f",
        get: function get() {
          return this.registrationForm.controls;
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _services_register_service__WEBPACK_IMPORTED_MODULE_1__["RegisterService"]
      }];
    };

    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.component.css */
      "./src/app/register/register.component.css"))["default"]]
    })], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/services/carrer.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/carrer.service.ts ***!
    \********************************************/

  /*! exports provided: CarrerService */

  /***/
  function srcAppServicesCarrerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarrerService", function () {
      return CarrerService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var CarrerService = /*#__PURE__*/function () {
      function CarrerService(http) {
        _classCallCheck(this, CarrerService);

        this.http = http;
        this.carrerSearchValue = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('United States');
        this.updatedcarrerSearchValue = this.carrerSearchValue.asObservable();
        this.carrerJobLink = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.updatedcarrerJobLink = this.carrerJobLink.asObservable();
      }

      _createClass(CarrerService, [{
        key: "updatecarrerSearchValue",
        value: function updatecarrerSearchValue(data) {
          this.carrerSearchValue.next(data);
        }
      }, {
        key: "updatecarrerJobLink",
        value: function updatecarrerJobLink(data) {
          this.carrerJobLink.next(data);
        }
      }, {
        key: "getCarrersData",
        value: function getCarrersData(value) {
          var body = {
            data: value
          }; //return this.http.post('http://localhost:3000/carrer/stats', body);

          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].serverurl + '/carrer/stats', body);
        }
      }, {
        key: "getTopCompanies",
        value: function getTopCompanies(value) {
          var body = {
            data: value
          }; //return this.http.post('http://localhost:3000/carrer/topcompanies', body);

          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].serverurl + '/carrer/topcompanies', body);
        }
      }, {
        key: "getTopSalaries",
        value: function getTopSalaries(value) {
          var body = {
            data: value
          }; //return this.http.post('http://localhost:3000/carrer/topsalaries', body);

          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].serverurl + '/carrer/topsalaries', body);
        }
      }]);

      return CarrerService;
    }();

    CarrerService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CarrerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CarrerService);
    /***/
  },

  /***/
  "./src/app/services/jobs.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/jobs.service.ts ***!
    \******************************************/

  /*! exports provided: JobsService */

  /***/
  function srcAppServicesJobsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobsService", function () {
      return JobsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var JobsService = /*#__PURE__*/function () {
      function JobsService(http) {
        _classCallCheck(this, JobsService);

        this.http = http;
        this.jobsFormData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
        this.updatedJobsFormData = this.jobsFormData.asObservable();
      }

      _createClass(JobsService, [{
        key: "updateFormData",
        value: function updateFormData(data) {
          this.jobsFormData.next(data);
        }
      }, {
        key: "getResumeTechnologies",
        value: function getResumeTechnologies(data) {
          console.log('data....', data);
          var body = {
            id: data
          }; // return this.http.post('http://localhost:3000/jobs/technologies',body);

          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].serverurl + '/jobs/technologies', body);
        }
      }, {
        key: "getJobs",
        value: function getJobs() {
          //return this.http.get('http://localhost:3000/jobs');
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].serverurl + '/jobs');
        }
      }, {
        key: "getCustomJobs",
        value: function getCustomJobs(data) {
          var body = {
            url: data
          }; //return this.http.post('http://localhost:3000/jobs/custom',body);

          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].serverurl + '/jobs/custom', body);
        }
      }, {
        key: "getJobDescription",
        value: function getJobDescription(data) {
          console.log('data in service file', data);
          var body = {
            link: data
          }; //return this.http.post('http://localhost:3000/jobs/description',body);

          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].serverurl + '/jobs/custom', body);
        }
      }]);

      return JobsService;
    }();

    JobsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    JobsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], JobsService);
    /***/
  },

  /***/
  "./src/app/services/login.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/login.service.ts ***!
    \*******************************************/

  /*! exports provided: LoginService */

  /***/
  function srcAppServicesLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var LoginService = /*#__PURE__*/function () {
      function LoginService(http, router) {
        _classCallCheck(this, LoginService);

        this.http = http;
        this.router = router;
        this.userLoggedin = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.update = this.userLoggedin.asObservable();
      }

      _createClass(LoginService, [{
        key: "loggedIn",
        value: function loggedIn(value) {
          this.userLoggedin.next(value);
        }
      }, {
        key: "login",
        value: function login(userData) {
          // return this.http.post('http://localhost:3000/login',userData);
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].serverurl + '/login', userData);
        }
      }, {
        key: "logOut",
        value: function logOut() {
          sessionStorage.removeItem("res-session");
          this.router.navigate(['/login']);
        }
      }]);

      return LoginService;
    }();

    LoginService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LoginService);
    /***/
  },

  /***/
  "./src/app/services/register.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/register.service.ts ***!
    \**********************************************/

  /*! exports provided: RegisterService */

  /***/
  function srcAppServicesRegisterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterService", function () {
      return RegisterService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var RegisterService = /*#__PURE__*/function () {
      function RegisterService(http) {
        _classCallCheck(this, RegisterService);

        this.http = http;
      }

      _createClass(RegisterService, [{
        key: "saveUser",
        value: function saveUser(registerData) {
          // return this.http.post('http://localhost:3000/register',registerData);
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverurl + '/register', registerData);
        }
      }]);

      return RegisterService;
    }();

    RegisterService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    RegisterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], RegisterService);
    /***/
  },

  /***/
  "./src/app/services/upload.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/upload.service.ts ***!
    \********************************************/

  /*! exports provided: UploadService */

  /***/
  function srcAppServicesUploadServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadService", function () {
      return UploadService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var UploadService = /*#__PURE__*/function () {
      function UploadService(http) {
        _classCallCheck(this, UploadService);

        this.http = http;
      }

      _createClass(UploadService, [{
        key: "uploadResume",
        value: function uploadResume(data) {
          //let userId = sessionStorage.getItem("res-session");
          // let uploadData = {
          //   userId : sessionStorage.getItem("res-session"),
          //   data : data
          // }
          //return this.http.post<any>('http://localhost:3000/uploadfile', data);
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverurl + '/uploadfile', data);
        }
      }]);

      return UploadService;
    }();

    UploadService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UploadService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      serverurl: 'http://localhost:3000'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/lavanya/Desktop/ASE-Project/front-end/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map