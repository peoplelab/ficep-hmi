//----------------------------------------------------------------------------------------
// File: users.model.js
// Path: /src/model/users/users.model
//
// Interfacciamento con servizi Utente (Users)
//----------------------------------------------------------------------------------------

import { base } from '../common/model.base';



// Api urls ...
const URL_USERS_LIST  = "/api/v1/odata/users?$filter=IsSystemUser eq false";
const URL_DELETE_USER = "/api/v1/users/:id";
const URL_DETAIL_USER = "/api/v1/users/:id";
const URL_CREATE_USER = "/api/v1/users";
const URL_UPDATE_USER = "/api/v1/users";
const URL_LOGOUT_USER = "/api/v1/users/logout";
const URL_PASSWORDCHANGE = "/api/v1/users/changepassword";
const URL_PASSWORDRESET = "/api/v1/users/{userId}/resetpassword";



// Interface
export const Users = {
    List  : (headers)         => { return usersList(headers); },                                // lista degli utenti
    Detail: (headers, params) => { return usersDetails(headers, params); },                     // dettaglio utente
    Delete: (headers, params) => { return usersDelete(headers, params); },                      // cancellazione utente
    Create: (headers, params) => { return usersCreate(headers, params); },                      // Inserimento nuovo utente
    Update: (headers, params) => { return usersUpdate(headers, params); },                      // Modifica utente esistente
    ChangePassword: (headers, params) => { return usersChangePassword(headers, params); },      // Modifica password utente 
    ResetPassword: (headers, params) => { return usersResetPassword(headers, params); },        // Reset password utente
    Logout: (headers) => { return usersLogout(headers); },                                      // logout
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

const usersCreate = async ({ headers, params }) => {
    // creazione utente
    const request = {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            ...headers,
        },
        body: JSON.stringify({
            "FirstName": params.FirstName,
            "LastName": params.LastName,
            //"Password": params.Password,
            "Groups": [
                params.Groups[0].id
            ]
        }),
    };

    return base({ url: URL_CREATE_USER, request });
};

const usersUpdate = async ({ headers, params }) => {
    // modifica utente
    const request = {
        method: "put",
        headers: {
            "Content-Type": "application/json",
            ...headers,
        },
        body: JSON.stringify({
            "Id": params.Id,
            "FirstName": params.FirstName,
            "LastName": params.LastName,
            "UserStatus": params.UserStatus
        }),
    };

    return base({ url: URL_UPDATE_USER, request });
};

const usersChangePassword = async ({ headers, request: data }) => {
    const request = {
        method: "put",
        headers: {
            "Content-Type": "application/json",
            ...headers,
        },
        body: JSON.stringify(data),
    };

    return base({ url: URL_PASSWORDCHANGE, request });
};

const usersResetPassword = async ({ headers, request: data }) => {
    const request = {
        method: "put",
        headers: {
            "Content-Type": "application/json",
            ...headers,
        },
        body: JSON.stringify(data),
    };

    return base({ url: URL_PASSWORDRESET, request });
};

export const usersLogout = async ({ headers }) => {
    // interfaccia api logout utente
    const request = {
        method: "put",
        headers: {
            "Content-Type": "application/json",
            ...headers,
        },
    };

    return base({ url: URL_LOGOUT_USER, request });
};

