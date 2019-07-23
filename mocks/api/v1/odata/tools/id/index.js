const responseJSON = require('./response');

module.exports = {
  GET: (req, res) => {
    const { authorization, session } = req.headers;
    const { id } = req.params;

    let status;
    let response;

    if (!authorization || !session) {
      status = 401;
      response = responseJSON[401];
    } else if (authorization === global.logged.accessToken && session === global.logged.sessionId) {
      if (id > 6) {
        status = 400;
        response = responseJSON[400];
      } else {
        status = 200;
        response = { ...responseJSON[200], id };
      }
    } else {
      status = 400;
      response = responseJSON[400];
    }

    res.status(status).json(response);
  }
};
