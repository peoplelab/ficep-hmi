import lazy from '../common/AsyncComponent';

// import ConfirmModal from  './Dialog/ConfirmModal.view';
// import ErrorsModal from  './Dialog/ErrorsModal.view';
// import InfoModal from  './Dialog/InfoModal.view';
// import SucessModal from  './Dialog/SucessModal.view';

const ConfirmModal = lazy(() => import(/* webpackChunkName: "modal" */ './Dialog/ConfirmModal.view'));
const ErrorsModal = lazy(() => import(/* webpackChunkName: "modal" */ './Dialog/ErrorsModal.view'));
const InfoModal = lazy(() => import(/* webpackChunkName: "modal" */ './Dialog/InfoModal.view'));
const SucessModal = lazy(() => import(/* webpackChunkName: "modal" */ './Dialog/SucessModal.view'));

const UserModal = lazy(() => import(/* webpackChunkName: "modal" */ './UserModal.view'));

export {
  ConfirmModal,
  ErrorsModal,
  InfoModal,
  SucessModal,
  UserModal,
};
