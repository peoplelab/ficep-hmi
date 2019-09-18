import lazy from '../common/AsyncComponent';

const components = {
  ErrorsModal: lazy(() => import(/* webpackChunkName: "ErrorsModal" */ './ErrorsModal/ErrorsModal.controller')),
  UserModal: lazy(() => import(/* webpackChunkName: "UserModal" */ './UserModal.view')),
};

export default components;
