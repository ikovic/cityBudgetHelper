var express = require('express'),
    app = express(),
    path = require('path'),
    bodyParser = require('body-parser'),
    config = require('./src/config/config'),
    models = require('./src/models'),
    privateControllers = require('./src/controllers/private')(app),
    publicControllers = require('./src/controllers/public')(app),
    passport = require('./src/auth/passport')(models);

// configure app to use bodyParser for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// configure authentication
app.use(passport.initialize());

// wire in controllers
app.use('/api/', passport.authenticate('jwt', { session: false}), privateControllers);
app.use('/', publicControllers);

// serve static files
app.use(express.static('public'));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response){
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
        app.listen(process.env.PORT || config.app.port, function () {
            console.log('Listening on port 3000...');
        });
    })
    .catch(function (err) {
        console.log('Error!', err);
    });