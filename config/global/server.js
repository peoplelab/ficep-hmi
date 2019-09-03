//----------------------------------------------------------------------------------------
// File: server.js
//
// Desc: Variabili globali, in sola lettura, della applicativo lato server
// Path: /src/config/global/server
//----------------------------------------------------------------------------------------


const { DefinePlugin } = require('webpack');


const { COMPILE_ENV } = process.env;


module.exports = new DefinePlugin({
  COMPILE_ENV: JSON.stringify(COMPILE_ENV),
});
