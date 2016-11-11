'use strict';

const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const config = require('../config/config');

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
opts.secretOrKey = config.jwt.secret;

function configurePassportJwt(models) {
    passport.use(new JwtStrategy(opts, function (jwtPayload, done) {
        models.User.findById(jwtPayload.id)
            .then(function (user) {
                if (user) {
                    done(null, user);
                } else {
                    done(null, false);
                }
                return user;
            })
            .catch(function (err) {
                console.log(err);
                return done(err, false);
            });
    }));

    return passport;
}

module.exports = configurePassportJwt;