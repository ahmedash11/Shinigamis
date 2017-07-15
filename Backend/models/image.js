// load the things we need
const mongoose = require('mongoose');
const path = require('path');
const filePluginLib = require('mongoose-file');
const Schema = mongoose.Schema;

const filePlugin = filePluginLib.filePlugin;
const make_upload_to_model = filePluginLib.make_upload_to_model;

const uploads_base = path.join(__dirname, '/public/uploads');
const uploads = path.join(uploads_base, 'u');

// define the schema for our user model
const imageSchema = mongoose.Schema({
  fleet_id: String,

});

imageSchema.plugin(filePlugin, {
  name: 'img',
  upload_to: make_upload_to_model(uploads, 'photos'),
  relative_to: uploads_base
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Image', imageSchema);
