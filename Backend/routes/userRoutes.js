var express = require('express');
var router = express.Router();
const multer = require('multer');
const crypto = require('crypto');
const nodemailer = require('nodemailer'); // a dependency that sends an email to user
const path = require('path');
const storage = multer.diskStorage({ // specifying storage path for images
  destination: './public/uploads/CVs',
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
var applicationController = require('../controllers/applicationController');
var clientController = require('../controllers/clientController');
var positionController = require('../controllers/positionController');
var fleetController = require('../controllers/fleetController');
var historyProjectController = require('../controllers/historyProjectController');
var locationController = require('../controllers/locationController');
var awardController = require('../controllers/awardController');
var aboutUsController = require('../controllers/aboutUsController');
var announcementController = require('../controllers/announcementController');

// Models

var Application = require('../models/application');


// Routes for client

router.get('/getAllClients', clientController.getAllClients) // View all clients

router.get('/getAllFleets', fleetController.getAllFleets) // View all fleets

router.get('/getFleet/:fleetId', fleetController.getFleet) // View fleet by id

router.get('/getImages/:fleetId', fleetController.getImages)

router.get('/getAllProjects', historyProjectController.getAllProjects) // View all projects

router.get('/getAllLocations', locationController.getAllLocations) // View all locations

router.get('/getAllAwards', awardController.getAllAwards) // View all awards

router.get('/getAnnouncements', announcementController.findAllAnnouncements) // View all awards

router.get('/getInfo', aboutUsController.getInfo) // View about us info

router.get('/getPositions', positionController.viewAllPositions) // View all awards

router.post('/sendApplication', applicationController.addApplication) // Send Application

router.post('/uploadCV', upload.single('CV'), (req, res) => {
    Application.findById(req.body.app_id, function(error, client) {
        if (error)
            console.log(error)
        else {
            
            client.Cv = req.file.path
            console.log(client)

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'maritimerashied@gmail.com',
                    pass: '1212Rms3434',
                },
            });

            // setup email data with unicode symbols
            const mailOptions = {
                from: ' "Rashied Maritime Services" <maritimerashied@gmail.com>', // sender address
                to: 'a.rashied@rashiedmaritime.com', // list of receivers
                subject: 'CV', // Subject line
                text: `Application Submitted`, // plain text body
                attachments: [{
                    filename: client.firstName + ' ' + client.lastName + ' CV.pdf',
                    path: client.Cv
                }]
            };

            // send mail with defined transport object
            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    res.status(500).json({
                        status: 'error',
                        message: err,
                    });
                } else {
                    client.save((err) => {
                        if (err) {
                            console.log('error');
                        } else {
                            res.send("sucess");
                        }
                        console.log('success');
                    });
                } //console.log('Message %s sent: %s', info.messageId,
                //  info.response);
            });


        }
    });
})



module.exports = router;
