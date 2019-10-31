// Mock handler for Update User.


const { base } = require('../../../mock.base');
//const updateUserPUT = require('./updateUser.PUT.json');
const jsonLIST = require('../odata/users/response.json');
const responseJSONPUT_KO = require('./responsePUT_KO.json');
const responseJSONPUT_OK = require('./responsePUT_OK.json');
const responseJSONPOST_KO = require('./responsePOST_KO.json');
const responseJSONPOST_OK = require('./responsePOST_OK.json');
const responseJSONDELETE_KO = require('./responseDELETE_KO.json');
const responseJSONDELETE_OK = require('./responseDELETE_OK.json');


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

    POST: base(
        (req, res) => {
            if (req.body.firstName === "pippo") {
                return responseJSONPOST_KO;
            }
            return responseJSONPOST_OK;
        }
    ),

    DELETE: base(
        (req, res) => {
            if (req.params.id == 0) {
                return responseJSONDELETE_KO;
            }
            return responseJSONDELETE_OK;
        }
    )
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
