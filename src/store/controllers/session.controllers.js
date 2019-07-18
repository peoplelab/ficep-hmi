import { put } from 'redux-saga/effects';
import { action } from '../actions/session.actions';


export function* setRestApiLoginOK(actionAPI) {
  const { response } = actionAPI;

  const {
    username,
    accessToken,
    refreshToken,
    culture,
    groups,
    permissions,
    sessionId,
    expiredAt,
  } = response;

  const newResponse = {
    username,
    accessToken,
    refreshToken,
    culture,
    groups,
    permissions,
    sessionId,
    expiredAt,
  };

  yield put(action.DATA_FOR_VIEW(newResponse));
}

export function* setRestApiLoginKO(actionAPI) {
  const { error } = actionAPI;

  const newResponse = { error };

  yield put(action.DATA_FOR_VIEW(newResponse));
}
