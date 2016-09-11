var fs = require("fs"),
    path = require("path"),
    Sequelize = require("sequelize"),
    config = require('../config/config'),
    sequelize = new Sequelize(config.db.database, config.db.username, config.db.password, config.db.options),
    db = {};

fs
    .readdirSync(__dirname)
    .filter(function (file) {
        return (file.indexOf(".js") !== 0) && (file !== "index.js");
    })
    .forEach(function (file) {
        var model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(function (modelName) {
    if (db[modelName].hasOwnProperty('associate')) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;