import { call } from 'redux-saga/effects';
import history from 'history';


export function* goToHome() {
  yield call(history.push, '/');
}
