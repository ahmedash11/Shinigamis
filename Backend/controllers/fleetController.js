var Fleet = require('../models/fleet');
var jwt = require('../auth/jwt');
var Image = require('../models/image');


var fleetController = {

  /**
   * Adding a new fleet
   * @param {Request} req
   * @param {Response} res
   */

  addFleet(req, res) {


    var token = req.headers['jwt-token'];
    jwt.verify(token, (decoded) => {
      if (decoded) {
        req.checkBody('name', 'Name is required').notEmpty()
        req.checkBody('name', 'Name is already taken').isFleetNameAvailable()

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
            accomandation: req.body.accomandation,
            flag: req.body.flag,
            bollardPull: req.body.bollardPull,
            fireFighting: req.body.fireFighting,
            mooringSystem: req.body.mooringSystem,
            helideck: req.body.helideck,
            profilePic:"/../public/static/images/OceanDrum.jpg",
            coverPic:"/../public/static/images/OceanDrum.jpg",
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
                msg: "Fleet added successfully",
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

      } else {
        res.status(500).json({
          success: false,
          message: 'Unauthorized access',
        })
      }
    });


  },

  /**
   * Delete fleet
   * @param {Request} req
   * @param {Response} res
   */

  deleteFleet(req, res) {
    var token = req.headers['jwt-token'];

    jwt.verify(token, (decoded) => {
      if (decoded) {

        Fleet.deleteFleet(req.body.id, (err) => {
          if (err) {
            res.status(500).json({
              success: false,
              msg: err.message
            });
          } else {
            Image.deleteFleetImages(req.body.id, (msg) => {
              if (!msg.success) {
                res.status(500).json({
                  success: false,
                  msg: msg.msg
                });
              } else {
                res.status(200).json({
                  success: true,
                  msg: 'Fleet successfully deleted'
                });
              }
            })
          }
        })
      } else {
        res.status(500).json({
          success: false,
          message: 'Unauthorized access',
        })
      }
    })

  },

  /**
   * Update fleet
   * @param {Request} req
   * @param {Response} res
   */

  updateFleet(req, res) {
    var token = req.headers['jwt-token'];

    jwt.verify(token, (decoded) => {
      if (decoded) {
        var updatedFleet = {
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
          accomandation: req.body.accomandation,
          flag: req.body.flag,
          bollardPull: req.body.bollardPull,
          fireFighting: req.body.fireFighting,
          mooringSystem: req.body.mooringSystem,
          helideck: req.body.helideck,
        }

        Fleet.updateFleet(req.body._id, updatedFleet, (err, newFleet) => {
          if (err) {
            res.status(500).json({
              success: false,
              msg: err.message,
            });
          } else {
            res.status(200).json({
              success: true,
              msg: 'Fleet updated successfully'
            });
          }
        })
      } else {
        res.status(500).json({
          success: false,
          message: 'Unauthorized access',
        })
      }
    })
  },

  /**
   * Viewing a specific Fleet profile
   * @param {Request} req
   * @param {Response} res
   */

  getFleet(req, res) {

    var query = {
      _id: req.params.fleetId, // Recently Changed to Params
    };

    Fleet.findOne(query, (err, fleet) => {
      if (err) {
        res.status(500).json({
          success: false,
          msg: err.message,
        });
      } else {
        res.status(200).json({
          success: true,
          data: {
            fleet,
          },
        });
      }
    })
  },

  /**
   * View all fleets
   * @param {Request} req
   * @param {Response} res
   */

  getAllFleets(req, res) {

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

    })
  },

  /**
   * Get all fleets
   * @param {Request} req
   * @param {Response} res
   */

  getImages(req, res) {
    const query = {
      fleet_id: req.params.fleetId, // Recently Changed to Params
    };

    Image.find(query).exec((err, images) => {
      if (err) {
        res.status(500).json({
          status: 'error',
          message: err.message,
        });
      } else {
        //    //console.log(images)
        res.status(200).json({
          status: 'success',
          data: {
            images,
          },
        });
      }
    });
  },

  /**
   * Update profile pic
   * @param {Request} req
   * @param {Response} res
   */

  makeProfilePic(req, res) {
    var token = req.headers['jwt-token'];

    jwt.verify(token, (decoded) => {
      if (decoded) {
        Fleet.findOneAndUpdate({
          _id: req.body.id
        }, {
          $set: {
            profilePic: req.body.path
          }
        }, {
          new: true,
          upsert: false
        }, (err) => {
          if (err) {
            res.status(500).json({
              msg: err.message
            })
          } else {
            res.status(200).json({
              msg: "Profile picture updated successfully"
            })
          }
        })
      } else {
        res.status(500).json({
          success: false,
          message: 'Unauthorized access',
        })
      }
    })
  },

  /**
   * Update cover pic
   * @param {Request} req
   * @param {Response} res
   */

  makeCoverPic(req, res) {
    var token = req.headers['jwt-token'];

    jwt.verify(token, (decoded) => {
      if (decoded) {
        Fleet.findOneAndUpdate({
          _id: req.body.id
        }, {
          $set: {
            coverPic: req.body.path
          }
        }, {
          new: true,
          upsert: false
        }, (err) => {
          if (err) {
            res.status(500).json({
              msg: err.message
            })
          } else {
            res.status(200).json({
              msg: "Cover picture updated successfully"
            })
          }
        })
      } else {
        res.status(500).json({
          success: false,
          message: 'Unauthorized access',
        })
      }
    })
  },

  /**
   * Delete picture
   * @param {Request} req
   * @param {Response} res
   */

  deletePic(req, res) {
    var token = req.headers['jwt-token'];

    jwt.verify(token, (decoded) => {
      if (decoded) {

        Image.deleteImage(req.body.id, (msg) => {
          if (!msg.success) {
            res.status(500).json({
              msg: msg.msg
            });
          } else {
            res.status(200).json({
              msg: 'Image successfully deleted'
            });
          }
        })
      } else {
        res.status(500).json({
          message: 'Unauthorized access',
        })
      }
    })
  }

}
module.exports = fleetController;
