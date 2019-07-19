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

    const status = response.status;
    const response_dataraw = yield call([response, response.json]);

    /**
     * Check the status of the response, if equal to 200 is call success action, in other case error action
     */
    if (status === 200) {
      //eslint-disable-next-line
      console.log('> REST API success. Status: ' + status);

      yield put(actionAPI.SUCCESS(status, response_dataraw));
    } else {
      //eslint-disable-next-line
      console.log('> REST API error. Status: ' + status);

      yield put(actionAPI.ERROR(status, response_dataraw));
    }


  } catch (error) {
    //eslint-disable-next-line
    console.log('> REST API failed.');
    console.log(error);

    /**
     * Call action failure only when is not possible conncet to rest api service
     */
    yield put(actionAPI.FAIL(error));
  }
}
