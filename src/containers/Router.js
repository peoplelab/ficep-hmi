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
      path: '/',
      key: 'dashboard',
      exact: true,
      Component: lazy(() => import(/* webpackChunkName: "Home" */ '../components/routes/home/home.container')),
    },
    {
      path: '/tools',
      key: 'tools',
      exact: true,
      // Store: lazy(() => import(/* webpackChunkName: "Tools" */  '../store/routes/tools.store')),
      Component: lazy(() => import(/* webpackChunkName: "Tools" */ '../components/routes/tools/tools.view')),
    },
    {
      path: '/programs',
      key: 'Programs',
      exact: true,
      // Store: lazy(() => import(/* webpackChunkName: "Cultures" */  '../store/routes/cultures.store')),
      Component: lazy(() => import(/* webpackChunkName: "Cultures" */ '../components/routes/cultures/cultures.view')),
    },
    {
      path: '/settings',
      key: 'Settings',
      exact: true,
      // Store: lazy(() => import(/* webpackChunkName: "Cultures" */  '../store/routes/cultures.store')),
      Component: lazy(() => import(/* webpackChunkName: "Cultures" */ '../components/routes/cultures/cultures.view')),
    },
  ],

  // Lista delle pagine private di supporto
  // messages: [],

  // Contiene la pagina pubblica di login
  login: {
    path: '/',
    key: 'login',
    exact: false,
    Component: lazy(() => import(/* webpackChunkName: "Login" */ '../components/routes/login/login.view')),
  },

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
