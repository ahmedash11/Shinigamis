/**
 * @mixin AboutUs
 * Contact us
 * @property {String} companyName Company name
 * @property {String} phone Company phone numbers
 * @property {String} mobile Company mobile numbers
 * @property {String} fax Company fax numbers
 * @property {String} email Company email
 * @property {String} contactPersons Company contact persons
 * @property {String} website Company website
 * About us
 * @property {String} ourPersonnel Personnel
 * @property {String} chairmanMessage Chariman Message
 */


var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// define the schema for our user model
var aboutUsSchema = mongoose.Schema({
  companyName: {
    type: String,
    unique: true,
  },
  phone: [String],
  mobile: [String],
  fax: [String],
  address: String,
  email: String,
  contactsPersons: [String],
  website: String,
  ourPersonnel: String,
  chairmanMessage: String
});

// create the model for users and expose it to our app
var AboutUs = module.exports = mongoose.model('AboutUs', aboutUsSchema);

module.exports.getAboutUsById = function(id, callback) {
  AboutUs.findById(id, callback)
}

module.exports.updatePersonnel = function(updatedInfo, callback) {
  AboutUs.findOneAndUpdate({
    companyName: "Rashied Maritime Services Company"
  }, {
    $set: updatedInfo
  }, {
    new: true,
    upsert: false
  }, callback)
}

module.exports.updateChairmanMessage = function(updatedInfo, callback) {
  AboutUs.findOneAndUpdate({
    companyName: "Rashied Maritime Services Company"
  }, {
    $set: updatedInfo
  }, {
    new: true,
    upsert: false
  }, callback)
}

module.exports.updateContactUs = function(updatedContactUs, callback) {
  AboutUs.findOneAndUpdate({
    companyName: "Rashied Maritime Services Company"
  }, {
    $set: updatedContactUs
  }, {
    new: true,
    upsert: false
  }, callback)
}
