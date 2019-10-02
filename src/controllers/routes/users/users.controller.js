//----------------------------------------------------------------------------------------
// File: users.controller.js
//
// Path: /src/controllers/users/users.controller
//----------------------------------------------------------------------------------------


import {
  usersList, usersDetails, usersExport, usersAddToGroup, usersDeleteFromGroup, usersAdd, usersDelete, usersEdit, usersPassword,
} from '../../../models/api/users.model';
import { base } from '../../common/controller.base';
import store from '../../../store/redux.store';
import history from '../../../models/history/history';


// chimata per recuperare la lista degli utenti da inviare alla view
export const callUsersList = async ({ dispatch }) => {
  base({
    api: usersList,
    success: ({ dataprocessed }) => {
      const users = dataprocessed.result.map(user =>({
        id: user.Id,
        firstName: user.FirstName,
        lastName: user.LastName,
        userName: user.UserName,
        password: user.Password,
        isActive: user.IsActive,
        groups: user.Groups.map(group => ({
          id: group.Id,
          code: group.Code,
          description: group.Description,
        })),
        creationDate: user.CreationDate,
      }));

      dispatch({ users });
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
      const user = dataprocessed.result;
      const details = {
        id: user.Id,
        firstName: user.FirstName,
        lastName: user.LastName,
        userName: user.UserName,
        password: user.Password,
        isActive: user.IsActive,
        groups: user.Groups.map(group => ({
          id: group.Id,
          code: group.Code,
          description: group.Description,
        })),
        creationDate: user.CreationDate,
      };

      dispatch({ details });
    },
    failure: () => {
      dispatch({ details: null });
    }
  });
};

// chimata per inviare i dati di una nuova utenza
export const callUsersAdd = async ({ data, fn }) => {
  const request = {
    firstName: data.firstName,
    lastName: data.lastName,
    password: data.password,
    groups: [data.group],
    CanDeleted: true,
  };

  base({
    request,
    api: usersAdd,
    success: ({ dataprocessed }) => {
      if (dataprocessed.responseType === 200) {
        history.push(`${history.location.pathname}/info`);
        fn();
      }
    },
  });
};

// chimata per aggiornare i dati di una utenza
export const callEditUser = async ({ data, fn }) => {
  const request = {
    id: data.idUser,
    firstName: data.firstName,
    lastName: data.lastName,
    isActive: true,
    canBeDeleted: true
  };

  base({
    request,
    api: usersEdit,
    success: ({ dataprocessed }) => {
      if (dataprocessed.responseType === 200) {
        history.push(`${history.location.pathname}/info`);
        fn();
      }
    },
  });
};

// chimata per aggiornare la password di una utenza
export const callUsersPassword = async ({ data, fn }) => {
  const { userId } = store.getState().session;

  const request = {
    userId,
    oldPassword: data.oldPassword,
    newPassword: data.newPassword,
    confirmedPassword: data.confirmPassword
  };

  base({
    request,
    api: usersPassword,
    success: ({ dataprocessed }) => {
      if (dataprocessed.result) {
        history.push('/session-expired');
        history.push(`${history.location.pathname}/info`);
      }
    },
  });
};

// chimata per eliminare un'utenza
export const callUsersDelete = async ({ data, fn }) => {
  const params = { id: data };

  base({
    params,
    api: usersDelete,
    success: () => {
      fn();
    },
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
      if (dataprocessed.result && typeof fn === 'function') {
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
      if (dataprocessed.result && typeof fn === 'function') {
        fn();
      }
    },
    failure: () => {
      dispatch({ response: null });
    }
  });
};
