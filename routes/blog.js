var express = require('express');
var router = express.Router();
var database = require('../model/database');
var mongoose = require('mongoose');
const ChatMessage = require('../model/message.server.model');
var MessagesSchema = require("../model/message.server.model.js");
const ChatRoom = require("../model/chatroom.server.model");


/* GET all blog messages */
router.get('/get', function(req, res, next) {
    console.log("trin1");
    MessagesSchema.ChatMessageSchema.find({}).exec(function (err, blogs) {
        if (err)
            return console.error(err);
        console.log("Load success: ", blogs);
        res.send(blogs);

    });

});

/* POST single blog post */
router.post('/post', function(req, res, next) {
    console.log("Postman TESTS");
    var instance = new MessagesSchema.ChatMessageSchema(req.body);
    /** Example post body:
     {
       "author": "Morten Mathiasen",
       "body": "Hello everyone"
     }
     **/
    instance.save(function (err, Blog) {
        result = err?err:Blog;
        res.send(result);
        return result;
    });
});

//var entries = [];
//router.locals.entries = entries;

//var userIsCreated = 0;
//router.locals.userIsCreated = userIsCreated;

// Henter alle mine rooms
/*router.get("/rooms", function (req, res) {
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

// Henter og rendere new user viewet
router.get("/", function (req, res) {
    console.log("sdsd");
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

var message = [];
//router.locals.message = message;

// Get og render chat view
router.get("/:chat", function (req, res) {
    if (req.session.user == undefined) {
        res.redirect("/");
    }
    else {
        ChatRoomSchema.ChatRoomSchema.find({}, function (err, rooms) {
            if (err) {
                console.log(err);
                res.send(err);
            }
            MessagesSchema.ChatMessageSchema.find({chatRoom: req.params["chat"]}, function (err, messages) {

                if (err) {
                    console.log(err);
                    res.send(err);
                }
                res.render("chat", {
                    chatRoomName: req.params["chat"],
                    allMessages: messages,
                    allRooms: rooms

                });
            });

        });
    }

});

router.post("/", function (req, res) {
    userIsCreated = 0;
    if (!req.body.name) {
        return;
    }
    else {
        for (i = 0; i < entries.length; i++) {

            if (entries[i]['name'] == req.body.name) {
                userIsCreated = 1;
                break;
            }
        }
    }
    if (userIsCreated == 0) {
        req.session.user = req.body.name;
        entries.push({
            name: req.body.name
        });
        res.redirect("/rooms");
    } else {
        res.status(400).send("Name is already in use");
        return;
    }
});

router.post("/create-chat-room", function (req, res) {
    const createChatRoom = new ChatRoom({chatRoom: req.body.chatRoomName});
    createChatRoom.save(function (err, resultChatRoom) {
        if (err) return console.error(err);
        res.redirect("/rooms");
    });

});

//skal være nederst da den tager alle parametre.
router.post("/:chat", function (req, res) {
    if (!req.body.msg) {
        res.status(400).send("You have to enter something");
        return;
    }

    const chatMessage = new ChatMessage({
        username: req.session.user,
        msg: req.body.msg,
        chatRoom: req.params["chat"]
    });

    res.redirect(req.params["chat"]);
});*/

module.exports = router;