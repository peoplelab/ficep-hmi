//----------------------------------------------------------------------------------------
// File: INDEX.JS		[main index file]
//
// Desc: Init point dell'intera applicazione (index.js iniziale)
// Path: /src
//----------------------------------------------------------------------------------------

import React from 'react';																	// Inizializzazione dell'engine React
import ReactDOM from 'react-dom';															// Libreria principale di metodi e per la manipolazione del DOM
import { setConfig } from 'react-hot-loader';												// Plugin per il "live reload" dei componenti React mantenendo l'integrit� dello stato
//import App from './containers/App';
import App from './containers/App/App.index.js';											// Init point dell'applicazione
import createStore from './store/store.index';												// Inizializzazione dello Store


if (process.env.NODE_ENV !== 'production') {
  setConfig({ logLevel: 'debug' });
}

// eslint-disable-next-line no-underscore-dangle
const store = createStore();


ReactDOM.render(
  React.createElement(App, { store }, null),
  document.getElementById('root'),
);
