const Client = require('../models/client');
const jwt = require('../auth/jwt');


const clientController = {


  /**
   * Adding to clients options of the system
   * @param {String} req.body.name
   * @param {String} req.body.description
   * @param {String} req.body.image
   */

  addClient(req, res) {
    const token = req.headers['jwt-token'];
    jwt.verify(token, (decoded) => {

      if (decoded) {

        req.checkBody('name', 'Name is required').notEmpty()
        req.checkBody('name', 'Name is already taken').isClientNameAvailable()
        req.checkBody('description', 'Description is required').notEmpty()

        req.asyncValidationErrors().then(() => {
          // Creating a new historyProjects instance and saving it
          const newClient = new Client({
            name: req.body.name,
            description: req.body.description,
            image: req.body.image
          });
          newClient.save((err, client) => {
            if (err) {
              res.status(500).json({
                success: false,
                msg: err.message
              });
            }
            if (!client) {
              res.status(500).json({
                success: false,
                msg: 'Failed to add client'
              });
            } else {
              res.status(200).json({
                success: true,
                data: {
                  client,
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
          err: 'Unauthorized Access',
        });
      }
    });

  },

  /**
   * Delete an existing client
   * @param {String} req.body.id
   */

  deleteClient(req, res) {
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
   * Update client
   * @param {Request} req
   * @param {Response} res
   */

  updateClient(req, res) {

    let updatedClient = {
      name: req.body.name,
      description: req.body.description,
      image: req.body.image
    }

    Client.updateClient(req.body.id, updatedClient, (err, newClient) => {
      if (err) {
        res.status(500).json({
          success: false,
          msg: err.message,
        });
      } else {
        res.status(200).json({
          success: true,
          data: {
            newClient,
          },
        });
      }
    })
  }

};
module.exports = clientController;
