//----------------------------------------------------------------------------------------
// File: dialog.controller.js
// Desc: Gestione delle dialog boxes - Controller
//
// Path: /src/components/dialogBoxes/controller
//----------------------------------------------------------------------------------------

	import store   from '../../../store/redux.store';
	import {types} from '../../../store/modal.store';



// ---
// 1 - Definizione Metodi (private)
// ---

	// FUNCTION: successHandler
	//	Visualizza la dialog di successo (OK)
	// PARAMS:
	//	params : eventuali parametri (non ancora gestiti)
	const successHandler = (params) => {

		const { onSuccess } = params || {};
		store.dispatch({
			type   : types.OPEN_MODAL,
			payload: {
				target: 'success',
				data  : { onSuccess }
			}
		});
	};


	// FUNCTION: errorHandler
	//	Visualizza la dialog di errore (KO) coi relativi dati
	// PARAMS:
	//	errorCode  : codice dell'errore generico
	//	errorsList : elenco dei codici di errore specifici
	const errorHandler = ({ errorCode, errorsList }) => {

		store.dispatch({
			type   : types.OPEN_MODAL,
			payload: {
				target: 'error',
				data  : {
					errorCode,
					errorsList,
				}
			}
		});
	};


	// FUNCTION: confirmHandler
	//	Visualizza la dialog di richiesta conferma ("Sì/No")
	// PARAMS:
	//	onConfirm : funzione callback da avviare all'OK dell'utente
	const confirmHandler = ({ onConfirm }) => {

		store.dispatch({
			type   : types.OPEN_MODAL,
			payload: {
				target: 'confirm',
				data  : { onConfirm }
			}
		});
	};


	// FUNCTION: infoHandler
	//	Visualizza la dialog di informazione (messaggio)
	// PARAMS:
	//	message  : stringa delle informazioni da visualizzare
	const infoHandler = ({ message }) => {

		store.dispatch({
			type   : types.OPEN_MODAL,
			payload: {
				target: 'info',
				data  : { message }
			}
		});
	};


	// FUNCTION: expiredSessionHandler
	//	Visualizza la dialog di "Expired Session"
	// PARAMS:
	//	none
	const sessionHandler = () => {

		store.dispatch({
			type   : types.OPEN_MODAL,
			payload: {
				target: 'session-expired',
			}
		});
	};


	// FUNCTION: closeHandler
	//	Chiude la dialog attiva
	// PARAMS:
	//	none
	const closeHandler = () => {

		store.dispatch({
			type: types.CLOSE_MODAL
		});
	};



// ---
// 2 - Chiamate pubbliche dei metodi
// ---
	export const ModalHandler = {

		Success: successHandler,																		// Dialog "OK"// Dialog "OK"
		Error  : errorHandler,																			// Dialog "KO"
		Confirm: confirmHandler,																		// Dialog di conferma ("Sì/No")
		Info   : infoHandler,																			// Dialog "Info"
		Session: sessionHandler,																		// Dialog "Session expired"
		Close  : closeHandler,																			// Chiusura dialog

	};

