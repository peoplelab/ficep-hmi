const { base } = require('../../../../mock.base');


module.exports = {
  PUT: base(
    (req, res) => ({
      "ResponseType": 200,
      "ErrorCode": null,
      "Result": Math.round(Math.random() * 100) % 2 === 0,
    })
  )
};
