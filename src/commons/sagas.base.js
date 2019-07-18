import { call, put } from 'redux-saga/effects';


/**
 * Handle rest api calls
 * @param {object} actionAPI
 * @param {object} request
 * @param {string} url
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

    yield put(actionAPI.OK(status, response_dataraw));

  } catch (error) {
    //eslint-disable-next-line
    console.log('> REST API failed.');
    console.log(error);

    yield put(actionAPI.KO(error));
  }
}
