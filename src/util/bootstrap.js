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
    newOrg.budgets.forEach(budget => {
        budget.budgetItems.forEach(budgetItem => {
            budgetItem.setOrganization(newOrg);
        });
    });
    return newOrg;
}

function addOrgIdToOrderAndOrderItems(newOrg) {
    newOrg.budgets.forEach(budget => {
        budget.budgetItems.forEach(budgetItem => {
            if (budgetItem.orders) {
                budgetItem.orders.forEach(order => {
                    order.setOrganization(newOrg);
                    if (order.orderItems) {
                        order.orderItems.forEach(orderItem => {
                            orderItem.setOrganization(newOrg);
                        });
                    }
                });
            }
        });
    });
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
                            as: 'budgetItems',
                            include: [
                                {
                                    model: models.Order,
                                    as: 'orders',
                                    include: [
                                        {
                                            model: models.OrderItem,
                                            as: 'orderItems'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    )
        .then(function (newOrg) {
            newOrg = addOrgIdToBudgetItems(newOrg);
            newOrg = addOrgIdToOrderAndOrderItems(newOrg);
            return newOrg.save();
        })
        .catch(function (err) {
            console.log(err);
        });
}

module.exports = {
    bootstrap
};
