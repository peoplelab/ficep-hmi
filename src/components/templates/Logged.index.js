import lazy from '../common/AsyncComponent';

const components = {
  Logged: lazy(() => import(/* webpackChunkName: "Logged" */ './Logged.container')),
};

export default components;
