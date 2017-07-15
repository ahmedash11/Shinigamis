/**
 * @mixin Award
 * @property {String}  Award title
 * @property {String}  Award picture
 */



const mongoose = require('mongoose');
const path = require('path');
const filePluginLib = require('mongoose-file');
const Schema = mongoose.Schema;

const filePlugin = filePluginLib.filePlugin;
const make_upload_to_model = filePluginLib.make_upload_to_model;

const uploads_base = path.join(__dirname, '/public/uploads');
const uploads = path.join(uploads_base, 'u');



// define the schema for our user model
var awardSchema = new Schema({
    title: String,
    picture: String
});
awardSchema.plugin(filePlugin, {
    name: 'profileimg',
    upload_to: make_upload_to_model(uploads, 'photos'),
    relative_to: uploads_base,
});

// create the model for users and expose it to our app
var Award = module.exports = mongoose.model('Award', awardSchema);

module.exports.deleteAward = function(id, callback) {
    Award.findByIdAndRemove(id, callback)
}
