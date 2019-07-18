import { fork, takeEvery } from 'redux-saga/effects';
import { types } from '../actions/session.actions';
import { setRestApiLoginSuccess, setRestApiLoginError } from '../controllers/session.controllers';


function* watchRestApiLoginSuccess() {
  yield takeEvery(types.RESTAPI_LOGIN_SUCCESS, setRestApiLoginSuccess);
}
function* watchRestApiLoginError() {
  yield takeEvery(types.RESTAPI_LOGIN_ERROR, setRestApiLoginError);
}


const list = [
  fork(watchRestApiLoginSuccess),
  fork(watchRestApiLoginError),
];

export default list;
