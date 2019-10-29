//----------------------------------------------------------------------------------------
// File: login.controller.js
//
// Path: /src/controllers/login/login.controller
//----------------------------------------------------------------------------------------


// import { apiCultureGet } from '../../../models/api/cultures.model';
import history from '../../../models/history/history';
// import store from '../../../store/redux.store';
// import { types } from '../../../store/session.store';
import { base } from '../../common/controller.base';
import { callGetTranslations } from '../../api/translations.controller';


import { Token as mToken   }         from '../../../models/api/token.model';
import { Config as cConfig }         from '../../configuration/config.controller';
import { LoggedUser as cLoggedUser } from '../../session/loggeduser.controller';



// Interface
export const Login = {
    Last: (dispatch) => { return callLastLogin(dispatch); },                    // Lista Ultime login
    LoginUser: (data, dispatch) => { return callLogin({ data, dispatch }); }    // Login utente
};



// Private methods 


// richiesta per il recupero della lista degli ultimi accessi
const callLastLogin = async ({ dispatch }) => {

    const settings = await cConfig.Json();

    const request = {
        MachineName: settings.MachineName
    };

    base({

        request,

        api: mToken.LastLogins,

        success: ({ dataprocessed }) => {

            const usersList = dataprocessed.result.map(item => ({
                firstName: item.FirstName,
                lastName: item.LastName,
                username: item.UserName,
                groups: item.Groups,
                issuedAt: item.IssuedAt,
                culture: item.Culture,
            }));

            dispatch({ usersList });
        },

        failure: () => {
            dispatch({ usersList: [] });
        },

        odata: true
    });
};

// login e inizializzazione della sessione utente
const callLogin = async ({ data, dispatch }) => {

    const settings = await cConfig.Json();

    const request = {
        UserName: data.username,
        Password: data.password,
        Culture: data.culture,
        MachineName: settings.MachineName
    };

    base({

        request,

        api: mToken.Login,

        success: ({ dataprocessed }) => {

            const { responseType } = dataprocessed;

            const item = dataprocessed.result;
            const payload = {
                ...dataprocessed,
                result: {
                    username: item.Username,
                    accessToken: item.AccessToken,
                    refreshToken: item.RefreshToken,
                    culture: item.Culture,
                    groups: item.Groups,
                    permissions: item.Permissions,
                    sessionId: item.SessionId,
                    expiredAt: item.ExpiredAt,
                    sessionLogId: item.SessionLogId,
                    refreshExpiredAt: item.RefreshExpiredAt,
                    issuedAt: item.IssuedAt,
                    userId: item.UserId,
                },
            };

            if (responseType === 200) {
                callGetTranslations({
                    culture: data.culture,
                    callback: () => {
                        //store.dispatch({
                        //    type: types.SET_SESSION,
                        //    payload,
                        //});

                        // set logged user in store
                        cLoggedUser.Set(payload.result);


                        history.push('/dashboard');
                    },
                });
            }
        },

        refresh: false
    });
};
