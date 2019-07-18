import { createReducer } from '../../commons/reducers';
import { types } from '../actions/session.actions';
import initialState from '../store/session.store';


const actionHandlers = {
	[types.SESSION_DATA]: (state, { payload }) => ({
    ...state,
    status: payload.status,
    data: payload.data,
  }),
};


const reducer = createReducer(actionHandlers, initialState);
export default reducer;
