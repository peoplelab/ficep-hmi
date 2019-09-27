const moment = require('moment');
const { base } = require('../../../../mock.base');


const FORMAT = 'YYYY-MM-DDTHH:mm:ss.SSSSSSS';


module.exports = {
  POST: base(
    (req, res) => {
      const { body } = req;
      const { firstName, lastName, password, groups } = body;
      const [group] = groups;

      try {
        if (!firstName) {
          throw "USER_CREATION_FIRSTNAME_EMPTY";
        }
        if (!lastName) {
          throw "USER_CREATION_LASTNAME_EMPTY";
        }
        if (!password) {
          throw "USER_CREATION_PASSWORD_EMPTY";
        }
        if (!(/.{3,50}/.test(firstName))) {
          throw "USER_CREATION_FIRSTNAME_INVALIDLENGTH";
        }
        if (!(/.{3,100}/.test(lastName))) {
          throw "USER_CREATION_LASTNAME_INVALIDLENGTH";
        }
        if (!(/.{8,16}/.test(password))) {
          throw "USER_CREATION_PASSWORD_INVALIDLENGTH";
        }
        if (!group) {
          throw "USER_CREATION_GROUPS_NOTSPECIFIED";
        }

        const userName = `${firstName}.${lastName}`;
        const id = global.users.result.length + 1;

        global.users.result.push({
          id,
          firstName,
          lastName,
          userName,
          isActive: true,
          groups: [global.groups.result[group]],
          creationDate: moment().format(FORMAT)
        });

        return ({
          "responseType": 200,
          "errorCode": null,
          "result": userName,
        });
      } catch (err) {
        console.log(err);
        return ({
          "responseType": 400,
          "errorCode": null,
          "result": err
        });
      }
    }
  ),
  PUT: base(
    (req, res) => ({
      "responseType": 200,
      "errorCode": null,
      "result": Math.random() >= 0.5
    })
  ),
  DELETE: base(
    (req, res) => ({
      "responseType": 200,
      "errorCode": null,
      "result": Math.random() >= 0.5
    })
  )
};

/*

      const id = global.users.length + 1;
*/
