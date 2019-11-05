//----------------------------------------------------------------------------------------
// File: loggeduser.controller.js
//
// Controller per la gestione dell'utente loggato (in sessione / store).
// ----------------------------------------------------------------------
// Dati Contenuti:
//
// AccessToken: <string>
// Culture: "it-IT"
// ExpiredAt: "2019-11-05T13:10:06.7130000+01:00"
// Groups: ["ADMIN"]
// IssuedAt: "2019-11-05T11:30:06.7130000+01:00"
// Permissions: ["GROUP_MANAGEMENT", "TOOL_MANAGEMENT", "USER_MANAGEMENT", "VIEW_GROUP", "VIEW_GROUPS", "VIEW_TOOL",…]
// RefreshExpiredAt: "2019-11-05T14:50:06.7130000+01:00"
// RefreshToken: "3c4a9690-ffb7-11e9-a163-e7b318f638a5"
// SessionId: "22c8a3f8-fe91-4956-8add-4ff98b91de54"
// SessionLogId: 10
// UserId: 1
// Username: "admin"
// FirstName: ""
// LastName: ""
//----------------------------------------------------------------------------------------

import store from '../../store/redux.store';
import { types as storeTypes } from '../../store/session.store';
import { Users as mUsers } from '../../models/api/users.model';


// Interface
export const LoggedUser = {
    Get: () => { return getLoggedUser(); },                     // Ritorna l'utente loggato
    Set: (loggedUser) => { return setLoggedUser(loggedUser); }  // Imposta l'utente loggato   
};





// Private Methods


// restituisce l'oggetto loggeduser contenuto nel Redux store
const getLoggedUser = () => store.getState().session.LoggedUser;


// imposta l'oggetto loggeduser contenuto nello store
const setLoggedUser = async (loggedUser) => {


    // bisogna completare i dati provenienti dalla login con quelli del dettaglio utente...
    const { firstName, lastName } = await getAdditionalInfo(loggedUser);

    const payload = {
        ...loggedUser,
        FirstName: firstName,
        LastName: lastName
    };

    store.dispatch({
        type: storeTypes.LOGGED_USER,
        payload: payload,
    });

    // da cancellare non serve, resta solo per far funzionare tutto il resto...
    store.dispatch({
        type: storeTypes.LOGGED_USER_TOBEDELETED,
        payload: payload,
    });

};

const getAdditionalInfo = async (loggedUser) => {

    const id = loggedUser.userId;

    const request = {};
    const params = { id };
    const headers = {
        Authorization: 'Bearer ' + loggedUser.accessToken,
        Session: loggedUser.sessionId,
    };
    const response = mUsers.Detail({ request, headers, params });
    const { httpcode, dataraw } = await response;

    let firstName = "";
    let lastName = "";
    if (httpcode === 200) {
        const json_dataraw = JSON.parse(dataraw);
        firstName = json_dataraw.Result.FirstName;
        lastName = json_dataraw.Result.LastName;
    }

    return {
        firstName, lastName
    };
};


