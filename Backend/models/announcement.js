/**
* @mixin Admin
* @property {String} title Announcement title
* @property {String} content Announcement content
* @property {String} image Announcement image
* @property {Date} createdAt Date of announcement
*/


// load the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./User');
var timestamps = require('mongoose-timestamp');


// define the schema for our user model
const announcementSchema = new Schema({
	title: String,
	content: String,
	image: String,
	createdAt:Date
});
announcementSchema.plugin(timestamps);


// create the model for users and expose it to our app
module.exports = mongoose.model('Announcement', announcementSchema);
