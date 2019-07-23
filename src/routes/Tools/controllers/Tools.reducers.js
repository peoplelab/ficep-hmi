import { createReducer } from '../../../commons/reducers';
import { types } from './Tools.actions';
import initialState from './Tools.store';


const actionHandlers = {
  [types.RESTAPI_TOOLS_LIST_SUCCESS]: (state, { response }) => {
    state.list = response;

    return {...state};
  },
  [types.CALL_TOOL_DETAILS]: (state, { payload }) => {
    state.currentID = payload.id;

    return {...state};
  },
  [types.RESTAPI_TOOL_DETAILS_SUCCESS]: (state, { response }) => {
    state.details = response;

    return {...state};
  },
  [types.RESTAPI_TOOL_DETAILS_ERROR]: (state) => {
    state.details = {};

    return {...state};
  },
};


const reducer = createReducer(actionHandlers, initialState);
export default reducer;
