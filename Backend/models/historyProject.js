/**
* @mixin HistoryProject
* @property {String} name Contracts name
* @property {String} unit Fleet name
* @property {String} clientName Title of the client
*/


// load the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// define the schema for our user model
var historyProjectSchema = new Schema({
  name: String,
  unit: String,
  clientName: String
});


// create the model for users and expose it to our app
module.exports = mongoose.model('HistoryProject', historyProjectSchema);
