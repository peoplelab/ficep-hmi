import { combineReducers } from 'redux';


/**
 * Create new store reducers, starting from a functions map and an initial state object
 * @param {object} actionHandlers
 * @param {object} initialState
 */
export const createReducer = (actionHandlers, initialState) => (state = initialState, action) => {
  const handler = actionHandlers[action.type];

  return typeof handler === 'function' ? handler(state, action) : state;
};


/**
 * Create a new store reducers map
 * @param {object} globalReducers
 * @param {object} asyncReducers
 */
export const reducerConstructor = (globalReducers, asyncReducers) => combineReducers({
  ...globalReducers,
  ...asyncReducers,
});


/**
 * Inject a new asynchronous reducer into the store
 * @param {object} store
 * @param {object} globalReducers
 */
export const injectAsyncReducers = (store, globalReducers) => /** @param {string} key  @param {function} reducer  */ (key, reducer) => {
  if (key in store.asyncReducers) {
    return;
  }

  store.asyncReducers[key] = reducer; // eslint-disable-line no-param-reassign
  store.replaceReducer(reducerConstructor(globalReducers, store.asyncReducers));
};
