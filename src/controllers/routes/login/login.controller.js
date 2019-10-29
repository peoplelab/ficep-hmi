//----------------------------------------------------------------------------------------
// File: login.controller.js
//
// Path: /src/controllers/login/login.controller
//----------------------------------------------------------------------------------------


import { apiCultureGet } from '../../../models/api/cultures.model';
import history from '../../../models/history/history';
import store from '../../../store/redux.store';
import { types } from '../../../store/session.store';
import { base } from '../../common/controller.base';
import { callGetTranslations } from '../../api/translations.controller';


import {
    Token as mToken,
    tokenLogin, 
} from '../../../models/api/token.model';


// Interface
export const Login = {
    Last: (dispatch) => { return callLastLogin(dispatch); },                                         // Lista Ultime login
};




// richiesta per il recupero della lista degli ultimi accessi
const callLastLogin = async ({ dispatch }) => {
    base({

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











// chimata di login e inizializzazione della sessione utente
export const callLogin = async ({ data, dispatch }) => {
  const request = {
    UserName: data.username,
    Password: data.password,
    Culture: data.culture,
  };

  base({
    request,
    api: tokenLogin,
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
            store.dispatch({
              type: types.SET_SESSION,
              payload,
            });

            history.push('/dashboard');
          },
        });
      }
    },
    refresh: false
  });
};

// richiesta per il recupero della lista delle culture da passare alla view
export const callCultureGet = async ({ dispatch }) => {
  base({
    api: apiCultureGet,
    success: ({ dataprocessed }) => {
      const cultureList = dataprocessed.result.map(item => ({
        id: item.id,
        code: item.code,
        description: item.description,
      }));

      dispatch({ cultureList });
    },
    failure: ({ dataraw, error }) => {
      dispatch({ cultureList: [], error: dataraw || error });
    },
    refresh: false
  });
};




// //-------------------------------------------------------------------
// // Login controller: controller for login
// //-------------------------------------------------------------------
// import { apiLogin } from '../../../models/routes/login/login.model';
// // import history from '../../../models/history/history';
// // import { types } from '../../../store/session.store.jsx';


// // call api to do login and set with valid credentials the session storage
// export const callLogin = async ({ data, fn }) => {
//     // const [, dispatch] = context;

//   const request = {
//     UserName: data.username,
//     Password: data.password,
//     Culture: data.culture,
//   };

//   const response = apiLogin(request);

//   const { httpcode, dataraw, error } = await response;

//   fn(httpcode === 200 ? httpcode : dataraw || error);

//   // if (error) {
//   //   dispatch({
//   //     type: types.SESSION_FAILURE,
//   //     payload: error,
//   //   });

//   //   console.log('> login failure');
//   //   console.log(error);
//   // } else if (httpcode === 200) {
//   //   dispatch({
//   //     type: types.SESSION_SUCCESS,
//   //     payload: dataraw,
//   //   });

//   //   console.log('> login success');
//   //   console.log(dataraw);
//   //   history.push('/');
//   // } else {
//   //   dispatch({
//   //     type: types.SESSION_ERROR,
//   //     payload: dataraw,
//   //   });

//   //   console.log('> login error');
//   //   console.log(dataraw);
//   // }
// };
