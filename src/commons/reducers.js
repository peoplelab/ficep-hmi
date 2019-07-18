import { combineReducers } from 'redux';


/**
 * Create new store reducers, starting from a functions map and an initial state object
 * @param {object} actionHandlers Reducers map by actions
 * @param {object} initialState Inital value of section state
 */
export const createReducer = (actionHandlers, initialState) => (state = initialState, action) => {
  const handler = actionHandlers[action.type];

  return typeof handler === 'function' ? handler(state, action) : state;
};


/**
 * Create a new store reducers map
 * @param {object} globalReducers Syncronous global reducers
 * @param {object} asyncReducers Async route specific reducer
 */
export const reducerConstructor = (globalReducers, asyncReducers) => combineReducers({
  ...globalReducers,
  ...asyncReducers,
});


/**
 * Inject a new asynchronous reducer into the store
 * @param {object} store Redux store
 * @param {object} globalReducers Syncronous global reducers
 */
export const injectAsyncReducers = (store, globalReducers) => /** @param {string} key  @param {function} reducer  */ (key, reducer) => {
  if (key in store.asyncReducers) {
    return;
  }

  store.asyncReducers[key] = reducer; // eslint-disable-line no-param-reassign
  store.replaceReducer(reducerConstructor(globalReducers, store.asyncReducers));
};
