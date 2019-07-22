const responseJSON = require('./response');

module.exports = {
  GET: (req, res) => {
    const { authorization, session } = req.headers;

    let status;
    let response;

    if (!authorization || !session) {
      status = 401;
      response = responseJSON[401];
    } else if (authorization === global.logged.accessToken && session === global.logged.sessionId) {
      status = 200;
      response = responseJSON[200];
    } else {
      status = 400;
      response = responseJSON[400];
    }


    res.status(status).json(response);
  }
};
