var fs = require('fs');

module.exports = function () {
    var routes = [];
    fs.readdirSync(__dirname).forEach(function (file) {
        // detect only files which contain the string '*Controller.js'
        if (file === "index.js" || file.substr(file.lastIndexOf('.') + 1) !== 'js')
            return;
        var name = file.substr(0, file.indexOf('.'));
        routes.push(require('./' + name));
    });
    return routes;
};