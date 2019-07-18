import { put } from 'redux-saga/effects';
import history from '../../commons/history'; // Browser history handler


window.qqq = history;

export function* goToHome() {
  yield put(push('/'));
}
