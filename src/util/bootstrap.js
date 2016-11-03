var fs = require('fs');

function bootstrap() {
  return JSON.parse(fs.readFileSync('./bootstrap.json', 'utf-8'));
}

module.exports = {
  bootstrap
};
