import TestModel from '../../generators/AsyncRoute';
import Component from './component';
import reducers from './controllers/testModel.reducers';
import sagas from './controllers/testModel.controller.js';


const KEY = 'TestModel_pippo';


export default TestModel(Component, KEY, reducers, sagas);
