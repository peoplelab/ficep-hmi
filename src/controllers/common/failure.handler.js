// //----------------------------------------------------------------------------------------
// // File: failure.handler.js
// //
// // Desc: Funzione di gestione globale dei casi di errore delle chiamate AP
// // input:
// //    ° input: oggetto JSON contenente i dati della request dell'api
// //    ° output: oggetto JSON contenente i dati ddella response dell'api
// //
// // Path: /src/controllers/common/failure.handler
// //----------------------------------------------------------------------------------------


import { callRefresh } from '../session.controller';


export const failureHandler = ({ request, api, success, failure, params, refresh }) => ({ httpcode, dataraw, error }) => {
  if (httpcode === 401) {
    callRefresh({ request, api, success, failure, params, refresh });
  }
};
