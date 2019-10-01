const { base } = require('../../../../mock.base');

const createUserResponse = require('./createUserResponse.json');


module.exports = {
  POST: base(
    (req, res) => {
      const {firstName, lastName, password, groups, CanDeleted } = req.body;

      if (
        typeof firstName === 'undefined'
        || typeof lastName === 'undefined'
        || typeof password === 'undefined'
        || typeof groups === 'undefined'
        || typeof CanDeleted === 'undefined'
      ) {
        return createUserResponse["999"];
      }

      switch (req.body.lastName) {
        case 'test1': {
          return createUserResponse["1"];
        }
        case 'test2': {
          return createUserResponse["2"];
        }
        case 'test3': {
          return createUserResponse["3"];
        }
        case 'test4': {
          return createUserResponse["4"];
        } default: {
          return createUserResponse["999"];
        }
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
