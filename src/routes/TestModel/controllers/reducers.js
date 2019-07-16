import { createReducer } from '../../../generators/reducers';
import { types } from './actions';


const actionHandlers = {
    [types.RESTAPI_CALL]: (state, { payload }) => ({ ...state, ...payload }),
    [types.RESTAPI_RESPONSE_OK]: (state, { payload }) => ({ ...state, ...payload }),
    [types.RESTAPI_RESPONSE_KO]: (state, { payload }) => ({ ...state, ...payload }),
};


const initialState = {
  data: null,
};


const reducer = createReducer(actionHandlers, initialState);
export default reducer;
