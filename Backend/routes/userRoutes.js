var express = require('express');
var router = express.Router();

// Controllers

var adminController = require('../controllers/adminController');
var clientController = require('../controllers/clientController');
var fleetController = require('../controllers/fleetController');
var historyProjectController = require('../controllers/historyProjectController');
var locationController = require('../controllers/locationController');
var awardController = require('../controllers/awardController');
var aboutUsController = require('../controllers/aboutUsController');

// Routes for client

router.get('/getAllClients', clientController.getAllClients) // View all clients

router.get('/getAllFleets', fleetController.getAllFleets) // View all fleets

router.get('/getFleet/:fleetId', fleetController.getFleet) // View fleet by id

router.get('/getAllProjects', historyProjectController.getAllProjects) // View all projects

router.get('/getAllLocations', locationController.getAllLocations) // View all locations

router.get('/getAllAwards', awardController.getAllAwards) // View all awards

router.get('/getInfo', aboutUsController.getInfo) // View about us info

module.exports = router;
