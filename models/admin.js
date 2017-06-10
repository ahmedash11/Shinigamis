/**
* @mixin Admin
* @property {String} email Admin email
* @property {String} password Admin password
* @property {Boolean} isSuper Determines wether it is a super admin or not
*/


// load the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');
var path = require('path');
var filePluginLib = require('mongoose-file');

var filePlugin = filePluginLib.filePlugin;
var make_upload_to_model = filePluginLib.make_upload_to_model;

var uploads_base = path.join(__dirname, 'uploads');
var uploads = path.join(uploads_base, 'u');


// define the schema for our user model
var adminchema = new Schema({
  email: {
    type: String,
    unique: true,
  },
  password: String,
  isSuper: Boolean,
});

// methods ======================

// generating a hash
userSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};


// checking if password is valid
userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.local.password);
};


// create the model for users and expose it to our app
module.exports = mongoose.model('Admin', adminSchema);
