import {
  createPayloadTypes, createPayloadAction, createApiTypes, createApiAction
} from '../../../commons/actions';

const payloadList = [
  /* */
];
const apiList = [/* */];


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
