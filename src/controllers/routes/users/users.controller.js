//----------------------------------------------------------------------------------------
// File: users.controller.js
//
// Path: /src/controllers/users/users.controller
//----------------------------------------------------------------------------------------


import { usersList, usersDetails, usersExport } from '../../../models/api/users.model';
import { base } from '../../common/controller.base';


// chimata per recuperare la lista degli utenti da inviare alla view
export const callUsersList = async ({ dispatch }) => {
  base({
    api: usersList,
    success: ({ dataprocessed }) => {
      dispatch({ users: dataprocessed });
    },
    failure: () => {
      dispatch({ users: [] });
    }
  });
};

// chimata per recuperare i dettagli dell'utente da inviare alla view
export const callUsersDetails = async ({ data, dispatch }) => {
  const params = {
    id: data,
  };

  base({
    params,
    api: usersDetails,
    success: ({ dataprocessed }) => {
      dispatch({ details: dataprocessed });
    },
    failure: () => {
      dispatch({ details: null });
    }
  });
};

// chimata per esportare i dettagli dell'utente corrente
export const callUsersExport = async ({ dispatch }) => {
  base({
    api: usersExport,
    success: ({ dataprocessed }) => {
      dispatch({ export: dataprocessed });
    },
    failure: () => {
      dispatch({ export: {} });
    }
  });
};
