// Mock handler for Update User.


const { base } = require('../../../mock.base');
//const updateUserPUT = require('./updateUser.PUT.json');
const jsonLIST = require('../odata/users/response.json');
const responseJSONPUT_KO = require('./responsePUT_KO.json');
const responseJSONPUT_OK = require('./responsePUT_OK.json');


module.exports = {
  GET: base(
      (req, res) => get_response(req, res)
    ),

  //PUT: base(
  //  (req, res) => {
  //    const {id, firstName, lastName, isActive, canBeDeleted } = req.body;

  //    if (
  //      typeof id === 'undefined'
  //      || typeof firstName === 'undefined'
  //      || typeof lastName === 'undefined'
  //      || typeof isActive === 'undefined'
  //      || typeof canBeDeleted === 'undefined'
  //    ) {
  //      return updateUserPUT["999"];
  //    }

  //    if (id === 0 || id > 7) {
  //      return updateUserPUT["7"];
  //    } else {
  //      return updateUserPUT[id.toString()];
  //    }
  //  }
  //),
    PUT: base(
        (req, res) => {
            if (req.body.id === 2) {
                return responseJSONPUT_KO;
            }
            return responseJSONPUT_OK;
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


const get_response = (req, res) => {

    const json_element = jsonLIST[req.params.id - 1];
    const responseType = (json_element == null) ? 400 : 200;
    const errorcode = (json_element == null) ? "USER_GETDETAIL_NOTFOUND" : null;
    const result = (json_element == null) ? null : json_element;

    return {
        "ResponseType": responseType,
        "ErrorCode": errorcode,
        "Result": result
    };
}