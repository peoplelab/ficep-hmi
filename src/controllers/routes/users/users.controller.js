//----------------------------------------------------------------------------------------
// File: users.controller.js
//
// Path: /src/controllers/users/users.controller
//----------------------------------------------------------------------------------------


import {
    Users as mUsers,
    usersExport, usersAddToGroup, usersDeleteFromGroup, usersAdd, usersEdit, usersPassword,
} from '../../../models/api/users.model';

import { base } from '../../common/controller.base';
import store from '../../../store/redux.store';
import history from '../../../models/history/history';
import { ModalHandler } from '../../common/modal.handler';



// Interface
export const User = {
    GetList: (dispatch) => { return callUsersList(dispatch); },                                         // Lista Utenti
    Detail: (data, dispatch) => { return callUsersDetails(data, dispatch); },                         // Dettaglio Utente
    Delete: (data, onSuccess, onFailed) => { return callUsersDelete(data, onSuccess, onFailed); },     // Cancellazione Utente
    Save: (data, onSuccess, onFailed) => { return callUserSave(data, onSuccess, onFailed); },        // Salvataggio Utente
    ChangePassword: (data, onSuccess, onFailed) => { return callUserChangePassword(data, onSuccess, onFailed); }, // cambio password
};




// Private Methods

const callUsersList = async ({ dispatch }) => {
    // recupera la lista degli utenti da inviare alla view
    base({

        api: mUsers.List,

        success: ({ dataprocessed }) => {
            const users = dataprocessed.result.map(
                user => ({
                    id: user.Id,
                    firstName: user.FirstName,
                    lastName: user.LastName,
                    userName: user.UserName,
                    //isActive: user.IsActive,
                    //isLocked: user.IsLocked,
                    userStatus: user.UserStatus,
                    groups: user.Groups.map(group => ({
                        id: group.Id,
                        code: group.Code,
                        description: group.Description,
                    })),
                    creationDate: user.CreationDate,
                }));

            dispatch({ users });
        },

        failure: () => {
            dispatch({ users: [] });
        },

        odata: true
    });
};

const callUsersDelete = async ({ data, onSuccess, onFailed }) => {
    const params = { id: data };

    base({
        params,
        api: mUsers.Delete,
        success: (response) => {
            // result = true => cancellazione ok
            // result = false => cancellazione ko
            if (response.dataprocessed.result === "true") {
                onSuccess();
            }
            else {
                onFailed();
            }
        },
    });
};

const callUsersDetails = async ({ data, dispatch }) => {
    // dettagli dell'utente da inviare alla view
    const params = {
        id: data,
    };

    base({
        params,
        api: mUsers.Detail,
        success: ({ dataprocessed }) => {
            const user = dataprocessed.result;
            const details = {
                id: user.Id,
                firstName: user.FirstName,
                lastName: user.LastName,
                userName: user.UserName,
                // isActive: user.IsActive,
                // isLocked: user.IsLocked,
                userStatus: user.UserStatus,
                groups: user.Groups.map(group => ({
                    id: group.Id,
                })),
                creationDate: user.CreationDate,
            };

            dispatch({ details });
        },
        failure: () => {
            dispatch({ details: null });
        }
    });
};

const callUserSave = async ({ data, onSuccess, onFailed }) => {

    const isValid = validate(data);

    if (isValid.length > 0) return onFailed({
        "dataprocessed": {
            "errorCode": "GENERIC_VALIDATION_ERROR",
            "result": isValid
        }
    });

    // data are valid

    let api = {};
    if (data.id === 0) {
        // create
        api = { api: mUsers.Create };
    } else {
        // update
        api = { api: mUsers.Update };
    }

    base({
        ...api,
        params: data,
        success: (response) => {
            onSuccess(response);
        },
        // onFailed non arriver� mai perch� � gestito nel base.
        //failure: () => {
        //    onFailed();
        //}
    });
};
//funzione controlla validità cdati.
function validate(data) {
    var errorArrayList = [];
    if (data.firstName.length <= 0) { errorArrayList.push('USER_MANAGEMENT_FIRSTNAME_EMPTY'); }
    if (data.lastName.length <= 0) { errorArrayList.push('USER_MANAGEMENT_LASTNAME_EMPTY'); }
    try { if (!((data.id > 0) || ((data.id == 0) && (data.groups[0].id > 0)))) { errorArrayList.push('USER_MANAGEMENT_GROUPS_NOTSPECIFIED'); } } catch { errorArrayList.push('USER_MANAGEMENT_GROUPS_NOTSPECIFIED'); }
    if ((data.id == 0) || ((data.id > 0) && (data.userStatus > 0)));
    return errorArrayList;
}

function passwordValidate(data, userId) {
    var errorArrayList = [];
    if (userId.length <= 0) { errorArrayList.push('USER_CHANGEPASSWORD_INVALIDUSERID'); }
    if (data.oldPassword.length <= 0) { errorArrayList.push('USER_CHANGEPASSWORD_OLDPASSWORD_NOTSPECIFIED'); }
    if (data.newPassword.length <= 0) { errorArrayList.push('USER_CHANGEPASSWORD_NEWPASSWORD_NOTSPECIFIED'); }
    if (data.confirmPassword.length <= 0) { errorArrayList.push('USER_CHANGEPASSWORD_CONFIRMEDPASSWORD_NOTSPECIFIED'); }
    if (data.newPassword.length === data.confirmPassword) { errorArrayList.push('USER_CHANGEPASSWORD_NEWPASSWORD_NOTEQUAL_CONFIRMED'); }
    return errorArrayList;
}



// ---------------------------------------

// chimata per inviare i dati di una nuova utenza
export const callUsersAdd = async ({ data, fn }) => {
    const request = {
        firstName: data.firstName,
        lastName: data.lastName,
        password: data.password,
        groups: [data.group],
        CanDeleted: true,
    };

    base({
        request,
        api: usersAdd,
        success: ({ dataprocessed }) => {
            if (dataprocessed.responseType === 200) {
                history.push(`${history.location.pathname}/info`);
                fn();
            }
        },
    });
};

// chimata per aggiornare i dati di una utenza
export const callEditUser = async ({ data, fn }) => {
    const request = {
        id: data.idUser,
        firstName: data.firstName,
        lastName: data.lastName,
        //  isActive: true,
        //  canBeDeleted: true
        userStatus: data.userStatus
    };

    base({
        request,
        api: usersEdit,
        success: ({ dataprocessed }) => {
            if (dataprocessed.responseType === 200) {
                history.push(`${history.location.pathname}/info`);
                fn();
            }
        },
    });
};

// chimata per aggiornare la password di una utenza
export const callUsersPassword = async ({ data, fn }) => {
    const { userId } = store.getState().session;

    const request = {
        userId,
        oldPassword: data.oldPassword,
        newPassword: data.newPassword,
        confirmedPassword: data.confirmPassword
    };

    base({
        request,
        api: usersPassword,
        success: ({ dataprocessed }) => {
            if (dataprocessed.result) {
                ModalHandler.Session();
            }
        },
    });
};
//funzione cambio password.
const callUserChangePassword = async ({ data, onSuccess, onFailed }) => {
    const { userId } = store.getState().session;
    const isValid = passwordValidate(data, userId);
    if (isValid.length > 0) return onFailed({
        "dataprocessed": {
            "errorCode": "GENERIC_VALIDATION_ERROR",
            "result": isValid
        }
    });
    const request = {
        userId,
        oldPassword: data.oldPassword,
        newPassword: data.newPassword,
        confirmedPassword: data.confirmPassword
    };

    base({
        request,
        api: mUsers.ChangePassword,
        success: (response) => {
            onSuccess(response);
            //
            // da lanciare nel view
            //            if (dataprocessed.result) {
            //   ModalHandler.Session();
            //}
        }
    });
};

// chimata per esportare i dettagli dell'utente corrente
export const callUsersExport = async ({ dispatch }) => {
    base({
        api: usersExport,
        success: ({ dataprocessed }) => {
            dispatch({ export: dataprocessed.result });
        },
        failure: () => {
            dispatch({ export: {} });
        }
    });
};

// chimata per aggiungere un utente ad un gruppo
export const callUsersAddToGroup = async ({ data, dispatch, fn }) => {
    const params = {
        id: data.idUser,
        groupId: data.idGroup,
    };

    base({
        params,
        api: usersAddToGroup,
        success: ({ dataprocessed }) => {
            dispatch({ response: dataprocessed.result });
            if (dataprocessed.result && typeof fn === 'function') {
                fn();
            }
        },
        failure: () => {
            dispatch({ response: null });
        }
    });
};

// chimata per rimuovere un utente da un gruppo
export const callUsersDeleteFromGroup = async ({ data, dispatch, fn }) => {
    const params = {
        id: data.idUser,
        groupId: data.idGroup,
    };

    base({
        params,
        api: usersDeleteFromGroup,
        success: ({ dataprocessed }) => {
            dispatch({ response: dataprocessed.result });
            if (dataprocessed.result && typeof fn === 'function') {
                fn();
            }
        },
        failure: () => {
            dispatch({ response: null });
        }
    });
};
