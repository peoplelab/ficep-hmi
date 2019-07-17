import Enum from './Enum';


export const createTypes = (...types) => Enum.from(...types);


const modelPayloadAction = (acc, type) => {
  acc[type] = payload => ({ type, payload });
  return acc;
};
export const createPayloadAction = (...types) => types.reduce(modelPayloadAction, {});

const modelApiAction = (acc, type) => {
  acc[type] = {
    CALL: () => ({ type }),
    OK: response => ({ type, response }),
    KO: error => ({ type, error }),
  };
  return acc;
};
export const createApiAction = (...types) => types.reduce(modelApiAction, {});
