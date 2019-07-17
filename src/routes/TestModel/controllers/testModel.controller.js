import {
    fork, takeEvery,
} from 'redux-saga/effects';
import { types } from './testModel.actions';
import { callSagaBase } from '../models/testModel.model';


//
function* getData_gen(params) {

    //if (params.username.length === 0) {
    //    throw Error("Username empty!");
    //}
    //if (params.password.length === 0) {
    //    throw Error("Password empty!");
    //}


    let payload = {
        //username : params.username,
        //password : params.password
    };

    const task = yield fork(callSagaBase, { payload });
}

export default function* getData() {

	console.log('> getData');
    yield takeEvery(types.TESTMODEL_CALL, getData_gen);
}
