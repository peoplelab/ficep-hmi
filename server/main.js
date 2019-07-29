const fs = require('fs');
const express = require('express');
const proxy = require('http-proxy-middleware');

// external file for server configuration
const SERVER_CONFIG = JSON.parse(fs.readFileSync('./server.config.json'));

// localhost server port
const PORT = SERVER_CONFIG.PORT;

/// proxy handler (logging requests)
var proxyOpts = {
    target: SERVER_CONFIG.URL,

    onProxyReq: function onProxyReq(proxyReq, req, res) {
        console.log('\x1b[36m--> PROXYING REQUEST: ' + req.method + ' ' + req.path + ' to ' + SERVER_CONFIG.URL + proxyReq.path + '\x1b[0m');

    },
    //onError: function onError(err, req, res) {
    //    console.error(err);
    //    res.status(500);
    //    res.json({ error: 'Error when connecting to remote server.' });
    //},
    logLevel: SERVER_CONFIG.LOG_LEVEL,
    changeOrigin: true,
    secure: true
};
// end proxy handler


module.exports = (callback_env, { COMPILE_ENV }) => {
  // init node server
  const app = express();

  // start proxy handler
  const proxyInst = proxy(proxyOpts);
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
