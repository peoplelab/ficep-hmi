const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const mocks = require('../mocks');

// external file for server configuration
const SERVER_CONFIG = JSON.parse(fs.readFileSync('./server.config.json'));


const { PORT } = SERVER_CONFIG;
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

var server = app.listen(PORT, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('SERVER MOCK: -> Starting at ' + ((host === '::') ? '"localhost"' : host) + ' on port ' + port);
});
