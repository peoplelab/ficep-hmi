
export const types = {
    RESTAPI_CALL: 'CALLING_RESTAPI',
    RESTAPI_RESPONSE_OK: 'RESPONSE_OK',
    RESTAPI_RESPONSE_KO: 'RESPONSE_KO',

    TESTMODEL_CALL: 'TESTMODEL_CALL'
};


export const actionCreator = (type, data) => ({
  type: type,
  payload: {
    data
  },
});
