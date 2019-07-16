
export const types = {
    RESTAPI_CALL: 'RESTAPI_CALLING_RESTAPI',
    RESTAPI_RESPONSE_OK: 'RESTAPI_RESPONSE_OK',
    RESTAPI_RESPONSE_KO: 'RESTAPI_RESPONSE_KO',

    TESTMODEL_CALL: 'TESTMODEL_CALL'
};


export const actionCreator = (type, data) => ({
  type: type,
  payload: {
    data
  },
});
