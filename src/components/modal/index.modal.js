import lazy from '../common/AsyncComponent';

const ErrorsModal = lazy(() => import(/* webpackChunkName: "modal" */ './ErrorsModal/ErrorsModal.controller'));
const UserModal = lazy(() => import(/* webpackChunkName: "modal" */ './UserModal.view'));

export {
  ErrorsModal,
  UserModal,
};
