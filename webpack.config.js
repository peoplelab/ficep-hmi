const merge = require('webpack-merge');

const commonConfig = require('./config/webpack/common');
const development = require('./config/webpack/development');
const production = require('./config/webpack/production');
const system = require('./config/webpack/system');


const { NODE_ENV } = process.env;

let envConfig;
switch (NODE_ENV) {
case 'MOCKS':
case 'DEVELOPMENT': {
  envConfig = development;
  break;
}
case 'STAGING':
case 'SYSTEM': {
  envConfig = system;
  break;
}
case 'PRODUCTION': {
  envConfig = production;
  break;
}
default: {
  envConfig = {};
}
}

const config = merge(commonConfig, envConfig);


module.exports = config;
