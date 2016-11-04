var express = require('express'),
    router = express.Router(),
    models = require('../../models');

/**
 * Budget API
 */
router.route('/budgets')
    .get(function (req, res) {
        models.Budget.findAll()
            .then(function (value) {
                res.json(value);
            })
            .catch(function (error) {
                console.log('Error with GET budget:', error);
                res.json(error);
            });
    });
// budget / id stuff
// add filtering on /budgets route by organization. see 'rest api filtering express'
// Postman - set header Authorization header / jwt from tokena
module.exports = router;
