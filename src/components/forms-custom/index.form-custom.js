import lazy from '../common/AsyncComponent';

const InputCard = lazy(() => import(/* webpackChunkName: "forms" */ './InputCard.view'));

export {
  InputCard,
};
