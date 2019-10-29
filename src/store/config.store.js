//--------------------------------------------------------------------------
// File: config.store.js
//
// Desc: Definizione reducer di gestione, a livello globale, della configurazione dell'applicativo
// Path: /src/store/config.store
//--------------------------------------------------------------------------


import Enum from '../utils/Enum';


// Lista delle tipologie di azioni applicabili allo store
export const types = Enum.from(
    'SET_CONFIG'           // FILE DI CONFIGURAZIONE
);


// Stato iniziale dello store (le chiavi sono copiate dalla response del servizio di login)
const initialState = {
  // MachineName: '',
};


// Gestore delle azioni, passate in store.dispatch, usate per poter modificare lo stato corrente dello store
const actionHandlers = {   

    [types.SET_CONFIG]: (state, { payload }) => ({
        ...state,
        ...payload,
    }),
};


// Inizializzazione del reducer della sessione per poter filtrare le azioni applicate allo store
export const reducer = (state = initialState, action) => {
  const handler = actionHandlers[action.type];

  return typeof handler === 'function' ? handler(state, action) : state;
};
