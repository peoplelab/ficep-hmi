import {
  createPayloadTypes, createApiTypes, createPayloadAction, createApiAction
} from '../../commons/actions';

const payloadList = ['SESSION_DATA'];
const apiList = ['RESTAPI_LOGIN'];


const payloadTypes = createPayloadTypes(...payloadList);
const apiTypes = createApiTypes(...apiList);

const payloadActions = createPayloadAction(...payloadList);
const apiActions = createApiAction(...apiList);


export const types = {
  ...payloadTypes,
  ...apiTypes
};

export const action = {
  ...payloadActions,
  ...apiActions
};
