//----------------------------------------------------------------------------------------
// File: users.controller.js
//
// Path: /src/controllers/users/users.controller
//----------------------------------------------------------------------------------------


import {
    Groups as mGroups,
    groupPermissions,
} from '../../../models/api/groups.model';

import { base } from '../../common/controller.base';
//import { groupList, groupPermissions, /* groupExport */ } from '../../../models/api/groups.model';



// Interface
export const Group = {
    GetList: (dispatch) => { return callGroupsList(dispatch); }                    // Lista Gruppi
};


// Private methods
const callGroupsList = async ({ dispatch }) => {
    // recupera la lista degli utenti da inviare alla view
    base({

        api: mGroups.List,

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
        },

        odata: true
    });
};









// -------------------

//const callGroupList = async ({ dispatch }) => {
//// recupera la lista dei gruppi da inviare alla view
//  base({
//    api: groupList,
//    success: ({ dataprocessed }) => {
//      const groups = dataprocessed.result.map(item => ({
//        id: item.Id,
//        code: item.Code,
//        description: item.Description,
//      }));
//      dispatch({ groups });
//    },
//    failure: () => {
//      dispatch({ groups: [] });
//    }
//  });
//};

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


