const moment = require('moment');
const uuidv1 = require('uuid/v1');
const responseJSON = require('./response.json');


const FORMAT = 'YYYY-MM-DDTHH:mm:ss.SSSSSSSZ';

const RESPONSE = UserName => ({
  ...responseJSON[UserName],
  culture: global.login.culture,
  expiredAt: global.login.expiredAt,
  issuedAt: global.login.issuedAt,
  refreshExpiredAt: global.login.refreshExpiredAt,
  refreshToken: global.login.refreshToken,
});

const setGlobalTime = () => {
  const now = moment();
  global.login.issuedAt = now.format(FORMAT);
  global.login.expiredAt = now.clone().add('1', 'm').format(FORMAT);
  global.login.refreshExpiredAt = now.clone().add('2', 'm').format(FORMAT);
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
        if (!Culture || !IP || !Password || !UserName) {
          status = 400;
          response = 'InvalidRequest';
        } else if (!(global.login.username.includes(UserName)) || Password !== global.login.password) {
          status = 400;
          response = 'InvalidRequest';
        } else {
          global.login.refreshToken = uuidv1();

          global.login.culture = Culture;
          global.login.ip = IP;

          setGlobalTime();

          status = 200;
          response = RESPONSE(UserName);
        }

        break;
      }
      case 'RefreshToken': {
        if (!RefreshToken) {
          status = 400;
          response = 'InvalidRequest';
        } else if (RefreshToken !== global.login.refreshToken) {
          status = 400;
          response = 'InvalidRequest';
        } else {
          global.login.refreshToken = uuidv1();
          setGlobalTime();

          status = 200;
          response = RESPONSE(UserName);
        }

        break;
      }
      default: {
        status = 400;
        response = 'invalidGrantType';
      }
    }

    res.status(status).json(response);
  }
};
