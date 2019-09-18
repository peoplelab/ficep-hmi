import lazy from '../common/AsyncComponent';

const OuterClick = lazy(() => import(/* webpackChunkName: "OuterClick" */ './OuterClick'));

export {
  OuterClick,
};
