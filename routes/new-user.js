/**
 * Created by Tobias on 27-04-2017.
 */
var express = require('express');
var router = express.Router();
var database = require('../model/database');
var mongoose = require('mongoose');
const UserSchema = require('../model/user.server.model');

/* POST */
router.post ('/post', function (req, res, next) {
    console.log("Normal post")
    var instance = new UserSchema.User(req.body);
    req.session.username = req.body.username;
    instance.save(function (err, User) {
        result = err?err:User;
        res.send(result);
        return result;
    });

});
router.post('/login/user', function(req, res, next) {
    console.log("Hitting it")
    var username = req.body.username;
    UserSchema.User.find({ username: username }).exec(function (err, users) {
        if (err)
            return console.error(err);
        //console.log("Load success: ", users);
        res.send(users);
    });
});
/* GET */
router.get ('/get', function (req, res, next) {
    UserSchema.User.find({}).exec(function (err, users) {
        if(err)
            return console.error(err);
        console.log("load success", users);
        res.send(users)
    });
});


router.clients = [];
router.addClient = function (client) {
    router.clients.push(client);
    router.notifyclients(client);
};
router.notifyclients = function (client) {
    UserSchema.User.find({}).exec(function (err, users) {
        if (err)
            return console.error(err);
        //console.log("Load success: ", users);
        var toNotify = client ? new Array(client) : router.clients;
        toNotify.forEach(function (socket) {
            socket.emit('refresh', users);
        })
    });
}


//export the router
module.exports = router;
