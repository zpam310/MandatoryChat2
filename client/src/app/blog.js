"use strict";
var Blog = (function () {
    function Blog(username, msg, chatRoom) {
        this.username = username;
        this.msg = msg;
        this.chatRoom = chatRoom;
    }
    return Blog;
}());
exports.Blog = Blog;
