"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var blog_1 = require('./blog');
require('./../rxjs-operators');
var blog_service_1 = require("./blog.service");
var AppComponent = (function () {
    function AppComponent(http, blogService) {
        this.http = http;
        this.blogService = blogService;
        this.isSubmitted = false;
        this.title = 'MEAN app with Angular2';
        this.model = new blog_1.Blog("", "", "");
        this.blogMessages = [];
    }
    AppComponent.prototype.submitBlog = function () {
        var _this = this;
        this.blogService.addBlog(this.model)
            .subscribe(function (blogMsg) {
            console.log("Messages:");
            _this.model = blogMsg;
            _this.getBlogs();
        }, function (error) { return _this.title = error; });
    };
    AppComponent.prototype.getBlogs = function () {
        var _this = this;
        console.log("Subscribe to service");
        this.blogService.getBlogs()
            .subscribe(function (messages) {
            console.log("Messages:2");
            _this.blogMessages = messages;
        }, function (error) { return _this.title = error; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getBlogs();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: 'blog.component.html',
            styleUrls: ['blog.component.css'],
            providers: [blog_service_1.BlogService]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
