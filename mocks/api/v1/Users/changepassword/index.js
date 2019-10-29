const { base } = require('../../../../mock.base');
//const changePasswordPUT = require('./changePassword.PUT');
const changePasswordPUT_OK = require('./changePasswordPUT_OK');
const changePasswordPUT_KO = require('./changePasswordPUT_KO');

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
