const express = require('express');
const proxy = require('http-proxy-middleware');


// retrive proxy configuraiton
const proxyConfig = require('./proxy.json');

// localhost server port
const PORT = 3500;

/// proxy handler (logging requests)
var proxyOpts = URL_ENV => ({

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
});
// end proxy handler


module.exports = (callback_env, { COMPILE_ENV, URL_ENV }) => {
  // init node server
  const app = express();

  // start proxy handler
  const opts = proxyOpts(URL_ENV);
  const proxyInst = proxy(opts);
  app.use('/api', proxyInst);

  // add environment configuration
  callback_env(app);

  // start server ...
  var server = app.listen(PORT, function () {
      var host = server.address().address;
      var port = server.address().port;

      console.log('SERVER NODE: -> Starting at ' + ((host === '::') ? '"localhost"' : host) + ' on port ' + port);
      console.log('SERVER NODE: -> Environment ' + COMPILE_ENV);
  });
};
