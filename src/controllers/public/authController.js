var express = require('express'),
    router = express.Router(),
    jwt = require('jwt-simple'),
    User = require('../../models/user');

router.route('/token')
    .post(function (req, res) {
        if (!req.body) {
            return res.sendStatus(400);
        } else {
            // get the username & password
            // not


            var payload = {id: 1};
            var secret = 'DO NOT USE IN PRODUCTION';
            var token = jwt.encode(payload, secret);

            res.json(token);
        }
    });

module.exports = router;