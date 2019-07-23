module.exports = {
  DELETE: (req, res) => {
    const { authorization, session } = req.headers;
    const { id } = req.params;

    let status;
    let response;

    if (!authorization || !session) {
      status = 401;
      response = 'unauthorized';
    } else if (authorization === global.logged.accessToken && session === global.logged.sessionId) {
      if (id > 6) {
        status = 200;
        response = true;
      } else {
        status = 200;
        response = false;
      }
    } else {
      status = 400;
      response = 'invalidRequest';
    }

    res.status(status).json(response);
  }
};
