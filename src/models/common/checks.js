//----------------------------------------------------------------------------------------
// File: checks.js
//
// Path: /src/model/common/checks
//----------------------------------------------------------------------------------------


// verifica che il valore passato sia una stringa valida, nel caso venga usata come chiave di un enumeratore
export const isKey = key => typeof key === 'string' && /^[A-Za-z](([A-Za-z\d]|(_|-)(?=[A-Za-z\d]))*[A-Za-z\d])?$/.test(key);

// verifica che il valore passato sia undefined o null
export const isNil = target => target === undefined || target === null;

// verifica che il valore passato sia un oggetto valido
export const isObject = obj => typeof obj === 'object' && obj !== null;
