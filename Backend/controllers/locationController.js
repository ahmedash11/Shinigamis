var Location = require('../models/location');
var jwt = require('../auth/jwt');

var locationController = {

  /**
   * Add location
   * @param {String} req.body.title
   * @param {String} req.body.address
   * @param {String} req.body.email
   * @param {String} req.body.phone
   * @param {String} req.body.fax
   * @param {String} req.body.mobile
   */

  addLocation(req, res) {
    var token = req.headers['jwt-token'];

    jwt.verify(token, (decoded) => {
      if (decoded) {

        req.checkBody('title', 'Title is required').notEmpty()

        req.asyncValidationErrors().then(() => {
          var newLocation = new Location({
            title: req.body.title,
            address: req.body.address,
            email: req.body.email,
            phone: req.body.phone,
            fax: req.body.fax,
            mobile: req.body.mobile
          })
          newLocation.save((err, location) => {
            if (err) {
              res.status(500).json({
                success: false,
                msg: err.message
              });
            }
            if (!location) {
              res.status(500).json({
                success: false,
                msg: 'Failed to add location'
              });
            } else {
              res.status(200).json({
                success: true,
                msg: 'Location added successfully'
              });
            }
          });
        }).catch((errors) => {
          res.status(500).json({
            success: false,
            msg: errors
          })
        })

      } else {
        res.status(404).json({
          success: false,
          msg: 'unauthorized access'
        });
      }
    });
  },
  /**
   * Delete an existing location
   * @param {String} req.body.id
   */

  deleteLocation(req, res) {
    var token = req.headers['jwt-token'];

    jwt.verify(token, (decoded) => {
      if (decoded) {
        Location.deleteLocation(req.body.id, (err) => {
          if (err) {
            res.status(500).json({
              success: false,
              msg: err.message
            });
          } else {
            res.status(200).json({
              success: true,
              msg: 'Location successfully deleted'
            });
          }
        })
      } else {
        res.status(500).json({
          success: false,
          msg: 'Unauthorized Access',
        });
      }
    })
  },

  /**
   * Update location
   * @param {String} req.body.id
   * @param {String} req.body.title
   * @param {String} req.body.address
   * @param {String} req.body.email
   * @param {String} req.body.phone
   * @param {String} req.body.fax
   * @param {String} req.body.mobile
   */

  updateLocation(req, res) {
    var token = req.headers['jwt-token'];

    jwt.verify(token, (decoded) => {
      if (decoded) {

        let updatedLocation = {
          title: req.body.title,
          address: req.body.address,
          email: req.body.email,
          phone: req.body.phone,
          fax: req.body.fax,
          mobile: req.body.mobile
        }

        Location.updateLocation(req.body.id, updatedLocation, (err, newClient) => {
          if (err) {
            res.status(500).json({
              success: false,
              msg: err.message,
            });
          } else {
            res.status(200).json({
              success: true,
              msg: 'Location updated successfully'
            });
          }
        })
      } else {
        res.status(500).json({
          success: false,
          msg: 'Unauthorized Access',
        });
      }
    });
  },

  /**
   * View all locations
   * @param {Request} req
   * @param {Response} res
   */

  getAllLocations(req, res) {
    Location.find((err, locations) => {
      if (err) { // if error occurred
        res.status(500).json({
          success: false,
          msg: err.message,
        });
      } else {
        res.status(200).json({
          success: true,
          data: {
            locations,
          },
        });
      }
    });
  },
};

module.exports = locationController;
