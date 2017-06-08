// load the things we need
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User');
const Interests = require('./Interests');
const Offer = require('./Offer');

// define the schema for our user model
const locationtSchema = mongoose.Schema({
  
  title: Number,
  address: String,
 phone:[String],
 fax:[String] 
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Location',locationSchema);
