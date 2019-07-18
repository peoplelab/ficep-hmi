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
  state => state.session.logged.data,
  state => state.session.logged.status,
  (data, status) => {
    if (status === 200) {
      return JSON.stringify(data);
    } else if ('error' in (data || {})) {
      return 'ERROR!';
    }

    return '';
  },
);
