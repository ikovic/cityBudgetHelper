var fs = require('fs');

function bootstrap(models) {
    var organization = JSON.parse(fs.readFileSync('./bootstrap.json', 'utf-8'));
    var nOfUsers = organization.users.length;
    for (var i = 0; i < nOfUsers; i++) {
        var user = organization.users[i];
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
    ).catch(function (err) {
        console.log(err);
    });
}

module.exports = {
    bootstrap
};
