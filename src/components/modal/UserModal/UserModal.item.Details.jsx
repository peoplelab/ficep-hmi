//----------------------------------------------------------------------------------------
// File: UserModal.item.Details.jsx
//
// Desc: Componente di UserModal, visualizza i dati del profilo utente
// Path: /src/components/modal/UserModal/UserModal.item.Details
//----------------------------------------------------------------------------------------


import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Button, Anchor } from '../../layouts/index.layouts';

import * as admin from '../../../../public/icons/ic-user-admin.svg';
import * as technical from '../../../../public/icons/ic-user-technical.svg';
import * as operator from '../../../../public/icons/ic-user-operator.svg';

// converter group to icon
const toIcon = {
  ADMIN: admin,
  SUPERUSER: technical,
  USER: operator,
};


const mapLabels = () => ({ // etichette in lingua
    password: window.intl.user_action_password,
    firstname: window.intl.user_info_firstname,
    lastname: window.intl.user_info_lastname,
    group: window.intl.user_info_group,
    ADMIN: window.intl.user_info_administrator,
    SUPERUSER: window.intl.user_info_technician,
    USER: window.intl.user_info_operator,
    username: window.intl.user_info_username,
});


/*
	Componente UserModalDetails. Componente per la visualizzazione dei dettagli utente e la gestione del profilo.
	Props:
	- onGoBack : callback eseguita al cambio di stato per tornare alla vista principale
	- onChangePassword: callback eseguita all'apertura della modale per il cambio password
    - details : oggetto contente i dettagli del profilo utente
        .username
        .firstname
        .lastname
        .group
*/
const UserModalDetails = (props) => {

    const { onGoBack, onChangePassword, details } = props;

    const [role] = details.group;

    return (
        <>
            <section className="user-modal rows flex-between">

                {/* Go back */}
                <div className="user-modal__content full-width">
                    <Button
                        className="user-modal__go-back btn btn-transparent btn-icon"
                        onClick={onGoBack}
                    >
                        <i className="user-modal__back-icon ic-arrow-link" />
                    </Button>
                </div>

                {/* Scheda profilo */}
                <div className="user-modal__content fill rows full-width">
                    <div className="user-modal__icon-box">
                        <img className="user-modal__icon-profile" src={toIcon[role]} />
                    </div>
                    <p className="user-modal__info">
                        <span>{mapLabels().username}</span>
                        <br/>
                        <span className="margin-l-10">{'\t' + details.username}</span>
                    </p>
                    <p className="user-modal__info">
                        <span>{mapLabels().firstname}</span>
                        <br/>
                        <span className="margin-l-10">{'\t' + details.firstname}</span>
                    </p>
                    <p className="user-modal__info">
                        <span>{mapLabels().lastname}</span>
                        <br/>
                        <span className="margin-l-10">{'\t' + details.lastname}</span>
                    </p>
                    <p className="user-modal__info">
                        <span>{mapLabels().group}</span>
                        <br/>
                        <span className="margin-l-10">{'\t' + mapLabels()[role]}</span>
                    </p>
                </div>

                {/* Pulsante cambio password */}
                <div className="user-modal__content full-width">
                    <Anchor
                        className="user-modal__button anchor text-cc"
                        current
                        path="/password"
                        onClick={onChangePassword}
                    >
                        {mapLabels().password}
                    </Anchor>
                </div>
            </section>
        </>
    );
};


const shapeDetails = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    group: PropTypes.arrayOf(PropTypes.string).isRequired,
    username: PropTypes.string.isRequired,
};


/**
 * Define component properties types
 */
UserModalDetails.propTypes = {
    onGoBack: PropTypes.func.isRequired,
    onChangePassword: PropTypes.func.isRequired,
    details: PropTypes.shape(shapeDetails).isRequired,
};

/**
 * Define default value of component properties
 */
UserModalDetails.defaultProps = {
};


export default memo(UserModalDetails);
