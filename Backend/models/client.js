/**
 * @mixin Client
 * @property {String} name Client name
 * @property {String} description Client description
 * @property {String} image Client image
 */


// load the things we need
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const path = require('path');
const filePluginLib = require('mongoose-file');

const filePlugin = filePluginLib.filePlugin;
const make_upload_to_model = filePluginLib.make_upload_to_model;

const uploads_base = path.join(__dirname, 'uploads');
const uploads = path.join(uploads_base, 'u');
var Schema = mongoose.Schema;


// define the schema for our user model
var clientSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  description: String,


});

clientSchema.plugin(filePlugin, {
  name: 'profileimg',
  upload_to: make_upload_to_model(uploads, 'photos'),
  relative_to: uploads_base,
});


// create the model for users and expose it to our app
var Client = module.exports = mongoose.model('Client', clientSchema);

module.exports.getClientByName = function(name, callback) {
  var query = {
    name: name
  }
  Client.findOne(query, callback)
}

module.exports.getClientById = function(id, callback) {
  Client.findById(id, callback)
}

module.exports.deleteClient = function(id, callback) {
  Client.findByIdAndRemove(id, callback)
}


module.exports.updateClient = function(id, updatedClient, callback) {
  Client.findOneAndUpdate({
    _id: id
  }, {
    $set: updatedClient
  }, {
    new: true,
    upsert: false
  }, callback)
}
