import AsyncComponent from '../generators/AsyncComponent';
import Home from './Home';
//import TestModelView from './TestModel';


const createRoutes = store => ({
  primary: [
    {
      path: '/',
      key: 'home',
      exact: true,
      component: Home,
    },
    {
      path: '/test-model',
      key: 'test-model',
      exact: true,
      component: AsyncComponent(store)(() => import(/* webpackChunkName: "AsyncTestModel" */ './TestModel')),
    },
    {
      path: '/async',
      key: 'async-key',
      exact: true,
      component: AsyncComponent(store)(() => import(/* webpackChunkName: "AsyncChunk" */ './AsyncRoute')),
    },
  ],
  // secondary
  // logged
  // external
});


export default createRoutes;
