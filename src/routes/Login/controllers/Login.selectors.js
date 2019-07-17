import { createSelector } from 'reselect';


export const grantType = createSelector(
  state => state.Login.form.grantType,
  grantType => ({
    Password: grantType === 'Password',
    RefreshToken: grantType === 'RefreshToken',
  }),
);

export const disabled = createSelector(
  state => state.Login.form.grantType,
  grantType => grantType !== 'Password' && grantType !== 'RefreshToken',
);

export const data = createSelector(
  state => state.Login.logged.data,
  data => JSON.stringify(data),
);
