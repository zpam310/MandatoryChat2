"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by Tobias on 27-04-2017.
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var NewUserService = (function () {
    function NewUserService(http) {
        this.http = http;
        this.getNewUserUrl = '/new-user/get'; // URL to web API
        this.postNewUserUrl = '/new-user/post'; // URL to web API
    }
    /*
     * Get New User messages from server
     */
    NewUserService.prototype.getNewUser = function () {
        return this.http.get(this.getNewUserUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    /*
     * Send New user meassge to server
     */
    NewUserService.prototype.addNewUser = function (newUser) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.postNewUserUrl, newUser, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    /*
     * Data handlers
     */
    NewUserService.prototype.extractData = function (res) {
        var body = res.json();
        //console.log(body);
        return body || {};
    };
    NewUserService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        //console.log(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    NewUserService = __decorate([
        core_1.Injectable()
    ], NewUserService);
    return NewUserService;
}());
exports.NewUserService = NewUserService;