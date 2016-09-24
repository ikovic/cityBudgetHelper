var express = require('express'),
    router = express.Router(),
    jwt = require('jwt-simple'),
    config = require('../../config/config'),
    User = require('../../models/user');

router.route('/token')
    .post(function (req, res) {
        if (!req.body) {
            return res.sendStatus(400);
        } else {
            // get the username & password
            User.findOne({
                where: {
                    email: req.body.email
                }
            })
                .then(function (user) {
                    console.log(user);
                })
                .catch(function (err) {
                    console.log(err);
                });

            var payload = {id: 1};
            var secret = config.jwt.secret;
            var token = jwt.encode(payload, secret);

            res.json(token);
        }
    });

module.exports = router;