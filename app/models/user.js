// app/models/user.js
// grab the mongoose module
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({ 
	firstname: String,
	lastname: String,
	email: {type: String, unique: true},
	position: String,
	password: String,
	createdOn: {type: Date, default: Date.now},
	modifiedOn: Date,
	lastLogin: Date
});

module.exports = mongoose.model('User', userSchema);