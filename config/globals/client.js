const { DefinePlugin } = require('webpack');


const { COMPILE_ENV } = process.env;
const isProduction = COMPILE_ENV === 'PRODUCTION';


module.exports = new DefinePlugin({
  IS_PRODUCTION: JSON.stringify(isProduction),
});
