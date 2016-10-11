var express = require('express'),
    app = express(),
    path = require('path'),
    bodyParser = require('body-parser'),
    config = require('./src/config/config'),
    models = require('./src/models'),
    privateControllers = require('./src/controllers/private')(app),
    publicControllers = require('./src/controllers/public')(app),
    passport = require('./src/auth/passport')(models),
    bootstrap = require('./src/bootstrap/bootstrap');

// configure app to use bodyParser for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// configure authentication
app.use(passport.initialize());

// wire in controllers
app.use('/api/', passport.authenticate('jwt', {session: false}), privateControllers);
app.use('/', publicControllers);

// serve static files
app.use(express.static('public'));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
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
        // bootstrap the data if required
        if (config.bootstrap) {
            bootstrap(models, function () {
                app.listen(config.app.port, function () {
                    console.log('Listening on port', config.app.port);
                })
            });
        } else {
            app.listen(config.app.port, function () {
                console.log('Listening on port', config.app.port);
            });
        }


    })
    .catch(function (err) {
        console.log('Error!', err);
    });