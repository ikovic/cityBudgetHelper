# cityBudgetHelper

This app will help you with connecting your budget with the subsequent orders and determining which budget items are affected by which orders in a certain fiscal year.

### Technology Stack

* MySQL
* node.js
* express.js
* [sequelize] - ORM for node.js
* [passport] - authentication for node.js
* [acl] - authorization for node.js
* [jsreport] - reporting tool
* [react-mdl] - MDL implemented with React components
* React
* Redux

### Development

To run the application, make sure you have node.js and MySQL installed and then do the following steps:

* create a database called 'budget_helper'
* create a user with credentials root/root 

* install all the dependencies
```sh
$ npm install
```
* run the server
```sh
$ npm run start
```
* run Gulp in a separate terminal to compile front end assets
```sh
$ gulp
```

[sequelize]: <http://docs.sequelizejs.com/en/v3/>
[passport]: <https://www.npmjs.com/package/passport>
[acl]: <https://www.npmjs.com/package/acl>
[jsreport]: <https://www.npmjs.com/package/jsreport>
[react-mdl]: <https://github.com/tleunen/react-mdl>

### TODO
Import bluebird as Promise to User model and then refactor the existing hashing methods as Promises.
