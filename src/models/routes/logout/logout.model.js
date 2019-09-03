//----------------------------------------------------------------------------------------
// File: logout.model.js
//
// Path: /src/model/logout/logout.model
//----------------------------------------------------------------------------------------


import { base } from '../../common/model.base';


// interfaccia dell'api di logout per terminare la sessione utente
export const apiLogout = async ({ headers }) => {
  const request = {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  return base('/api/v1/Users/Logout', request);
};
