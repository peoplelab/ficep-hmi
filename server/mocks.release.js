const fs = require('fs');
const main = require('./mocks.main');


// external file for server configuration
const SERVER_CONFIG = JSON.parse(fs.readFileSync('./server.config.json'));


main(SERVER_CONFIG);
