/**
 * @mixin Admin
 * @property {String} email Admin email
 * @property {String} password Admin password
 * @property {Boolean} isSuper Determines wether it is a super admin or not
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');
var generatePassword = require('password-generator'); // a dependency that generates random password
var mailController = require('../controllers/mailController')


// define the schema for our user model
var adminSchema = new Schema({
  email: {
    type: String,
    unique: true,
  },
  password: String,
  isSuper: Boolean,
});


// create the model for users and expose it to our app
var Admin = module.exports = mongoose.model('Admin', adminSchema);


module.exports.getAdminByEmail = function(email, callback) {
  var query = {
    email: email
  }
  Admin.findOne(query, callback)
}

module.exports.getAdminById = function(id, callback) {
  Admin.findById(id, callback)
}

module.exports.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

module.exports.addAdmin = function(email, isSuper, callback) {

  var password = generatePassword();

  let newAdmin = new Admin({
    email: email,
    password: password,
    isSuper: isSuper
  })

  Admin.updatePassword(newAdmin, (err) => {
    if (err) {
      let msg = {
        success: false,
        msg: err.message
      }
      return callback(msg)
    }

    // setup email data with unicode symbols
    const mailOptions = {
      from: ' "Rashied Maritime Services" <rashiedmaritimeservices@gmail.com@gmail.com>', // sender address
      to: email, // list of receivers
      subject: 'System Approval ✔', // Subject line
      text: `Congratulations! You have been added as an admin and now
                you can login using your email and password:${
                  password}`, // plain text body
    };

    // send mail with defined transport object
    mailController.sendMail(mailOptions, (msg) => {
      return callback(msg)
    })
  })

}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if (err) throw err
    callback(null, isMatch)
  })
}

module.exports.updatePassword = function(newAdmin, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newAdmin.password, salt, null, (err, hash) => {
      if (err) throw err
      newAdmin.password = hash
      newAdmin.save(callback)
    })
  })
}

module.exports.deleteAdmin = function(id, callback) {
  Admin.findByIdAndRemove(id, callback)
}
