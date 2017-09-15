var express = require('express');
var router = express.Router();
var multer = require('multer');
var crypto = require('crypto');
var path = require('path');
var storage = multer.diskStorage({ // Specifying storage path for images
    destination: './public/uploads/',
    filename(req, file, cb) {
        crypto.pseudoRandomBytes(16, (err, raw) => {
            if (err) return cb(err);
            cb(null, raw.toString('hex') + path.extname(file.originalname));
        });
    },
});

var upload = multer({ storage, });

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
var Fleet = require('../models/fleet.js');


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

router.post('/makeProfilePic', fleetController.makeProfilePic); // Update profile pic

router.post('/makeCoverPic', fleetController.makeCoverPic); // Update cover pic

router.post('/deletePic', fleetController.deletePic); // Delete pic

router.post('/addClient', upload.single('avatar'), clientController.addClient, clientController.uploadClientImage); // Add a new client

router.post('/deleteClient', clientController.deleteClient); // Delete an existing client

router.post('/updateClient', upload.single('avatar'), clientController.updateClient, clientController.updateClientImage); // Update an existing client

router.post('/addProject', historyProjectController.addProject); // Add a new project

router.post('/deleteProject', historyProjectController.deleteProject); // Delete an existing project

router.post('/addAward', awardController.addAward); // Add a new award

router.post('/deleteAward', awardController.deleteAward); // Delete an existing award

router.get('/findApplications', applicationController.findAllApplications)

router.post('/deleteApplication', applicationController.deleteApplication);

router.get('/getApplication/:applicationId', applicationController.getApplication) // View application by id

router.post('/addPosition', positionController.addPosition);

router.post('/deletePosition', positionController.deletePosition);

router.post('/offerPosition', positionController.offerPosition);

router.post('/addAnnouncement', upload.single('avatar'), announcementController.addAnnouncement, announcementController.uploadAnnouncementImage);

router.get('/getAnnouncements', announcementController.findAllAnnouncements);

router.post('/deleteAnnouncement', announcementController.deleteAnnouncement);

router.post('/updateContactUs', aboutUsController.updateContactUs); // Update contact us

router.post('/upload', upload.array('avatar'), (req, res) => {

    Fleet.findOneAndUpdate({
        _id: req.body.fleet_id.substring(0)
    }, {
        $set: {
            coverPic: req.files[0].path,
            profilePic: req.files[0].path
        }
    }, {
        new: true,
        upsert: false
    }, (err) => {
        if (err) {
            res.status(500).json({
                msg: err.message
            })
        } else {
            for (var i = 0; i < req.files.length; i++) {
                var image = new Image({
                    fleet_id: req.body.fleet_id.substring(0),
                });

                image.img.name = req.files[i].filename;
                image.img.path = req.files[i].path;
                image.img.size = req.files[i].size;

                image.save((err) => {
                    if (err) {
                        return res.status(500).json({
                            msg: err.message
                        })
                    }
                });
            }
            res.status(200).json({
                msg: "Pictures Posted successfully"
            })
        }
    })


    // res.status(200).json({
    //   msg: 'Pictue(s) added successfully'
    // })

});

router.post('/AwardImage', upload.single('avatar'), awardController.uploadAwardImage);


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
                    res.status(500).json({
                        msg: err.message
                    })
                } else {
                    res.status(200).json({
                        msg: 'Pictue(s) added successfully'
                    })
                }
            });
        }
    });
});

module.exports = router;