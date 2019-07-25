const express = require('express');
const proxy = require('http-proxy-middleware');


// retrive proxy configuraiton
const proxyConfig = require('./proxy.json');

// retrive environment
const { NODE_ENV, URL_ENV } = process.env;

// localhost server port
const PORT = 3500;

/// proxy handler (logging requests)
var proxyOpts = {

    target: proxyConfig[URL_ENV].target,

    onProxyReq: function onProxyReq(proxyReq, req, res) {
        console.log('\x1b[36m--> PROXYING REQUEST: ' + req.method + ' ' + req.path + ' to ' + proxyOpts.target + proxyReq.path + '\x1b[0m');

    },
    //onError: function onError(err, req, res) {
    //    console.error(err);
    //    res.status(500);
    //    res.json({ error: 'Error when connecting to remote server.' });
    //},
    logLevel: 'debug',
    changeOrigin: true,
    secure: true
};
const proxyInst = proxy(proxyOpts); // dev dsi
// end proxy handler


module.exports = (callback_env) => {
  // init node server
  const app = express();

  // add environment configuration
  callback_env(app);

  // start proxy handler
  app.use('/api', proxyInst);

  // start server ...
  var server = app.listen(PORT, function () {
      var host = server.address().address;
      var port = server.address().port;

      console.log('SERVER NODE: -> Starting at ' + ((host === '::') ? '"localhost"' : host) + ' on port ' + port);
      console.log('SERVER NODE: -> Environment ' + NODE_ENV);
  });
};
