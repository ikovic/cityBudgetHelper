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
                            user.getOrganization().then(function (organization) {
                                var userRet = {
                                    id: user.id,
                                    email: user.email,
                                    firstName: user.firstName,
                                    lastName: user.lastName
                                };
                                var orgRet = {
                                    id: organization.id,
                                    title: organization.title,
                                    description: organization.description,
                                    OIB: organization.OIB,
                                    IBAN: organization.IBAN,
                                    address: organization.address,
                                    taxpayer: organization.taxpayer
                                };

                                var ret = {
                                    user: userRet,
                                    organization: orgRet,
                                    token
                                };
                                res.json(ret);
                            });

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

