module.exports = {
  PUT: (req, res) => {
    const { authorization, session } = req.headers;

    let status;
    let response;

    if (!authorization || !session) {
      status = 401;
      response = 'unauthorized';
    } else if (authorization === global.logged.accessToken && session === global.logged.sessionId) {
      status = 200;
      response = true;
    } else {
      status = 400;
      response = 'invalidRequest';
    }


    res.status(status).json(response);
  }
};
