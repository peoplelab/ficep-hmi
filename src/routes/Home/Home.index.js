//import { hot } from 'react-hot-loader/root';
import AsyncRoute from '../../commons/AsyncRoute';
import Component from './components/Home.components.index';
import reducers from './controllers/logout.reducers';
import watcher from './controllers/logout.watcher';

// Container definito prima della view
//import Home from './HomeView';
//export default hot(Home);

const KEY = 'Home';

export default AsyncRoute(Component, KEY, reducers, watcher);
