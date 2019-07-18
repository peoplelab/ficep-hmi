import {
  createPayloadTypes, createPayloadAction
} from '../../../commons/actions';

const payloadList = ['ON_LOGOUT_CHANGE'];


const payloadTypes = createPayloadTypes(...payloadList);

const payloadActions = createPayloadAction(...payloadList);


export const types = {
  ...payloadTypes,
};

export const action = {
  ...payloadActions,
};

/*
  ON_LOGIN_CHANGE: definisce e salva ogni azione, all'interno di un campo della login form, da parte dell'utente
*/
