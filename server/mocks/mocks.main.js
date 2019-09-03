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

    console.log('\x1b[36m--> NEW REQUEST at ' + (new Date()).toString()
        + ' \n--> Method: ' + req.method
        + ' \n--> Headers: ' + JSON.stringify(req.headers)
        + ' \n--> Body: ' + JSON.stringify(req.body)
        + '\x1b[0m'
    );

    res.on("finish", () => {
        console.log("\x1b[36m--> RESPONSE : " + res.statusCode + ' - ' + res.statusMessage + '\x1b[0m');
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
