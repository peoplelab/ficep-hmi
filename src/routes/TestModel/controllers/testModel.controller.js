import {
    fork, takeEvery, select
} from 'redux-saga/effects';
import { types } from './testModel.actions';
import { callSagaBase } from '../models/testModel.model';


const getUrl = state => state.TestModel_pippo.url;


//
function* getData_gen(params) {

    //if (params.username.length === 0) {
    //    throw Error("Username empty!");
    //}
    //if (params.password.length === 0) {
    //    throw Error("Password empty!");
    //}

    const url = yield select(getUrl);
    console.log(url);

    let payload = {
        //username : params.username,
        //password : params.password
        url,
    };

    yield fork(callSagaBase, payload);
}

export default function* getData() {

	console.log('> getData');
    yield takeEvery(types.TESTMODEL_CALL, getData_gen);
}
