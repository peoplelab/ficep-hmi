//---------------------------------------------------------------------------------------------
// File: mocks.release.js
//
// Desc: File di configurazione del server mocks per il rilascio
// Path: /src/server/mocks.release
//---------------------------------------------------------------------------------------------


const fs = require('fs');
const main = require('./mocks/mocks.main');


// external file for server configuration
const SERVER_CONFIG = JSON.parse(fs.readFileSync('./server.config.json'));


main(SERVER_CONFIG);
