//----------------------------------------------------------------------------------------
// File: tools.model.js
//
// Path: /src/model/tools/tools.model
//----------------------------------------------------------------------------------------


import { base } from '../../common/model.base';


// interfaccia dell'api per ottenere la lista corrente dei tools
export const apiList = async ({ headers }) => {
  const request = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  return base('/api/v1/odata/tools', request);
};


// interfaccia dell'api per ottenere i dettagli del tool indicato
export const apiDetails = async ({ headers, params }) => {
  const request = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  return base(`/api/v1/tools/${params.id}`, request);
};
