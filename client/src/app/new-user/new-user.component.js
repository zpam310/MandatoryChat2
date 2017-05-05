"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var new_user_service_1 = require('./new-user.service');
var new_user_1 = require("./new-user");
var NewUserComponent = (function () {
    function NewUserComponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.users = [];
        this.userList = this.users;
        this.title = 'MEAN app with Angular2';
        this.model = new new_user_1.NewUser("");
    }
    NewUserComponent.prototype.getNewUser = function () {
        var _this = this;
        this.service.getNewUser()
            .subscribe(function (listOfUsers) {
            _this.users = listOfUsers;
            console.log(_this.users);
        }, function (error) { return _this.users = error; });
        return this.users;
    };
    // addNewUser() {
    //     console.log("start addnewuser");
    //   //this.resetModel(this.model, this.model.username);
    //   this.service.addNewUser(this.model)
    //       .subscribe(
    //           Newuser => {
    //             this.model = Newuser;
    //               console.log("NEWUSER" + this.model);
    //               this.getNewUser();
    //             console.log("subscribe" + this.getNewUser());
    //           },
    //           error => this.title = <any>error
    //       );
    //     this.router.navigate(["welcome"]);
    //
    // }
    NewUserComponent.prototype.loginUser = function (username) {
        var _this = this;
        console.log("Loginuser -1");
        this.resetModel(this.model, this.model.username);
        this.service.loginUser(username)
            .subscribe(function (feedback) {
            console.log("Loginuser -2");
            if (feedback.length === 1) {
                console.log("Loginuser -3");
                _this.feedback = 'Username already in use';
            }
            else {
                console.log("Loginuser -4");
                _this.resetModel(_this.model, _this.model.username);
                _this.service.addNewUser(_this.model)
                    .subscribe(function (user) {
                    _this.model = user;
                    _this.getNewUser();
                }, function (error) { return _this.title = error; });
                _this.router.navigate(['welcome']);
            }
        });
    };
    NewUserComponent.prototype.resetModel = function (userModel, userModelUsername) {
        userModel = new new_user_1.NewUser(userModelUsername);
        this.model = userModel;
    };
    NewUserComponent.prototype.ngOnInit = function () {
        this.getNewUser();
    };
    NewUserComponent = __decorate([
        core_1.Component({
            selector: 'app-new-user',
            templateUrl: './new-user.component.html',
            styleUrls: ['./new-user.component.css'],
            providers: [new_user_service_1.NewUserService]
        })
    ], NewUserComponent);
    return NewUserComponent;
}());
exports.NewUserComponent = NewUserComponent;
