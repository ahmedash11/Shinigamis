const jwt = require('jsonwebtoken');
const Admin = require('../models/admin');

const secret = 'ilovescotchscotchyscotchscotch';

module.exports = {
    generate(credentials, cb) {
        Admin.findOne({
            email: credentials.email,
            password: credentials.password,
        }, (err, user) => {
            if (!user) {
                return cb(null);
            }
            cb(jwt.sign({
                id: user.id,
                isSuper:user.isSuper
            }, secret));
        });
    },
    verify(token, cb) {
        jwt.verify(token, secret, (err, decoded) => {
            cb(decoded);
        });
    },

};
