"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var rooms_component_1 = require('./rooms/rooms.component');
var new_user_component_1 = require('./new-user/new-user.component');
var router_1 = require('@angular/router');
var blog_component_1 = require('./blog/blog.component');
var welcome_component_1 = require('./welcome/welcome.component');
var router = [
    { path: '', component: new_user_component_1.NewUserComponent },
    { path: 'blog', component: blog_component_1.BlogComponent },
    { path: 'rooms/:specificRoom', component: blog_component_1.BlogComponent },
    { path: 'rooms', component: rooms_component_1.RoomsComponent },
    { path: 'welcome', component: welcome_component_1.WelcomeComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                rooms_component_1.RoomsComponent,
                new_user_component_1.NewUserComponent,
                blog_component_1.BlogComponent,
                welcome_component_1.WelcomeComponent
            ],
            imports: [
                router_1.RouterModule.forRoot(router, { useHash: true }),
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
