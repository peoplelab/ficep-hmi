import lazy from '../common/AsyncComponent';


const UserModal = lazy(() => import(/* webpackChunkName: "modal" */ './UserModal.view'));


export {
  UserModal,
};
