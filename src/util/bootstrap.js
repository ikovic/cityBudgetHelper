'use strict';

const fs = require('fs');

function bootstrap(models) {
    let organization = JSON.parse(fs.readFileSync('./bootstrap.json', 'utf-8'));
    let nOfUsers = organization.users.length;
    for (let i = 0; i < nOfUsers; i++) {
        let user = organization.users[i];
        models.User.setPassword(user, user.password, function (updatedUser) {
            var currIndex = organization.users.findIndex(function (element) {
                return element.email === updatedUser.email;
            });

            if (currIndex === (nOfUsers - 1)) {
                batchCreateOrgAndUsers(organization, models);
            }
        })
    }
}

function addOrgIdToBudgetItems(newOrg) {
  let nOfBudgets = newOrg.budgets.length;
  for (let i = 0; i < nOfBudgets; i++) {
    let nOfBudgetItems = newOrg.budgets[i].budgetItems.length;
    for (let j = 0; j < nOfBudgetItems; j++) {
      newOrg.budgets[i].budgetItems[j].organization = newOrg;
      console.log(newOrg.budgets[i].budgetItems[j].organization);
    }
  }
  return newOrg;
}

function batchCreateOrgAndUsers(organization, models) {
    models.Organization.create(organization,
        {
            include: [
                {
                    model: models.User,
                    as: 'users'
                },
                {
                    model: models.Budget,
                    as: 'budgets',
                    include: [
                        {
                            model: models.BudgetItem,
                            as: 'budgetItems'
                        }
                    ]
                }
            ]
        }
    )
    .then(function(newOrg){
      newOrg = addOrgIdToBudgetItems(newOrg);
      return newOrg.save();
    })
    .then(function(newestOrg){
      console.log(newestOrg);
    })
    .catch(function (err) {
        console.log(err);
    });
}

module.exports = {
    bootstrap
};
