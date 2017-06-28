/**
 * @mixin Award
 * @property {String}  Award title
 * @property {String}  Award picture
 */


var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// define the schema for our user model
var awardSchema = new Schema({
  title: String,
  picture: String
});


// create the model for users and expose it to our app
var Award = module.exports = mongoose.model('Award', awardSchema);

module.exports.deleteAward = function(id, callback) {
  Award.findByIdAndRemove(id, callback)
}
