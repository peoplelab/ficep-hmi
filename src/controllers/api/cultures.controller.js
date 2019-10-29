//----------------------------------------------------------------------------------------
// File: cultures.controller.js
//
// Path: /src/controllers/api/cultures.controller
//----------------------------------------------------------------------------------------
import {
    Cultures as mCultures
} from '../../models/api/cultures.model';

import { base } from '../common/controller.base';


// Interface
export const Cultures = {
    GetList: (dispatch) => { return callCulturesGet(dispatch); }                    // Lista Culture(Lingue)
};


// Private methods
const callCulturesGet = async ({ dispatch }) => {
    // recupera la lista degli utenti da inviare alla view
    base({

        api: mCultures.List,

        success: ({ dataprocessed }) => {
            const cultures = dataprocessed.result.map(item => ({
                id: item.Id,
                code: item.Code,
                description: item.Description,
            }));
            console.log(cultures);
            dispatch({ cultures });
        },

        failure: () => {
            dispatch({ cultures: [] });
        },

        odata: true
    });
};

