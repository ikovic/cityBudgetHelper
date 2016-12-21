'use strict';

const express = require('express');
const router = express.Router();
const jwt = require('jwt-simple');
const config = require('../../config/config');
const models = require('../../models');

router.route('/token')
    .post(function (req, res) {
        if (!req.body.email || !req.body.password) {
            return res.sendStatus(400);
        }

        let validUser;
        getUser(req.body.email)
            .then(user => authenticate(user, req.body.password))
            .then(token => res.json({user: userInfo, token}))
            .catch(() => res.sendStatus(401));
    });

function getUser(email) {
    return models.User.findOne({where: {email}});
}

function authenticate(email, password) {
    getUser(email)
        .then(user => {
            return user.validatePassword(password).then(() => user);
        })
        .then(user => {
            const payload = {id: user.id};
            const secret = config.jwt.secret;
            const token = jwt.encode(payload, secret);
            return {token, user: user.toJson()}
        });
}

module.exports = router;
