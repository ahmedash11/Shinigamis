/**
* @mixin Location
* @property {String} title Location title
* @property {String} address Address
* @property {[String]} phone Phone numbers
* @property {[String]} fax Fax numbers
* @property {[String]} mobile Mobile number
* @property {String} email Email
*/


// load the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// define the schema for our user model
var locationtSchema = new Schema({
  title: Number,
  address: String,
  phone:[String],
  fax:[String] ,
  mobile:[String] ,
  email: String
});


// create the model for users and expose it to our app
module.exports = mongoose.model('Location',locationSchema);
