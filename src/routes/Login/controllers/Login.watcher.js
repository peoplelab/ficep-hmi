import {
  all, fork, takeEvery
} from 'redux-saga/effects';
import { types } from './Login.actions';
import { setCallLogin, setDataForView } from './Login.controller';


function* watchCallLogin() {
  yield takeEvery(types.RESTAPI_LOGIN_CALL, setCallLogin);
}

function* watchRestApiResponseOK() {
  yield takeEvery(types.RESTAPI_LOGIN_OK, setDataForView);
}


const list = [
  fork(watchCallLogin),
  fork(watchRestApiResponseOK),
];

function* root() {
  yield all(list);
}

export default root;
