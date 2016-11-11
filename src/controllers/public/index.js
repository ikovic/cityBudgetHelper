'use strict';

const fs = require('fs');

module.exports = function () {
    var routes = [];
    fs.readdirSync(__dirname).forEach(function (file) {
        if (file !== "index.js" && file.substr(file.lastIndexOf('.') + 1) === 'js') {
            let name = file.substr(0, file.indexOf('.'));
            routes.push(require('./' + name));
        }
    });
    return routes;
};