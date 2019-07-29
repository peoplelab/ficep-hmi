const { DefinePlugin } = require('webpack');


const { COMPILE_ENV } = process.env;


module.exports = new DefinePlugin({
  COMPILE_ENV: JSON.stringify(COMPILE_ENV),
});
