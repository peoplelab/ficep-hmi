const { base } = require('../../../mock.base');


module.exports = {
  GET: base(
    (req, res) => ({
      "ResponseType": 200,
      "ErrorCode": null,
      "Result": global.users.Result[req.params.id - 1],
    })
  ),
  PUT: base(
    (req, res) => ({
      "ResponseType": 200,
      "ErrorCode": null,
      "Result": true,
    })
  ),
  DELETE: base(
    (req, res) => {
      const id = parseInt(req.params.id);
      const test = global.users.Result.some(item => item.Id === id);

      if (typeof test === 'undefined') {
        return {
          "ResponseType": 400,
          "ErrorCode": null,
          "Result": "USER_DELETION_NOTFOUND",
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
