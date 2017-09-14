var Client = require('../models/client');
var jwt = require('../auth/jwt');


var clientController = {

  /**
   * Adding to clients options of the system
   * @param {String} req.body.name
   * @param {String} req.body.description
   * @param {String} req.body.image
   */

  addClient(req, res, next) {
    var token = req.headers['jwt-token'];
    jwt.verify(token, (decoded) => {

      if (decoded) {

        req.checkBody('name', 'Name is required').notEmpty()
        req.checkBody('name', 'Name is already taken').isClientNameAvailable()
        req.checkBody('description', 'Description is required').notEmpty()

        req.asyncValidationErrors().then(() => {
          var newClient = new Client({
            name: req.body.name,
            description: req.body.description
          });
          newClient.save((err, client) => {
            if (err) {
              return res.status(500).json({
                success: false,
                msg: err.message
              });
            }
            if (!client) {
              return res.status(500).json({
                success: false,
                msg: 'Failed to add client'
              });
            } else {
              req.body.newClient = client
              next()
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
    });

  },

  /**
   * Upload client image
   * @param {String} req.body.newClient
   */

  uploadClientImage(req, res) {
    if (req.file) {
      var newClient = req.body.newClient
      newClient.profileimg.name = req.file.filename;
      newClient.profileimg.path = req.file.path;
      newClient.profileimg.size = req.file.size;
      newClient.save((err) => {
        if (err) {
          res.status(500).json({
            msg: err.message
          })
        } else {
          res.status(200).json({
            msg: 'Client added successfully'
          })
        }
      });
    } else {
      res.status(200).json({
        msg: 'Client added successfully'
      })
    }
  },

  /**
   * Delete an existing client
   * @param {String} req.body.id
   */

  deleteClient(req, res) {
    var token = req.headers['jwt-token'];

    jwt.verify(token, (decoded) => {
      if (decoded) {
        Client.deleteClient(req.body.id, (err) => {
          if (err) {
            res.status(500).json({
              success: false,
              msg: err.message
            });
          } else {
            res.status(200).json({
              success: true,
              msg: 'Client successfully deleted'
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
   * Update client
   * @param {String} req.body.id
   * @param {String} req.body.name
   * @param {String} req.body.description
   * @param {String} req.body.image
   */

  updateClient(req, res, next) {
    var token = req.headers['jwt-token'];

    jwt.verify(token, (decoded) => {
      if (decoded) {

        req.checkBody('name', 'Name is required').notEmpty()
        req.checkBody('description', 'Description is required').notEmpty()
        req.checkBody('id', 'Id is required').notEmpty()

        req.asyncValidationErrors().then(() => {
          let updatedClient = {
            name: req.body.name,
            description: req.body.description
          }

          Client.updateClient(req.body.id, updatedClient, (err, newClient) => {
            if (err) {
              return res.status(500).json({
                success: false,
                msg: err.message,
              });
            }
            if (!newClient) {
              return res.status(500).json({
                msg: "Failed to update client"
              });
            } else {
              req.body.newClient = newClient
              next()
            }
          })
        }).catch((errors) => {
          res.status(500).json({
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
   * Update client image
   * @param {String} req.body.client
   */

  updateClientImage(req, res) {
    if (req.file) {
      var newClient = req.body.newClient
      newClient.profileimg.name = req.file.filename;
      newClient.profileimg.path = req.file.path;
      newClient.profileimg.size = req.file.size;
      newClient.save((err) => {
        if (err) {
          res.status(500).json({
            msg: err.message
          })
        } else {
          res.status(200).json({
            msg: 'Client updated successfully'
          })
        }
      });
    } else {
      res.status(200).json({
        msg: 'Client updated successfully'
      })
    }
  },

  /**
   * View all clients
   * @param {Request} req
   * @param {Response} res
   */

  getAllClients(req, res) {
    Client.find((err, clients) => {
      if (err) { // if error occurred
        res.status(500).json({
          success: false,
          msg: err.message,
        });
      } else {
        res.status(200).json({
          success: true,
          data: {
            clients,
          },
        });
      }
    });
  },

  /**
   * Viewing Projects related to this client
   * @param {Request} req
   * @param {Response} res
   */

  getProjects(req, res) {
    var query = {
      _id: req.params.id, // Recently Changed to Params
    };
    var array = [];

    Client.findOne(query, (err, client) => {
      historyProject.find((err, historyProject) => {
        for (var i = 0; i < historyProject.length; i++) {
          if (historyProject[i].clientName === client.name) {
            array.push(historyProject[i]);
          }
        }

        if (err) {
          res.status(500).json({
            status: 'error',
            message: err.message,
          });
        } else {
          res.status(200).json({
            status: 'success',
            data: {
              array,
              client
            },
          });
        }

      });

    });
  }

};
module.exports = clientController;
