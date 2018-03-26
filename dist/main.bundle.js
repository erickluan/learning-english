webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "#gameOver {\r\n    color: red;\r\n}\r\n\r\n#gameWin {\r\n    color: green;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-top></app-top>\n<div *ngIf=\"gameInProgress; else gameOver\">\n    <app-panel (finishGame)=\"finishGame($event)\"></app-panel>\n</div>\n<ng-template #gameOver>\n    <div *ngIf=\"typeClosing === 'derrota'; else gameWin\" class=\"container\" style=\"margin-top: 50px\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <h3 id=\"gameOver\">Fim de jogo! Infelizmente você perdeu!</h3>\n                <button class=\"btn btn-primary\" (click)=\"restartGame()\">Tentar mais uma vez</button>\n            </div>\n        </div>\n    </div>\n</ng-template>\n<ng-template #gameWin>\n    <div class=\"container\" style=\"margin-top: 50px\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <h3 id=\"gameWin\">Você ganhou! Parabéns! =D</h3>\n                <button class=\"btn btn-primary\" (click)=\"restartGame()\">Jogar mais uma vez</button>\n            </div>\n        </div>\n    </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.gameInProgress = true;
    }
    AppComponent.prototype.finishGame = function (type) {
        this.gameInProgress = false;
        this.typeClosing = type;
    };
    AppComponent.prototype.restartGame = function () {
        this.gameInProgress = true;
        this.typeClosing = undefined;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__panel_panel_component__ = __webpack_require__("./src/app/panel/panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__top_top_component__ = __webpack_require__("./src/app/top/top.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__attempts_attempts_component__ = __webpack_require__("./src/app/attempts/attempts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progress_progress_component__ = __webpack_require__("./src/app/progress/progress.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__panel_panel_component__["a" /* PanelComponent */],
                __WEBPACK_IMPORTED_MODULE_4__top_top_component__["a" /* TopComponent */],
                __WEBPACK_IMPORTED_MODULE_5__attempts_attempts_component__["a" /* AttemptsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__progress_progress_component__["a" /* ProgressComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/attempts/attempts.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/attempts/attempts.component.html":
/***/ (function(module, exports) {

module.exports = "<img *ngFor=\"let heart of hearts\" [src]=\"heart.showHeart()\" />"

/***/ }),

/***/ "./src/app/attempts/attempts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttemptsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_heart_model__ = __webpack_require__("./src/app/shared/heart.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AttemptsComponent = /** @class */ (function () {
    function AttemptsComponent() {
        this.hearts = [
            new __WEBPACK_IMPORTED_MODULE_0__shared_heart_model__["a" /* Heart */](true), new __WEBPACK_IMPORTED_MODULE_0__shared_heart_model__["a" /* Heart */](true), new __WEBPACK_IMPORTED_MODULE_0__shared_heart_model__["a" /* Heart */](true)
        ];
    }
    AttemptsComponent.prototype.ngOnInit = function () {
    };
    AttemptsComponent.prototype.ngOnChanges = function () {
        if (this.attempts !== this.hearts.length) {
            var index = this.hearts.length - this.attempts;
            this.hearts[index - 1].full = false;
        }
    };
    AttemptsComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* Input */])(),
        __metadata("design:type", Number)
    ], AttemptsComponent.prototype, "attempts", void 0);
    AttemptsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'app-attempts',
            template: __webpack_require__("./src/app/attempts/attempts.component.html"),
            styles: [__webpack_require__("./src/app/attempts/attempts.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AttemptsComponent);
    return AttemptsComponent;
}());



/***/ }),

/***/ "./src/app/panel/panel.component.css":
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n    margin-top: 20px;\r\n    padding-bottom: 30px;\r\n    padding-top: 30px;\r\n}"

/***/ }),

/***/ "./src/app/panel/panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"jumbotron\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <app-progress [progress]=\"progress\"></app-progress>\n            </div>\n            <div class=\"col-sm-6\">\n                <div class=\"d-flex justify-content-end\">\n                    <app-attempts [attempts]=\"attempts\"></app-attempts>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col\">\n                <h6> {{ instruction }} </h6>\n                <p>{{ roundPhrase.phraseEng }}</p>\n                <div class=\"form-group\">\n                    <textarea class=\"form-control\" id=\"exampleTextarea\" rows=\"3\" (input)=\"updateAnswer($event)\" [value]=\"answer\"></textarea>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col\">\n                <div class=\"d-flex justify-content-end\">\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"verifyAnswer()\">Conferir</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/panel/panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__phrasis_mock__ = __webpack_require__("./src/app/panel/phrasis-mock.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PanelComponent = /** @class */ (function () {
    function PanelComponent() {
        this.phrasis = __WEBPACK_IMPORTED_MODULE_0__phrasis_mock__["a" /* PHRASIS */];
        this.instruction = 'Traduza a frase:';
        this.round = 0;
        this.progress = 0;
        this.attempts = 3;
        this.finishGame = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* EventEmitter */]();
        this.updateRound();
    }
    PanelComponent.prototype.ngOnInit = function () { };
    PanelComponent.prototype.ngOnDestroy = function () { };
    PanelComponent.prototype.updateAnswer = function (answer) {
        this.answer = answer.target.value;
    };
    PanelComponent.prototype.verifyAnswer = function () {
        if (this.roundPhrase.phrasePtBr === this.answer) {
            this.round++;
            this.progress = this.progress + (100 / this.phrasis.length);
            if (this.round === 4) {
                this.finishGame.emit('vitoria');
            }
            this.updateRound();
        }
        else {
            this.attempts--;
            if (this.attempts === -1) {
                this.finishGame.emit('derrota');
            }
        }
    };
    PanelComponent.prototype.updateRound = function () {
        this.roundPhrase = this.phrasis[this.round];
        this.answer = '';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* EventEmitter */])
    ], PanelComponent.prototype, "finishGame", void 0);
    PanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'app-panel',
            template: __webpack_require__("./src/app/panel/panel.component.html"),
            styles: [__webpack_require__("./src/app/panel/panel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PanelComponent);
    return PanelComponent;
}());



/***/ }),

/***/ "./src/app/panel/phrasis-mock.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PHRASIS; });
var PHRASIS = [
    {
        phraseEng: 'I like to learn', phrasePtBr: 'Eu gosto de aprender'
    },
    {
        phraseEng: 'I love London', phrasePtBr: 'Eu amo Londres'
    },
    {
        phraseEng: 'How are you?', phrasePtBr: 'Como você está?'
    },
    {
        phraseEng: 'I eat bread', phrasePtBr: 'Eu como pão'
    }
];


/***/ }),

/***/ "./src/app/progress/progress.component.css":
/***/ (function(module, exports) {

module.exports = ".progress {\r\n    background: #EEF8DA;\r\n    border: solid 1px #99CE28;\r\n}\r\n\r\n.progress-bar {\r\n    background: #99CE28;\r\n}"

/***/ }),

/***/ "./src/app/progress/progress.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"progress\">\n    <div class=\"progress-bar w-{{ progress }}\"></div>\n</div>"

/***/ }),

/***/ "./src/app/progress/progress.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressComponent = /** @class */ (function () {
    function ProgressComponent() {
        this.progress = 0;
    }
    ProgressComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], ProgressComponent.prototype, "progress", void 0);
    ProgressComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-progress',
            template: __webpack_require__("./src/app/progress/progress.component.html"),
            styles: [__webpack_require__("./src/app/progress/progress.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProgressComponent);
    return ProgressComponent;
}());



/***/ }),

/***/ "./src/app/shared/heart.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Heart; });
var Heart = /** @class */ (function () {
    function Heart(full, urlFullHeart, urlEmptyHeart) {
        if (urlFullHeart === void 0) { urlFullHeart = '/assets/full_heart.png'; }
        if (urlEmptyHeart === void 0) { urlEmptyHeart = '/assets/empty_heart.png'; }
        this.full = full;
        this.urlFullHeart = urlFullHeart;
        this.urlEmptyHeart = urlEmptyHeart;
    }
    Heart.prototype.showHeart = function () {
        if (this.full === true) {
            return this.urlFullHeart;
        }
        else {
            return this.urlEmptyHeart;
        }
    };
    return Heart;
}());



/***/ }),

/***/ "./src/app/top/top.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar {\r\n    background: #1CB0F6;\r\n}"

/***/ }),

/***/ "./src/app/top/top.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse bg-light\">\n    <span class=\"navbar-brand mb-0 h1\">{{ title }}</span>\n</nav>"

/***/ }),

/***/ "./src/app/top/top.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TopComponent = /** @class */ (function () {
    function TopComponent() {
        this.title = 'Learning English!';
    }
    TopComponent.prototype.ngOnInit = function () {
    };
    TopComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-top',
            template: __webpack_require__("./src/app/top/top.component.html"),
            styles: [__webpack_require__("./src/app/top/top.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TopComponent);
    return TopComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map