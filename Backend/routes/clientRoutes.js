var express = require('express');
var router = express.Router();
var adminController = require('../controllers/adminController');
var clientController = require('../controllers/clientController');

// Routes for client

router.get('/getAllClients', clientController.getAllClients) // Add a new fleet



module.exports = router;
