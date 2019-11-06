//----------------------------------------------------------------------------------------
// File: users.controller.js
//
// Path: /src/controllers/users/users.controller
//----------------------------------------------------------------------------------------


import { Users as mUsers } from '../../../models/api/users.model';
import { base } from '../../common/controller.base';
import { LoggedUser as cLoggedUser } from '../../session/loggeduser.controller';



// Interface
export const User = {
    GetList: (dispatch) => { return callUsersList(dispatch); },                                                   // Lista Utenti
    Detail: (data, dispatch) => { return callUsersDetails(data, dispatch); },                                     // Dettaglio Utente
    Delete: (data, onSuccess, onFailed) => { return callUsersDelete(data, onSuccess, onFailed); },                // Cancellazione Utente
    Save: (data, onSuccess, onFailed) => { return callUserSave(data, onSuccess, onFailed); },                     // Salvataggio Utente
    ChangePassword: (data, onSuccess, onFailed) => { return callUserChangePassword(data, onSuccess, onFailed); }, // cambio password
    ResetPassword: (data, onSuccess, onFailed) => { return callUserResetPassword(data, onSuccess, onFailed); },   // reset password
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
                        id: group.id,
                        code: group.code,
                        description: group.description,
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
            if (response.dataprocessed.result === true) {
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
                Id: user.Id,
                FirstName: user.FirstName,
                LastName: user.LastName,
                UserName: user.UserName,
                UserStatus: user.UserStatus,
                Groups: user.Groups.map(group => ({
                    id: group.id,
                    code: group.code,
                    description: group.description,
                })),
                CreationDate: user.CreationDate,
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
    if (data.Id === 0) {
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

const callUserChangePassword = async ({ data, onSuccess, onFailed }) => {
    //funzione cambio password.

    const { userId } = cLoggedUser.Get();

    const isValid = validatePassword(data, userId);
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
        }
    });
};

const callUserResetPassword = async ({ data, onSuccess, onFailed }) => {

    base({
        api: mUsers.ResetPassword,
        params: data,
        success: (response) => {
            onSuccess(response);
        },
        // onFailed non arriverà mai perché é gestito nel base.
        //failure: () => {
        //    onFailed(); 
        //}
    });
};

function validate(data) {
    //funzione controlla validità dati.

    var errorArrayList = [];

    if (data.FirstName.length <= 0) { errorArrayList.push('USER_MANAGEMENT_FIRSTNAME_EMPTY'); }

    if (data.LastName.length <= 0) { errorArrayList.push('USER_MANAGEMENT_LASTNAME_EMPTY'); }

    try { if (!((data.Id > 0) || ((data.Id == 0) && (data.Groups[0].id > 0)))) { errorArrayList.push('USER_MANAGEMENT_GROUPS_NOTSPECIFIED'); } } catch { errorArrayList.push('USER_MANAGEMENT_GROUPS_NOTSPECIFIED'); }

    if ((data.Id == 0) || ((data.Id > 0) && (data.UserStatus > 0)));

    return errorArrayList;
}

function validatePassword(data, userId) {

    var errorArrayList = [];

    if (userId.length <= 0) { errorArrayList.push('USER_CHANGEPASSWORD_INVALIDUSERID'); }

    if (data.oldPassword.length <= 0) { errorArrayList.push('USER_CHANGEPASSWORD_OLDPASSWORD_NOTSPECIFIED'); }

    if (data.newPassword.length <= 0) { errorArrayList.push('USER_CHANGEPASSWORD_NEWPASSWORD_NOTSPECIFIED'); }

    if (data.confirmPassword.length <= 0) { errorArrayList.push('USER_CHANGEPASSWORD_CONFIRMEDPASSWORD_NOTSPECIFIED'); }

    if (data.newPassword !== data.confirmPassword) { errorArrayList.push('USER_CHANGEPASSWORD_NEWPASSWORD_NOTEQUAL_CONFIRMED'); }

    return errorArrayList;
}




