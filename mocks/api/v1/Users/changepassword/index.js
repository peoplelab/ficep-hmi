const { base } = require('../../../../mock.base');
//const changePasswordPUT = require('./changePassword.PUT');
const changePasswordPUT_OK = require('./changePasswordPUT_OK');
const changePasswordPUT_KO = require('./changePasswordPUT_KO');
var schemaPUT = {
    "properties": {
        "userId": { "type": "number" },
        "oldPassword": { "type": "string" },
        "newPassword": { "type": "string" },
        "confirmedPassword": { "type": "string" }
    },
    "additionalProperties": false,
    "required": ["userId", "oldPassword", "newPassword", "confirmedPassword"]
};

module.exports = {
    PUT: base(
        (req, res) => {
            if (req.body.oldPassword === req.body.newPassword) {
                return changePasswordPUT_KO;
            }
            return changePasswordPUT_OK;
        }
    )
};
