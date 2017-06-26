/**
 * @mixin AboutUs
 * @property {String} companyName Company name
 * @property {[String]} phone Company phone numbers
 * @property {[String]} mobile Company mobile numbers
 * @property {[String]} fax Company fax numbers
 * @property {String} email Company email
 * @property {String} website Company website
 * @property {String} ourPersonnel Personnel
 * @property {String} chairmanMessage Chariman Message
 */


var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// define the schema for our user model
var aboutUsSchema = mongoose.Schema({
    companyName: {
        type: String,
        unique: true,
    },
    phone: [String],
    mobile: [String],
    fax: [String],
    //services: String,
    //riskAssessment: String,
    //policies: String,
    address:String,
    email: String,
    website: String,
    ourPersonnel: String,
    chairmanMessage: String
});

module.exports.updateInfo = function(id, info, callback) {
        AboutUs.findOneAndUpdate({
            _id: id
        }, {
            $set: { phone: info.phone, mobile: info.mobile, fax: info.fax, email: info.email,address:info.address website: info.website }
        }, {
            new: true,
            upsert: false
        }, callback)


        module.exports.updatePersonnel = function(id, info, callback) {
                AboutUs.findOneAndUpdate({
                    _id: id
                }, {
                    $set: { ourPersonnel: info }
                }, {
                    new: true,
                    upsert: false
                }, callback)


                module.exports.updateChairmanMessage = function(id, info, callback) {
                        AboutUs.findOneAndUpdate({
                            _id: id
                        }, {
                            $set: { chairmanMessage: info }
                        }, {
                            new: true,
                            upsert: false
                        }, callback)

                        // create the model for users and expose it to our app
                        module.exports = mongoose.model('AboutUs', aboutUsSchema);
