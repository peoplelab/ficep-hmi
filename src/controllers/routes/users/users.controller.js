//----------------------------------------------------------------------------------------
// File: users.controller.js
//
// Path: /src/controllers/users/users.controller
//----------------------------------------------------------------------------------------


import { apiList } from '../../../models/routes/users/users.model';
import { base } from '../../common/controller.base';


// chimata per recuperare la lista degli utenti da inviare alla view
export const callUsersList = async ({ dispatch }) => {
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
