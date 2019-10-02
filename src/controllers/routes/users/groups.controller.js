//----------------------------------------------------------------------------------------
// File: users.controller.js
//
// Path: /src/controllers/users/users.controller
//----------------------------------------------------------------------------------------


import { groupList, groupPermissions, /* groupExport */ } from '../../../models/api/groups.model';
import { base } from '../../common/controller.base';


// chimata per recuperare la lista dei gruppi da inviare alla view
export const callGroupList = async ({ dispatch }) => {
  base({
    api: groupList,
    success: ({ dataprocessed }) => {
      const groups = dataprocessed.result.map(item => ({
        id: item.Id,
        code: item.Code,
        description: item.Description,
      }));
      dispatch({ groups });
    },
    failure: () => {
      dispatch({ groups: [] });
    }
  });
};

// chimata per recuperare la lista dei permessi da inviare alla view
export const callGroupPermissions = async ({ data, dispatch }) => {
  const params = {
    id: data,
  };

  base({
    params,
    api: groupPermissions,
    success: ({ dataprocessed }) => {
      dispatch({ permissions: dataprocessed.result });
    },
    failure: () => {
      dispatch({ permissions: [] });
    }
  });
};

// // chimata per esportare i dettagli dell'utente corrente
// export const callGroupExport = async ({ dispatch }) => {
//   base({
//     api: groupExport,
//     success: ({ dataprocessed }) => {
//       dispatch({ export: dataprocessed.result });
//     },
//     failure: () => {
//       dispatch({ export: null });
//     }
//   });
// };
