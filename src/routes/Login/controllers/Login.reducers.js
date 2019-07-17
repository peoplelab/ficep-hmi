import { createReducer } from '../../../generators/reducers';
import { types } from './Login.actions';
import initialState from './Login.store';


const actionHandlers = {
	[types.ON_CHANGE]: (state, { payload }) => {
    const { form, ...rest } = state;
    const { name, value } = payload;

    form[name] = value;

    return { ...rest, form };
  },
	// [types.RESTAPI_RESPONSE_OK]: (state, { response }) => ({
  //   ...state,
  //   logged: {
  //     status: response.status,
  //     data: response.data,
  //   },
  // }),
	[types.DATA_FOR_VIEW]: (state, { payload }) => ({
    ...state,
    logged: {
      status: payload.status,
      data: payload.data,
    },
  }),
	[types.RESTAPI_RESPONSE_KO]: (state, { error }) => ({ ...state, error }),
};


const reducer = createReducer(actionHandlers, initialState);
export default reducer;
