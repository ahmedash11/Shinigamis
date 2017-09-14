var Announcement = require('../models/announcement');
var jwt = require('../auth/jwt');


var announcementController = {
  /**
   * Add a new announcement
   * @param {Request} req
   * @param {Response} res
   */


  addAnnouncement(req, res, next) {
    var token = req.headers['jwt-token'];
    jwt.verify(token, (decoded) => {
      if (decoded) {
        req.checkBody('title', 'Name is required').notEmpty()
        req.checkBody('content', 'Content is required').notEmpty()
        req.checkBody('createdAt', 'Date is required').notEmpty()

        req.asyncValidationErrors().then(() => {
          var newAnnouncement = new Announcement({
            title: req.body.title,
            content: req.body.content,
            createdAt: req.body.createdAt
          });
          newAnnouncement.save((err, announcement) => {
            if (err) {
              return res.status(500).json({
                msg: err.message
              });
            }
            if (!announcement) {
              return res.status(500).json({
                msg: 'Failed to add announcement'
              });
            } else {
              /*
                res.status(200).json({
                    success: true,
                    msg: 'Announcement added successfully',
                    data: {
                        announcement,
                    }
                });
                */
              req.body.newAnnouncement = announcement
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
          err: 'Unauthorized access',
        });
      }
    });

  },
  /**
   * Upload announcement image
   * @param {Request} req
   * @param {Response} res
   */

  uploadAnnouncementImage(req, res) {
    if (req.file) {
      var announcement = req.body.newAnnouncement
      announcement.profileimg.name = req.file.filename;
      announcement.profileimg.path = req.file.path;
      announcement.profileimg.size = req.file.size;
      announcement.save((err) => {
        if (err) {
          res.status(500).json({
            msg: err.message
          })
        } else {
          res.status(200).json({
            msg: 'Announcement added successfully'
          })
        }
      });
    } else {
      res.status(200).json({
        msg: 'Announcement added successfully'
      })
    }
  },

  /**
   * Delete a new announcement
   * @param {Request} req
   * @param {Response} res
   */

  deleteAnnouncement(req, res) {
    var token = req.headers['jwt-token'];

    jwt.verify(token, (decoded) => {
      if (decoded) {
        Announcement.findByIdAndRemove({
          _id: req.body.id
        }, function(err) {
          if (!err) {
            res.status(200).json({
              msg: 'This Announcement has been removed successfully!',
            })
          } else {
            res.status(200).json({
              msg: err.msg
            })
          }
        });
      } else {

      }
    })

  },

  /**
   * Viewing all announcements
   * @param {Request} req
   * @param {Response} res
   */
  findAllAnnouncements(req, res) {

    Announcement.find((err, announcements) => {
      if (err) { // if error occurred
        res.status(500).json({
          msg: err.message,
        });
      } else {
        res.status(200).json({
          data: {
            announcements,
          },
        });
      }
    });
  }


};
module.exports = announcementController;
