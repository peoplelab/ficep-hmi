//--------------------------------------------------------------------------
// File: modal.store.js
//
// Desc: Definizione reducer di gestione, a livello globale, della sessione
// Path: /src/store/modal.store
//--------------------------------------------------------------------------


import Enum from '../utils/Enum';


// Lista delle tipologie di azioni applicabili allo store
export const types = Enum.from(
	'OPEN_MODAL',
	'CLOSE_MODAL',
);


// Stato iniziale dello store (le chiavi sono copiate dalla response del servizio di login)
const initialState = {
	target: '',
	data: null,
};


// Gestore delle azioni, passate in store.dispatch, usate per poter modificare lo stato corrente dello store
const actionHandlers = {
	[types.OPEN_MODAL]: (state, { payload }) => ({
		...state,
		target: payload.target,
		data  : payload.data,
	}),
	[types.CLOSE_MODAL]: (state, { payload }) => ({
		...initialState
	}),
};


// Inizializzazione del reducer della sessione per poter filtrare le azioni applicate allo store
export const reducer = (state = initialState, action) => {
	const handler = actionHandlers[action.type];
	return typeof handler === 'function' ? handler(state, action) : state;
};
