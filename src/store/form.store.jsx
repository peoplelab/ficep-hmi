//---------------------------------------------------------------------------------------------------
// File: form.store.js
//
// Desc: Definizione del gestore dello stato dello store di specifica form
// Path: /src/store/form.store
//---------------------------------------------------------------------------------------------------


import React from 'react';
import PropTypes from 'prop-types';
import { enumTypes, createStore } from './context.store';


// Lista delle tipologie di azioni applicabili allo store
export const types = enumTypes('ON_CHANGE');


// Gestore delle azioni passate nella funzione dispatch per poter modificare lo stato corrente dello store
const handler = (state, payload) => {
  const [name] = Object.keys(payload);
  const test = payload[name] !== state[name];

  return test ? { [types.ON_CHANGE]: { ...state, ...payload } } : state;
};


// Inizializzazione dei gestori dello store
const { StoreContext, StoreProvider } = createStore();

// Gestore dello store per classi di componenti React
export const FormContext = StoreContext;

// Provider dello store di una specifica form
export const FormProvider = (props) => (
  <StoreProvider initial={props.initial} handler={handler}>
    {props.children}
  </StoreProvider>
);
FormProvider.propTypes = {
  children: PropTypes.node.isRequired,
  initial: PropTypes.object,
};
FormProvider.defaultProps = {
  initial: {}
};
