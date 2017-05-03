var express = require('express');
var router = express.Router();
var database = require('../model/database');
var mongoose = require('mongoose');
const messageSchema = require('../model/message.server.model');
const ChatRoom = require("../model/chatroom.server.model");


/* GET all blog messages */
router.get('/get', function(req, res, next) {
    messageSchema.ChatMessageSchema.find({}).exec(function (err, blogs) {
        if (err)
            return console.error(err);
        console.log("Load success: ", blogs);
        res.send(blogs);
    });

});
router.get ('/get/:room', function (req, res, next) {
    messageSchema.ChatMessageSchema.find({chatRoom: req.params["room"]}, function (err, chat) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.send(chat);
    });
});

/* POST single blog post */
router.post('/post', function(req, res, next) {
    var instance = new messageSchema.ChatMessageSchema(req.body);
    console.log("blogpostrouter" + req.body);
    instance.save(function (err, Blog) {
        result = err?err:Blog;
        res.send(result);
        router.notifyclients();
        return result;
    });
});


/* Notify blog messages to connected clients */
router.clients = [];
router.addClient = function (client) {
    router.clients.push(client);
    router.notifyclients(client);
};
router.notifyclients = function (client, chatroom) {
    messageSchema.ChatMessageSchema.find({ chatRoom: chatroom }).exec(function (err, blogs) {
        console.log(blogs);
        if (err)
            return console.error(err);
        //console.log("Load success: ", blogs);
        var toNotify = client?new Array(client):router.clients;
        toNotify.forEach(function(socket){
            socket.emit('refresh', blogs);
        })
    });
}

//export the router
module.exports = router;
