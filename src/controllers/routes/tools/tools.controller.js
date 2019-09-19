//----------------------------------------------------------------------------------------
// File: tools.controller.js
//
// Path: /src/controllers/tools/tools.controller
//----------------------------------------------------------------------------------------


import { apiList, apiDetails } from '../../../models/api/tools.model';
import { base } from '../../common/controller.base';


// chimata per recuperare la lista dei tools da inviare alla view
export const callToolsList = async ({ dispatch }) => {
  base({
    api: apiList,
    success: ({ dataprocessed }) => {
      dispatch({ list: dataprocessed.result });
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
    success: ({ dataprocessed }) => {
      dispatch({ details: dataprocessed.result });
    },
    failure: () => {
      dispatch({ details: {} });
    }
  });
};
