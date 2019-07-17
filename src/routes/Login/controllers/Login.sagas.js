import {
    fork, takeEvery, select, call
} from 'redux-saga/effects';
import { types } from './Login.actions';
import { fetchData_gen } from '../models/Login.api';


const getGrantType = state => state.Login.form.grantType;

const getPassword = state => ({
  UserName: state.Login.form.username,
  Password: state.Login.form.password,
});

const getRefreshToken = state => ({RefreshToken: state.Login.form.refreshToken});


function* setData() {
  let data;

  const grantType = yield select(getGrantType);

  if (grantType === 'Password') {
    data = yield select(getPassword);
  } else if (grantType === 'RefreshToken') {
    data = yield select(getRefreshToken);
  }

  data.GrantType = grantType;

  return data;
}

function* doCallLogin() {
  const url = '/api/v1/Token';

  const data = yield call(setData);

  yield fork(fetchData_gen, data, url);
}

export default function* watchCallLogin() {
  yield takeEvery(types.CALL_LOGIN, doCallLogin);
}
