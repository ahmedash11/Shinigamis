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


// create the model for users and expose it to our app
var Admin = module.exports = mongoose.model('Admin', adminSchema);


module.exports.getAdminByEmail = function (email, callback) {
  var query = {
    email: email
  }
  Admin.findOne(query, callback)
}

module.exports.getAdminById = function (id, callback) {
  Admin.findById(id, callback)
}

module.exports.addAdmin = function (newAdmin, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newAdmin.password, salt, (err, hash) => {
      if (err) throw err
      newAdmin.password = hash
      newAdmin.save(callback)
    })
  })
}

module.exports.comparePassword = function (candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if (err) throw err
    callback(null, isMatch)
  })
}
