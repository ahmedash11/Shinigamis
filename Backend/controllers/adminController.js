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
    Admin.addAdmin(defaultAdmin, (err, admin) => {
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
        Admin.find({
          email: req.body.email
        }, function(err, admin) {
          if (err)
            return err;
          else {
            req.checkBody('oldPassword', 'Your old Password is required').notEmpty();
            req.checkBody('newPassword', 'A new Password is required').notEmpty();
            console.log(admin[0].password)
            console.log(req.body.oldPassword)
            req.checkBody('oldPassword', 'Passwords do not match').equals(admin[0].password);
            req.checkBody('confirmNewPassword', 'Confirm Password does not match newPassword').equals(req.body.newPassword);
            var errors = req.validationErrors();
            if (errors) {
              console.log(errors);
              res.status(400).json({
                err: errors

              });
            } else {
              ////console.log('should modify');
              Admin.findByIdAndUpdate(admin.id, {
                $set: {
                  password: req.body.newPassword,
                },
              }, {
                safe: true,
                upsert: true,
                new: true,
              }, (err, adm) => {
                ////console.log('modified!');
                res.status(200).json({
                  status: 'success',
                  data: {
                    message: `Edited Password correctly!`,
                  },
                });
              });
            }

          }
        });



      } else {
        res.status(500).json({
          err: 'unauthorized access',
        });
      }
    });
  },

};
module.exports = adminController;
