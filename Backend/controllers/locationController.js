const Location = require('../models/location');
var jwt = require('../auth/jwt');
const locationController = {
    //Add Location
    addLocation(req, res) {
        const token = req.headers['jwt-token'];
        jwt.verify(token, (decoded) => {
            if (decoded.type === 1) {
                const newlocation = new Location({
                    title: req.body.title,
                    address: req.body.address,
                    email: req.body.email,
                    phone: req.body.phone,
                    fax: req.body.fax,
                    mobile: req.body.mobile
                }).save(function(err, location) {
                    if (err) {
                        res.status(500).json({
                            status: 'failure',
                            msg: err.message
                        });
                    }
                    if (!location) {
                        res.status(500).json({
                            status: 'failure',
                            msg: 'failed to add location'
                        });
                    } else {
                        res.status(200).json({
                            status: 'success',
                            data: {
                                newlocation
                            }
                        });
                    }
                });
            } else {
                res.status(404).json({
                    status: failure,
                    msg: 'unauthorized access'
                });
            }
        });
    },

    //Edit Location
    editLocation(req, res) {
        const token = req.headers['jwt-token'];
        jwt.verify(token, (decoded) => {
            if (decoded.type === 1) {
                Location.update({
                    _id: req.params.id
                }, {
                    title: req.body.title,
                    address: req.body.address,
                    email: req.body.email,
                    mobile: req.body.mobile,
                    phone: req.body.phone,
                    fax: req.body.fax
                }, (err, updated) => {
                    if (err) {
                        res.status(400).json({
                            status: 'failure',
                            msg: err.message
                        });

                    } else {
                        res.status(200).json({
                            status: 'success',
                            msg: 'location updated Successfuly!'
                        });

                    }
                });
            } else {
                res.status(400).json({
                    status: 'failure',
                    msg: 'unauthorized access!'
                });
            }
        });
    }
};

module.exports = locationController;
