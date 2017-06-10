/**
* @mixin Award
* @property {String} title Award title
* @property {String} picture Award picture
*/


var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// define the schema for our user model
var awardSchema = new Schema({
  title: String,
  picture: String
});


// create the model for users and expose it to our app
module.exports = mongoose.model('Award', awardSchema);
