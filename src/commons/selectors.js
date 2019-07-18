import { pathOr } from 'ramda';


/**
 * Get a value from the store state and give to it a default value if equal to undefined or null
 * @param {object} state
 * @param {string} path
 * @param {*} value
 */
export const stateOr = (state, path, value) => {
  const [, ...list] = path.split(/\./g);
  const data = pathOr(value, list, state);
  return data;
};
