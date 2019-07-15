
# template-core

A template core for React project

## Folders
Contain the core of the project configuration files

### config
Contain the data for a more detailed project configuration

### public
Contain the public resources as favicon or pdf documents

### server
Contain the node server implementation to run on localhost

### src
Contain the project root files
* index.html
* index.js

#### src/api
Contain all functions to handle the api calls

#### src/components
Contain all the common React components of the project

#### src/containers
Contain the core of the app and the handlers of routes and authentication

#### src/generators
Contain all reusable code used to create other functions or classes

#### src/routes
Contain all the project async routes (only the "Home" component should be sync) and the relative store controllers

#### src/store
Contain all the store configuration and the global store controllers

#### src/style
Contain the common styles settings and the scss global variables

#### src/template
Contain the components to set the common routes layout

#### src/tools
Contain generic and reusable code to set variables or objects

#### src/utils
Contain specific and reusable code to set variables or objects

## Files organization
### Component
* [name]
	* index.js
	* [name].container.js (optional)
	* [name].style.js
	* [name].view.jsx


### Route
* [name]
	* index.js
	* component
		* index.js
		* [name].container.js
		* [name].style.js
		* [name].view.jsx
	* controllers
		* actions.js
		* reducers.js
		* sagas.js
	* modules
		* api.js
		* ...

### store
* store
	* index.js
	* actions
		* ...
	* reducers
		* ...
	* sagas
		* ...
