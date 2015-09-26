// app/models/user.js
// grab the mongoose module
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({ 
	firstname: String,
	lastname: String,
	email: {type: String, unique: true},
	position: Number,
	password: String,
	createdOn: {type: Date, default: Date.now},
	modifiedOn: Date,
	lastLogin: Date
});
var User = mongoose.model('User', userSchema);
module.exports = User;