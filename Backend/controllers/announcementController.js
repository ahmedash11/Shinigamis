var Announcement = require('../models/announcement');
var jwt = require('../auth/jwt');


var announcementController = {
  /**
   * Add a new announcement
   * @param {Request} req
   * @param {Response} res
   */

  function addAnnouncement(req, res) {
    var token = req.headers['jwt-token'];
    jwt.verify(token, (decoded) => {
      if (decoded.type === 1) {


        // creating a new historyProjects instance and saving it
        var newAnnouncement = new Announcement({
          title: req.body.title,
          content: req.body.content,
          image: req.body.image,
          createdAt: req.body.createdAt
        });
        newAnnouncement.save();
        res.status(200).json({
          status: 'success',
          data: {
            newAward
          },
        });
      } else {
        res.status(500).json({
          err: 'unauthorized access',
        });
      }
    });

  },

  deleteAnnouncement(req, res) {

    Announcement.remove({
        _id: req.body.id
      }

      function(err) {
        if (!err) {
          message.type = 'notification!';
        } else {
          message.type = 'error';
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
