import AsyncRoute from '../../commons/AsyncRoute';
import Component from './component/Login.index';
import reducers from './controllers/Login.reducers';
import watcher from './controllers/Login.watcher';


const KEY = 'Login';


export default AsyncRoute(Component, KEY, reducers, watcher);
