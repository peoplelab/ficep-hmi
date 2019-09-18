import lazy from '../common/AsyncComponent';

const components = {
  OuterClick: lazy(() => import(/* webpackChunkName: "OuterClick" */ './OuterClick')),
};

export default components;
