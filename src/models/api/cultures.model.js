//----------------------------------------------------------------------------------------
// File: cultures.model.js
//
// Path: /src/model/cultures/cultures.model
//----------------------------------------------------------------------------------------

import { base } from '../common/model.base';

const URL_CULTURES_LIST = "/api/v1/cultures";


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
