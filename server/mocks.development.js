//---------------------------------------------------------------------------------------------
// File: mocks.development.js
//
// Desc: File di configurazione del server mocks per l'emulazione in locale
// Path: /src/server/mocks.development
//---------------------------------------------------------------------------------------------


const main = require('./mocks/mocks.main');


// external file for server configuration
const SERVER_CONFIG = { PORT: 4000 };


main(SERVER_CONFIG);
