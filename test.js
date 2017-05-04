"use strict";
// NPM install mongoose and chai. Make sure mocha is globally
// installed
const mongoose = require('mongoose');
const chai = require('chai');
const expect = chai.expect;
const UserSchema = require('./model/user.server.model');
const chatRoomSchema = require('./model/chatroom.server.model');


describe('Test', function() {
    //Before starting the test, create a sandboxed database connection
    //Once a connection is established invoke done()
    before(function (done) {
        mongoose.connect('mongodb://localhost/test');
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error'));
        db.once('open', function () {
            console.log('We are connected to test database!');
            done();
        });
    });

    describe('Username: First time you run it should PASS but then the second time it should FAIL because the name already is created', function() {
        //Save object with 'name' value of 'Mike"
        it('Save new name into the database users collection', function (done) {
            var assert = require('chai').assert;
            var testUsername = UserSchema.User({
                username: 'Martin'
            });

            testUsername.save(done);

            assert.typeOf(testUsername.username, 'string');

        });
    });
       describe('chatroom: First time you run it should PASS but then the second time it should FAIL because the name already is created', function() {
            //Save object with 'name' value of 'Mike"
            it('Save new chatroom into the database chatRoom collection', function(done) {
                var assert = require('chai').assert;
                var testRoomUnique = chatRoomSchema.ChatRoomSchema ({
                    chatRoom: 'Kartofler'
                });
                testRoomUnique.save(done);
                assert.typeOf(testRoomUnique.chatRoom, 'string');

            });
        });
    describe('No incorrect data: cannot input wrong data in the database', function() {
       it('Dont save incorrect format to database', function(done) {
            //Attempt to save with wrong info. An error should trigger
            var wrongSave = UserSchema.User({
                username: 'Not Mike'
            });
            wrongSave.save(err => {
                if(err) { return done(); }
                throw new Error('Should generate error!');
        });
        });
    });
    describe('Find one username:', function() {
        it('Should retrieve a specific username from test database', function(done) {
            //Look up the 'username' object previously saved.
            UserSchema.User.find({username: 'Martin'}, (err, username) => {
                if(err) {throw err;}
                if(username.length === 0) {throw new Error('No data!');}
            done();
        })
        });
    });
});


//After all tests are finished drop database and close connection
//If to much test data drop database
/*      after(function(done){
        mongoose.connection.db.dropDatabase(function(){
            mongoose.connection.close(done);
        });
    });*/
