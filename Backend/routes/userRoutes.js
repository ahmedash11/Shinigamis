var express = require('express');
var router = express.Router();

// Controllers

var adminController = require('../controllers/adminController');
var clientController = require('../controllers/clientController');
var fleetController = require('../controllers/fleetController');
var historyProjectController = require('../controllers/historyProjectController');
var locationController = require('../controllers/locationController');
var awardController = require('../controllers/awardController');

// Routes for client

router.get('/getAllClients', clientController.getAllClients) // View all clients

router.get('/getAllFleets', fleetController.getAllFleets) // View all fleets

router.get('/getAllProjects', historyProjectController.getAllProjects) // View all projects

router.get('/getAllLocations', locationController.getAllLocations) // View all locations

router.get('/getAllAwards', awardController.getAllAwards) // View all awards

module.exports = router;
