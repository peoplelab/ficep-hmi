//----------------------------------------------------------------------------------------
// File: SucessModal.view.jsx
//
// Desc: Componente modale, informa l'utente dell'avvenuta conferma di successo dell'operazione richiesta
// Path: /src/components/dialog/SucessModal.view
//----------------------------------------------------------------------------------------


import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../layouts/index.layouts';

import '../../styles/dialog/Dialog.style.scss';


const mapLabels = () => ({ // etichette in lingua
  title: window.intl.modal_success_title,
  message: window.intl.modal_success_message,
  close: window.intl.modal_success_close,
});


class SucessModal extends PureComponent {
    constructor(props) {
        super(props);

        this.onClose = this.onClose.bind(this);
    }

    onClose(event) {
        if (typeof this.props.onSuccess === "function")
        {
            this.props.onSuccess(event);
        }
        this.props.onClose(event);
    }

    render() {
        return (
          <Modal
            open
            className="modal--alert modal--medium dialog"
            messages={({ title: mapLabels().title, close: mapLabels().close })}
            redirect={false}
            header="full"
            footer="alert"
            onClose={this.onClose}
          >
            <div className="dialog__container rows full-size">
              <div className="dialog__content full-width">
                <p className="dialog__message">
                  {mapLabels().message}
                </p>
              </div>
            </div>
          </Modal>
        );
    }
}


/**
 * Define component properties types
 */
SucessModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    onSuccess: PropTypes.func,
};

/**
 * Define default value of component properties
 */
SucessModal.defaultProps = {
    onSuccess:null
};


export default SucessModal;
