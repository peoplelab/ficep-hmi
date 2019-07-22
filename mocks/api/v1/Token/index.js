const moment = require('moment');


const FORMAT = 'YYYY-MM-DDTHH:mm:ss.SSSSSSSZ';


const RESPONSE = {
  200: () => ({
    username: global.login.username,
    accessToken: global.logged.accessToken,
    refreshToken: global.login.refreshToken,
    culture: global.login.culture,
    groups: [],
    permissions: [],
    sessionId: global.logged.sessionId,
    expiredAt: global.login.expiredAt,
    sessionLogId: 1455,
    refreshExpiredAt: global.login.refreshExpiredAt,
    issuedAt: global.login.issuedAt,
  }),
  400: {
    Password: "InvalidUserName",
    Request: "InvalidRequest",
    Timeout: "sessionExpired",
    RefreshToken: "invalidRefreshToken",
    default: "invalidGrantType"
  }
}

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
        if (UserName === global.login.username && Password === global.login.password && !!IP && !!Culture) {
          global.login.culture = Culture;
          global.login.ip = IP;

          const now = moment();
          global.login.issuedAt = now.format(FORMAT);
          global.login.expiredAt = now.clone().add('3', 'm').format(FORMAT);
          global.login.refreshExpiredAt = now.clone().add('5', 'm').format(FORMAT);

          status = 200;
          response = RESPONSE[200]();
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
