var express = require('express');
var router = express.Router();
var adminController = require('../controllers/adminController');
var clientController = require('../controllers/clientController');
var fleetController = require('../controllers/fleetController');

// Routes for client

router.get('/getAllClients', clientController.getAllClients) // View all clients

router.get('/getAllFleets', fleetController.getAllFleets) // View all fleets

module.exports = router;
