var passport = require('passport'),
    JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
opts.secretOrKey = 'DO NOT USE IN PRODUCTION';
opts.issuer = "accounts.examplesoft.com";
opts.audience = "yoursite.net";

function configurePassportJwt(models) {
    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
        models.User.findById({id: jwt_payload.sub}, function (err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                done(null, user);
            } else {
                done(null, false);
                // or you could create a new account
            }
        });
    }));

    return passport;
}

module.exports = configurePassportJwt;