import { createReducer } from '../../commons/reducers';
import { types } from '../actions/session.actions';
import initialState from '../stores/session.store';


const actionHandlers = {
	[types.SESSION_DATA]: (state, { payload }) => ({
    ...state,
    status: payload.status,
    data: payload.data,
  }),
  /* reset session object because logout was called */
  [types.RESTAPI_LOGOUT_SUCCESS]: (state, { payload }) => ({
      ...initialState
  }),
};


const reducer = createReducer(actionHandlers, initialState);
export default reducer;
