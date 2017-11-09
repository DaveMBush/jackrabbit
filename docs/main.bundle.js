webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./routes/contact/contact.module": [
		"../../../../../src/app/routes/contact/contact.module.ts",
		"contact.module"
	],
	"./routes/file-not-found/file-not-found.module": [
		"../../../../../src/app/routes/file-not-found/file-not-found.module.ts",
		"file-not-found.module"
	],
	"./routes/review/review.module": [
		"../../../../../src/app/routes/review/review.module.ts",
		"review.module"
	],
	"./routes/subscription/subscription.module": [
		"../../../../../src/app/routes/subscription/subscription.module.ts",
		"subscription.module"
	],
	"./routes/thankyou/thankyou.module": [
		"../../../../../src/app/routes/thankyou/thankyou.module.ts",
		"thankyou.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_guard__ = __webpack_require__("../../../../../src/app/shared/guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        redirectTo: 'contact',
        pathMatch: 'full'
    }, {
        path: 'contact',
        loadChildren: './routes/contact/contact.module#ContactModule',
        data: { state: 'contact' }
    }, {
        path: 'subscription',
        canLoad: [__WEBPACK_IMPORTED_MODULE_0__shared_guard__["a" /* Guard */]],
        loadChildren: './routes/subscription/subscription.module#SubscriptionModule',
        data: { state: 'subscription' }
    }, {
        path: 'review',
        canLoad: [__WEBPACK_IMPORTED_MODULE_0__shared_guard__["a" /* Guard */]],
        loadChildren: './routes/review/review.module#ReviewModule',
        data: { state: 'review' }
    }, {
        path: 'thankyou',
        canLoad: [__WEBPACK_IMPORTED_MODULE_0__shared_guard__["a" /* Guard */]],
        loadChildren: './routes/thankyou/thankyou.module#ThankyouModule',
        data: { state: 'thankyou' }
    }, {
        path: 'file-not-found',
        loadChildren: './routes/file-not-found/file-not-found.module#FileNotFoundModule'
    }, {
        path: '**',
        redirectTo: 'file-not-found'
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-wait *ngIf=\"(wait | async) > 0\">\n</app-wait>\n<app-errors *ngIf=\"(errors | async)?.length > 0\" [data]=\"(errors | async)\">\n</app-errors>\n<nav class=\"navbar navbar-default\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <div class=\"navbar-brand\">\n        Jackrabbit Subscription\n      </div>\n    </div>\n  </div>\n</nav>\n<!-- router stuff overrides the class -->\n<div [@routerTransition]=\"getState(o)\">\n  <router-outlet #o=\"outlet\"></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_router_transition__ = __webpack_require__("../../../../../src/app/shared/router.transition.ts");
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



var AppComponent = (function () {
    function AppComponent(store) {
        this.wait = store.select(/* istanbul ignore next */ function (x) { return x.shared.wait; });
        this.errors = store.select(/* istanbul ignore next */ function (x) { return x.shared.errors; });
    }
    /* istanbul ignore next - trivial */
    AppComponent.prototype.getState = function (outlet) {
        return outlet.activatedRouteData.state;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["k" /* ChangeDetectionStrategy */].OnPush,
            animations: [__WEBPACK_IMPORTED_MODULE_0__shared_router_transition__["a" /* routerTransition */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _a || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["c" /* StoreModule */].forRoot({}),
                __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["c" /* EffectsModule */].forRoot([]),
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/errors/errors.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD; });
/* unused harmony export Add */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Clear; });
// tslint:disable:typedef
var ADD = 'Errors.Add';
/* istanbul ignore next - trivial */
var Add = (function () {
    function Add(message) {
        this.message = message;
        this.type = ADD;
    }
    return Add;
}());

var CLEAR = 'Errors.Clear';
/* istanbul ignore next - trivial */
var Clear = (function () {
    function Clear() {
        this.type = CLEAR;
    }
    return Clear;
}());

//# sourceMappingURL=errors.actions.js.map

/***/ }),

/***/ "../../../../../src/app/shared/errors/errors.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".overlay {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: gray;\r\n    z-index: 1;\r\n    opacity: 0.5;\r\n}\r\n\r\n.modal {\r\n    display: block;\r\n    top: 25%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/errors/errors.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay\"></div>\r\n<div class=\"modal\" tabindex=\"-1\"\r\n    role=\"dialog\">\r\n  <div class=\"modal-dialog\"\r\n    role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Errors</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p *ngFor=\"let item of data\">{{item}}</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" (click)=\"clear()\" \r\n        class=\"btn btn-default\">OK</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/errors/errors.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__errors_actions__ = __webpack_require__("../../../../../src/app/shared/errors/errors.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ErrorsComponent = (function () {
    function ErrorsComponent(store) {
        this.store = store;
        this.data = [];
    }
    ErrorsComponent.prototype.ngOnInit = function () {
    };
    /* istanbul ignore next - trivial */
    ErrorsComponent.prototype.clear = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__errors_actions__["c" /* Clear */]());
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], ErrorsComponent.prototype, "data", void 0);
    ErrorsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-errors',
            template: __webpack_require__("../../../../../src/app/shared/errors/errors.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/errors/errors.component.css")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _a || Object])
    ], ErrorsComponent);
    return ErrorsComponent;
    var _a;
}());

//# sourceMappingURL=errors.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/errors/errors.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export errorsReducer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorsReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__errors_actions__ = __webpack_require__("../../../../../src/app/shared/errors/errors.actions.ts");

function errorsReducer(
    // tslint:disable-next-line:typedef
    state, action) {
    // tslint:disable-next-line:typedef
    if (state === void 0) { state = []; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__errors_actions__["a" /* ADD */]:
            return state.concat([action.message]);
        case __WEBPACK_IMPORTED_MODULE_0__errors_actions__["b" /* CLEAR */]:
            return [];
        default:
            return state;
    }
}
;
var ErrorsReducer = errorsReducer;
//# sourceMappingURL=errors.reducer.js.map

/***/ }),

/***/ "../../../../../src/app/shared/guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Guard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Guard = (function () {
    function Guard(store, router) {
        this.store = store;
        this.router = router;
    }
    Guard.prototype.canLoad = function (route) {
        var _this = this;
        this.store.select(function (x) { return x.shared.subscription; })
            .filter(function (subscription) { return subscription.email.length === 0; })
            .subscribe(function () {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].timer(200)
                .subscribe(function () { return _this.router.navigate(['/contact']); });
        });
        return true;
    };
    Guard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])() // need injectable to make the tests work
        ,
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
    ], Guard);
    return Guard;
    var _a, _b;
}());

//# sourceMappingURL=guard.js.map

/***/ }),

/***/ "../../../../../src/app/shared/router.transition.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routerTransition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");

var routerTransition = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])('routerTransition', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])('* <=> *', [
        /* order */
        /* 1 */ Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':enter, :leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ position: 'fixed', width: '100%' }), { optional: true }),
        /* 2 */ Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* group */])([
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ opacity: 0 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ opacity: 1 }))
            ], { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ opacity: 1 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.05s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ opacity: 0 }))
            ], { optional: true }),
        ])
    ])
]);
//# sourceMappingURL=router.transition.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guard__ = __webpack_require__("../../../../../src/app/shared/guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__subscription_subscription_reducer__ = __webpack_require__("../../../../../src/app/shared/subscription/subscription.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__errors_errors_reducer__ = __webpack_require__("../../../../../src/app/shared/errors/errors.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wait_wait_effects__ = __webpack_require__("../../../../../src/app/shared/wait/wait.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__wait_wait_reducer__ = __webpack_require__("../../../../../src/app/shared/wait/wait.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__wait_wait_component__ = __webpack_require__("../../../../../src/app/shared/wait/wait.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__errors_errors_component__ = __webpack_require__("../../../../../src/app/shared/errors/errors.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var reducers = {
    wait: __WEBPACK_IMPORTED_MODULE_5__wait_wait_reducer__["a" /* WaitReducer */],
    errors: __WEBPACK_IMPORTED_MODULE_3__errors_errors_reducer__["a" /* ErrorsReducer */],
    subscription: __WEBPACK_IMPORTED_MODULE_1__subscription_subscription_reducer__["a" /* SubscriptionReducer */]
};
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["M" /* NgModule */])({
            providers: [__WEBPACK_IMPORTED_MODULE_0__guard__["a" /* Guard */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__ngrx_store__["c" /* StoreModule */].forFeature('shared', reducers),
                __WEBPACK_IMPORTED_MODULE_10__ngrx_effects__["c" /* EffectsModule */].forFeature([__WEBPACK_IMPORTED_MODULE_4__wait_wait_effects__["a" /* WaitEffects */]])
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__wait_wait_component__["a" /* WaitComponent */],
                __WEBPACK_IMPORTED_MODULE_11__errors_errors_component__["a" /* ErrorsComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_8__wait_wait_component__["a" /* WaitComponent */],
                __WEBPACK_IMPORTED_MODULE_11__errors_errors_component__["a" /* ErrorsComponent */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/subscription/subscription.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Update; });
// tslint:disable:typedef
var UPDATE = 'Subscription.Update';
/* istanbul ignore next - trivial */
var Update = (function () {
    function Update(subscription) {
        this.subscription = subscription;
        this.type = UPDATE;
    }
    return Update;
}());

//# sourceMappingURL=subscription.actions.js.map

/***/ }),

/***/ "../../../../../src/app/shared/subscription/subscription.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export subscriptionReducer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriptionReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__subscription_actions__ = __webpack_require__("../../../../../src/app/shared/subscription/subscription.actions.ts");

function subscriptionReducer(
    // tslint:disable-next-line:typedef
    state, action) {
    // tslint:disable-next-line:typedef
    if (state === void 0) { state = {
        name: '',
        email: '',
        password: '',
        subscription: ''
    }; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__subscription_actions__["a" /* UPDATE */]:
            return Object.assign({}, state, action.subscription);
        default:
            return state;
    }
}
;
var SubscriptionReducer = subscriptionReducer;
//# sourceMappingURL=subscription.reducer.js.map

/***/ }),

/***/ "../../../../../src/app/shared/wait/wait.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return START; });
/* unused harmony export Start */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return END; });
/* unused harmony export End */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Add; });
// tslint:disable:typedef
var START = 'Wait.Start';
/* istanbul ignore next - trivial */
var Start = (function () {
    function Start() {
        this.type = START;
    }
    return Start;
}());

var END = 'Wait.End';
/* istanbul ignore next - trivial */
var End = (function () {
    function End() {
        this.type = END;
    }
    return End;
}());

var ADD = 'Wait.Add';
/* istanbul ignore next - trivial */
var Add = (function () {
    function Add(payload) {
        this.payload = payload;
        this.type = ADD;
    }
    return Add;
}());

//# sourceMappingURL=wait.actions.js.map

/***/ }),

/***/ "../../../../../src/app/shared/wait/wait.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".overlay {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: gray;\r\n    z-index: 1;\r\n    opacity: 0.5;\r\n}\r\n\r\n.fa-spin {\r\n    color: black;\r\n    z-index: 2;\r\n    font-size: 50px;\r\n    left: 50%;\r\n    top: 50%;\r\n    position: absolute;\r\n    opacity: 1;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/wait/wait.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay\"></div>\r\n<div class=\"fa fa-spinner fa-spin\"></div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/wait/wait.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WaitComponent; });
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

var WaitComponent = (function () {
    function WaitComponent() {
    }
    WaitComponent.prototype.ngOnInit = function () {
    };
    WaitComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-wait',
            template: __webpack_require__("../../../../../src/app/shared/wait/wait.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/wait/wait.component.css")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], WaitComponent);
    return WaitComponent;
}());

//# sourceMappingURL=wait.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/wait/wait.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WaitEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wait_actions__ = __webpack_require__("../../../../../src/app/shared/wait/wait.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WaitEffects = (function () {
    function WaitEffects(actions$) {
        this.actions$ = actions$;
        this.start$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3__wait_actions__["d" /* START */])
            .switchMap(function (action) {
            return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["a" /* Observable */].timer(1).take(1);
        })
            .map(function () { return new __WEBPACK_IMPORTED_MODULE_3__wait_actions__["b" /* Add */](1); });
        this.end$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3__wait_actions__["c" /* END */])
            .switchMap(function (action) {
            return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["a" /* Observable */].timer(1).take(1);
        })
            .map(function () { return new __WEBPACK_IMPORTED_MODULE_3__wait_actions__["b" /* Add */](-1); });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["a" /* Observable */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["a" /* Observable */]) === "function" && _a || Object)
    ], WaitEffects.prototype, "start$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["a" /* Observable */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["a" /* Observable */]) === "function" && _b || Object)
    ], WaitEffects.prototype, "end$", void 0);
    WaitEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */]) === "function" && _c || Object])
    ], WaitEffects);
    return WaitEffects;
    var _a, _b, _c;
}());

//# sourceMappingURL=wait.effects.js.map

/***/ }),

/***/ "../../../../../src/app/shared/wait/wait.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export waitReducer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WaitReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wait_actions__ = __webpack_require__("../../../../../src/app/shared/wait/wait.actions.ts");

function waitReducer(
    // tslint:disable-next-line:typedef
    state, action) {
    // tslint:disable-next-line:typedef
    if (state === void 0) { state = 0; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__wait_actions__["a" /* ADD */]:
            return state + action.payload;
        default:
            return state;
    }
}
;
var WaitReducer = waitReducer;
//# sourceMappingURL=wait.reducer.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map