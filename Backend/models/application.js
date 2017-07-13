/**
* @mixin Application
* @property {String} firstName  Applicant first name
* @property {String} lastName  Applicant last name
* @property {String} position Position applied for
* @property {Number} phone  Applicant phone number
* @property {String} email  Applicant email
* @property {String} address  Applicant address
* @property {String} country  Applicant country
* @property {Date} birthdate  Applicant birthdate
* @property {String} experience  Applicant experience
* @property {String} cv  Applicant CV
*/


const mongoose = require('mongoose');
const path = require('path');
const filePluginLib = require('mongoose-file');
const Schema = mongoose.Schema;

const filePlugin = filePluginLib.filePlugin;
const make_upload_to_model = filePluginLib.make_upload_to_model;

const uploads_base = path.join(__dirname, '/public/uploads');
const uploads = path.join(uploads_base, 'u');


var applicationSchema = new Schema({
  firstName: String,
  lastName: String,
  position: String,
  phone: Number,
  email: String,
  address: String,
  country: String,
  birthdate: Date,
  experience: String,
  Cv : String

})


// create the model for users and expose it to our app
var Application = module.exports = mongoose.model('Application', applicationSchema);

module.exports.deleteAward = function(id, callback) {
  Application.findByIdAndRemove(id, callback)
}

