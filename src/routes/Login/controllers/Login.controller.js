import { fork, select } from 'redux-saga/effects';
import { action as actionApi } from '../../../store/actions/session.actions';
import { doCallLogin } from '../models/Login.model';


/**
 * Retrive user IP address
 * @param {*} state Redux store state
 */
const getIP = state => state.session.ip;


/**
 * Login request controller
 */
export function* setCallLogin(action) {
  const {
    username, password, culture
  } = action.payload;

  const ip = yield select(getIP);

  /**
   * Body request data
   */
  const data = {
    grantType: 'Password',
    username,
    password,
    culture,
    ip,
  };

  /**
   * Run custom rest api login as new thread
   */
  yield fork(doCallLogin, actionApi.RESTAPI_LOGIN, data);
}
