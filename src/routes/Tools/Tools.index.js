import AsyncRoute from '../../commons/AsyncRoute';
import Component from './components/Tools.index';
import reducers from './controllers/Tools.reducers';
import watcher from './controllers/Tools.watchers';


/**
 * Async reducer id key
 */
const KEY = 'Tools';


export default AsyncRoute(Component, KEY, reducers, watcher);
