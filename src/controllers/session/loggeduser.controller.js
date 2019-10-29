//----------------------------------------------------------------------------------------
// File: user.controller.js
//
// Controller per la gestione dell'utente loggato (in sessione / store).
//----------------------------------------------------------------------------------------

import store from '../../store/redux.store';
import { types as storeTypes } from '../../store/session.store';



// Interface
export const LoggedUser = {
    Get: () => { return getLoggedUser(); },                     // Ritorna l'utente loggato
    Set: (loggedUser) => { return setLoggedUser(loggedUser); }  // Imposta l'utente loggato   
};





// Private Methods


// restituisce l'oggetto loggeduser contenuto nel Redux store
const getLoggedUser = () => store.getState().loggedUser;


// imposta l'oggetto loggeduser contenuto nello store
const setLoggedUser = (loggedUser) => {

    store.dispatch({
        type: storeTypes.LOGGED_USER,
        payload: loggedUser,
    });

};


