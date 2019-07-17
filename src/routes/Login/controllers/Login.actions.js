export const types = {
    RESTAPI_CALL_LOGIN: 'RESTAPI_CALL_LOGIN',
    ON_CHANGE: 'ON_CHANGE',

    // RESTAPI_LOGIN_CALL: 'RESTAPI_LOGIN_CALL',
    // RESTAPI_LOGIN_CALL: 'RESTAPI_LOGIN_OK',
    // RESTAPI_LOGIN_CALL: 'RESTAPI_LOGIN_KO',
    RESTAPI_RESPONSE_OK: 'RESTAPI_RESPONSE_OK',
    RESTAPI_RESPONSE_KO: 'RESTAPI_RESPONSE_KO',

    DATA_FOR_VIEW: 'DATA_FOR_VIEW',
};


export const restApiCallLogin = () => ({ type: types.RESTAPI_CALL_LOGIN });

export const onChange = (name, value) => ({
  type: types.ON_CHANGE,
  payload: { name, value },
});

export const restApiResponse = {
  OK: (status, data) => ({ type: types.RESTAPI_RESPONSE_OK, response: { status, data }}),
  KO: error => ({ type: types.RESTAPI_RESPONSE_KO, error}),
};

// export const restApiLogin = {
//   CALL: () => ({ type: types.RESTAPI_LOGIN_CALL }),
//   OK: response => ({ type: types.RESTAPI_LOGIN_OK, response}),
//   KO: error => ({ type: types.RESTAPI_LOGIN_KO, error}),
// };

export const dataForView = response => ({
  type: types.DATA_FOR_VIEW,
  payload: {
    status: response.status,
    data: response.data,
    // username: response.username,
    // accessToken: response.accessToken,
    // refreshToken: response.refreshToken,
    // culture: response.culture,
    // groups: response.groups,
    // permissions: response.permissions,
    // sessionId: response.sessionId,
    // expiredAt: response.expiredAt,
    // sessionLogId: response.sessionLogId,
    // refreshExpiredAt: response.refreshExpiredAt,
    // issuedAt: response.issuedAt,
  },
});
