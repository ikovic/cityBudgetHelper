var bootstrap = function (models) {

    var init = function () {
        models.Organization.create({
            title: 'Organizacija',
            description: 'Opis organizacije',
            OIB: '1234567899',
            IBAN: '9876543211',
            address: 'Fosal 123',
            taxpayer: true
        })
            .then(function (organization) {
                var user = models.User.build({
                    email: 'test@mail.com',
                    firstName: 'Ivan',
                    lastName: 'Krivic'
                });

                user.setOrganization(organization);

                user.generateHash('123456', function (hash) {
                    user.password = hash;
                    user.save().then(function () {
                        console.log('user', user, 'organization', organization);
                        return organization;
                    });
                });
            });
    };

    return {
        init: init
    }
};

module.exports = bootstrap;