/**
* @mixin AboutUs
* @property {String} companyName Company name
* @property {String} phone Company phone numbers
* @property {String} mobile Company mobile numbers
* @property {String} fax Company fax numbers
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
  services: [String],
  riskAssessment: [String],
  policies: [String],
  email: String,
  website: String,
  ourPersonnel: String,
  chairmanMessage: String
});


// create the model for users and expose it to our app
module.exports = mongoose.model('AboutUs', aboutUsSchema);
