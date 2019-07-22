const moment = require('moment');
const responseJSON = require('./response.json');


const FORMAT = 'YYYY-MM-DDTHH:mm:ss.SSSSSSSZ';


const RESPONSE = {
  200: UserName => ({
    ...responseJSON[UserName],
    culture: global.login.culture,
    expiredAt: global.login.expiredAt,
    issuedAt: global.login.issuedAt,
    refreshExpiredAt: global.login.refreshExpiredAt,
  }),
  400: {
    default: "invalidGrantType",
    Password: "InvalidUserName",
    RefreshToken: "invalidRefreshToken",
    Request: "InvalidRequest",
    Timeout: "sessionExpired",
  }
};

module.exports = {
  POST: (req, res) => {
    const {
      Culture,
      GrantType,
      IP,
      Password,
      RefreshToken,
      UserName,
    } = req.body;

    let status;
    let response;

    switch(GrantType) {
      case 'Password': {
        if (UserName in global.login.username && Password === global.login.password && !!IP && !!Culture) {
          global.login.culture = Culture;
          global.login.ip = IP;

          const now = moment();
          global.login.issuedAt = now.format(FORMAT);
          global.login.expiredAt = now.clone().add('3', 'm').format(FORMAT);
          global.login.refreshExpiredAt = now.clone().add('5', 'm').format(FORMAT);

          status = 200;
          response = RESPONSE[200](UserName);
        } else if (!IP || !Culture) {
          status = 400;
          response = RESPONSE[400].Request;
        } else {
          status = 400;
          response = RESPONSE[400].Password;
        }
        break;
      }
      case 'RefreshToken': {
        const now = moment();
        const refreshExpiredAt = global.login.refreshExpiredAt !== null && moment(global.login.refreshExpiredAt, FORMAT);

        if (RefreshToken!== global.login.refreshToken || !refreshExpiredAt) {
          status = 400;
          response = RESPONSE[400].RefreshToken;
        } else if (!(now.isBefore(refreshExpiredAt))) {
          status = 400;
          response = RESPONSE[400].Timeout;
        } else {
          status = 200;
          response = RESPONSE[200]();
        }
        break;
      }
      default: {
        status = 400;
        response = RESPONSE[400].default;
      }
    }

    res.status(status).json(response);
  }
};
