//----------------------------------------------------------------------------------------
// File: login.model.js
//
// Path: /src/model/login/login.model
//----------------------------------------------------------------------------------------


import { base } from '../../common/model.base';


// dati predefiniti della request
const IP = '1.1.1.1';
const defaultData = {
  GrantType: 'Password',
  IP,
};


// interfaccia dell'api di login per eseguire l'accesso
export const apiLogin = async ({ request: data }) => {
  const body = {
    ...defaultData,
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

// interfaccia api per ottenere la lista corrente delle culture
export const apiCultureGet = async () => {
  const request = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return base('/api/v1/Cultures', request);
};

// interfaccia api per ottenere la lista corrente degli ultimi accessi all'applicazione
export const apiLastLogin = async () => {
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

  return base(`/api/v1/odata/Token/latest`, request);
};
