//--------------------------------------------------------------------------
// File: session.store.js
//
// Desc: Definizione reducer di gestione, a livello globale, della sessione
// Path: /src/store/session.store
//--------------------------------------------------------------------------


import Enum from '../utils/Enum';


// Lista delle tipologie di azioni applicabili allo store
export const types = Enum.from(
  'SET_USER_IP',
  'SET_SESSION',
  'RESET_SESSION',
  'SET_ERROR',
  'RESET_ERROR'
);


// Stato iniziale dello store (le chiavi sono copiate dalla response del servizio di login)
const initialState = {
  mainError: {
    responseType: NaN,
    errorCode: '',
    errorsDescription: null,
  },
  session: {
    responseType: NaN,
    ip: '',
    username: '',
    accessToken: '',
    refreshToken: '',
    culture: '',
    groups: [],
    permissions: [],
    sessionId: '',
    expiredAt: '',
    sessionLogId: '',
    refreshExpiredAt: '',
    issuedAt: '',
  }
};


// Gestore delle azioni, passate in store.dispatch, usate per poter modificare lo stato corrente dello store
const actionHandlers = {
  [types.SET_USER_IP]:  (state, { payload }) => ({
    ...state,
    ip: payload.ip,
  }),
	[types.SET_SESSION]: (state, { payload }) => ({
    ...state,
    mainError: {
      responseType: NaN,
      errorCode: '',
      errorsDescription: null,
    },
    session: {
      responseType: payload.responseType,
      ...payload.result,
    },
  }),
  [types.RESET_SESSION]: (state, { payload }) => ({
      ...initialState,
      ip: state.ip,
  }),
  [types.SET_ERROR]: (state, { payload }) => ({
      ...state,
      mainError: {
        responseType: payload.responseType,
        errorCode: payload.errorCode,
        errorsDescription: payload.result,
      }
  }),
  [types.RESET_ERROR]: (state, { payload }) => ({
      ...state,
      mainError: {
        responseType: NaN,
        errorCode: '',
        errorsDescription: null,
      }
  }),
};


// Inizializzazione del reducer della sessione per poter filtrare le azioni applicate allo store
export const reducer = (state = initialState, action) => {
  const handler = actionHandlers[action.type];

  return typeof handler === 'function' ? handler(state, action) : state;
};
