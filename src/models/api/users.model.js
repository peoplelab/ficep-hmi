//----------------------------------------------------------------------------------------
// File: users.model.js
//
// Path: /src/model/users/users.model
//----------------------------------------------------------------------------------------


import { base } from '../../common/model.base';


// interfaccia dell'api per ottenere la lista corrente degli utenti
export const usersList = async ({ headers }) => {
  const request = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  return base(`/api/v1/odata/users`, request);
};

// interfaccia dell'api per ottenere i dettagli dell'utente indicato
export const usersDetails = async ({ headers, params }) => {
  const request = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  return base(`/api/v1/users/${params.id}`, request);
};

export const usersDelete = async ({ headers, params }) => {
  const request = {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  return base(`/api/v1/users/${params.id}`, request);
};

export const usersAdd = async ({ headers, request: data }) => {
  const request = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(data),
  };

  return base(`/api/v1/users/user`, request);
};

// export const usersSeed = async ({ headers, request: data }) => {
//   const request = {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json",
//       ...headers,
//     },
//     body: JSON.stringify(data),
//   };

//   return base(`/api/v1/users/user`, request);
// };

export const usersAddToGroup = async ({ headers, params, request: data }) => {
  const request = {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(data),
  };

  return base(`/api/v1/users/user/${params.userId}/${params.groupId}`, request);
};

export const usersDeleteFromGroup = async ({ headers, params, request: data }) => {
  const request = {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(data),
  };

  return base(`/api/v1/users/user/${params.userId}/${params.groupId}`, request);
};

export const usersExport = async ({ headers }) => {
  const request = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  return base(`/api/v1/odata/users/export`, request);
};

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
