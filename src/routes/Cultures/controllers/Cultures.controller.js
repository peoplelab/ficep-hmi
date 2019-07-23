import { fork, select } from 'redux-saga/effects';
import { action } from './Cultures.actions';
import {
  doCallCultureGet,
  doCallCulturePost,
  doCallCultureDelete,
  doCallCulturePut,
} from '../models/Cultures.model';


const getHeaders = state => ({
  AccessToken: state.session.data.accessToken,
  SessionId: state.session.data.sessionId,
});

export function* setCallCultureGet() {
  yield fork(doCallCultureGet, action.RESTAPI_CULTURES_GET);
}

export function* setCallCulturePost(action) {
  const {
    code, description
  } = action.payload;

  const header = yield select(getHeaders);

  const body = {
    code, description
  };

  yield fork(doCallCulturePost, action.RESTAPI_CULTURES_POST, header, body);
}

export function* setCallCultureDelete(action) {
  const { id } = action.payload;

  const header = yield select(getHeaders);

  yield fork(doCallCultureDelete, action.RESTAPI_CULTURES_DELETE, header, id);
}

export function* setCallCulturePut(action) {
  const {
    id, code, description
  } = action.payload;

  const header = yield select(getHeaders);

  const body = {
    id, code, description
  };

  yield fork(doCallCulturePut, action.RESTAPI_CULTURES_PUT, header, body);
}
