//----------------------------------------------------------------------------------------
// File: cultures.controller.js
//
// Path: /src/controllers/cultures/cultures.controller
//----------------------------------------------------------------------------------------


import {
  apiCultureGet,
  apiCulturePost,
  apiCultureDelete,
  apiCulturePut
} from '../../../models/routes/cultures/cultures.model';
import { base } from '../../common/controller.base';


// Gestione e conversione dei dati grezzi della response da inviare alla view
const dataPost = (state, payload) => {
  const { data } = state;

  const newData = [...data, {
    id: payload.id,
    code: payload.code,
    description: payload.description,
  }];

  return { ...state, data: newData };
};

// Gestione e conversione dei dati grezzi della response da inviare alla view
const dataDelete = (state, payload) => {
  if (!payload) {
    return state;
  }

  const { data } = state;
  const newData = data.filter(({ id }) => id !== payload.id);

  return { ...state, data: newData };
};

// Gestione e conversione dei dati grezzi della response da inviare alla view
const dataPut = (state, payload) => {
  if (!payload) {
    return state;
  }

  let { data } = state;

  const index = data.findIndex(item => item.id === payload.id);
  const before = data.slice(0, index);
  const after = data.slice(index + 1, data.length);

  const newData = [...before, {
    id: payload.id,
    code: payload.code,
    description: payload.description,
  }, ...after];

  return { ...state, data: newData };
};


// richiesta per il recupero della lista delle culture da passare alla view
export const callCulturesGet = async ({ dispatch }) => {
  base({
    api: apiCultureGet,
    success: ({ jsondata }) => {
      dispatch({ data: jsondata });
    },
    failure: () => {
      dispatch({ data: [] });
    },
    refresh: false
  });
};

// richiesta per aggiungere una nuova cultura, indicata precedentemente nella view
export const callCulturesPost = async ({ data, dispatch, state }) => {
  const arg = {
    request: {
      code: data.code,
      description: data.description,
    },
    api: apiCulturePost,
    success: ({ jsondata }) => {
      dispatch(dataPost(state, { ...arg.request, id: jsondata }));
    },
    failure: ({ jsondata, error }) => {
      dispatch({ error: jsondata || error });
    }
  };

  base(arg);
};

// richiesta per eliminare una cultura, indicata precedentemente nella view
export const callCulturesDelete = async ({ data, dispatch, state }) => {
  const arg = {
    params: {
      id: data,
    },
    api: apiCultureDelete,
    success: ({ jsondata }) => {
      if (jsondata) {
        dispatch(dataDelete(state, { id: arg.params.id }));
      }
    },
    failure: ({ jsondata, error }) => {
      dispatch({ error: jsondata || error, id: '' });
    }
  };

  base(arg);
};

// richiesta per aggiornare una cultura, indicata precedentemente nella view
export const callCulturesPut = async ({ data, dispatch, state }) => {
  const arg = {
    request: {
      id: data.id,
      code: data.code,
      description: data.description,
    },
    api: apiCulturePut,
    success: ({ jsondata }) => {
      if (jsondata) {
        dispatch(dataPut(state, { ...arg.request }));
      }
    },
    failure: ({ jsondata, error }) => {
      dispatch({
        error: jsondata,
        id: '',
        code: '',
        description: '',
      });
    }
  };

  base(arg);
};
