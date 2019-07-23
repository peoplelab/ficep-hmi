import {
  all, fork, takeEvery
} from 'redux-saga/effects';
import { types } from './Cultures.actions';
import {
  setCallCultureGet,
  setCallCulturePost,
  setCallCultureDelete,
  setCallCulturePut,
} from './Cultures.controller';


function* watchCallCultureGet() {
  yield takeEvery(types.CALL_CULTURES_GET, setCallCultureGet);
}

function* watchCallCulturePost() {
  yield takeEvery(types.CALL_CULTURES_POST, setCallCulturePost);
}

function* watchCallCultureDelete() {
  yield takeEvery(types.CALL_CULTURES_DELETE, setCallCultureDelete);
}

function* watchCallCulturePut() {
  yield takeEvery(types.CALL_CULTURES_PUT, setCallCulturePut);
}


const list = [
  fork(watchCallCultureGet),
  fork(watchCallCulturePost),
  fork(watchCallCultureDelete),
  fork(watchCallCulturePut),
];

function* root() {
  yield all(list);
}

export default root;
