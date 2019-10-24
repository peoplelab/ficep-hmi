//----------------------------------------------------------------------------------------
// File: controller.base.js
//
// Desc: Funzione base del controller per la gestione delle chimate alle api
//
// input (singolo parametro JSON):
//    ° request: oggetto JSON, contiene gli elementi da passare all'api (la documentazione indicherà i valori da passare e in quale formato) [ si usa per metodi POST e PUT ]
//    ° api: funzione generica di un model per eseguire la chimata all'api del server
//    ° success: funzione di callback in caso di esito positivo
//                dataraw: dati grezzi della response (testo generico)
//                contentType: stringa che specifica il tipo di testo di di dataraw (segue il content-type della response http)
//    ° failure: funzione di callback in caso di esito negativo
//                httpcode: codice numerico dello stato http della chimata
//                dataraw: dati grezzi della response di errore (testo generico)
//                contentType: stringa che specifica il tipo di testo di di dataraw (segue il content-type della response http)
//                error: oggetto di tipo Error tornato in caso sia stato impossibile eseguire la chimata
//    ° params: oggetto JSON contente parametri specifici da passare all'api (la documentazione indicherà i parametri da passare e in quale formato) [ si usa per metodi GET e DELETE per il query string dell'url ]
//    ° refresh: parametro booleano opzionale, indica se eseguire il refresh della sessione quando l'access token è scaduto
//    ° odata: parametro booleano opzionale, indica se la chiamata all'api sarà di tipo oData oppure no (...se è di tipo oData viene gestito in modo diverso).
//
// Path: /src/controllers/common/controller.base
//----------------------------------------------------------------------------------------

import { headersHanlder } from './header.handler';
import { errorHandler } from './error.handler';
import { failureHandler } from './failure.handler';
import { DataHandler as cDataHandler } from './dataraw.handler';


export const base = async ({ request, api, success, failure, params, refresh, odata }) => {
  // imposta gli header che verranno utilizzati per abilitare le chimate api
  const headers = headersHanlder();

  console.log('----- Start api call');

  // esecuzione dell'api model e recupero della response
  const response = api({ request, headers, params });
  const { httpcode, contentType, dataraw, error } = await response;

  try {
      if (httpcode !== 200) {
          throw new Error();
      }

    // success

    // elaborazione dei dati grezzi (con gestione del caso default o oData)
    let dataprocessed = (odata == null) ? cDataHandler.Default({ contentType, dataraw }) : cDataHandler.Odata({ contentType, dataraw });

    // gestione dei casi di errore
    ({ dataprocessed } = errorHandler({ request, contentType, dataprocessed }));

    // gestione di tutti i casi httpcode 200
    if (typeof success === 'function' && dataprocessed.responseType === 200) {
      success({ contentType, dataraw, dataprocessed });
    }

    console.log('----- Success api call');
    return { contentType, dataraw, dataprocessed };
  } catch(err) {
    // failure
    if (typeof failure === 'function') {
      failure({ httpcode, dataraw, error });
    }

    // gestione dei casi di errore (httpcode diverso da 200)
    failureHandler({ request, api, success, failure, params, refresh })({ httpcode, dataraw, error });

    console.log('----- Failure api call');
    return { httpcode, dataraw, error };
  }
};


export const flagHanlder = async (options, ...calls) => {
  const { success, failure } = options;

  console.log('----- Start multiple api calls');

  const promises = calls.map(call => base(call));

  try {
    const responses = await Promise.all(promises);

    if (typeof success === 'function') {
      success(responses);
    }

    console.log('----- Success all api calls');
    console.table(responses);
  } catch(err) {
    // failure
    if (typeof failure === 'function') {
      failure(err);
    }

    console.log('----- Failure one of api calls');
    console.log(err);
  }
};
