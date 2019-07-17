export const types = {
    CALL_LOGIN: 'CALL_LOGIN',
    ON_CHANGE: 'ON_CHANGE',

    RESTAPI_RESPONSE_OK: 'RESTAPI_RESPONSE_OK',
    RESTAPI_RESPONSE_KO: 'RESTAPI_RESPONSE_KO',
};


export const callLogin = () => ({ type: types.CALL_LOGIN });

export const onChange = (name, value) => ({
  type: types.ON_CHANGE,
  payload: { name, value },
});

export const restApiResponse = {
  OK: response => ({ type: types.RESTAPI_RESPONSE_OK, response}),
  KO: error => ({ type: types.RESTAPI_RESPONSE_KO, error}),
};
