/**
 * Created by Tobias on 26-04-2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var exports = module.exports = {};

exports.ChatRoomSchema = new Schema({
    chatRoom: String
});
exports.ChatRoomSchema = mongoose.model('ChatRoom', ChatRoomSchema);
