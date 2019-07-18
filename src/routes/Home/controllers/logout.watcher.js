/*
 * Watcher for RESTAPI_LOGOUT_CALL
 */
import {
    all, fork, takeEvery
} from 'redux-saga/effects';
import { types as typesApi } from '../../../store/actions/session.actions';
import { logout } from './logout.controller';


function* watchLogout() {
    yield takeEvery(typesApi.RESTAPI_LOGOUT_CALL, logout);
}

const list = [
    fork(watchLogout),
];

function* root() {
    yield all(list);
}

export default root;
