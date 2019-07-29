const express = require('express');
const proxy = require('http-proxy-middleware');


/// proxy handler (logging requests)
var proxyOpts = ({ URL, LOG_LEVEL }) => ({
    target: URL,

    onProxyReq: function onProxyReq(proxyReq, req, res) {
        console.log('\x1b[36m--> PROXYING REQUEST: ' + req.method + ' ' + req.path + ' to ' + URL + proxyReq.path + '\x1b[0m');

    },
    //onError: function onError(err, req, res) {
    //    console.error(err);
    //    res.status(500);
    //    res.json({ error: 'Error when connecting to remote server.' });
    //},
    logLevel: LOG_LEVEL,
    changeOrigin: true,
    secure: true
});
// end proxy handler


module.exports = (callback_env, { COMPILE_ENV, SERVER_CONFIG }) => {
  // init node server
  const app = express();

  // start proxy handler
  const opts = proxyOpts(SERVER_CONFIG);
  const proxyInst = proxy(opts);
  app.use('/api', proxyInst);

  // add environment configuration
  callback_env(app);

  // start server ...
  var server = app.listen(SERVER_CONFIG.PORT, function () {
      var host = server.address().address;
      var port = server.address().port;

      console.log('SERVER NODE: -> Starting at ' + ((host === '::') ? '"localhost"' : host) + ' on port ' + port);
      console.log('SERVER NODE: -> Environment ' + COMPILE_ENV);
  });
};
