//----------------------------------------------------------------------------------------
// File: cultures.view.jsx
//
// Desc: Pagina per la gestione delle culture
// Path: /src/sandbox/_cultures/cultures.view
//----------------------------------------------------------------------------------------


import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader/root'; // Gestore dell'hot-reloading della route
import { ConfirmModal, ErrorsModal, InfoModal, SucessModal } from '../../components/modal/index.modal';
import Button from '../../components/layouts/Button';


class ModalRoute extends PureComponent {
	constructor(props) {
    super(props);

    this.state = {
      Component: null,
    };

    this.confirmOpen = this.confirmOpen.bind(this);
    this.errorOpen = this.errorOpen.bind(this);
    this.infoOpen = this.infoOpen.bind(this);
    this.successOpen = this.successOpen.bind(this);

    this.onConfirm = this.onConfirm.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  onConfirm() {
    alert('HI!');
  }

  onClose() {
    this.setState({
      Component: null,
    });
  }

  confirmOpen() {
    this.setState({
      Component: (<ConfirmModal open onClose={this.onClose} onConfirm={this.onConfirm} />),
    });
  }

  errorOpen() {
    this.setState({
      Component: (<ErrorsModal open onClose={this.onClose} errorCode={'TEST_GENERIC_ERROR'} errorsList={['TEST_SPECIFIC_ERROR']} />),
    });
  }

  infoOpen() {
    this.setState({
      Component: (<InfoModal open onClose={this.onClose} message="TEST_INFO" />),
    });
  }

  successOpen() {
    this.setState({
      Component: (<SucessModal open onClose={this.onClose} />),
    });
  }

	render() {

    return (
        <section className="test">
          <Button onClick={this.confirmOpen} >Open modal confirm</Button>
          <br />
          <br />
          <Button onClick={this.errorOpen} >Open modal error</Button>
          <br />
          <br />
          <Button onClick={this.infoOpen} >Open modal info</Button>
          <br />
          <br />
          <Button onClick={this.successOpen} >Open modal success</Button>
          <br />
          <br />
          {this.state.Component}
        </section>
    );
	}
}


ModalRoute.propTypes = {
};

ModalRoute.defaultProps = {
};


export default hot(ModalRoute);
