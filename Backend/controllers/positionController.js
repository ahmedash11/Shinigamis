 var Position = require('../models/position');
 var jwt = require('../auth/jwt');

 var positionController = {

     addPosition(req, res) {

         var token = req.headers['jwt-token'];
         jwt.verify(token, (decoded) => {
             if (decoded) {


                 // creating a new Position instance and saving it
                 var newPosition = new Position({
                     title: req.body.title,
                     description: req.body.description,
                     isOffered: false

                 });
                 newPosition.save();
                 res.status(200).json({
                     status: 'success',
                     msg: 'Position successfully added',
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
     deletePosition(req, res) {
         var token = req.headers['jwt-token'];

         jwt.verify(token, (decoded) => {
             if (decoded) {
                 Position.deletePosition(req.body.id, (err) => {
                     if (err) {
                         res.status(500).json({
                             success: false,
                             msg: err.message
                         });
                     } else {
                         res.status(200).json({
                             success: true,
                             msg: 'Position successfully deleted'
                         });
                     }
                 })
             } else {
                 res.status(500).json({
                     success: false,
                     msg: 'Unauthorized Access',
                 });
             }
         })
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

         Position.find({ isOffered: true }, (err, offeredPositions) => {
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
