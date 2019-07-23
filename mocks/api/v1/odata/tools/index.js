const responseJSON = {
  GET: require('./response.GET'),
};

module.exports = {
  GET: (req, res) => {
    const { authorization, session } = req.headers;

    let status;
    let response;

    if (!authorization || !session) {
      status = 401;
      response = responseJSON.GET[401];
    } else if (authorization === global.logged.accessToken && session === global.logged.sessionId) {
      status = 200;
      response = responseJSON.GET[200];
    } else {
      status = 400;
      response = responseJSON.GET[400];
    }

    res.status(status).json(response);
  },
  POST: (req, res) => {
    res.status(200).json({
      "attributes": [
        {
          "id": 0,
          "value": 10,
          "toolComponentAttributeDefinition": "Diameter",
          "toolId": 0
        }
      ],
      "id": 0,
      "type": "Punching",
      "code": "string",
      "description": "string"
    });
  }
};
