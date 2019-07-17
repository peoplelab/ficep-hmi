import {
  fork
} from 'redux-saga/effects';
import { fetchData_gen } from '../../../commons/sagas.base';

export function* doCallLogin(action, data) {
  const url = '/api/v1/Token';

  const body = {
    GrantType: data.grantType,
    UserName: data.username,
    Password: data.password,
    RefreshToken: data.refreshtoken,
  };

  const request = {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body),
  };

  yield fork(fetchData_gen, action, request, url);
}
