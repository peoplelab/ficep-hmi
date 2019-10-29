//----------------------------------------------------------------------------------------
// File: config.controller.js
//
// Path: /src/controllers/configuration/config.controller
//----------------------------------------------------------------------------------------


import { Config as mConfig } from '../../models/configuration/config.model';
import store from '../../store/redux.store';
import { types } from '../../store/config.store';


// restituisce l'oggetto config contenuto nel Redux store
const getConfig = () => store.getState().config;

// verifica che l'oggetto config abbia almeno una chiave
const checkConfig = config => Object.keys(config).length > 0;

// imposta l'oggetto config contenuto nello store
const setConfig = (config) => {
  store.dispatch({
    type: types.SET_CONFIG,
    payload: config,
  });
};


// Ritorna l' oggetto config composto dalle seguenti chiavi:
//    MachineName
const json = async () => {
  let config = getConfig();

  if (!checkConfig(config)) {
    const result = await mConfig.Get();
    config = JSON.parse(result.dataraw);
    setConfig(config);
  }

  return config;
};


// Interface
export const Config = {
  Json: json, // Ritorna l' oggetto config
};
