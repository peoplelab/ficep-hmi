// Log di tutte le modifiche allo stato dello store e delle action passate allo store.dispatch
export const logger = store => next => action => {
  const prevTime = new Date();
  const prevState = store.getState();

  // esecuzione della action e modifica dello stato dello store
  let result = next(action);

  const nextTime = new Date();
  const nextState = store.getState();

  console.group('Store','\t', action.type);
  console.table({
    prev: { time: prevTime, action, state: prevState },
    next: { time: nextTime, action: result, state: nextState },
  });
  console.groupEnd();
  return result;
};
