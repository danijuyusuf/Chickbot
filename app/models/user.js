// app/models/user.js
// grab the mongoose module
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({ 
	firstname: {type: String, required: true},
	lastname: {type: String, required: true},
	email: {type: String, required: true, unique: true},
	position: {type: Number, required: true},
	password: {type: String, required: true},
	createdOn: {type: Date, default: Date.now},
	modifiedOn: Date,
	lastLogin: Date
});
var User = mongoose.model('User', userSchema);
module.exports = User;