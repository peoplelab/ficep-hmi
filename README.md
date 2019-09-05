
# Mitrol

# Versione
Schema
`[release].[feature].[fix]`


## Debug
Indicare, nel file JSON server.config, uno dei seguenti valore nella chiave `LOG_LEVEL`, per abilitare o meno i log del server

| code    |                       |
|---------|-----------------------|
| `debug` | tutti i log abilitati |
| `none`  | log disabilitati      |

## Proxy
Tutte le cliamate client alle API sono intercettate da un proxy, il quale provvede a fare un redirect della chiamata a un url
specifico, indicato all'interno del file JSON server.config, relativo all'ambiente scelto per la chiamata

### API URL (origin)
Tabella degli URL usati per le API in base all'ambiente in cui si vuole testare

| URL                       | Environment |
|---------------------------|-------------|
| http://localhost:4000     | MOCKS       |
| http://192.168.11.40:4000 | DEVELOPMENT |
| http://172.30.57.26:4000  | PRODUCTION  |


## Commands
Lista dei comandi `npm` e `yarn`

``` plain/text
  npm run [command]
  yarn [command]
```

### Lint
Lista dei comandi per la ricerca di errori e warning

* `lint` ricerca di errori e avvisi nel codice JavaScript
* `lint:fix` ricerca di errori e avvisi nel codice JavaScript ed eventuale correzione quando possibile
* `stylelint` ricerca di errori e avvisi nel codice SASS
* `stylelint:fix` ricerca di errori e avvisi nel codice SASS ed eventuale correzione quando possibile

### Mocks
Lista dei comandi per l'uso dei mocks

* `mocks:start` comando per l'avvio diretto del server node, da usare solo in sviluppo
* `mocks:build` comando per la creazione di una build dei mock, da usare solo per i test di produzione

### Release
Lista dei comandi per la creazione di distribuzioni del progetto
* `build` distribuzione per i test
* `dist` distribuzione per la produzione

### Emulazione
Lista dei comandi per l'emulazione in locale del progetto
* `start` Emulazione di un rilascio `build`, i servizi puntano direttamente alle api di Mitrol
* `start:mocks` Emulazione di un rilascio `build`, i servizi puntano al server mock locale


## Alberatura del progetto

### config
Contiene i file per la configurazione globale del progetto per eseguire lo sviluppo e i rilasci

### mocks
Contiene le response di esempio delle api per i test in ambiente locale

### public
Contiene le risorse statiche del progetto

Es:
* favicon.ico
* index.html

### server
Contine i server per eseguire e/o testare il progetto; i server saranno eseguiti su localhost, ognuno rispettivamente alla porta indicata all'interno del file JSON server.config

### src
Contiene le risorse del progetto

#### src/index.js
Entry point dell'applicativo

#### src/components
Contiene i file view dei componenti React

#### src/containers
Contiene i file per la gestione dell'applicativo

| files | |
|-------|-|
|App.jsx|Gestisce i componenti di configurazione del progetto|
|Main.container.js|Connette il Main.view con lo store globale di Redux
|Main.view.jsx|Gestisce le route da visualizzare e la loro accessibilità da parte dell'utente
|Router.js|Gestisce il recupero asincrono delle route da fornire nel Main

#### src/controllers
Contiene i file controller dei componenti React

#### src/models
Contiene i file model dei componenti React

#### src/presenters
Contiene i file presenter dei componenti React

#### src/store
Contiene lo store globale, relativo alla sessione, dell'applicativo

#### src/styles
Contiene i file di stile dei componenti React


## Organizzazione dei file
Fatta eccezione per `src/controllers` e `src/store`, tutte le directory in src, presentano la stessa alberatura, di seguito riportata
``` plain/text
° [category]
  ° ?[folder]
    ° ?[name]
      ° [name].[category].[js|jsx]
```

oppure \*
``` plain/text
° components
  ° ?[folder]
    ° [name]
      ° [name].view.jsx
      ° [name].item.[item-name].jsx
```

\*: specifico per `src/components`

\*\*: '?' indica un passaggio non obbligatorio


Es:
``` plain/text
° components
  ° routes
    ° login
      ° login.view.jsx
° controllers
  ° routes
    ° login
      ° login.controller.js
° modules
  ° routes
    ° login
      ° login.module.js
° styles
  ° routes
    ° login
      ° login.style.scss
```

## Alberatura dei rilascio

| files              |                                   |
|--------------------|-----------------------------------|
| favicon.ico        | icona dell'applicativo            |
| index.html         | entry point dell'applicativo      |
| server.config.json | file di configurazione del server |
| server.js          | server client                     |
| server.js.map      | map del server                    |

<br />

| folders | contenuto     |
|---------|---------------|
| images  | file immagine |
| map     | file .map     |
| scripts | file .js      |


## Librerie

### Applicazione

| package               |                                                              |
|-----------------------|--------------------------------------------------------------|
| @hot-loader/react-dom | DOM virtuale per l'hot-reloading \*                          |
| prop-types            | Definizione dei tipi delle proprietà dei componenti React    |
| react                 | Framework per la gestione della view dell'applicativo        |
| react-dom             | DOM virtuale di React                                        |
| react-hot-loader      | abilita l'hot-reload dell'applicativo durante lo sviluppo \* |
| react-intl            | internazionalizzazione dell'applicazione                     |
| react-redux           | connette react allo store                                    |
| react-router          | router di navigazione                                        |
| react-router-dom      | DOM virtuale del router                                      |
| redux                 | store globale                                                |

\* per funzionare correttamente, la libreria non può essere spostata tra quelle di sviluppo

### Sviluppo

#### Codifica

| package                                      |                                                                        |
|----------------------------------------------|------------------------------------------------------------------------|
| better-npm-run                               | gestione semplificata delle variabili CLI (NPM)                        |
| body-parser                                  | gestione del body della request (server)                               |
| eslint                                       | linter JS                                                              |
| eslint-loader                                | linter JS                                                              |
| eslint-plugin-import                         | linter JS                                                              |
| eslint-plugin-jsx-a11y                       | linter React JSX                                                       |
| eslint-plugin-react                          | linter React JSX                                                       |
| eslint-plugin-react-hooks                    | linter React JSX                                                       |
| moment                                       | libreria per la gestione semplificata dell'oggetto Date                |
| stylelint                                    | linter CSS                                                             |
| stylelint-scss                               | linter SCSS                                                            |
| stylelint-selector-bem-pattern               | linter pattern CSS                                                     |
| uuid                                         | ID univoco                                                             |


#### Compilazione

| package                                      |                                                                        |
|----------------------------------------------|------------------------------------------------------------------------|
| @babel/core                                  | transpiler del codice (Babel)                                          |
| @babel/plugin-proposal-class-properties      | transpiler del codice (Babel)                                          |
| @babel/plugin-proposal-export-namespace-from | transpiler del codice (Babel)                                          |
| @babel/plugin-proposal-throw-expressions     | transpiler del codice (Babel)                                          |
| @babel/plugin-syntax-dynamic-impor           | transpiler del codice (Babel)                                          |
| @babel/plugin-transform-spread               | transpiler del codice (Babel)                                          |
| @babel/polyfill                              | transpiler del codice (Babel)                                          |
| @babel/preset-env                            | transpiler del codice (Babel)                                          |
| @babel/preset-react                          | transpiler del codice (Babel)                                          |
| autoprefixer                                 | normalizzazione prefissi CSS                                           |
| babel-eslint                                 | linter Babel                                                           |
| babel-loader                                 | transpiler del codice, connetter Babel a Webpack                       |
| clean-webpack-plugin                         | ad ogni compilazione, rimuove i file del precedente rilascio (builder) |
| css-loader                                   | gestione codice CSS (builder)                                          |
| file-loader                                  | gestione risorse pubbliche (builder)                                   |
| html-webpack-plugin                          | Crea un index.html da un template (builder)                            |
| node-sass                                    | conversione SASS in CSS (NODE)                                         |
| postcss                                      | normalizzazione CSS                                                    |
| postcss-loader                               | normalizzazione CSS (builder)                                          |
| sass-loader                                  | conversione SASS in CSS (builder)                                      |
| style-loader                                 | caricamento codice CSS da modulo JS (builder)                          |
| url-loader                                   | converte le risorse pubbliche indicate in BASE64 (builder)             |
| webpack                                      | builder dell'applicazione                                              |
| webpack-cli                                  | comandi CLI per Webpack (NPM)                                          |
| webpack-merge                                | unisce due configurazioni in un unico oggetto (builder)                |

#### Debug

| package                                      |                                                                        |
|----------------------------------------------|------------------------------------------------------------------------|
| nodemon                                      | refresh automatico del server                                          |
| webpack-dev-middleware                       | connette Webpack al server Express                                     |
| webpack-hot-middleware                       | abilita l'hot-reload di Webpack con Express                            |

#### Distribuzione

| package                                      |                                                                        |
|----------------------------------------------|------------------------------------------------------------------------|
| compression                                  | compressione GZIP (server)                                             |
| express                                      | server                                                                 |
| express-http-proxy                           | proxy (server)                                                         |
