//----------------------------------------------------------------------------------------
// File: dataraw.handler.js
//
// Desc: Funzione di gestione globale dei dati grezzi di una response
//
// input:
//    ° contentType: stringa contenente il mime-type della response
//    ° dataraw: response grezza dell'api
//
// output: response elaborata e resa leggibile per altri thread JS
//
// Path: /src/controllers/common/dataraw.handler
//----------------------------------------------------------------------------------------


export const datarawHandler = ({ contentType, dataraw }) => {
  if (!contentType) {
    return {};
  }

  if (contentType.includes("application/json")) {
    const response = JSON.parse(dataraw);

    let dataprocessed;
    if (
      ('ResponseType'
      && 'ErrorCode' in response
      && 'Result' in response)
      || ('responseType' in response
      && 'errorCode' in response
      && 'result' in response)
    ) {
      dataprocessed = {
        responseType: response.ResponseType || response.responseType,
        errorCode: response.ErrorCode || response.errorCode,
        result: response.Result || response.result,
      };
    } else {
      dataprocessed = response;
    }

    return dataprocessed;
  }
};
