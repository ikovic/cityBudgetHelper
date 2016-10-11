var bootstrap = function (models, done) {

    // create a base user
    var user = models.User.build({
        email: 'test@mail.com',
        firstName: 'Ivan',
        lastName: 'Krivic'
    });

    // get a hashed password
    models.User.generateHash('123456', function (hash) {
        user.password = hash;

        // create a base organization
        models.Organization.create({
            title: 'Organizacija',
            description: 'Opis organizacije',
            OIB: '1234567899',
            IBAN: '9876543211',
            address: 'Fosal 123',
            taxpayer: true
        })
            .then(function (organization) {
                // associate the organization with the user
                user.setOrganization(organization);
                return user.save();
            })
            .then(function (user) {
                done();
            })
            .catch(function (error) {
                console.log(error);
            });
    });
};

module.exports = bootstrap;