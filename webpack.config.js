//----------------------------------------------------------------------------------------
// File: webpack.config.js
//
// Desc: Entry point del file di configurazione di webpack per l'applicativo lato client
// Path: /src/webpack.config
//----------------------------------------------------------------------------------------



const merge = require('webpack-merge');

const common = require('./config/webpack/common');
const development = require('./config/webpack/development');
const production = require('./config/webpack/production');


const { COMPILE_ENV } = process.env;

const environment = COMPILE_ENV === 'PRODUCTION' ? production : development;


const config = merge(common, environment);


module.exports = config;
