/**
 * @mixin Award
 * @property {String}  title Award title
 * @property {String}  profileimg Award profileimg
 */



const mongoose = require('mongoose');
const path = require('path');
const filePluginLib = require('mongoose-file');
const Schema = mongoose.Schema;
var fs = require('fs');

const filePlugin = filePluginLib.filePlugin;
const make_upload_to_model = filePluginLib.make_upload_to_model;

const uploads_base = path.join(__dirname, '/public/uploads');
const uploads = path.join(uploads_base, 'u');



// define the schema for our user model
var awardSchema = new Schema({
    title: {
      type: String,
      unique: true,
      required: true
    }
});
awardSchema.plugin(filePlugin, {
    name: 'profileimg',
    upload_to: make_upload_to_model(uploads, 'photos'),
    relative_to: uploads_base,
});

// create the model for users and expose it to our app
var Award = module.exports = mongoose.model('Award', awardSchema);

module.exports.deleteAward = function(id, callback) {
    Award.findById(id, (err,award) => {
      if(err){
        let msg = {
          success: false,
          msg: err.message
        }
        return callback(msg)
      }

      if(!award){
        let msg = {
          success: false,
          msg: "Failed to find award!"
        }
        return callback(msg)
      } else {
        unlinkImage(award, callback)
      }
    })
}

/**
 * Delete picture(s) from public folder
 * @param {Award} award award to be deleted
 */

function unlinkImage(award, callback) {
  award.remove((err) => {
    if(err){
      let msg = {
        success: false,
        msg: err.message
      }
      return callback(msg)
    } else {
      fs.unlink(award.profileimg.path, (err) => {
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
