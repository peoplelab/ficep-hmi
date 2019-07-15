import AsyncComponent from '../generators/AsyncComponent';
import Home from './Home';


const createRoutes = store => ({
  primary: [
    {
      path: '/',
      key: 'home',
      exact: true,
      component: Home,
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
