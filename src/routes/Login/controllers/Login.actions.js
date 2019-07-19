import {
  createPayloadTypes, createPayloadAction
} from '../../../commons/actions';

/**
 * Id action types list
 */
const payloadList = ['ON_LOGIN_CHANGE'];

/**
 * Define actions types enum ocject
 */
const payloadTypes = createPayloadTypes(...payloadList);

/**
 * Define map of actions creators
 */
const payloadActions = createPayloadAction(...payloadList);

/**
 * Login actions types
 */
export const types = {
  ...payloadTypes,
};

/**
 * Login actions creators
 */
export const action = {
  ...payloadActions,
};

/*
  ON_LOGIN_CHANGE: definisce e salva ogni azione, all'interno di un campo della login form, da parte dell'utente
*/
