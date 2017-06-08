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
*/


var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// define the schema for our user model
var fleetSchema = mongoose.Schema({
  // Vessel main Particulars
  name:  {
    type: String,
    unique: true,
  },
  type: String,
  design: String,
  class: String,

  // Prinicipal dimensions
  built: String,
  tonnage: String,
  draft: String,

  // Power
  horsepower: String,

  // Cargo Deck
  deckSpace: String,
  deckStrength: String,
  deckDimensions: String,

  // Deck Crane
  crane: String,

  // Accomandation
  accomandation: String,

  //Extra Features
  flag: String,
  bollardPull: String,
  fireFighting: String,
});


// create the model for users and expose it to our app
module.exports = mongoose.model('Fleet', fleetSchema);
