//----------------------------------------------------------------------------------------
// File: error.handler.js
//
// Desc: Funzione di gestione globale degli errori delle chiamate alle API
//
//
// input:
//    ° request: oggetto contenente la request originale della chiamata alla API
//    ° contentType: stringa contenente il mime-type della response
//    ° dataprocessed: response elaborata dell'api
//----------------------------------------------------------------------------------------


import { ModalHandler } from './modal.handler';


export const errorHandler = ({ request, contentType, dataprocessed}) => {
  if (contentType.includes("application/json")) {
    const { responseType } = dataprocessed;

    if (!responseType || responseType === 200) {
      return { request, contentType, dataprocessed };
    }

    // normalizza l'error generico nel caso non sia definito (400) o sia lato server (500)
    if (/^4\d{2}$/.test(responseType.toString())) {
      dataprocessed.errorCode = dataprocessed.errorCode || "GENERIC_TECHNICAL_ERROR";
    } else if (/^5\d{2}$/.test(responseType.toString())) {
      dataprocessed.errorCode = "GENERIC_SERVER_ERROR";
    }

    // apre la modale di errori, passando i codici dei messaggi da visualizzare
    ModalHandler.Error({
      errorCode: dataprocessed.errorCode,
      errorsList: dataprocessed.result,
    });

    return { request, contentType, dataprocessed };
  }
};
