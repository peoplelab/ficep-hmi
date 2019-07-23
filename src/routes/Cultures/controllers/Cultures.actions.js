import {
  createPayloadTypes, createPayloadAction, createApiTypes, createApiAction
} from '../../../commons/actions';

const payloadList = [
  'CALL_CULTURES_GET',
  'CALL_CULTURES_POST',
  'CALL_CULTURES_DELETE',
  'CALL_CULTURES_PUT',
];
const apiList = [
  'RESTAPI_CULTURES_GET',
  'RESTAPI_CULTURES_POST',
  'RESTAPI_CULTURES_DELETE',
  'RESTAPI_CULTURES_PUT',
];


const payloadTypes = createPayloadTypes(...payloadList);
const apiTypes = createApiTypes(...apiList);

const payloadActions = createPayloadAction(...payloadList);
const apiActions = createApiAction(...apiList);


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
