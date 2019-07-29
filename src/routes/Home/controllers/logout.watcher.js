/*
 * Watcher for RESTAPI_LOGOUT_CALL
 */
import {
    fork, takeEvery
} from 'redux-saga/effects';
import { types as typesApi } from '../../../store/actions/session.actions';
import { logout } from './logout.controller';


function* watchLogout() {
    yield takeEvery(typesApi.RESTAPI_LOGOUT_CALL, logout);
}

const list = [
    fork(watchLogout),
];

export default list;
