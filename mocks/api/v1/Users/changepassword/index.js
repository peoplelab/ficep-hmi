const { base } = require('../../../../mock.base');
const changePasswordPUT = require('./changePassword.PUT');


module.exports = {
  PUT: base(
    (req, res) => changePasswordPUT[req.body.userId.toString()],
  )
};
