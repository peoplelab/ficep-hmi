import { call, put } from 'redux-saga/effects';


/**
 * Handle rest api calls
 * @param {object} actionAPI Object with actions to call after rest api response
 * @param {object} request Rest api request
 * @param {string} url Rest api address
 */
export function* fetchData_gen(actionAPI, request, url) {
  try {
    //eslint-disable-next-line
    console.log('> Calling REST API:' + url);
    console.log(request);

    const response = yield call(fetch, url, request);

    //eslint-disable-next-line
    console.log('> REST API executed.');
    console.log(response);

    const status = response.status;

    if (status === 200) {
      //eslint-disable-next-line
      console.log('> REST API success. Status: ' + status);
      const response_dataraw = yield call([response, response.json]);

      yield put(actionAPI.SUCCESS(status, response_dataraw));
    } else {
      //eslint-disable-next-line
      console.log('> REST API error. Status: ' + status);
      const response_dataraw = yield call([response, response.text]);

      yield put(actionAPI.ERROR(status, { message: response_dataraw }));
    }


  } catch (error) {
    //eslint-disable-next-line
    console.log('> REST API failed.');
    console.log(error);

    yield put(actionAPI.FAIL(error));
  }
}
