/**
 * @mixin Fleet
 * Vessel main Particulars
 * @property {String} name  Vessel name
 * @property {String} type Vessel type
 * @property {String} design Vessel design
 * @property {String} class Vessel class
 * Prinicipal dimensions
 * @property {String} built Vessel built
 * @property {String} tonnage Gross tonnage
 * @property {String} draft Summer draft
 * Power
 * @property {String} horsepower Horsepower
 * Cargo deck
 * @property {String} deckSpace Deck space
 * @property {String} deckStrength Deck stength
 * @property {String} deckDimensions Deck dimension
 * Deck crane
 * @property {String} horsepower Horsepower
 * Accomandation
 * @property {String} accomandation Accomandation
 * Extra Features
 * @property {String} flag Flag
 * @property {String} bollardPull Bollard pull
 * @property {String} fireFighting Fire fighting
 * @property {String} mooringSystem Mooring system
 * @property {String} helideck Helideck
 * @property {[String]} images Images
 */


var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// define the schema for our user model
var fleetSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  type: String,
  design: String,
  class: String,
  built: String,
  tonnage: String,
  draft: String,
  horsepower: String,
  deckSpace: String,
  deckStrength: String,
  deckDimensions: String,
  crane: String,
  accomodation: String,
  flag: String,
  bollardPull: String,
  fireFighting: String,
  mooringSystem: String,
  helideck: String,
 

});


// create the model for users and expose it to our app
var Fleet = module.exports = mongoose.model('Fleet', fleetSchema);


module.exports.getFleetByName = function(name, callback) {
  var query = {
    name: name
  }
  Fleet.findOne(query, callback)
}

module.exports.getFleetById = function(id, callback) {
  Fleet.findById(id, callback)
}

module.exports.deleteFleet = function(id, callback) {
  Fleet.findByIdAndRemove(id, callback)
}


module.exports.updateFleet = function(id, updatedFleet, callback) {
  Fleet.findOneAndUpdate({
    _id: id
  }, {
    $set: updatedFleet
  }, {
    new: true,
    upsert: false
  }, callback)
}
