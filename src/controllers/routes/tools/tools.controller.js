//----------------------------------------------------------------------------------------
// File: tools.controller.js
//
// Path: /src/controllers/tools/tools.controller
//----------------------------------------------------------------------------------------


import { apiList, apiDetails } from '../../../models/routes/tools/tools.model';
import { base } from '../../common/controller.base';


// chimata per recuperare la lista dei tools da inviare alla view
export const callToolsList = async ({ dispatch }) => {
  base({
    api: apiList,
    success: ({ jsondata }) => {
      dispatch({ list: jsondata });
    },
    failure: () => {
      dispatch({ list: [] });
    }
  });
};


// chimata per recuperare la lista dei dettagli di un tool da inviare alla view
export const callToolDetails = async ({ data, dispatch }) => {
  const params = {
    id: data
  };

  base({
    params,
    api: apiDetails,
    success: ({ jsondata }) => {
      dispatch({ details: jsondata });
    },
    failure: () => {
      dispatch({ details: {} });
    }
  });
};
