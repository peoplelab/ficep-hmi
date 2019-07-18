import {
  all, fork, takeEvery
} from 'redux-saga/effects';
import { types } from '../actions/session.actions';
import { setRestApiLoginOK, setRestApiLoginKO } from '../controllers/session.controllers';


function* watchRestApiLoginOK() {
  yield takeEvery(types.RESTAPI_LOGIN_OK, setRestApiLoginOK);
}
function* watchRestApiLoginKO() {
  yield takeEvery(types.RESTAPI_LOGIN_KO, setRestApiLoginKO);
}


const list = [
  fork(watchRestApiLoginOK),
  fork(watchRestApiLoginKO),
];

function* root() {
  yield all(list);
}

export default root;
