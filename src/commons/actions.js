import Enum from './Enum';


export const createPayloadTypes = (...types) => Enum.from(...types);

const reduceApiTypes = (acc, type) => {
  const enumerator = Enum.from(
    `${type}_CALL`,
    `${type}_OK`,
    `${type}_KO`,
  );

  return { ...acc, ...enumerator };
};
export const createApiTypes = (...types) => types.reduce(reduceApiTypes, {});


const reducePayloadAction = (acc, type) => {
  acc[type] = (payload => ({ type, payload }));
  return acc;
};
export const createPayloadAction = (...types) => types.reduce(reducePayloadAction, {});

const reduceApiAction = (acc, type) => {
  acc[type] = {
    CALL: () => ({ type: `${type}_CALL` }),
    OK: (status, data) => ({ type: `${type}_OK`, response: { status, data } }),
    KO: error => ({ type: `${type}_KO`, error }),
  };
  return acc;
};
export const createApiAction = (...types) => types.reduce(reduceApiAction, {});
