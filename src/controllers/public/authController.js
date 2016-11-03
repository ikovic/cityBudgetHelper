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
                    attributes: ['firstName', 'lastName', 'email', 'hashedPassword']
                },
                {
                    where: {
                        email: req.body.email
                    }
                })
                .then(function (user) {
                    models.User.validPassword(req.body.password, user.hashedPassword, function (isValid) {
                        if (isValid) {
                            var payload = {id: user.id};
                            var secret = config.jwt.secret;
                            var token = jwt.encode(payload, secret);
                            var ret = {
                                user: user.dataValues,
                                token
                            };
                            res.json(ret);
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

