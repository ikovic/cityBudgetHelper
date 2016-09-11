var express = require('express'),
    router = express.Router(),
    models = require('../models');

/**
 * Organizations API
 */
router.route('/organizations')
    .get(function (req, res) {
        models.Organization.findAll()
            .then(function (value) {
                res.json(value);
            })
            .catch(function (error) {
                console.log('Error with GET organization:', error);
                res.json(error);
            });
    });

module.exports = router;
