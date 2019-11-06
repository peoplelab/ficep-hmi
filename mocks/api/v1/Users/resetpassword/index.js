// Mock handler for resetPassword.


const { base } = require('../../../../mock.base');
const responseJSONPUT_KO = require('./responsePUT_KO');
const responseJSONPUT_OK = require('./responsePUT_OK');



module.exports = {


    PUT: base(
        (req, res) => {
            console.log("id Param: " + req.params.id);
            console.log("params: " + req.params);
            if (req.params.id == 2) {
                return responseJSONPUT_KO;
            }
            return responseJSONPUT_OK;
        }
    ),

   


};
