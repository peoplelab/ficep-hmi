import { createSelector } from 'reselect';


export const disabled = createSelector(
  state => state.Login.form.username,
  state => state.Login.form.password,
  (username, password) => !username || !password,
);
