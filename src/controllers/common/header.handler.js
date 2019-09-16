import store from '../../store/redux.store';
import { pathOr } from '../../utils/path';


// definizione degli header
export const headersHanlder = () => {
  const state = store.getState();

  return ({
    Authorization: `Bearer ${pathOr('', ['session', 'accessToken'], state)}`,
    Session: pathOr('', ['session', 'sessionId'], state),
  });
};
