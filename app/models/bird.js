// app/models/bird.js
// grab the mongoose module
var mongoose = require('mongoose');

var birdSchema = new mongoose.Schema({
	stockInDate: Date,
	breed: String,
	number: Number,
	createdOn: Date
});

module.exports = mongoose.model('Bird', birdSchema);