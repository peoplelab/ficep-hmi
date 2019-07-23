// import {
//   fork
// } from 'redux-saga/effects';
// import { fetchData_gen } from '../../../commons/sagas.base';


// /**
//  * Tools list custom rest api request
//  * @param {*} action Action to call after response
//  * @param {*} data Body request data
//  */
// export function* doCallToolsList(action, header) {
//   const url = '/api/v1/odata/tools';

//   const headers = {
//     "Authorization": `Bearer ${header.AccessToken}`,
//     "Session": header.SessionId,
//     "Content-Type": "application/json",
//   };

//   const request = {
//     method: "get",
//     headers,
//   };

//   /**
//    * Run global rest api handler as new thread
//    */
//   yield fork(fetchData_gen, action, request, url);
// }


// /**
//  * Tools details custom rest api request
//  * @param {*} action Action to call after response
//  * @param {*} data Body request data
//  */
// export function* doCallToolsDetails(action, header, id) {
//   const url = `/api/v1/odata/tools/${id}`;

//   const headers = {
//     "Authorization": `Bearer ${header.AccessToken}`,
//     "Session": header.SessionId,
//     "Content-Type": "application/json",
//   };

//   const request = {
//     method: "get",
//     headers,
//   };

//   /**
//    * Run global rest api handler as new thread
//    */
//   yield fork(fetchData_gen, action, request, url);
// }
