var express = require('express');
var router = express.Router();
const multer = require('multer');
const crypto = require('crypto');
const path = require('path');
const storage = multer.diskStorage({ // specifying storage path for images

  destination: './public/uploads/',
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

// Controllers

var adminController = require('../controllers/adminController');
var announcementController = require('../controllers/announcementController');
var fleetController = require('../controllers/fleetController');
var applicationController = require('../controllers/applicationController');
var clientController = require('../controllers/clientController');
var locationController = require('../controllers/locationController');
var historyProjectController = require('../controllers/historyProjectController');
var awardController = require('../controllers/awardController');
var positionController = require('../controllers/positionController');
var aboutUsController = require('../controllers/aboutUsController');

// Models

var Image = require('../models/image');
var Client = require('../models/client.js');
var Award = require('../models/award.js');
var Announcement = require('../models/announcement.js');


// Routes for admin user

router.post('/authenticate', adminController.authenticate); // Admin  login

router.post('/addAdmin', adminController.addAdmin); // Admin can add another admin

router.post('/deleteAdmin', adminController.deleteAdmin); // Admin can delete another admin

router.get('/admins', adminController.getAllAdmins); // Admin can get all admins

router.post('/editPassword', adminController.editPassword); // Admin can get all admins

router.post('/addlocation', locationController.addLocation); // Add a new location

router.post('/deletelocation', locationController.deleteLocation); // Add a new location

router.post('/updatelocation', locationController.updateLocation); // edit a specific location

router.post('/addFleet', fleetController.addFleet); // Add a new fleet

router.post('/deleteFleet', fleetController.deleteFleet); // Delete an existing fleet

router.post('/updateFleet', fleetController.updateFleet); // Update an existing fleet

router.post('/addClient', clientController.addClient); // Add a new client

router.post('/deleteClient', clientController.deleteClient); // Delete an existing client

router.post('/updateClient', clientController.updateClient); // Update an existing fleet

router.post('/addProject', historyProjectController.addProject); // Add a new project

router.post('/deleteProject', historyProjectController.deleteProject); // Delete an existing project

router.post('/addAward', awardController.addAward); // Add a new award

router.post('/deleteAward', awardController.deleteAward); // Delete an existing award

router.get('/findApplications', applicationController.findAllApplications)

router.post('/deleteApplication', applicationController.deleteApplication);

router.post('/addPosition', positionController.addPosition);

//router.post('/deletePosition', positionController.deletePosition);

router.post('/addAnnouncement', announcementController.addAnnouncement);

router.get('/getAnnouncements', announcementController.findAllAnnouncements);

router.post('/deleteAnnouncement', announcementController.deleteAnnouncement);

router.post('/upload', upload.array('avatar'), (req, res) => {
  console.log(req.files);
  for (var i = 0; i < req.files.length; i++) {
    const image = new Image({
      fleet_id: req.body.fleet_id.substring(0),

    });

    image.img.name = req.files[i].filename;
    image.img.path = req.files[i].path;
    image.img.size = req.files[i].size;

    image.save((err) => {
      if (err) {
        console.log('error');
      } else {
        console.log('success');
      }

    });
  }
});
router.post('/ClientImage', upload.single('avatar'), (req, res) => {
  Client.findById(req.body.client_id, function(error, client) {
    if (error)
      console.log(error)
    else {
      client.profileimg.name = req.file.filename;
      client.profileimg.path = req.file.path;
      client.profileimg.size = req.file.size;
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
});

router.post('/AwardImage', upload.single('avatar'), (req, res) => {
  Award.findById(req.body.award_id, function(error, award) {
    if (error)
      console.log(error)
    else {
      award.profileimg.name = req.file.filename;
      award.profileimg.path = req.file.path;
      award.profileimg.size = req.file.size;
      award.save((err) => {
        if (err) {
          console.log('error');
        } else {
          res.send("sucess");
        }
        console.log('success');
      });
    }
  });

});

router.post('/AnnouncementImage', upload.single('avatar'), (req, res) => {
  Announcement.findById(req.body.user_id, function(error, announcement) {
    if (error)
      console.log(error)
    else {
      announcement.profileimg.name = req.file.filename;
      announcement.profileimg.path = req.file.path;
      announcement.profileimg.size = req.file.size;
      announcement.save((err) => {
        if (err) {
          console.log('error');
        } else {
          res.send("sucess");
        }
        console.log('success');
      });
    }
  });
});


router.post('/updateChairmanMessage', aboutUsController.updateChairmanMessage); // Update chairman message

router.post('/updatePersonnel', aboutUsController.updatePersonnel); // Update personnel

router.post('/updateContactUs', aboutUsController.updateContactUs); // Update contact us

router.post('/offerPosition', positionController.offerPosition);

//router.post('/decode', adminController.getsignedvals);

module.exports = router;
