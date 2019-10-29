//----------------------------------------------------------------------------------------
// File: config.model.js
// Path: /src/model/config/config.model
// 
// Interfacciamento file di configurazione applicazione (config.js).
//----------------------------------------------------------------------------------------

import { base } from '../common/model.base';


const URL = "/config.json";


// Interface
export const Config = {
    Get: () => { return getConfigFile(); },                // file di configurazione
};


// Private methods
const getConfigFile = async () => {

    const request = {
        method: "get",
        headers: {
            "Content-Type": "application/json"
        },
    };

    return base({
        url: URL, request });
};
