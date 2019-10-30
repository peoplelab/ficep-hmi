//----------------------------------------------------------------------------------------
// File: login.model.js
//
// Path: /src/model/login/login.model
//----------------------------------------------------------------------------------------


import { base } from '../common/model.base';


// Api urls ...
const URL_LOGIN_LIST = "/api/v1/odata/Token/latest/{machineName}?$top=10";
const URL_LOGIN = "/api/v1/Token";



// Interface
export const Token = {
    LastLogins: (data) => { return tokenLastLogins(data); },                // lista delle ultime login
    Login: (data) => { return tokenLogin(data); }                   // login applicazione
};





// Private methods 

// interfaccia api per ottenere la lista corrente degli ultimi accessi all'applicazione
const tokenLastLogins = async ({ request: data }) => {

    const url = URL_LOGIN_LIST.replace("{machineName}", data.MachineName);

    const request = {
        method: "get",

        headers: {
            "Content-Type": "application/json",
        },

    };

    return base({ url: url, request });
}

// interfaccia api per eseguire l'accesso all'applicazione
const tokenLogin = async ({ request: data }) => {

    const body = {
        GrantType: 'Password',
        MachineName: data.MachineName,
        ...data,
    };
      

    const request = {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body),
    };

    return base({ url: URL_LOGIN, request });
};










// =======================================================




// dati predefiniti della request
const IP = '1.1.1.1';









export const tokenRefresh = async ({ request: data }) => {
  const body = {
    GrantType: 'RefreshToken',
    ...data,
  };

  const request = {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body),
  };

  return base({ url: '/api/v1/Token', request });
};


export const tokenSessionCheck = async ({ headers, params }) => {
  const request = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  return base({ url: `/api/v1/Token/:sessionId`, request, params });
};

// export const tokenSessionInfo = async ({ headers, params, request: data }) => {
//   const request = {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json",
//       ...headers,
//     },
//     body: JSON.stringify(data),
//   };

//   return base({ url: `/api/v1/Token/:sessionId`, request, params });
// };
