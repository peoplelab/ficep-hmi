import store from '../../store/redux.store';
import { types } from '../../store/session.store';


export const errorHandler = ({ request, contentType, dataprocessed}) => {
  if (contentType.includes("application/json")) {
    const { responseType } = dataprocessed;

    if (!!responseType && responseType !== 200) {
      store.dispatch({
        type: types.SET_ERROR,
        payload: dataprocessed,
      });
    }
  }
};
