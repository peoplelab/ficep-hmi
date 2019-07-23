//----------------------------------------------------------------------------------------
// File: Tools.controller.js		[controllers]
//
// Desc: Inizializzatore del controller della pagina "Gestione Tools"
// Path: /src/routes/Tools/controllers
//----------------------------------------------------------------------------------------

import { fork, select } from 'redux-saga/effects';											// Inizializzazione dei tools delle Sagas per la gestione dello store
import { action } from './Tools.actions';													// Importa le definizioni delle actions
import { doCallToolsList, doCallToolsDetails } from '../models/Tools.model';				// Model principale della pagina


const getHeaders = state => ({
  AccessToken: state.session.data.accessToken,
  SessionId: state.session.data.sessionId,
}); 

const getID = state => state.Tools.currentID;


export function* setCallToolsList() {
  const header = yield select(getHeaders);

  yield fork(doCallToolsList, action.RESTAPI_TOOLS_LIST, header);
}

export function* setCallToolsDetails() {
  const header = yield select(getHeaders);
  const id = yield select(getID);

  yield fork(doCallToolsDetails, action.RESTAPI_TOOL_DETAILS, header, id);
}
