import { fork, select } from 'redux-saga/effects';
import { action as actionApi } from '../../../store/actions/session.actions';
import { doCallLogin } from '../models/Login.model';


/**
 * Retrive Login request data from Redux store
 * @param {*} state Reduc store state
 */
const getPassword = state => ({
  username: state.Login.form.username,
  password: state.Login.form.password,
  grantType: 'Password',
});


/**
 * Login request controller
 */
export function* setCallLogin() {
  /**
   * Body request data
   */
  const data = yield select(getPassword);

  /**
   * Run custom rest api login as new thread
   */
  yield fork(doCallLogin, actionApi.RESTAPI_LOGIN, data);
}
