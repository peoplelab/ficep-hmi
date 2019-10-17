
// Mock handler for Create/delete User.



//const moment = require('moment');
const { base } = require('../../../../mock.base');
//const createUserResponse = require('./createUserResponse.json');
const responseJSONPOST_KO = require('./responsePOST_KO.json');
const responseJSONPOST_OK = require('./responsePOST_OK.json');
const responseJSONDELETE_KO = require('./responseDELETE_KO.json');
const responseJSONDELETE_OK = require('./responseDELETE_OK.json');


//const FORMAT = 'YYYY-MM-DDTHH:mm:ss.SSSSSSS';

module.exports = {
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

  //DELETE: base(
  //    (req, res) => ({
  //        "responseType": 200,
  //        "errorCode": null,
  //        "result": Math.random() >= 0.5
  //    })
  //)
  //POST: base(
  //  (req, res) => {
  //    const {firstName, lastName, password, groups, CanDeleted } = req.body;

  //    if (
  //      typeof firstName === 'undefined'
  //      || typeof lastName === 'undefined'
  //      || typeof password === 'undefined'
  //      || typeof groups === 'undefined'
  //      || typeof CanDeleted === 'undefined'
  //    ) {
  //      return createUserResponse["999"];
  //    }

  //    switch (req.body.lastName) {
  //      case 'test1': {
  //        const userName = `${firstName}.${lastName}`;
  //        const id = global.users.Result.length + 1;
  //        const [group] = groups;

  //        global.users.Result.push({
  //          Id: id,
  //          FirstName: firstName,
  //          LastName: lastName,
  //          UserName: userName,
  //          IsActive: true,
  //          Groups: [global.groups.Result[group]],
  //          CreationDate: moment().format(FORMAT)
  //        });

  //        return createUserResponse["1"];
  //      }
  //      case 'test2': {
  //        return createUserResponse["2"];
  //      }
  //      case 'test3': {
  //        return createUserResponse["3"];
  //      }
  //      case 'test4': {
  //        return createUserResponse["4"];
  //      } default: {
  //        return createUserResponse["999"];
  //      }
  //    }
  //  }
  //),
  //PUT: base(
  //  (req, res) => ({
  //    "responseType": 200,
  //    "errorCode": null,
  //    "result": Math.random() >= 0.5
  //  })
  //),
};
