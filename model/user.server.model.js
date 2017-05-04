/**
 * Created by Martin on 02-05-2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var exports = module.exports = {};

exports.UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    }
});
exports.User = mongoose.model('User', exports.UserSchema);