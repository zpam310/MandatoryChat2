/**
 * Created by Tobias on 27-04-2017.
 */
var express = require('express');
var router = express.Router();
var database = require('../model/database');


// var entries = [];
// router.locals.entries = entries;
//
// var userIsCreated = 0;
// router.locals.userIsCreated = userIsCreated;

// Henter og rendere new user viewet
router.get("/get", function (req, res) {
    console.log("sdsd");
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

module.exports = router;