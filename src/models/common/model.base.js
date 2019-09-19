//-------------------------------------------------------------------
// File: model.base.js
//
// Desc: Funzione base del model per gestione della comunicazione con le api
//
// input:
//    ° url: stringa di percorso all'api
//    ° request: oggetto request da passare all'api (opzionale)
//
// output (Promise):
//    ° contentType: stringa che specifica il tipo di testo di dataraw (segue il content-type della response http)
//    ° httpcode: codice dello stato http della chimata
//    ° dataraw: dati grezzi della response
//    ° error: oggetto Error tornato in caso sia stato impossibile eseguire la chimata
//
// Path: /src/model/common/model.base
//-------------------------------------------------------------------


const setUrl = (url, params) => Object.keys(params).reduce((acc, id) => {
  const pattern = new RegExp(`:${id}`);
  const newUrl = acc.replace(pattern, params[id]);

  return newUrl;
}, url);


export const base = async ({ url, request, params }) => {
  const table = {};
  try {
    table.request = {
      time: new Date(),
      method: request.method,
      headers: request.headers,
      body: request.body,
      params: params,
    };

    url = setUrl(url, params);

    const response = await fetch(url, request);
    table.response = {
      time: new Date(),
      response,
    };

    const httpcode = response.status;
    const contentType = response.headers.get("content-type");
    const dataraw = await response.text();
    table.success = {
      time: new Date(),
      httpcode,
      contentType,
      dataraw,
    };

    console.group(url);
    console.table({ request: table.request });
    console.table({ response: table.response });
    console.table({ success: table.success });
    console.groupEnd();

    return {
      httpcode,
      contentType,
      dataraw,
    };
  } catch (error) {
    table.error = {
      time: new Date(),
      error,
    };

    console.group(url);
    console.table({ request: table.request });
    console.table({ response: table.response });
    console.table({ error: table.error });
    console.groupEnd();

    return {
      error,
    };
  }
};
