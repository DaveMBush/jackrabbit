webpackJsonp(["thankyou.module"],{

/***/ "../../../../../src/app/routes/thankyou/thankyou.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/thankyou/thankyou.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-offset-3 col-sm-6\">\n      Thank you for your subscription!\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/routes/thankyou/thankyou.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThankyouComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThankyouComponent = (function () {
    function ThankyouComponent() {
    }
    ThankyouComponent.prototype.ngOnInit = function () {
    };
    ThankyouComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-thankyou',
            template: __webpack_require__("../../../../../src/app/routes/thankyou/thankyou.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/thankyou/thankyou.component.css")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], ThankyouComponent);
    return ThankyouComponent;
}());

//# sourceMappingURL=thankyou.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/thankyou/thankyou.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankyouModule", function() { return ThankyouModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__thankyou_component__ = __webpack_require__("../../../../../src/app/routes/thankyou/thankyou.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ThankyouModule = (function () {
    function ThankyouModule() {
    }
    ThankyouModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild([{
                        path: '',
                        pathMatch: 'full',
                        component: __WEBPACK_IMPORTED_MODULE_3__thankyou_component__["a" /* ThankyouComponent */]
                    }])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__thankyou_component__["a" /* ThankyouComponent */]]
        })
    ], ThankyouModule);
    return ThankyouModule;
}());

//# sourceMappingURL=thankyou.module.js.map

/***/ })

});
//# sourceMappingURL=thankyou.module.chunk.js.map