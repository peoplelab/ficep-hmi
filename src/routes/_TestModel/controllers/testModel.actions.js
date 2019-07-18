
export const types = {
    // RESTAPI_CALL: 'RESTAPI_CALLING_RESTAPI',
    RESTAPI_RESPONSE_SUCCESS: 'RESTAPI_RESPONSE_SUCCESS',
    RESTAPI_RESPONSE_ERROR: 'RESTAPI_RESPONSE_ERROR',
    RESTAPI_RESPONSE_FAIL: 'RESTAPI_RESPONSE_FAIL',

    TESTMODEL_CALL: 'TESTMODEL_CALL',
    ON_URL_CHANGE: 'ON_URL_CHANGE'
};


export const actionCreator = (type, data) => ({
  type: type,
  payload: {
    data
  },
});


export const testmodelCall = () => ({ type: types.TESTMODEL_CALL });

export const onUrlChange = url => ({
  type: types.ON_URL_CHANGE,
  payload: { url },
});
