import AsyncRoute from '../../commons/AsyncRoute';
import Component from './components/Login.index';
import watcher from './controllers/Login.watchers';


export default AsyncRoute(Component, undefined, undefined, watcher);
