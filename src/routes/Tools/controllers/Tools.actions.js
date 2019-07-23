//----------------------------------------------------------------------------------------
// File: Tools.actions.js		[controllers]
//
// Desc: Definizione delle actions della pagina "Gestione Tools"
// Path: /src/routes/Tools/controllers
//----------------------------------------------------------------------------------------

import {
  createPayloadTypes, createPayloadAction, createApiTypes, createApiAction
} from '../../../commons/actions';															// COMMON HANDLER di inizializzazione e gestione delle actions

const payloadList = [
  'CALL_TOOLS_LIST',
  'CALL_TOOL_DETAILS',
];
const apiList = ['RESTAPI_TOOLS_LIST', 'RESTAPI_TOOL_DETAILS'];


const payloadTypes = createPayloadTypes(...payloadList);
const apiTypes     = createApiTypes(...apiList);

const payloadActions = createPayloadAction(...payloadList);
const apiActions     = createApiAction(...apiList);
 

export const types = {
  ...payloadTypes,
  ...apiTypes,
};

export const action = {
  ...payloadActions,
  ...apiActions,
};

/*
  ON_LOGIN_CHANGE: definisce e salva ogni azione, all'interno di un campo della login form, da parte dell'utente
*/
