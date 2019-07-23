//----------------------------------------------------------------------------------------
// File: Tools.reducers.js		[controllers]
//
// Desc: Inizializzatore dei reducers associati allo store della pagina "Gestione Tools"
// Path: /src/routes/Tools/controllers
//----------------------------------------------------------------------------------------

import { createReducer } from '../../../commons/reducers';									// COMMON HANDLER di inizializzazione dei reducers
import { types } from './Tools.actions';													// Importa le definizioni delle actions
import initialState from './Tools.store';													// Inizializzatore dello store associato


const actionHandlers = {
  [types.RESTAPI_TOOLS_LIST_SUCCESS]: (state, { response }) => {
    state.list = response;

    return {...state};
  },
  [types.CALL_TOOL_DETAILS]: (state, { payload }) => {
    state.currentID = payload.id;

    return {...state};
  },
  [types.RESTAPI_TOOL_DETAILS_SUCCESS]: (state, { response }) => {
    state.details = response;

    return {...state};
  },
  [types.RESTAPI_TOOL_DETAILS_ERROR]: (state) => {
    state.details = {};

    return {...state};
  },
};


const reducer = createReducer(actionHandlers, initialState);
export default reducer;
