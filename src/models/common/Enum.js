//----------------------------------------------------------------------------------------
// File: Enum.js
//
// Path: /src/model/common/Enum
//----------------------------------------------------------------------------------------


import {
  isKey,
  isObject,
} from './checks';


// classe per la gestione di enumeratori
class Enum {
  // Metodo statico per generare un oggetto enumeratore partendo da una lista di parametri di tipo stringa
  static from(...args) {
    const response = args.every(value => isKey(value));

    return response && args.reduce((acc, value) => ({ ...acc, [value]: value }), {});
  }

  // Metodo statico per generare una lista di stringhe partendo da un oggetto enumeratore
  static to(obj) {
    if (!isObject(obj)) {
      return false;
    }

    const keys = Object.keys(obj);
    const response = keys.every(value => isKey(value) && value === obj[value]);

    return response && keys;
  }
}


export default Enum;
