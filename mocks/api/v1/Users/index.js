const { base } = require('../../../mock.base');
const updateUserPUT = require('./updateUser.PUT.json');


module.exports = {
  GET: base(
    (req, res) => ({
      "ResponseType": 200,
      "ErrorCode": null,
      "Result": global.users.Result[req.params.id - 1],
    })
  ),
  PUT: base(
    (req, res) => {
      const {id, firstName, lastName, isActive, canBeDeleted } = req.body;

      if (
        typeof id === 'undefined'
        || typeof firstName === 'undefined'
        || typeof lastName === 'undefined'
        || typeof isActive === 'undefined'
        || typeof canBeDeleted === 'undefined'
      ) {
        return updateUserPUT["999"];
      }

      if (id === 0 || id > 7) {
        return updateUserPUT["7"];
      } else {
        return updateUserPUT[id.toString()];
      }
    }
  ),
  DELETE: base(
    (req, res) => {
      const id = parseInt(req.params.id);
      const test = id <= 4 && global.users.Result.some(item => item.Id === id);

      if (!test) {
        return {
          "ResponseType": 400,
          "ErrorCode": "USER_MANAGEMENT_NOTFOUND",
          "Result": null
        };
      }

      global.users.Result = global.users.Result.filter(item => item.Id !== id);

      return {
        "ResponseType": 200,
        "ErrorCode": null,
        "Result": true,
      };
    }
  ),
};
