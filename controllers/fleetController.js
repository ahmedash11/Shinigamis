const Fleet = require('../models/fleet');
const jwt = require('../auth/jwt');


const fleetController = {

    // adding to fleet options of the system
    addFleet(req, res) {


        const token = req.headers['jwt-token'];
        jwt.verify(token, (decoded) => {
            if (decoded.type === 1) {
               

                // creating a new historyProjects instance and saving it
                const newFleet = new Fleet({
                    name: req.body.name
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
                newFleet.save();
                res.status(200).json({
                    status: 'success',
                    data: {
                        newFleet
                    },
                });
            } else {
                res.status(500).json({
                    err: 'unauthorized access',
                });
            }
        });

    },

    //Delete fleet

    deleteFleet(req, res) {

        Fleet.remove({ _id: req.body.id }

            function(err) {
                if (!err) {
                    message.type = 'notification!';
                } else {
                    message.type = 'error';
                }
            });

    },

    findAllFleets(req, res) { // viewing all fleets

        Fleet.find((err, fleets) => {
            if (err) { // if error occurred
                res.status(500).json({
                    status: 'error',
                    message: err.message,
                });
            } else {
                ////console.log(historyProjects);
                res.status(200).json({
                    status: 'success',
                    data: {
                        fleets,
                    },
                });
            }
        });
    }


};
module.exports = fleetController;
