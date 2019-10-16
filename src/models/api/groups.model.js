//----------------------------------------------------------------------------------------
// File: users.model.js
// Path: /src/model/users/users.model
//
// Interfacciamento con servizi Gruppi Utente (Groups)
//----------------------------------------------------------------------------------------

import { base } from '../common/model.base';



// Api urls ...
const URL_GROUPS_LIST = "/api/v1/odata/groups";




// Interface
export const Groups = {
    List: (headers) => { return groupsList(headers); }                           // lista dei gruppi
};



// Private Methods 

const groupsList = async ({ headers }) => {
    // interfaccia dell'api per ottenere la lista corrente dei gruppi
    const request = {
        method: "get",
        headers: {
            "Content-Type": "application/json",
            ...headers,
        },
    };

    return base({ url: URL_GROUPS_LIST, request });
};




// --------------------------------------

//// interfaccia dell'api per ottenere la lista corrente degli utenti
//export const groupList = async ({ headers }) => {
//  const request = {
//    method: "get",
//    headers: {
//      "Content-Type": "application/json",
//      ...headers,
//    },
//  };

//  return base({ url: `/api/v1/odata/groups`, request });
//};

export const groupPermissions = async ({ headers, params }) => {
  const request = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  return base({ url: `/api/v1/odata/groups/:id/permissions`, request, params });
};

export const groupExport = async ({ headers, params }) => {
  const request = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  return base({ url: `/api/v1/odata/groups/export`, request });
};
