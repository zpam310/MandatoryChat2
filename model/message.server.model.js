var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var exports = module.exports = {};

exports.MessageSchema = new Schema({
    username: String,
    msg: String,
    chatRoom: String,
    timeStamp: {type: Date, default: Date.now}
});
exports.ChatMessageSchema = mongoose.model('ChatMessage', exports.MessageSchema);
