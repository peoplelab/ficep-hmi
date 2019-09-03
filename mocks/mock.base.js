const moment = require('moment');


const FORMAT = 'YYYY-MM-DDTHH:mm:ss.SSSSSSSZ';


const base = callback => (req, res) => {
  const { authorization, session } = req.headers;

  let status;
  let response;

  if (!authorization || !session) {
    status = 400;
    response = 'invalidRequest';
  } if (!global.login.expiredAt) {
    status = 400;
    response = 'invalidRequest';
  } else if(authorization !== global.logged.accessToken || session !== global.logged.sessionId) {
    status = 400;
    response = 'invalidRequest';
  } else if(moment(global.login.expiredAt, FORMAT).isBefore(moment())) {
    status = 400;
    response = 'sessionExpired';
  }else {
    status = 200;
    response = callback(req, res);
  }

  res.status(status).json(response);
};


module.exports = {
  base,
};
