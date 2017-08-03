/**
 * @mixin Position
 * @property {String} title  Position title
 * @property {String} description  Position description
 * @property {String} isOffered Boolean
 */


var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var positionSchema = new Schema({
  title: String,
  description: String,
  isOffered: Boolean
})


// create the model for users and expose it to our app
var Position = module.exports = mongoose.model('Position', positionSchema);

module.exports.deletePosition = function(id, callback) {
  Position.findByIdAndRemove(id, callback)
}
