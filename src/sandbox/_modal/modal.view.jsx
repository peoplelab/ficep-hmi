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

    this.state = {
      confirmOpen: false,
      errorOpen: false,
      infoOpen: false,
      successOpen: false,
    };

    this.onOpen = this.onOpen.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }

  onOpen = (key) => () => {
    this.setState({ [key]: true });
  }

  onClose = (key) => () => {
    this.setState({ [key]: false });
  }

  onConfirm() {
    alert('HI!');
    console.log('HI!');
    this.setState({ confirmOpen: false });
  }

	render() {

    return (
        <section className="test">
          <Button onClick={this.onOpen('confirmOpen')} >Open modal confirm</Button>
          <br />
          <br />
          <Button onClick={this.onOpen('errorOpen')} >Open modal error</Button>
          <br />
          <br />
          <Button onClick={this.onOpen('infoOpen')} >Open modal info</Button>
          <br />
          <br />
          <Button onClick={this.onOpen('successOpen')} >Open modal success</Button>
          <br />
          <br />
          {/* <Dialog open={this.state.open} onClose={this.onClose} /> */}
          <ConfirmModal open={this.state.confirmOpen} onClose={this.onClose('confirmOpen')} onConfirm={this.onConfirm} />
          <ErrorsModal open={this.state.errorOpen} onClose={this.onClose('errorOpen')} errorCode={'TEST_GENERIC_ERROR'} errorsList={['TEST_SPECIFIC_ERROR']} />
          <InfoModal open={this.state.infoOpen} onClose={this.onClose('infoOpen')}>
            TEST_INFO
          </ InfoModal>
          <SucessModal open={this.state.successOpen} onClose={this.onClose('successOpen')} />
        </section>
    );
	}
}


ModalRoute.propTypes = {
};

ModalRoute.defaultProps = {
};


export default hot(ModalRoute);
