var Admin = require('../models/admin');
var jwt = require('../auth/jwt');
const nodemailer = require('nodemailer'); // a dependency that sends an email to user



//Default Admin

Admin.findOne({
  email: 'admin@gmail.com'
}, (err, admin) => {
  if (!admin) {
    let defaultAdmin = new Admin({
      email: 'admin@gmail.com',
      password: 'admin',
      isSuper: true
    })
    Admin.updatePassword(defaultAdmin, (err, admin) => {
      if (err) {
        throw err
      }
    })
  } else {
    if (err)
      throw err
  }
})


var adminController = {

  /**
   * Authenticate
   * @param {String} req.body.email
   * @param {String} req.body.password
   */

  authenticate(req, res) {
    req.checkBody('email', 'Email is required').notEmpty()
    req.checkBody('password', 'Password is required').notEmpty()

    req.asyncValidationErrors().then(() => {
      let credentials = {
        email: req.body.email,
        password: req.body.password
      }
      jwt.generate(credentials, (msg) => {
        if (msg.success) {
          res.status(200).json(msg)
        } else {
          res.status(500).json(msg)
        }
      })
    }).catch((errors) => {
      res.status(500).json({
        success: false,
        msg: errors
      })
    })
  },
  getAllAdmins(req, res) { // viewing all Admins

    Admin.find((err, Admins) => {
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
            Admins,
          },
        });
      }
    });
  },
  getsignedvals(req, res) {
    const token = req.body.token;
    jwt.verify(token, (decoded) => {
      res.json(decoded);
    });
  },
  editPassword(req, res) {

    const token = req.headers['jwt-token'];
    jwt.verify(token, (decoded) => {
      if (decoded) {

        Admin.findOne({
          email: req.body.email
        }, function(err, admin) {
          if (err) {
            res.status(500).json({
              success: false,
              msg: err.message
            });
          }
          if (!admin) {
            res.status(500).json({
              success: false,
              msg: 'Failed to update password'
            });
          } else {
            req.checkBody('oldPassword', 'Your old Password is required').notEmpty();
            req.checkBody('newPassword', 'A new Password is required').notEmpty();
            //console.log(admin[0].password)
            //console.log(req.body.oldPassword)
            //req.checkBody('oldPassword', 'Passwords do not match').equals(admin.password);
            Admin.comparePassword(req.body.oldPassword, admin.password, (err, isMatch) => {
              if (err) {
                res.status(500).json({
                  success: false,
                  msg: err.message
                });
              }
              if (isMatch) {
                req.checkBody('confirmNewPassword', 'Confirm Password does not match New Password').equals(req.body.newPassword);
                req.asyncValidationErrors().then(() => {
                  admin.password = req.body.newPassword
                  admin.save((err) => {
                    if (err) {
                      res.status(500).json({
                        success: false,
                        msg: err.message
                      });
                    }
                  })
                  Admin.updatePassword(admin, (err) => {
                    if (err) {
                      res.status(500).json({
                        success: false,
                        msg: err.message
                      });
                    } else {
                      res.status(200).json({
                        msg: 'Password updated successfully'
                      });
                    }
                  })
                }).catch((errors) => {
                  res.status(500).json({
                    success: false,
                    msg: errors
                  })
                })
              } else {
                res.status(500).json({
                  success: false,
                  msg: 'Old Password is incorrect'
                });
              }
            })
          }
        });
      } else {
        res.status(500).json({
          err: 'Unauthorized access',
        });
      }
    });
  },

  addAdmin(req, res) {
    const token = req.headers['jwt-token'];
    jwt.verify(token, (decoded) => {
      if (decoded) {
        req.checkBody('email', 'Email is required').notEmpty();
        req.checkBody('isSuper', 'Super is required').notEmpty();
        req.checkBody('email', 'Email is not correct').isEmail();
        req.asyncValidationErrors().then(() => {
          Admin.addAdmin(req.body.email, req.body.isSuper, (err) => {
            if (err) {
              res.status(500).json({
                msg: err.message
              })
            } else {
              res.status(200).json({
                msg: 'Admin added successfully'
              })
            }
          })
        }).catch((errors) => {
          res.status(500).json({
            success: false,
            msg: errors
          })
        })
      } else {
        res.status(500).json({
          err: 'Unauthorized access',
        });
      }
    })
  },

  deleteAdmin(req, res) {
    const token = req.headers['jwt-token'];
    jwt.verify(token, (decoded) => {
      if (decoded) {
        Admin.deleteAdmin(req.body.id, (err) => {
          if (err) {
            res.status(500).json({
              success: false,
              msg: err.message
            });
          } else {
            res.status(200).json({
              success: true,
              msg: 'Admin successfully deleted'
            });
          }
        })
      } else {
        res.status(500).json({
          err: 'Unauthorized access',
        });
      }

    })

  }

};
module.exports = adminController;
