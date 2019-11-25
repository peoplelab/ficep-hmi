//--------------------------------------------------------------------------
// File: UsersList.item.row.jsx
// Desc: Definizione componente ROWITEM. Riga dettaglio di un utente.
//
// Path: /src/components/modals/UserList/
//--------------------------------------------------------------------------

	// ** Scheda Componente **
	// COMPONENT NAME: Rowitem
	//	Riga dettaglio di un utente
	// PROPS:
	//	value    : utente "corrente" (da visualizzare), json composto da:
	//    .id           : 0
	//    .firstName    : "",
	//    .lastName     : "",
	//    .username     : "",
	//    .isActive     : true,
	//    .isLocked     : false,
	//    .creationDate : date,
	//    .groups       : null,
	//	index    : indice di riga (non utilizzato, da vedere....)
	//	onEdit   : evento "bottone Modifica cliccato" ("data" contiene l'id utente)
	//	onDelete : evento "bottone Elimina cliccato" ("data" contiene l'id utente)



	// ** Definizione import **
	import React, { Component, Fragment } from 'react';													// Basic: import React

	import PropTypes      from 'prop-types';
	import ButtonData     from '../../layouts/ButtonData';
	import {ModalHandler} from '../../../controllers/common/modal.handler';
	import ResetPassword  from '../../../widgets/common/ResetPassword';
	//import '../../../styles/modal/UsersList.style.scss';


	// ** Definizione componente **
	class RowItem extends Component {

	//	constructor(props) {																			// Costruttore (In questo caso non serve. Perché?)
	//		super(props);
	//	}


		// ** Definizione testi delle etichette nella lingua corrente **
		_labels = {
			yes   : window.intl.users_field_enable,
			no    : window.intl.users_field_disable,
			update: window.intl.users_field_update,
			delete: window.intl.users_field_delete,
			groups: {
				ADMIN    : window.intl.users_role_administrator,
				SUPERUSER: window.intl.users_role_technician,
				USER     : window.intl.users_role_operator
			},
		};


		// ** Definizione handler eventi **
		onSuccess = (response) => {																		// Evento: Success
			console.log('New Password: ', response.newPassword);
			ModalHandler.Info({																			// Richiama la dialog box "info" visualizzando la nuova password
				message: [' Password: ' + response.newPassword]
			});
		}
		onFailed = (response) => {																		// Evento: Failed
			ModalHandler.Error({																		// Richiama la dialog box "error"
				errorCode : response.dataprocessed.errorCode, 
				errorsList: response.dataprocessed.result
			});
		}
		
		onHover = (event) => {
			console.log('Sei sopra a:', event.attr.data);
		}
		
		// ** Funzione di Render del componente **
		render() {

			// Definizione costanti
			const { value, index } = this.props;														// Lettura valori delle Props
			const {
				id,
				firstName,
				lastName,
				userName,
				userStatus,
				creationDate,
				groups,
			} = value;

			const [{ code }]          = groups;
			const active              = (userStatus == 1) ? this._labels.yes : this._labels.no;
			const creation_date       = creationDate.split(/T|\..*/).join(' ');
			const editbtn_classname   = "btn-std-full btn-light "   + ((userStatus == 1 || userStatus == 2) ? "show" : "hidden");
			const deletebtn_classname = "btn-std-full btn-midGrey " + ((userStatus == 1) ? "show" : "hidden");

			return (
				<Fragment key={`table-row-${index}`} >

					{/* Cognome */}
					<td className="cell-std">{firstName}</td>

					{/* Nome */}
					<td className="cell-std">{lastName}</td>

					{/* Username */}
					<td className="cell-std bold">{userName}</td>

					{/* Attivazione */}
					<td className="cell-std textCenter">
						<ButtonData className="btn btn-std btn-midGrey" data={value} onClick={this.props.onActive} >
							{active}
						</ButtonData>
					</td>
				
					{/* Data di creazione */}
					<td className="cell-std textCenter">{creation_date}</td>
				
					{/* Ruolo */}
					<td className="cell-std">{this._labels.groups[code]}</td>

					{/* Pulsante "ResetPassword" */}
					<td className="cell-std">
						<ResetPassword className="btn btn-std-full btn-dark" data={id} onSuccess={this.onSuccess} onFailed={this.onFailed}/>
					</td>

					{/* Pulsante "Modifica" */}
					<td className="cell-std">
						<ButtonData className={editbtn_classname} data={id} onClick={this.props.onEdit} >
							{this._labels.update}
						</ButtonData>
					</td>
					{/* Pulsante "Elimina" */}
					<td className="cell-std">
						<ButtonData className={deletebtn_classname} data={id} onClick={this.props.onDelete} xyz={'abc-123-' + id} onMouseOver={this.onHover} pippo={id * 10} >
							{this._labels.delete}
						</ButtonData>
					</td>

				</Fragment>
			);
		}
	}


	// ** Definizioni delle Props **
	const shapeValues = {																				// Definizione parz.: tipi degli elementi della Prop "value"
		firstName   : PropTypes.string.isRequired,
		lastName    : PropTypes.string.isRequired,
		userName    : PropTypes.string.isRequired,
		userStatus  : PropTypes.number.isRequired,
		creationDate: PropTypes.string.isRequired,
		groups      : PropTypes.arrayOf(PropTypes.object).isRequired,
	};
	RowItem.propTypes = {																				// Definizione dei tipi delle Props del componente
		value   : PropTypes.shape(shapeValues).isRequired,
		index   : PropTypes.number.isRequired,
		onActive: PropTypes.func.isRequired,
		onDelete: PropTypes.func.isRequired,
		onEdit  : PropTypes.func.isRequired,
	};

	RowItem.defaultProps = {};																			// Definizione valori di default delle Props componente


	export default RowItem;																				// Dichiarazione finale di export della classe componente
