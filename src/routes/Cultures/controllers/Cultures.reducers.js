import { createReducer } from '../../../commons/reducers';
import { types } from './Cultures.actions';
import initialState from './Cultures.store';


const actionHandlers = {
  [types.RESTAPI_CULTURES_GET_SUCCESS]: (state, { response }) => ({
    ...state,
    status: response.status,
    data: response.data,
  }),
  [types.RESTAPI_CULTURES_POST_SUCCESS]: (state, { response, request }) => {
    const { data } = state;

    data.push({
      id: response.data,
      code: request.code,
      description: request.description,
    });

    return {
      ...state,
      status: response.status,
      data,
    };
  },
  [types.RESTAPI_CULTURES_DELETE_SUCCESS]: (state, { response, request }) => {
    if (!response) {
      return state;
    }

    let { data } = state;
    data = data.filter(({ id }) => id !== request.id);

    return {
      ...state,
      status: response.status,
      data,
    };
  },
  [types.RESTAPI_CULTURES_PUT_SUCCESS]: (state, { response, request }) => {
    if (!response) {
      return state;
    }

    let { data } = state;

    const index = data.findIndex(({ id }) => id === request.id);

    data.splice(index, 1, {
      id: request.id,
      code: request.code,
      description: request.description,
    });

    return {
      ...state,
      status: response.status,
      data,
    };
  },
};


const reducer = createReducer(actionHandlers, initialState);
export default reducer;
