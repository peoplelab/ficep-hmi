import { createSelector } from 'reselect';


export const stringifyData = createSelector(
  state => state.TestModel_pippo.data,
  data => JSON.stringify(data),
);
