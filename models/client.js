/**
* @mixin Client
* @property {String} name Client name
* @property {String} description Client description
* @property {String} image Client image
*/


// load the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// define the schema for our user model
var clientSchema = new Schema({
	name:  {
    type: String,
    unique: true,
  },
	description: String,
	image:String

});


// create the model for users and expose it to our app
module.exports = mongoose.model('Client', clientSchema);
