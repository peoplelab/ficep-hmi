import { createReducer } from '../../../commons/reducers';
import { types } from './Login.actions';
import initialState from './Login.store';


/**
 * Handle all Login actions dispached to Redux store that can update the state
 */
const actionHandlers = {
	[types.ON_LOGIN_CHANGE]: (state, { payload }) => {
    const { form, ...rest } = state;
    const { name, value } = payload;

    form[name] = value;

    return { ...rest, form };
  },
};


const reducer = createReducer(actionHandlers, initialState);
export default reducer;
