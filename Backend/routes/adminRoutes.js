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
var fleetController = require('../controllers/fleetController');
var applicationController = require('../controllers/applicationController');
var clientController = require('../controllers/clientController');
var locationController = require('../controllers/locationController');
var historyProjectController = require('../controllers/historyProjectController');
var awardController = require('../controllers/awardController');
var positionController = require('../controllers/positionController');
var Image = require('../models/Image');


// Routes for admin user

router.post('/authenticate', adminController.authenticate); // Admin  login

//router.post('/admin', adminController.addAdmin); // Admin can add another admin

router.get('/admins', adminController.getAllAdmins); // Admin can get all admins

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

router.post('/findApplications', applicationController.findAllApplications)

router.post('/deleteApplication', applicationController.deleteApplication);

router.post('/addPosition', positionController.addPosition);

router.post('/deletePosition', positionController.deletePosition);

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

router.post('/offerPosition', positionController.offerPosition);

router.post('/decode', adminController.getsignedvals);

module.exports = router;
