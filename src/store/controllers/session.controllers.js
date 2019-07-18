import { put } from 'redux-saga/effects';
import { action } from '../actions/session.actions';


export function* setRestApiLoginSuccess(actionAPI) {
  const { status, data } = actionAPI.response;
  console.log(actionAPI);

  const {
    username,
    accessToken,
    refreshToken,
    culture,
    groups,
    permissions,
    sessionId,
    expiredAt,
    error,
  } = data;

  const newResponse = {
    status,
    data: {
      username,
      accessToken,
      refreshToken,
      culture,
      groups,
      permissions,
      sessionId,
      expiredAt,
      error,
    }
  };

  yield put(action.SESSION_DATA(newResponse));
}

export function* setRestApiLoginError(actionAPI) {
  const { error } = actionAPI;
  console.log(actionAPI);

  const newResponse = { status: null, data: { error } };

  yield put(action.SESSION_DATA(newResponse));
}
