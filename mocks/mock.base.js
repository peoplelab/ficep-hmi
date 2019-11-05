const Ajv = require('ajv');
const moment = require('moment');


const FORMAT = 'YYYY-MM-DDTHH:mm:ss.SSSSSSSZ';


const base = (callback,schema) => (req, res) => {
    let status;
    let response;

    console.log("pippo " + JSON.stringify(req.body));
    console.log("SCHEMA " + JSON.stringify(schema));
    const jsonValidation = jsonValidate(schema, req.body);
    if (jsonValidation.length > 0) {
        status = 401;
        response = {
            "ResponseType": 430,
            "ErrorCode": "JSON_VALIDATION_ERROR",
            "Result": [jsonValidation]
        };
    }
    else {
        const { authorization, session } = req.headers;

        

        if (!authorization || !session) {
            status = 200;
            response = {
                "responseType": 410,
                "errorCode": "GENERIC_VALIDATION_ERROR",
                "result": [],
            };
        } if (!global.login.expiredAt) {
            status = 200;
            response = {
                "responseType": 411,
                "errorCode": "GENERIC_VALIDATION_ERROR",
                "result": [],
            };
        } else if (authorization !== global.logged.accessToken || session !== global.logged.sessionId) {
            status = 200;
            response = {
                "responseType": 412,
                "errorCode": "GENERIC_VALIDATION_ERROR",
                "result": [],
            };
        } else if (moment(global.login.expiredAt, FORMAT).isBefore(moment())) {
            status = 401;
            response = {
                "responseType": 401,
                "errorCode": "GENERIC_VALIDATION_ERROR",
                "result": [],
            };
        } else {
            status = 200;
            response = callback(req, res);
        }
    }

  console.log('\tresponse');
  console.log(JSON.stringify(response));
  res.status(status).json(response);
};

function jsonValidate(schema, body) {
    var ajv = new Ajv();
    var validate = ajv.compile(schema);
    var valid = validate(body);
    var result = "";
    if (valid) return result;
    else return result = ajv.errorsText(validate.errors);
}

module.exports = {
    base,
    jsonValidate
};
