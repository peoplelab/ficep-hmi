//----------------------------------------------------------------------------------------
// File: modal.handler.js
//
// Desc: Funzione di gestione globale delle modali
//----------------------------------------------------------------------------------------


import store from '../../store/redux.store';
import { types } from '../../store/modal.store';


// Private Methods

// Gestore dell'apertura della modale di errore e dei relativi dati
//
// input:
//    ° errorCode: codice dell'errore generico
//    ° errorsList: lista dei codici di errore specifici
const errorHanlder = ({ errorCode, errorsList }) => {
  store.dispatch({
    type: types.OPEN_MODAL,
    payload: {
      target: 'error',
      data: {
        errorCode,
        errorsList,
      }
    }
  });
};

// Gestore dell'apertura della modale di successo
const successHanlder = (params) => {
    const { onSuccess } = params || {};
    store.dispatch({
    type: types.OPEN_MODAL,
    payload: {
        target: 'success',
        data: { onSuccess }
    }
  });
};

// Gestore dell'apertura della modale informativa
//
// input:
//    ° message: stringa delle informazioni da visualizzare
const infoHanlder = ({ message }) => {
  store.dispatch({
    type: types.OPEN_MODAL,
    payload: {
      target: 'info',
      data: { message }
    }
  });
};

// Gestore dell'apertura della modale di conferma
//
// input:
//    ° onConfirm: funzione callback da avviare all'OK dell'utente
const confirmHanlder = ({ onConfirm }) => {
  store.dispatch({
    type: types.OPEN_MODAL,
    payload: {
      target: 'confirm',
      data: { onConfirm }
    }
  });
};

// Gestore dell'apertura della modale di avviso della sessione scaduta
const sessionHanlder = () => {
  store.dispatch({
    type: types.OPEN_MODAL,
    payload: {
      target: 'session-expired',
    }
  });
};

// Gestore della chusura delle modali
const closeHandler = () => {
  store.dispatch({
    type: types.CLOSE_MODAL
  });
};


// Interface

export const ModalHandler = {
  Error: errorHanlder,
  Success: successHanlder,
  Info: infoHanlder,
  Confirm: confirmHanlder,
  Session: sessionHanlder,
  Close: closeHandler,
};
