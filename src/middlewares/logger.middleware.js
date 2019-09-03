// Log di tutte le modifiche allo stato dello store e delle action passate allo store.dispatch
export const logger = store => next => action => {
  console.group(action.type);
  console.log('> prev state', store.getState());
  console.log('> dispatching', action);

  // esecuzione della action e modifica dello stato dello store
  let result = next(action);

  console.log('> next state', store.getState());
  console.groupEnd();

  return result;
};
