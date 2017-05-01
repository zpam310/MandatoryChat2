"use strict";
var Chat = (function () {
    function Chat(username, msg, chatRoom) {
        this.username = username;
        this.msg = msg;
        this.chatRoom = chatRoom;
    }
    return Chat;
}());
exports.Chat = Chat;
