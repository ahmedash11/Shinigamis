var Application = require('../models/application');
var jwt = require('../auth/jwt');


var applicationController = {
  /**
   * Add a new announcement
   * @param {Request} req
   * @param {Response} res
   */

  addApplication(req, res) {
    var token = req.headers['jwt-token'];
    jwt.verify(token, (decoded) => {
      if (decoded) {


        // creating a new historyProjects instance and saving it
        var newApplication = new Application({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          position: req.body.position,
          phone: req.body.phone,
          email: req.body.email,
          address: req.body.address,
          country: req.body.country,
          birthdate: req.body.birthdate,
          experience: req.body.experience,
          cv: req.body.cv

        });
        newApplication.save();
        res.status(200).json({
          status: 'success',
          data: {
            newApplication
          },
        });
      } else {
        res.status(500).json({
          err: 'unauthorized access',
        });
      }
    });

  },

  deleteApplication(req, res) {
    var token = req.headers['jwt-token'];

    jwt.verify(token, (decoded) => {
      if (decoded) {
        Application.findByIdAndRemove(req.body.id, (err) => {
          if (err) {
            res.status(500).json({
              success: false,
              msg: err.message
            });
          } else {
            res.status(200).json({
              success: true,
              msg: 'Application successfully deleted'
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

  findAllApplications(req, res) { // viewing all applications

    Application.find((err, applications) => {
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
            applications,
          },
        });
      }
    });
  }


};
module.exports = applicationController;
