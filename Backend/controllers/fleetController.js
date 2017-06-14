var Fleet = require('../models/fleet');
var jwt = require('../auth/jwt');


var fleetController = {

    /**
     * Adding a new fleet
     * @param {Request} req
     * @param {Response} res
     */

    addFleet(req, res) {

        /*
            var token = req.headers['jwt-token'];
            jwt.verify(token, (decoded) => {
              if (decoded.type === 1) {


              } else {
                res.status(500).json({
                  success: false,
                  message: 'Unauthorized access',
                })
              }
            });
            */

        req.checkBody('name', 'Name is required').notEmpty()
        req.checkBody('name', 'Name is already taken').isNameAvailable()

        req.asyncValidationErrors().then(() => {
            var newFleet = new Fleet({
                name: req.body.name,
                type: req.body.type,
                design: req.body.design,
                class: req.body.class,
                built: req.body.built,
                tonnage: req.body.tonnage,
                draft: req.body.draft,
                horsepower: req.body.horsepower,
                deckSpace: req.body.deckSpace,
                deckStrength: req.body.deckStrength,
                deckDimensions: req.body.deckDimensions,
                crane: req.body.crane,
                accomadation: req.body.accomadation,
                flag: req.body.flag,
                bollardPull: req.body.bollardPull,
                fireFighting: req.body.fireFighting,
                mooringSystem: req.body.mooringSystem,
                helideck: req.body.helideck,
                images: req.body.images
            });

            newFleet.save((err, fleet) => {
                if (err) {
                    res.status(500).json({
                        success: false,
                        msg: err.message
                    });
                }

                if (!fleet) {
                    res.status(500).json({
                        success: false,
                        msg: 'Failed to add fleet'
                    });
                } else {
                    res.status(200).json({
                        success: true,
                        data: {
                            fleet,
                        },
                    });
                }
            });
        }).catch((errors) => {
            res.status(500).json({
                success: false,
                msg: errors
            })
        })

    },

    /**
     * Delete fleet
     * @param {Request} req
     * @param {Response} res
     */

    deleteFleet(req, res) {

        Fleet.deleteFleet(req.body.id, (err) => {
            if (err) {
                res.status(500).json({
                    success: false,
                    msg: err.message
                });
            } else {
                res.status(200).json({
                    success: true,
                    msg: 'Fleet successfully deleted'
                });
            }
        })

    },

    /**
     * View all fleets
     * @param {Request} req
     * @param {Response} res
     */

    viewAllFleets(req, res) {

        Fleet.find((err, fleets) => {
            if (err) { // if error occurred
                res.status(500).json({
                    success: false,
                    msg: err.message,
                });
            } else {
                res.status(200).json({
                    success: true,
                    data: {
                        fleets,
                    },
                });
            }
        });
    },

    /**
     * Update fleet
     * @param {Request} req
     * @param {Response} res
     */

    updateFleet(req, res) {

        const updatedFleet = {
            name: req.body.name,
            type: req.body.type,
            design: req.body.design,
            class: req.body.class,
            built: req.body.built,
            tonnage: req.body.tonnage,
            draft: req.body.draft,
            horsepower: req.body.horsepower,
            deckSpace: req.body.deckSpace,
            deckStrength: req.body.deckStrength,
            deckDimensions: req.body.deckDimensions,
            crane: req.body.crane,
            accomadation: req.body.accomadation,
            flag: req.body.flag,
            bollardPull: req.body.bollardPull,
            fireFighting: req.body.fireFighting,
            mooringSystem: req.body.mooringSystem,
            helideck: req.body.helideck,
            images: req.body.images
        }

        Fleet.updateFleet(req.body.id, updatedFleet, (err, newFleet) => {
            if (err) {
                res.status(500).json({
                    success: false,
                    msg: err.message,
                });
            } else {
                res.status(200).json({
                    success: true,
                    data: {
                        newFleet,
                    },
                });
            }
        })
    },
    getFleet(req, res) { // viewing a specific Fleet profile

        const query = {
            _id: req.params.id, // Recently Changed to Params
        };

        Fleet.findOne(query, (err, fleet) => {


            if (err) {
                res.status(500).json({
                    status: 'error',
                    message: err.message,
                });
            } else {
                res.status(200).json({
                    status: 'success',
                    data: {

                        fleet,
                    },
                });
            }

        });
    }

};
module.exports = fleetController;
