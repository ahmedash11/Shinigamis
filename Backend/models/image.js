// load the things we need
var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');
var filePluginLib = require('mongoose-file');
var Schema = mongoose.Schema;

var filePlugin = filePluginLib.filePlugin;
var make_upload_to_model = filePluginLib.make_upload_to_model;

var uploads_base = path.join(__dirname, '/public/uploads');
var uploads = path.join(uploads_base, 'u');

// define the schema for our user model
var imageSchema = mongoose.Schema({
  fleet_id: String,

});

imageSchema.plugin(filePlugin, {
  name: 'img',
  upload_to: make_upload_to_model(uploads, 'photos'),
  relative_to: uploads_base
});

// create the model for users and expose it to our app
var Image = module.exports = mongoose.model('Image', imageSchema);

module.exports.deleteImage = function(id, callback) {
  Image.findById(id, (err, image) => {
    if (err) {
      let msg = {
        success: false,
        msg: err.message
      }
      return callback(msg)
    }
    if (!image) {
      let msg = {
        success: false,
        msg: "Failed to delete image"
      }
      return callback(msg)
    } else {
      unlinkImage(image, false, callback)
    }
  })
}

module.exports.deleteFleetImages = function(fleetId, callback) {
  var query = {
    fleet_id: fleetId
  }
  Image.find(query, (err, images) => {
    if (err) {
      let msg = {
        success: false,
        msg: err.message
      }
      return callback(msg)
    } else {
      for (var i = 0; i < images.length; i++) {
        unlinkImage(images[i], true, callback)
      }

      let msg = {
        success: true
      }
      return callback(msg)
    }
  })
}

/**
 * Delete picture(s) from public folder
 * @param {Image} image Image to be deleted
 * @param {boolean} isArray Boolean to check if its an array of images or a single image to be deleted
 */

function unlinkImage(image, isArray, callback) {
  fs.unlink(image.img.path, (err) => {
    if (err) {
      let msg = {
        success: false,
        msg: err.message
      }
      return callback(msg)
    }
    removeImage(image, isArray, callback)
  })
}

/**
 * Delete image from db
 * @param {Image} image Image to be deleted
 * @param {boolean} isArray Boolean to check if its an array of images or a single image to be deleted
 */

function removeImage(image, isArray, callback) {
  image.remove((err) => {
    if (err) {
      let msg = {
        success: false,
        msg: err.message
      }
      return callback(msg)
    }
    if (!isArray) {
      let msg = {
        success: true
      }
      return callback(msg)
    }
  })
}
