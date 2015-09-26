// app/models/bird.js
// grab the mongoose module
var mongoose = require('mongoose');

//Create bird schema
var birdSchema = new mongoose.Schema({
	stockInDate: Date,
	breed: String,
	number: Number,
	createdOn: Date
});

//Export schema for availabilty at "global scope"
var Bird = mongoose.model('Bird', birdSchema);
module.exports = Bird;