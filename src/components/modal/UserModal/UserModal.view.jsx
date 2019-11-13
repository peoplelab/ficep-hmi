//----------------------------------------------------------------------------------------
// File: UserModal.view.jsx
//
// Desc: Widget modale, contiene le funzionalità specifiche per l'utente
// Path: /src/components/modal/UserModal/UserModal.view
//----------------------------------------------------------------------------------------


import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
// import { Button, Anchor, Link } from '../layouts/index.layouts';
import UserDetails from './UserModal.item.Details';
import UserMain from './UserModal.item.Main';
import { callLogout } from '../../../controllers/api/logout.controller';
import { LoggedUser as cLoggedUser } from '../../../controllers/session/loggeduser.controller';
import { OuterModalClick } from '../../events/index.events';


import '../../../styles/modal/UserModal.style.scss';
import Enum from '../../../utils/Enum';



// Enumeratore dei componenti view della modale
const COMPONENT = Enum.from('MAIN', 'DETAILS');


/*
	Container UserModal. Modale per la gestione del profilo utente.
	Props:
	- open : gestore per l'apertura e chiusura della modale
	- onClose : callback da eseguire durante la chiusura
*/
class UserModal extends Component {
	constructor(props) {
        super(props);

        this.state = { COMPONENT: COMPONENT.MAIN, open: props.open };

		this.onClose = this.onClose.bind(this);
		this.onChangeComponent = this.onChangeComponent.bind(this);
		this.onLogout = this.onLogout.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ open: nextProps.open, component: COMPONENT.MAIN });
    }

    // chiusura della modale
    onClose = (event) => {
        this.setState({ component: COMPONENT.MAIN });
        this.props.onClose(event);
    }

    // forza l'aggiornamento del container modificando il componente da visualizzare
    onChangeComponent = (component) => (event) => {
        this.setState({ component });
    }

    // chimata a logout
	onLogout = (event) => {
        // in assenza di parametri nella funzione del controller, è necessario passare sempre un oggetto vuoto
		callLogout({});
        this.props.onClose(event);
	}


    // render della pagina
	render() {
        const { open } = this.props;
        const { component: componentState } = this.state;

        if (!open) {
            return null;
        }

        let Component;

        switch (componentState) {
            case COMPONENT.MAIN: {
                Component = <UserMain
                    onUserDetails={this.onChangeComponent(COMPONENT.DETAILS)}
                    onUsersList={this.onClose}
                    onLogout={this.onLogout}
                />;
                break;
            }
            case COMPONENT.DETAILS: {
                const data = cLoggedUser.Get();

                const details = {
                    firstname: data.FirstName,
                    lastname: data.LastName,
                    group: data.groups,
                    username: data.username
                };

                Component = <UserDetails onGoBack={this.onChangeComponent(COMPONENT.MAIN)} onChangePassword={this.onClose} details={details} />;
                break;
            }
            default: {
                Component = null;
            }
        }

        // return Component;
        return ReactDOM.createPortal(<OuterModalClick onOuterClick={this.onClose} >{Component}</OuterModalClick>, document.getElementById('modal'));
	}
}


/**
 * Define component properties types
 */
UserModal.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func.isRequired
};

/**
 * Define default value of component properties
 */
UserModal.defaultProps = {
    open: false,
};


export default UserModal;
