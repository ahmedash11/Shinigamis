var express = require('express');
var router = express.Router();
const multer = require('multer');
const crypto = require('crypto');
const path = require('path');
const storage = multer.diskStorage({ // specifying storage path for images
  destination: './public/uploads/CVs',
  filename(req, file, cb) {
    crypto.pseudoRandomBytes(16, (err, raw) => {
      if (err) return cb(err);

      cb(null, raw.toString('hex') + path.extname(file.originalname));
    });
  },
});

const upload = multer({
  storage,
});
var Application = require('../models/application');
// Controllers

var adminController = require('../controllers/adminController');
var applicationController = require('../controllers/applicationController');
var clientController = require('../controllers/clientController');
var positionController = require('../controllers/positionController');
var fleetController = require('../controllers/fleetController');
var historyProjectController = require('../controllers/historyProjectController');
var locationController = require('../controllers/locationController');
var awardController = require('../controllers/awardController');


// Routes for client

router.get('/getAllClients', clientController.getAllClients) // View all clients

router.get('/getAllFleets', fleetController.getAllFleets) // View all fleets

router.get('/getFleet/:fleetId', fleetController.getFleet) // View fleet by id

router.get('/getImages/:fleetId', fleetController.getImages)


router.get('/getAllProjects', historyProjectController.getAllProjects) // View all projects

router.get('/getAllLocations', locationController.getAllLocations) // View all locations

router.get('/getAllAwards', awardController.getAllAwards) // View all awards

router.get('/getPositions', positionController.viewAllPositions) // View all awards

router.post('/sendApplication', applicationController.addApplication) // Send Application

router.post('/uploadCV', upload.single('CV'), (req, res) => {
  Application.findById(req.body.app_id, function(error, client) {
    if (error)
      console.log(error)
    else {
      client.Cv = req.file.path

      client.save((err) => {
        if (err) {
          console.log('error');
        } else {
          res.send("sucess");
        }
        console.log('success');
      });
    }
  });
})





module.exports = router;
