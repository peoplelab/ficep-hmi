const { base } = require('../../../mock.base');


module.exports = {
  GET: base(
    (req, res) => ({
      "responseType": 200,
      "errorCode": null,
      "result": global.users.result[req.params.id - 1],
    })
  ),
  DELETE: base(
    (req, res) => {
      const id = parseInt(req.params.id);
      const test = global.users.result.some(item => item.id === id);

      if (typeof test === 'undefined') {
        return {
          "responseType": 400,
          "errorCode": null,
          "result": "USER_DELETION_NOTFOUND",
        };
      }

      global.users.result = global.users.result.filter(item => item.id !== id);

      return {
        "responseType": 200,
        "errorCode": null,
        "result": true,
      };
    }
  ),
};
