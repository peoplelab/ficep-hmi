import AsyncRoute from '../../generators/AsyncRoute';
import Component from './component';
import reducers from './controllers/reducers';
import sagas from './controllers/sagas';


const KEY = 'AsyncRoute';


export default AsyncRoute(Component, KEY, reducers, sagas);
