var JwtStrategy = require('passport-jwt').Strategy
var ExtractJwt = require('passport-jwt').ExtractJwt
var Admin = require('../models/admin')
var config = require('./database')

module.exports = function (passport) {
  let opts = {}
  opts.jwtFromRequest = ExtractJwt.fromAuthHeader()
  opts.secretOrKey = config.secret
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    Admin.getAdminById(jwt_payload._doc._id, (err, admin) => {
      if (err) {
        return done(err, false)
      }

      if (admin) {
        return done(null, admin)
      } else {
        return done(null, false);
      }
    })
  }))
}
