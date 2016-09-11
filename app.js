var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    config = require('./src/config/config'),
    Sequelize = require('sequelize');

// configure app to use bodyParser for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// wire in controllers

// serve static files
app.use(express.static('public'));

// synchronize MySQL on start
var sequelize = new Sequelize(config.db.database, config.db.username, config.db.password, config.db.options);
sequelize
    .authenticate()
    .then(function (err) {
        console.log('Connection has been established successfully.');
        app.listen(process.env.PORT || config.port, function () {
            console.log('Listening on port 3000...');
        })
    })
    .catch(function (err) {
        console.log('Unable to connect to the database:', err);
    });