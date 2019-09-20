const moment = require('moment');
const uuidv1 = require('uuid/v1');
const { base } = require('../../../mock.base');
const responseJSON = require('./response.json');
const sessionIdJSON = require('./sessionId.response.json');


const FORMAT = 'YYYY-MM-DDTHH:mm:ss.SSSSSSSZ';

const RESPONSE = UserName => ({
  "responseType": 200,
  "errorCode": null,
  "result": {
    ...responseJSON[UserName],
    culture: global.login.culture,
    expiredAt: global.login.expiredAt,
    issuedAt: global.login.issuedAt,
    refreshExpiredAt: global.login.refreshExpiredAt,
    refreshToken: global.login.refreshToken,
  }
});

const setGlobalTime = () => {
  const now = moment();
  global.login.issuedAt = now.format(FORMAT);
  global.login.expiredAt = now.clone().add('1', 'm').format(FORMAT);
  global.login.refreshExpiredAt = now.clone().add('2', 'm').format(FORMAT);
};


const responseID = {
  ...sessionIdJSON,

}


module.exports = {
  GET: base(
    (req, res) => res.status(200).json(responseID)
  ),
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
        if (!Culture || !IP || !Password || !UserName) {
          status = 200;
          const result = ["USER_LOGIN_INVALIDINPUT"];

          if (!UserName) {
            result.push('USER_LOGIN_USERNAME_EMPTY');
          }
          if (!Password) {
            result.push('USER_LOGIN_PASSWORD_EMPTY');
          }
          if (!Culture) {
            result.push('USER_LOGIN_CULTURE_EMPTY');
          }
          if (!IP) {
            result.push('USER_LOGIN_IP_EMPTY');
          }

          response = {
            "responseType": 400,
            "errorCode": "GENERIC_VALIDATION_ERROR",
            "result": result,
          };
        } else if (UserName.length < 3 || UserName.length > 25) {
          status = 200;
          response = {
            "responseType": 400,
            "errorCode": "GENERIC_VALIDATION_ERROR",
            "result": [
              "USER_LOGIN_USERNAME_INVALIDLENGTH",
              "USER_LOGIN_USERNAME_INVALID"
            ]
          };
        } else if (Password.length < 8 || Password.length > 16) {
          status = 200;
          response = {
            "responseType": 400,
            "errorCode": "GENERIC_VALIDATION_ERROR",
            "result": [
              "USER_LOGIN_PASSWORD_INVALIDLENGTH",
              "USER_LOGIN_PASSWORD_INVALID"
            ]
          };
        } else if (!(global.login.username.includes(UserName))) {
          status = 200;
          response = {
            "responseType": 400,
            "errorCode": "GENERIC_VALIDATION_ERROR",
            "result": [
              "USER_LOGIN_USERNAME_INVALID"
            ]
          };
        } else if(Password !== global.login.password) {
          status = 200;
          response = {
            "responseType": 400,
            "errorCode": "GENERIC_VALIDATION_ERROR",
            "result": [
              "USER_LOGIN_PASSWORD_INVALID"
            ]
          };
        } else {
          global.login.refreshToken = uuidv1();

          global.login.culture = Culture;
          global.login.ip = IP;

          setGlobalTime();

          global.login.currentUser = UserName;

          status = 200;
          response = RESPONSE(UserName);
        }

        break;
      }
      case 'RefreshToken': {
        if (!RefreshToken) {
          status = 200;
          response = {
            "responseType": 400,
            "errorCode": "GENERIC_VALIDATION_ERROR",
            "result": [
              "USER_LOGIN_REFRESHTOKEN_EMPTY"
            ]
          };
        } else if (RefreshToken !== global.login.refreshToken) {
          status = 200;
          response = {
            "responseType": 400,
            "errorCode": "GENERIC_VALIDATION_ERROR",
            "result": [
              "USER_LOGIN_REFRESHTOKEN_INVALID"
            ]
          };
        } else {
          global.login.refreshToken = uuidv1();
          setGlobalTime();

          status = 200;
          response = RESPONSE(global.login.currentUser);
        }

        break;
      }
      default: {
        status = 200;
        response = {
          "responseType": 400,
          "errorCode": "GENERIC_VALIDATION_ERROR",
          "result": []
        };
      }
    }

    res.status(status).json(response);
  }
};
