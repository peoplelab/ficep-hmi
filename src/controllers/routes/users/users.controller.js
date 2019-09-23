//----------------------------------------------------------------------------------------
// File: users.controller.js
//
// Path: /src/controllers/users/users.controller
//----------------------------------------------------------------------------------------


import {
  usersList, usersDetails, usersExport, usersAddToGroup, usersDeleteFromGroup
} from '../../../models/api/users.model';
import { base } from '../../common/controller.base';


// chimata per recuperare la lista degli utenti da inviare alla view
export const callUsersList = async ({ dispatch }) => {
  base({
    api: usersList,
    success: ({ dataprocessed }) => {
      dispatch({ users: dataprocessed.result });
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
      dispatch({ details: dataprocessed.result });
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
      dispatch({ export: dataprocessed.result });
    },
    failure: () => {
      dispatch({ export: {} });
    }
  });
};

// chimata per aggiungere un utente ad un gruppo
export const callUsersAddToGroup = async ({ data, dispatch, fn }) => {
  const params = {
    id: data.idUser,
    groupId: data.idGroup,
  };

  base({
    params,
    api: usersAddToGroup,
    success: ({ dataprocessed }) => {
      dispatch({ response: dataprocessed.result });
      if (dataprocessed.result) {
        fn();
      }
    },
    failure: () => {
      dispatch({ response: null });
    }
  });
};

// chimata per rimuovere un utente da un gruppo
export const callUsersDeleteFromGroup = async ({ data, dispatch, fn }) => {
  const params = {
    id: data.idUser,
    groupId: data.idGroup,
  };

  base({
    params,
    api: usersDeleteFromGroup,
    success: ({ dataprocessed }) => {
      dispatch({ response: dataprocessed.result });
      if (dataprocessed.result) {
        fn();
      }
    },
    failure: () => {
      dispatch({ response: null });
    }
  });
};
