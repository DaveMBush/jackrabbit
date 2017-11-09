webpackJsonp(["file-not-found.module"],{

/***/ "../../../../../src/app/routes/file-not-found/file-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/file-not-found/file-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <p>\r\n    file-not-found works!\r\n  </p>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/file-not-found/file-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileNotFoundComponent; });
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

var FileNotFoundComponent = (function () {
    function FileNotFoundComponent() {
    }
    FileNotFoundComponent.prototype.ngOnInit = function () {
    };
    FileNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-file-not-found',
            template: __webpack_require__("../../../../../src/app/routes/file-not-found/file-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/file-not-found/file-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FileNotFoundComponent);
    return FileNotFoundComponent;
}());

//# sourceMappingURL=file-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/file-not-found/file-not-found.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileNotFoundModule", function() { return FileNotFoundModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__file_not_found_component__ = __webpack_require__("../../../../../src/app/routes/file-not-found/file-not-found.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FileNotFoundModule = (function () {
    function FileNotFoundModule() {
    }
    FileNotFoundModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild([{
                        path: '',
                        pathMatch: 'full',
                        component: __WEBPACK_IMPORTED_MODULE_3__file_not_found_component__["a" /* FileNotFoundComponent */]
                    }])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__file_not_found_component__["a" /* FileNotFoundComponent */]]
        })
    ], FileNotFoundModule);
    return FileNotFoundModule;
}());

//# sourceMappingURL=file-not-found.module.js.map

/***/ })

});
//# sourceMappingURL=file-not-found.module.chunk.js.map