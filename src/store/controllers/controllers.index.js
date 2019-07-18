import { all } from 'redux-saga/effects';
import session from './session.controller';


const sagasList = [
  ...session,
];

function* rootSagas() {
  yield all(sagasList);
}


export default rootSagas;
