// load the things we need
const mongoose = require('mongoose');
var fs = require('fs');
const path = require('path');
const filePluginLib = require('mongoose-file');
const Schema = mongoose.Schema;

const filePlugin = filePluginLib.filePlugin;
const make_upload_to_model = filePluginLib.make_upload_to_model;

const uploads_base = path.join(__dirname, '/public/uploads');
const uploads = path.join(uploads_base, 'u');

// define the schema for our user model
const imageSchema = mongoose.Schema({
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
    } else {
      fs.unlink("" + image.img.path, (err) => {
        if (err) {
          let msg = {
            success: false,
            msg: err.message
          }
          return callback(msg)
        } else {
          image.remove((err) => {
            if (err) {
              let msg = {
                success: false,
                msg: err.message
              }
              return callback(msg)
            } else {
              let msg = {
                success: true
              }
              return callback(msg)
            }
          })
        }
      })
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
        fs.unlink("" + images[i].img.path, (err) => {
          if (err) {
            let msg = {
              success: false,
              msg: err.message
            }
            return callback(msg)
          } else {
            if (i < images.length) {
              images[i].remove((err) => {
                if (err) {
                  let msg = {
                    success: false,
                    msg: err.message
                  }
                  return callback(msg)
                }
              })
            }
          }
        })
      }
      let msg = {
        success: true
      }
      return callback(msg)
    }
  })
}
