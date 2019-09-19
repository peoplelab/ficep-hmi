//----------------------------------------------------------------------------------------
// File: login.model.js
//
// Path: /src/model/login/login.model
//----------------------------------------------------------------------------------------


import { base } from '../common/model.base';


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

  return base('/api/v1/Token', request);
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

  return base('/api/v1/Token', request);
};

// interfaccia api per ottenere la lista corrente degli ultimi accessi all'applicazione
export const tokenLastLogin = async () => {
  const body = {
    ip: IP,
    numberOfLogin: 9,
  };

  const request = {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  return base({ url: `/api/v1/odata/Token/latest`, request });
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

export const tokenSessionInfo = async ({ headers, params, request: data }) => {
  const request = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(data),
  };

  return base({ url: `/api/v1/Token/:sessionId`, request, params });
};
