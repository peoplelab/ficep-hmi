import lazy from '../common/AsyncComponent';

const components = {
  InputCard: lazy(() => import(/* webpackChunkName: "InputCard" */ './InputCard.view')),
};

export default components;
