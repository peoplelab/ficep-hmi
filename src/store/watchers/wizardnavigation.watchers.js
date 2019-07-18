import { fork, takeEvery } from 'redux-saga/effects';
import { types } from '../actions/session.actions';
import { goToHome } from '../controllers/wizardnavigation.controllers';


function* watchRestApiLoginOK() {
  yield takeEvery(types.RESTAPI_LOGIN_OK, goToHome);
}


const list = [
  fork(watchRestApiLoginOK),
];

export default list;
