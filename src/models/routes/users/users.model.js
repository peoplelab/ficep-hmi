//----------------------------------------------------------------------------------------
// File: users.model.js
//
// Path: /src/model/users/users.model
//----------------------------------------------------------------------------------------


import { base } from '../../common/model.base';


// interfaccia dell'api per ottenere la lista corrente degli utenti
export const apiList = async ({ headers }) => {
  const request = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  return base('/api/v1/odata/users', request);
};
