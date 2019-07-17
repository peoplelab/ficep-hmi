import {
  all, fork, takeEvery, select, put
} from 'redux-saga/effects';
import { types } from './Login.actions';
import { restApiResponse, dataForView } from './Login.actions';
import { doCallLogin } from '../models/Login.model';


const getGrantType = state => state.Login.form.grantType;

const getPassword = state => ({
  username: state.Login.form.username,
  password: state.Login.form.password,
});

const getRefreshToken = state => ({refreshtoken: state.Login.form.refreshtoken});


function* setCallLogin() {
  let data = {};

  const grantType = yield select(getGrantType);

  if (grantType === 'Password') {
    data = yield select(getPassword);
  } else if (grantType === 'RefreshToken') {
    data = yield select(getRefreshToken);
  }

  data.grantType = grantType;

  yield fork(doCallLogin, restApiResponse, data);
}
function* watchCallLogin() {
  yield takeEvery(types.RESTAPI_CALL_LOGIN, setCallLogin);
}


function* setDataForView(action) {
  const { response } = action;
  // const {
  //   username,
  //   accessToken,
  //   refreshToken,
  //   culture,
  //   groups,
  //   permissions,
  //   sessionId,
  //   expiredAt,
  //   sessionLogId,
  //   refreshExpiredAt,
  //   issuedAt,
  // } = response;
console.log(action);
  yield put(dataForView(response));
}
function* watchRestApiResponseOK() {
  yield takeEvery(types.RESTAPI_RESPONSE_OK, setDataForView);
}


const list = [
  fork(watchCallLogin),
  fork(watchRestApiResponseOK),
];

function* root() {
  yield all(list);
}

export default root;
