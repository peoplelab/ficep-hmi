import Enum from './Enum';


/**
 * Generate actions type enum from a list of strings for common actions
 * @param  {...string} types Action types list
 */
export const createPayloadTypes = (...types) => Enum.from(...types);

const reduceApiTypes = (acc, type) => {
  const enumerator = Enum.from(
    `${type}_CALL`,
    `${type}_SUCCESS`,
    `${type}_ERROR`,
    `${type}_FAIL`,
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
    CALL: payload => ({ type: `${type}_CALL`, payload}),
    SUCCESS: (status, data) => ({ type: `${type}_SUCCESS`, response: { status, data } }),
    ERROR: (status, data) => ({ type: `${type}_ERROR`, response: { status, data } }),
    FAIL: error => ({ type: `${type}_FAIL`, error }),
  };
  return acc;
};
/**
 * Generate actions, specified for rest api, from a list of strings
 * @param  {...string} types Action types list
 */
export const createApiAction = (...types) => types.reduce(reduceApiAction, {});
