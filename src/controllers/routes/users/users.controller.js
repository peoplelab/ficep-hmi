//----------------------------------------------------------------------------------------
// File: users.controller.js
//
// Path: /src/controllers/users/users.controller
//----------------------------------------------------------------------------------------


import { usersList } from '../../../models/api/users.model';
import { base } from '../../common/controller.base';


// chimata per recuperare la lista degli utenti da inviare alla view
export const callUsersList = async ({ dispatch }) => {
  base({
    api: usersList,
    success: ({ dataprocessed }) => {
      dispatch({ list: dataprocessed.result });
    },
    failure: () => {
      dispatch({ list: [] });
    }
  });
};
