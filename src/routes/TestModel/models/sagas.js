import {
  call, put, takeEvery, 
} from 'redux-saga/effects';
import { types } from '../controllers/actions';


//
function* fetchData(params) {
    try {

        //eslint-disable-next-line
        console.log('-> Calling REST API (GET):' + params.url);        

        const response = yield call(fetch, params.payload.url, params.payload.request);

        const data = yield call([response, response.json]);
        yield put({ type: types.RESTAPI_RESPONSE_OK, data });

        //eslint-disable-next-line
        console.log('-> REST API executed.');

    } catch (error) {
        //eslint-disable-next-line
        console.log('-> REST API failed.');

        yield put({ type: types.RESTAPI_RESPONSE_KO, error });
    }
}

function* fetch() {
    yield takeEvery(types.RESTAPI_CALL, fetchData);
}



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

export { fetch, fetchData };
