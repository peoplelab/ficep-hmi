/**
 * Handle the app asynchronous routes, add the relative reducers into the store and start the sagas watchers
 * @param {React} Component React component
 * @param {string} key Reducer state key
 * @param {Function} reducers Reducers handler
 * @param {Generator} sagas Saga watchers handler
 */
const AsyncRoute = (Component, key, reducers, sagas) => store => {
  /**
   * Inject the async reducer into the store only if defined with an id key
   */
  if (typeof key === 'string' && typeof reducers !== 'undefined') {
    store.injectReducers(key, reducers);
  }

  /**
   * Run sagas watchers only if defined
   */
  if (typeof sagas !== 'undefined') {
    store.sagaRun(sagas);
  }

  return Component;
};


export default AsyncRoute;
