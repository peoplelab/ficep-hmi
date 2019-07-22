import { fork, select } from 'redux-saga/effects';
import { action as actionApi } from '../../../store/actions/session.actions';
import { doCallLogin } from '../models/Login.model';


const getPassword = state => ({
  grantType: 'Password',
  username: state.Login.form.username,
  password: state.Login.form.password,
  culture: state.Login.form.culture,
  ip: state.session.ip,
  refreshtoken: ''
});


export function* setCallLogin() {
  const data = yield select(getPassword);

  yield fork(doCallLogin, actionApi.RESTAPI_LOGIN, data);
}
