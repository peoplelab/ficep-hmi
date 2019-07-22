import AsyncComponent from '../commons/AsyncComponent';

/**
 * Inject the store into the routes and retur a map of their.
 *
 * Note: the routes are mapped in macro category
 */
const createRoutes = store => ({
  /**
   * Map of routes of main flow
   *
   * Note: These route do not require login by user
   */
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
  /**
   * Map of support routes of main flow
   *
   * Note: login by user not required
   */
  secondary: [],
  /**
   * Map of routes that required login by user.
   */
  logged: [
    {
      path: '/tools',
      key: 'tools',
      exact: true,
      component: AsyncComponent(store)(() => import(/* webpackChunkName: "Tools" */ './Tools/Tools.index')),
    },
  ],
  /**
   * Map of support routes of user logged flow
   *
   * Note: login by user required.
   */
  messages: [],
  /**
   * Landing page routes separated from other flows
   *
   * Note: login by user not required
   */
  external: [],
});


export default createRoutes;
