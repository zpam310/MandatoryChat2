/**
 * Created by Tobias on 27-04-2017.
 */
const ChatRoom = require("../model/chatroom.server.model");
var express = require('express');
var router = express.Router();
var database = require('../model/database');


// Henter alle mine rooms
router.get("/get", function (req, res) {
    console.log("Martin");
    if (req.session.user == undefined) {
        res.redirect("/new-user");
    }
    else {
        ChatRoom.ChatRoomSchema.find({}, function (err, rooms) {
            if (err) {
                console.log(err);
                res.send(err);
            }
            res.render("index", {
                allRooms: rooms
            });
        });
    }
});

// Henter create new chat room viewet
router.get("/create-chat-room", function (req, res) {

    if (req.session.user == undefined) {
        res.redirect("/");
    }
    else {
        ChatRoomSchema.ChatRoomSchema.find({}, function (err, rooms) {
            console.log(rooms);
            if (err) {
                console.log(err);
                res.send(err);
            }
            res.render("create-chat-room", {
                allRooms: rooms
            });
        });
    }
});
router.post("/create-chat-room", function (req, res) {
    const createChatRoom = new ChatRoom({chatRoom: req.body.chatRoomName});
    createChatRoom.save(function (err, resultChatRoom) {
        if (err) return console.error(err);
        res.redirect("/rooms");
    });

});

module.exports = router;