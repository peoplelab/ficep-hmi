/* eslint-disable import/no-extraneous-dependencies */

const express = require('express');
const bodyParser = require('body-parser');
const mocks = require('../mocks');


const PORT = 4000;
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

    console.log('--> NEW REQUEST at ' + (new Date()).toString() + '\n' +
        '--> Method: ' + req.method + '\n' +
        '--> Headers: \n' + JSON.stringify(req.headers) +
        '--> Body: ' + JSON.stringify(req.body)
    );

    res.on("finish", () => {
        console.log("--> RESPONSE : " + res.statusCode + ' - ' + res.statusMessage);
    });

    next();
});

mocks(app);

var server = app.listen(PORT, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('SERVER MOCK: -> Starting at ' + ((host === '::') ? '"localhost"' : host) + ' on port ' + port);
});

