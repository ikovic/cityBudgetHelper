var express = require('express'),
    router = express.Router(),
    jwt = require('jwt-simple'),
    config = require('../../config/config'),
    models = require('../../models');

router.route('/token')
    .post(function (req, res) {
        if (Object.keys(req.body).length === 0 && req.body.constructor === Object) {
            return res.sendStatus(400);
        } else {
            // get the email & password
            models.User.findOne(
                {
                    attributes: ['firstName', 'lastName', 'email']
                },
                {
                    where: {
                        email: req.body.email
                    }
                })
                .then(function (user) {
                    user.validPassword(req.body.password, function (isValid) {
                        if (isValid) {
                            var payload = {id: user.id};
                            var secret = config.jwt.secret;
                            var token = jwt.encode(payload, secret);
                            res.json({user: user, token: token});
                        } else {
                            res.sendStatus(401);
                        }
                    });
                })
                .catch(function (err) {
                    console.log(err);
                    res.sendStatus(401);
                });
        }
    });

module.exports = router;

