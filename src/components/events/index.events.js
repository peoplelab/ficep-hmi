import lazy from '../common/AsyncComponent';

const OuterClick =      lazy(() => import(/* webpackChunkName: "events" */ './OuterClick'));
const OuterModalClick = lazy(() => import(/* webpackChunkName: "events" */ './OuterModalClick'));

export {
  OuterClick,
  OuterModalClick,
};
