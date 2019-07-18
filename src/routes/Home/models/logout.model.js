/*
 * Interface (model) for Logout API.
 */

import {
    fork
} from 'redux-saga/effects';
import { fetchData_gen } from '../../../commons/sagas.base';

/*
 * Build request and calling saga....
 * @param {object} action action object
 * @param {object} headers header elements (as JSON)
 * @param {object} data body elements (as JSON)
 */
export function* callLogout(action, headers, data) {
    const url = '/api/v1/Users/Logout';

    const header = {
        "Authorization": headers.AccessToken,
        "Session": headers.SessionId,
        "Content-Type": "application/json",
    };

    const body = {
        
    };

    const request = {
        method: "put",
        headers: header,        
    };

    yield fork(fetchData_gen, action, request, url);
}
