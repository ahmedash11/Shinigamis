var AboutUs = require('../models/aboutUs');
var jwt = require('../auth/jwt');


var aboutUsController = {



    /**
     * View all fleets
     * @param {Request} req
     * @param {Response} res
     */

    viewInfo(req, res) {

        AboutUs.findOne((err, info) => {
            if (err) { // if error occurred
                res.status(500).json({
                    success: false,
                    msg: err.message,
                });
            } else {
                res.status(200).json({
                    success: true,
                    data: {
                        info,
                    },
                });
            }
        });
    },

    /**
     * Update Info
     * @param {Request} req
     * @param {Response} res
     */

    updateInfo(req, res) {

        let updatedInfo = {
            phone: req.body.phone,
            mobile: req.body.mobile,
            fax: req.body.fax,
            address:req.body.address
            email: req.body.email,
            website: req.body.website
        }

        AboutUs.updateInfo(req.body.id, updatedInfo, (err, newInfo) => {
            if (err) {
                res.status(500).json({
                    success: false,
                    msg: err.message,
                });
            } else {
                res.status(200).json({
                    success: true,
                    data: {
                        newInfo,
                    },
                });
            }
        })
    },

    updatePersonnel(req, res) {

        let updatedInfo = req.body.personnel

        AboutUs.updatePersonnel(req.body.id, updatedInfo, (err, newPersonnel) => {
            if (err) {
                res.status(500).json({
                    success: false,
                    msg: err.message,
                });
            } else {
                res.status(200).json({
                    success: true,
                    data: {
                        newPersonnel,
                    },
                });
            }
        })
    },
    updateChairmanMessage(req, res) {

        let updatedInfo = req.body.chairmanMessage

        AboutUs.updateChairmanMessage(req.body.id, updatedInfo, (err, newFleet) => {
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


};
module.exports = fleetController;
