webpackJsonp(["contact.module"],{

/***/ "../../../../../src/app/routes/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb\">\n  <li class=\"active\">Login Information</li>\n  <li class=\"disabled\">Subscription</li>\n  <li class=\"disabled\">Review</li>\n</ol>\n<div class=\"container\">\n  <form class=\"form-horizontal\" [formGroup]=\"form\">\n    <div class=\"form-group\">\n      <label for=\"name\" class=\"col-sm-offset-3 col-sm-2 control-label\">Name</label>\n      <div class=\"col-sm-4\">\n        <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Enter your name\">\n      </div>\n    </div>\n    <div class=\"col-sm-offset-5 error\" *ngIf=\"form.get('name').invalid && form.get('name').dirty\">Name is required!</div>\n    <div class=\"form-group\">\n      <label for=\"email\" class=\"col-sm-offset-3 col-sm-2 control-label\">Email Address</label>\n      <div class=\"col-sm-4\">\n        <input formControlName=\"email\" type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter your email address\">\n      </div>\n    </div>\n    <div class=\"col-sm-offset-5 error\" *ngIf=\"form.get('email').hasError('required') && form.get('email').dirty\">Email Address is required!</div>\n    <div class=\"col-sm-offset-5 error\" *ngIf=\"form.get('email').hasError('email') && form.get('email').dirty\">Invalid Email Address!</div>\n    <div class=\"form-group\">\n      <label for=\"password\" class=\"col-sm-offset-3 col-sm-2 control-label\">Password</label>\n      <div class=\"col-sm-4\">\n        <input formControlName=\"password\" type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Enter your password\">\n      </div>\n    </div>\n    <div class=\"col-sm-offset-5 error\" *ngIf=\"form.get('password').invalid && form.get('password').dirty\">Password is required!</div>\n    <div class=\"row\">\n      <div class=\"col-sm-offset-5 col-sm-4\">\n        <button (click)=\"next($event)\" class=\"btn btn-primary pull-right\" [disabled]=\"!form.valid\">Next\n          <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/routes/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_subscription_subscription_actions__ = __webpack_require__("../../../../../src/app/shared/subscription/subscription.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactComponent = (function () {
    function ContactComponent(formBuilder, router, store) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.store = store;
        this.form = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["d" /* Validators */].required],
            email: ['', [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["d" /* Validators */].email]],
            password: ['', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["d" /* Validators */].required]
        });
        this.editEntity = this.store.select(function (x) { return x.shared.subscription; });
    }
    /* istanbul ignore next - trivial*/
    ContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formSubscription =
            this.form.valueChanges.subscribe(function (x) {
                return _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__shared_subscription_subscription_actions__["b" /* Update */](x));
            });
        this.editEntitySubscription =
            this.editEntity.subscribe(function (x) {
                return _this.form.patchValue(x, { emitEvent: false });
            });
    };
    /* istanbul ignore next - trivial */
    ContactComponent.prototype.next = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.router.navigate(['/subscription']);
    };
    ContactComponent.prototype.ngOnDestroy = function () {
        this.formSubscription.unsubscribe();
        this.editEntitySubscription.unsubscribe();
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/routes/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/contact/contact.component.css")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_2__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _c || Object])
    ], ContactComponent);
    return ContactComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/contact/contact.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactModule", function() { return ContactModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_component__ = __webpack_require__("../../../../../src/app/routes/contact/contact.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ContactModule = (function () {
    function ContactModule() {
    }
    ContactModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([{
                        path: '',
                        pathMatch: 'full',
                        component: __WEBPACK_IMPORTED_MODULE_4__contact_component__["a" /* ContactComponent */]
                    }])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__contact_component__["a" /* ContactComponent */]]
        })
    ], ContactModule);
    return ContactModule;
}());

//# sourceMappingURL=contact.module.js.map

/***/ })

});
//# sourceMappingURL=contact.module.chunk.js.map