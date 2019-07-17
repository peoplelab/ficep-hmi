import { createReducer } from '../../../commons/reducers';
import { types } from './testModel.actions';
import initialState from './testModel.store';


const actionHandlers = {
  // [types.RESTAPI_CALL]: (state, { payload }) => ({ ...state, ...payload }),
	// [types.RESTAPI_RESPONSE_OK]: (state, { payload }) => ({ ...state, ...payload }),
	[types.RESTAPI_RESPONSE_OK]: (state, { response_dataraw }) => {
    const {
      data,
      page,
      per_page,
      total,
      total_pages,
    } = response_dataraw;


    return {
      ...state,
      page,
      per_page,
      total,
      total_pages,
      data
    };
  },
  [types.RESTAPI_RESPONSE_KO]: (state, { error }) => ({ ...state, ...error }),
  [types.ON_URL_CHANGE]: (state, { payload }) => ({
    ...state,
    url: payload.url
  }),
};


const reducer = createReducer(actionHandlers, initialState);
export default reducer;
