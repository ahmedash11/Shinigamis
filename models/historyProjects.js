// load the things we need
const mongoose = require('mongoose');

// define the schema for our user model
const interestSchema = mongoose.Schema({
  name: String, 
  unit: String,
  clientName: String

});

// create the model for users and expose it to our app
module.exports = mongoose.model('Interests', interestSchema);
