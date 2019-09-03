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


// import { callRefresh } from '../session.controller';


// export const failureHandler = ({ input, output }) => {
//   const jsondata = JSON.parse(output.dataraw);

//   // Se richiesto esegue in refresh della sessione
//   // Vengono passati i dati necessari per eseguire nuovamente la chiamata che ha tornato errore
//   if (jsondata === 'sessionExpired' && (input.refresh === undefined || input.refresh)) {
//     callRefresh(input);
//   }
// };
