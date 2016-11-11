'use strict';

const express = require('express');
const router = express.Router();
const jwt = require('jwt-simple');
const config = require('../../config/config');
const models = require('../../models');

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
                    if (!user) {
                        res.sendStatus(401);
                    } else {
                        models.User.validPassword(req.body.password, user.hashedPassword, function (isValid) {
                            if (isValid) {
                                let payload = {id: user.id};
                                let secret = config.jwt.secret;
                                let token = jwt.encode(payload, secret);
                                user.getOrganization().then(function (organization) {
                                    let userRet = {
                                        id: user.id,
                                        email: user.email,
                                        firstName: user.firstName,
                                        lastName: user.lastName
                                    };
                                    let orgRet = {
                                        id: organization.id,
                                        title: organization.title,
                                        description: organization.description,
                                        OIB: organization.OIB,
                                        IBAN: organization.IBAN,
                                        address: organization.address,
                                        taxpayer: organization.taxpayer
                                    };

                                    let ret = {
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
                    }
                })
                .catch(function (err) {
                    console.log(err);
                    res.sendStatus(401);
                });
        }
    });

module.exports = router;

