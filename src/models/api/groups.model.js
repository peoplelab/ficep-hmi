//----------------------------------------------------------------------------------------
// File: users.model.js
//
// Path: /src/model/users/users.model
//----------------------------------------------------------------------------------------


import { base } from '../../common/model.base';


// interfaccia dell'api per ottenere la lista corrente degli utenti
export const groupList = async ({ headers }) => {
  const request = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  return base(`/api/v1/odata/users`, request);
};

export const groupPermissions = async ({ headers, params }) => {
  const request = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  return base(`/api/v1/odata/groups/${params.id}/permissions`, request);
};

export const groupExport = async ({ headers, params }) => {
  const request = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  return base(`/api/v1/odata/groups/export`, request);
};
