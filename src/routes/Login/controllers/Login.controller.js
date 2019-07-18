import { fork, select } from 'redux-saga/effects';
import { action as actionApi } from '../../../store/actions/session.actions';
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

  yield fork(doCallLogin, actionApi.RESTAPI_LOGIN, data);
}
