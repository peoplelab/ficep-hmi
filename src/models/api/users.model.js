//----------------------------------------------------------------------------------------
// File: users.model.js
// Path: /src/model/users/users.model
// 
// Interfacciamento con servizi Utente (Users)
//----------------------------------------------------------------------------------------

import { base } from '../common/model.base';



// Api urls ...
const URL_USERS_LIST  = "/api/v1/odata/users";
const URL_DELETE_USER = "/api/v1/users/:id";
const URL_DETAIL_USER = "/api/v1/users/:id";
const URL_CREATE_USER = "/api/v1/users/user";
const URL_UPDATE_USER = "/api/v1/users";


// Interface
export const Users = {
    List  : (headers)         => { return usersList(headers); },                // lista degli utenti
    Detail: (headers, params) => { return usersDetails(headers, params); },     // dettaglio utente
    Delete: (headers, params) => { return usersDelete(headers, params); },      // cancellazione utente
    Create: (headers, params) => { return usersCreate(headers, params); },      // Inserimento nuovo utente
    Update: (headers, params) => { return usersUpdate(headers, params); }       // Modifica utente esistente
};





// Private Methods 

const usersList = async ({ headers }) => {
    // interfaccia dell'api per ottenere la lista corrente degli utenti
  const request = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

    return base({ url: URL_USERS_LIST, request });
};

const usersDelete = async ({ headers, params }) => {
    // cancellazione utente
    const request = {
        method: "delete",
        headers: {
            "Content-Type": "application/json",
            ...headers,
        },
    };

    return base({ url: URL_DELETE_USER, request, params });
};

const usersDetails = async ({ headers, params }) => {
    // ottiene i dettagli dell'utente
    const request = {
        method: "get",
        headers: {
            "Content-Type": "application/json",
            ...headers,
        },
    };

    return base({ url: URL_DETAIL_USER, request, params });
};

const usersCreate = async ({ headers, request: data }) => {
    // creazione utente
    const request = {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            ...headers,
        },
        body: JSON.stringify({
            "firstName": data.firstName,
            "lastName": data.lastName,
            "password": data.password,
            "groups": [
                data.groups[0].id
            ]
        }),
    };

    return base({ url: URL_CREATE_USER, request });
};

const usersUpdate = async ({ headers, request: data }) => {
    // modifica utente
    const request = {
        method: "put",
        headers: {
            "Content-Type": "application/json",
            ...headers,
        },
        body: JSON.stringify({
            "id": data.id,
            "firstName": data.firstName,
            "lastName": data.lastName,
            "isLocked": data.isLocked
        }),
    };

    return base({ url: URL_UPDATE_USER, request });
};







//export const usersAdd = async ({ headers, request: data }) => {
//  const request = {
//    method: "post",
//    headers: {
//      "Content-Type": "application/json",
//      ...headers,
//    },
//    body: JSON.stringify(data),
//  };

//  return base({ url: `/api/v1/users/user`, request });
//};

//export const usersEdit = async ({ headers, request: data }) => {
//  const request = {
//    method: "put",
//    headers: {
//      "Content-Type": "application/json",
//      ...headers,
//    },
//    body: JSON.stringify(data),
//  };

//  return base({ url: `/api/v1/users`, request });
//  // return base({ url: `/api/v1/users/user`, request });
//};

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
