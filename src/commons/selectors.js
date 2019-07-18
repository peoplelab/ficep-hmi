import { pathOr } from 'ramda';


/**
 * Get a value from the store state and give to it a default value if equal to undefined or null
 * @param {object} state Redux global state object
 * @param {string} path State property path
 * @param {*} value Property default value
 */
export const stateOr = (state, path, value) => {
  const [, ...list] = path.split(/\./g);
  const data = pathOr(value, list, state);
  return data;
};
