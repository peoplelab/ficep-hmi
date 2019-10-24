import store from '../../store/redux.store';
import { types } from '../../store/modal.store';


const errorHanlder = ({ errorCode, errorsList }) => {
  store.dispatch({
    type: types.OPEN_ERROR_MODAL,
    payload: {
      target: 'error',
      data: {
        errorCode,
        errorsList,
      }
    }
  });
};

const successHanlder = () => {
  store.dispatch({
    type: types.OPEN_SUCCESS_MODAL,
    payload: {
      target: 'success',
    }
  });
};

const infoHanlder = ({ message }) => {
  store.dispatch({
    type: types.OPEN_INFO_MODAL,
    payload: {
      target: 'info',
      data: { message }
    }
  });
};

const confirmHanlder = ({ onConfirm }) => {
  store.dispatch({
    type: types.OPEN_CONFIRM_MODAL,
    payload: {
      target: 'confirm',
      data: { onConfirm }
    }
  });
};

const closeHandler = () => {
  store.dispatch({
    type: types.CLOSE_MODAL
  });
};


export const ModalHandler = {
  Error: errorHanlder,
  Success: successHanlder,
  Info: infoHanlder,
  Confirm: confirmHanlder,
  Close: closeHandler,
};
