//----------------------------------------------------------------------------------------
// File: session.controller.js
//
// Path: /src/controllers/api/session.controller
//----------------------------------------------------------------------------------------


import { base } from '../common/controller.base';
import { tokenRefresh, tokenSessionCheck } from '../../models/api/token.model';
import store from '../../store/redux.store';
import { types } from '../../store/session.store';
import { pathOr } from '../../utils/path';


// chimata per il refresh automatico della sessione utentete
// al successo della chiamata, esegue un nuovo tentativo di connessione all'api rifiutata in precedenza
export const callRefresh = async (prevRequestArgs) => {
  const refreshToken = pathOr('', ['session', 'refreshToken'], store.getState());

  const request = {
    RefreshToken: refreshToken,
  };

  base({
    request,
    api: tokenRefresh,
    success: ({ dataprocessed }) => {
      store.dispatch({
        type: types.SET_SESSION,
        payload: dataprocessed,
      });

      base(prevRequestArgs);
    },
    failure: () => {
      store.dispatch({
        type: types.RESET_SESSION,
      });
    }
  });
};


// chimata per il refresh automatico della sessione utentete
// al successo della chiamata, esegue un nuovo tentativo di connessione all'api rifiutata in precedenza
export const callTokenSessionCheck = async ({ dispatch }) => {
  const sessionId = pathOr('', ['session', 'sessionId'], store.getState());

  const params = { sessionId };

  base({
    params,
    api: tokenSessionCheck,
    success: ({ dataprocessed }) => {
      dispatch({ sessionInfo: dataprocessed });
    },
    failure: ({ httpcode }) => {
      dispatch({ sessionInfo: null });
    }
  });
};
