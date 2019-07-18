import { fork, select } from 'redux-saga/effects';
import { action as actionApi } from '../../../store/actions/session.actions';
import { doCallLogin } from '../models/Login.model';


const getPassword = state => ({
  username: state.Login.form.username,
  password: state.Login.form.password,
  grantType: 'Password',
});


export function* setCallLogin() {
  const data = yield select(getPassword);

  yield fork(doCallLogin, actionApi.RESTAPI_LOGIN, data);
}
