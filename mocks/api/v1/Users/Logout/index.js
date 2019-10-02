const { base } = require('../../../../mock.base');


module.exports = {
  PUT: base(
    () => ({
      "ResponseType": 200,
      "ErrorCode": null,
      "Result": true
    })
  )
};
