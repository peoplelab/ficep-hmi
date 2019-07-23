//----------------------------------------------------------------------------------------
// File: Tools.watchers.js		[controllers]
//
// Desc: Inizializzatore dei watchers delle actions della pagina "Gestione Tools"
// Path: /src/routes/Tools/controllers
//----------------------------------------------------------------------------------------

import { all, fork, takeEvery } from 'redux-saga/effects';									// Inizializzazione dei tools delle Sagas per la gestione dello store
import { types } from './Tools.actions';													// Importa le definizioni delle actions
import { setCallToolsList, setCallToolsDetails } from './Tools.controller';					// Inizializzatore del controller


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
