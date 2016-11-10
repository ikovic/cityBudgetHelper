var express = require('express'),
    router = express.Router(),
    models = require('../../models');

/**
 * Budget Items API
 */
router.route('/budgets/:budgetId/budgetItems')
    .get(function (req, res) {
        models.BudgetItem.findAll({where: {BudgetId: req.params.budgetId}})
            .then(function (value) {
                res.json(value);
            })
            .catch(function (error) {
                console.log('Error with GET budget item:', error);
                res.json(error);
            });
    })
    .put(function (req, res) {
        var newBudgetItem = Object.assign({}, req.body, {BudgetId: parseInt(req.params.budgetId, 10)});
        models.BudgetItem.create(newBudgetItem, {fields: ['position', 'description', 'amount', 'BudgetId']})
            .then(function (createdBudgetItem) {
                res.json(createdBudgetItem);
            })
            .catch(function (error) {
                console.log('Error with PUT budgetItem:', error);
                res.json(error);
            });
    });

router.route('/budgets/:budgetId/budgetItems/:budgetItemsId')
.post(function (req, res) {
    models.BudgetItem.findOne({where: {id: req.params.budgetItemsId, BudgetId: req.params.budgetId}})
    .then(function(budgetItem) {
      return budgetItem.update(req.body, {fields: ['position', 'description', 'amount']})
    })
    .then(function(updatedBudgetItem){
      res.json(updatedBudgetItem);
    })
    .catch(function(error) {
      console.log('Error with POST budgetItem:', error);
      res.json(error);
    });
});

// omoguci create (PUT) i update (POST), PUT samo iz bodya sprema novi objekt u bazu, vraca novi objekt klijentu
// POST prima ID, dohvaca odgovarajuci objekt, modificira i vraca poruku o uspjehu
// ista stvar za organizaciju i budget
/*router.route('/budgets/:budgetId/budgetItems/:budgetItemId')
 .get(function (req, res) {
 models.Budget.findById(req.params.budgets_id, { include: models.BudgetItem })
 .then(function (value) {
 res.json(value);
 })
 .catch(function (error) {
 console.log('Error with GET budget:', error);
 res.json(error);
 });
 });*/

module.exports = router;
