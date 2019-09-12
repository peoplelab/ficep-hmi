//----------------------------------------------------------------------------------------
// File: UserModal.view.jsx
//
// Desc: Widget modale, contiene le funzionalità specifiche per l'utente
// Path: /src/components/modal/UserModal.view
//----------------------------------------------------------------------------------------


import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import ErrorsModal from '../components/modal/ErrorsModal/ErrorsModal.controller';


const Modals = (props) => (
  // <>
    <ErrorsModal />
  // {/* </> */}
);


/**
 * Define component properties types
 */
Modals.propTypes = {
};

/**
 * Define default value of component properties
 */
Modals.defaultProps = {
};


export default memo(Modals);
