import {
  createPayloadTypes, createPayloadAction
} from '../../../commons/actions';

const payloadList = ['ON_LOGIN_CHANGE'];


const payloadTypes = createPayloadTypes(...payloadList);

const payloadActions = createPayloadAction(...payloadList);


export const types = {
  ...payloadTypes,
};

export const action = {
  ...payloadActions,
};
