// load the things we need
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// define the schema for our user model
const studentSchema = mongoose.Schema({
  fleetName:  {
    type: String,
    unique: true,
  },
  university: String,
  address: String,
  birthdate: Date,
  description: String,
  is_assessed: Boolean,
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Fleet', studentSchema);
