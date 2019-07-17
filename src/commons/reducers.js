import { combineReducers } from 'redux';


export const createReducer = (actionHandlers, initialState) => (state = initialState, action) => {
  const handler = actionHandlers[action.type];

  return typeof handler === 'function' ? handler(state, action) : state;
};


export const reducerConstructor = (globalReducers, asyncReducers) => combineReducers({
  ...globalReducers,
  ...asyncReducers,
});


export const injectAsyncReducers = (store, globalReducers) => (key, reducer) => {
  if (key in store.asyncReducers) {
    return;
  }

  store.asyncReducers[key] = reducer; // eslint-disable-line no-param-reassign
  store.replaceReducer(reducerConstructor(globalReducers, store.asyncReducers));
};
