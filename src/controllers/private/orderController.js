'use strict';

const express = require('express');
const router = express.Router();
const models = require('../../models');
const authorize = require('../../middleware/authorization').authorize;
const sanitizers = require('../../util/sanitizers');

/**
 * Budget API
 */

router.route('/organizations/:orgId/budgets/:budgetId/orders')
  .all(authorize, (req, res, next) => {
    sanitizers.sanitizeParamIntegers(['orgId', 'budgetId'], req);
    next();
  })
  .get(getOrders);

function getOrders(req, res) {
  models.Order.findAll({
    where: {OrganizationId: req.params.orgId},
    include: [
      {
        model: models.BudgetItem,
        attributes: ['position'],
        where: {budgetId: req.params.budgetId}
      }
    ]
  })
    .then(function (value) {
      res.json(value);
    })
    .catch(function (error) {
      console.log('Error with GET budget:', error);
      res.json(error);
    });
}

module.exports = router;
