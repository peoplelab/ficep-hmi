
/*
	* Componente ROWITEM. Riga dettaglio di un utente.
	* Props:
	* - value : utente "corrente" (da visualizzare), json composto da:
	*                                                      - id: 0
														- firstName: "",
														- lastName: "",
														- username: "",
														- isActive: true,
														- isLocked: false,
														- creationDate: date,
														- groups: null,
	* - index : indice di riga (non utilizzato, da vedere....)
	- onEdit : evento "bottone Modifica cliccato" ("data" contiene l'id utente)
	- onDelete : evento "bottone Elimina cliccato" ("data" contiene l'id utente)
*/



import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { ButtonData } from '../../layouts/index.layouts';
//import { SetStore } from '../../forms-context/index.form';
//import { callUsersDetails, callUsersDelete } from '../../../controllers/routes/users/users.controller';

//import '../../../styles/modal/UsersList.style.scss';


class RowItem extends Component {

    // etichette in lingua
    _labels = {
        yes: window.intl.users_field_enable,
        no: window.intl.users_field_disable,
        update: window.intl.users_field_update,
        delete: window.intl.users_field_delete,
        groups: {
            ADMIN: window.intl.users_role_administrator,
            SUPERUSER: window.intl.users_role_technician,
            USER: window.intl.users_role_operator
        },
    };

    constructor(props) {
        super(props);
    }

    onSelect() { console.log(this.props); }


    render() {
        const { value, index } = this.props;
        const {
            id,
            firstName,
            lastName,
            userName,
            //   isActive,
            //  isLocked,
            userStatus,
            creationDate,
            groups,
        } = value;

        const [{ code }] = groups;

        // const active = isActive ? this._labels.yes : this._labels.no;
        const active = (userStatus == 1) ? this._labels.yes : this._labels.no;
        const creation_date = creationDate.split(/T|\..*/).join(' ');

        const editbtn_classname = "btn btn-std btn-light " + ((userStatus == 1 || userStatus == 2) ? "show" : "hidden");
        const deletebtn_classname = "btn btn-std btn-midGrey " + ((userStatus == 1) ? "show" : "hidden");

        return (
            <Fragment key={`table-row-${index}`} >
                {/* Cognome */}
                <td className="cell-std">{firstName}</td>
                {/* Nome */}
                <td className="cell-std">{lastName}</td>
                {/* Username */}
                <td className="cell-std bold">{userName}</td>

                <td className="cell-std textCenter">
                    <ButtonData className="btn btn-std btn-midGrey" data={value} onClick={this.props.onActive} >
                        {active}
                    </ButtonData>
                </td>
                {/* Data di creazione */}
                <td className="cell-std textCenter">{creation_date}</td>
                {/* Ruolo */}
                <td className="cell-std">{this._labels.groups[code]}</td>
                {/* Pulsante "Modifica" */}
                <td className="cell-std">
                    <ButtonData className={editbtn_classname} data={id} onClick={this.props.onEdit} >
                        {this._labels.update}
                    </ButtonData>
                </td>
                {/* Pulsante "Elimina" */}
                <td className="cell-std">
                    <ButtonData className={deletebtn_classname} data={id} onClick={this.props.onDelete} >
                        {this._labels.delete}
                    </ButtonData>
                </td>
            </Fragment>
        );
    }
}


const shapeValue = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    //	isActive    : PropTypes.bool.isRequired,
    userStatus: PropTypes.number.isRequired,
    creationDate: PropTypes.string.isRequired,
    groups: PropTypes.arrayOf(PropTypes.object).isRequired,
};


//
// * Define component properties types *
//
RowItem.propTypes = {
    value: PropTypes.shape(shapeValue).isRequired,
    index: PropTypes.number.isRequired,
    onActive: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
};

//
// * Define default value of component properties *
//
RowItem.defaultProps = {
};


export default RowItem;
