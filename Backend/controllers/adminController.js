var Admin = require('../models/admin');
var jwt = require('../auth/jwt');
const generatePassword = require('password-generator'); // a dependency that generates random password
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
                console.log('77')
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
    
};
module.exports = adminController;
