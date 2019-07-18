import Enum from './Enum';


/**
 * Generate actions type enum from a list of strings for common actions
 * @param  {...string} types Action types list
 */
export const createPayloadTypes = (...types) => Enum.from(...types);

const reduceApiTypes = (acc, type) => {
  const enumerator = Enum.from(
    `${type}_CALL`,
    `${type}_OK`,
    `${type}_KO`,
  );

  return { ...acc, ...enumerator };
};
/**
 * Generate actions type enum from a list of strings for actions specified for rest api
 * @param  {...string} types Action types list
 */
export const createApiTypes = (...types) => types.reduce(reduceApiTypes, {});


const reducePayloadAction = (acc, type) => {
  acc[type] = (payload => ({ type, payload }));
  return acc;
};
/**
 * Generate common actions from a list of strings
 * @param  {...string} types Action types list
 */
export const createPayloadAction = (...types) => types.reduce(reducePayloadAction, {});

const reduceApiAction = (acc, type) => {
  acc[type] = {
    CALL: request => ({ type: `${type}_CALL`, request}),
    OK: (status, data) => ({ type: `${type}_OK`, response: { status, data } }),
    KO: error => ({ type: `${type}_KO`, error }),
  };
  return acc;
};
/**
 * Generate actions, specified for rest api, from a list of strings
 * @param  {...string} types Action types list
 */
export const createApiAction = (...types) => types.reduce(reduceApiAction, {});
