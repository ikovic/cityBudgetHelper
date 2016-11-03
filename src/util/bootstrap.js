var fs = require('fs');

function bootstrap(models) {
  var strappedObject = JSON.parse(fs.readFileSync('./bootstrap.json', 'utf-8'));
  var nOfUsers = strappedObject.users.length;
  for (var i = 0; i < nOfUsers; i++){
    var user = strappedObject.users[i];
    models.User.setPassword(user, user.password, function(updatedUser){
      //user.hashedPassword = hash;
      var currIndex = strappedObject.users.findIndex(function(element){
        return element.email === updatedUser.email;
      });

      if ( currIndex === (nOfUsers-1)) {
        batchCreateOrgAndUsers(strappedObject, models);
      }
    })
  }
}

function batchCreateOrgAndUsers(strappedObject, models){
  console.log('test');
  models.Organization.create({
    title: strappedObject.title,
    description: strappedObject.description,
    OIB: strappedObject.OIB,
    IBAN: strappedObject.IBAN,
    address: strappedObject.address,
    taxpayer: strappedObject.taxpayer,
    Users: strappedObject.users }, { include: [models.User]}
  ).catch(function(err){
    console.log(err);
  });
}

/*function bootstrap(models) {
  models.Organization.create({
    title: 'testni org',
    description: 'Neki random opis',
    OIB: 1234567895,
    IBAN: 35353543,
    address: 'Boobsova',
    taxpayer: false,
    Users:
  },
    {include: [models.User]}
  )
  .then(function(organization){
    console.log(organization);
    models.User.generateHash('nekik', function(hash){
      models.User.create({
        email: 'marko@example.com',
        firstName: 'Marko',
        lastName: 'Markic',
        hashedPassword: hash,
      })
    })
  });

}*/

module.exports = {
  bootstrap
};
