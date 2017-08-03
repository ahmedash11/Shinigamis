var Position = require('../models/position');
var jwt = require('../auth/jwt');

var positionController = {

  addPosition(req, res) {

    var token = req.headers['jwt-token'];
    jwt.verify(token, (decoded) => {
      if (decoded) {
        // creating a new Position instance and saving it
        var newPosition = new Position({
          title: req.body.title,
          description: req.body.description,
          isOffered: false
        });

        newPosition.save((err, position) => {
          if (err) {
            res.status(500).json({
              msg: err.message
            });
          }

          if (!position) {
            res.status(500).json({
              msg: 'Failed to add position'
            });
          } else {
            res.status(200).json({
              msg: 'Position successfully added'
            });
          }
        });
      } else {
        res.status(500).json({
          msg: 'Unauthorized access',
        });
      }
    });

  },

  deletePosition(req, res) {
    var token = req.headers['jwt-token'];

    jwt.verify(token, (decoded) => {
      if (decoded) {
        Position.deletePosition(req.body.id, (err) => {
          if (err) {
            res.status(500).json({
              msg: err.message
            });
          } else {
            res.status(200).json({
              success: true,
              msg: 'Position successfully deleted'
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

  viewAllPositions(req, res) {

    Position.find((err, positions) => {
      if (err) { // if error occurred
        res.status(500).json({
          msg: err.message,
        });
      } else {
        res.status(200).json({
          success: true,
          data: {
            positions,
          },
        });
      }
    });
  },

  offerPosition(req, res) {

    var token = req.headers['jwt-token'];
    jwt.verify(token, (decoded) => {
      if (decoded) {
        var query = {
          _id: req.body.id
        }
        Position.findOneAndUpdate(query, {
          $set: {
            isOffered: true
          }
        }, {
          new: true,
          upsert: false
        }, (err) => {
          if (err) {
            res.status(200).json({
              msg: err.message
            });
          } else {
            res.status(200).json({
              msg: 'Position offered successfully'
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

  viewAllOfferedPositions(req, res) {

    Position.find({
      isOffered: true
    }, (err, offeredPositions) => {
      if (err) { // if error occurred
        res.status(500).json({
          msg: err.message,
        });
      } else {
        res.status(200).json({
          data: {
            offeredPositions,
          },
        });
      }
    });
  }
};

module.exports = positionController;
