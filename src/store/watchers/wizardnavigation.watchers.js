import { fork, takeEvery } from 'redux-saga/effects';
import { types } from '../actions/session.actions';
import { goToHome, goToLogin } from '../controllers/wizardnavigation.controllers';


function* watchRestApiLoginOK() {
  yield takeEvery(types.RESTAPI_LOGIN_SUCCESS, goToHome);
}

function* watchRestApiLogoutOK() {
  yield takeEvery(types.RESTAPI_LOGOUT_SUCCESS, goToLogin);
}


const list = [
  fork(watchRestApiLoginOK),
  fork(watchRestApiLogoutOK),
];

export default list;
