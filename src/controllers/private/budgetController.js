var express = require('express'),
    router = express.Router(),
    models = require('../../models'),
    filterHelper = require('../../util/filterHelper.js'),
    budgetFilters = [{
      urlName: 'orgId',
      queryName: 'OrganizationId',
      type: filterHelper.types.NUMBER
    },
    {
      urlName: 'default',
      queryName: 'default',
      type: filterHelper.types.BOOLEAN
    }
  ];
/**
 * Budget API
 */
router.route('/budgets')
    .get(function (req, res) {
        if (Object.keys(req.query).length === 0) {
            models.Budget.findAll()
                .then(function (value) {
                    res.json(value);
                })
                .catch(function (error) {
                    console.log('Error with GET budget:', error);
                    res.json(error);
                });
        } else {
            var queryObject = filterHelper.getQueryObjectFromUrl(budgetFilters, req.query);
            models.Budget.findAll({where: queryObject})
                .then(function (value) {
                    res.json(value);
                })
                .catch(function (error) {
                    console.log('Error with GET budget:', error);
                    res.json(error);
                });
        }
    });

router.route('/budgets/:budgetId')
    .get(function (req, res) {
        models.Budget.findById(req.params.budgetId, { include: models.BudgetItem })
            .then(function (value) {
                res.json(value);
            })
            .catch(function (error) {
                console.log('Error with GET budget:', error);
                res.json(error);
            });
    });

module.exports = router;
