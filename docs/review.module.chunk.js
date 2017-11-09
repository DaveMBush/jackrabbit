webpackJsonp(["review.module"],{

/***/ "../../../../../src/app/routes/review/review.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/review/review.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <ol class=\"breadcrumb\">\n    <li>\n      <a [routerLink]=\"['/contact']\">Login Information</a>\n    </li>\n    <li>\n      <a [routerLink]=\"['/subscription']\">Subscription</a>\n    </li>\n    <li>Review</li>\n  </ol>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-offset-3 col-sm-6\">\n        Review your choices:\n      </div>\n    </div>\n    <form class=\"form-horizontal\">\n      <div class=\"form-group\">\n        <label for=\"name\" class=\"col-sm-offset-3 col-sm-2 control-label\">Name:</label>\n        <div class=\"col-sm-4 form-control-static\">\n          {{(subscription | async)?.name}}\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"name\" class=\"col-sm-offset-3 col-sm-2 control-label\">Email Address:</label>\n        <div class=\"col-sm-4 form-control-static\">\n          {{(subscription | async)?.email}}\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"name\" class=\"col-sm-offset-3 col-sm-2 control-label\">Password:</label>\n        <div class=\"col-sm-4 form-control-static\">\n          **********\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"name\" class=\"col-sm-offset-3 col-sm-2 control-label\">Subscription Level:</label>\n        <div class=\"col-sm-4 form-control-static\">\n          {{(subscription | async)?.subscription}}\n        </div>\n      </div>\n    </form>\n    <div class=\"row\">\n      <div class=\"col-sm-offset-3 col-sm-6\">\n        <button (click)=\"prev($event)\" class=\"btn btn-default pull-left\">\n          <i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i> Prev\n        </button>\n        <button (click)=\"next($event)\" class=\"btn btn-primary pull-right\">\n          <i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i> Submit\n        </button>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/routes/review/review.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReviewComponent = (function () {
    function ReviewComponent(router, store) {
        this.router = router;
        this.store = store;
        this.subscription = this.store.select(function (x) { return x.shared.subscription; });
    }
    ReviewComponent.prototype.ngOnInit = function () {
    };
    /* istanbul ignore next - trivial */
    ReviewComponent.prototype.prev = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.router.navigate(['/subscription']);
    };
    /* istanbul ignore next - trivial */
    ReviewComponent.prototype.next = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.router.navigate(['/thankyou']);
    };
    ReviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
            selector: 'app-review',
            template: __webpack_require__("../../../../../src/app/routes/review/review.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/review/review.component.css")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _b || Object])
    ], ReviewComponent);
    return ReviewComponent;
    var _a, _b;
}());

//# sourceMappingURL=review.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/review/review.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewModule", function() { return ReviewModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__review_component__ = __webpack_require__("../../../../../src/app/routes/review/review.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ReviewModule = (function () {
    function ReviewModule() {
    }
    ReviewModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild([{
                        path: '',
                        pathMatch: 'full',
                        component: __WEBPACK_IMPORTED_MODULE_3__review_component__["a" /* ReviewComponent */]
                    }])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__review_component__["a" /* ReviewComponent */]]
        })
    ], ReviewModule);
    return ReviewModule;
}());

//# sourceMappingURL=review.module.js.map

/***/ })

});
//# sourceMappingURL=review.module.chunk.js.map