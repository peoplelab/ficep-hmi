import { createReducer } from '../../commons/reducers';
import { types } from '../actions/session.actions';
import initialState from './Login.store';


const actionHandlers = {
	[types.ON_CHANGE]: (state, { payload }) => {
    const { form, ...rest } = state;
    const { name, value } = payload;

    form[name] = value;

    return { ...rest, form };
  },
	[types.DATA_FOR_VIEW]: (state, { payload }) => ({
    ...state,
    logged: {
      status: payload.status,
      data: payload.data,
    },
  }),
	[types.RESTAPI_LOGIN_KO]: (state, { error }) => ({ ...state, error }),
};


const reducer = createReducer(actionHandlers, initialState);
export default reducer;
