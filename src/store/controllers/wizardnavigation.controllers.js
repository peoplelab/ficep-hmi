import { call } from 'redux-saga/effects';
import history from '../../commons/history'; // Browser history handler


export function* goToHome() {
  yield call(history.push, '/');
}
