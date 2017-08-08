var Announcement = require('../models/announcement');
var jwt = require('../auth/jwt');


var announcementController = {
  /**
   * Add a new announcement
   * @param {Request} req
   * @param {Response} res
   */


  addAnnouncement(req, res) {
    var token = req.headers['jwt-token'];
    jwt.verify(token, (decoded) => {
      if (decoded) {
        // creating a new historyProjects instance and saving it
        var newAnnouncement = new Announcement({
          title: req.body.title,
          content: req.body.content,
          // image: req.body.image,
          createdAt: req.body.createdAt
        });
        newAnnouncement.save();
        res.status(200).json({
          status: 'success',
          data: {
            newAnnouncement,
          }
        });
      } else {
        res.status(500).json({
          err: 'Unauthorized access',
        });
      }
    });

  },


  deleteAnnouncement(req, res) {
    Announcement.findByIdAndRemove({
      _id: req.body.id
    }, function(err) {
      if (!err) {
        res.status(200).json({
          data: {
            msg: 'This Announcement has been removed successfully!',

          }
        })
      } else {
        res.status(200).json({
          data: {
            msg: err.msg
          }
        })
      }
    });

  },
  findAllAnnouncements(req, res) { // viewing all announcements

    Announcement.find((err, announcements) => {
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
            announcements,
          },
        });
      }
    });
  }


};
module.exports = announcementController;
