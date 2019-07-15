import TestModel from '../../generators/AsyncRoute';
import Component from './component';
import reducers from './controllers/reducers';
import sagas from './controllers/sagas';


const KEY = 'TestModel';


export default TestModel(Component, KEY, reducers, sagas);
