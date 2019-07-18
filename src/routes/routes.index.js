import AsyncComponent from '../commons/AsyncComponent';
//import Home from './Home';
import Home from './Home/Home.index.js';


const createRoutes = store => ({
  primary: [
    {
      path: '/',
      key: 'home',
      exact: true,
      //component: Home,
      component: AsyncComponent(store)(() => import(/* webpackChunkName: "Home" */ './Home/Home.index')),
    },
    // {
    //   path: '/test-model',
    //   key: 'test-model',
    //   exact: true,
    //   component: AsyncComponent(store)(() => import(/* webpackChunkName: "AsyncTestModel" */ './TestModel/TestModel.index.js')),
    // },
    // {
    //   path: '/async',
    //   key: 'async-key',
    //   exact: true,
    //   component: AsyncComponent(store)(() => import(/* webpackChunkName: "AsyncChunk" */ './AsyncRoute')),
    // },
    {
      path: '/login',
      key: 'login',
      exact: true,
      component: AsyncComponent(store)(() => import(/* webpackChunkName: "Login" */ './Login/Login.index')),
    },
  ],
  // secondary
  // logged
  // external
});


export default createRoutes;
