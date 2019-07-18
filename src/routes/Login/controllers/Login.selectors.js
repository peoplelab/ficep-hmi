import { createSelector } from 'reselect';


export const disabled = createSelector(
  state => state.Login.form.username,
  state => state.Login.form.password,
  (username, password) => !username || !password,
);

export const data = createSelector(
  state => state.session.data,
  state => state.session.status,
  (data, status) => {
    if (status === 200) {
      return JSON.stringify(data);
    } else if ('error' in (data || {})) {
      return 'ERROR!';
    }

    return '';
  },
);
