var Award = require('../models/award');
var jwt = require('../auth/jwt');

var awardController = {

  /**
   * Adding to awards options of the system
   * @param {String} req.body.title
   * @param {String} req.body.image
   */

  addAward(req, res) {

    var token = req.headers['jwt-token'];

    jwt.verify(token, (decoded) => {
      if (decoded) {

        req.checkBody('title', 'Title is required').notEmpty()

        req.asyncValidationErrors().then(() => {
          var newAward = new Award({
            title: req.body.title,
          });
          newAward.save((err, award) => {
            if (err) {
              return res.status(500).json({
                success: false,
                msg: err.message
              });
            }
            if (!award) {
              res.status(500).json({
                success: false,
                msg: 'Failed to add award'
              });
            } else {
              res.status(200).json({
                success: true,
                msg: 'Award added successfully',
                data: {
                  award,
                }
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
   * Delete an existing award
   * @param {String} req.body.id
   */

  deleteAward(req, res) {
    var token = req.headers['jwt-token'];

    jwt.verify(token, (decoded) => {
      if (decoded) {
        Award.deleteAward(req.body.id, (msg) => {
          if (!msg.success) {
            res.status(500).json({
              success: false,
              msg: msg.msg
            });
          } else {
            res.status(200).json({
              success: true,
              msg: 'Award successfully deleted'
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
   * Viewing all awards
   * @param {Request} req
   * @param {Response} res
   */

  getAllAwards(req, res) {

    Award.find((err, awards) => {
      if (err) { // if error occurred
        res.status(500).json({
          success: false,
          msg: err.message,
        });
      } else {
        res.status(200).json({
          success: true,
          data: {
            awards,
          },
        });
      }
    });
  },

  uploadAwardImage(req, res) {
    Award.findById(req.body.award_id, function(error, award) {
      if (error) {
        res.status(500).json({
          msg: error.message
        })
      } else {
        award.profileimg.name = req.file.filename;
        award.profileimg.path = req.file.path;
        award.profileimg.size = req.file.size;
        award.save((err) => {
          if (err) {
            res.status(500).json({
              msg: err.message
            })
          } else {
            res.status(200).json({
              msg: 'Pictue added successfully'
            })
          }
        });
      }
    });

  }
}

module.exports = awardController;
