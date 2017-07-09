var express = require('express');
var router = express.Router();

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

router.get('/getFleet/:fleetId', fleetController.getFleet)    // View fleet by id

router.get('/getImages/:fleetId', fleetController.getImages)


router.get('/getAllProjects', historyProjectController.getAllProjects) // View all projects

router.get('/getAllLocations', locationController.getAllLocations) // View all locations

router.get('/getAllAwards', awardController.getAllAwards) // View all awards

router.get('/getPositions', positionController.viewAllPositions) // View all awards

router.post('/sendApplication', applicationController.addApplication) // Send Application

module.exports = router;
