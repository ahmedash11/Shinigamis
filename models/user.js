// load the things we need
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const path = require('path');
const filePluginLib = require('mongoose-file');

const filePlugin = filePluginLib.filePlugin;
const make_upload_to_model = filePluginLib.make_upload_to_model;

const uploads_base = path.join(__dirname, 'uploads');
const uploads = path.join(uploads_base, 'u');
// define the schema for our user model
const userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  password: String,
  type: Number, // 1 for SuperAdmin, 2 for AddedAdmin
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
module.exports = mongoose.model('User', userSchema);
