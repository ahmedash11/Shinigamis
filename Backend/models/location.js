/**
 * @mixin Location
 * @property {String}  Location title
 * @property {String}  Address
 * @property {String}  Phone numbers
 * @property {String}  Fax numbers
 * @property {String}  Mobile number
 * @property {String}  Email
 */


// load the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// define the schema for our user model
var locationSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  address: String,
  phone: String,
  fax: String,
  mobile: String,
  email: String
});
// create the model for users and expose it to our app
var Location = module.exports = mongoose.model('Location', locationSchema);

module.exports.deleteLocation = function(id, callback) {
  Location.findByIdAndRemove(id, callback)
}


module.exports.updateLocation = function(id, updatedLocation, callback) {
  Location.findOneAndUpdate({
    _id: id
  }, {
    $set: updatedLocation
  }, {
    new: true,
    upsert: false
  }, callback)
}
