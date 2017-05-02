"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var rooms_service_1 = require("./rooms.service");
var rooms_1 = require("./rooms");
var RoomsComponent = (function () {
    function RoomsComponent(service) {
        this.service = service;
        this.rooms = [];
        this.roomList = this.rooms;
        this.title = 'MEAN app with Angular2';
        this.model = new rooms_1.Rooms("");
    }
    RoomsComponent.prototype.getRooms = function () {
        var _this = this;
        this.service.getRooms()
            .subscribe(function (listOfRooms) {
            _this.rooms = listOfRooms;
            console.log(_this.rooms);
        }, function (error) { return _this.rooms = error; });
        return this.rooms;
    };
    RoomsComponent.prototype.addRooms = function () {
        var _this = this;
        this.resetModel(this.model, this.model.chatRoom);
        this.service.addRooms(this.model)
            .subscribe(function (room) {
            _this.model = room;
            _this.getRooms();
        }, function (error) { return _this.title = error; });
    };
    RoomsComponent.prototype.resetModel = function (roomModel, roomModelChatRoom) {
        roomModel = new rooms_1.Rooms(roomModelChatRoom);
        this.model = roomModel;
    };
    RoomsComponent.prototype.ngOnInit = function () {
        this.getRooms();
    };
    RoomsComponent = __decorate([
        core_1.Component({
            selector: 'app-rooms',
            templateUrl: './rooms.component.html',
            styleUrls: ['./rooms.component.css'],
            providers: [rooms_service_1.RoomsService]
        })
    ], RoomsComponent);
    return RoomsComponent;
}());
exports.RoomsComponent = RoomsComponent;
