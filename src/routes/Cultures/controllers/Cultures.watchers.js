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
  yield takeEvery(types.RESTAPI_CULTURES_GET_CALL, setCallCultureGet);
}

function* watchCallCulturePost() {
  yield takeEvery(types.RESTAPI_CULTURES_POST_CALL, setCallCulturePost);
}

function* watchCallCultureDelete() {
  yield takeEvery(types.RESTAPI_CULTURES_DELETE_CALL, setCallCultureDelete);
}

function* watchCallCulturePut() {
  yield takeEvery(types.RESTAPI_CULTURES_PUT_CALL, setCallCulturePut);
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
