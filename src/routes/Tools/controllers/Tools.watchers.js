import {
  all, fork, takeEvery
} from 'redux-saga/effects';
import { types } from './Tools.actions';
import { setCallToolsList, setCallToolsDetails } from './Tools.controller';


function* watchCallToolsList() {
  yield takeEvery(types.CALL_TOOLS_LIST, setCallToolsList);
}

function* watchCallToolsDetails() {
  yield takeEvery(types.CALL_TOOL_DETAILS, setCallToolsDetails);
}


const list = [
  fork(watchCallToolsList),
  fork(watchCallToolsDetails),
];

function* root() {
  yield all(list);
}

export default root;
