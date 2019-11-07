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

// icon handler
const toIcon = {
  ADMIN: admin,
  SUPERUSER: technical,
  USER: operator,
};


// const getTime = (time) => {
//   const [year, month, day, hours, minutes] = time.split(/-|:|T/g);

//   return `${hours}:${minutes} ${day}/${month}/${year}`;
// };

const mapLabels = () => ({ // etichette in lingua
    password: window.intl.user_action_password,
    firstname: window.intl.user_info_firstname,
    lastname: window.intl.user_info_lastname,
    group: window.intl.user_info_group,
    ADMIN: window.intl.user_info_administrator,
    SUPERUSER: window.intl.user_info_technician,
    USER: window.intl.user_info_operator,
    issueat: window.intl.user_info_issueat,
});


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
                        <span>{mapLabels().firstname}</span>{' '}<span>{details.firstname}</span>
                    </p>
                    <p className="user-modal__info">
                        <span>{mapLabels().lastname}</span>{' '}<span>{details.lastname}</span>
                    </p>
                    <p className="user-modal__info">
                        <span>{mapLabels().group}</span>{' '}<span>{mapLabels()[role]}</span>
                    </p>
                    <p className="user-modal__info">
                        <span>{mapLabels().issueat}</span>{' '}<span>{details.issueat}</span>
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
    issueat: PropTypes.string.isRequired,
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
