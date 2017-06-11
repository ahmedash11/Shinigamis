var express = require('express');
var router = express.Router();
var adminController = require('../controllers/adminController');
var fleetController = require('../controllers/fleetController');

// Routes for admin user


// router.get('/', function(req, res) { //admin home page
//   // res.render('index');
//   console.log('admin homepage is here');
// });

//router.post('/admin', adminController.addAdmin); // Admin can add another admin

//router.get('/admins', adminController.getAllAdmins()); // Admin can get all admins

router.post('/addFleet', fleetController.addFleet); // Add a new fleet

router.post('/deleteFleet', fleetController.deleteFleet); // Delete an existing fleet

router.post('/updateFleet', fleetController.updateFleet); // Update an existing fleet



module.exports = router;
