//----------------------------------------------------------------------------------------
// File: Router.js
//
// Desc: Definizione delle routes mappate dell'applicazione
// Path: /src/components/routes
//----------------------------------------------------------------------------------------

import lazy from '../components/common/AsyncComponent';


// Lista delle rotte dell'applicativo
const createRoutes = () => ({
  // Lista delle pagine pubbliche
  // primary: [],

  // Lista delle pagine pubbliche di supporto
  // secondary: [],

  // Lista delle pagine private
  logged: [
    {
      path: '/tools',
      key: 'Tools',
      exact: false,
      // Store: lazy(() => import(/* webpackChunkName: "Tools" */  '../store/routes/tools.store')),
      Component: lazy(() => import(/* webpackChunkName: "Tools" */ '../components/routes/tools/tools.view')),
    },
    {
      path: '/programs',
      key: 'Programs',
      exact: false,
      Component: lazy(() => import(/* webpackChunkName: "Programs" */ '../components/routes/programs/programs.view')),
    },
    {
      path: '/settings',
      key: 'Settings',
      exact: false,
      Component: lazy(() => import(/* webpackChunkName: "Settings" */ '../components/routes/settings/settings.view')),
    },
    {
      path: '/jog',
      key: 'Jog',
      exact: false,
      Component: lazy(() => import(/* webpackChunkName: "Jog" */ '../components/routes/jog/jog.view')),
    },
    {
      path: '/dashboard',
      key: 'Dashboard',
      exact: false,
      Component: lazy(() => import(/* webpackChunkName: "Dashboard" */ '../components/routes/dashboard/dashboard.view')),
    },
  ],

  // Lista delle pagine private di supporto
  modal: [
    {
      path: '**/users**',  // path valido per qualsiasi percorso contenente /users
      key: 'users',
      exact: false,
      Component: lazy(() => import(/* webpackChunkName: "Modal" */ '../components/modal/UsersList/UsersList.view')),
    },
    {
      path: '**/password**',
      key: 'password',
      exact: false,
      Component: lazy(() => import(/* webpackChunkName: "Modal" */ '../components/modal/ChangePassword/ChangePassword.view')),
    },
    {
      path: '/session-expired',
      key: 'session-expired',
      exact: true,
      Component: lazy(() => import(/* webpackChunkName: "Modal" */ '../components/modal/SessionExpired/SessionExpired.view')),
    },
  ],

  // Contiene la pagina pubblica di login
  login: {
    path: '/',
    key: 'Login',
    exact: false,
    Component: lazy(() => import(/* webpackChunkName: "Login" */ '../components/routes/login/login.view')),
  },

  // Contiene la modale pubblica degli errori
  error:
  {
    path: "**", // path valido per qualsiasi percorso
    key: 'error',
    exact: false,
    Component: lazy(() => import(/* webpackChunkName: "Info" */ '../components/modal/ErrorsModal/ErrorsModal.controller')),
  },
  info:
  {
    path: '**/info', // path valido per qualsiasi percorso che precede /info
    key: 'info',
    exact: false,
    Component: lazy(() => import(/* webpackChunkName: "Info" */ '../components/modal/InfoModal/InfoModal.view')),
  },

  /* #start:dev */
  // Contiene la pagina sandbox
  sandbox: {
    path: '/sandbox',
    key: 'Sandbox',
    exact: false,
    Component: lazy(() => import(/* webpackChunkName: "Sandbox" */ '../sandbox/sandbox.view')),
  },
  /* #end:dev */

  // Contiene la landing page da visualizzare in caso venga tornato 404 durante la navigazione
  // route404: {}

  // Lista delle landing page esterne all'applicativo
  // external: [],
});


export default createRoutes;


// {
//   path: '/',   // percorso della pagina
//   key: 'home', // chiave della pagina, necessaria perché possa essere identificata da React
//   exact: true, // se true, richiede che il percorso sia esattamente quello specificato, altrimenti uno simile
//   Store: lazy(() => import(/* webpackChunkName: "[CHUNK_NAME]" */  '[FILE_PATH]')),    // Caricamento asincrono del file relativo allo store context del componente React
//   Component: lazy(() => import(/* webpackChunkName: "[CHUNK_NAME]" */ '[FILE_PATH]')), // Caricamento asincrono del file relativo alla view del componente React
// },
//
// CHUNK_NAME --> nome del file generato da webpack, dove sarà contenuto il codice compilato da caricare in modo asincrono
