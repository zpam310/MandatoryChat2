/**
 * Created by Tobias on 27-04-2017.
 */
var express = require('express');
var router = express.Router();
var database = require('../model/database');
const chatRoomSchema = require('../model/chatroom.server.model');


/* POST */
router.post ('/post', function (req, res, next) {
    var instance = new chatRoomSchema.ChatRoomSchema(req.body)


    instance.save(function (err, chatRoomName) {
        result = err?err:chatRoomName;
        res.send(result);
        return result;
    });
});
router.get ('/get', function (req, res) {
    console.log("HELLO");


    chatRoomSchema.ChatRoomSchema.find({}).exec(function (err, chat) {
        if (err)
            return console.error(err);
        console.log("Load success: ", chat);
        res.send(chat);
    });
});

/* GET */
router.get ('/get/:room', function (req, res, next) {
    chatRoomSchema.ChatRoomSchema.find({chatRoom: req.params["room"]}, function (err, chat) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.send(chat);
    });
});


/* Notify blog messages to connected clients */
router.clients = [];
router.addClient = function (client) {
    router.clients.push(client);
    router.notifyclients(client);
};
router.notifyclients = function (client) {
    ChatRoomSchema.ChatRoomSchema.find({}).exec(function (err, users) {
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
