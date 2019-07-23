//----------------------------------------------------------------------------------------
// File: Tools.index.js		[main]
//
// Desc: Init point della pagina "Gestione Tools"
// Path: /src/routes/Tools
//----------------------------------------------------------------------------------------

import AsyncRoute from '../../commons/AsyncRoute';											// COMMON HANDLER di inizializzazione delle richieste async interne, aggiunta dei reducer allo store e attivazione dei watcher delle sagas
import Component from './components/Tools.index';											// Inizializzazione del container della pagina
import reducers from './controllers/Tools.reducers';										// Inizializzatore dei reducers associati allo store
import watcher from './controllers/Tools.watchers';											// Inizializzatore dei watchers delle actions 


const KEY = 'Tools';																		// Async reducer id key


export default AsyncRoute(Component, KEY, reducers, watcher);

