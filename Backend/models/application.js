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
const Schema = mongoose.Schema;


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
  Cv: String

})


// create the model for users and expose it to our app
var Application = module.exports = mongoose.model('Application', applicationSchema);

module.exports.deleteApplication = function(id, callback) {
  Application.findByIdAndRemove(id, callback)
}
