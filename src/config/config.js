'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// load the config file for the current environment
const config = require('./env/' + process.env.NODE_ENV);

module.exports = config;