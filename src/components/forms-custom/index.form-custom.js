import lazy from '../common/AsyncComponent';

const InputCard = lazy(() => import(/* webpackChunkName: "InputCard" */ './InputCard.view'));

export {
  InputCard,
};
