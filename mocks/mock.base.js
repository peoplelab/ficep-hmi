const moment = require('moment');


const FORMAT = 'YYYY-MM-DDTHH:mm:ss.SSSSSSSZ';


const base = callback => (req, res) => {
  const { authorization, session } = req.headers;

  let status;
  let response;

  if (!authorization || !session) {
    status = 200;
    response = {
      "responseType": 400,
      "errorCode": "GENERIC_VALIDATION_ERROR",
      "result": [],
    };
  } if (!global.login.expiredAt) {
    status = 200;
    response = {
      "responseType": 400,
      "errorCode": "GENERIC_VALIDATION_ERROR",
      "result": [],
    };
  } else if(authorization !== global.logged.accessToken || session !== global.logged.sessionId) {
    status = 200;
    response = {
      "responseType": 400,
      "errorCode": "GENERIC_VALIDATION_ERROR",
      "result": [],
    };
  } else if(moment(global.login.expiredAt, FORMAT).isBefore(moment())) {
    status = 401;
    response = {
      "responseType": 401,
      "errorCode": "GENERIC_VALIDATION_ERROR",
      "result": [],
    };
  }else {
    status = 200;
    response = callback(req, res);
  }

  console.log('\tresponse');
  console.log(JSON.stringify(response));
  res.status(status).json(response);
};


module.exports = {
  base,
};
