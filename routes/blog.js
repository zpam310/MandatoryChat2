var express = require('express');
var router = express.Router();
var database = require('../model/database');
var mongoose = require('mongoose');
const messageSchema = require('../model/message.server.model');


/* GET all blog messages */
router.get('/get', function(req, res, next) {
    messageSchema.ChatMessageSchema.find({}).exec(function (err, blogs) {
        if (err)
            return console.error(err);
        console.log("Load success: ", blogs);
        res.send(blogs);
    });

});

/* POST single blog post */
router.post('/post', function(req, res, next) {
    var instance = new messageSchema.ChatMessageSchema(req.body);
    /** Example post body:
     {
       "author": "Morten Mathiasen",
       "body": "Hello everyone"
     }
     **/
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
router.notifyclients = function (client) {
    messageSchema.ChatMessageSchema.find({}).exec(function (err, blogs) {
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

/*var message = [];
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
});*/
