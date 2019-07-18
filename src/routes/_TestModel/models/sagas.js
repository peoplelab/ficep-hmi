import {
  // call, put, takeEvery,
  call, put
} from 'redux-saga/effects';
import { types } from '../controllers/testModel.actions';


//
function* fetchData_gen(params) {
    try {

        //eslint-disable-next-line
        console.log('-> Calling REST API (GET):' + params.payload.url);

        const response = yield call(fetch, params.payload.url, params.payload.request);
        //const response = yield call(fetch, params.payload.url);

        //eslint-disable-next-line
        console.log('-> REST API executed.');

        const response_dataraw = yield call([response, response.json]);
        yield put({ type: types.RESTAPI_RESPONSE_SUCCESS, response_dataraw });


    } catch (error) {
        //eslint-disable-next-line
        console.log('-> REST API failed.');

        yield put({ type: types.RESTAPI_RESPONSE_FAIL, error });
    }
}

// function* fetchData() {
//     yield takeEvery(types.RESTAPI_CALL, fetchData_gen);
// }



//function* doAction() {
//  // ...
//  yield put({ type: types.ACTION_TYPE });
//  // ...
//}

//function* watchAction() {
//  yield takeEvery(types.ACTION_TYPE, doAction);
//}


//const sagasList = [
//  fork(watchAction),
//];

//function* rootSagas() {
//  yield all(sagasList);
//}

// export { fetchData_gen, fetchData };
export { fetchData_gen };
