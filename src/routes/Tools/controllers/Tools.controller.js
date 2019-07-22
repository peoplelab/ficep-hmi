import { fork, select } from 'redux-saga/effects';
import { action } from './Tools.actions';
import { doCallToolsList, doCallToolsDetails } from '../models/Tools.model';


const getHeaders = state => ({
  AccessToken: state.session.data.accessToken,
  SessionId: state.session.data.sessionId,
});


export function* setCallToolsList() {
  const header = yield select(getHeaders);

  yield fork(doCallToolsList, action.RESTAPI_TOOLS_LIST, header);
}

export function* setCallToolsDetails() {
  const header = yield select(getHeaders);

  yield fork(doCallToolsDetails, action.RESTAPI_TOOL_DETAILS, header);
}
