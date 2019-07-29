import {
  fork, takeEvery
} from 'redux-saga/effects';
import { types as typesApi } from '../../../store/actions/session.actions';
import { setCallLogin } from './Login.controller';


/**
 * Action login watcher
 *
 * Note: run login controller only when relative action is dispached to Redux store
 */
function* watchCallLogin() {
  yield takeEvery(typesApi.RESTAPI_LOGIN_CALL, setCallLogin);
}


/**
 * Watchers threads list
 */
const list = [
  fork(watchCallLogin),
];

export default list;
