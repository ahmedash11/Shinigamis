// load the things we need
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User');

// define the schema for our user model
const ccSchema = mongoose.Schema({
	clientName:  {
    type: String,
    unique: true,
  },
	description: String,

});

// create the model for users and expose it to our app
module.exports = mongoose.model('Client', ccSchema);
