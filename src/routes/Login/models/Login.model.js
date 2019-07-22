import {
  fork
} from 'redux-saga/effects';
import { fetchData_gen } from '../../../commons/sagas.base';


/**
 * Login custom rest api request
 * @param {*} action Action to call after response
 * @param {*} data Body request data
 */
export function* doCallLogin(action, data) {
    //const url = 'http://172.30.57.26:4000/api/v1/Token';
    const url = '/api/v1/Token';

  const body = {
    GrantType: data.grantType,
    UserName: data.username,
    Password: data.password,
    Culture: data.culture,
    IP: data.ip,
    RefreshToken: data.refreshtoken,
  };

  const request = {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body),
  };

  /**
   * Run global rest api handler as new thread
   */
  yield fork(fetchData_gen, action, request, url);
}
