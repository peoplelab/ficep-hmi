//----------------------------------------------------------------------------------------
// File: dataraw.handler.js
//
// Desc: Funzione di gestione globale dei dati grezzi di una response
//----------------------------------------------------------------------------------------

// Interface
export const DataHandler = {
    Default: ({ contentType, dataraw }) => { return defaultDataHandler({ contentType, dataraw }); },    // Gestore Raw data default (con response type)
    Odata:   ({ contentType, dataraw }) => { return oDataHandler({ contentType, dataraw }); },          // Gestore odata (i dati provengono da una chiamata oData)
};



// Private Methods 

// Gestore RawData default, i dati grezzi contengono una response costituita da responsetype, errorcode e result.
// input:
//    ° contentType: stringa contenente il mime-type della response
//    ° dataraw: response grezza dell'api
const defaultDataHandler = ({ contentType, dataraw }) => {
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


// Gestore oData, i dati grezzi contengono una response formattata secondo lo standard oData, cioè direttamente un array con i dati richiesti.
// input:
//    ° contentType: stringa contenente il mime-type della response
//    ° dataraw: response grezza dell'api
const oDataHandler = ({ contentType, dataraw }) => {
    if (!contentType) {
        return {};
    }

    if (contentType.includes("application/json")) {
        const response = JSON.parse(dataraw);

        const dataprocessed = {
            responseType: 200,
            errorCode: null,
            result: response,
        };

        return dataprocessed;
    }
};
