//----------------------------------------------------------------------------------------
// File: users.controller.js
// Desc: Controller per la gestione utenti
//
// Path: /src/controllers/users
//----------------------------------------------------------------------------------------


//	import { Users as mUsers } from '../../../models/api/users.model';
//	import { base } from '../../common/controller.base';
//	import { LoggedUser as cLoggedUser } from '../../session/loggeduser.controller';
	import { Users as mUsers } from 'userModel';														// Check: ...
	import { base } from 'cBase'; 																		// Check: ...
	import { LoggedUser as cLoggedUser } from '../../session/loggeduser.controller';					// Check: ...



	// **
	// ** Interface (nomi pubblici) **
	// **
	export const User = {
		GetList       : (dispatch)                    => { return callUsersList(dispatch); },								// Lista Utenti
		Detail        : (data, dispatch)              => { return callUsersDetails(data, dispatch); },						// Dettaglio Utente
		Delete        : (data, onSuccess, onFailed)   => { return callUsersDelete(data, onSuccess, onFailed); },			// Cancellazione Utente
		Save          : (data, onSuccess, onFailed)   => { return callUserSave(data, onSuccess, onFailed); },				// Salvataggio Utente
		ChangePassword: (data, onSuccess, onFailed)   => { return callUserChangePassword(data, onSuccess, onFailed); },		// Cambio password
		ResetPassword : (userId, onSuccess, onFailed) => { return callUserResetPassword(userId, onSuccess, onFailed); },	// Reset password
	};


	// **
	// ** Metodi privati **
	// **

	// FUNCTION: callUsersList
	// Recupera la lista degli utenti da inviare alla view
	const callUsersList = async ({ dispatch }) => {														

		base({
			api    : mUsers.List,
			odata  : true,
			success: ({ dataprocessed }) => {
				const users = dataprocessed.result.map(
					user => ({
						id          : user.Id,
						firstName   : user.FirstName,
						lastName    : user.LastName,
						userName    : user.UserName,
					//	isActive    : user.IsActive,
					//	isLocked    : user.IsLocked,
						userStatus  : user.UserStatus,
						creationDate: user.CreationDate,
						groups      : user.Groups.map(group => ({
							id         : group.id,
							code       : group.code,
							description: group.description,
						})),
					}));

				dispatch({ users });
			},
			failure: () => {
				dispatch({ users: [] });
			},
		});
	};


	// FUNCTION: callUsersDelete
	// Cancellazione dell'utente selezionato
	const callUsersDelete = async ({ data, onSuccess, onFailed }) => {

		const params = { id: data };																	// ID dell'utente
		base({
			params,
			api    : mUsers.Delete,
			success: (response) => {
				if (response.dataprocessed.result === true) {
					onSuccess();
				}
				else {
					onFailed();
				}
			},
		});
	};


	// FUNCTION: callUsersDetails
	// Restituisce i dettagli dell'utente selezionato
	const callUsersDetails = async ({ data, dispatch }) => {

		const params = { id: data };																	// ID dell'utente
		base({
			params,
			api    : mUsers.Detail,
			success: ({ dataprocessed }) => {
				const user = dataprocessed.result;
				const details = {
					Id          : user.Id,
					FirstName   : user.FirstName,
					LastName    : user.LastName,
					UserName    : user.UserName,
					UserStatus  : user.UserStatus,
					CreationDate: user.CreationDate,
					Groups      : user.Groups.map(group => ({
						id         : group.id,
						code       : group.code,
						description: group.description,
					})),
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

	const callUserResetPassword = async ( userId, onSuccess, onFailed ) => {

		const params = {
			id: userId,
		};

		base({
			api: mUsers.ResetPassword,
			params,
			success: (response) => {
				console.log("Controller ResetPassword " );
				console.log(response);
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
