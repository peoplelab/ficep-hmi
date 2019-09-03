//----------------------------------------------------------------------------------------
// File: session.model.js
//
// Path: /src/model/session.model
//----------------------------------------------------------------------------------------

import { base } from './common/model.base';


// dati predefiniti della request
const defaultData = {
  GrantType: 'RefreshToken',
};


// interfaccia dell'api di login per il refresh della sessione
export const apiRefresh = async ({ request: data }) => {
  const body = {
    ...defaultData,
    ...data,
  };

  const request = {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body),
  };

  return base('/api/v1/Token', request);
};
