import { createReducer } from '../../../commons/reducers';
import { types } from './Logout.actions';
import initialState from './Logout.store';


const actionHandlers = {
	[types.ON_LOGOUT_CHANGE]: (state, { payload }) => {
    const { form, ...rest } = state;
    const { name, value } = payload;

    form[name] = value;

    return { ...rest, form };
  },
};


const reducer = createReducer(actionHandlers, initialState);
export default reducer;
