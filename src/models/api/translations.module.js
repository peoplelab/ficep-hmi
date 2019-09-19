//-----------------------------------------------------------------------
// File: translations.module.js
//
// Desc: Funzione per richiedere al server i testi della cultura indicata
//
// input:
//      ° culture: stringa di testo contenete il valore della cultura
//
// output (Promise):
//      ° translations: oggetto JSON contenente i testi da visualizzare
//
// Path: /src/model/translations.module
//-----------------------------------------------------------------------

import { base } from '../common/model.base';


// interfaccia del servizio locale per il recupero delle traduzioni
export const getTranslations = async ({ params }) => {

  const request = {
    method: "get",
    headers: {
      "Content-Type": "application/json"
    },
  };

  return base(`/translations/${params.section}/${params.culture}.json`, request);
};
