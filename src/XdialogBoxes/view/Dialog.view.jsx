//----------------------------------------------------------------------------------------
// File: Dialog.view.js
// Desc: Gestione delle dialog boxes - Viewer
//
// Path: /src/components/dialogBoxes/view
//----------------------------------------------------------------------------------------

import React, { memo } from 'react';

import ReactDOM        from 'react-dom';
import PropTypes       from 'prop-types';
import SucessModal     from './SucessModal.view';														// Template dialog "OK"
import ErrorsModal     from './ErrorsModal.view';														// Template dialog "KO"
import ConfirmModal    from './ConfirmModal.view';														// Template dialog di conferma ("Sì/No")
import InfoModal       from './InfoModal.view';															// Template dialog "Info"
import SessionExpired  from './SessionExpired.view';													// Template dialog "Session expired"

import {ModalHandler}  from '../controller/dialog.controller';											// Handler (controller) delle dialog boxes


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
  , document.getElementById('dialog'));
};


Dialog.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};


export default memo(Dialog);
