var nodemailer = require('nodemailer'); // a dependency that sends an email to user
var mail = require('../config/mail')

const transporter = nodemailer.createTransport({
  service: mail.service,
  auth: mail.auth
});

var mailController = {
  /**
   * Send mail
   * @param {String} mailOptions
   */

  sendMail(mailOptions, cb) {
    transporter.sendMail(mailOptions, (err) => {
      if (err) {
        let msg = {
          success: false,
          msg: err.message
        }
        return cb(msg)
      } else {
        let msg = {
          success: true
        }
        return cb(msg)
      }
    })
  }
}

module.exports = mailController;
