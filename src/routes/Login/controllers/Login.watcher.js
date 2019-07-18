import {
  all, fork, takeEvery
} from 'redux-saga/effects';
import { typesApi } from '../../../store/actions/session.actions';
import { setCallLogin } from './Login.controller';


function* watchCallLogin() {
  yield takeEvery(typesApi.RESTAPI_LOGIN_CALL, setCallLogin);
}

const list = [
  fork(watchCallLogin),
];

function* root() {
  yield all(list);
}

export default root;
