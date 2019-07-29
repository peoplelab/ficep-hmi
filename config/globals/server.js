const { DefinePlugin } = require('webpack');


const { COMPILE_ENV } = process.env;


module.exports = new DefinePlugin({
  COMPILE: JSON.stringify(COMPILE_ENV),
});
