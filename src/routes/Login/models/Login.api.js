import { call, put } from 'redux-saga/effects';
import { restApiResponse } from '../controllers/Login.actions';


//
function* fetchData_gen(body, url) {
  try {
    const request = new Request(url, {
        method: "post",
        headers: new Headers({
            "Content-Type": "application/json"
        }),
        body: JSON.stringify(body)
    });

    //eslint-disable-next-line
    console.log('> Calling REST API (GET):' + url);

    const response = yield call(fetch, url, request);

    //eslint-disable-next-line
    console.log('> REST API executed.');

    const status = response.status;
    const response_dataraw = yield call([response, response.json]);

    yield put(restApiResponse.OK({ status, data: response_dataraw }));

  } catch (error) {
    //eslint-disable-next-line
    console.log('> REST API failed.');
    console.log(error);

    yield put(restApiResponse.KO(error));
  }
}


export { fetchData_gen };
