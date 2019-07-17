import AsyncRoute from '../../generators/AsyncRoute';
import Component from './component/Login';
import reducers from './controllers/Login.reducers';
import sagas from './controllers/Login.controller';


const KEY = 'Login';


export default AsyncRoute(Component, KEY, reducers, sagas);
