const { DefinePlugin } = require('webpack');


const { COMPILE_ENV, URL_ENV } = process.env;


module.exports = new DefinePlugin({
  COMPILE: JSON.stringify(COMPILE_ENV),
  URL: JSON.stringify(URL_ENV),
});
