import AsyncRoute from '../../commons/AsyncRoute';
import Component from './components/Cultures.index';
import reducers from './controllers/Cultures.reducers';
import watcher from './controllers/Cultures.watchers';


/**
 * Async reducer id key
 */
const KEY = 'Cultures';


export default AsyncRoute(Component, KEY, reducers, watcher);
