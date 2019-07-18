import { createSelector } from 'reselect';


export const disabled = createSelector(
  state => state.Login.form.username,
  state => state.Login.form.password,
  (username, password) => !username || !password,
);


export const errorOnLogin = createSelector(
  state => state.session.status,
  status => status !== 200 && status !== null,
);
