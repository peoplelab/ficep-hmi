import {
    // fork, takeEvery,
    fork
} from 'redux-saga/effects';
//import { types } from './actions';
import { fetchData_gen } from './sagas';


//
function* callSagaBase(payload) {

    // let url = 'https://reqres.in/api/users?page=2';
    const { url } = payload;

    const request = new Request(url, {
        method: "get",
        headers: new Headers({
            "Content-Type": "application/json"
        }),
        //body: JSON.stringify(payload)
    });

    yield fork(fetchData_gen, { payload: { url, request } });
}

//export function* getData() {
//    yield takeEvery(types.TESTMODEL_CALL, callSagaBase);
//}

export { callSagaBase };
