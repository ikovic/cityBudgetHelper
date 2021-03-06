'use strict';

const express = require('express');
const router = express.Router();
const models = require('../../models');
const filterHelper = require('../../util/filterHelper.js');
const authorize = require('../../middleware/authorization').authorize;
const sanitizers = require('../../util/sanitizers');

const budgetFilters = [
  {
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

router.route('/organizations/:orgId/budgets')
  .all(authorize, (req, res, next) => {
    sanitizers.sanitizeParamIntegers(['orgId'], req);
    next();
  })
  .get(getBudgets)
  .put(addBudget);

router.route('/organizations/:orgId/budgets/:budgetId')
  .all(authorize, (req, res, next) => {
    sanitizers.sanitizeParamIntegers(['orgId', 'budgetId'], req);
    next();
  })
  .get(getBudget)
  .post(updateBudget)
  .delete(deleteBudget);

function getBudgets(req, res) {
  if (Object.keys(req.query).length === 0) {
    models.Budget.findAll({where: {OrganizationId: req.params.orgId}})
      .then(function (value) {
        res.json(value);
      })
      .catch(function (error) {
        console.log('Error with GET budget:', error);
        res.json(error);
      });
  } else {
    let queryObject = filterHelper.getQueryObjectFromUrl(budgetFilters, req.query);
    models.Budget.findAll({where: queryObject})
      .then(function (value) {
        res.json(value);
      })
      .catch(function (error) {
        console.log('Error with GET budget:', error);
        res.json(error);
      });
  }
}

function addBudget(req, res) {
  models.Budget.create(req.body, {fields: ['year', 'default', 'title', 'OrganizationId']})
    .then(function (createdBudget) {
      res.json(createdBudget);
    })
    .catch(function (error) {
      console.log('Error with PUT budget:', error);
      res.json(error);
    });
}

function getBudget(req, res) {
  models.Budget.findOne({
    where: {id: req.params.budgetId, OrganizationId: req.params.orgId},
    include: [{model: models.BudgetItem, as: 'budgetItems'}]
  })
    .then(function (value) {
      res.json(value);
    })
    .catch(function (error) {
      console.log('Error with GET budget:', error);
      res.json(error);
    });
}

function updateBudget(req, res) {
  models.Budget.findOne({where: {id: req.params.budgetId, OrganizationId: req.params.orgId}})
    .then(function (budget) {
      return budget.update(req.body, {fields: ['year', 'default', 'title']})
    })
    .then(function (updatedBudget) {
      res.json(updatedBudget);
    })
    .catch(function (error) {
      console.log('Error with POST budget:', error);
      res.json(error);
    });
}

function deleteBudget(req, res) {
  models.Budget.destroy({where: {id: req.params.budgetId, OrganizationId: req.params.orgId}})
    .then(function (rowsModified) {
      res.sendStatus(200);
    })
    .catch(function (error) {
      console.log('Error with DELETE budget:', error);
      res.json(error);
    });
}

module.exports = router;
