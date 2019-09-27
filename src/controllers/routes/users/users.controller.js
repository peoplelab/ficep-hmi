//----------------------------------------------------------------------------------------
// File: users.controller.js
//
// Path: /src/controllers/users/users.controller
//----------------------------------------------------------------------------------------


import {
  usersList, usersDetails, usersExport, usersAddToGroup, usersDeleteFromGroup, usersAdd, usersDelete
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

// chimata per inviare i dati di una nuova utenza
export const callUsersAdd = async ({ data, dispatch }) => {
  const request = {
    firstName: data.firstName,
    lastName: data.lastName,
    password: data.password,
    groups: [data.group]
  };

  base({
    request,
    api: usersAdd,
    // success: ({ dataprocessed }) => {
    //   dispatch({ userName: dataprocessed.result });
    // },
    // failure: () => {
    //   dispatch({ userName: null });
    // }
  });
};

// chimata per inviare i dati di una nuova utenza
export const callUsersDelete = async ({ data, dispatch }) => {
  const params = {
    firstName: data.id,
  };

  base({
    params,
    api: usersDelete,
    // success: ({ dataprocessed }) => {
    //   dispatch({ result: dataprocessed.result });
    // },
    // failure: () => {
    //   dispatch({ result: null });
    // }
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
