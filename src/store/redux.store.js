//---------------------------------------------------------------------------------------------------
// File: redux.store.js
//
// Desc: Entry point dello store globale dell'applicazione
// Path: /src/store/redux.store
//---------------------------------------------------------------------------------------------------


import { compose, createStore, applyMiddleware } from 'redux'; // Import dei componneti di redux
import { reducer } from './session.store';    // Import del reducer della sessione per la gestione dello store
import { logger } from '../middlewares/logger.middleware'; // Log di tutte le modifiche allo stato dello store e delle action passate allo store.dispatch


// Stato iniziale dello store
const initialState = {};


// Concatenazione delle middleware
const middlewares = applyMiddleware(logger);


// Gestione del plug-in di middleware per il debug dello store e delle azioni applicatevi
const composeEnhancers = (
  typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  && !IS_PRODUCTION
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose
);

// Inizializzazione delle middleware
const enhancer = composeEnhancers(middlewares);


// Inizializzazione dello store
const store = createStore(reducer, initialState, enhancer);


// Abilitazione dell'hot-reloading dello store
if (module.hot) {
  module.hot.accept('./session.store', () => {
    store.replaceReducer(reducer);
  });
}


export default store;
