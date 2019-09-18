import lazy from '../common/AsyncComponent';

const ErrorsModal = lazy(() => import(/* webpackChunkName: "ErrorsModal" */ './ErrorsModal/ErrorsModal.controller'));
const UserModal = lazy(() => import(/* webpackChunkName: "UserModal" */ './UserModal.view'));

export {
  ErrorsModal,
  UserModal,
};
