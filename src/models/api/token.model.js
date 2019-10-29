//----------------------------------------------------------------------------------------
// File: login.model.js
//
// Path: /src/model/login/login.model
//----------------------------------------------------------------------------------------


import { base } from '../common/model.base';
import { Config as mConfig } from '../configuration/config.model';
import { URL } from 'url';


// Api urls ...
const URL_LOGIN_LIST = "/api/v1/odata/Token/latest/{machineName}?$top=10";


// Interface
export const Token = {
    LastLogins: () => { return tokenLastLogins(); },                // lista delle ultime login
};



// Private methods 

// interfaccia api per ottenere la lista corrente degli ultimi accessi all'applicazione
const tokenLastLogins = async () => {

    const config_dataraw = await mConfig.Get();
    const config_json = JSON.parse(config_dataraw.dataraw);

    const url = URL_LOGIN_LIST.replace("{machineName}", config_json.MachineName);

    const request = {
        method: "get",

        headers: {
            "Content-Type": "application/json",
        },

    };

    return base({ url: url, request });
}






// =======================================================




// dati predefiniti della request
const IP = '1.1.1.1';








// interfaccia dell'api di login per eseguire l'accesso
export const tokenLogin = async ({ request: data }) => {
  const body = {
    GrantType: 'Password',
    IP,
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
