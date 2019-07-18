import {
  fork, select, put
} from 'redux-saga/effects';
import { action } from './Login.actions';
import { doCallLogin } from '../models/Login.model';


const getGrantType = state => state.Login.form.grantType;

const getPassword = state => ({
  username: state.Login.form.username,
  password: state.Login.form.password,
});

const getRefreshToken = state => ({refreshtoken: state.Login.form.refreshtoken});


export function* setCallLogin() {
  let data = {};

  const grantType = yield select(getGrantType);

  if (grantType === 'Password') {
    data = yield select(getPassword);
  } else if (grantType === 'RefreshToken') {
    data = yield select(getRefreshToken);
  }

  data.grantType = grantType;

  yield fork(doCallLogin, action.RESTAPI_LOGIN, data);
}


export function* setDataForView(actionAPI) {
  const { response } = actionAPI;
  // const {
  //   username,
  //   accessToken,
  //   refreshToken,
  //   culture,
  //   groups,
  //   permissions,
  //   sessionId,
  //   expiredAt,
  //   sessionLogId,
  //   refreshExpiredAt,
  //   issuedAt,
  // } = response;

  yield put(action.DATA_FOR_VIEW(response));
}
