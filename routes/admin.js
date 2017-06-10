var express = require('express');
var router = express.Router();
var announcementController = require('../controllers/announcementController');
var adminController = require('../controllers/adminController');

// Routes for admin user


// router.get('/', function(req, res) { //admin home page
//   // res.render('index');
//   console.log('admin homepage is here');
// });

router.post('/admin', adminController.addAdmin); // Admin can add another admin

router.get('/admins', adminController.getAllAdmins); // Admin can get all admins

router.post('/announcements/post', adminController.adminPostAnnouncement); // Deleting a review

router.post('/adminpost', adminController.adminPostAnnouncement); // Admin can post announcements


module.exports = router;
