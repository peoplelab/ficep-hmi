//-------------------------------------------------------------------------------------------------
// File: mocks.main.js
//
// Desc: File di configurazione, comune a tutti gli ambienti, del server mock
// Path: /src/server/mocks.main
//-------------------------------------------------------------------------------------------------


const express = require('express');
const bodyParser = require('body-parser');
const mocks = require('../../mocks');


const app = express();

const OPTIONS = {
  URL: { extended: false },
  JSON: {
    extended: true,
    strict: false,
    type: 'application/json',
  }
};


app.use(bodyParser.urlencoded(OPTIONS.URL));
app.use(bodyParser.json(OPTIONS.JSON));

// logging requests...
app.use((req, res, next) => {
  const time = new Date();

  res.on("finish", () => {
    console.table({
      REQUEST: {
        time,
        URL: req.url,
        Method: req.method,
      },
      RESPONSE: {
        time: new Date(),
        statusCode: res.statusCode,
        statusMessage: res.statusMessage,
      }
    });
    console.log('\x1b[36m', '\t', 'Request Headers', '\n', JSON.stringify(req.headers), '\x1b[0m', '\n');
    console.log('\x1b[36m', '\t', 'Request Body', '\n', JSON.stringify(req.body), '\x1b[0m', '\n');
  });

  next();
});

mocks(app);


module.exports = (SERVER_CONFIG) => {
  var server = app.listen(SERVER_CONFIG.PORT, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('SERVER MOCK: -> Starting at ' + ((host === '::') ? '"localhost"' : host) + ' on port ' + port);
  });
};
