import {
    fork, takeEvery,
} from 'redux-saga/effects';
//import { types } from './actions';
import { fetchData } from './sagas';


//
function* callSagaBase(params) {

    let url = 'https://reqres.in/api/users?page=2';

    let request = new Request(url, {
        method: "get",
        headers: new Headers({
            "Content-Type": "application/json"
        }),
        body: JSON.stringify(params.payload)
    });    

    const task1 = yield fork(fetchData, { payload: { url, request } });
}

//export function* getData() {
//    yield takeEvery(types.TESTMODEL_CALL, callSagaBase);
//}

export { callSagaBase };