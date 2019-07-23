import {
  createApiTypes, createApiAction
} from '../../../commons/actions';

const apiList = [
  'RESTAPI_CULTURES_GET',
  'RESTAPI_CULTURES_POST',
  'RESTAPI_CULTURES_DELETE',
  'RESTAPI_CULTURES_PUT',
];


const apiTypes = createApiTypes(...apiList);

const apiActions = createApiAction(...apiList);


export const types = {
  ...apiTypes,
};

export const action = {
  ...apiActions,
};

/*
  ON_LOGIN_CHANGE: definisce e salva ogni azione, all'interno di un campo della login form, da parte dell'utente
*/
