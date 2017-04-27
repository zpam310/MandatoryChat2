var express = require('express');
var router = express.Router();
var database = require('../model/database');
var mongoose = require('mongoose');
const ChatMessage = require('../model/message.server.model');
var MessagesSchema = require("../model/message.server.model.js");



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
});

module.exports = router;