const responseJSON = require('./response.json');

module.exports = {
  GET: (req, res) => {
    res.status(200).json(responseJSON.GET);
  },
  POST: (req, res) => {
    const { authorization, session } = req.headers;

    let status;
    let response;

    if (!authorization || !session) {
      status = 401;
      response = 'unauthorized';
    } else if (authorization === global.logged.accessToken && session === global.logged.sessionId) {
      status = 200;
      response = 25;
    } else {
      status = 400;
      response = 'invalidRequest';
    }


    res.status(status).json(response);
  },
  PUT: (req, res) => {
    const { authorization, session } = req.headers;
    const { id } = req.body;

    let status;
    let response;

    if (!authorization || !session) {
      status = 401;
      response = 'unauthorized';
    } else if (authorization === global.logged.accessToken && session === global.logged.sessionId) {
      if (parseInt(id) > 6) {
        status = 200;
        response = false;
      } else {
        status = 200;
        response = true;
      }
    } else {
      status = 400;
      response = 'invalidRequest';
    }

    res.status(status).json(response);
  }
};
