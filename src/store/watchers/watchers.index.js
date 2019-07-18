import { all } from 'redux-saga/effects';
import session from './session.watchers';
import wizardnavigation from './wizardnavigation.watchers';


const sagasList = [
  ...session,
  ...wizardnavigation,
];

function* rootSagas() {
  yield all(sagasList);
}


export default rootSagas;
