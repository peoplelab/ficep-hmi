//----------------------------------------------------------------------------------------
// File: cultures.view.jsx
//
// Desc: Pagina per la gestione delle culture
// Path: /src/sandbox/_cultures/cultures.view
//----------------------------------------------------------------------------------------


import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader/root'; // Gestore dell'hot-reloading della route
import Dialog from '../../components/modal/Dialog/Dialog.view';
import { ConfirmModal, ErrorsModal, InfoModal, SucessModal } from '../../components/modal/index.modal';
import Button from '../../components/layouts/Button';


class ModalRoute extends PureComponent {
	constructor(props) {
    super(props);

    this.state = { open: false };

    this.onOpen = this.onOpen.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }

  onOpen() {
    this.setState(prev => ({ open: true }));
  }

  onClose() {
    this.setState(prev => ({ open: false }));
  }

  onConfirm() {
    alert('HI!');
    console.log('HI!');
    this.setState(prev => ({ open: false }));
  }

	render() {

    return (
        <section className="test">
          <Button onClick={this.onOpen} >Open modal</Button>
          {/* <Dialog open={this.state.open} onClose={this.onClose} /> */}
          <ConfirmModal open={this.state.open} onClose={this.onClose} onConfirm={this.onConfirm} />
          {/* <ErrorsModal open={this.state.open} onClose={this.onClose} errorCode={'TEST_GENERIC_ERROR'} errorsList={['TEST_SPECIFIC_ERROR']} /> */}
          {/* <InfoModal open={this.state.open} onClose={this.onClose}>
            TEST_INFO
          </ InfoModal> */}
          {/* <SucessModal open={this.state.open} onClose={this.onClose} /> */}
        </section>
    );
	}
}


ModalRoute.propTypes = {
};

ModalRoute.defaultProps = {
};


export default hot(ModalRoute);
