"use strict";
var router_1 = require('@angular/router');
var rooms_component_1 = require('./rooms/rooms.component');
var new_user_component_1 = require('./new-user/new-user.component');
exports.router = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'rooms', component: rooms_component_1.RoomsComponent },
    { path: 'newuser', component: new_user_component_1.NewUserComponent }
];
exports.routes = router_1.RouterModule.forRoot(exports.router);
