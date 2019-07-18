/*
 * Controller for logout.
 * Notes: Automatically adds headers values.
 */

import { fork, select } from 'redux-saga/effects';
import { action as actionApi } from '../../../store/actions/session.actions';
import { callLogout } from '../models/logout.model';

/*
 * logout function
 */
export function* logout() {
    let data = {};

    const getHeaders = state => ({
        AccessToken: state.session.data.AccessToken,
        SessionId: state.session.data.SessionId,
    });
    let headers = yield select(getHeaders);

    yield fork(callLogout, actionApi.RESTAPI_LOGOUT, headers, data);
    /* -> reset session object because logout was called  (see session.reducers.js in \store) */
}
