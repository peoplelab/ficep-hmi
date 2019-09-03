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
//
// Path: /src/controllers/common/controller.base
//----------------------------------------------------------------------------------------

// import { failureHandler } from './failure.handler';
import store from '../../store/redux.store';


// definizione degli header
const headersFn = state => ({
  Authorization: state.accessToken ? `Bearer ${state.accessToken}` : undefined,
  Session: state.sessionId,
});


export const base = async ({ request, api, success, failure, params, refresh }) => {
  // imposta gli header che verranno utilizzati per abilitare le chimate api
  const headers = headersFn(store.getState());

  console.log('----- Start api call');

  // esecuzione dell'api model e recupero della response
  const response = api({ request, headers, params });
  const { httpcode, contentType, dataraw, error } = await response;

  let jsondata = {};
  if(contentType && contentType.includes("application/json")) {
    jsondata = JSON.parse(dataraw);
  }

  // success
  if (httpcode === 200) {
    if (typeof success === 'function') {
      success({ contentType, dataraw, jsondata });
    }
    console.log('----- Success call');
  }
  // failure
  else {
    if (typeof failure === 'function') {
      failure({ httpcode, dataraw, error });
    }

    // failureHandler({
    //   input: { request, api, success, failure, params, refresh },
    //   output: { httpcode, dataraw, error },
    // });

    console.log('----- Failure call');
  }

  console.log('----- End api call');
};
