import AsyncRoute from '../../commons/AsyncRoute';
import Component from './components/Login.index';
import reducers from './controllers/Login.reducers';
import watcher from './controllers/Login.watchers';


/**
 * Async reducer id key
 */
const KEY = 'Login';


export default AsyncRoute(Component, KEY, reducers, watcher);
