"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var blog_1 = require('./blog');
require('../rxjs-operators');
var blog_service_1 = require("./blog.service");
var BlogComponent = (function () {
    function BlogComponent(http, blogService, route) {
        this.http = http;
        this.blogService = blogService;
        this.route = route;
        this.isSubmitted = false;
        this.title = 'MEAN app with Angular2';
        this.model = new blog_1.Blog("", "", "");
        this.blogMessages = [];
    }
    BlogComponent.prototype.submitBlog = function () {
        var _this = this;
        this.model = new blog_1.Blog(this.model.msg, this.model.username, this.specificRoom);
        this.blogService.addBlog(this.model)
            .subscribe(function (blogMsg) {
            console.log("Messages:");
            _this.model = blogMsg;
            _this.getBlogs(_this.specificRoom);
        }, function (error) { return _this.title = error; });
    };
    BlogComponent.prototype.getBlogs = function (specificRoom) {
        var _this = this;
        console.log("TESTTHISSHIIIT" + this.specificRoom);
        this.blogService.getBlogs(specificRoom)
            .subscribe(function (messages) {
            _this.blogMessages = messages;
        }, function (error) { return _this.title = error; });
        return this.blogMessages;
    };
    BlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.specificRoom = params['specificRoom'];
        });
        this.getBlogs(this.specificRoom);
    };
    BlogComponent = __decorate([
        core_1.Component({
            selector: 'app-blog',
            templateUrl: './blog.component.html',
            styleUrls: ['./blog.component.css'],
            providers: [blog_service_1.BlogService]
        })
    ], BlogComponent);
    return BlogComponent;
}());
exports.BlogComponent = BlogComponent;
