'use strict';

const express = require('express');
const router = express.Router();
const jwt = require('jwt-simple');
const config = require('../../config/config');
const models = require('../../models');

router.route('/token')
  .post(function (req, res) {
    const {email, password} = req.body;

    if (!email || !password) {
      return res.sendStatus(400);
    }

    authenticate(email, password)
      .then(authData => res.json(authData))
      .catch(() => res.sendStatus(401));
  });

function authenticate(email, password) {
  var existingUser;
  return getUser(email)
    .then(user => {
      existingUser = user;
      return user.validatePassword(password);
    })
    .then(() => {
      const payload = {id: existingUser.id};
      const secret = config.jwt.secret;
      const token = jwt.encode(payload, secret);
      return {token, user: existingUser.toJson()}
    });
}

function getUser(email) {
  return models.User.findOne({where: {email}});
}

module.exports = router;
