var Application = require('../models/application');
var jwt = require('../auth/jwt');


var applicationController = {
  /**
   * Add a new announcement
   * @param {Request} req
   * @param {Response} res
   */

  addApplication(req, res) {

    req.checkBody('firstName', 'First name is required').notEmpty()
    req.checkBody('lastName', 'Last name is required').notEmpty()
        req.checkBody('phone', 'Phone is required').notEmpty()
    req.checkBody('email', 'Email is required').notEmpty()
    req.checkBody('email', 'Email is not correct').isEmail();
    req.checkBody('address', 'Address is required').notEmpty()
    req.checkBody('birthdate', 'Birthdate is required').notEmpty()
    req.checkBody('experience', 'Experience is required').notEmpty()

    req.asyncValidationErrors().then(() => {
      var newApplication = new Application({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        position: req.body.position,
        phone: req.body.phone,
        email: req.body.email,
        address: req.body.address,
        birthdate: req.body.birthdate,
        experience: req.body.experience,
      });
      newApplication.save((err, app) => {
        if (err) {
          res.status(500).json({
            msg: err.message
          });
        }
        if (!app) {
          res.status(500).json({
            msg: "Failed to add application"

          });
        } else {
          res.status(200).json({
            data: {
              app
            }
          });
        }
      })
    }).catch((errors) => {
      res.status(500).json({
        msg: errors
      })
    })

  },

  /**
   * Delete an application
   * @param {String} req.body.id
   */

  deleteApplication(req, res) {
    var token = req.headers['jwt-token'];

    jwt.verify(token, (decoded) => {
      if (decoded) {
        Application.findByIdAndRemove(req.body.id, (err) => {
          if (err) {
            res.status(500).json({
              msg: err.message
            });
          } else {
            res.status(200).json({
              msg: 'Application successfully deleted'
            });
          }
        })
      } else {
        res.status(500).json({
          msg: 'Unauthorized Access',
        });
      }
    })
  },
  /**
   * View all applications
   * @param {Request} req
   * @param {Response} res
   */

  findAllApplications(req, res) { // viewing all applications

    var token = req.headers['jwt-token'];

    jwt.verify(token, (decoded) => {
      if (decoded) {
        Application.find((err, applications) => {
          if (err) { // if error occurred
            res.status(500).json({
              msg: err.message,
            });
          } else {
            res.status(200).json({
              status: 'success',
              data: {
                applications,
              },
            });
          }
        });
      } else {
        res.status(500).json({
          msg: 'Unauthorized Access',
        });
      }
    })
  },

  /**
   * Viewing a specific application
   * @param {Request} req
   * @param {Response} res
   */

  getApplication(req, res) {

    var token = req.headers['jwt-token'];

    jwt.verify(token, (decoded) => {
      if (decoded) {
        var query = {
          _id: req.params.applicationId, // Recently Changed to Params
        };

        Application.findOne(query, (err, application) => {
          if (err) {
            res.status(500).json({
              success: false,
              msg: err.message,
            });
          } else {
            res.status(200).json({
              success: true,
              data: {
                application,
              },
            });
          }
        })
      } else {
        res.status(500).json({
          msg: 'Unauthorized Access',
        });
      }
    })
  },


};
module.exports = applicationController;
