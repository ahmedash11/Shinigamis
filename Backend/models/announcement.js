/**
 * @mixin Admin
 * @property {String} title Announcement title
 * @property {String} content Announcement content
 * @property {String} image Announcement image
 * @property {Date} createdAt Date of announcement
 */


const mongoose = require('mongoose');
const path = require('path');
const filePluginLib = require('mongoose-file');
const Schema = mongoose.Schema;

const filePlugin = filePluginLib.filePlugin;
const make_upload_to_model = filePluginLib.make_upload_to_model;

const uploads_base = path.join(__dirname, '/public/uploads');
const uploads = path.join(uploads_base, 'u');
var timestamps = require('mongoose-timestamp');


// define the schema for our user model
const announcementSchema = new Schema({
  title: String,
  content: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});
announcementSchema.plugin(filePlugin, {
  name: 'profileimg',
  upload_to: make_upload_to_model(uploads, 'photos'),
  relative_to: uploads_base,
});
// announcementSchema.plugin(timestamps);


// create the model for users and expose it to our app
module.exports = mongoose.model('Announcement', announcementSchema);
