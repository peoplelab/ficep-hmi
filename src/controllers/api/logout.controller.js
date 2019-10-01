//----------------------------------------------------------------------------------------
// File: logout.controller.js
//
// Path: /src/controllers/api/logout.controller
//----------------------------------------------------------------------------------------


import { usersLogout } from '../../models/api/users.model';
import history from '../../models/history/history';
import { types } from '../../store/session.store';
import store from '../../store/redux.store';
import { base } from '../common/controller.base';


// chimata di logout per terminare la sessione utente
export const callLogout = async () => {
  base({
    api: usersLogout,
    success: () => {
      store.dispatch({ type: types.RESET_SESSION });
      window.intl = {};
      history.push('/login');
    },
  });
};
