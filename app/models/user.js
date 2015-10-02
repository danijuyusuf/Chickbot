// app/models/user.js
// grab the mongoose module
var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var bcrypt = require('bcrypt-nodejs');
var userSchema = new mongoose.Schema({ 
	// firstname: {type: String},
	// lastname: {type: String},
	username: {type: String},
	//position: {type: Number},
	password: {type: String}
	// createdOn: {type: Date, default: Date.now},
	// modifiedOn: Date,
	// lastLogin: Date
});
userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', userSchema);