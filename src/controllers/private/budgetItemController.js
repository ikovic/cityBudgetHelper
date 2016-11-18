'use strict';

const express = require('express');
const router = express.Router();
const models = require('../../models');
const authorize = require('../../middleware/authorization').authorize;

/**
 * Budget Items API
 */
router.route('/organizations/:orgId/budgets/:budgetId/budgetItems')
    .all(authorize)
    .get(function (req, res) {
        models.BudgetItem.findAll({where: {BudgetId: req.params.budgetId, OrganizationId: req.params.orgId}})
            .then(function (value) {
                res.json(value);
            })
            .catch(function (error) {
                console.log('Error with GET budget item:', error);
                res.json(error);
            });
    })
    .put(function (req, res) {
        let newBudgetItem = Object.assign({}, req.body, {BudgetId: parseInt(req.params.budgetId, 10)});
        models.BudgetItem.create(newBudgetItem, {fields: ['position', 'description', 'amount', 'BudgetId']})
            .then(function (createdBudgetItem) {
                res.json(createdBudgetItem);
            })
            .catch(function (error) {
                console.log('Error with PUT budgetItem:', error);
                res.json(error);
            });
    });

router.route('/organizations/:orgId/budgets/:budgetId/budgetItems/:budgetItemsId')
    .all(authorize)
    .post(function (req, res) {
        models.BudgetItem.findOne({where: {id: req.params.budgetItemsId, BudgetId: req.params.budgetId}})
            .then(function (budgetItem) {
                return budgetItem.update(req.body, {fields: ['position', 'description', 'amount']})
            })
            .then(function (updatedBudgetItem) {
                res.json(updatedBudgetItem);
            })
            .catch(function (error) {
                console.log('Error with POST budgetItem:', error);
                res.json(error);
            });
    });

module.exports = router;
