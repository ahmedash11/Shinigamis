var AboutUs = require('../models/aboutUs');
var jwt = require('../auth/jwt');

//Default About us object

AboutUs.findOne({
  companyName: "Rashied Maritime Services Company"
}, (err, aboutUs) => {
  if (!aboutUs) {
    let defaultAboutUs = new AboutUs({
      companyName: "Rashied Maritime Services Company"
    })
    defaultAboutUs.save((err, aboutUs) => {
      if (err) {
        throw err
      }
    })
  } else {
    if (err)
      throw err
  }
})


var aboutUsController = {

  /**
   * Update contact us info
   * @param {Request} req
   * @param {Response} res
   */

  updateContactUs(req, res) {
    var token = req.headers['jwt-token'];

    jwt.verify(token, (decoded) => {
      if (decoded) {

        let updatedInfo = {
          phone: req.body.phone,
          mobile: req.body.mobile,
          fax: req.body.fax,
          address: req.body.address,
          email: req.body.email,
          website: req.body.website,
          contactsPersons: req.body.contactsPersons
        }

        AboutUs.updateContactUs(updatedInfo, (err, newInfo) => {
          if (err) {
            res.status(500).json({
              success: false,
              msg: err.message,
            });
          } else {
            res.status(200).json({
              success: true,
              msg: 'Contact us info updated successfully'
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
   * Update personnel
   * @param {Request} req
   * @param {Response} res
   */

  updatePersonnel(req, res) {

    var token = req.headers['jwt-token'];

    jwt.verify(token, (decoded) => {
      if (decoded) {
        let updatedInfo = req.body.personnel

        AboutUs.updatePersonnel(updatedInfo, (err, newPersonnel) => {
          if (err) {
            res.status(500).json({
              success: false,
              msg: err.message,
            });
          } else {
            res.status(200).json({
              success: true,
              msg: 'Personnel updated added successfully'
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
   * Update chariman message
   * @param {Request} req
   * @param {Response} res
   */

  updateChairmanMessage(req, res) {

    var token = req.headers['jwt-token'];

    jwt.verify(token, (decoded) => {
      if (decoded) {

        let updatedInfo = req.body.chairmanMessage

        AboutUs.updateChairmanMessage(updatedInfo, (err, newMessage) => {
          if (err) {
            res.status(500).json({
              success: false,
              msg: err.message,
            });
          } else {
            res.status(200).json({
              success: true,
              msg: 'Chairman message updated added successfully'
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
   * View info
   * @param {Request} req
   * @param {Response} res
   */

  getInfo(req, res) {

    AboutUs.findOne((err, info) => {
      if (err) {
        res.status(500).json({
          success: false,
          msg: err.message,
        });
      } else {
        if (info) {
          res.status(200).json({
            success: true,
            data: {
              info,
            },
          });
        } else {
          res.status(500).json({
            success: false,
            msg: "No info found",
          });
        }
      }
    })
  }

}
module.exports = aboutUsController;
