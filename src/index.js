//----------------------------------------------------------------------------------------
// File: INDEX.JS		[main index file]
//
// Desc: Init point dell'intera applicazione (index.js iniziale)
// Path: /src
//----------------------------------------------------------------------------------------

import React from 'react';																	// Inizializzazione dell'engine React
import ReactDOM from 'react-dom';															// Libreria principale di metodi e per la manipolazione del DOM
import { setConfig } from 'react-hot-loader';												// Plugin per il "live reload" dei componenti React mantenendo l'integrit� dello stato
import App from './containers/App';											// Init point dell'applicazione


window.intl = {};


if (!IS_PRODUCTION) {
  setConfig({ logLevel: 'debug' });
}


ReactDOM.render(
  React.createElement(App, {}, null),
  document.getElementById('root'),
);
