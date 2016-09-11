var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    config = require('./src/config/config'),
    models = require('./src/models'),
    controllers = require('./src/controllers')(app);

// configure app to use bodyParser for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// wire in controllers
app.use(controllers);

// serve static files
app.use(express.static('public'));

// synchronize MySQL on start
models.sequelize
    .authenticate()
    .then(function (err) {
        console.log('Connection has been established successfully.');
        return models.sequelize.sync();
    })
    .then(function () {
        app.listen(process.env.PORT || config.port, function () {
            console.log('Listening on port 3000...');
        });
    })
    .catch(function (err) {
        console.log('Error!', err);
    });