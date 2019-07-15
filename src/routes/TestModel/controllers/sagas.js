import {
  all, put, takeEvery, fork,
} from 'redux-saga/effects';
import { types } from './actions';


function* doAction() {
  // ...
  yield put({ type: types.ACTION_TYPE });
  // ...
}

function* watchAction() {
  yield takeEvery(types.ACTION_TYPE, doAction);
}


const sagasList = [
  fork(watchAction),
];

function* rootSagas() {
  yield all(sagasList);
}


export default rootSagas;
