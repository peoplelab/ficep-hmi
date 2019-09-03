//----------------------------------------------------------------------------------------
// File: mocks.js
//
// Desc: Variabili globali, in sola lettura, del server mock
// Path: /src/config/global/mocks
//----------------------------------------------------------------------------------------


const { DefinePlugin } = require('webpack');


const { NODE_ENV } = process.env;


module.exports = new DefinePlugin({
  NODE_ENV: JSON.stringify(NODE_ENV),
});
