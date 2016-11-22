'use strict';

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const config = require('./src/config/config');
const models = require('./src/models');
const privateControllers = require('./src/controllers/private')(app);
const publicControllers = require('./src/controllers/public')(app);
const passport = require('./src/auth/passport')(models);
const bootstrap = require('./src/util/bootstrap.js').bootstrap;
const expressValidator = require('express-validator');

// set secure HTTP headers
app.use(helmet());

// configure app to use bodyParser for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// sanitizer for safe HTTP params
app.use(expressValidator());

// configure authentication
app.use(passport.initialize());

// wire in controllers
app.use('/api/', passport.authenticate('jwt', {session: false}), privateControllers);
app.use('/', publicControllers);

// serve static files
app.use(express.static('public'));

// handle every other route with index.html
app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

// synchronize MySQL on start
models.sequelize
    .authenticate()
    .then(function (err) {
        console.log('Connection has been established successfully.');
        return models.sequelize.sync();
    })
    .then(function () {
        let args = process.argv.slice(2);
        if (args[0] == 'bootstrap') {
            bootstrap(models);
        } else {
            app.listen(config.app.port, function () {
                console.log('Listening on port', config.app.port);
            });
        }
    })
    .catch(function (err) {
        console.log('Error!', err);
    });
