import React, { memo } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ConfirmModal from './ConfirmModal.view';
import ErrorsModal from './ErrorsModal.view';
import InfoModal from './InfoModal.view';
import SucessModal from './SucessModal.view';
import SessionExpired from './SessionExpired.view';
import { ModalHandler } from '../../controllers/common/modal.handler';


const Dialog = (props) => {
  const { type, data } = props;

  let Component;

  switch (type) {
    case 'confirm': {
      Component = ConfirmModal;
      break;
    }
    case 'error': {
      Component = ErrorsModal;
      break;
    }
    case 'info': {
      Component = InfoModal;
      break;
    }
    case 'success': {
      Component = SucessModal;
      break;
    }
    case 'session-expired': {
      Component = SessionExpired;
      break;
    }
    default: {
      Component = null;
    }
  }

  return ReactDOM.createPortal(
    Component && <Component {...data} onClose={ModalHandler.Close} />
  , document.getElementById('modal'));
};


Dialog.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};


export default memo(Dialog);
