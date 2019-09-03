//----------------------------------------------------------------------------------------
// File: client.js
//
// Desc: Variabili globali, in sola lettura, della applicativo lato client
// Path: /src/config/global/client
//----------------------------------------------------------------------------------------


const { DefinePlugin } = require('webpack');


const { COMPILE_ENV } = process.env;
const isProduction = COMPILE_ENV === 'PRODUCTION';


module.exports = new DefinePlugin({
  IS_PRODUCTION: JSON.stringify(isProduction),
});
