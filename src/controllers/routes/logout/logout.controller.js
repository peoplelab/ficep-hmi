//----------------------------------------------------------------------------------------
// File: logout.controller.js
//
// Path: /src/controllers/logout/logout.controller
//----------------------------------------------------------------------------------------


import { apiLogout } from '../../../models/routes/logout/logout.model';
import history from '../../../models/common/history';
import { types } from '../../../store/session.store';
import store from '../../../store/redux.store';
import { base } from '../../common/controller.base';


// chimata di logout per terminare la sessione utente
export const callLogout = async ({ headers }) => {
  base({
    api: apiLogout,
    success: () => {
      store.dispatch({ type: types.RESET_SESSION });
      history.push('/login');
    },
  });
};
