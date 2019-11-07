//----------------------------------------------------------------------------------------
// File: main.item.Details.jsx
//
// Desc: Componente di UserModal, contiene le funzionalità primarie del widget
// Path: /src/components/modal/UserModal/UserModal.item.main
//----------------------------------------------------------------------------------------


import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Button, Anchor, Link } from '../../layouts/index.layouts';
import AdminArea from '../../common/Area/Area.admin'; // gestore della sessione Admin


const mapLabels = () => ({ // etichette in lingua
    details: window.intl.user_info_details,
    management: window.intl.user_info_management,
    logout: window.intl.user_action_logout,
});


/*
	Componente UserModalMain. Componente principale del profilo utente.
	Props:
	- onUserDetails : callback eseguita al cambio di stato per visualizzare i dettagli del profilo utente
	- onUsersList: callback eseguita all'apertura della modale per la gestione delle utenze
	- onLogout : callback eseguita durante il logout
*/
const UserModalMain = (props) => {

    return (
        <>
            {/* Sessione Admin */}
            <AdminArea>
                <section className="user-modal user-modal--admin">
                    <div className="user-modal__bg bg-user-modal-admin" />
                    <Link className="user-modal__link user-modal__link--admin" onClick={props.onUserDetails}>
                        {mapLabels().details}
                    </Link>
                    <Anchor
                        className="user-modal__button-2 anchor text-cc"
                        current
                        path="/users"
                        onClick={props.onUsersList}
                    >
                        {mapLabels().management}
                    </Anchor>
                    <Button className="user-modal__button anchor text-cc" onClick={props.onLogout}>
                        {mapLabels().logout}
                    </Button>
                </section>
            </AdminArea>

            {/* Sessione Super o User */}
            <AdminArea reverse>
                <section className="user-modal">
                    <div className="user-modal__bg bg-user-modal" />
                    <Link className="user-modal__link" onClick={props.onUserDetails} symbol=">">
                        {mapLabels().details}
                    </Link>
                    <Button className="user-modal__button anchor text-cc" onClick={props.onLogout}>
                        {mapLabels().logout}
                    </Button>
                </section>
            </AdminArea>
        </>
    );
};


/**
 * Define component properties types
 */
UserModalMain.propTypes = {
    onUserDetails: PropTypes.func.isRequired,
    onUsersList: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
};

/**
 * Define default value of component properties
 */
UserModalMain.defaultProps = {
};


export default memo(UserModalMain);
