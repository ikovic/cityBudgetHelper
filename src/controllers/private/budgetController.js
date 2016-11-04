var express = require('express'),
    router = express.Router(),
    models = require('../../models');

/**
 * Budget API
 */
router.route('/budgets')
    .get(function (req, res) {
        if (!req.query.org_id) {
            models.Budget.findAll()
                .then(function (value) {
                    res.json(value);
                })
                .catch(function (error) {
                    console.log('Error with GET budget:', error);
                    res.json(error);
                });
        } else {
            models.Budget.findAll({where: {OrganizationId: req.query.org_id}})
                .then(function (value) {
                    res.json(value);
                })
                .catch(function (error) {
                    console.log('Error with GET budget:', error);
                    res.json(error);
                });
        }
    });

router.route('/budgets/:budgets_id')
    .get(function (req, res) {
        models.Budget.findById(req.params.budgets_id)
            .then(function (value) {
                res.json(value);
            })
            .catch(function (error) {
                console.log('Error with GET budget:', error);
                res.json(error);
            });
    });

module.exports = router;
