var HistoryProject = require('../models/historyProject');
var jwt = require('../auth/jwt');


var historyProjectsController = {

  /**
   * Adding to historyProjects options of the system
   * @param {String} req.body.name
   * @param {String} req.body.unit
   * @param {String} req.body.clientName
   */

  addProject(req, res) {


    var token = req.headers['jwt-token'];
    jwt.verify(token, (decoded) => {
      if (decoded) {

        req.checkBody('name', 'Name is required').notEmpty()
        req.checkBody('name', 'Name is already taken').isClientNameAvailable()
        req.checkBody('unit', 'Unit is required').notEmpty()
        req.checkBody('clientName', 'Client name is required').notEmpty()

        req.asyncValidationErrors().then(() => {
          // creating a new historyProjects instance and saving it
          var newProject = new HistoryProject({
            name: req.body.name,
            unit: req.body.unit,
            clientName: req.body.clientName
          });
          newProject.save((err, newProject) => {
            if (err) {
              res.status(500).json({
                success: false,
                msg: err.message
              });
            }
            if (!newProject) {
              res.status(500).json({
                success: false,
                msg: 'Failed to add project'
              });
            } else {
              res.status(200).json({
                success: true,
                data: {
                  newProject,
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

      } else {
        res.status(500).json({
          success: false,
          msg: 'Unauthorized Access',
        });
      }
    })

  },

  /**
   * Delete a project
   * @param {String} req.body.id
   */

  deleteProject(req, res) {

    var token = req.headers['jwt-token'];

    jwt.verify(token, (decoded) => {
      if (decoded) {
        HistoryProject.deleteProject(req.body.id, (err) => {
          if (err) {
            res.status(500).json({
              success: false,
              msg: err.message
            });
          } else {
            res.status(200).json({
              success: true,
              msg: 'Project successfully deleted'
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
   * View all projects
   * @param {Request} req
   * @param {Response} res
   */

  getAllProjects(req, res) {

    HistoryProject.find((err, historyProjects) => {
      if (err) { // if error occurred
        res.status(500).json({
          success: false,
          msg: err.message,
        });
      } else {
        res.status(200).json({
          success: true,
          data: {
            historyProjects,
          },
        });
      }
    });
  }


};
module.exports = historyProjectsController;
