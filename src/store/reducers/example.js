import { createReducer } from '../../generators/reducers';
import { types } from '../actions/example';


const actionHandlers = {
  [types.ACTION_TYPE]: (state, { payload }) => ({ ...state, ...payload }),
};


const initialState = {
  data: null,
};


const reducer = createReducer(actionHandlers, initialState);
export default reducer;
