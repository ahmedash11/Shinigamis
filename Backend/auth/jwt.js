const jwt = require('jsonwebtoken');
const Admin = require('../models/admin');

const secret = 'ilovescotchscotchyscotchscotch';

module.exports = {
  generate(credentials, cb) {
    Admin.getAdminByEmail(credentials.email, (err, admin) => {
      if (err) {
        let msg = {
          success: false,
          msg: err.message
        }
        return cb(msg)
      }

      if (!admin) {
        let msg = {
          success: false,
          msg: 'Admin not found'
        }
        return cb(msg);
      }

      Admin.comparePassword(credentials.password, admin.password, (err, isMatch) => {
        if (err) {
          let msg = {
            success: false,
            msg: err.message
          }
          return cb(msg)
        }

        if (isMatch) {
          var token = jwt.sign(admin, secret)
          let msg = {
            success: true,
            data: {
              token: token,
              admin: {
                id: admin._id,
                email: admin.email,
                isSuper: admin.isSuper
              }
            }
          }
          return cb(msg)
        } else {
          let msg = {
            success: false,
            msg: 'Wrong password'
          }
          return cb(msg)
        }
      })
    });
  },
  verify(token, cb) {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) console.log(err)
      cb(decoded);
    });
  },

};
