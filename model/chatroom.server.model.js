/**
 * Created by Tobias on 26-04-2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var exports = module.exports = {};

exports.ChatRoomSchema = new Schema({
    chatRoom: {
        type: String,
        unique: true,
        required: true
    }

});
exports.ChatRoomSchema = mongoose.model('ChatRoom', exports.ChatRoomSchema);

