
import { combineReducers } from 'redux'; // Import dei componneti di redux
import { reducer as sessionReducer } from './session.store';    // Import del reducer della sessione per la gestione dello store
import { reducer as modalReducer } from './modal.store';    // Import del reducer delle modali per la gestione dello store


const reducers = combineReducers({
  session: sessionReducer,
  modal: modalReducer,
});


export default reducers;