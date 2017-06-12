 var Position = require('../models/position');
 var jwt = require('../auth/jwt');

 var positionController = {

     function addPosition(req, res) {

         var token = req.headers['jwt-token'];
         jwt.verify(token, (decoded) => {
             if (decoded.type === 1) {


                 // creating a new Position instance and saving it
                 var newPosition = new Position({
                     title: req.body.title,
                     description: req.body.description

                 });
                 newPosition.save();
                 res.status(200).json({
                     status: 'success',
                     data: {
                         newPosition
                     },
                 });
             } else {
                 res.status(500).json({
                     err: 'unauthorized access',
                 });
             }
         });

     },

     viewAllPositions(req, res) {

         Position.find((err, positions) => {
             if (err) { // if error occurred
                 res.status(500).json({
                     success: false,
                     msg: err.message,
                 });
             } else {
                 res.status(200).json({
                     success: true,
                     data: {
                         positions,
                     },
                 });
             }
         });
     },
     offerPosition(req, res) {
         var query = {
             _id: req.body.id
         }
         Position.findOneAndUpdate(query, {
             $set: { isOffered: true }
         }, {
             new: true,
             upsert: false
         })

     },
     viewAllOfferedPositions(req, res) {

         Position.find({isOffered:true},(err, offeredPositions) => {
             if (err) { // if error occurred
                 res.status(500).json({
                     success: false,
                     msg: err.message,
                 });
             } else {
                 res.status(200).json({
                     success: true,
                     data: {
                         offeredPositions,
                     },
                 });
             }
         });
     }
 };

 module.exports = positionController;
