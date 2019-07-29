//----------------------------------------------------------------------------------------
// File: Tools.index.js		[main]
//
// Desc: Init point della pagina "Gestione Tools"
// Path: /src/routes/Tools
//----------------------------------------------------------------------------------------

import Component from './components/Tools.index';											// Inizializzazione del container della pagina
import reducers from './controllers/Tools.reducers';										// Inizializzatore dei reducers associati allo store
import watchers from './controllers/Tools.watchers';											// Inizializzatore dei watchers delle actions


const KEY = 'Tools';																		// Async reducer id key


export { Component, KEY, reducers, watchers };
