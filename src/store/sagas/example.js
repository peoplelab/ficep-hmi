import {
  put, takeEvery, fork,
} from 'redux-saga/effects';
import { types } from '../actions/example';


function* doAction() {
  // ...
  yield put({ type: types.ACTION_TYPE });
  // ...
}

function* watchAction() {
  yield takeEvery(types.ACTION_TYPE, doAction);
}


export default [
  fork(watchAction),
];
