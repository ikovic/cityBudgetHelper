var express = require('express'),
    router = express.Router(),
    models = require('../../models');

/**
 * Organizations API
 */
router.route('/organizations')
    .get(function (req, res) {
        models.Organization.findAll()
            .then(function (value) {
                res.json(value);
                return value;
            })
            .catch(function (error) {
                console.log('Error with GET organization:', error);
                res.json(error);
            });
    });

    router.route('/organizations/:org_id')
        .get(function (req, res) {
            models.Organization.findById(req.params.org_id)
                .then(function (value) {
                    res.json(value);
                    return value;
                })
                .catch(function (error) {
                    console.log('Error with GET organization:', error);
                    res.json(error);
                });
        });

module.exports = router;
