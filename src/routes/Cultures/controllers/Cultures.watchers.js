import {
  all, fork, takeEvery
} from 'redux-saga/effects';
import { types } from './Cultures.actions';
import { /* */ } from './Cultures.controller';


// function* watchCallToolsList() {
//   yield takeEvery(types.CALL_TOOLS_LIST, setCallToolsList);
// }


const list = [
  // fork(watchCallToolsList),
];

function* root() {
  yield all(list);
}

export default root;
