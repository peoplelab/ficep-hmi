const { DefinePlugin } = require('webpack');


const { NODE_ENV } = process.env;


module.exports = new DefinePlugin({
  NODE_ENV: JSON.stringify(NODE_ENV),
});
