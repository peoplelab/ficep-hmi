import lazy from '../common/AsyncComponent';

const OuterClick = lazy(() => import(/* webpackChunkName: "events" */ './OuterClick'));

export {
  OuterClick,
};
