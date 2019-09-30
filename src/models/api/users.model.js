//----------------------------------------------------------------------------------------
// File: users.model.js
//
// Path: /src/model/users/users.model
//----------------------------------------------------------------------------------------


import { base } from '../common/model.base';


// interfaccia dell'api per ottenere la lista corrente degli utenti
export const usersList = async ({ headers }) => {
  const request = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  return base({ url: `/api/v1/odata/users`, request });
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

  return base({ url: `/api/v1/users/:id`, request, params });
};

export const usersDelete = async ({ headers, params }) => {
  const request = {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  return base({ url: `/api/v1/users/:id`, request, params });
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

  return base({ url: `/api/v1/users/user`, request });
};

export const usersUpdate = async ({ headers, request: data }) => {
  const request = {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(data),
  };

  return base({ url: `/api/v1/users`, request });
  // return base({ url: `/api/v1/users/user`, request });
};

export const usersPassword = async ({ headers, request: data }) => {
  const request = {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(data),
  };

  return base({ url: `/api/v1/users/changepassword`, request });
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

//   return base(`/api/v1/users/upload`, request);
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

  return base({ url: `/api/v1/users/user/:id/:groupId`, request, params });
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

  return base({ url: `/api/v1/users/user/:id/:groupId`, request, params });
};

export const usersExport = async ({ headers }) => {
  const request = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  return base({ url: `/api/v1/odata/users/export`, request });
};

// interfaccia dell'api di logout per terminare la sessione utente
export const usersLogout = async ({ headers }) => {
  const request = {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  return base({ url: '/api/v1/users/logout', request });
};
