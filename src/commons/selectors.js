import { pathOr } from 'ramda';


export const stateOr = (state, path, value) => {
  const [, ...list] = path.split(/\./g);
  const data = pathOr(value, list, state);
  return data;
};
