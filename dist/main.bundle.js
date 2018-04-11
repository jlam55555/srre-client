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

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='container'>\r\n\r\n  <!-- short blurb and contact info -->\r\n  <h4>Call Safe Rides: <a href='tel:12033080604'>+1 (203) 308 0604</a>.</h4>\r\n  <p>Here is some information relating to Safe Rides. If you have questions that are not addressed here, contact:</p>\r\n  <ul>\r\n    <li>Michael Klein Wassink, co-founder <a href='mailto:michael.klein-wassink@er9.org'>michael.klein-wassink@er9.org</a>\r\n    <li>Luca Cerbin, co-founder <a href='mailto:luca.cerbin@er9.org'>luca.cerbin@er9.org</a>\r\n    <li>Jonathan Lam, sitemaster <a href='mailto:jonathan.lam@er9.org'>jonathan.lam@er9.org</a>\r\n  </ul>\r\n\r\n  <!-- accordian of faqs -->\r\n  <div id='faqAccordian'>\r\n\r\n    <!-- information about volunteering -->\r\n    <div class='card'>\r\n      <div class='card-header'>\r\n        <button class='btn btn-link' data-toggle='collapse' data-target='#faqHowItWorks'>How it works</button>\r\n      </div>\r\n      <div class='collapse' id='faqHowItWorks' data-parent='#faqAccordian'>\r\n        <div class='card-body'>\r\n          <p>Safe Rides is a program to help students from the ER9 region get a safe, confidential ride home on Friday and Saturday nights.</p>\r\n          <p>(more content coming here soon&hellip;)</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- information about volunteering -->\r\n    <div class='card'>\r\n      <div class='card-header'>\r\n        <button class='btn btn-link' data-toggle='collapse' data-target='#faqVolunteerInformation'>Volunteer information</button>\r\n      </div>\r\n      <div class='collapse' id='faqVolunteerInformation' data-parent='#faqAccordian'>\r\n        <div class='card-body'>\r\n          <p>To register to be a volunteer, please contact Michael Klein-Wassink or Luca Cerbin.</p>\r\n          <p>Volunteers must report to the meeting area at Saint Patrick's Church on Black Rock Turnpike between 10:00p.m. on a scheduled night and 2:00a.m. the next day.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- privacy policy (copied from sign-up component) -->\r\n    <div class='card'>\r\n      <div class='card-header'>\r\n        <button class='btn btn-link' data-toggle='collapse' data-target='#faqPrivacyPolicy'>Privacy policy</button>\r\n      </div>\r\n      <div class='collapse' id='faqPrivacyPolicy' data-parent='#faqAccordian'>\r\n        <div class='card-body'>\r\n          <p>We will never share your personal information except in the case of emergency (imminent harm to other people) or for official recordkeeping. Logs of information from all Safe Rides requests will be kept for official use. We will never see nor share your password.</p>\r\n          <p>The following information may be shared with on-duty volunteers when requesting a ride:</p>\r\n          <ul>\r\n            <li>Name</li>\r\n            <li>Phone number</li>\r\n            <li>Home address</li>\r\n            <li>Timestamps of picking up or dropping off people</li>\r\n          </ul>\r\n          <p>If you are a volunteer, you agree to receive text messages from Safe Rides notifying of duty times and Safe Rides requests when you are on-duty, or on non-standard times.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- site information -->\r\n    <div class='card'>\r\n      <div class='card-header'>\r\n        <button class='btn btn-link' data-toggle='collapse' data-target='#faqWebsiteInformation'>Website information</button>\r\n      </div>\r\n      <div class='collapse' id='faqWebsiteInformation' data-parent='#faqAccordian'>\r\n        <div class='card-body'>\r\n          <p>Please report all site issues to Jonathan Lam.</p>\r\n          <p>If you'd like to contribute to or maintain this project, please contact Jonathan Lam.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var page_service_1 = __webpack_require__("./src/app/page.service.ts");
var AboutComponent = /** @class */ (function () {
    function AboutComponent(pageService) {
        this.pageService = pageService;
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.pageService.setPageTitle('About');
    };
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [page_service_1.PageService])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var request_component_1 = __webpack_require__("./src/app/request/request.component.ts");
var volunteer_component_1 = __webpack_require__("./src/app/volunteer/volunteer.component.ts");
var about_component_1 = __webpack_require__("./src/app/about/about.component.ts");
var page_not_found_component_1 = __webpack_require__("./src/app/page-not-found/page-not-found.component.ts");
var routes = [
    { path: '', component: home_component_1.HomeComponent, data: { isSignInForm: true } },
    { path: 'signin', component: home_component_1.HomeComponent, data: { isSignInForm: true } },
    { path: 'signup', component: home_component_1.HomeComponent, data: { isSignInForm: false } },
    { path: 'request', component: request_component_1.RequestComponent },
    { path: 'volunteer', component: volunteer_component_1.VolunteerComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<!-- basic footer with attribution -->\r\n<div class='container'>\r\n  <small class='text-muted text-right d-block my-5'>\r\n    Copyright &copy; 2018 Safe Rides of Redding and Easton. All Rights Reserved.\r\n  </small>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var server_service_1 = __webpack_require__("./src/app/server.service.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(serverService) {
        this.serverService = serverService;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [server_service_1.ServerService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
// routing module
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
// page components (for routing)
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var page_not_found_component_1 = __webpack_require__("./src/app/page-not-found/page-not-found.component.ts");
var request_component_1 = __webpack_require__("./src/app/request/request.component.ts");
var volunteer_component_1 = __webpack_require__("./src/app/volunteer/volunteer.component.ts");
var about_component_1 = __webpack_require__("./src/app/about/about.component.ts");
// insertable components
var header_component_1 = __webpack_require__("./src/app/header/header.component.ts");
var sign_in_component_1 = __webpack_require__("./src/app/sign-in/sign-in.component.ts");
var sign_up_component_1 = __webpack_require__("./src/app/sign-up/sign-up.component.ts");
// services
var page_service_1 = __webpack_require__("./src/app/page.service.ts");
var server_service_1 = __webpack_require__("./src/app/server.service.ts");
var mission_component_1 = __webpack_require__("./src/app/mission/mission.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                page_not_found_component_1.PageNotFoundComponent,
                request_component_1.RequestComponent,
                volunteer_component_1.VolunteerComponent,
                header_component_1.HeaderComponent,
                sign_in_component_1.SignInComponent,
                sign_up_component_1.SignUpComponent,
                about_component_1.AboutComponent,
                mission_component_1.MissionComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule
            ],
            providers: [
                page_service_1.PageService,
                server_service_1.ServerService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class='navbar navbar-expand-sm fixed-top navbar-dark bg-dark'>\r\n\r\n  <!-- page title -->\r\n  <div class='navbar-brand d-none d-sm-block'>Safe Rides</div>\r\n  <div class='navbar-brand d-block d-sm-none'>{{ pageTitle }}</div>\r\n\r\n  <!-- button to collapse navbar   -->\r\n  <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#mainNavbar'>\r\n    <span class='navbar-toggler-icon'></span>\r\n  </button>\r\n\r\n  <!-- navbar links -->\r\n  <div class='collapse navbar-collapse' id='mainNavbar'>\r\n    <div class='navbar-nav'>\r\n      <div [ngClass]='{ \"nav-item\": true, active: pageTitle === \"Home\" }'>\r\n        <a class='nav-link' routerLink='/'>Home</a>\r\n      </div>\r\n      <div [ngClass]='{ \"nav-item\": true, active: pageTitle === \"Request\" }'>\r\n        <a class='nav-link' routerLink='/request'>Request</a>\r\n      </div>\r\n      <div [ngClass]='{ \"nav-item\": true, active: pageTitle === \"Volunteer\" }'>\r\n        <a class='nav-link' routerLink='/volunteer'>Volunteer</a>\r\n      </div>\r\n      <div [ngClass]='{ \"nav-item\": true, active: pageTitle === \"About\" }'>\r\n        <a class='nav-link' routerLink='/about'>About</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var page_service_1 = __webpack_require__("./src/app/page.service.ts");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(pageService) {
        this.pageService = pageService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageService.getPageTitle().subscribe(function (newPageTitle) { return _this.pageTitle = newPageTitle; });
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [page_service_1.PageService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='container'>\r\n\r\n  <!-- if signed in show profile -->\r\n  <div *ngIf='isSignedIn'>\r\n    <h4>Profile</h4>\r\n    <table class='table'>\r\n      <tbody>\r\n        <tr>\r\n          <th scope='row'>Email</th>\r\n          <td>{{ userDetails.email }}</td>\r\n        </tr>\r\n        <tr>\r\n          <th scope='row'>Name</th>\r\n          <td>{{ userDetails.name }}</td>\r\n        </tr>\r\n        <tr>\r\n          <th scope='row'>Phone</th>\r\n          <td>{{ userDetails.phone }}</td>\r\n        </tr>\r\n        <tr>\r\n          <th scope='row'>Address</th>\r\n          <td>{{ userDetails.address }}</td>\r\n        </tr>\r\n        <tr>\r\n          <th scope='row'>Volunteer team</th>\r\n          <td>{{ userDetails.team }}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <button class='btn btn-outline-primary' (click)='signOut()'>Sign out</button>\r\n  </div>\r\n\r\n  <!-- sign in and sign up if user is not signed in -->\r\n  <div *ngIf='!isSignedIn'>\r\n    <app-sign-in *ngIf='isSignInForm'></app-sign-in>\r\n    <app-sign-up *ngIf='!isSignInForm'></app-sign-up>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var server_service_1 = __webpack_require__("./src/app/server.service.ts");
var page_service_1 = __webpack_require__("./src/app/page.service.ts");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(activatedRoute, pageService, serverService) {
        this.activatedRoute = activatedRoute;
        this.pageService = pageService;
        this.serverService = serverService;
        // whether or not on sign in / sign up form
        this.isSignInForm = true;
        // whether signed in or not
        this.isSignedIn = false;
        // user details when signed in
        this.userDetails = {};
    }
    // get all variables
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageService.setPageTitle('Home');
        // this.pageService.getIsSignInForm().subscribe(newIsSignInForm => this.isSignInForm = newIsSignInForm);
        this.pageService.getIsSignedIn().subscribe(function (newIsSignedIn) { return _this.isSignedIn = newIsSignedIn; });
        this.serverService.getUserDetails().subscribe(function (newUserDetails) { return _this.userDetails = newUserDetails; });
        // switch forms if in url
        this.activatedRoute.data.subscribe(function (data) { return _this.isSignInForm = data.isSignInForm; });
    };
    // sign out button
    HomeComponent.prototype.signOut = function () {
        var _this = this;
        this.serverService.signOut(function () { return _this.pageService.setIsSignedIn(false); });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            page_service_1.PageService,
            server_service_1.ServerService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/mission/mission.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  mission works!\n</p>\n"

/***/ }),

/***/ "./src/app/mission/mission.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/mission/mission.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var MissionComponent = /** @class */ (function () {
    function MissionComponent() {
    }
    MissionComponent.prototype.ngOnInit = function () {
    };
    MissionComponent = __decorate([
        core_1.Component({
            selector: 'app-mission',
            template: __webpack_require__("./src/app/mission/mission.component.html"),
            styles: [__webpack_require__("./src/app/mission/mission.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MissionComponent);
    return MissionComponent;
}());
exports.MissionComponent = MissionComponent;


/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='container'>\r\n  <h1>404</h1>\r\n  <p>Sorry, but the page you are looking for is not found. Would you like to:</p>\r\n  <ul>\r\n    <li>View the <a routerLink='/about'>about page</a> for more info?</li>\r\n    <li>Return to the <a routerLink='/'>homepage</a>?</li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var page_service_1 = __webpack_require__("./src/app/page.service.ts");
var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent(pageService) {
        this.pageService = pageService;
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
        this.pageService.setPageTitle('404');
    };
    PageNotFoundComponent = __decorate([
        core_1.Component({
            selector: 'app-page-not-found',
            template: __webpack_require__("./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("./src/app/page-not-found/page-not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [page_service_1.PageService])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());
exports.PageNotFoundComponent = PageNotFoundComponent;


/***/ }),

/***/ "./src/app/page.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var BehaviorSubject_1 = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var PageService = /** @class */ (function () {
    function PageService() {
        // for app component to get correct title
        this.pageTitleSubject = new BehaviorSubject_1.BehaviorSubject(null);
        // for all pages to know whether or not signed in
        this.isSignedInSubject = new BehaviorSubject_1.BehaviorSubject(false);
        // for home component to get correct sign-in/sign-up form
        this.isSignInFormSubject = new BehaviorSubject_1.BehaviorSubject(true);
    }
    PageService.prototype.getPageTitle = function () {
        return this.pageTitleSubject;
    };
    PageService.prototype.setPageTitle = function (pageTitle) {
        this.pageTitleSubject.next(pageTitle);
    };
    PageService.prototype.getIsSignedIn = function () {
        return this.isSignedInSubject;
    };
    PageService.prototype.setIsSignedIn = function (isSignedIn) {
        this.isSignedInSubject.next(isSignedIn);
    };
    PageService.prototype.getIsSignInForm = function () {
        return this.isSignInFormSubject;
    };
    PageService.prototype.setIsSignInForm = function (isSignInForm) {
        this.isSignInFormSubject.next(isSignInForm);
    };
    PageService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], PageService);
    return PageService;
}());
exports.PageService = PageService;


/***/ }),

/***/ "./src/app/request/request.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='container'>\r\n\r\n  <!-- if signed in -->\r\n  <div *ngIf='isSignedIn'>\r\n\r\n    <!-- if mission, mission page; put on its own page because of its complexity -->\r\n    <app-mission *ngIf='mission.id !== undefined'></app-mission>\r\n\r\n    <!-- if no mission, request page -->\r\n    <div *ngIf='mission.id === undefined'>\r\n      <h4>Request a ride</h4>\r\n      <form>\r\n        <div class='form-group'>\r\n          <label class='control-label' for='requestLocation'>Current Location</label>\r\n          <input\r\n            class='form-control'\r\n            type='text'\r\n            placeholder='100 Black Rock Tpke., Redding, CT 06896'\r\n            id='requestLocation'\r\n            name='requestLocation'\r\n            [(ngModel)]='requestLocation'>\r\n        </div>\r\n        <div class='form-group'>\r\n          <label class='control-label' for='requestMessage'>Message to Safe Rides Volunteers</label>\r\n          <input\r\n            class='form-control'\r\n            type='text'\r\n            placeholder='I feel unsafe and would like a safe, confidential ride home.'\r\n            id='requestMessage'\r\n            name='requestMessage'\r\n            [(ngModel)]='requestMessage'>\r\n        </div>\r\n        <div class='form-group'>\r\n          <input\r\n            class='btn btn-outline-primary'\r\n            type='button'\r\n            value='Request a Safe Ride'\r\n            (click)='request()'>\r\n        </div>\r\n      </form>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!-- if not signed in -->\r\n  <div *ngIf='!isSignedIn'>\r\n    <p>You must <a routerLink='/signin'>sign in</a> or <a routerLink='/signup'>sign up</a> to request a ride.</p>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/request/request.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/request/request.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var page_service_1 = __webpack_require__("./src/app/page.service.ts");
var server_service_1 = __webpack_require__("./src/app/server.service.ts");
var RequestComponent = /** @class */ (function () {
    function RequestComponent(pageService, serverService) {
        this.pageService = pageService;
        this.serverService = serverService;
        this.isSignedIn = false;
        this.mission = {};
    }
    RequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageService.setPageTitle('Request');
        this.pageService.getIsSignedIn().subscribe(function (newIsSignedIn) { return _this.isSignedIn = newIsSignedIn; });
        this.serverService.getMissionData().subscribe(function (newMissionData) { return _this.mission = newMissionData; });
    };
    RequestComponent = __decorate([
        core_1.Component({
            selector: 'app-request',
            template: __webpack_require__("./src/app/request/request.component.html"),
            styles: [__webpack_require__("./src/app/request/request.component.scss")]
        }),
        __metadata("design:paramtypes", [page_service_1.PageService, server_service_1.ServerService])
    ], RequestComponent);
    return RequestComponent;
}());
exports.RequestComponent = RequestComponent;


/***/ }),

/***/ "./src/app/server.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var BehaviorSubject_1 = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var io = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
var page_service_1 = __webpack_require__("./src/app/page.service.ts");
var ServerService = /** @class */ (function () {
    // connect to socket.io
    function ServerService(pageService) {
        var _this = this;
        this.pageService = pageService;
        // get user details
        this.userDetailsSubject = new BehaviorSubject_1.BehaviorSubject({});
        // get mission details; event handler to update missiondata in constructor
        this.missionDataSubject = new BehaviorSubject_1.BehaviorSubject({});
        this.socket = io();
        // check if signed in; if so, update pages
        this.socket.emit('getUserDetails', function (userDetails) {
            if (userDetails.email !== undefined) {
                _this.pageService.setIsSignedIn(true);
            }
        });
        // separate event handler because it may be called multiple times by server-side requests
        this.socket.on('missionData', function (missionData) { return _this.missionDataSubject.next(missionData); });
    }
    ServerService.prototype.updateUserDetails = function () {
        var _this = this;
        this.socket.emit('getUserDetails', function (userDetails) { return _this.userDetailsSubject.next(userDetails); });
    };
    ServerService.prototype.getUserDetails = function () {
        this.updateUserDetails();
        return this.userDetailsSubject;
    };
    ServerService.prototype.getMissionData = function () {
        this.socket.emit('getMissionData');
        return this.userDetailsSubject;
    };
    // sign in
    ServerService.prototype.signIn = function (data, callback) {
        var _this = this;
        this.socket.emit('signIn', data, function (res) {
            _this.updateUserDetails();
            callback(res);
        });
    };
    // sign up
    ServerService.prototype.signUp = function (data, callback) {
        var _this = this;
        this.socket.emit('signUp', data, function (res) {
            _this.updateUserDetails();
            callback(res);
        });
    };
    // sign out
    ServerService.prototype.signOut = function (callback) {
        var _this = this;
        this.socket.emit('signOut', function (res) {
            _this.updateUserDetails();
            callback(res);
        });
    };
    ServerService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [page_service_1.PageService])
    ], ServerService);
    return ServerService;
}());
exports.ServerService = ServerService;


/***/ }),

/***/ "./src/app/sign-in/sign-in.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Sign in</h3>\r\n<form>\r\n  <div class='form-group'>\r\n    <label class='control-label' for='signInEmail'>Email address</label>\r\n    <input [ngClass]='{ \"form-control\": true, \"is-invalid\": errors.signInEmail !== undefined }'\r\n      type='email'\r\n      placeholder='johndoe@gmail.com'\r\n      maxlength='254'\r\n      id='signInEmail'\r\n      name='signInEmail'\r\n      [(ngModel)]='signInEmail'\r\n      (keydown)='submitOnEnter($event)'>\r\n    <small class='form-text invalid-feedback'>{{ errors.signInEmail }}</small>\r\n  </div>\r\n  <div class='form-group'>\r\n    <label class='control-label' for='signInPassword'>Password</label>\r\n    <input [ngClass]='{ \"form-control\": true, \"is-invalid\": errors.signInPassword !== undefined }'\r\n      type='password'\r\n      placeholder='********'\r\n      maxlength='50'\r\n      id='signInPassword'\r\n      name='signInPassword'\r\n      [(ngModel)]='signInPassword'\r\n      (keydown)='submitOnEnter($event)'>\r\n    <small class='form-text invalid-feedback'>{{ errors.signInPassword }}</small>\r\n  </div>\r\n  <div class='form-group'>\r\n    <input class='btn btn-outline-primary' type='button' value='Sign in' id='signInButton' (click)='signIn()'>\r\n  </div>\r\n</form>\r\n<p>Don't have an account? <a routerLink='/signup'>Sign up</a>.</p>\r\n"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var page_service_1 = __webpack_require__("./src/app/page.service.ts");
var server_service_1 = __webpack_require__("./src/app/server.service.ts");
var SignInComponent = /** @class */ (function () {
    function SignInComponent(pageService, serverService) {
        this.pageService = pageService;
        this.serverService = serverService;
        // form fields
        this.signInEmail = '';
        this.signInPassword = '';
        this.userDetails = '';
        // errors for form validation
        this.errors = {};
    }
    SignInComponent.prototype.ngOnInit = function () { };
    // attempt sign in
    SignInComponent.prototype.signIn = function () {
        var _this = this;
        var formData = {
            email: this.signInEmail,
            password: this.signInPassword
        };
        this.serverService.signIn(formData, function (res) {
            // if successful, change views
            if (res === true) {
                _this.pageService.setIsSignedIn(true);
                // change url in case current url is /signin
                history.pushState('page2', 'SafeRides', '/');
                // if not successful, display errors
            }
            else {
                _this.errors = res;
                // clear password
                _this.signInPassword = '';
            }
        });
    };
    // attempt sign in when enter pressed on input
    SignInComponent.prototype.submitOnEnter = function (event) {
        if (event.which === 13) {
            this.signIn();
        }
    };
    SignInComponent = __decorate([
        core_1.Component({
            selector: 'app-sign-in',
            template: __webpack_require__("./src/app/sign-in/sign-in.component.html"),
            styles: [__webpack_require__("./src/app/sign-in/sign-in.component.scss")]
        }),
        __metadata("design:paramtypes", [page_service_1.PageService, server_service_1.ServerService])
    ], SignInComponent);
    return SignInComponent;
}());
exports.SignInComponent = SignInComponent;


/***/ }),

/***/ "./src/app/sign-up/sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Sign up</h3>\r\n<form>\r\n  <div class='form-group'>\r\n    <label class='control-label' for='signUpEmail' >Email address</label>\r\n    <input [ngClass]='{ \"form-control\": true, \"is-invalid\": errors.signUpEmail !== undefined }'\r\n      type='email'\r\n      placeholder='johndoe@gmail.com'\r\n      maxlength='254'\r\n      id='signUpEmail'\r\n      name='signUpEmail'\r\n      [(ngModel)]='signUpEmail'\r\n      (keydown)='submitOnEnter($event)'>\r\n    <small class='form-text invalid-feedback'>{{ errors.signUpEmail }}</small>\r\n  </div>\r\n  <div class='form-group'>\r\n    <label class='control-label' for='signUpPassword1'>Password</label>\r\n    <input [ngClass]='{ \"form-control\": true, \"is-invalid\": errors.signUpPassword1 !== undefined }'\r\n      type='password'\r\n      placeholder='********'\r\n      maxlength='50'\r\n      id='signUpPassword1'\r\n      name='signUpPassword1'\r\n      [(ngModel)]='signUpPassword1'\r\n      (keydown)='submitOnEnter($event)'>\r\n    <small class='form-text invalid-feedback'>{{ errors.signUpPassword1 }}</small>\r\n  </div>\r\n  <div class='form-group'>\r\n    <label class='control-label' for='signUpPassword2'>Reenter your password</label>\r\n    <input [ngClass]='{ \"form-control\": true, \"is-invalid\": errors.signUpPassword2 !== undefined }'\r\n      type='password'\r\n      placeholder='********'\r\n      maxlength='50'\r\n      id='signUpPassword2'\r\n      name='signUpPassword2'\r\n      [(ngModel)]='signUpPassword2'\r\n      (keydown)='submitOnEnter($event)'>\r\n    <small class='form-text invalid-feedback'>{{ errors.signUpPassword2 }}</small>\r\n  </div>\r\n  <div class='form-group'>\r\n    <label class='control-label' for='signUpName'>Name</label>\r\n    <input [ngClass]='{ \"form-control\": true, \"is-invalid\": errors.signUpName !== undefined }'\r\n      type='text'\r\n      placeholder='John Doe'\r\n      maxlength='50'\r\n      id='signUpName'\r\n      name='signUpName'\r\n      [(ngModel)]='signUpName'\r\n      (keydown)='submitOnEnter($event)'>\r\n    <small class='form-text invalid-feedback'>{{ errors.signUpName }}</small>\r\n  </div>\r\n  <div class='form-group'>\r\n    <label class='control-label' for='signUpPhone'>Phone number</label>\r\n    <input [ngClass]='{ \"form-control\": true, \"is-invalid\": errors.signUpPhone !== undefined }'\r\n      type='phone'\r\n      placeholder='12034567890'\r\n      maxlength='11'\r\n      id='signUpPhone'\r\n      name='signUpPhone'\r\n      [(ngModel)]='signUpPhone'\r\n      (keydown)='submitOnEnter($event)'>\r\n    <small class='form-text invalid-feedback'>{{ errors.signUpPhone }}</small>\r\n  </div>\r\n  <div class='form-group'>\r\n    <label class='control-label' for='signUpAddress'>Home address</label>\r\n    <input [ngClass]='{ \"form-control\": true, \"is-invalid\": errors.signUpAddress !== undefined }'\r\n      type='text'\r\n      placeholder='52 Home Address Rd., Easton, CT 06612'\r\n      maxlength='256'\r\n      id='signUpAddress'\r\n      name='signUpAddress'\r\n      [(ngModel)]='signUpAddress'\r\n      (keydown)='submitOnEnter($event)'>\r\n    <small class='form-text invalid-feedback'>{{ errors.signUpAddress }}</small>\r\n  </div>\r\n  <div class='form-group'>\r\n    <label class='control-label' for='signUpVolunteerKey'>Volunteer key</label>\r\n    <input [ngClass]='{ \"form-control\": true, \"is-invalid\": errors.signUpVolunteerKey !== undefined }'\r\n      type='text'\r\n      placeholder=''\r\n      maxlength='50'\r\n      id='signUpVolunteerKey'\r\n      name='signUpVolunteerKey'\r\n      [(ngModel)]='signUpVolunteerKey'\r\n      (keydown)='submitOnEnter($event)'>\r\n    <small class='form-text text-muted'>If you are a registered Safe Rides volunteer, check your email for the key. If you are not a volunteer, you can safely ignore this field.</small>\r\n    <small class='form-text invalid-feedback'>{{ errors.signUpVolunteerKey }}</small>\r\n  </div>\r\n\r\n  <!-- privacy policy -->\r\n  <div class='form-group' id='privacyPolicyAccordian'>\r\n    <div class='card'>\r\n      <div class='card-header'>\r\n        <button type='button' class='btn btn-link' data-toggle='collapse' data-target='#privacyPolicyCollapse'>Privacy policy</button>\r\n      </div>\r\n      <div class='collapse' id='privacyPolicyCollapse' data-parent='#privacyPolicyAccordian'>\r\n        <div class='card-body'>\r\n          <p>We will never share your personal information except in the case of emergency (imminent harm to other people) or for official recordkeeping. Logs of information from all Safe Rides requests will be kept for official use. We will never see nor share your password.</p>\r\n          <p>The following information may be shared with on-duty volunteers when requesting a ride:</p>\r\n          <ul>\r\n            <li>Name</li>\r\n            <li>Phone number</li>\r\n            <li>Home address</li>\r\n            <li>Timestamps of picking up or dropping off people</li>\r\n          </ul>\r\n          <p>If you are a volunteer, you agree to receive text messages from Safe Rides notifying of duty times and Safe Rides requests when you are on-duty, or on non-standard times.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class='form-group'>\r\n    <input class='btn btn-outline-primary' type='button' value='Sign up' id='signUpButton' (click)='signUp()'>\r\n  </div>\r\n</form>\r\n\r\n<p>Already have an account? <a routerLink='/signin'>Sign in</a>.</p>\r\n"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var page_service_1 = __webpack_require__("./src/app/page.service.ts");
var server_service_1 = __webpack_require__("./src/app/server.service.ts");
var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(pageService, serverService) {
        this.pageService = pageService;
        this.serverService = serverService;
        // form fields
        this.signUpEmail = '';
        this.signUpPassword1 = '';
        this.signUpPassword2 = '';
        this.signUpName = '';
        this.signUpPhone = '';
        this.signUpAddress = '';
        this.signUpVolunteerKey = '';
        // errors for validation
        this.errors = {};
    }
    SignUpComponent.prototype.ngOnInit = function () { };
    // attempt sign up
    SignUpComponent.prototype.signUp = function () {
        var _this = this;
        var formData = {
            email: this.signUpEmail,
            password1: this.signUpPassword1,
            password2: this.signUpPassword2,
            name: this.signUpName,
            phone: this.signUpPhone,
            address: this.signUpAddress,
            volunteerKey: this.signUpVolunteerKey
        };
        this.serverService.signUp(formData, function (res) {
            // if successful, change views
            if (res === true) {
                _this.pageService.setIsSignedIn(true);
                // change url in case current url is /signin
                history.pushState('page2', 'SafeRides', '/');
                // if not successful, display errors
            }
            else {
                _this.errors = res;
                // clear password
                _this.signUpPassword1 = '';
                _this.signUpPassword2 = '';
            }
        });
    };
    // attempt sign up when enter pressed on input
    SignUpComponent.prototype.submitOnEnter = function (event) {
        if (event.which === 13) {
            this.signUp();
        }
    };
    SignUpComponent = __decorate([
        core_1.Component({
            selector: 'app-sign-up',
            template: __webpack_require__("./src/app/sign-up/sign-up.component.html"),
            styles: [__webpack_require__("./src/app/sign-up/sign-up.component.scss")]
        }),
        __metadata("design:paramtypes", [page_service_1.PageService, server_service_1.ServerService])
    ], SignUpComponent);
    return SignUpComponent;
}());
exports.SignUpComponent = SignUpComponent;


/***/ }),

/***/ "./src/app/volunteer/volunteer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='container'>\r\n\r\n  <!-- if signed in -->\r\n  <div *ngIf='isSignedIn'>\r\n    <p>Coming soon. Return to the <a routerLink='/'>homepage</a>.</p>\r\n  </div>\r\n\r\n  <!-- if not signed in -->\r\n  <div *ngIf='!isSignedIn'>\r\n    <p>You must <a routerLink='/signin'>sign in</a> or <a routerLink='/signup'>sign up</a> and be registered to volunteer to see this content.</p>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/volunteer/volunteer.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/volunteer/volunteer.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var page_service_1 = __webpack_require__("./src/app/page.service.ts");
var VolunteerComponent = /** @class */ (function () {
    function VolunteerComponent(pageService) {
        this.pageService = pageService;
        this.isSignedIn = false;
    }
    VolunteerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageService.setPageTitle('Volunteer');
        this.pageService.getIsSignedIn().subscribe(function (newIsSignedIn) { return _this.isSignedIn = newIsSignedIn; });
    };
    VolunteerComponent = __decorate([
        core_1.Component({
            selector: 'app-volunteer',
            template: __webpack_require__("./src/app/volunteer/volunteer.component.html"),
            styles: [__webpack_require__("./src/app/volunteer/volunteer.component.scss")]
        }),
        __metadata("design:paramtypes", [page_service_1.PageService])
    ], VolunteerComponent);
    return VolunteerComponent;
}());
exports.VolunteerComponent = VolunteerComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map