//----------------------------------------------------------------------------------------
// File: cultures.model.js
//
// Path: /src/model/cultures/cultures.model
//----------------------------------------------------------------------------------------

import { base } from '../common/model.base';


// percorso dell'api
const url = '/api/v1/Cultures';

// Api urls ...
const URL_CULTURES_LIST = "/api/v1/cultures";


// interfaccia api per ottenere la lista corrente delle culture
//export const apiCultureGet = async ({ headers }) => {
//  const request = {
//    method: "get",
//    headers: {
//      "Content-Type": "application/json",
//      ...headers,
//    },
//  };

//  return base({ url, request });
//};





// Interface
export const Cultures = {
    List: (headers) => { return culturesList(headers); }                           // lista dei gruppi
};



// Private Methods 

const culturesList = async ({ headers }) => {
    // interfaccia dell'api per ottenere la lista corrente dei gruppi
    const request = {
        method: "get",
        headers: {
            "Content-Type": "application/json",
            ...headers,
        }
    };

    return base({ url: URL_CULTURES_LIST, request });
};



////////////////////////////////////////////////////////da qui in poi si puo cancellare////////////////////////////////////////////////////////////////////////////////////////7
// interfaccia api per aggiungere un nuovo elemento alla lista delle culture
export const apiCulturePost = async ({ headers, request: data }) => {
  const request = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(data),
  };

  return base({ url, request });
};

// interfaccia api per rimuovere un elemento dalla lista delle culture
export const apiCultureDelete = async ({ headers, params }) => {
  const request = {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  return base({ url: `${url}/:id`, request, params });
};

// interfaccia api per aggiornare un elemento specifico della lista delle culture
export const apiCulturePut = async ({ headers, request: data }) => {
  const request = {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(data),
  };

  return base({ url, request });
};
