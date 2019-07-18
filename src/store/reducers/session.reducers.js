import { createReducer } from '../../commons/reducers';
import { types } from '../actions/session.actions';
import initialState from './Login.store';


const actionHandlers = {
	[types.SET_SESSION]: (state, { payload }) => ({
    ...state,
    logged: {
      status: payload.status,
      data: payload.data,
    },
  }),
};


const reducer = createReducer(actionHandlers, initialState);
export default reducer;
