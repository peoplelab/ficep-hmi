//---------------------------------------------------------------------------------------------------
// File: context.store.js
//
// Desc: Inizializzazione delle funzioni generiche per la creazione e gestione di un "context store"
// Path: /src/store/context.store
//---------------------------------------------------------------------------------------------------


import React, { createContext, useReducer, memo } from 'react';
import PropTypes from 'prop-types';
import Enum from '../utils/Enum';


// Inizializzazione del reducer della sessione per poter filtrare le azioni applicate allo store
const reducer = (
  (initial, handler) =>
    (state = initial, action) =>
      handler(state, action.payload)[action.type] || state
);


// Inizializzazione della funzione per la generazione delle tipologie di azioni applicabili allo store
export const enumTypes = Enum.from;


// Inizializzazione dello store
export const createStore = () => {
  // Inizializzazione dello context store
  // applicabile alle classi React direttamente tramite "static contextType" e "this.context"
  // applicabile alle funzioni react passandolo come parametro di useStore(StoreContext)
  const StoreContext = createContext();


  // Inizializzazione del provider dello store
  let StoreProvider = (props) => {
    const { children, handler, initial } = props;

    const storeReducer = reducer(initial, handler);

    return (
      <StoreContext.Provider value={useReducer(storeReducer, initial)}>
        {children}
      </StoreContext.Provider>
    );
  };
  StoreProvider.propTypes = {
    children: PropTypes.node.isRequired,
    handler: PropTypes.func.isRequired,
    initial: PropTypes.object.isRequired,
  };
  StoreProvider.defaultProps = {
  };

  // previene rendering non richiesti
  StoreProvider = memo(StoreProvider);


  return ({
    StoreContext,
    StoreProvider,
  });
};
